<template>
  <div class="w-100">
    <PageTitle title="Associar Produto" />
    <p>Associei um ou mais produtos a um ou mais clientes.</p>

    <div class="mt-5">
      <v-combobox
        v-model="clientesSelecionados"
        :items="clientesAtivos"
        label="Selecionar Clientes"
        multiple
      ></v-combobox>

      <v-combobox
        v-model="produtosSelecionados"
        :items="produtosAtivos"
        label="Selecionar Produtos"
        multiple
      ></v-combobox>

      <v-btn color="primary" @click="associarProdutos">Associar</v-btn>
      <v-btn color="primary" variant="text" @click="associarProdutos"
        >Voltar</v-btn
      >
    </div>

    <v-row class="mt-10"> clientesAtivos: {{ clientesAtivos }} </v-row>

    <v-row class="mt-10">
      clientesSelecionados: {{ clientesSelecionados }}
    </v-row>

    <v-row class="mt-10">
      produtosSelecionados: {{ produtosSelecionados }}
    </v-row>

    <v-row class="mt-10"> clientes: {{ clientes }} </v-row>
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
    console.log("associarProdutos")

    const clientesFiltrados: Cliente[] = clientes.filter((cliente: Cliente) => {
      const filtro = clientesSelecionados.value.some((clienteSelecionado: string) => clienteSelecionado === cliente.nome);
      return filtro
    });

    console.log(`clientesFiltrados: ${JSON.stringify(clientesFiltrados)}`)

    const produtosFiltrados: Produto[] = produtos.filter((produto: Produto) => {
      const filtro = produtosSelecionados.value.some((produtoSelecionado: string) => produtoSelecionado === produto.nome)
      return filtro
    });

    console.log(`produtosFiltrados: ${JSON.stringify(produtosFiltrados)}`)

    clientesFiltrados.map((cliente: Cliente) => { cliente.produtos?.push(...produtosFiltrados) });

    console.log(`clientesAtualizados: ${JSON.stringify(clientesFiltrados)}`)

    ATUALIZAR_CLIENTES(clientesFiltrados);

  }
};
</script>
