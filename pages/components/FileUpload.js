// import React, {useEffect, useState} from 'react'
// import { fetchArticles } from '../service'


// const FileUpload = () => {
//     const [articles, setArticles] = useState([])


//     useEffect(()=>{
//         fetchArticles().then(data => setArticles(data))
//         console.log(articles);
//     }, [])

//     return (
//         <div>
//             {articles.map(article => 
//                 <div>
//                     <h3>{article.title}</h3>
//                     <img src={article.image} alt="img" />
//                 </div>
                
//             )}
//         </div>
//     )
// }

// export default FileUpload
