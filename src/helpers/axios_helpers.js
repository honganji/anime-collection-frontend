import axios from 'axios';


export function getAuthToken() {
    return window.localStorage.getItem('auth_token');
};

export function setAuthHeader(token) {
    window.localStorage.setItem('auth_token', token);
};

axios.defaults.baseURL = process.env.REACT_APP_IS_DEV === "true" ? process.env.REACT_APP_LOCALHOST_API_URL : process.env.REACT_APP_GCLOUD_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export function request(method, url, data) {

    // setAuthHeader(null);

    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = { 'Authorization': `Bearer ${getAuthToken()}` };
    }

    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data
    });
};