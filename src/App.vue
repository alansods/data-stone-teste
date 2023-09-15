<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container class="fluid fill-height align-start pt-10">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "@/layouts/NavBar.vue";
</script>
