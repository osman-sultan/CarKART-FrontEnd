<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue'
  
  /*
  defineProps({
    review: {
        type: Object, 
        required: true
    }
  })

  const reviewName = ref('Reviews')
  const userName = ref('Users')

  const fields = ref([
    {key: 'review.user.firstName', label: 'First Name', sortable: true},
    {key: 'review.user.lastName', label: 'Last Name', sortable: true},
    {key: 'dateTimeStamp', label: 'Timestamp', sortable: true},
  ],)
  */

  const reviews = ref(null)
  const users = ref(null)

  onMounted(async () => {
        await axios
        .get('http://localhost:8085/reviews/') 
        .then(response => {
        reviews.value = response.data
        })
  })
  onMounted(async () => {
        await axios
        .get('http://localhost:8085/users/') 
        .then(response => {
        users.value = response.data
        })
  })
</script>

<template>
  <div class="container">
    <p> wat is this page for and how should reviews be displayed hmm </p>
    <h2> Users </h2>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :user="user">
          <td>{{user.firstName}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.email}}</td>
        </tr>
      </tbody>
    </table>

    <h2> Reviews </h2>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Timestamp</th>
          <th scope="col">Likes</th>
          <th scope="col">Replies</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="review in reviews" :review="review">
          <td>{{review.user.firstName}}</td>
          <td>{{review.user.lastName}}</td>
          <td>{{review.dateTimeStamp}}</td>
          <td>{{review.likes}}</td>
          <td>{{review.replies}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>