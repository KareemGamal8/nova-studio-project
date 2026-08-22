import axios from "axios";

const DEFAULT_API_URL = "https://codekody-nodejs-app.vercel.app/api";

const endpoint = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default endpoint;
