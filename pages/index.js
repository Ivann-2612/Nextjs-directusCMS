import Head from 'next/head'
import React, { useEffect, useState } from "react"
import { getAllPosts } from './service'


export default function Home() {
  const [articles,setArticles] = useState([])

  useEffect(() => {
    getAllPosts().then(res => {
       console.log(res.data.data)
        setArticles(res.data.data)
    })
},[])

 

  return (
    <div className="main-div">
      <Head>
        <title>Posts App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="div">
      {
               articles.map((article,id) => {
                   return (
                       <div className='card' key={id}>
                           <h5>{article?.title}</h5>
                           <p>{article?.date_updated}</p>
                           <img src={article?.images} alt={'New'} />
                           <p>{article?.description}</p>
                           <p className='text-left'>{article.body}</p>
                           <span>{article?.date_created.slice(0,10)}</span>
                       </div>
                   )
               })  
            }

      </main>
    </div>
  )
}
