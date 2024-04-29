import FormLogin from "@/components/organisms/FormLogin";
import AuthLayout from "@/components/templates/AuthLayout";

const Login = () => {
    return (
        <div>
            <AuthLayout title={"Login"}>
                <FormLogin />
            </AuthLayout>
        </div>
    );
};

export default Login