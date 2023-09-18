<template>
  <div class="w-100">
    <PageTitle title="Cadastrar Produto"  />

    <v-form @submit.prevent="adicionarProduto" >
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="novoProduto.nome"
            label="Nome"
            required
            :rules="nomeRules"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="auto">
          <v-checkbox v-model="novoProduto.ativo" label="Ativo"></v-checkbox>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12" sm="auto"
          ><v-btn
            type="submit"
            color="primary"
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
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import { useProdutosStore } from "@/store/produtos";
import { Produto } from "@/types/appTypes";
import { nomeRules } from "@/utils/inputRules";
import PageTitle from "@/components/Typography/PageTitle.vue";


const novoProduto = ref<Produto>({
  id: Math.random(),
  nome: "",
  ativo: false,
});

const appStore = useAppStore();
const produtosStore = useProdutosStore();

const adicionarProduto = (): void => {
  produtosStore.produtos.push(novoProduto.value);

  novoProduto.value = {
    id: 0,
    nome: "",
    ativo: false,
  };

  appStore.snackBarMessage = "Cliente adicionado com sucesso!"
  appStore.showSnackBar = true
  console.log(`appStore.showSnackBar: ${appStore.showSnackBar}`)
};
</script>
