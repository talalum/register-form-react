import { useRef } from "react";
import Select from "../select/select";

const RegularForm = () => {
  const clicko = () => console.log("submit");
  const sentData = () =>
    console.log("sentData: ", selectRef.current?.value );

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <>
      <div>regular-form</div>
      <form onSubmit={clicko}>
        <input type="text" placeholder="name" ref={nameRef} minLength={2} />
        <input type="number" placeholder="age" ref={ageRef} />
        <Select ref={selectRef} onClick={()=>{console.log("click");}} label={"hoobies"}  options={["12", "13", "14"]} />
        <input type="submit"/>
      </form>
      <button onClick={sentData}>sent</button>
    </>
  );
};

export default RegularForm;
