import React from "react";
import { Grid, Button, Box, TextField, Alert, Typography } from "@mui/material";
import { useState, ChangeEvent, SyntheticEvent } from "react";
import { addUser } from "../components/utils";
import { FieldsError, FormData, AlertType, SeverityStatus } from "../types";

export default function AddNewUser() {
  const [fieldsError, setFieldsError] = useState<FieldsError>({
    firstName: false,
    lastName: false,
  });
  const [alert, setAlert] = useState<AlertType>({
    severity: SeverityStatus.Error,
    display: false,
    message: "",
  });
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
  });

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function formValidation(formData: FormData): boolean {
    const { firstName, lastName } = formData;
    if (!firstName || !lastName) {
      setFieldsError({
        firstName: !formData.firstName,
        lastName: !formData.lastName,
      });
      return false;
    }
    return true;
  }

  async function handleOnSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (formValidation(formData)) {
      setFieldsError({ firstName: false, lastName: false });
      try {
        await addUser(formData.firstName, formData.lastName);
        setAlert({
          severity: SeverityStatus.Success,
          display: true,
          message: "User added successfully",
        });
      } catch (error) {
        setAlert({
          severity: SeverityStatus.Error,
          display: true,
          message: "Something went wrong, please try again later",
        });
      }
    }
  }

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          mt: 15,
          textAlign: "center",
          mx: "auto",
          width: "100%",
          maxWidth: { xs: "300px", md: "450px" },
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "20px",
        }}
      >
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
          <Typography component="h3">Add a new user</Typography>

          <div>
            <TextField
              error={fieldsError.firstName}
              id="outlined-error-helper-text"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleOnChange}
              helperText={fieldsError.firstName && "First name is required"}
            />
          </div>
          <div>
            <TextField
              error={fieldsError.lastName}
              id="outlined-error-helper-text"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleOnChange}
              helperText={fieldsError.lastName && "Last name is required"}
            />
          </div>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </Box>
        {alert.display && (
          <Alert severity={alert.severity}>{alert.message}</Alert>
        )}
      </Grid>
    </Grid>
  );
}
