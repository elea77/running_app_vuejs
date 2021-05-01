import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getProducts() {
            console.log(apiConfigs.apiUrl);
            return fetch(`${apiConfigs.apiUrl}/products`)
            .then(res=>res.json())
        },
        getOneProducts() {
            console.log(apiConfigs.apiUrl);
            return fetch(`${apiConfigs.apiUrl}/products/${this.$route.params.id}`)
            .then(res=>res.json())
        },

        calculProducts() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/calculProducts`, {
                headers: {
                    Authorization: token
                }
            })
            .then(res=>res.json())
        },
        calculSales() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/calculSales`, {
                headers: {
                    Authorization: token
                }
            })
            .then(res=>res.json())
        }
    }
}