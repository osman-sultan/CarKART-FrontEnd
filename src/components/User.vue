<script setup>
    import axios from 'axios';
    import { ref, onMounted } from 'vue'
    
    defineProps({
        users: {
            type: Object, 
            required: true
        },
    })
    
    const users = ref(null)
    onMounted(async () => {
        await axios
        .get('http://localhost:8085/users')
        .then(response => {
            users.value = response.data
        })
    })
    //function get(users){
        //axios.get('http://localhost:8085/users' + users.id, {
            //"id": users.id,
            //"username": users.username,
            //"firstName": users.firstName,
            //"lastName": users.lastName,
            //"email": users.email,
            //"password": users.password,
            //"address": users.address,

        //})
        //.then(() => console.log("Get"))
        //.catch(function (error) {
            //console.log(error)
        //})
    //}



</script>

<template>
    
    <div class="users">
        <table class="table table-striped">
            <caption>
                User Information Table
            </caption>
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">username</th>
                    <th scope="col">firstName</th>
                    <th scope="col">lastName</th>
                    <th scope="col">email</th>
                    <th scope="col">password</th>
                    <th scope="col">address</th>
                </tr>
            </thead>
            <tbody v-for="user in users" :key="id" >
                <!--<th scope="row">1</th>-->
                <!--<th v-for="item in 15">{{users.id}}</th>-->
                <!--<td>Mark</td>-->    
                <td>{{user["id"]}}</td>>
                <td>{{user["username"]}}</td>>
                <td>{{user["firstName"]}}</td>>
                <td>{{user["lastName"]}}</td>>
                <td>{{user["email"]}}</td>>
                <td>{{user["password"]}}</td>>
                <td>{{user["address"]}}</td>>
            </tbody>
        </table>

    </div>


</template>


