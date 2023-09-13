export type Cliente = {
  id: number;
  nome: string;
  produtos?: Produto[];
};

export type Produto = {
  id: number;
  nome: string;
};
