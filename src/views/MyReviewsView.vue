<script setup>
import ReviewCard from '../components/ReviewCard.vue';
import {ref, onMounted} from 'vue';
import axios from 'axios';

const listOfReviews = ref([])

const init = onMounted(async () => {
    console.log('initializing')
    await axios
    .get('http://localhost:8085/reviews')
    .then((response) => {
        listOfReviews.value = response.data
    })
})

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
    console.log("Making an update request")
    await axios
    .put('http://localhost:8085/reviews/' + reviewForm.id, {
      "id": reviewForm.id,
      "userId": 1, //placeholder, will be changed to the id of the user who has logged in
      "dateTimeStamp":(new Date()).toUTCString(),
      "reviewText": reviewForm.reviewText
    })
    .then(response => {[...listOfReviews.value, response.data]})
    .catch(function (error) {
      console.log(error)
    })
    console.log("Update request successful")
    init()
}

</script>

<template>
    <main>
        <h2>My Reviews</h2>
        <div class="reviewDisplay">
            <div v-for="review in listOfReviews" class="cardHolder">
                <ReviewCard :review="review" @delete-review="deleteReview"/>
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