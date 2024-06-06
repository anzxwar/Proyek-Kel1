"use client"

import { MdNotifications, MdOutlineChat, MdPublic, MdSearch} from "react-icons/md"
import Image from "next/image"
import Link from "next/link";

const Navbar = () => {
    return (
      <div className="px-4 lg:px-10 py-4 lg:py-6 flex items-center justify-between bg-gradient-to-r from-yellow-200 to-gray-100 rounded-2xl">
          <a className="text-blue-700 font-bold text-2xl lg:text-3xl">Fall Detection System</a>
      </div>
    );
  };

export default Navbar