import apiClient from "services/apiClient";

const { get, post } = apiClient;
const headers = {
  "Content-Type": "application/json",
};

// All APIs can be added here as functions for enhanced reusability, configurability, and unit testing.
export const APIs = {
  generateEmails(requestData: any) {
    return post(`/generate-emails`, requestData, { headers });
  },
  test() {
    return get("/");
  },
};
