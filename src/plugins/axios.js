"use strict";

import Vue from "vue";
import axios from "axios";
import mockConfig from "../mock.config";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    baseURL: "",
    timeout: 60 * 1000, // Timeout
    withCredentials: true // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        console.log(config);
        if (process.env.NODE_ENV === "development") {
            const needMock = (mockConfig || []).some(rule => {
                if (typeof rule === "string") {
                    return rule === config.url;
                }
                if (rule instanceof RegExp) {
                    return rule.test(config.url);
                }
                if (typeof rule === "object") {
                    return (
                        rule.method === config.method && rule.url === config.url
                    );
                }
            });
            if (needMock) {
                config.url = `/mock${config.url}`;
            }
        }
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

Plugin.install = function(Vue, options) {
    options;
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        }
    });
};

Vue.use(Plugin);

export default Plugin;
