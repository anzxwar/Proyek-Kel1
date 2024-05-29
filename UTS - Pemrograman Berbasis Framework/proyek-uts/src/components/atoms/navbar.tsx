"use client"

import { MdNotifications, MdOutlineChat, MdPublic, MdSearch} from "react-icons/md"
import Image from "next/image"
import Link from "next/link";

const Navbar = () => {

    // const pathname = usePathname();

    return(
        <div className="p-10 flex items-center justify-between bg-gradient-to-r from-yellow-200 to-gray-100">
            <Link href={"/dashboard"}>
            <div className="text-blue-700 font-bold capitalize text-3xl">Fall Detection System</div>
            </Link>
            <div className="flex items-center gap-20">
                <div className="flex items-center gap-12 ml-20 mr-1 bg-gray-200 p-1 rounded-lg">
                    <MdSearch />
                    <input type="text" placeholder="Search .." className="bg-transparent border-none text-textColor" />
                </div>
                <div className="flex mr-2 gap-4">
                        <Link href={"/setting"}>
                        <img src="/setting_logo.png" width="50" height="50"/>
                        </Link>
                        
                       {/* <img src="/notif_logo.png" width="50" height="50"/> */}

                    <div >
                        <Link href={"/account"}>
                        <Image src="/mbak.png" alt="" width="50" height="50" />
                        </Link>
                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar