<template>
  <div class="w-100">
    <PageTitle title="Associar Produto" />

    <v-row dense>
      <v-col cols="12">
        <p>Escolha o(s) cliente(s) desejado(s).</p>
      </v-col>

      <v-col cols="12">
        <v-combobox
          v-model="clientesSelecionados"
          :items="clientesAtivos"
          label="Selecionar Clientes"
          multiple
        ></v-combobox>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <p>Escolha o(s) produto(s) que deseja associar aos clientes selecionados.</p>
      </v-col>

      <v-col cols="12">
        <v-combobox
          v-model="produtosSelecionados"
          :items="produtosAtivos"
          label="Selecionar Produtos"
          multiple
        ></v-combobox>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col>
        <p class="text-body-2 text-right"><strong>Obs.:</strong> apenas clientes e produtos ativos aparecerão na listagem.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="auto">
        <v-btn color="primary" @click="associarProdutos">Associar</v-btn>
      </v-col>

      <v-col cols="12" sm="auto">
        <v-btn color="primary" variant="text" @click="$router.push('/')"
          >Voltar</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";
import { Cliente, Produto } from "@/types/appTypes";
import PageTitle from "@/components/Typography/PageTitle.vue";

const { clientes, produtos, ATUALIZAR_CLIENTES } = useAppStore();

const clientesAtivos = computed<string[]>(() => {
  return clientes
    .filter((cliente) => cliente.ativo === true)
    .map((cliente) => cliente.nome);
});

const produtosAtivos = computed<string[]>(() => {
  return produtos
    .filter((produto) => produto.ativo === true)
    .map((produto) => produto.nome);
});

const clientesSelecionados = ref<string[]>([]);
const produtosSelecionados = ref<string[]>([]);

const associarProdutos = (): void => {
  if (produtosSelecionados.value.length > 0) {
    console.log("associarProdutos");

    const clientesFiltrados: Cliente[] = clientes.filter((cliente: Cliente) => {
      const filtro = clientesSelecionados.value.some(
        (clienteSelecionado: string) => clienteSelecionado === cliente.nome
      );
      return filtro;
    });

    console.log(`clientesFiltrados: ${JSON.stringify(clientesFiltrados)}`);

    const produtosFiltrados: Produto[] = produtos.filter((produto: Produto) => {
      const filtro = produtosSelecionados.value.some(
        (produtoSelecionado: string) => produtoSelecionado === produto.nome
      );
      return filtro;
    });

    console.log(`produtosFiltrados: ${JSON.stringify(produtosFiltrados)}`);

    clientesFiltrados.map((cliente: Cliente) => {
      cliente.produtos?.push(...produtosFiltrados);
    });

    console.log(`clientes associados: ${JSON.stringify(clientesFiltrados)}`);

    ATUALIZAR_CLIENTES(clientesFiltrados);
  }
};
</script>
