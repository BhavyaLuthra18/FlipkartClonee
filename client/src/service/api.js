import axios from "axios";

const URL = "http://localhost:8001";

// Signup
export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while signup api", error);
  }
};

// Log in
export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while login api", error);
    return error.response;
  }
};
