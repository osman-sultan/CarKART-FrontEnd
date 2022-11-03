<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import './assets/main.css'
</script>

<template>
  <Header />
  <HelloWorld msg="Yoyoyo!" />
  <RouterView />
  <footer class="bg-light">
      <p>
          Disclaimer: This is not a professional website
      </p>
  </footer>
</template>


