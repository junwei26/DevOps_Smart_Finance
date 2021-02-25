import axios from "axios";
const baseUrl = "http://localhost:8080/api/accounts";

const getAccounts = () => {
  return axios.get(baseUrl, { params: { user: "test" } });
};

export default { getAccounts: getAccounts };
