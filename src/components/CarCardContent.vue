<script setup>
    defineProps({
        car: {
            type: Object, 
            required: true
        },
    })
</script>

<template>
    <div class="card-body">
        <h5 class="card-title" id="car">{{ car.company.make }} {{ car.model }}</h5>
        <h6 class="card-text">${{ car.price }}</h6>
        <p class="card-text-truncate"> Released: {{ car.releaseYear }}</p>
        <small class="text-muted"> Posted 2 seconds ago </small>
    </div>
</template>

