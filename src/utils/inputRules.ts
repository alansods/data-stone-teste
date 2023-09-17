export const nomeRules = [
  (value: string) => {
    if (value) return true;
    return "Obrigatório.";
  },
  (value: string) => {
    if (value && value.length <= 50) return true;
    return "Obrigatório.";
  },
];

export const emailRules = [
  (value: string) => {
    if (value) return true;
    return "Obrigatório.";
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true;
    return "E-mail inválido.";
  },
];

export const telefoneRules = [
  (value: string) => {
    if (value) return true;
    return "Obrigatório.";
  },
  (value: string) => {
    if (value.length > 15) return true;
    return "Número inválido.";
  },
];