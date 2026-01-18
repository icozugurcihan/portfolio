import axios from "axios";

export const sendContact = async () => {
  const response = await axios.post(
    "https://reqres.in/api/workintech",
    {
      name: "Portfolio Contact",
      message: "Hire me button clicked"
    }
  );

  return response.data;
};
