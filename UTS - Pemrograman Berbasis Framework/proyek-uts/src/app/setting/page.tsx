import SetNotif from "@/components/atoms/setNotif";
import DashLayout from "@/components/templates/DashLayout";
import Notif from "@/components/atoms/notif";

const Setting = () => {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-amber-100">
            <DashLayout>
                <div className="flex flex-col rounded-2xl gap-4 bg-white">
                    <div className="flex justify-between">
                        <SetNotif />
                    </div>
                </div>
            </DashLayout>
        </div>
    );
}

export default Setting