import axios from "axios";
import { UserStatus, User } from "../types";

const URL = "https://assessment-users-backend.herokuapp.com";

export async function getData() {
  try {
    const response = await axios.get(`${URL}/users.json`);
    if (response.status === 200) {
      const result = response.data;
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error();
  }
}

export async function addUser(firstName: string, lastName: string) {
  try {
    const formData = {
      first_name: firstName,
      last_name: lastName,
      status: UserStatus.Active,
    };
    const response = await axios.post(`${URL}/users.json`, formData);
    if (response.status === 201) {
      const result = response.data;
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error();
  }
}

export async function getOneUserById(userId: number) {
  try {
    const response = await axios.get(`${URL}/users/${userId}.json`);
    if (response.status === 200) {
      const result = response.data;
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error();
  }
}

export async function editUser(user: User) {
  try {
    const response = await axios.put(`${URL}/users/${user.id}.json`, user);
    if (response.status === 204) {
      const result = response.data;
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error();
  }
}
