<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container class="pt-10">
        <transition mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "@/layouts/NavBar.vue";
</script>
