// Utilities
import { defineStore } from "pinia";

import { Produto } from "@/types/appTypes";

export const useProdutosStore = defineStore("produtos", {
  state: () => ({
    produtos: [
      {
        id: 1,
        nome: "Notebook",
        ativo: true,
      },
      {
        id: 2,
        nome: "SmartPhone",
        ativo: true,
      },
      {
        id: 3,
        nome: "Televisão",
        ativo: true,
      },
    ].sort((a, b) => a.nome.localeCompare(b.nome)) as Produto[],
  }),
  actions: {
    //Atualiza produtos após associar produtos à produtos.
    ATUALIZAR_PRODUTOS_ASSOCIADOS(novosProdutos: Produto[]): void {
      //Verifica apenas produtos que nao tenham o id dos produtos em novosProdutos
      const produtosAtualizados:Produto[] = this.produtos.filter((produto: Produto) => {
        const filtro = novosProdutos.some((novoProduto: Produto) => novoProduto.id !== produto.id);
        return filtro
      })
      this.produtos = [...produtosAtualizados, ...novosProdutos].sort((a, b) => a.nome.localeCompare(b.nome))
    },

    EDIT_PRODUTO(produtoAtualizado: Produto) {
      const index = this.produtos.findIndex((produto) => produto.id === produtoAtualizado.id);

      if (index !== -1) {
        // Atualize os valores do produto encontrado
        this.produtos[index] = produtoAtualizado;
      }
    },

    DELETE_PRODUTO(id: number) {
      const produtoFiltrado = this.produtos.filter((produto) => produto.id !== id);
      this.produtos = produtoFiltrado
    },
  },
});
