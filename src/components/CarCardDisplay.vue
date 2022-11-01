<script setup>
import CarCard from '../components/CarCard.vue'

</script>

<template>
    <div class = "container">
        <!--cards-->
        <div class="row justify-content-md-center g-3">
            <CarCard imgSrc="images/Car1.jpg" altText="Car 1" price="$50000" title="Listing Title" description="Listing Description" timePosted= "2 seconds ago"/>
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