import { getAllPosts } from '../service'
import React, { useEffect, useState } from "react"
import styles from '../styles/Home.module.css'



const Card = () => {

    const [articles,setArticles] = useState([])
    const [search,setSearch] = useState('')


    useEffect(() => {
      getAllPosts().then(res => {
          console.log(res.data.data)
          setArticles(res.data.data)
      })
  },[])
  
   
    return (
        <>
         <input className={styles.inputSearch} type='search' placeholder='Search title...' onChange={(e) => {setSearch(e.target.value)}} />

             <main className="div">
      {
               articles?.filter((value) => {
                if(search === '') {
                   return value
                }else if (value.body.toLowerCase().includes(search.toLowerCase()) || value.title.toLowerCase().includes(search.toLowerCase())) {
                    return value
                }  else {
                 return null   
                }
                            
            }).map((article,id) => {
                   return (
                       <div className={styles.card} key={id}>
                           <h3>{article?.title}</h3>
                            {/* <img src={article?.images} alt={'New'} /> */}
                            <img src={"http://localhost:8055/assets/files" + article.images} alt={article.title} />

                           {/* <p>{article?.description}</p> */}
                           <p className='text-left'>{article.body}</p>
                           <div className={styles.created}>
                            <span>Created: </span>
                           <span>{article?.date_created.slice(0,10)}</span>
                           <span>{article?.date_created.slice(11,19)}</span>
                           {/* <span>Created: {article?.date_created.replace(/T/, ' ')}</span> */}
                           </div>
                           <div className={styles.updated}>
                            <span>Updated:</span>
                           <span>{article?.date_updated.slice(0,10)}</span>
                           <span>{article?.date_updated.slice(11,19)}</span>
                           </div>
                       </div>
                   )
               })  
            }

      </main>
        </>
    )
}

export default Card
