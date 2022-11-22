import { TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

export default function Input({ number, setNumber }) {
  return (
    <NumericFormat
      value={number.formattedValue}
      thousandSeparator=" "
      customInput={TextField}
      autoComplete="off"
      onValueChange={(values) => {
        const { formattedValue, value } = values;
        setNumber({ formattedValue, value: parseInt(value) });
      }}
    />
  );
}
