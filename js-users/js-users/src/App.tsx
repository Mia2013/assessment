import React, { useState } from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import UserProvider from "./context/userContext";

import Home from "./pages/Home";
import AddNewUser from "./pages/AddNewUser";
import EditUser from "./pages/EditUser";
import { stylesObject } from "./types/types";



const styles: stylesObject = {
  container: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "100vh",
  },
};

function App() {

  return (
    <UserProvider>
      <Box className="App" style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new" element={<AddNewUser />} />
          <Route path="edit/:userId" element={<EditUser />} />
        </Routes>
      </Box>
    </UserProvider>
  );
}

export default App;
