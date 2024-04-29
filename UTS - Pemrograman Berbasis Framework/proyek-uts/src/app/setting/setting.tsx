import SetIot from "@/components/atoms/setIoT";
import SetNotif from "@/components/atoms/setNotif";
import DashLayout from "@/components/templates/DashLayout";

const Setting = () => {
    return(
        <DashLayout>
            <div >
                <div className="flex flex-col gap-4">
                    <SetNotif/>
                    <SetIot/>
                </div>

            </div>
            
        </DashLayout>
    );
}

export default Setting