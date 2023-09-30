import React from "react";

type Props = {
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  label?: string;
  error?: string;
};

const Input = ({ label, error, inputProps, labelProps }: Props) => {
  return (
    <div className="input__wrapper">
      {!!error && <span className="input__error">{error}</span>}
      <input
        id={inputProps?.name}
        className="input__field"
        {...inputProps}
        placeholder={label}
      ></input>
      <label
        htmlFor={inputProps?.name}
        className="input__label"
        {...labelProps}
      >
        <span className="input__label__text">
          {label}
          {inputProps?.required && "*"}
        </span>
      </label>
    </div>
  );
};

export default Input;
