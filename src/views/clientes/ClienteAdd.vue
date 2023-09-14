<template>
  <div>
    <div class="text-h5 font-weight-bold mb-10">Adicionar Cliente</div>
    <v-card-text>
      <v-form @submit.prevent="adicionarCliente">
        <v-text-field
          v-model="novoCliente.nome"
          label="Nome"
          required
        ></v-text-field>
        <v-text-field
          v-model="novoCliente.email"
          label="E-mail"
          required
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="novoCliente.telefone"
          label="Telefone"
          required
        ></v-text-field>
        <v-checkbox v-model="novoCliente.ativo" label="Ativo"></v-checkbox>
        <v-btn type="submit" color="primary">Adicionar</v-btn>
      </v-form>
    </v-card-text>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app"; // Importe a store
import { Cliente } from "@/types/appTypes"; // Importe o tipo Cliente

const novoCliente = ref<Cliente>({
  id: Math.random(),
  nome: "",
  documento: "",
  telefone: "",
  email: "",
  ativo: false,
});

const appStore = useAppStore();

const adicionarCliente = () => {
  appStore.clientes.push(novoCliente.value);

  novoCliente.value = {
    id: 0,
    nome: "",
    documento: "",
    telefone: "",
    email: "",
    ativo: false,
  };
};
</script>
