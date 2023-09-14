<template>
  <div>
    <div class="text-h5 font-weight-bold mb-10">Lista de Clientes</div>
    <v-row>
      <v-col cols="12" sm="4" v-for="cliente in clientes" :key="cliente.id">
        <ClientCard :cliente="cliente" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import ClientCard from "./ClientCard.vue";

import { useAppStore } from "@/store/app";
const { clientes } = useAppStore();
</script>

<style></style>
