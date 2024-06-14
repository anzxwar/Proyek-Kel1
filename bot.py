from telegram import Bot
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
import logging
import paho.mqtt.client as mqtt
import json
from threading import Lock

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

logger = logging.getLogger(__name__)

# Initialize MQTT client
mqtt_client = mqtt.Client()
mqtt_client.connect("34.128.107.144", 1883)

# Initialize global variables and lock
last_fall_message = ""
chat_ids = set()
subscribed = set()
lock = Lock()

# Load chat IDs from a JSON file if exists
try:
    with open('chat_ids.json', 'r') as f:
        chat_ids.update(set(json.load(f)))
except FileNotFoundError:
    pass

# Load subscribed IDs from a JSON file if exists
try:
    with open('subscribed_ids.json', 'r') as f:
        subscribed.update(set(json.load(f)))
except FileNotFoundError:
    pass

# Function to save chat IDs to JSON file
def save_chat_ids():
    with open('chat_ids.json', 'w') as f:
        json.dump(list(chat_ids), f)

# Function to save subscribed IDs to JSON file
def save_subscribed_ids():
    with open('subscribed_ids.json', 'w') as f:
        json.dump(list(subscribed), f)

# Telegram bot token
bot = Bot('6953268438:AAGvy3-4WMaJeRtl0PpYn44HzXwNjNXXWqc')
updater = Updater(bot=bot)

# Dispatcher for handling commands and messages
dispatcher = updater.dispatcher

def start(update, context):
    with lock:
        chat_ids.add(update.effective_chat.id)
        username = update.message.from_user.username
        context.bot.send_message(chat_id=update.effective_chat.id, text="Selamat Datang, " + username + " di Aku Jatuh Bot. Jangan lupa /subscribe untuk mendapatkan notifikasi!")

def subscribe(update, context):
    with lock:
        subscribed.add(update.effective_chat.id)
        username = update.message.from_user.username
        context.bot.send_message(chat_id=update.effective_chat.id, text=username + " telah berlangganan dan akan mendapatkan notifikasi jika terjadi insiden jatuh.")
        save_subscribed_ids()

def status(update, context):
    with lock:
        if update.effective_chat.id in subscribed:
            if last_fall_message:
                context.bot.send_message(chat_id=update.effective_chat.id, text=last_fall_message)
            else:
                context.bot.send_message(chat_id=update.effective_chat.id, text="No fall detected yet.")
        else:
            context.bot.send_message(chat_id=update.effective_chat.id, text="/subscribe dulu lah bang!")

def emergency(update, context):
    emergency_message = """
    Berikut adalah beberapa nomor darurat di Indonesia:

    - Ambulans: 118 atau 119

    Untuk nomor dokter, harap hubungi rumah sakit atau klinik terdekat:

    - dr. Lukman, Sp.KJ; 081230992773 
    """
    context.bot.send_message(chat_id=update.effective_chat.id, text=emergency_message, parse_mode='Markdown')

def unsubscribe(update, context):
    with lock:
        subscribed.discard(update.effective_chat.id)
        context.bot.send_message(chat_id=update.effective_chat.id, text="Kami doakan semoga keluargamu baik baik saja. Aamiin.")
        save_subscribed_ids()

def detect_fall(data):
    if data == "FALL_DETECTED":
        return True
    return False

def handle_message(update, context):
    with lock:
        chat_ids.add(update.effective_chat.id)
        message = update.message.text
        if detect_fall(message):
            for chat_id in chat_ids:
                if chat_id in subscribed:
                    context.bot.send_message(chat_id=chat_id, text="JATUH TERDETEKSI!")

def on_connect(client, userdata, flags, rc):
    logger.info("Connected with result code "+str(rc))
    client.subscribe("esp32/result")

def on_message(client, userdata, msg):
    global last_fall_message
    logger.info(msg.topic+" "+str(msg.payload))
    message = msg.payload.decode()
    last_fall_message = message  # Always update last_fall_message with the latest message
    if "fall" in message:
        with lock:
            for chat_id in subscribed:  # Only send message to subscribed users
                bot.send_message(chat_id=chat_id, text="JATUH TERDETEKSI! Detail Jatuh: " + last_fall_message)

mqtt_client.on_connect = on_connect
mqtt_client.on_message = on_message

mqtt_client.loop_start()

# Command handlers
start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)

subscribe_handler = CommandHandler('subscribe', subscribe)
dispatcher.add_handler(subscribe_handler)

status_handler = CommandHandler('status', status)
dispatcher.add_handler(status_handler)

emergency_handler = CommandHandler('emergency', emergency)
dispatcher.add_handler(emergency_handler)

unsubscribe_handler = CommandHandler('unsubscribe', unsubscribe)
dispatcher.add_handler(unsubscribe_handler)

# Message handler
message_handler = MessageHandler(Filters.text & (~Filters.command), handle_message)
dispatcher.add_handler(message_handler)

# Start polling for Telegram messages
updater.start_polling()

# Run the bot until you press Ctrl-C
updater.idle()

# Ensure to disconnect MQTT client on exit
mqtt_client.loop_stop()
mqtt_client.disconnect()

