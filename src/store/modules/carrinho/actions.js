export function addCompraRequest(id) {
  return {
    type: "ADD_COMPRA_REQUEST",
    id,
  };
}
export function addCompraSucess(saibamais) {
  return {
    type: "ADD_COMPRA_SUCESS",
    saibamais,
  };
}

export function removeCompra(id) {
  return {
    type: "REMOVE_BOOK",
    id,
  };
}
export function updateAmountBookRequest(id, amount) {
  return {
    type: "UPDATE_AMOUNT_REQUEST",
    id,
    amount,
  };
}
export function updateAmountBookSucess(id, amount) {
  return {
    type: "UPDATE_AMOUNT_SUCESS",
    id,
    amount,
  };
}
