<template>
  <div>
    <PageTitle title="Adicionar Cliente"  />

    <v-form @submit.prevent="adicionarCliente">
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
          ><v-btn
            type="submit"
            color="primary"
            :disabled="hasErrors"
            >Adicionar</v-btn
          ></v-col
        >
        <v-col cols="12" sm="auto"
          ><v-btn variant="text" color="primary" @click="$router.push('/')"
            >Voltar</v-btn
          ></v-col
        >
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";
import { Cliente } from "@/types/appTypes";
import { vMaska } from "maska";
import PageTitle from "@/components/Typography/PageTitle.vue";

const options = { mask: "(##) # ####-####" };

const novoCliente = ref<Cliente>({
  id: Math.random(),
  nome: "",
  documento: "",
  telefone: "",
  email: "",
  ativo: false,
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
  };
};

const nomeRules = [
  (v: string) => !!v || "Obrigatório",
  (v: string) =>
    (v && v.length <= 50) || "O nome deve ter no máximo 50 caracteres",
];

const emailRules = [
  (v: string) => !!v || "Obrigatório",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail inválido",
];

const telefoneRules = [(v: string) => (v && v.length > 15) || "Obrigatório"];

const hasErrors = computed(() => {
  const nomeRulesPassed = nomeRules.every(
    (rule) => rule(novoCliente.value.nome) === true
  );
  const emailRulesPassed = emailRules.every(
    (rule) => rule(novoCliente.value.email) === true
  );
  const telefoneRulesPassed = telefoneRules.every(
    (rule) => rule(novoCliente.value.telefone) === true
  );

  return !(nomeRulesPassed && emailRulesPassed && telefoneRulesPassed);
});
</script>
