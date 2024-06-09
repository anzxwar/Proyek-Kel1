"use client"; // Add this line at the top

import { BarChart, LayoutDashboard, Settings2, UserCircleIcon } from "lucide-react";
import Navbar from "../atoms/navbar";
import Sidebar, { SidebarItem } from "../atoms/sidebar";
import Dashboard from "@/app/dashboard/page";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="h-full flex">
      <div className="flex-none">
        <Sidebar>
          <Link href="/dashboard" passHref>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text={"Dashboard"}
              active={pathname === "/dashboard"}
            />
          </Link>
          <Link href="/setting" passHref>
            <SidebarItem
              icon={<Settings2 size={20} />}
              text={"Setting"}
              active={pathname === "/setting"}
            />
          </Link>
          <Link href="/account" passHref>
            <SidebarItem
              icon={<UserCircleIcon size={20} />}
              text={"Account"}
              active={pathname === "/account"}
            />
          </Link>
        </Sidebar>
      </div>
      <div className="flex-auto">
        <div className="p-4">
          <Navbar />
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;