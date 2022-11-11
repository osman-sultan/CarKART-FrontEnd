<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

listOfReviews = ref([])
nextReviewId = ref(0)

const init = onMounted(async () => {
    await axios
    .get('http://localhost:8085/reviews')
    .then((response) => {
        listOfReviews = response.data
        nextReviewId = response.data[Object.keys(response.data).length - 1].id + 1
    })
})

async function createReview(reviewForm, nextReviewId) {
    await axios
    .post('http://localhost:8085/reviews',{
        "id": nextReviewId,
        "userId": 1, //placeholder, will be changed to the id of the user who has logged in 
        "dateTimeStamp":(new Date()).toUTCString(),
        "reviewText": reviewForm.reviewText
    })
    .then((response) => {
        [...listOfCars.value, response.data]
    })
    .catch((err) => {console.log(err)})
    console.log("Create request successful")
    init()
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
    </main>
</template>