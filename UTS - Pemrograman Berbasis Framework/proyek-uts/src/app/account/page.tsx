
import DashLayout from "@/components/templates/DashLayout";
import EditProfile from "@/components/templates/EditProfile";

const Account = () => {
    return(
        <DashLayout>
            <div className="flex-none h-screen">
                <div>
                    <EditProfile/>
                </div>

            </div>
            
        </DashLayout>
    );
}

export default Account