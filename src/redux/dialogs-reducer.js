const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Valeria' }
  ],

  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Ok' },
    { id: 4, message: 'Ok' },
    { id: 5, message: 'Google' }
  ],

  newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.newMessage
      };

    case SEND_MESSAGE:
      let newMessage = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, {id: 6, message: newMessage}],
      };

    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (newMessage) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: newMessage });

export default dialogsReducer;