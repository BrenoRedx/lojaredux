export function addCompraRequest(id) {
  return {
    type: "ADD_COMPRA_REQUEST",
    id,
  };
}
export function addCompraSucess(data) {
  return {
    type: "ADD_COMPRA_SUCESS",
    data,
  };
}
export function addCompra(saibamais) {
  return {
    type: "ADD_COMPRA",
    saibamais,
  };
}

export function removeCompra(id) {
  return {
    type: "REMOVE_BOOK",
    id,
  };
}
export function updateAmountBook(id, amount) {
  return {
    type: "UPDATE_AMOUNT",
    id,
    amount,
  };
}
