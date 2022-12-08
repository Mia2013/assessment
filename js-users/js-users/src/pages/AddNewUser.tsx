import React from "react";
import { Grid, Button, Box, TextField, Alert, Typography } from "@mui/material";
import { useState, ChangeEvent, SyntheticEvent } from "react";
import { addUser } from "../utils/utils";
import {
  FieldsError,
  FormData,
  AlertType,
  SeverityStatus,
} from "../types/types";
import { useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import styles from "../style/styles";

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

  const navigate = useNavigate();

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // function formValidation(formData: FormData): boolean {
  //   const { firstName, lastName } = formData;
  //   if (!firstName || !lastName) {
  //     setFieldsError({
  //       firstName: !formData.firstName,
  //       lastName: !formData.lastName,
  //     });
  //     return false;
  //   }
  //   return true;
  // }

  async function handleOnSubmit(e: SyntheticEvent) {
    e.preventDefault();
    // if (formValidation(formData)) {
      setFieldsError({ firstName: false, lastName: false });
      try {
        await addUser(formData.firstName, formData.lastName);
        setAlert({
          severity: SeverityStatus.Success,
          display: true,
          message: "User added successfully",
        });
        setFormData({ firstName: "", lastName: "" });
      } catch (error) {
        setAlert({
          severity: SeverityStatus.Error,
          display: true,
          message: (error as Error).message,
        });
      }
    // }
  }

  const handleOnClickNavigateBack = () => {
    navigate("/");
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={styles.backButtonPosition}>
        <Button
          onClick={() => handleOnClickNavigateBack()}
          variant="contained"
          sx={[styles.buttonColor, styles.buttonHover]}
        >
          Back
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sx={[styles.form, styles.pageItems, styles.listBackground]}
      >
        <Form
          handleOnSubmit={handleOnSubmit}
          fieldsError={fieldsError}
          formData={formData}
          handleOnChange={handleOnChange}
          title="Add new user"
          buttonTitle="Send"
        />

        {alert.display && (
          <Alert severity={alert.severity}>{alert.message}</Alert>
        )}
      </Grid>
    </Grid>
  );
}
