<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import './assets/main.css'
</script>

<template>
  <Header />
  <RouterView />
  <footer class="bg-light">
      <p>
          Disclaimer: This is not a professional website
      </p>
  </footer>
</template>


