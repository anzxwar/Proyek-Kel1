import FormLogin from "@/components/organisms/FormLogin";
import AuthLayout from "@/components/templates/AuthLayout";

const Login = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <AuthLayout title={"Login"}>
                <FormLogin />
            </AuthLayout>
        </div>
    );
};

export default Login