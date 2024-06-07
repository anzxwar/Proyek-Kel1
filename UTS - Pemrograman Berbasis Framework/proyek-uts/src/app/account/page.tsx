import DashLayout from "@/components/templates/DashLayout";
import EditProfile from "@/components/templates/EditProfile";

const Account = () => {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-yellow-100">
            <DashLayout>
                <div >
                    <div className="rounded-2xl flex flex-col gap-4 bg-white">
                        <div className="flex justify-between">
                            <EditProfile />
                        </div>
                    </div>
                </div>
            </DashLayout>
        </div>
    );
}

export default Account