<script setup>
    import KeywordSearch from '../components/KeywordSearch.vue';
    import { ref, onMounted, watch } from 'vue'
    import axios from 'axios'

    const listOfCars = ref([])
    const listOfCompanies = ref([])

    const car1 = ref(null)
    const car2 = ref(null)

    const init = onMounted(async () => {
        await axios
        .get('http://localhost:8085/cars')
        .then(response => {listOfCars.value = response.data})
        await axios
        .get('http://localhost:8085/company')
        .then(reponse => listOfCompanies.value = reponse.data)

        if (listOfCars.value.length){
            listOfCars.value.map(function (x){
                return x.item_data = x.releaseYear + ' ' + x.company.make + ' ' + x.model
            })
        }
    })
</script>

<template>
    <div class="container">
        <div class="row gx-5 pt-5">
            <div class="col-6">
                <v-select :options="listOfCars" :reduce="(option) => option" label="item_data" value="car1" v-model="car1">
                    <template v-slot:option="option" >
                        <img :src="option.carURL" class="selectCars" />
                        <div>
                            {{ option.company.make }} {{ option.model }}
                        </div>   
                    </template>
                </v-select>
            </div>
            <div class="col-6">
                <v-select :options="listOfCars" :reduce="(option) => option" label="item_data" value="car2" v-model="car2">
                    <template v-slot:option="option">
                        <img :src="option.carURL" class="selectCars" />
                        <div>
                            {{ option.releaseYear }} {{ option.company.make }} {{ option.model }}
                        </div>   
                    </template>
                </v-select>
            </div>
        </div>
        <div class="row gx-5 pt-5">
            <div class="col-6">
                <ul class="list-group text-center" v-if="car1" pt-5>
                    <li class="list-group-item">
                        <div class="container">
                            <img :src="car1.carURL" class="img-fluid h-25"/>
                        </div>
                    </li>
                    <li class="list-group-item">Make: {{car1.company.make}}</li>
                    <li class="list-group-item">Model: {{car1.model}}</li>
                    <li class="list-group-item">Release Year: {{car1.releaseYear}}</li>
                    <li class="list-group-item">Body Style: {{car1.vehicleType}}</li>
                    <li class="list-group-item">Transmission: {{car1.transmission}}</li>
                    <li class="list-group-item">Horsepower: {{car1.hp}}</li>
                    <li class="list-group-item">Fuel Type: {{car1.fuelType}}</li>
                    <li class="list-group-item">Exterior Colour: {{car1.colour}}</li>
                    <li class="list-group-item">Milage (MPG): {{car1.mileage}}</li>
                    <li class="list-group-item">Price (CAD): ${{car1.price}}</li>
                </ul>
            </div>
            <div class="col-6">
                <ul class="list-group text-center" v-if="car2" my-5 >
                    <li class="list-group-item">
                        <div class="container">
                            <img :src="car2.carURL" class="img-fluid"/>
                        </div>
                    </li>
                    <li class="list-group-item">Make: {{car2.company.make}}</li>
                    <li class="list-group-item">Model: {{car2.model}}</li>
                    <li class="list-group-item">Release Year: {{car2.releaseYear}}</li>
                    <li class="list-group-item">Body Style: {{car2.vehicleType}}</li>
                    <li class="list-group-item">Transmission: {{car2.transmission}}</li>
                    <li class="list-group-item">Horsepower: {{car2.hp}}</li>
                    <li class="list-group-item">Fuel Type: {{car2.fuelType}}</li>
                    <li class="list-group-item">Exterior Colour: {{car2.colour}}</li>
                    <li class="list-group-item">Milage (MPG): {{car2.mileage}}</li>
                    <li class="list-group-item">Price (CAD): ${{car2.price}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .selectedCar {
        height: 100px;
        width: 200px;
    }
    .selectCars{
        height: 2em;
        width: 3em;
    }

    .comp{
        object-fit: container;
    }
</style>