// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/home/Home.vue";

import ClienteAdd from "@/views/clientes/ClienteAdd.vue";
import ClientesList from "@/views/clientes/ClientesList.vue";
import ClienteDetails from "@/views/clientes/ClienteDetails.vue";

import ProdutoAdd from "@/views/produtos/ProdutoAdd.vue";
import ProdutosLit from "@/views/produtos/ProdutosLit.vue";
import ProdutoDetails from "@/views/produtos/ProdutoDetails.vue";

import AssociarProduto from "@/views/AssociarProduto.vue";

const routes = [
  {
    path: '/',
    component: Home,
  },

  {
    path: '/clientes',
    component: ClientesList,
  },
  {
    path: '/adicionar-cliente',
    component: ClienteAdd,
  },
  {
    path: '/cliente/:id',
    component: ClienteDetails,
    props: true,
  },

  {
    path: '/adicionar-produto',
    component: ProdutoAdd,
  },
  {
    path: '/produtos',
    component: ProdutosLit,
  },
  {
    path: '/produto/:id',
    component: ProdutoDetails,
    props: true,
  },

  {
    path: '/associar-produto',
    component: AssociarProduto,
    props: true,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
