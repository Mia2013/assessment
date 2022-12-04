import { useState, useEffect } from "react";
interface User {
  id: number;
  last_name: string;
  first_name: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  url: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [alert, setAlert] = useState<string>("");

  async function getUsers() {
    const url = "https://assessment-users-backend.herokuapp.com";
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

  return <div className="App"></div>;
}

export default App;
