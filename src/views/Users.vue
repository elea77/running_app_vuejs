<template>
  <div class="container">
    <TitlePage title="Liste utilisateurs" />
    <router-link to="/AddAdmin">
      <button class="btn btn-primary mb-2">Ajouter un Administrateur</button>
    </router-link>
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Prénom</th>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col">Téléphone</th>
            <th scope="col">Admin</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="user in usersFromApi" v-bind:key="user._id">
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.isAdmin }}</td>
                    <td>
                      <button @click="del(user._id)" class="no-btn">
                        <span class="iconify" data-inline="false" data-icon="fluent:delete-dismiss-28-filled" style="font-size: 28px; color: #CA1C46; "></span>
                      </button>
                      <router-link :to="{name:'EditUser',params:{id:user._id}}">
                        Modifier
                      </router-link>
                    </td>                   
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  import TitlePage from '../components/TitlePage';
  import ProductsGrid from '../components/product/ProductsGrid';
  import ApiUsers from '../mixins/ApiUsers';
  export default {
    components: {
      TitlePage,
      ProductsGrid,
    },
    data: function() {
      return {
        usersFromApi: [],
        searchValue: ""
      };
    },
    mixins:[ApiUsers],
    methods: {
      del: function(id) {
        console.log(id);
        this.deleteUser(id)
        .then(data => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
      }
    },
    created() {
      this.getUsers()
        .then((data) => {
          this.usersFromApi = data;
        })
        .catch((err) => console.log(err));
    },
  };
</script>

<style lang="scss" scoped>

.container{
  margin-top: 30px;
  margin-right: 80px;
}
.no-btn {
  background: transparent;
  border: none !important;
  font-size:0;
 }
</style>