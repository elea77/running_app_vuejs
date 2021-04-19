<template>
    <div class="container mb-5">
        <TitlePage title="Mon compte"/>
        <div>
            <div class="user__account row" v-if="user">
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 mb-5">
                    <h4>Mes informations personnelles</h4><br>
                    <p>Nom : <b>{{user.firstName}}</b></p>
                    <p>Prénom : <b>{{user.lastName}}</b></p>
                    <p>Email : <b>{{user.email}}</b></p>
                    <router-link to="/edit_profile" class="btn btn-primary">Modifier le profil</router-link> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ApiUsers from '../mixins/ApiUsers';
    import TitlePage from '../components/TitlePage'
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                user:{}
            }
        },
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.isLogged = false;
            }
        },
        mixins:[ApiUsers],
        created() {
            const token = localStorage.getItem('token');
            if(token) {
                this.getUser()
                .then(data=>{
                    this.user = data;
                })
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user__info {
        text-align: left;
    }
</style>