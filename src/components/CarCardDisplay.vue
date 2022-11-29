<script setup>
    import CarCardContent from './CarCardContent.vue'
    import DeleteCar from './DeleteCar.vue'
    import { RouterLink } from 'vue-router'
    
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    defineProps({
        cars: {
            type: Array,
            required: true,
        },
        userId: {
            type: Number,
            required: true
        }
    })

    const listOfCompanies = ref([])

    onMounted(() => {
        axios
        .get('http://localhost:8085/company/')
        .then(response => {listOfCompanies.value = response.data})
    })

    const emit = defineEmits(['delete-car', 'update-car'])
    function update(form){
        if (
            typeof form.make === 'object' &&
            !Array.isArray(form.make) &&
            form.make !== null
        ){
            form.make = form.make.make
        }
        emit('update-car', form)
    }

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
    const form = ref({
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

    function edit(car){
        form.value.id = car.id
        form.value.make = car.company.make
        form.value.model = car.model
        form.value.releaseYear = car.releaseYear
        form.value.fuelType = car.fuelType
        form.value.price = car.price
        form.value.vehicleType = car.vehicleType
        form.value.hp = car.hp
        form.value.mileage = car.mileage
        form.value.colour = car.colour
        form.value.transmission = car.transmission
        form.value.carURL = car.carURL
    }
</script>

<template>
    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="edit-title" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="edit-title">Edit your listing!</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="id" class="form-label">Listing ID</label>
                        <input type="number" class="form-control" id="id" placeholder="1" v-model="form.id" disabled readonly>
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
                        <label for="model" class="form-label">Car Model</label>
                        <input type="text" class="form-control" id="model" placeholder="Civic Type R" v-model="form.model">
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Price ($CAD)</label>
                        <input type="number" class="form-control" id="price" placeholder="$0.00" v-model="form.price">
                    </div>
                    <div class="mb-3">
                        <label for="releaseYear" class="form-label">Release Year</label>
                        <input type='number' class="form-control" id="releaseYear" placeholder='2022' v-model="form.releaseYear">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-warning" @click="resetForm()">Reset</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click="update(form)">Save changes</button>
                </div>
            </div>
        </div>
    </div> 

    <!-- Card layout-->
    <div class="container">
        <div class="row g-3">
            <div class="col-12 col-md-6 col-lg-4"
            :key="parseInt(car.id)" 
            v-for="car in cars">
                <div class="card">
                    <img 
                    :src="car.carURL" 
                    alt="Image of car" 
                    class="card-img-top">
                    <div class="card-body">
                        <CarCardContent :car="car"/>
                        <div class="col d-flex justify-content-center">
                            <!--pass in the car prop-->

                            <RouterLink class="listing" :to="{name: 'listing', params:{id: parseInt(car.id), userId: userId}}">
                                <button type="submit" class="btn btn-primary me-1">View Listing</button>
                            </RouterLink>
                            <button 
                            type="button" 
                            class="btn btn-secondary me-1"
                            data-bs-toggle="modal" 
                            data-bs-target="#editModal"
                            @click="edit(car)">
                                Edit Listing
                            </button>
                            <DeleteCar 
                            :car="car" 
                            @delete-car="$emit('delete-car', car.id)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- page navigation
        <nav aria-label="car cards page navigation">
            <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                    <span class="page-link">Previous</span>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav> -->
    </div>
</template>

<style scoped>
    img {
        object-fit: contain;
    }

    .selectLogos {
        height: 2em;
        width: 2em;
        margin-right: 1em;
    }
</style>