import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f76349b661ef4cec8f1767eab8d7857e",
  },
});
