import DashLayout from "@/components/templates/DashLayout";
import EditWali from "@/components/templates/EditWali";

const Account = () => {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-amber-100">
            <DashLayout>
                <div >
                    <div className="rounded-2xl flex flex-col gap-4 bg-white">
                        <div className="">
                            <EditWali />
                        </div>
                    </div>
                </div>
            </DashLayout>
        </div>
    );
}

export default Account