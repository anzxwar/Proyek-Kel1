import DashLayout from "@/components/templates/DashLayout";
import EditProfile from "@/components/templates/EditProfile";

const Account = () => {
    return (
        <div className="bg-white">
            <DashLayout>
                <div >
                    <div className="rounded-2xl flex flex-col gap-4 bg-gradient-to-r from-yellow-200 to-gray-100">
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