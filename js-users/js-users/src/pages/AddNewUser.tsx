import { Grid, Button, Box, TextField, Alert } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { addUser } from "../components/utils";

type FormDataType = {
  firstName: string;
  lastName: string;
};

type AlertType = {
  severity: "error" | "success";
  display: boolean;
  message: string;
};

type fieldsErrorType = {
  firstName: boolean;
  lastName: boolean;
};

export default function AddNewUser() {
  const [fieldsError, setFieldsError] = useState<fieldsErrorType>({
    firstName: false,
    lastName: false,
  });
  const [alert, setAlert] = useState<AlertType>({
    severity: "error",
    display: false,
    message: "",
  });
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
  });

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function formValidation(formData: FormDataType) {
    const { firstName, lastName } = formData;
    console.log(!!firstName);
    if (!firstName || !lastName) {
      setFieldsError({
        firstName: !formData.firstName,
        lastName: !formData.lastName,
      });
      return false;
    }
    return true;
  }

  async function handleOnSubmit(e: any) {
    e.preventDefault();
    if (formValidation(formData)) {
      setFieldsError({ firstName: false, lastName: false });
      try {
        await addUser(formData.firstName, formData.lastName);
        setAlert({
          severity: "success",
          display: true,
          message: "User added successfully",
        });
      } catch (error) {
        setAlert({
          severity: "error",
          display: true,
          message: "Something went wrong, please try again later",
        });
      }
    }
  }
  console.log(formData);

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
