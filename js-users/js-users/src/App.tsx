import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import { User } from './types';



function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [alert, setAlert] = useState<string>("");
  const url = "https://assessment-users-backend.herokuapp.com";
  const usersPerPage = 10;
  const paginationCount = Math.ceil(users.length / usersPerPage);

  async function getUsers() {
    try {
      const response = await fetch(`${url}/users.json`);
      const result = await response.json();
      if (response.status === 200) {
        setAlert("");
        return setUsers(result);
      }
      throw new Error();
    } catch (error) {
      setAlert("Sorry, but something went wrong, please try again later");
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<Home paginationCount={paginationCount} usersPerPage={usersPerPage} users={users}/>} />
        <Route path="new" element={<New />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </Box>
  );
}

export default App;
