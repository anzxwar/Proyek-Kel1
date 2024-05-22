import EditProfile from "@/components/templates/EditProfile";
import Account from "@/app/account/page";
import Dashboard from "@/app/dashboard/page";
import Login from "@/app/login/page";
import Register from "@/app/register/page";
import Setting from "@/app/setting/page";
import React from "react";
import { ReactDOM } from "react";


export default function Home() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Login/>
    </div>
  );
}

