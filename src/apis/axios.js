import axios from "axios";

const baseURL = "http://192.168.1.2:3000";

export default axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const endpoints = {
  CREATE_LAWYER_APPLICATION: "/lawyer-application",
  GET_ALL_LAWYERS: "/api/v1/users/lawyers",
};
