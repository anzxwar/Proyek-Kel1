import { Switch } from "antd";
import styles from "./card_setting.module.css"
import Image from "next/image";

const SetNotif = () => {
    return(
        <div>
            <div className={styles.card}>
                <h2 className={styles.title}>Notification Telegram
                </h2>
                    <div className={styles.texts}>
                        <div className={styles.switchItem}>
                            <Switch defaultChecked={true}/> 
                            <span className={styles.switchText}> Mengirimkan Data Kontak Dokter Via Telegram</span>
                        </div>
                        <div className={styles.switchItem}>
                            <Switch defaultChecked={true}/> 
                            <span className={styles.switchText}> Mengirimkan Notifikasi Jatuh ke Wali</span>
                        </div>
                    </div>
            </div>
            <div className={styles.card}>
                <h2 className={styles.title}>IoT Fall Detection</h2>
                        <div className={styles.switchItem}>
                            <Switch /> 
                            <span className={styles.switchText}> Stop Streaming Data IoT</span>
                        </div>
            </div>

        </div>
    )
}

export default SetNotif