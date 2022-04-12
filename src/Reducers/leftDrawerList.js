const initialState = {
    list: [],
  };
  export const leftDrawerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "DRAWER_LIST":
        return {
          ...state,
          list: action.payload,
        };
      default:
        return state;
    }
  };
  