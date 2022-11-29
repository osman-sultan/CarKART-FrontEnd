<script setup>
defineProps({
    review:{
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">{{ review.car.company.make }} {{ review.car.model }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Car Id: {{review.car.id}}</h6>
        </div>
        <div class="card-body">
            <p class="card-text">{{review.reviewText}}</p>
        </div>
    </div>
</template>