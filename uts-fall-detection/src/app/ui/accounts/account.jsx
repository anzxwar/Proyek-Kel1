import { Switch } from "antd";
import styles from "./account.module.css";
import Image from "next/image";

const EditProfile = () => {
    return (
        <div>
            <div className={styles.card}>
                <nav className={styles.navbar}>
                    <h2 className={styles.navItem}>Edit Profile</h2>
                    <h2 className={styles.navItem}>Edit Wali</h2>
                    <h2 className={styles.navItem}>Edit Kontak Dokter</h2>
                </nav>

                <div className={styles.gridContainer}>
                    <div className="">
                        {/* Tambahkan foto profil di sini */}
                        <div className={styles.profileImage}>
                            <Image src="/indira.jpeg" alt="Profile Picture" width={100} height={100} />
                        </div>
                    </div>
                    <div className="">
                        <div className={styles.formItem}>
                            <label htmlFor="name" className={styles.label}>Your Name</label>
                            <input type="text" id="name" name="name" className={styles.input} placeholder="Indira Seruni" />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" id="email" name="email" className={styles.input} placeholder="indira@gmail.com" />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="date" className={styles.label}>Date of Birth</label>
                            <input type="date" id="date" name="date" className={styles.input} placeholder="Enter your date" />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="address" className={styles.label}>Permanent Address</label>
                            <input type="address" id="address" name="address" className={styles.input} placeholder="Purwosari, Pasuruan, Jawa Timur" />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="telegram" className={styles.label}>Telegram Username</label>
                            <input type="telegram" id="telegram" name="telegram" className={styles.input} placeholder="Indira12" />
                        </div>
                    </div>
                    <div className="">
                        <div className={styles.formItem}>
                            <label htmlFor="user" className={styles.label}>User Name</label>
                            <input type="user" id="user" name="user" className={styles.input} placeholder="Indira Seruni" />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="password" className={styles.label}>Password </label>
                            <input type="password" id="password" name="password" className={styles.input} placeholder="**********" />
                        </div>

                        <div className={styles.formItem}>
                            <label htmlFor="address" className={styles.label}>Present Address</label>
                            <input type="address" id="address" name="address" className={styles.input} placeholder="Purwosari, Pasuruan, Jawa Timur" />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="city" className={styles.label}>City</label>
                            <input type="city" id="city" name="city" className={styles.input} placeholder="Jakarta" />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="country" className={styles.label}>Country</label>
                            <input type="country" id="country" name="country" className={styles.input} placeholder="Indonesia" />
                        </div>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default EditProfile;
