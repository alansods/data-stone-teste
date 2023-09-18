<template>
  <div class="w-100">
    <PageTitle title="Lista de Produtos" />

    <v-row v-if="produtos.length === 0">
      <v-col cols="12">
        <p>Nenhum produto cadastrado.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="auto" v-for="produto in produtos" :key="produto.id">
        <ProdutoCard :produto="produto" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import ProdutoCard from "./ProdutoCard.vue";
import PageTitle from "@/components/Typography/PageTitle.vue";

import { useProdutosStore } from "@/store/produtos";
const { produtos } = useProdutosStore();
</script>

<style></style>
