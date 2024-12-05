import axios from "axios";

export default async function Menu_fetch() {
  return axios
    .get("https://localhost:7048/api/Item")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data", error);
    });
}
