"use client"
import EditNavbar from "@/components/atoms/editNavbar";
import getImageByIndex from "@/components/atoms/profilePict";
import DashLayout from "@/components/templates/DashLayout";
import EditWali from "@/components/templates/EditWali";

const selectedImage = getImageByIndex(0);

const waliAccount = () => {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-amber-100">
            <DashLayout>
                <div >
                    <div className="rounded-2xl flex flex-col bg-white">
                    <EditNavbar/>
                        <div className="flex justify-end">
                            <div className="pt-12 pr-12">
                            {selectedImage && (
                                <img src={selectedImage} alt="Selected Profile" className="rounded-full w-24 h-24 object-cover" />
                            )}
                            </div>
                            <EditWali />
                        </div>
                    </div>
                </div>
            </DashLayout>
        </div>
    );
}

export default waliAccount
