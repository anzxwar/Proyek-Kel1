import InfoWaliCards from "@/components/atoms/card";
import CardDua from "@/components/atoms/card_dua";
import ChartExample from "@/components/atoms/chart";
import Welcome from "@/components/atoms/welcome";
import DashLayout from "@/components/templates/DashLayout";

const Dashboard = () => {
    return(
        <DashLayout>
            <div >
                <div className="flex flex-col gap-4 bg-gradient-to-r from-yellow-200 to-gray-100">
                    <Welcome/>
                    <ChartExample/>
                    <div className="flex justify-between">
                        <InfoWaliCards/>
                        <CardDua status1="Normal" status2="SOS" status3="Normal"/>
                    </div>
                </div>
            </div>
        </DashLayout>
    );
}

export default Dashboard