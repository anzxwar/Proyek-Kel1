import logging
import paho.mqtt.client as mqtt
from telegram import Bot, Update
from telegram.ext import Application, CommandHandler, MessageHandler, ContextTypes, filters

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

logger = logging.getLogger(__name__)

bot_token = '6953268438:AAGvy3-4WMaJeRtl0PpYn44HzXwNjNXXWqc'

chat_ids = set([1265101503, 1505104468])

mqtt_client = mqtt.Client()
mqtt_client.connect("34.128.67.15", 1883)

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    chat_ids.add(update.effective_chat.id)
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Bot telah dimulai. Kirimkan data dari alat IoT Anda.")

def detect_fall(data):
    return data == "FALL_DETECTED"

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    chat_ids.add(update.effective_chat.id)
    message = update.message.text
    if detect_fall(message):
        for chat_id in chat_ids:
            await context.bot.send_message(chat_id=chat_id, text="Jatuh terdeteksi!")

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    client.subscribe("esp32/result")

def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))
    message = msg.payload.decode()
    if detect_fall(message):
        for chat_id in chat_ids:
            bot.send_message(chat_id=chat_id, text="Jatuh terdeteksi!")
    elif "fall" in message.lower():
        for chat_id in chat_ids:
            bot.send_message(chat_id=chat_id, text=message)

mqtt_client.on_connect = on_connect
mqtt_client.on_message = on_message

mqtt_client.loop_start()

async def main() -> None:
    application = Application.builder().token(bot_token).build()

    start_handler = CommandHandler('start', start)
    application.add_handler(start_handler)

    message_handler = MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message)
    application.add_handler(message_handler)

    await application.initialize()
    await application.start()
    await application.updater.start_polling()
    await application.updater.idle()

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
