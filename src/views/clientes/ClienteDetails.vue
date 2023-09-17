<template>
  <div class="w-100">
    <div class="d-flex justify-space-between">
      <PageTitle :title="cliente.nome" />

      <div>
        <v-btn
          class="mr-3"
          color="green"
          @click="isEditing = !isEditing"
          v-if="!isEditing"
          >Editar</v-btn
        >
        <v-btn color="red" @click="deletar" v-if="!isEditing"
          >Deletar</v-btn
        >
      </div>
    </div>

    <v-form @submit.prevent="salvar">
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
          <v-checkbox
            v-model="cliente.ativo"
            label="Ativo"
            :readonly="!isEditing"
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-row dense v-if="!isEditing">
        <v-col cols="12" sm="auto">
          <v-btn color="primary" @click="$router.push('/')">Voltar</v-btn>
        </v-col>
      </v-row>

      <v-row dense v-if="isEditing">
        <v-col cols="12" sm="auto">
          <v-btn type="submit" color="primary">Salvar</v-btn>
        </v-col>

        <v-col cols="12" sm="auto">
          <v-btn variant="text" color="primary" @click="isEditing = !isEditing"
            >Cancelar</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import PageTitle from "@/components/Typography/PageTitle.vue";
import { Cliente } from "@/types/appTypes";
import { nomeRules, emailRules, telefoneRules } from "@/utils/inputRules";
import { vMaska } from "maska";
import { useAppStore } from "@/store/app";
import { useRoute, useRouter  } from "vue-router";

const isEditing = ref(false);
const options = { mask: "(##) # ####-####" };
const { clientes, EDIT_CLIENTE, DELETE_CLIENTE } = useAppStore();
const route = useRoute();
const router = useRouter();

const clienteID: string | string[] = route.params.id;
const clienteAtual = clientes.filter(
  (cliente: Cliente) => cliente.id === Number(clienteID)
);
const cliente = clienteAtual[0];

const produtosAssociados = computed<string[]>(() => {
  return cliente.produtos.map((produto) => produto.nome);
});

const salvar = (): void => {
  EDIT_CLIENTE(cliente);
  isEditing.value = false;
};

const deletar = (): void => {
  const id = Number(clienteID)
  DELETE_CLIENTE(id);
  router.push('/clientes')
};
</script>

<style></style>
