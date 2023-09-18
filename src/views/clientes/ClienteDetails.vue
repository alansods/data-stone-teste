<template>
  <div class="w-100">
    <div class="d-flex justify-space-between">
      <PageTitle title="Cliente" />

      <div>
        <v-btn
          class="mr-3"
          color="green"
          @click="isEditing = !isEditing"
          v-if="!isEditing"
          >Editar</v-btn
        >
        <v-btn color="red" @click="deletar" v-if="!isEditing">Deletar</v-btn>
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
            v-model="cliente.documento"
            label="Documento"
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

      <v-row dense>
        <v-col cols="12">
          <v-combobox
            v-model="produtosAssociados"
            :items="produtos.map((produto) => produto.nome)"
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
          <v-btn color="primary" @click="$router.push('/clientes')">Voltar</v-btn>
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

    <ConfirmationDialog
      message="Tem certeza que deseja deletar esse cliente?"
      @confirm-delete="confirmDelete"
    />


  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PageTitle from "@/components/Typography/PageTitle.vue";
import ConfirmationDialog from "@/components/ConfirmationDialog.vue";
import { Cliente } from "@/types/appTypes";
import { nomeRules, emailRules, telefoneRules } from "@/utils/inputRules";
import { vMaska } from "maska";
import { useAppStore } from "@/store/app";
import { useClientesStore } from "@/store/clientes";
import { useProdutosStore } from "@/store/produtos";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const options = { mask: "(##) # ####-####" };

const { showDialog, showSnackBar, snackBarMessage } = storeToRefs(useAppStore());
const { clientes, EDIT_CLIENTE, DELETE_CLIENTE } = useClientesStore();
const { produtos } = useProdutosStore();

const isEditing = ref(false);

const route = useRoute();
const router = useRouter();

const clienteID: string | string[] = route.params.id;
const clienteAtual = clientes.filter(
  (cliente: Cliente) => cliente.id === Number(clienteID)
);
const cliente = clienteAtual[0];

const produtosAssociados = ref(cliente.produtos.map((produto) => produto.nome))

const salvar = (): void => {
  cliente.produtos = produtos.filter((produto) => {
    const filtro = produtosAssociados.value.some(
      (produtoAssociado: string) => produtoAssociado === produto.nome
    );
    return filtro;
  });
  EDIT_CLIENTE(cliente);
  isEditing.value = false;
  snackBarMessage.value = "Cliente editado com sucesso!"
  showSnackBar.value = true;
  router.push("/clientes");
};

const deletar = (): void => {
  showDialog.value = true;
};

const confirmDelete = (): void => {
  const id = Number(clienteID);
  DELETE_CLIENTE(id);
  showDialog.value = false;
  snackBarMessage.value = "Cliente deletado com sucesso!"
  showSnackBar.value = true;
  router.push("/clientes");
};

</script>

<style></style>
