import { FETCH_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from '../constants/postsActionTypes'

const reducer = (posts = [], action) => {
    switch(action.type) {
        case CREATE_POST: 
            return [...posts, action.payload]
        case FETCH_POSTS: 
            return action.payload
        case UPDATE_POST:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case DELETE_POST:
            return posts.filter((post) => post._id !== action.payload)
        case LIKE_POST:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        default:
            return posts
    }
}

export default reducer