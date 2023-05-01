import React, { forwardRef } from "react";

type SelectProps = {
  label: string;
  options: string[];
} & React.HTMLProps<HTMLSelectElement>;

const selectFunc = (
  props: SelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) => {
  return (
    <>
      <label>{props.label}</label>
      <select ref={ref} {...props}>
        <option value="">Select gender...</option>
        {props.options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};
const Select = forwardRef<HTMLSelectElement, SelectProps>(selectFunc);

export default Select;
