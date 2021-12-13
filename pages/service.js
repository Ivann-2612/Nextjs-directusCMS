import axios from 'axios'

const BLOG = 'http://localhost:8055/items/posts'

export const getAllPosts = () =>  {
    return axios.get(BLOG)
}

// export const fetchArticles = async () => {
//     const {data} = await axios.get('http://localhost:8055/items/posts')
//     console.log(data.data)
//     return data.data
// }