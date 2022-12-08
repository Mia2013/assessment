import React from "react";
import { Button, Box, Typography } from "@mui/material";
import InputField from "./InputField";
import { FormProps, FormData } from "../../types/types";

export default function Form({
  handleOnSubmit,
  fieldsError,
  formData,
  handleOnChange,
  title,
  buttonTitle,
}: FormProps) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 3, width: "90%" },
        my: 5,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleOnSubmit}
    >
      <Typography variant="h3" my={3}>
        {title}
      </Typography>

      <div>
        <InputField
          error={fieldsError.firstName}
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <InputField
          error={fieldsError.lastName}
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleOnChange}
        />
      </div>
      <Button variant="contained" type="submit">
        {buttonTitle}
      </Button>
    </Box>
  );
}
