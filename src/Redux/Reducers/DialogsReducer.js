const NEW_MESSAGE = "NEW-MESSAGE";

let InintialState = {
  people: [
    { id: 1, name: "Amir" },
    { id: 2, name: "Aynur" },
    { id: 3, name: "Kamill" },
    { id: 4, name: "Diana" },
    { id: 5, name: "ILham" },
    { id: 6, name: "Arslan" },
    { id: 7, name: "Sasha" },
    { id: 9, name: "JricA" },
    { id: 10, name: "Trrr" },
    { id: 12, name: "FunArt" },
    { id: 13, name: "GGBET" },
    { id: 14, name: "Spula" },
    { id: 15, name: "Eeee" },
  ],
  message: [
    { id: 1, message: "Hi" },
    { id: 2, message: "What are u doing?" },
    { id: 3, message: "Hehe" },
    { id: 4, message: "LoL KeK Cheburek" },
  ],
};

const DialogsReducer = (state = InintialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      let MessageElement = {
        id: Date.now().toString(),
        message: action.message,
      };
      return {
        ...state,
        message: [...state.message, MessageElement],
      };
    default:
      return state;
  }
};

export const AddMessageFunction = (message) => ({
  type: NEW_MESSAGE,
  message: message,
});

export default DialogsReducer;
