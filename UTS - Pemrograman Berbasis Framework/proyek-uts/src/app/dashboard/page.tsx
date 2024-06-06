import InfoWaliCards from "@/components/atoms/card";
import CardDua from "@/components/atoms/card_dua";
import ChartExample from "@/components/atoms/chart";
import Welcome from "@/components/atoms/welcome";
import DashLayout from "@/components/templates/DashLayout";

const bukanDashboard = () => {
    return (
        <DashLayout>
            <div className="h-full w-full">
                <div className="h-full flex flex-col gap-4 bg-gradient-to-r from-yellow-200 to-gray-100">
                    <Welcome />
                    <ChartExample />
                    <div className="flex justify-between">
                        <InfoWaliCards />
                        <CardDua status1="Normal" status2="SOS" status3="Normal" />
                    </div>
                </div>
            </div>
        </DashLayout>
    );
}

const Dashboard = () => {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-yellow-100">
            <DashLayout>
                <div className="h-full">
                    <div className="h-full flex flex-col gap-6 bg-white p-4 sm:p-6 rounded-2xl">
                        <Welcome />
                        <ChartExample />
                        <div className="grid  grid-flow-col">
                            <div className="row-span-3">
                            <CardDua status1="Normal" status2="SOS" status3="Normal" />
                            </div>
                            <div className="col-span-2 ">
                            <InfoWaliCards />
                            </div>
                        </div>
                    </div>
                </div>
            </DashLayout>
        </div>
    );
}

export default Dashboard