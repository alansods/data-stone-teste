<template>
  <div class="w-100">
    <div class="d-flex justify-space-between">
      <PageTitle :title="cliente.nome" />

      <v-btn color="primary" @click="isEditing = !isEditing" v-if="!isEditing">Editar</v-btn>
    </div>

    <v-form>
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="cliente.nome"
            label="Nome"
            required
            :rules="nomeRules"
            :readonly="!isEditing"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="cliente.email"
            label="E-mail"
            required
            type="email"
            :rules="emailRules"
            :readonly="!isEditing"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="cliente.telefone"
            label="Telefone"
            required
            :rules="telefoneRules"
            v-maska:[options]
            :readonly="!isEditing"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense v-if="produtosAssociados?.length > 0">
        <v-col cols="12">
          <v-combobox
            v-model="produtosAssociados"
            :items="cliente.produtos?.map((produto) => produto.nome)"
            label="Produto(s) Associado(s)"
            multiple
            :readonly="!isEditing"
          ></v-combobox>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="auto">
          <v-checkbox v-model="cliente.ativo" label="Ativo" :readonly="!isEditing"></v-checkbox>
        </v-col>
      </v-row>

      <v-row dense v-if="isEditing">
        <v-col cols="12" sm="auto"
          ><v-btn type="submit" color="primary">Salvar</v-btn></v-col
        >
        <v-col cols="12" sm="auto"
          ><v-btn variant="text" color="primary" @click="isEditing = !isEditing"
            >Cancelar</v-btn
          ></v-col
        >
      </v-row>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import PageTitle from "@/components/Typography/PageTitle.vue";
import { Cliente } from "@/types/appTypes";
import { vMaska } from "maska";
import { useAppStore } from "@/store/app";
import { useRoute } from "vue-router";

const options = { mask: "(##) # ####-####" };

const { clientes } = useAppStore();

const route = useRoute();

const clienteID: string | string[] = route.params.id;

const clienteFiltrado = clientes.filter(
  (cliente: Cliente) => cliente.id === Number(clienteID)
);
const cliente = clienteFiltrado[0];

//REGRAS INPUTS

const nomeRules = [
  (value: string) => {
    if (value) return true;
    return "Obrigatório.";
  },
  (value: string) => {
    if (value && value.length <= 50) return true;
    return "Obrigatório.";
  },
];

const emailRules = [
  (value: string) => {
    if (value) return true;
    return "Obrigatório.";
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true;
    return "E-mail inválido.";
  },
];

const telefoneRules = [
  (value: string) => {
    if (value) return true;
    return "Obrigatório.";
  },
  (value: string) => {
    if (value.length > 15) return true;
    return "Número inválido.";
  },
];

const produtosAssociados: [] | undefined = computed(() => {
  return cliente.produtos?.map((produto) => produto.nome);
});

const isEditing = ref(false);
</script>

<style></style>
