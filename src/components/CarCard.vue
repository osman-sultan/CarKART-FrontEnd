<script setup>
defineProps({
    imgSrc: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timePosted: {
        type: String,
        required: true
    },
})
</script>

<template>
    <div class = "container">
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card">
                <img src={{imgSrc}} class="card-img-top" alt={{altText}}>
                <div class ="card-body">
                    <h5 class="card-title">{{title}}</h5>
                    <h6 class="card-text">
                        {{price}}
                    </h6>
                    <p class="card-text">
                        <p class="text-truncate">{{description}}</p>
                        <small class="text-muted">{{timePosted}}</small>
                    </p>
                    <a href="#" class="btn btn-primary">View Listing</a>
                </div>
            </div>
        </div>
    </div>
</template>