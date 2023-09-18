<template>
  <div class="w-100">
    <h3 class="text-center text-h3 font-weight-bold">O que deseja fazer?</h3>
    <div
      class="d-flex justify-center flex-wrap mx-auto mt-16"
      style="gap: 50px"
    >
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import ActionButton from "./components/ActionButton.vue";
</script>
