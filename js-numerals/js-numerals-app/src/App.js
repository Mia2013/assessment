import { useState, useEffect } from "react";

import "./App.scss";
import { Box, Grid, Typography } from "@mui/material";

import Title from "./components/Title";
import Input from "./components/Input";

const styles = {
  app: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw"
  },

};

function App() {
  const [number, setNumber] = useState("");

  return (
    <Box className="App" style={styles.app}>
      <Grid container>
        <Grid item xs={12} sx={{textAlign: "center", mt: 15}}>
          <Title title="Arabic Number Conversion Tool" />
        </Grid>
        <Grid item xs={12} sx={{textAlign: "center"}}>
          <Input number={number} setNumber={setNumber} />
        </Grid>
        <Grid item xs={12} sx={{textAlign: "center"}}>
          <Typography > {number}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
