<script setup>
defineProps({
    review:{
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="card" style="width: 80%;">
        <div class="card-body">
            <h5 class="card-title">{{ review.car.company.make }} {{ review.car.model }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Car Id: {{review.car.id}}</h6>
            <p class="card-text">{{review.reviewText}}</p>
            <button type="button" class="btn btn-secondary">Edit review</button>
            <button type="button" class="btn btn-danger">Delete review</button>
        </div>
    </div>
</template>