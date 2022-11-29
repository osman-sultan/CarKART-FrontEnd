<script setup>
    import axios from 'axios';
    import {ref, onMounted} from 'vue'
    const cars = ref(false)

    onMounted(async () => {
        await axios
        .get('http://localhost:8085/cars/')
        .then(response => {
            cars.value = response.data
        })
        console.log(cars);
    })

    const emit = defineEmits(['filter-model'])
    function filter (model){
        emit('filter-model', model)
    }



</script>

<template>
    <div class = "container">
        <div class = "row">
            <div class = "col text-center my-4">
                <h1>Filters</h1>

            </div>
        </div>

        <div class = "row at-3 mb-4">
            <div class = "col d=flex justify content-center">
                <div v-for="car in cars" :car="car">
                    <button type = "button" class = "btn
                    btn-primary mx-1 text-dark" @click="filter(car.model)">{{car.model}}</button>
                </div>
            </div>
            </div>



        <div class="form-check">
            <div v-for="car in cars" :car="car">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" @click="filter(car.model)">
                <label class="form-check-label" for="flextRadioDefault1">
                    {{car.model}}
                </label>
            </div>

        </div>

        <h1>Checkbox</h1>

        <div class="form-check">
            <div v-for="car in cars" :car="car">
                <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexCheckDefault1" @click="filter(car.model)">
                <label class="form-check-label" for="flextCheckDefault1">
                    {{car.model}}
                </label>
            </div>

        </div>
    
    </div>


    
    

</template>

<style>

.btn:focus{
    outline: none!important;
    box-shadow: none!important;
}

.btn-primary{
    background-color: #fff! important;
    border: none;
}

.btn-primary:hover{
    background-color: #f7941d! important;
    color: #fff! important;
}

</style>