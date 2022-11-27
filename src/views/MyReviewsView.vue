<script setup>
import MyReviewCard from '../components/MyReviewCard.vue';
import {ref, onMounted} from 'vue';
import axios from 'axios';

const listOfReviews = ref([])
const reviewDto = ref({})

const init = onMounted(async () => {
    console.log('initializing')
    await axios
    .get('http://localhost:8085/reviews')
    .then((response) => {
        listOfReviews.value = response.data
        //reset all info in the review update form
        reviewDto.value = { 
            // dateTimeStamp and userId not needed here
            id:null,
            carId:null,
            reviewText:'',
            carMake:'',
            carModel:''
        }
    })
})

function updateClicked(reviewId, carId, carMake, carModel) {
    reviewDto.value.id = reviewId
    reviewDto.value.carId = carId
    reviewDto.value.carMake = carMake
    reviewDto.value.carModel = carModel
}

function resetReviewForm() {
    reviewDto.value.reviewText = ''
}

async function deleteReview(reviewId) {
    if (confirm('Are you sure?')){
      console.log("Making a delete request")
      await axios
      .delete('http://localhost:8085/reviews/' + reviewId)
      .then(() => {console.log('Delete successfull!')})
      listOfReviews.value = listOfReviews.value.filter((review) => review.id !== reviewId)
      init()
    }
}

async function updateReview(reviewForm) {
    console.log(reviewForm)
    if (reviewForm.reviewText) {
        console.log("Making an update request")
        await axios
        .put('http://localhost:8085/reviews/' + reviewForm.id, {
        "id": reviewForm.id,
        "userId": 1, //placeholder, will be changed to the id of the user who has logged in
        "carId": reviewForm.carId,
        "dateTimeStamp":(new Date()).toUTCString(),
        "reviewText": reviewForm.reviewText
        })
        .then(response => {[...listOfReviews.value, response.data]})
        .catch(function (error) {
        console.log(error)
        })
        console.log("Update request successful")
        init()
    } else {
        alert("You must enter text in order to update your review.")
    }
}

</script>

<template>
    <main>
        <!--Review Edit Modal-->
        <div class="modal fade" id="editReviewModal" tabindex="-1" aria-labelledby="edit-title" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="edit-title">Edit your review</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="carId" class="form-label">Car Id</label>
                            <input type="number" class="form-control" placeholder={{reviewDto.value.carId}} v-model="reviewDto.carId" disabled readonly>
                        </div>
                        <div class="mb-3">
                            <label for="carId" class="form-label">Car Company</label>
                            <input type="text" class="form-control" placeholder={{reviewDto.value.carMake}} v-model="reviewDto.carMake" disabled readonly>
                        </div>
                        <div class="mb-3">
                            <label for="carId" class="form-label">Car Model</label>
                            <input type="text" class="form-control" placeholder={{reviewDto.value.carModel}} v-model="reviewDto.carModel" disabled readonly>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="3" v-model="reviewDto.reviewText"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" @click="resetReviewForm()">Reset</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click="updateReview(reviewDto)">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <h2>My Reviews</h2>
        <div class="reviewDisplay">
            <div v-for="review in listOfReviews" class="cardHolder">
                <MyReviewCard :review="review" @delete-review="deleteReview" @update-clicked="updateClicked"/>
            </div>
        </div>
    </main>
</template>

<style scoped>
.reviewDisplay {
    display:flex;
    flex-direction: column;
    align-items: center;
}
.cardHolder {
    padding-bottom: 1%;
    width:80%;
}
</style>