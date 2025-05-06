export function counterReducer(state = { count: 5 }, action) {
  console.log(action);
  if (action.type == "INCREASE") return { count: state.count + action.payload };
  if (action.type == "DECREASE") return { count: state.count - 1 };

  return state;
}
