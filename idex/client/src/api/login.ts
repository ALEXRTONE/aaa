import axios from 'axios'

interface LogInfo {
    username: string,
    password: string
}

export const login = async (login: LogInfo) => {
    try {
      const host = "https://idex-backend-5udh.onrender.com/auth/login";
      const response = await axios.post(host, {
          username: login.username,
          password: login.password,
        });

      const data = await response.data;

      if (response.status !== 200) {
        throw new Error("User information not retrieved, check network tab!");
      }
      return data;
    } catch (error) {
      console.error(`Validation failed: ${error}`);
      return false;
    }
}