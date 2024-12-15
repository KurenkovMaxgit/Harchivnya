import axios from "axios";

export default async function placeOrder(payload) {
  return axios
    .post("https://localhost:7048/api/Order", payload)
    .then((response) => {
        console.log(response)
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data", error);
    });
}
