const INITIAL_STATE = {
  userId: "",
  //   userName: "",
  //   userEmail: "",
};

const FetchUserData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log(action);
      return {
        // ...state,
        userId: action.payload,

        //userName: action.payload.name,
      };

    case "REMOVE_USER":
      return {
        ...state,
        userId: "",
        //userName: "",
      };
    default:
      return state;
  }
};

export default FetchUserData;
