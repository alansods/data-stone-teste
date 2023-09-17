// Utilities
import { defineStore } from "pinia";

import { Cliente, Produto } from "@/types/appTypes";

export const useAppStore = defineStore("app", {
  state: () => ({
    showSnackBar: false,
    clientes: [
      {
        id: 1,
        nome: "Alan Santos",
        ativo: true,
        documento: "teste",
        email: "alansods@gmail.com",
        telefone: "(85)989782595",
        produtos: [] as Produto[]
      },
      {
        id: 2,
        nome: "Beatriz Oliveira",
        ativo: true,
        documento: "teste",
        email: "bia@gmail.com",
        telefone: "(85)998952645",
        produtos: [] as Produto[]
      },
      {
        id: 3,
        nome: "José Ramon",
        ativo: true,
        documento: "teste",
        email: "jose@gmail.com",
        telefone: "(85)948526987",
        produtos: [] as Produto[]
      },
    ] as Cliente[],
    produtos: [
      {
        id: 1,
        nome: "Notebook",
        ativo: true,
      },
      {
        id: 1,
        nome: "SmartPhone",
        ativo: true,
      },
      {
        id: 1,
        nome: "Televisão",
        ativo: true,
      },
    ].sort((a, b) => a.nome.localeCompare(b.nome)) as Produto[],
  }),
  actions: {
    //Atualiza clientes após associar produtos à clientes.
    ATUALIZAR_CLIENTES_ASSOCIADOS(novosClientes: Cliente[]): void {
      //Verifica apenas clientes que nao tenham o id dos clientes em novosClientes
      const clientesAtualizados:Cliente[] = this.clientes.filter((cliente: Cliente) => {
        const filtro = novosClientes.some((novoCliente: Cliente) => novoCliente.id !== cliente.id);
        return filtro
      })
      this.clientes = [...clientesAtualizados, ...novosClientes].sort((a, b) => a.nome.localeCompare(b.nome))
    },

    EDIT_CLIENTE(clienteAtualizado: Cliente) {
      const index = this.clientes.findIndex((cliente) => cliente.id === clienteAtualizado.id);

      if (index !== -1) {
        // Atualize os valores do cliente encontrado
        this.clientes[index] = clienteAtualizado;
      }
    },

    DELETE_CLIENTE(id: number) {
      const clienteFiltrado = this.clientes.filter((cliente) => cliente.id !== id);
      this.clientes = clienteFiltrado

    }
  },
});
