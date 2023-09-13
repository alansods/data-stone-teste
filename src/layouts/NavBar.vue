<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Sistema de Cadastro</v-toolbar-title>

  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list>
      <v-list-item link to="/">Início</v-list-item>
      <v-list-item link to="/clientes">Lista de Clientes</v-list-item>
      <v-list-item link to="/produtos">Lista de Produtos</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">

export default {
  data: () => ({
    drawer: false,
  }),


};

</script>
