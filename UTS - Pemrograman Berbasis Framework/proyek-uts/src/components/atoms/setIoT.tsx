import { Switch } from "antd";

const SetIot = ()  => {
    return(
        <div className="border rounded-lg p-6 bg-white mb-8">
                <h2 className="text-lg font-bold text-blue-700 mb-4">IoT Fall Detection</h2>
                <div className="flex items-center">
                    <Switch />
                    <span className="ml-3">Stop Streaming Data IoT</span>
                </div>
            </div>
    );
}

export default SetIot