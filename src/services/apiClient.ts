import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

// Axios instance as the API Client.
// Changes will be required only here if a different library needs to be used for making xhr requests.
export default axios.create({
  baseURL,
});
