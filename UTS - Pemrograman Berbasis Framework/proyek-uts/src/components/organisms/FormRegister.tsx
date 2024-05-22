import Button from "../atoms/button";
import InputForm from "../molecules/InputForm";

const FormRegister = () =>{
    return(
        <form action="">
          <InputForm title="Nama" name="fullname" type="text" placeholder="insert your name here ... " />
          <InputForm title="Email" name="email" type="email" placeholder="example@email.com" />
          <InputForm title="Password" name="password" type="password" placeholder="******" />
          <InputForm title="Konfirmasi Password" name="password" type="password" placeholder="******" />
          <Button classname="bg-blue-600 w-full" >Daftar</Button>
        </form>
    );
}

export default FormRegister