import apiConfigs from "../configs/api.configs";
import VueJwtDecode from "vue-jwt-decode";

export default {
    methods: {
        getUser() {
            const token = localStorage.getItem("token")
            const decodedToken = VueJwtDecode.decode(token)
            return fetch(`${apiConfigs.apiUrl}/users/${decodedToken.id}`,{
                headers: {
                    Accept: "application/json",
                    Authorization: token,
                },
            }).then((res) => res.json())
        }
    }
}