const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  isCreated: false,
  error: "",
  isLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true, isCreated: false };

    case "ERROR":
      return { ...state, error: action.payload, isCreated: false, isLoading: false };

    case "REGISTER":
      return { ...state, error: "", isLoading: false, isCreated: true };

    case "LOGIN_SUC":
      return { ...state, error: "", isLoading: false, isCreated: false, user: action.payload };

    case "LOGOUT_SUC":
      return { ...state, error: "", isLoading: false, isCreated: false, user: null };

    default:
      return state;
  }
};
