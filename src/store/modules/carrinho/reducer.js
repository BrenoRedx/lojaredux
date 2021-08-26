export default function compra(state = [], action) {
  switch (action.type) {
    case "ADD_COMPRA":
      return [...state, action.item];
    default:
      return state;
  }
}
