<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

</script>

<template>
  <Header />
  <HelloWorld msg="Yoyoyo!" />
  <RouterView />
</template>

