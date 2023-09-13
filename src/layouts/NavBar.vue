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
      <v-list-item link to="/pagina1">Início</v-list-item>
      <v-list-item link to="/pagina2">Lista de Clientes</v-list-item>
      <v-list-item link to="/pagina3">Lista de Produtos</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">

export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Foo",
        value: "foo",
      },
      {
        title: "Bar",
        value: "bar",
      },
      {
        title: "Fizz",
        value: "fizz",
      },
      {
        title: "Buzz",
        value: "buzz",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};

</script>
