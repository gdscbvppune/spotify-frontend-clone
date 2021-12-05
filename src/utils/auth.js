import { LOGIN_API, REFRESH_ACCESS_TOKEN_API } from "../utils/constants";
import { toast } from 'react-toastify';

export const loginUtil = async (username, password) => {
    try {
        const apiConfig = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
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
                break;
        }
    } catch (error) {
        console.log("An error occurred", error);
    }
}

export const refreshAccess = async () => {
    const refreshToken = sessionStorage.getItem("refresh");
    const apiConfig = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            refresh: refreshToken
        })
    };
    let refreshAPIResponse = await fetch(REFRESH_ACCESS_TOKEN_API, apiConfig);
    let refreshAPIResponseBody = await refreshAPIResponse.json();
    switch (refreshAPIResponse.status) {
        case 200:
            sessionStorage.setItem("access", refreshAPIResponseBody.access);
            break;
        default:
            toast.error("An error occurred");
            sessionStorage.clear();
            window.location.reload();
            break;
    }
}
