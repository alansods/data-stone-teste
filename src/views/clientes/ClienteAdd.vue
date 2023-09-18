<template>
  <div class="w-100">
    <PageTitle title="Cadastrar Cliente" />
    <v-form @submit.prevent="adicionarCliente()">
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
            v-model="novoCliente.documento"
            label="Documento"
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
          ><v-btn type="submit" color="primary" :disabled="isFormEmpty"
            >Cadastrar</v-btn
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
import { useClientesStore } from "@/store/clientes";
import { storeToRefs } from "pinia";
import { Cliente } from "@/types/appTypes";
import { nomeRules, emailRules, telefoneRules } from "@/utils/inputRules";
import { vMaska } from "maska";
import PageTitle from "@/components/Typography/PageTitle.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const options = { mask: "(##) # ####-####" };

const { showSnackBar, snackBarMessage } = storeToRefs(useAppStore());

const isFormEmpty = computed(() => {
  if (
    novoCliente.value.nome.length === 0 &&
    novoCliente.value.documento.length === 0 &&
    novoCliente.value.email.length === 0 &&
    novoCliente.value.telefone.length === 0
  ) {
    return true;
  } else {
    return false;
  }
});

const novoCliente = ref<Cliente>({
  id: Math.random(),
  nome: "",
  documento: "",
  telefone: "",
  email: "",
  ativo: false,
  produtos: [],
});

const clientesStore = useClientesStore();

const adicionarCliente = (): void => {
  clientesStore.clientes.push(novoCliente.value);

  snackBarMessage.value = "Cliente adicionado com sucesso!";
  showSnackBar.value = true;

  router.push("/");
};
</script>
