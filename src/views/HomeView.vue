<script setup>
  import CreateListing from '../components/CreateListing.vue';
  import CarCardDisplay from '../components/CarCardDisplay.vue';

  import { ref, onMounted, watch } from 'vue'
  import axios from 'axios'
  
  const listOfCars = ref([])
  const filteredCars = ref([])
  const nextId = ref(0)
  const init = onMounted(async () => {
    await axios
    .get('http://localhost:8085/cars')
    .then(response => {listOfCars.value = response.data, filteredCars.value = response.data, nextId.value = (Object.keys(response.data).length > 0) ? response.data[Object.keys(response.data).length - 1].id + 1 : 1})
  })
  
  async function deleteCar(id){
    if (confirm('Are you sure?')){
      console.log("Making a delete request")
      await axios
      .delete('http://localhost:8085/cars/' + id)
      .then(response => {console.log('Delete successfull!')})
      listOfCars.value = listOfCars.value.filter((car) => car.id !== id)
      init()
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
    console.log("Create request successful")
    init()
  }

  async function updateCar(form){
    console.log(form)
    console.log("Making an update request")
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
    console.log("Update request successful")
    init()
  }

  const search = ref("")

  watch(search, () => {
    filteredCars.value = listOfCars.value.filter(car => car.model.toLowerCase().includes(search.value.toLowerCase()) || car.company.make.toLowerCase().includes(search.value.toLowerCase()))
  })
</script>

<template>
  <main>
    <div class="container p-4">
      <form class="row row-cols-lg-auto g-3 align-items-center justify-content-center">
        <div class="col-12 d-flex justify-content-center w-75">
          <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
          <div class="input-group">
            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Searching for a listing..." v-model="search">
            <div class="input-group-text"><i class="bi bi-search"></i></div>
          </div>
        </div>

        <!-- Button to trigger create modal -->
        <div class="col-12 d-flex justify-content-center">
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#createModal">
            Create Vehicle Listing 
          </button>
        </div>
      </form>
    </div>

    <CreateListing 
    @add-car="addCar"
    :nextId = "nextId"/>
    <CarCardDisplay @delete-car="deleteCar" 
    @update-car="updateCar"  
    :cars="filteredCars" />
  </main>
</template>

<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");
</style>
    

