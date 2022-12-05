import React, { useState } from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddNewUser from "./pages/AddNewUser";
import EditUser from "./pages/EditUser";
import { Users } from "./types";

type stylesObject = {
  container: {
    backgroundImage: string;
    backgroundRepeat: string;
    backgroundSize: string;
    backgroundPosition: string;
    minHeight: string;
  };
};

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
  const [users, setUsers] = useState<Users>([]);

  return (
    <Box className="App" style={styles.container}>
      <Routes>
        <Route path="/" element={<Home users={users} setUsers={setUsers} />} />
        <Route path="new" element={<AddNewUser />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
    </Box>
  );
}

export default App;
