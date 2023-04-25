import { FC } from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  gender: GenderEnum;
  hobbies: string[];
  age: number;
  id: number;
};

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

type InputProps = {
  label: Path<Inputs>;
  register: UseFormRegister<Inputs>;
  required: boolean;
};

// The following component is an example of your existing Input Component
const Input: FC<InputProps> = ({ label, register, required }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required }) } placeholder={label} />
    </>
  );
};

export default Input;
