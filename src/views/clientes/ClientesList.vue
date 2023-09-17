<template>
  <div>
    <PageTitle title="Lista de Clientes"  />

    <v-row v-if="clientes.length === 0">
      <v-col cols="12">
        <p>Nenhum cliente cadastrado.</p>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12" sm="auto" v-for="cliente in clientes" :key="cliente.id">
        <ClientCard :cliente="cliente" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import ClientCard from "./ClientCard.vue";
import PageTitle from "@/components/Typography/PageTitle.vue";

import { useAppStore } from "@/store/app";
const { clientes } = useAppStore();
</script>

<style></style>
