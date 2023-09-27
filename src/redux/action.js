export const addToDo = (data) => {
  return {
    type: "ADD_TO_DO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const delToDo = (id) => ({
  type: "DEL_TO_DO",
  id,
});

export const clearToDo = () => ({
  type: "CLEAR_ALL",
});
