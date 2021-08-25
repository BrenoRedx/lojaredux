export default function compra(state = [], action) {
  console.log(state);
  switch (action.type) {
    case "ADD_COMPRA":
      return [...state, action.item];
    default:
      return state;
  }
}
