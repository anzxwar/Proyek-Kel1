import DashLayout from "@/components/templates/DashLayout";
import EditProfile from "@/components/templates/EditProfile";
import EditNavbar from "@/components/atoms/editNavbar";

const waliAccount = () => {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-amber-100">
            <DashLayout>
                <div >
                    <div className="rounded-2xl flex flex-col bg-white">
                        <div className="">
                            <EditNavbar />
                            <EditProfile />
                        </div>
                    </div>
                </div>
            </DashLayout>
        </div>
    );
}

export default waliAccount