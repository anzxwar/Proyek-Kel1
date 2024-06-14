"use client"

import React from 'react';
import { MdDashboard } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from "next/link";
import Modal from '../atoms/modal';

// const menuItems = [
//     {
//         title: "Dashboard",
//         icon: <MdDashboard />,
//         path: "/dashboard"
//     },
//     {
//         title: "Accounts",
//         icon: <RiAccountBoxLine />,
//         path: "/account"
//     },
//     {
//         title: "Settings",
//         icon: <IoSettingsOutline />,
//         path: "/setting"
//     },
// ];

// const Sidebar = () => {


//     return (
//         <div className="sticky top-20">
//             <div className="flex items-start gap-30 mt-2 mb-10">
//                 <Image src="/lansia_logo.png" alt="" width="80" height="80" />
//             </div>
//             <ul className="list-none mr-4">
//                 {menuItems.map(item => (
//                     <li key={item.title} className="mb-2">
//                         <Link href={item.path}>
//                             <div className="relative flex items-center rounded-lg gap-4 py-2 px-1
//                                  hover:bg-gray-200 text-blue-700">
//                                 {item.icon} 
//                                 <span>{item.title}</span>
//                             </div>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;

import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"

const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    // Add your logout logic here, for example:
    console.log('User logged out');
    // After logout, you might want to close the modal
    closeModal();
  };

  return (
    <aside className="h-full">
      <nav style={{ backgroundColor: '#DBD3AD'}} className="h-full flex flex-col border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="/lansia_logo.png"
            className={`overflow-hidden transition-all ${expanded ? "w-16" : "w-0"}`}
            alt=""
          />
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 relative">
          <img
            src="/mbak.png"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className="leading-4">
              <h4 className="font-semibold text-gray-600">Charlene</h4>
              <span className="text-xs text-gray-600">Charlene112@gmail.com</span>
            </div>
            <div className="relative">
              <button onClick={openModal} className="ml-3">
                <MoreVertical size={20} />
              </button>
              <div className="relative">
                {isModalOpen && (
                  <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onLogout={handleLogout}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active
          ? "bg-gradient-to-tr from-amber-200 to-amber-100 text-amber-800"
          : "hover:bg-amber-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
          }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-amber-400 ${expanded ? "" : "top-2"
            }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-amber-100 text-amber-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}
