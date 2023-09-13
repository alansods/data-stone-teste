// Utilities
import { defineStore } from "pinia";

import { Cliente, Produto } from "@/types/appTypes";

export const useAppStore = defineStore("app", {
  state: () => ({
    clientes: [] as Cliente[],
    produtos: [] as Produto[],
  }),
});
