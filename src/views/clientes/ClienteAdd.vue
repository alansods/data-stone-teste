<template>
  <div class="w-100">
    <PageTitle title="Adicionar Cliente" />

    <v-form @submit.prevent="adicionarCliente" >
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="novoCliente.nome"
            label="Nome"
            required
            :rules="nomeRules"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="novoCliente.email"
            label="E-mail"
            required
            type="email"
            :rules="emailRules"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="novoCliente.telefone"
            label="Telefone"
            required
            :rules="telefoneRules"
            v-maska:[options]
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="auto">
          <v-checkbox v-model="novoCliente.ativo" label="Ativo"></v-checkbox>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12" sm="auto"
          ><v-btn type="submit" color="primary">Adicionar</v-btn></v-col
        >
        <v-col cols="12" sm="auto"
          ><v-btn variant="text" color="primary" @click="$router.push('/')"
            >Voltar</v-btn
          ></v-col
        >
      </v-row>
    </v-form>
    <SnackBar message="Cliente adicionado com sucesso!" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import { Cliente } from "@/types/appTypes";
import { vMaska } from "maska";
import PageTitle from "@/components/Typography/PageTitle.vue";
import SnackBar from "@/components/SnackBar.vue";

const options = { mask: "(##) # ####-####" };

const novoCliente = ref<Cliente>({
  id: Math.random(),
  nome: "",
  documento: "",
  telefone: "",
  email: "",
  ativo: false,
  produtos: []
});

const appStore = useAppStore();

const adicionarCliente = (): void => {
    appStore.clientes.push(novoCliente.value);

    novoCliente.value = {
      id: 0,
      nome: "",
      documento: "",
      telefone: "",
      email: "",
      ativo: false,
      produtos: []
    };

    appStore.showSnackBar = true;
    console.log(`appStore.showSnackBar: ${appStore.showSnackBar}`);
};

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

</script>
