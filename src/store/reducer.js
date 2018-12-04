const initialState = {
  cats: []
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADDCAT") {
    return {
      ...state,
      cats: state.cats.concat(action.value)
    };
  }

  return state;
};

export default reducer;
