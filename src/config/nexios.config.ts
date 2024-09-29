import { Nexios } from "nexios-http";

const nexiosInstance = new Nexios({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default nexiosInstance;
