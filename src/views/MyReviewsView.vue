<script setup>
import ReviewCard from '../components/ReviewCard.vue';
</script>

<template>
    <main>
        <h2>My Reviews</h2>
        <div class="reviewDisplay">
            <div class="cardHolder">
                <ReviewCard :review = "{
                    car:{
                        company:{make:'BMW'},
                        model:'V11',
                        id:'8'
                    },
                    reviewText:'Such a great car.'
                }"
                />
            </div>
            <div class="cardHolder">
                <ReviewCard :review = "{
                    car:{
                        company:{make:'BMW'},
                        model:'V11',
                        id:'8'
                    },
                    reviewText:'Such a great car.'
                }"
                />
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