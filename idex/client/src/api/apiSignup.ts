import axios from 'axios'
import type { UserSignup } from '../interfaces/Users';

export const apiSignup = async (signup: UserSignup) => {
    try {
      const host = "signuser/users";
      const response = await axios.post(host, {
          username: signup.username,
          password: signup.password,
          email: signup.email,
        });

      const data = await response.data;

      if (response.status !== 201) {
        throw new Error("User information not saved, check network tab!");
      }
      return data;
    } catch (error) {
      console.error(`Signup failed: ${error}`);
      return false;
    }
}