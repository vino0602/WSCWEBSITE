import { sendLoginRequest } from "../src/api/loginAPI"; // Adjust the import path based on location

const loginData = {
  name: "John Doe",
  email: "johndoe@example.com",
  mobileNumber: "1234567890",
  exploringFor: "Testing",
  howDidYouHear: "Social Media",
};

sendLoginRequest(loginData)
  .then((response) => {
    console.log("Decrypted Response:", response);
  })
  .catch((error) => {
    console.error("Login Request Failed:", error);
  });
