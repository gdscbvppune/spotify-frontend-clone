const API_BASE_URL = "http://54.190.77.112:3000/";
const LOGIN_API = API_BASE_URL + "accounts/token/";
const REFRESH_ACCESS_TOKEN_API = LOGIN_API + "refresh/";

exports.LOGIN_API = LOGIN_API;
exports.REFRESH_ACCESS_TOKEN_API = REFRESH_ACCESS_TOKEN_API;