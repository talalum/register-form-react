import "./input-comp.scss"
import React, { forwardRef } from "react";


const inputFunc = (props: React.HTMLProps<HTMLInputElement>, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <input ref={ref} {...props}/>
    </>
  );
};
const Input = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(inputFunc);

export default Input;

