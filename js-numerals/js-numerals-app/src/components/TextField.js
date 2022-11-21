import { TextField } from "@mui/material";

export default function TextField() {
  return (
    <TextField
      id="filled-number"
      label="Number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      variant="standard"
      />
  );
}
