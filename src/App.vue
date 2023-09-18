<template>
  <v-app>
    <NavBar />
    <SnackBar />

    <v-main>
      <v-container class="fluid fill-height justify-center align-start pt-10">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "@/layouts/NavBar.vue";
import SnackBar from "@/components/SnackBar.vue";

</script>

<style>
/* ROUTE TRANSITION */
.fade-enter-active,
.fade-leave-active {
  transition: 200ms ease all;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
