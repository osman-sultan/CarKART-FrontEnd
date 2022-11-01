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
        type: String,
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
                <img :src="imgSrc" class="card-img-top" alt={{altText}}>
                <div class ="card-body">
                    <h5 class="card-title">{{title}}</h5>
                    <h6 class="card-text">
                        {{price}}
                    </h6>
                    <div class="card-text">
                        <p class="text-truncate">{{description}}</p>
                        <small class="text-muted">{{timePosted}}</small>
                    </div>
                    <a href="#" class="btn btn-info">View Listing</a>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editModal">
                        Edit Listing
                        </button>
                        <!-- Modal -->
                            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Listing</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Car Model</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Car Model">
                                    </div>
                                    <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Price</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Price">
                                    </div>
                                    <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Car Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>
                    <a href="#" class="btn btn-danger">Delete Listing</a>
                </div>
            </div>
        </div>
    </div>
</template>