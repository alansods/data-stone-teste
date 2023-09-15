<template>
  <div>
    <PageTitle title="Lista de Produtos"  />

    <v-row>
      <v-col cols="12" sm="4" v-for="produto in produtos" :key="produto.id">
        <ProdutoCard :produto="produto" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import ProdutoCard from "./ProdutoCard.vue";
import PageTitle from "@/components/Typography/PageTitle.vue";

import { useAppStore } from "@/store/app";
const { produtos } = useAppStore();
</script>

<style></style>
