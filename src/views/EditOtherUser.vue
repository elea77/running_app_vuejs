<template>
    <div class="main-panel">
        <TitlePage title="Modification de l'utilisateur"/>
        <div class="form">
            <form>
                <div class="form__group">
                    <input type="text" v-model="firstName" id="" class="form_input" placeholder="Prénom" > <br>
                </div>
                <div class="form__group">
                    <input type="text" v-model="lastName" id="" class="form_input" placeholder="Nom"> <br>
                </div>
                <div class="form__group">
                    <input type="text" v-model="phone" id="" class="form_input" placeholder="phone"> <br>
                </div>
                <div class="form__group">
                    <button type="submit" class="btn" @click="edit">Enregistrer les modifications</button>
                </div>
            </form>
            <p v-if="messageError">{{ messageError }} </p>
        </div>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import ApiUsers from '../mixins/ApiUsers';
    
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                firstName:"",
                lastName: "",
                phone: "",
                messageError: ""
            }
        },
        mixins:[ApiUsers],
        methods: {
            edit: function(event) {
                event.preventDefault(); // empêche le rechargement de la page
                this.editOtherUser()
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } 
                    else {
                        this.$router.push('/users');
                    }
                })
                .catch(err => console.log(err));
            }
        },
        created() {
    
            this.getOtherUser()
            .then(data=>{
                this.firstName = data.firstName;
                this.lastName = data.lastName;
                this.phone = data.phone;
                    
            })
            .catch((err) => console.log(err));
            
            
        },
    }
</script>

<style lang="scss" scoped>
    .form {
        .form_input {
            width: 40%;
            height: calc(1.5em + .75rem + 2px);
            padding: .375rem .75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            margin-bottom: 1rem;
        }
        .btn {
            display: inline-block;
            font-weight: 400;
            color: #212529;
            text-align: center;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;
        }
    }
</style>