<script setup>
    import { ref, watch } from 'vue'

    const filteredCars = ref([])
    const search = ref("")

    const Props = defineProps({
        listOfCars: {
            type: Array, 
            required: true
        },
    })

    watch(search, () => {
        console.log(search)
        console.log(Props.listOfCars)
        if((search.value.trim().length) || (!search.value.length)){
            filteredCars.value = Props.listOfCars.filter(car => car.model.toLowerCase().includes(search.value.toLowerCase()) || car.company.make.toLowerCase().includes(search.value.toLowerCase()))
            carSearch(filteredCars)
        }
        
        // let car = document.getElementById("car");
    // let pattern = new RegExp(`${search}`, "gi")
    // car.innerHTML = car.textContent.replace(pattern, match => `<mark>${match}</mark>`)
    })

    const emit = defineEmits(['search-car'])
    function carSearch (filteredCars){
        emit('search-car', filteredCars)
    }

</script>


<template>
    <div class="col-lg-10 col-sm-12 col-md-12">
        <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
        <div class="input-group">
            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Searching for a listing..." v-model.trim="search">
            <div class="input-group-text"><i class="bi bi-search"></i></div>
        </div>
    </div>
</template>



