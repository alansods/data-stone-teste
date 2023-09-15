<template>
    <v-responsive class="text-center fill-height">
      <h1 class="text-h2 font-weight-bold mb-10">O que deseja fazer?</h1>

      <v-row>
        <v-col cols="12" sm="4" class="d-flex flex-column align-center" style="gap: 10px">
          <v-btn color="primary" icon="mdi-account-plus" @click="$router.push('/adicionar-cliente')"/>
          <span> Cadastrar novo Cliente</span>
           </v-col>

        <v-col cols="12" sm="4" class="d-flex flex-column align-center" style="gap: 10px">
          <v-btn color="primary" icon="mdi-archive-plus" @click="$router.push('/adicionar-produto')"/>
          <span>Cadastrar novo Produto</span>
        </v-col>

        <v-col cols="12" sm="4" class="d-flex flex-column align-center" style="gap: 10px">
          <v-btn color="primary" icon="mdi-swap-horizontal" @click="$router.push('/associar-cliente-a-produto')"/>
          <span> Associar produto a um cliente</span>
           </v-col>
      </v-row>
    </v-responsive>
</template>

<script lang="ts" setup></script>
