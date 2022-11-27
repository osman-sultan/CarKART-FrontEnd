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
        })
</script>


<template>
    <div class="container">
        <div class="row gx-5 pt-5">
            <div class="col-6">
                <v-select :options="listOfCars" label="model" v-model="car1">
                    <template v-slot:option="option" >
                        <img :src="option.carURL" class="selectCars" />
                        <div>
                            {{ option.company.make }} {{ option.model }}
                        </div>   
                    </template>
                </v-select>
            </div>
            <div class="col-6">
                <v-select :options="listOfCars" label="model" value="car2" v-model="car2">
                    <template v-slot:option="option">
                        <img :src="option.carURL" class="selectCars" />
                        <div>
                            {{ option.company.make }} {{ option.model }}
                        </div>   
                    </template>
                </v-select>
            </div>
        </div>
        <div class="row gx-5 pt-5">
            <div class="col-6">
                <ul class="list-group" v-if="car1" pt-5>
                    <li class="list-group-item"><img :src="car1.carURL" class="selectedCar"/></li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            </div>
            <div class="col-6">
                <ul class="list-group" v-if="car2" my-5>
                    <li class="list-group-item"><img :src="car2.carURL" class="selectedCar"/></li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
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
</style>