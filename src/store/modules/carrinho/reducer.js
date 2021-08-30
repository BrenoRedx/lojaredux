import produce from "immer";

export default function carrinho(state = [], action) {
  switch (action.type) {
    /*
    case "ADD_COMPRA":
      return produce(state, (draft) => {
        const bookIndex = draft.findIndex(
          (item) => item.id === action.saibamais.id
        );

        if (bookIndex >= 0) {
          draft[bookIndex].amount += 1;
        } else {
          draft.push({
            ...action.saibamais,
            amount: 1,
          });
        }
      });
*/
    /*    case "ADD_RESERVE_SUCCESS":
      return produce(state, (draft) => {
        draft.push(action.saibamais);
      });
      */
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
    case "UPDATE_AMOUNT": {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, (draft) => {
        const bookIndex = draft.findIndex((book) => book.id === action.id);

        if (bookIndex >= 0) {
          draft[bookIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
