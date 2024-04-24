"use client"

import React from 'react';
import styles from "./sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from 'react-router-dom';

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
        <div className={styles.container}>
            <div className={styles.user}>
                <Image src="/lansia_logo.png" alt="" width="80" height="80" />
            </div>
            <ul className={styles.menuItems}>
                {menuItems.map(item => (
                    <li className={styles.menuItems} key={item.title}>
                        {item.icon} {/* Menampilkan ikon */}
                        {item.title} {/* Menampilkan judul */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
