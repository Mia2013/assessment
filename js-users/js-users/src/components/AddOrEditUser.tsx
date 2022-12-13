import React, { useState, useEffect, ChangeEvent, SyntheticEvent } from "react";
import { Grid, Button, Alert } from "@mui/material";
import {
  FormData,
  AlertType,
  SeverityStatus,
  AddOrEditUserProps,
} from "../types/types";
import { useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import styles from "../style/styles";

export default function AddOrEditUser({
  formTitle,
  alertMessage,
  buttonTitle,
  AddOrEditUserFunction,
  userId,
  editAbleUser,
}: AddOrEditUserProps) {
  const [alert, setAlert] = useState<AlertType>({
    severity: SeverityStatus.Error,
    message: "",
  });
  const [formData, setFormData] = useState<FormData>({
    firstName: editAbleUser?.first_name || "",
    lastName: editAbleUser?.last_name || "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      firstName: editAbleUser?.first_name || "",
      lastName: editAbleUser?.last_name || "",
    });
  }, [editAbleUser]);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleOnSubmit(e: SyntheticEvent) {
    e.preventDefault();
    try {
      await AddOrEditUserFunction(formData, userId);
      setAlert({
        severity: SeverityStatus.Success,
        message: alertMessage,
      });
      setFormData({ firstName: "", lastName: "" });
    } catch (error) {
      setAlert({
        severity: SeverityStatus.Error,
        message: (error as Error).message,
      });
    }
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
          alert={alert.message}
          formData={formData}
          handleOnChange={handleOnChange}
          title={formTitle}
          buttonTitle={buttonTitle}
          editAbleUser={editAbleUser}
        />
        {alert.message && (
          <Alert severity={alert.severity}>{alert.message}</Alert>
        )}
      </Grid>
    </Grid>
  );
}
