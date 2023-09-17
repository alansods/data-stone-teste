<template>
  <div class="w-100">
    <PageTitle title="Adicionar Cliente"  />

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
    <SnackBar message="Cliente adicionado com sucesso!" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import { Produto } from "@/types/appTypes";
import { nomeRules } from "@/utils/inputRules";
import PageTitle from "@/components/Typography/PageTitle.vue";
import SnackBar from "@/components/SnackBar.vue";


const novoProduto = ref<Produto>({
  id: Math.random(),
  nome: "",
  ativo: false,
});

const appStore = useAppStore();

const adicionarProduto = (): void => {
  appStore.produtos.push(novoProduto.value);

  novoProduto.value = {
    id: 0,
    nome: "",
    ativo: false,
  };

  appStore.showSnackBar = true
  console.log(`appStore.showSnackBar: ${appStore.showSnackBar}`)
};
</script>
