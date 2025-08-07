export type TipoProduto = "shape" | "rodas" | "truck" | "parafusos" | "acessorios" | "roupas" | "lixa";

export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  imagem?: string;
  descricao?: string;
  tipo: TipoProduto;
  criadoEm?: Date;
  criadoPor?: string;
};