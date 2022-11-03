<script setup>
    import axios from 'axios';
    import { ref, onMounted } from 'vue'
    import CarCard from './CarCard.vue'
    const cars = ref(null)
    onMounted(async () => {
        await axios
        .get('http://localhost:8085/cars')
        .then(response => {
            cars.value = response.data
        })
    })
</script>

<template>
    <div class = "container">
        <!--cards-->
        <div class="row justify-content-md-left g-3">
            <CarCard v-for="car in cars" :vehicle="car"/>
        </div>

        <!--page navigation-->
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
        </nav>
    </div>
</template>