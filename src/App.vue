<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import './assets/main.css'
</script>

<template>
  <Header />
  <RouterView />
  <footer class="bg-light">
      <p class="footer-p">
          MIE350 Team 7
          <br>Disclaimer: This is not a professional website.
      </p>
  </footer>
</template>

<style>
.footer-p {
  padding-top:35px;
  padding-bottom:35px;
}
</style>
