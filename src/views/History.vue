
<template>
    <div class="main-panel">
        <div class="container">
            <TitlePage title="Historique" />

            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Prix</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">ID User</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in productsFromApi" v-bind:key="product._id">
                        <td><p>{{ product.priceH }} €</p></td>
                        <td>{{ product.dateH }}</td>
                        <td>{{ product.timeH }}</td>
                        <td>
                            <router-link :to="{name:'InfosUser',params:{id:product.user}}">
                                Informations utilisateur
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import ApiHistories from '../mixins/ApiHistories';

    export default {
        name:"Product",
        components:{
            TitlePage
        },
        data: function() {
            return {
                productsFromApi: [],
            }
        },
        mixins:[ApiHistories],
        created() {
            this.getAllHistoryByProduct()
               .then((data) => {
                    this.productsFromApi = data;
                })
                .catch((err) => console.log(err));
        }
    }
</script>

<style lang="scss" scoped>


</style>