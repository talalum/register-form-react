import React, { forwardRef } from "react";
import "./input-comp.scss";

type InputProps = {
  label: string;
} & React.HTMLProps<HTMLInputElement>;

const inputFunc = (
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <>
      <label>{props.label}</label>
      <input ref={ref} {...props} />
    </>
  );
};
const Input = forwardRef<HTMLInputElement, InputProps>(
  inputFunc
);

export default Input;
