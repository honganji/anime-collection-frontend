import axios from 'axios';
import Cookies from 'js-cookie';

// duration of local storage data expiration
export let EXPIRE_SECOND = 1800;

export function getAuthTokenFromCookie() {
    return Cookies.get("authToken");
}

// set cookie variable with expiration duration
export function setAuthHeader(token) {
    var t = new Date();
    t.setSeconds(t.getSeconds() + EXPIRE_SECOND);
    Cookies.set(
        "authToken",
        token,
        { expires: t },
    )
};

// define api url based on if it's the dev phase or production one
axios.defaults.baseURL = process.env.REACT_APP_IS_DEV === "true" ? process.env.REACT_APP_LOCALHOST_API_URL : process.env.REACT_APP_GCLOUD_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// template of request
export function request(method, url, data) {
    let headers = {};
    console.log(getAuthTokenFromCookie());
    if (typeof getAuthTokenFromCookie() !== "undefined" && getAuthTokenFromCookie() !== "null") {
        headers = { 'Authorization': `Bearer ${getAuthTokenFromCookie()}` };
    }

    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data
    });
};
