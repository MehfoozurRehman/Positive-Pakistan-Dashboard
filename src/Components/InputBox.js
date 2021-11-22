import React from "react";
import Select from "react-select";

export default function InputBox({
  svg,
  placeholder,
  required,
  type,
  variant,
  options,
  style,
}) {
  if (variant === "select") {
    return (
      <div className="input__box" style={style}>
        {svg}
        <Select
          options={options}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  } else {
    return (
      <div className="input__box" style={style}>
        {svg}
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className="input__box__field"
        />
      </div>
    );
  }
}
