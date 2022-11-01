<script setup>
  import axios from 'axios';
  import HelloWorld from '../components/HelloWorld.vue'
  import CarCardDisplay from '../components/CarCardDisplay.vue'
  import KeywordSearch from '../components/KeywordSearch.vue'
  import CreateListing from '../components/CreateListing.vue';
</script>

<template>
  <main>
    <CreateListing />
    <CarCardDisplay />
  </main>
</template>
    

