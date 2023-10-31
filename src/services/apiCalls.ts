import apiClient from "services/apiClient";

const { post } = apiClient;
const headers = {
  "Content-Type": "application/json",
};

export const APIs = {
  generateEmails(requestData: any) {
    return post(`/generate_emails`, requestData, { headers });
  },
};
