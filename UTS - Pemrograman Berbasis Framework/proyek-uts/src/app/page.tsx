import EditProfile from "@/components/templates/EditProfile";
import Account from "@/pages/account";
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import Register from "@/pages/register";
import Setting from "@/pages/setting";
import React from "react";
import { ReactDOM } from "react";


export default function Home() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Register/>
    </div>
  );
}

