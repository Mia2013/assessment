import React from "react";
import { Typography, Grid } from "@mui/material";
import PacmanLoader from "react-spinners/PacmanLoader";
import styles from "../style/styles";

export default function Loading() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Typography variant="h3" color={styles.mainColor.color}>
          Loading...
          <PacmanLoader color={styles.mainColor.color} size={40} />
        </Typography>
      </Grid>
    </Grid>
  );
}
