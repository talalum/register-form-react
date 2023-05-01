import { useForm, SubmitHandler } from "react-hook-form";
import "./register-form.scss";
import { FC } from "react";
import Input from "../input/input-comp";

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

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("firstName"));
  
  const isValidIsraeliID = (id: any) => {
    id = id.trim();
    if (id.length > 9 || id.length < 5 || isNaN(id)) return false;

    // Pad string with zeros up to 9 digits
    id = id.length < 9 ? ("00000000" + id).slice(-9) : id;

    return (
      Array.from(id, Number).reduce((counter, digit, i) => {
        const step = digit * ((i % 2) + 1);
        return counter + (step > 9 ? step - 9 : step);
      }) % 10 === 0
    );
  };

  return (
    <div className="register-form">
      <h2>Registeration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* <label>First Name</label> */}
        {/* <input
          className="input"
          placeholder="First name"
          {...register("firstName", { required: true, minLength: 2 })}
        /> */}
        {/* {errors.firstName && <span>First name is required</span>} */}

        <Input label={"firstName"}/>
        {errors.firstName && <span>First name is required</span>}

        {/* <label>Last Name</label> */}
        <Input label={"lastName"}/>
        {errors.lastName && <span>Last name is required</span>}
        {/* <input
          className="input"
          placeholder="Last name"
          {...register("lastName", { required: true, minLength: 2 })}
        /> */}
        {errors.lastName && <span>Last name is required</span>}
        <label>Gender Selection</label>
        <select {...register("gender", { required: true })} className="input">
          <option value="">Select gender...</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <label>
          <input {...register("hobbies")} type="checkbox" value="A" />A
        </label>
        <label>
          <input {...register("hobbies")} type="checkbox" value="B" />B
        </label>
        <label>
          <input {...register("hobbies")} type="checkbox" value="C" />C
        </label>
        <label>
          <input {...register("age")} type="radio" value="10" />
          10
        </label>
        <label>
          <input {...register("age")} type="radio" value="20" />
          20
        </label>
        <label>
          <input {...register("age")} type="radio" value="30" />
          30
        </label>
        <label>
          <input {...register("age")} type="radio" value="40" />
          40
        </label>
        <input
          className="input"
          placeholder="ID number"
          {...register("id", {
            required: true,
            minLength: 2,
            validate: isValidIsraeliID,
          })}
        />
        {errors.id && errors.id.type === "validate" && (
          <div className="error">Invalid ID</div>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterForm;
