import axios from 'axios'

const BLOG = 'http://localhost:8055/items/posts'

export const getAllPosts = () =>  {
    return axios.get(BLOG)
}