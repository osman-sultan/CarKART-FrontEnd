<script setup>
  import CreateListing from '../components/CreateListing.vue';
  import CarCardDisplay from '../components/CarCardDisplay.vue';
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  const listOfCars = ref([])
  onMounted(async () => {
    await axios
    .get('http://localhost:8085/cars')
    .then(response => {listOfCars.value = response.data})
    })
</script>

<template>
  <main>
    <CreateListing />
    <CarCardDisplay :cars="listOfCars" />
  </main>
</template>
    

