import { useForm, SubmitHandler } from "react-hook-form";
import "./register-form.scss";

type Inputs = {
  firstName: string;
  lastName: string;
  gender: GenderEnum;
};

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("firstName"));

  return (
    <div className="register-form">
      <h2>Registeration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* <label>First Name</label> */}
        <input
          className="input"
          placeholder="First name"
          {...register("firstName", { required: true, minLength: 2 })}
        />
        {errors.firstName && <span>First name is required</span>}

        {/* <label>Last Name</label> */}
        <input
          className="input"
          placeholder="Last name"
          {...register("lastName", { required: true, minLength: 2 })}
        />
        {errors.lastName && <span>Last name is required</span>}
        <label>Gender Selection</label>
        <select {...register("gender", { required: true })} className="input">
          <option value="">Select gender...</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
