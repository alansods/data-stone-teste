<template>
  <v-app>
    <NavBar/>
    <v-main>
      <transition mode="out-in">
      <router-view />
    </transition>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "@/layouts/NavBar.vue";

</script>
