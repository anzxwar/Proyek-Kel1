import { Switch } from "antd";

const SetNotif = () => {
    return(
        <div className="border rounded-lg p-6 bg-white mb-8">
                <h2 className="text-lg font-bold text-blue-700 mb-4">Notification Telegram</h2>
                <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                        <Switch defaultChecked={true} />
                        <span className="ml-3">Mengirimkan Data Kontak Dokter Via Telegram</span>
                    </div>
                    <div className="flex items-center">
                        <Switch defaultChecked={true} />
                        <span className="ml-3">Mengirimkan Notifikasi Jatuh ke Wali</span>
                    </div>
                </div>
        </div>
    );
}

export default SetNotif