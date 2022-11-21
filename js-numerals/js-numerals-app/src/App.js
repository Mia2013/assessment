import "./App.scss";
import { Grid } from "@mui/material";

import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item>
          <Title title="Arabic Number Conversion Tool" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
