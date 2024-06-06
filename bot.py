from telegram import Bot
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
import logging
import paho.mqtt.client as mqtt

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

logger = logging.getLogger(__name__)

bot = Bot('6953268438:AAGvy3-4WMaJeRtl0PpYn44HzXwNjNXXWqc')
updater = Updater(bot=bot)

dispatcher = updater.dispatcher

chat_ids = set([1265101503, 1505104468])

mqtt_client = mqtt.Client()
mqtt_client.connect("34.128.67.15", 1883)

def start(update, context):
    chat_ids.add(update.effective_chat.id)
    context.bot.send_message(chat_id=update.effective_chat.id, text="Bot telah dimulai. Kirimkan data dari alat IoT Anda.")

def detect_fall(data):
    if data == "FALL_DETECTED":
        return True
    return False

def handle_message(update, context):
    chat_ids.add(update.effective_chat.id)
    message = update.message.text
    if detect_fall(message):
        for chat_id in chat_ids:
            context.bot.send_message(chat_id=chat_id, text="Jatuh terdeteksi!")

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    client.subscribe("esp32/result")

def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))
    message = msg.payload.decode()
    if detect_fall(message):
        for chat_id in chat_ids:
            bot.send_message(chat_id=chat_id, text="Jatuh terdeteksi!")
    elif "fall" in message:
        for chat_id in chat_ids:
            bot.send_message(chat_id=chat_id, text=message)

mqtt_client.on_connect = on_connect
mqtt_client.on_message = on_message

mqtt_client.loop_start()

start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)

message_handler = MessageHandler(Filters.text & (~Filters.command), handle_message)
dispatcher.add_handler(message_handler)

updater.start_polling()

updater.idle()