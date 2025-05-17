import axios from "axios";
import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  async login({ username, password }) {
    try {
      const user = await axios.post(
        "http://159.223.30.242:8080/api/auth/signin",
        {
          username,
          password,
        },
      );

      console.log(user.data);

      localStorage.setItem("token", user.data.accessToken);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw new Error(err.response?.data.message);
      } else {
        throw new Error("Something went wrong");
      }
    }
  },
  // called when the user clicks on the logout button
  async logout() {
    localStorage.removeItem("token");
  },
  // called when the API returns an error
  async checkError({ status }: { status: number }) {
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      throw new Error("Session expired");
    }
  },
  // called when the user navigates to a new location, to check for authentication
  async checkAuth() {
    if (!localStorage.getItem("token")) {
      throw new Error("Authentication required");
    }
  },
};
