import { call, put, all, takeLatest, select } from "redux-saga/effects";
import { addCompraSucess, updateAmountBookSucess } from "./actions";
import api from "../../../services/api";

function* addToCompra({ id }) {
  const bookExists = yield select((state) =>
    state.carrinho.find((saibamais) => saibamais.id === id)
  );

  const myStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = myStock.data.amount;

  const currentStock = bookExists ? bookExists.amount : 0;

  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert("Quantidade máxima atingida.");
    return;
  }

  if (bookExists) {
    yield put(updateAmountBookSucess(id, amount));
  } else {
    const response = yield call(api.get, `books/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };
    yield put(addCompraSucess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const myStock = yield call(api.get, `/stock/${id}`);

  const stockAmount = myStock.data.amount;

  if (amount > stockAmount) {
    alert("Quantidade maxima atingida.");
    return;
  }

  yield put(updateAmountBookSucess(id, amount));
}

export default all([
  takeLatest("ADD_COMPRA_REQUEST", addToCompra),
  takeLatest("UPDATE_AMOUNT_REQUEST", updateAmount),
]);
