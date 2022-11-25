<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'
  import "vue-select/dist/vue-select.css";
  defineProps({
    nextId: {
      type: Number,
      required: true,
    },
  })
  const listOfCompanies = ref([])

  onMounted(() => {
    axios
    .get('http://localhost:8085/company/')
    .then(response => {listOfCompanies.value = response.data})
  })

  const form = ref({
      make: '',
      model: '',
      releaseYear: null,
      fuelType: '',
      price: null,
      vehicleType: '',
      hp: null,
      mileage: null,
      colour: '',
      transmission: '',
      carURL: '',
  })
  
  function resetForm(){
    form.value.make = ''
    form.value.model = ''
    form.value.releaseYear = null
    form.value.fuelType = ''
    form.value.price = null
    form.value.vehicleType = ''
    form.value.hp = null
    form.value.mileage = ''
    form.value.colour = ''
    form.value.transmission = ''
    form.value.carURL = ''
  }

  const emit = defineEmits(['add-car'])
  function create (form, nextId){
    if (
            typeof form.make === 'object' &&
            !Array.isArray(form.make) &&
            form.make !== null
        ){
            form.make = form.make.make
        }
    emit('add-car', form, nextId)
    resetForm()
  }
    
</script>

<template>
  <!-- Modal -->
  <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="creatingListing" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="creatingListing">Create Vehicle Listing</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Car ID</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" v-model="nextId" placeholder="0" disabled readonly>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput2" class="form-label">Car Make</label>
              <v-select :options="listOfCompanies" label="make" v-model="form.make">
                <template v-slot:option="option">
                  <img :src="option.logoURL" class="selectLogos" />
                    {{option.make}}
                </template>
              </v-select>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput3" class="form-label">Car Model</label>
              <input type="text" class="form-control" id="exampleFormControlInput3" v-model="form.model" placeholder="Car Model">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput4" class="form-label">Car Release Year</label>
              <input type="number" class="form-control" id="exampleFormControlInput4" v-model="form.releaseYear" placeholder="2022">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput5" class="form-label">Fuel Type</label>
              <input type="text" class="form-control" id="exampleFormControlInput5" v-model="form.fuelType" placeholder="Fuel Type">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput6" class="form-label">Price ($CAD)</label>
              <input type="number" class="form-control" id="exampleFormControlInput6" v-model="form.price" placeholder="$0.00">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput7" class="form-label">Vehicle Type</label>
              <input type="text" class="form-control" id="exampleFormControlInput7" v-model="form.vehicleType" placeholder="Vehicle Type">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput8" class="form-label">Horsepower</label>
              <input type="number" class="form-control" id="exampleFormControlInput8" v-model="form.hp" placeholder="0">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput9" class="form-label">Mileage (MPG)</label>
              <input type="number" class="form-control" id="exampleFormControlInput9" v-model="form.mileage" placeholder="0">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput10" class="form-label">Colour</label>
              <input type="text" class="form-control" id="exampleFormControlInput10" v-model="form.colour" placeholder="Colour">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput11" class="form-label">Transmission</label>
              <input type="text" class="form-control" id="exampleFormControlInput11" v-model="form.transmission" placeholder="Transmission">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput11" class="form-label">Image URL</label>
              <input type="url" class="form-control" id="exampleFormControlInput12" v-model="form.carURL" placeholder="URL">
            </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-warning" @click="resetForm()">Reset</button>
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click="create(form, nextId)">Create Listing</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .selectLogos{
    height: 2em;
    width: 2em;
    margin-right: 1em;
  }
</style>