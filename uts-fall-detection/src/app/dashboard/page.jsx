import styles from '../ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/card/card'
import CardDua from '../ui/dashboard/card_dua/card_dua'
import Welcome from '../ui/dashboard/welcome/welcome'
import Chart from '../ui/dashboard/chart/chart'

const Dashboard = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <Welcome />
                <Chart />
                <div className={styles.cards}>
                    <Card/>
                    <CardDua status1="Normal" status2="SOS" status3="Normal"/>
                </div>
                <div>
                
                </div>
            </div>
        </div>
    )
}

export default Dashboard