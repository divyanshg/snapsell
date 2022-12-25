import { NativeEventEmitter } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "apis/axios";

const eventEmitter = new NativeEventEmitter();

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e.msg);
    return true;
  }
};

const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e.msg);
  }
};

export default {
  login: async (username, password) => {
    try {
      let res = await axios.post("/auth/login", {
        username,
        password,
      });

      if (res.data.msg === "Login successful") {
        eventEmitter.emit("auth", {
          payload: {
            event: "login",
          },
        });
        return res.data;
      }

      if (res.data.message) {
        return {
          errors: {
            message: res.data.message,
          },
        };
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  },
  logout: async () => {
    try {
      let res = await axios.post(`/logout`);
      if (res.data.message === "Logged out successfully") {
        eventEmitter.emit("auth", {
          payload: {
            event: "logout",
          },
        });
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  },
  currentAuthenticatedUser: (axiosPrivate) => async (options) => {
    if (options.bypassCache) {
      const res = await axiosPrivate.get("/auth/user/current");
      if (res.data.message === "Unauthorized") {
        return null;
      }
      await setData("user", JSON.stringify(res.data));
      return res.data;
    } else {
      const data = await getData("user");
      if (data) {
        return JSON.parse(data);
      } else {
        return null;
      }
    }
  },
};
