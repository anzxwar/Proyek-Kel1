
import FormRegister from "@/components/organisms/FormRegister";
import AuthLayout from "@/components/templates/AuthLayout";

const Register = () => {
    return (
        <div>
            <AuthLayout title={"Register"}>
                <FormRegister />
            </AuthLayout>
        </div>
    );
};

export default Register