<template>
    <h2 align="center"> Cars </h2>
    <div class="search-container">
    <form class="d-flex p-3 justify-content-center" role="search">
    <input class="form-control me-2" type="search" placeholder="Search Cars" v-model="query" aria-label="Search">
    <button class="search-button" @click="search(query)">Search</button>
  </form>
    </div>
</template>

<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue'


  // search(searchTerm){
  //     if(searchTerm){
  //       axios
  //       .get('http://localhost:8085/cars/search/model/'+ searchTerm)
  //       .then(response => (this.students =response.data))
  //       .catch(function (error){
  //         if(error.response){
  //           console.log(error.response.data);
  //         }
  //       })
  //     }
  //     console.log(searchTerm)
  //   };
</script>