import { BarChart, LayoutDashboard, Settings2, UserCircleIcon } from "lucide-react";
import Navbar from "../atoms/navbar"
import Sidebar, { SidebarItem } from "../atoms/sidebar"
import Dashboard from "@/app/dashboard/page";
import Link from 'next/link';

const DashLayout = ({ children }) => {
    return (
      <div className="flex">
        <div className="flex-none">
          <Sidebar>
            <Link href="/dashboard">
                <SidebarItem
                  icon={<LayoutDashboard size={20} />}
                  text={"Dashboard"}
                  alert
                />
            </Link>
            <Link href="/setting">

                <SidebarItem
                  icon={<Settings2 size={20} />}
                  text={"Setting"}
                />

            </Link>
            <Link href="/account">

                <SidebarItem
                  icon={<UserCircleIcon size={20} />}
                  text={"Account"}
                  alert
                />

            </Link>
          </Sidebar>
        </div>
        <div className="flex-auto">
          <div className="p-4">
            <Navbar />
            <div className="mt-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default DashLayout;
  