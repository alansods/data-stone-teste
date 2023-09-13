// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";

import ClientesList from "@/views/clientes/ClientesList.vue";
import ClienteDetails from "@/views/clientes/ClienteDetails.vue";

import ProdutosLit from "@/views/produtos/ProdutosLit.vue";
import ProdutoDetails from "@/views/produtos/ProdutoDetails.vue";

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
    path: '/cliente/:id',
    component: ClienteDetails,
    props: true,
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
