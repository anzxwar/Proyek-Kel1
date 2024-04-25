import Button from "../atoms/button";
import InputForm from "../molecules/InputForm";

const FormRegister = () =>{
    return(
        <form action="">
          <InputForm title="Fullname" name="fullname" type="text" placeholder="insert your name here ... " />
          <InputForm title="Email" name="email" type="email" placeholder="example@email.com" />
          <InputForm title="Password" name="password" type="password" placeholder="******" />
          <InputForm title="Confirm Password" name="password" type="password" placeholder="******" />
          <Button classname="bg-blue-600 w-full" >Register</Button>
        </form>
    );
}

export default FormRegister