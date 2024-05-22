import Link from "next/link";
import FormRegister from "@/components/organisms/FormRegister";
import AuthLayout from "@/components/templates/AuthLayout";

const Register = () => {
    return (

        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
            <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex flex-col items-center">
                    <AuthLayout title={"Daftar"}>
                        <FormRegister />
                    </AuthLayout>
                    <div className="py-2 text-gray-600">
                        <p>Kembali ke <Link href="/" className="text-blue-500 hover:underline">Halaman Login</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register