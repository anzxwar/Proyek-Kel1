"use client";

import { BarChart, LayoutDashboard, Settings2, UserCircleIcon } from "lucide-react";
import Navbar from "../atoms/navbar";
import Sidebar, { SidebarItem } from "../atoms/sidebar";
import Dashboard from "@/app/dashboard/page";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashLayout = ({ children }) => {
  const pathname = usePathname();

  const styles = {
    appContainer: {
      display: 'flex',
      height: '100vh',
      width: '100%',
    },
    sidebarContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      width: '250px',
      backgroundColor: '#03045e', // Change to match your design
      overflowY: 'auto',
      zIndex: 1000,
    },
    mainContent: {
      marginLeft: '250px',
      padding: '20px',
      width: 'calc(100% - 250px)',
      overflowY: 'auto',
      height: '100vh',
    },
    sidebarItem: {
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    activeItem: {
      backgroundColor: '#e0e0e0', // Change to match your design
    },
    icon: {
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.appContainer}>
      <div style={styles.sidebarContainer}>
        <Sidebar>
          <Link href="/dashboard" passHref>
            <div style={{ ...styles.sidebarItem, ...(pathname === "/dashboard" && styles.activeItem ), color : "#03045e"}}>
              <LayoutDashboard size={20} style={styles.icon} />
              <span>Dashboard</span>
            </div>
          </Link>
          <Link href="/setting" passHref>
            <div style={{ ...styles.sidebarItem, ...(pathname === "/setting" && styles.activeItem), color : "#03045e"}}>
              <Settings2 size={20} style={styles.icon} />
              <span>Setting</span>
            </div>
          </Link>
          <Link href="/account" passHref>
            <div style={{ ...styles.sidebarItem, ...(pathname.startsWith("/account") && styles.activeItem), color : "#03045e"}}>
              <UserCircleIcon size={20} style={styles.icon} />
              <span>Account</span>
            </div>
          </Link>
        </Sidebar>
      </div>
      <div style={styles.mainContent}>
        <Navbar />
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default DashLayout;
