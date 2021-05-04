import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getAllHistoryByProduct() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/history/product/${this.$route.params.id}`, {
                headers: {
                    Authorization: token,
                    "Content-Type":"Application/json"
                }
            })
            .then(res=>res.json())
        },
    }
}