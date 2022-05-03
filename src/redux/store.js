import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi how are you?', likesCount: 10 },
        { id: 2, message: "It's my first post message", likesCount: 25 },
        { id: 2, message: "Hey amazing", likesCount: 23 },
        { id: 2, message: "Cool", likesCount: 45 }
      ],
      newPostText: 'how you do'
    },

    messagesPage: {
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
    },

    sidebar: {
      friends: [
        { id: 1, friendsName: 'Andrey' },
        { id: 2, friendsName: 'Sveta' },
        { id: 3, friendsName: 'Kolya' },
      ]
    }

  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) { //{type: 'ADD-POST'}

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;
