<script setup>
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue'
  import './assets/main.css'
</script>

<template>
  <Header />
  <RouterView />
  <footer class="bg-light mt-5">
    <p class="footer">
      MIE350 Team 7
      <br>Disclaimer: This is not a professional website.
    </p>
  </footer>
</template>

<style>
  .footer {
    position: bottom;
    padding-top: 20px;
    padding-bottom: 16px;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
</style>


