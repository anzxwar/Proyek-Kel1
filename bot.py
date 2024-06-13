from telegram import Bot
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
import logging
import paho.mqtt.client as mqtt
import json

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

logger = logging.getLogger(__name__)

bot = Bot('6953268438:AAGvy3-4WMaJeRtl0PpYn44HzXwNjNXXWqc')
updater = Updater(bot=bot)

dispatcher = updater.dispatcher

# Load the chat IDs from a JSON file
try:
    with open('chat_ids.json', 'r') as f:
        chat_ids = set(json.load(f))
except FileNotFoundError:
    chat_ids = set()

mqtt_client = mqtt.Client()
mqtt_client.connect("34.128.107.144", 1883)

# Variabel global untuk menyimpan pesan terakhir, status jatuh, dan status berlangganan
last_fall_message = ""
subscribed = set()  # Variabel global untuk menyimpan ID obrolan dari pengguna yang berlangganan

def start(update, context):
    chat_ids.add(update.effective_chat.id)
    username = update.message.from_user.username
    context.bot.send_message(chat_id=update.effective_chat.id, text="Selamat Datang, " + username + " di Aku Jatuh Bot. Jangan lupa /subscribe untuk mendapatkan notifikasi!")

def subscribe(update, context):
    # Add the chat ID to the subscribed set
    subscribed.add(update.effective_chat.id)
    username = update.message.from_user.username
    context.bot.send_message(chat_id=update.effective_chat.id, text=username + " telah berlangganan dan akan mendapatkan notifikasi jika terjadi insiden jatuh.")

def status(update, context):
    if update.effective_chat.id in subscribed:
        if last_fall_message:
            context.bot.send_message(chat_id=update.effective_chat.id, text=last_fall_message)
        else:
            context.bot.send_message(chat_id=update.effective_chat.id, text="No fall detected yet.")
    else:
        context.bot.send_message(chat_id=update.effective_chat.id, text="/subscribe dulu lah bang!")

def unsubscribe(update, context):
    # Remove the chat ID from the subscribed set
    subscribed.remove(update.effective_chat.id)
    context.bot.send_message(chat_id=update.effective_chat.id, text="Kami doakan semoga keluargamu baik baik saja. Aamiin.")

def detect_fall(data):
    if data == "FALL_DETECTED":
        return True
    return False

def handle_message(update, context):
    chat_ids.add(update.effective_chat.id)
    message = update.message.text
    if detect_fall(message):
        for chat_id in chat_ids:
            context.bot.send_message(chat_id=chat_id, text="JATUH TERDETEKSI!")

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    client.subscribe("esp32/result")

def on_message(client, userdata, msg):
    global last_fall_message
    print(msg.topic+" "+str(msg.payload))
    message = msg.payload.decode()
    last_fall_message = message  # Always update last_fall_message with the latest message
    if "fall" in message:
        for chat_id in subscribed:  # Only send message to subscribed users
            bot.send_message(chat_id=chat_id, text="JATUH TERDETEKSI! Detail Jatuh: " + last_fall_message)

mqtt_client.on_connect = on_connect
mqtt_client.on_message = on_message

mqtt_client.loop_start()

start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)

subscribe_handler = CommandHandler('subscribe', subscribe)
dispatcher.add_handler(subscribe_handler)

status_handler = CommandHandler('status', status)
dispatcher.add_handler(status_handler)

unsubscribe_handler = CommandHandler('unsubscribe', unsubscribe)
dispatcher.add_handler(unsubscribe_handler)

message_handler = MessageHandler(Filters.text & (~Filters.command), handle_message)
dispatcher.add_handler(message_handler)

updater.start_polling()

updater.idle()
