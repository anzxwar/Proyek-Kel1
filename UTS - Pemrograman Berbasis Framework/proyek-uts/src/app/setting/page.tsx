import SetNotif from "@/components/atoms/setNotif";
import DashLayout from "@/components/templates/DashLayout";

const Setting = () => {
    return(
        <DashLayout>
            <div >
                <div className="flex flex-col gap-4 bg-gradient-to-r from-yellow-200 to-gray-100">
                    <div className="flex justify-between">
                        <SetNotif/>
                    </div>
                </div>
            </div>
        </DashLayout>
    );
}

export default Setting