import axios from "axios";

export const loginReq = (data) => {
  return axios.request({
    url: "/UserInfo/Login",
    data,
    method: "post",
  });
};
export const getListReq = (params) => {
  return axios.request({
    url: "/VideoInfo/GetList",
    params,
    method: "get",
  });
};
export const downloadVideo = (params) => {
  return axios.request({
    url: "/VideoInfo/Download",
    params,
    method: "get",
  });
};
// 判断是否登陆
export const getCookie = () => {
  return axios.request({
    url: "/UserInfo/GetCookieModel",
    method: "get",
  });
};

