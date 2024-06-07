"use client"

import { MdNotifications, MdOutlineChat, MdPublic, MdSearch} from "react-icons/md"
import Image from "next/image"
import Link from "next/link";

const Navbar = () => {
    return (
      <div className="px-4 lg:px-10 py-4 lg:py-6 flex items-center justify-between bg-white rounded-2xl">
          <a style={{color : "#03045e"}} className="font-bold text-2xl lg:text-3xl">Fall Detection System</a>
      </div>
    );
  };

export default Navbar