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
  
    async function deleteCar(id){
    if (confirm('Are you sure?')){
      await axios
        .delete('http://localhost:8085/cars/' + id)
        .then(response => {console.log('deleted')
        })
        listOfCars.value = listOfCars.value.filter((car) => car.id !== id)
    }
  }

  async function addCar(form, nextId){
    console.log("Making a create request")
    await axios
    .post('http://localhost:8085/cars', {
      "id": nextId,
      "make": form.make,
      "model": form.model,
      "releaseYear": form.releaseYear,
      "fuelType": form.fuelType,
      "price": form.price,
      "vehicleType": form.vehicleType,
      "hp": form.hp,
      "mileage": form.mileage,
      "colour": form.colour,
      "transmission": form.transmission,
      'carURL': form.carURL,
    })
    .then(response => {[...listOfCars.value, response.data]})
    .catch(function (error) {
      console.log(error)
    })
    axios
    .get('http://localhost:8085/cars')
    .then(response => {listOfCars.value = response.data})
  }

  async function updateCar(form){
    console.log("Making a create request")
    await axios
    .put('http://localhost:8085/cars/' + form.id, {
      "id": form.id,
      "make": form.make,
      "model": form.model,
      "releaseYear": form.releaseYear,
      "fuelType": form.fuelType,
      "price": form.price,
      "vehicleType": form.vehicleType,
      "hp": form.hp,
      "mileage": form.mileage,
      "colour": form.colour,
      "transmission": form.transmission,
      'carURL': form.carURL,
    })
    .then(response => {[...listOfCars.value, response.data]})
    .catch(function (error) {
      console.log(error)
    })
    axios
    .get('http://localhost:8085/cars')
    .then(response => {listOfCars.value = response.data})
  }
</script>

<template>
  <main>
    <!-- Button to trigger create modal -->
    <div class="d-flex p-3 justify-content-end">
      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#createModal">
        Create Vehicle Listing
      </button>
    </div>
    <CreateListing 
    @add-car="addCar"
    :nextId = "Object.keys(listOfCars).length + 1"/>
    <CarCardDisplay @delete-car="deleteCar" 
    @update-car="updateCar"  
    :cars="listOfCars" />
  </main>
</template>
    

