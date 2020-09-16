import Vue from "vue";

class Auth {
    static login(username, password) {
        return Vue.axios.post("/login", {
            username,
            password
        });
    }
}

export default Auth;
