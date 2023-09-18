<template>
  <div class="w-100">
    <MainTitle title="O que deseja fazer?" />

    <div
      class="d-flex justify-center flex-wrap mx-auto mt-16"
      style="gap: 50px"
    >
      <ActionButton
        title="Lista de Clientes"
        icon="mdi-card-account-details"
        link="clientes"
      />
      <ActionButton
        title="Lista de Produtos"
        icon="mdi-view-list"
        link="produtos"
      />
      <ActionButton
        title="Cadastrar Cliente"
        icon="mdi-account-plus"
        link="adicionar-cliente"
      />
      <ActionButton
        title="Cadastrar Produto"
        icon="mdi-archive-plus"
        link="adicionar-produto"
      />
      <ActionButton
        title="Associar produto"
        icon="mdi-swap-horizontal-bold"
        link="associar-produto"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MainTitle from "@/components/Typography/MainTitle.vue"
import ActionButton from "./components/ActionButton.vue";
</script>
