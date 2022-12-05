import axios from "axios";

const url = "https://assessment-users-backend.herokuapp.com";

export async function getData() {
  try {
    const response = await axios.get(`${url}/users.json`);
    if (response.status === 200) {
      const result = response.data;
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error();
  }
}
