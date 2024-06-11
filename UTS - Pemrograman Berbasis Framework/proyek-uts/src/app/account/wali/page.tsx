import InfoWaliCards from "@/components/atoms/card";
import EditNavbar from "@/components/atoms/editNavbar";
import DashLayout from "@/components/templates/DashLayout";

const Account = () => {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-amber-100">
            <DashLayout>
                <div >
                    <div className="rounded-2xl flex flex-col gap-4 bg-white">
                        <div className="">
                            <EditNavbar />
                            <InfoWaliCards />
                        </div>
                    </div>
                </div>
            </DashLayout>
        </div>
    );
}

export default Account