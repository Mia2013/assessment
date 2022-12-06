import { Grid, Button, Box, TextField, Alert, Typography } from "@mui/material";
import React, { useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getOneUserById, editUser } from "../components/utils";
import {
  FieldsError,
  FormData,
  AlertType,
  SeverityStatus,
  User,
  UserStatus,
} from "../types";
import { useNavigate } from "react-router-dom";

export default function EditUser() {
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
  const [user, setUser] = useState<User>({
    id: -50000,
    last_name: "",
    first_name: "",
    status: UserStatus.Active,
    created_at: "",
    updated_at: "",
    url: ""
  });
  const [loadingAlert, setLoadingAlert] = useState<string>("");
  const { userId } = useParams();
  const navigate = useNavigate();

  async function getOneUser() {
    try {
      const result = await getOneUserById(Number(userId));
      setUser({ ...result });
      setLoadingAlert("");
    } catch (error) {
      setLoadingAlert(
        "Sorry, but something went wrong, please try again later"
      );
    }
  }

  useEffect(() => {
    getOneUser();
  }, []);

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
        await editUser(formData.lastName, formData.firstName, Number(userId));
        setUser((prev) => ({
          ...prev,
          last_name: formData.lastName,
          first_name: formData.firstName,
        }));
        setAlert({
          severity: SeverityStatus.Success,
          display: true,
          message: "User updated successfully",
        });
        setFormData({ firstName: "", lastName: "" });
      } catch (error) {
        setAlert({
          severity: SeverityStatus.Error,
          display: true,
          message: "Something went wrong, please try again later",
        });
      }
    }
  }
  const handleOnClickNavigateBack = () => {
    navigate("/");
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          m: 5,
          textAlign: "end",
        }}
      >
        <Button
          onClick={() => handleOnClickNavigateBack()}
          variant="contained"
          sx={{
            backgroundColor: "#FF177A",
          }}
        >
          Back
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          mt: 5,
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
          <Typography variant="h3" my={3}>
            Update user
          </Typography>
          <div>
            <Typography variant="body2" align="left" mx={3}>
              Old first name: {user.first_name}
            </Typography>
            <TextField
              error={fieldsError.firstName}
              id="outlined-error-helper-text"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleOnChange}
              helperText={fieldsError.firstName && "First name is required"}
              placeholder={"First name: " + user?.first_name}
            />
          </div>
          <div>
            <Typography variant="body2" align="left" mx={3}>
              Old last name: {user.last_name}
            </Typography>

            <TextField
              error={fieldsError.lastName}
              id="outlined-error-helper-text"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleOnChange}
              helperText={fieldsError.lastName && "Last name is required"}
              placeholder={"Last name: " + user?.last_name}
            />
          </div>
          <Button variant="contained" type="submit">
            Update
          </Button>
        </Box>
        {alert.display && (
          <Alert severity={alert.severity}>{alert.message}</Alert>
        )}
      </Grid>
    </Grid>
  );
}
