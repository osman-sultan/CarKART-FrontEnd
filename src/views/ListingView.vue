<script setup>
  import Listing from '../components/Listing.vue';
  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  const props = defineProps({
      id: {
        type: Number, 
        required: true
      },
  })

  const car = ref({
        id: 0,
        make: '',
        model: '',
        releaseYear: 0,
        fuelType: '',
        price: 0,
        vehicleType: '',
        hp: 0,
        mileage: 0,
        colour: '',
        transmission: '',
        carURL: '',
  })

  onMounted(async () => {
    await axios
    .get('http://localhost:8085/cars/' + props.id) 
    .then(response => {car.value = response.data})
  })
</script>


<template>
  <Listing :id="id" :car="car"/> 
</template>
