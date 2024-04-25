import Label from "../atoms/label";
import Input from "../atoms/input";

const InputForm = (props) => {
    const {title, name, type, placeholder} = props;
    return(
        <div className="mb-6">
            <Label htmlFor={name}>{title}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </div>
    );
}

export default InputForm