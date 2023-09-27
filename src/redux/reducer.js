const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DEL_TO_DO":
      const newList = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducer;
