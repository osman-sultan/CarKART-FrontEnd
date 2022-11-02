<script setup>
    import { ref, onMounted, nextTick} from 'vue';
    import axios  from 'axios'
    defineProps({
        vehicle: {
            type: Object, 
            required: true
        },
    })
    const count = ref(0)
    async function del (id){
        await axios
        .delete('http://localhost:8085/cars/' + id)
        .then(response => {
        })
    }
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
    <div class = "container">
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
                    <a href="#" class="btn btn-info">View Listing</a>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editModal" @click="edit(vehicle)">
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
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Car Model" v-model="form[0].model">
                                    </div>
                                    <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Price</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Price" v-model="form[0].price">
                                    </div>
                                    <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Car Make</label>
                                    <input type = "text" class="form-control" id="exampleFormControlInput1" placeholder = "Make" v-model = "form[0].make">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" @click="update(form[0])">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>
                    <button type="button" class="btn btn-danger" @click="del(vehicle.id)">Delete Listing</button>
                </div>
            </div>
        </div>
    </div>
</template>