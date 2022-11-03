<script setup>
    import { ref, onMounted, nextTick} from 'vue';
    import axios  from 'axios'
    import ViewReviews from './ViewReviews.vue'

    defineProps({
        vehicle: {
            type: Object, 
            required: true
        },
    })

    async function del (id){
        await axios
        .delete('http://localhost:8085/cars/' + id)
        .then(response => {console.log('deleted')
        })
    }
    const form = ref({
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
    })

    function fillForm(vehicle){
        form.id.value

    }
    function update(form) {
        axios
        .put('http://localhost:8085/cars/' + form.id,  {
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
        .then(() => console.log("Updated"))
        .catch(function (error) {
            console.log(error)
        })
    }
</script>

<template>
    <div class="col-12 col-md-6 col-lg-3">
        <div class="card">
            <img :src= "vehicle.company.logoURL" class="card-img-top" alt={{altText}}>
            <div class ="card-body">
                <h5 class="card-title">{{ vehicle.company.make }} {{vehicle.model}}</h5>
                <h6 class="card-text">
                    ${{ vehicle.price }}
                </h6>
                <div class="card-text">
                    <p class="text-truncate">Released: {{vehicle.releaseYear}}</p>
                    <small class="text-muted">{{timePosted}}</small>
                </div>

                <!-- Button trigger modal to view reviews -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#viewModal">
                View Listing
                </button>

                <!-- Modal -->
                <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Listing Description</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                <!-- Button trigger modal to edit listing-->
                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editModal">
                Edit Listing
                </button>

                <!-- Modal -->
                <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Listing</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Car Model</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Car Model" v-model="form.model">
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Price</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="0" v-model="form.price">
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Car Make</label>
                            <input type='text' class="form-control" id="exampleFormControlInput1" placeholder='Audi' v-model="form.make">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" @click="update(form)">Save changes {{ vehicle }}</button>
                        </div>
                        </div>
                    </div>
                </div>

                <button type="button" class="btn btn-danger" @click="del(vehicle.id)">Delete Listing</button>
            </div>
        </div>
    </div>
</template>