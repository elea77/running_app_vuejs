<template>
    <div class="wrapper" v-if="user.firstName">
        <link rel="stylesheet" href="https://cdn.rawgit.com/creativetimofficial/material-dashboard/31144b3f/assets/css/material-dashboard.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
        <div class="sidebar" data-color="purple" data-background-color="white">
            <div class="logo">
                <img src="../assets/logo.png" alt="logo">
            </div>
             <div class="sidebar-wrapper">
                <ul class="nav">
                    <li class="nav-item active  ">
                        <a class="nav-link">
                            <p>Dashboard</p>
                        </a>
                    </li>
                </ul>
                <ul class="nav">
                    <li>
                        <router-link to="/offers">Offres</router-link>
                    </li>
                </ul>
                <ul class="nav">
                    <li>
                        <router-link to="/account">Mon compte</router-link>
                    </li>
                </ul>
                <ul class="nav">
                    <li>
                        <router-link to="/dashboard">Dashboard</router-link>
                    </li>
                </ul>
                <ul class="nav" id="bottom">
                    <li>
                        <button @click="logout">Se déconnecter</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import ApiUsers from '../mixins/ApiUsers';

    export default {
         data: function() {
            return {
                user:{}
            }
        },
        mixins:[ApiUsers],
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.isLogged = false;
                this.$router.push('/');
                window.location.reload();
            }
        },
        beforeMount() {
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
    img {
        height: auto;
        width: 4em;
    }

    .wrapper{
        height: auto;
    }

    #bottom{
        margin-top: 150%;
    }

    .nav button {
        cursor: pointer;
    }
    
</style>