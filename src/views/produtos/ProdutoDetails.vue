<template>
  <div class="w-100">
    <div class="d-flex justify-space-between">
      <PageTitle title="Produto" />

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
            v-model="produto.nome"
            label="Nome"
            required
            :rules="nomeRules"
            :readonly="!isEditing"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="auto">
          <v-checkbox
            v-model="produto.ativo"
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

    <ConfirmationDialog
      message="Tem certeza que deseja deletar esse produto?"
      @confirm-delete="confirmDelete"
    />


  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PageTitle from "@/components/Typography/PageTitle.vue";
import ConfirmationDialog from "@/components/ConfirmationDialog.vue";
import { Produto } from "@/types/appTypes";
import { nomeRules} from "@/utils/inputRules";
import { useAppStore } from "@/store/app";
import { useProdutosStore } from "@/store/produtos";
import { useRoute, useRouter } from "vue-router";

import { storeToRefs } from "pinia";
const { showDialog, showSnackBar, snackBarMessage } = storeToRefs(useAppStore());

const isEditing = ref(false);
const { produtos, EDIT_PRODUTO, DELETE_PRODUTO } = useProdutosStore();
const route = useRoute();
const router = useRouter();

const produtoID: string | string[] = route.params.id;
const produtoAtual = produtos.filter(
  (produto: Produto) => produto.id === Number(produtoID)
);
const produto = produtoAtual[0];

const salvar = (): void => {
  EDIT_PRODUTO(produto);
  isEditing.value = false;
};

const deletar = (): void => {
  showDialog.value = true;
};

const confirmDelete = (): void => {
  const id = Number(produtoID);
  DELETE_PRODUTO(id);
  showDialog.value = false;
  snackBarMessage.value = "Produto deletado com sucesso!"
  showSnackBar.value = true;
  router.push("/produtos");
};

</script>

<style></style>
