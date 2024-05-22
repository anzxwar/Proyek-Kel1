
import FormRegister from "@/components/organisms/FormRegister";
import AuthLayout from "@/components/templates/AuthLayout";

const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <AuthLayout title={"Register"}>
                <FormRegister />
            </AuthLayout>
        </div>
    );
};

export default Register