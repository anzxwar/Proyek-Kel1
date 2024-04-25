"use client"

import React from 'react';
import { MdDashboard } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Image from 'next/image';

const menuItems = [
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        path: "/dashboard"
    },
    {
        title: "Accounts",
        icon: <RiAccountBoxLine />,
        path: "/accounts"
    },
    {
        title: "Settings",
        icon: <IoSettingsOutline />,
        path: "/settings"
    },
];

const Sidebar = () => {


    return (
        <div className="sticky top-20">
            <div className="flex items-center gap-30 mt-2 mb-10 justify-center">
                <Image src="/lansia_logo.png" alt="" width="80" height="80" />
            </div>
            <ul className="list-none mr-4">
                {menuItems.map(item => (
                    <li className="flex items-center rounded-lg gap-4 py-1 px-1 hover:bg-gray-200" key={item.title}>
                        {item.icon} 
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
