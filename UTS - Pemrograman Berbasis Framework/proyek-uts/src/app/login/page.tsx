// Login.js
import React from "react";
import Link from "next/link";
import FormLogin from "@/components/organisms/FormLogin";
import AuthLayout from "@/components/templates/AuthLayout";

export default function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
            <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex flex-col items-center">
                    <AuthLayout title={"Login"}>
                        <FormLogin />
                    </AuthLayout>
                    <div className="py-2 text-gray-600">
                        <p>Belum punya akun? <Link href="/register" className="text-blue-500 hover:underline">Daftar dulu bos</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
