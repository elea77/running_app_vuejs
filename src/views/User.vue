<template>
    <div class="main-panel">
        <div class="container">
            <TitlePage title="Mon compte"/>
            <div>
                <div v-if="user">
                    <div>
                        <h4>Mes informations personnelles</h4><br>
                        <p>Nom : <b>{{user.firstName}}</b></p>
                        <p>Prénom : <b>{{user.lastName}}</b></p>
                        <p>Email : <b>{{user.email}}</b></p>
                        <p>Numéro de téléphone : <b>{{user.phone}}</b></p>
                        <router-link to="/edit_profile" class="btn btn-primary">Modifier le profil</router-link> 
                    </div>
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

            var navItems = document.getElementsByClassName("nav-item");
            if(navItems[0]){
                navItems.forEach(element => {
                    element.classList.remove("active");
                });
                var item = document.getElementById("account");
                item.classList.add("active");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user__info {
        text-align: left;
    }
</style>