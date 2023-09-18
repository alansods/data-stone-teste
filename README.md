# Data Stone Teste - Sistema de Cadastro

## Live Preview
https://data-stone-teste.vercel.app/

Este projeto foi desenvolvido como parte de um teste técnico, e vou explicar a abordagem que segui para resolver o teste, as decisões tomadas, a organização do código e as tecnologias utilizadas.

## Tecnologias Utilizadas

Vue.js 3: Escolhi o Vue.js por ser uma estrutura moderna e poderosa para o desenvolvimento de interfaces de usuário reativas.
Vuetify 3: Utilizei o Vuetify para facilitar a criação de uma interface de usuário elegante e responsiva.
TypeScript: Optei por usar TypeScript para adicionar tipagem estática ao projeto, tornando-o mais seguro e fácil de manter.
Composition API: Utilizei o padrão de Composition API do Vue 3 para organizar e compartilhar a lógica do componente de forma mais eficaz.

## Estrutura do Projeto

src/assets: Armazena arquivos estáticos como imagens e ícones.
src/components: Contém os componentes reutilizáveis do Vue, como botões, caixas de diálogo, formulários, etc.
src/store: Contém o gerenciamento de estado da aplicação usando o Pinia.
src/types: Define os tipos de dados utilizados na aplicação.
src/utils: Contém funções utilitárias e validações.
src/views: Contém as páginas da aplicação.

## Organização do Código

A organização do código segue um padrão modular, onde os componentes são divididos em componentes menores e reutilizáveis sempre que possível. O uso da Composition API permite que a lógica seja compartilhada entre os componentes de forma eficiente.

store: O gerenciamento de estado da aplicação é feito com o Pinia, permitindo que os dados sejam centralizados e compartilhados entre componentes de forma reativa.

components: Cada componente é responsável por uma função específica, como um formulário, uma caixa de diálogo de confirmação, etc. Isso facilita a manutenção e reutilização de código.

views: As páginas da aplicação são organizadas em views, cada uma representando uma seção diferente da aplicação, como a lista de clientes, a página de detalhes do cliente, etc.

## Decisões Tomadas

Validação de Formulário: A validação de formulário foi implementada utilizando as regras de validação do Vuetify, garantindo que os dados inseridos pelos usuários sejam válidos.

Comunicação entre Componentes: Utilizei eventos personalizados e o gerenciamento de estado do Pinia para permitir a comunicação eficaz entre os componentes, como a caixa de diálogo de confirmação e a exibição de mensagens de notificação.

Roteamento: Utilizei o Vue Router para gerenciar as rotas da aplicação e permitir a navegação entre as páginas.

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).
