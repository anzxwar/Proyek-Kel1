
import DashLayout from "@/components/templates/DashLayout";
import EditProfile from "@/components/templates/EditProfile";

const Account = () => {
    return(
        <DashLayout>
            <div >
                <div className="flex flex-col gap-4">
                    <EditProfile/>
                </div>

            </div>
            
        </DashLayout>
    );
}

export default Account