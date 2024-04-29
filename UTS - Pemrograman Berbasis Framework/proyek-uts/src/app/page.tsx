import EditProfile from "@/components/templates/EditProfile";
import Account from "@/app/account/account";
import Dashboard from "@/app/dashboard/dashboard";
import Login from "@/app/login/login";
import Register from "@/app/register/register";
import Setting from "@/app/setting/setting";
import React from "react";
import { ReactDOM } from "react";


export default function Home() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Login/>
    </div>
  );
}

