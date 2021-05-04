import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getProducts() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/allProducts`, {
                headers: {
                    Authorization: token,
                    "Content-Type":"Application/json"
                }
            })
            .then(res=>res.json())
        },
        getOneProducts() {
            return fetch(`${apiConfigs.apiUrl}/products/${this.$route.params.id}`)
            .then(res=>res.json())
        },
        editProduct() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/products/${this.$route.params.id}`, {
                method: "PUT",
                headers: {
                    Authorization: token,
                    "Content-Type":"Application/json"
                },
                body: JSON.stringify( {
                    title: this.title,
                    price: this.price,
                    description: this.description,
                    imageUrl: this.imageUrl,
                    
                })
            })
            .then (res => res.json())
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
        },
        calculNotSales() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/calculNotSold`, {
                headers: {
                    Authorization: token
                }
            })
            .then(res=>res.json())
        },
        deleteProduct(id) {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/products/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: token,
                    "Content-Type":"Application/json"
                }
            })
            .then (res => res.json())
        }
    }
}