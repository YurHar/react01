const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi how are you?', likesCount: 10 },
        { id: 2, message: "It's my first post message", likesCount: 25 },
        { id: 2, message: "Hey amazing", likesCount: 23 },
        { id: 2, message: "Cool", likesCount: 45 }
    ],
    newPostText: 'How are you'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            };

        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;