import { useState } from "react";

import "./App.scss";
import { Box, Grid, Typography } from "@mui/material";

import Title from "./components/Title";
import Input from "./components/Input";
import DisplayWord from "./components/DisplayWord";

const styles = {
  app: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
  },
};

function App() {
  const [number, setNumber] = useState({
    value: "",
    formattedValue: "",
  });

  return (
    <Box className="App" style={styles.app}>
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center", mt: { xs: 6, sm: 10 } }}>
          <Title title="Arabic Number Conversion Tool" />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center", mt: 5, mb: 3 }}>
          <Typography variant="body2">
            {" "}
            Convert a number to an English word representation
          </Typography>
        </Grid>
        <Grid
          item
          xs={10}
          sm={7}
          sx={{ mx: "auto", textAlign: "center", my: 3 }}
        >
          <Input number={number} setNumber={setNumber} />
        </Grid>
        <Grid item xs={10} sm={7} sx={{ mx: "auto", textAlign: "center" }}>
          <DisplayWord number={number} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
