"use client"
import { usePathname } from "next/navigation"
import styles from "./navbar.module.css"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch} from "react-icons/md"
import Image from "next/image"

const Navbar = () => {

    // const pathname = usePathname();

    return(
        <div className={styles.container}>
            <div className={styles.title}>Fall Detection System</div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch />
                    <input type="text" placeholder="Search .." className={styles.input} />
                </div>
                <div className={styles.icons}>

                        <img src="/setting_logo.png" width="50" height="50"/>
                        <img src="/notif_logo.png" width="50" height="50"/>

                    <div className={styles.user}>
                        <Image src="/mbak.png" alt="" width="50" height="50" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar