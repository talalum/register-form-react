import React, { forwardRef } from "react";

const selectFunc = (props: React.HTMLProps<HTMLSelectElement>, ref: React.ForwardedRef<HTMLSelectElement>) => {
  return (
    <>
      <div>Select</div>
      <select ref={ref} {...props}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </>
  );
};
const Select = forwardRef<HTMLSelectElement, React.HTMLProps<HTMLSelectElement>>(selectFunc);

export default Select;
