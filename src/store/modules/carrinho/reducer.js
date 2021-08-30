import produce from "immer";

export default function carrinho(state = [], action) {
  switch (action.type) {
    case "ADD_COMPRA_SUCESS":
      return produce(state, (draft) => {
        draft.push(action.saibamais);
      });
    case "REMOVE_BOOK":
      return produce(state, (draft) => {
        const bookIndex = draft.findIndex((book) => book.id === action.id);

        if (bookIndex >= 0) {
          draft.splice(bookIndex, 1);
        }
      });
    case "UPDATE_AMOUNT_SUCESS": {
      return produce(state, (draft) => {
        const bookIndex = draft.findIndex((item) => item.id === action.id);

        if (bookIndex >= 0) {
          draft[bookIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
