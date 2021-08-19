interface InitialState {
  visible: boolean;
}

type ActionType =
  | { type: "CHANGE_VISIBLE"; payload: boolean }
  | { type: "CHANGE_VISIBLE2"; payload: boolean };

export default function appReducer(
  state: InitialState,
  action: ActionType
): InitialState {
  switch (action.type) {
    case "CHANGE_VISIBLE":
      return {
        ...state,
        visible: action.payload,
      };
    case "CHANGE_VISIBLE2":
      return {
        ...state,
        visible: action.payload,
      };
    default:
      return state;
  }
}
