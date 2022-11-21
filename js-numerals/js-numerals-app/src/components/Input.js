import { TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

export default function Input({ number, setNumber }) {

  console.log(number);
  return (
    <NumericFormat
      value={number.formattedValue}
      thousandSeparator=" "
      customInput={TextField}
      onValueChange={(values) => {
        const {formattedValue, value} = values;
        setNumber({formattedValue, value});
      }}    />

  );
}
