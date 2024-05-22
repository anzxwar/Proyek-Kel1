import Button from "../atoms/button";
import InputForm from "../molecules/InputForm";

const FormLogin = () =>{
    return(
        <form action="">
          <InputForm title="Email" name="email" type="email" placeholder="example@email.com" />
          <InputForm title="Password" name="password" type="password" placeholder="******"  />
          <Button classname="bg-blue-600 w-full" >Login</Button>
        </form>
    );
}

export default FormLogin