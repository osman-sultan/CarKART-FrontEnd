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

    const query =''

    const emit = defineEmits(['search-car'])
    function search (query){
        emit('search-car', query)
    }

</script>