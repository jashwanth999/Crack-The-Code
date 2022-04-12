const initialState = {
  open: false,
};
export const triggerDrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRIGGER_DRAWER":
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
};
