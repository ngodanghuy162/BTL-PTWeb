import axios from 'axios';
import {useAuth} from "../hooks/AuthContext";
// const {getUser} = useAuth();
// const user = getUser();

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request` for the full list of configs
const axiosClient = axios.create({
    // baseURL: 'https://api.ezfrontend.com/',
 baseURL:'http://localhost:8080',
 headers: {
 'content-type': 'application/json',
//  'Authorization': `Bearer ${user.token}`,
 },
});
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
  //   const user = useAuth().getUser();

  // // Thêm Authorization header
  // config.headers['Authorization'] = `Bearer ${user.token}`;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default axiosClient;