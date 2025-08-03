import axios from "axios";

const instance = axios.create({
  baseURL: "/api"   //forntend api request 
});

export default instance;

