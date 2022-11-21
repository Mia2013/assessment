import { TextField } from "@mui/material";

export default function Input({ number, setNumber }) {
  function handleOnChange(event) {
    event.preventDefault();
    const { value } = event.target;
    setNumber(value);
  }

  return (

    <TextField
      id="standard-basic"
      variant="standard"
      label="Enter a number"
      placeholder="e.g. 100"
      type="number"
      value={number}
      onChange={(event) => handleOnChange(event)}
      sx={{ width: "250px", my: 5 }}
      color="warning"

    />
  );
}
