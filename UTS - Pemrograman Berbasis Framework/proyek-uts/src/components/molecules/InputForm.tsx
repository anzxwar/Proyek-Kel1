import Label from "../atoms/label";
import Input from "../atoms/input";

const InputForm = (props) => {
    const {title, name, type, placeholder, value} = props;
    return(
        <div className="my-3 text-black">
            <Label htmlFor={name}>{title}</Label>
            <Input name={name} type={type} placeholder={placeholder} value={value} />
        </div>
    );
}

export default InputForm