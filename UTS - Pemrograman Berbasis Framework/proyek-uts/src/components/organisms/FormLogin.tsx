import Button from "../atoms/button";
import InputForm from "../molecules/InputForm";
import Link from "next/link";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm title="Email" name="email" type="email" placeholder="admin@email.com" value="asem" />
      <InputForm title="Password" name="password" type="password" placeholder="******" value="*****" />
      <Link href="/dashboard">
        
          <Button classname="bg-blue-600 w-full" >Login</Button>
        
      </Link>
    </form>
  );
}

export default FormLogin