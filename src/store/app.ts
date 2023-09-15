// Utilities
import { defineStore } from "pinia";

import { Cliente, Produto } from "@/types/appTypes";

export const useAppStore = defineStore("app", {
  state: () => ({
    showSnackBar: false,
    clientes: [
      {
        nome: "Alan Santos",
        ativo: true,
        documento: "teste",
        email: "alansods@gmail.com",
        telefone: "(85)989782595",
      },
      {
        nome: "Beatriz Oliveira",
        ativo: true,
        documento: "teste",
        email: "bia@gmail.com",
        telefone: "(85)998952645",
      },
      {
        nome: "José Ramon",
        ativo: true,
        documento: "teste",
        email: "jose@gmail.com",
        telefone: "(85)948526987",
      },
      {
        nome: "José Ramon",
        ativo: true,
        documento: "teste",
        email: "jose@gmail.com",
        telefone: "(85)948526987",
      },
      {
        nome: "José Ramon",
        ativo: true,
        documento: "teste",
        email: "jose@gmail.com",
        telefone: "(85)948526987",
      },
    ] as Cliente[],
    produtos: [] as Produto[],
  }),
});
