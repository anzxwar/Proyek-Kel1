import { Switch } from "antd";
import Link from "next/link";

const SetNotif = () => {
    return(
        <div className="border rounded-lg p-6 bg-white mb-8">
            <h2 className="text-lg font-bold text-blue-700 mb-4">Notification Telegram</h2>
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <Switch defaultChecked={true} />
                        <span className="ml-3 text-black">Mengirimkan Notifikasi Jatuh ke Wali</span>
                    </div>
                 <div className="mt-4">
                    <h3 className="text-md font-bold text-blue-700 mb-2">Tutorial: How to Subscribe to Our Telegram Bot</h3>
                        <ol className="list-decimal text-black list-inside">
                            <li>Open the Telegram app on your phone.</li>
                            <li>Tap on the magnifying glass icon to open the search bar.</li>
                            <li>Type the username of our bot (<Link href="https://t.me/AkuJatuhBot" className="text-blue-500 hover:underline">@AkuJatuhBot</Link>) and select it from the dropdown list.</li>
                            <li>Once you're on the bot's profile, tap on the 'Start' button at the bottom.</li>
                            <li>Follow the instructions provided by the bot to complete the subscription process.</li>
                        </ol>
                </div>
            </div>
        </div>

    );
}

export default SetNotif