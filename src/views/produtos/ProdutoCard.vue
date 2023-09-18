<template>
  <v-card class="mx-auto" color="white" theme="dark" width="360">
    <v-card-actions>
      <v-list-item class="w-100">
        <div class="d-flex flex-column" style="gap: 4px">
          <v-list-item-title class="font-weight-bold">Nome: {{ produto.nome }} </v-list-item-title>

          <v-list-item-subtitle>Ativo: {{ produto.ativo ? "Sim" : "Não" }}</v-list-item-subtitle>
        </div>
      </v-list-item>
    </v-card-actions>

    <v-divider />

    <v-card-actions>
      <v-btn block @click="$router.push(`/produto/${produto.id}`)">
        Ver mais detalhes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { Produto } from "@/types/appTypes";

const { produto } = defineProps<{ produto: Produto }>();

</script>
