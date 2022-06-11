import * as api from '../api'
import { FETCH_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from '../constants/postsActionTypes'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_POSTS, payload: data });
    } catch (error) {
        console.error(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        
        dispatch({ type: CREATE_POST, payload: data })
    } catch (error) {
        console.error(error.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        
        dispatch({ type: UPDATE_POST, payload: data })
    } catch (error) {
        console.error(error.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        
        dispatch({ type: DELETE_POST, payload: id })
    } catch (error) {
        console.error(error.message)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        
        dispatch({ type: LIKE_POST, payload: data })
    } catch (error) {
        console.error(error.message)
    }
}