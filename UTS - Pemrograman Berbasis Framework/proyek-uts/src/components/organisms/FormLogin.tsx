import Button from "../atoms/button";
import InputForm from "../molecules/InputForm";
import Link from "next/link";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm title="Email" name="email" type="email" placeholder="example@email.com" />
      <InputForm title="Password" name="password" type="password" placeholder="******" />
      <Link href="/dashboard">
        
          <Button classname="bg-blue-600 w-full" >Login</Button>
        
      </Link>
    </form>
  );
}

export default FormLogin