function ConversorDeMoeda(valor) {
  return Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

export default ConversorDeMoeda;
