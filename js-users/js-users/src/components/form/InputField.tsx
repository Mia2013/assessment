import React from "react";
import { TextField } from "@mui/material";
import { InputFieldProps } from "../../types/types";

export default function InputField({
  error,
  label,
  name,
  value,
  onChange,
  
}: InputFieldProps) {
  return (
    <TextField
      error={error}
      id="outlined-error-helper-text"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      helperText={error && `${label} is required`}
    />
  );
}
