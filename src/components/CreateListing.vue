<script setup>
import axios  from 'axios'
import { ref, onMounted, nextTick} from 'vue';

const form = ref([{
        id: 1,
        make: '',
        model: '',
        releaseYear: 0,
        fuelType: '',
        price: 0.0,
        vehicleType: '',
        hp: 0.0,
        mileage: 0.0,
        colour: '',
        transmission: '',
    },])

function create(form) {
  console.log("Making a create request")
  console.log(form)
        axios
        .post('http://localhost:8085/cars', {
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
        })
        .then(() => console.log("Created"))
        .catch(function (error) {
            console.log(error)
        })
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
            <input type="text" class="form-control" id="exampleFormControlInput1" v-model="form.id" placeholder="ID">
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
            <input type="text" class="form-control" id="exampleFormControlInput4" v-model="form.releaseYear" placeholder="Year">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput5" class="form-label">Fuel Type</label>
            <input type="text" class="form-control" id="exampleFormControlInput5" v-model="form.fuelType" placeholder="Fuel Type">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput6" class="form-label">Price</label>
            <input type="text" class="form-control" id="exampleFormControlInput6" v-model="form.price" placeholder="Enter value $$$">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput7" class="form-label">Vehicle Type</label>
            <input type="text" class="form-control" id="exampleFormControlInput7" v-model="form.vehicleType" placeholder="Vehicle Type">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput8" class="form-label">Horsepower</label>
            <input type="text" class="form-control" id="exampleFormControlInput8" v-model="form.hp" placeholder="Horsepower">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput9" class="form-label">Mileage</label>
            <input type="text" class="form-control" id="exampleFormControlInput9" v-model="form.mileage" placeholder="Mileage">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput10" class="form-label">Colour</label>
            <input type="text" class="form-control" id="exampleFormControlInput10" v-model="form.colour" placeholder="Colour">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput11" class="form-label">Transmission</label>
            <input type="text" class="form-control" id="exampleFormControlInput11" v-model="form.transmission" placeholder="Transmission">
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="create(form)">Create Listing</button>
        </div>
      </div>
    </div>
  </div>
</template>