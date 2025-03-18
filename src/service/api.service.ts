import {TodoModel} from "../models/TodoModel.ts";
import {PostModel} from "../models/PostModel.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts'

const loadTodos = async (): Promise<TodoModel[]> => {
    return await fetch(endpointTodos)
        .then(value => value.json());


}

const loadPosts = async (): Promise<PostModel[]> => {
    return await fetch(endpointPosts)
        .then(value => value.json());


}


export {loadTodos, loadPosts}


