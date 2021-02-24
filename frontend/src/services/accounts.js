import axios from "axios";
const baseUrl = "http://localhost:3000/api/accounts";

const getAccounts = () => {
  return axios.get(baseUrl);
};

export default { getAccounts: getAccounts };
