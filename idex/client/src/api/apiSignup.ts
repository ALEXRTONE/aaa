import axios from 'axios'
import type { UserSignup } from '../interfaces/Users';

interface Sign {
  username: string
  email: string
  membresia: string
}

export const apiSignup = async (signup: UserSignup): Promise<Sign | undefined>  => {
    try {
      const host = "https://idex-backend-5udh.onrender.com/signup-api/users";
      const response = await axios.post(host, {
          username: signup.username,
          password: signup.password,
          email: signup.email,
        });

        
        if (response.status == 400 || response.status != 201) {
          throw new Error(`User information not saved, check network tab!`);
        }
        
      return response.data;
    } catch (error) {
      console.error(`Signup failed: ${error}`);
    }
}