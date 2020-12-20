export const fetchData = (value) => ({
  type: "SET_USER",
  payload: value,
});

export const removeData = (value) => ({
  type: "REMOVE_USER",
  payload: value,
});
