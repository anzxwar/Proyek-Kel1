import FormLogin from "@/components/organisms/FormLogin";
import AuthLayout from "@/components/templates/AuthLayout";

const Login = () => {
    return (
        <>
        <div className="flex justify-center items-center">
            <div>            
            <AuthLayout title={"Login"}>
                <FormLogin />
            </AuthLayout>
            </div>
        </div>
       
        </>
    );
};

export default Login