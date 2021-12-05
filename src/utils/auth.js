import { LOGIN_API } from "../utils/constants";
import { toast } from 'react-toastify';

const loginUtil = async (username, password) => {
    const apiConfig = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*", 
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            username, password
        })
    };
    let loginAPIResponse = await fetch(LOGIN_API, apiConfig);
    let loginAPIResponseBody = await loginAPIResponse.json();
    switch (loginAPIResponse.status) {
        case 200:
            sessionStorage.setItem("access", loginAPIResponseBody.access);
            sessionStorage.setItem("refresh", loginAPIResponseBody.refresh);
            toast("Logged in successfully");
            window.location.reload();
            break;
        case 401:
            toast.error(loginAPIResponseBody.detail);
            break;
        default:
            toast.error("An error occurred");
    }
}

// const refreshAccess = () => {

// }

export default loginUtil;