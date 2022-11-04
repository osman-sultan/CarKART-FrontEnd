<script setup>
import { ref } from 'vue';

const form = ref([{
        id: null,
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
    },])
    
    const emit = defineEmits(['add-car'])
    function create (form){
        emit('add-car', form)
    }
</script>


<template>
<!-- Button trigger modal -->
<div class="d-flex p-3 justify-content-end">
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#createModal">
    Create Vehicle Listing
  </button>
</div>

  <!-- Modal -->
  <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="creatingListing" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="creatingListing">Create Vehicle Listing</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Car ID</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" v-model="form.id" placeholder="1">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">Car Make</label>
            <input type="text" class="form-control" id="exampleFormControlInput2" v-model="form.make" placeholder="Company">
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
            <input type="number" class="form-control" id="exampleFormControlInput6" v-model="form.price" placeholder="0">
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
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click="create(form)">Create Listing</button>
        </div>
      </div>
    </div>
  </div>
</template>