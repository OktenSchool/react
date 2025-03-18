import {TodoModel} from "../models/TodoModel.ts";
import {PostModel} from "../models/PostModel.ts";
import {CommentModel} from "../models/CommentModel.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts'
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments'

const loadTodos = async (): Promise<TodoModel[]> => {
    return await fetch(endpointTodos)
        .then(value => value.json());
}

const loadPosts = async (): Promise<PostModel[]> => {
    return await fetch(endpointPosts)
        .then(value => value.json());
}


const loadComments = async (): Promise<CommentModel[]> => {
    return await fetch(endpointComments)
        .then(value => value.json());
}

export {loadTodos, loadPosts, loadComments}


