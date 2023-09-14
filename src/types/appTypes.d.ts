export type Cliente = {
  id: number;
  nome: string;
  documento: string;
  telefone: string;
  email: string;
  ativo: boolean;
  produtos?: Produto[];
};

export type Produto = {
  id: number;
  nome: string;
};
