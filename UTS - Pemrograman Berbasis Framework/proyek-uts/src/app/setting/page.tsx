import SetNotif from "@/components/atoms/setNotif";
import DashLayout from "@/components/templates/DashLayout";

const Setting = () => {
    return (
        <div className="bg-white">
            <DashLayout>
                <div className="flex flex-col rounded-2xl gap-4 bg-gradient-to-r from-yellow-200 to-gray-100">
                    <div className="flex justify-between">
                        <SetNotif />
                    </div>
                </div>
            </DashLayout>
        </div>
    );
}

export default Setting