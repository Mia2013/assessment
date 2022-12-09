import React from "react";
import { Button, Box, Typography } from "@mui/material";
import InputField from "./InputField";
import { FormProps, FormData } from "../../types/types";
import styles from "../../style/styles";

export default function Form({
  handleOnSubmit,
  alert,
  formData,
  handleOnChange,
  title,
  buttonTitle,
}: FormProps) {
  return (
    <Box
      component="form"
      sx={styles.textField}
      noValidate
      autoComplete="off"
      onSubmit={handleOnSubmit}
    >
      <Typography variant="h3" my={3}>
        {title}
      </Typography>

      <div>
        <InputField
          error={alert}
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <InputField
          error={alert}
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
