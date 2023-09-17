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
    //adicionar apenas clientes que nao tenham o id dos clientes em novosClientes
    ATUALIZAR_CLIENTES(novosClientes: Cliente[]): void {
      const clientesAtualizados:Cliente[] = this.clientes.filter((cliente: Cliente) => {
        const filtro = novosClientes.some((novoCliente: Cliente) => novoCliente.id !== cliente.id);
        return filtro
      })
      console.log(`clientesAtualizados Store: ${JSON.stringify(clientesAtualizados)}`)
      console.log(`novosClientes: ${JSON.stringify(novosClientes)}`)

      this.clientes = [...clientesAtualizados, ...novosClientes].sort((a, b) => a.nome.localeCompare(b.nome))

      console.log(`this.clientes: ${JSON.stringify(this.clientes)}`)
    },
  },
});
