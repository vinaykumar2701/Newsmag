import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"


const NewsBoard =({category, country})=>{

    const[articles,setArticales]=useState([])

    useEffect(()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=87ef96af32c74340a05143c5211ec606`
        fetch(url).then(response=> response.json()
        .then(data=> setArticales(data.articles)))

    },[category,country])
    
    return(
        <div>
            <h1 className="text-center"> Latest <span className="badge bg-danger">NEWS</span></h1>
            {articles.map((news,index)=>{
                return<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}

        </div>
    )
}

export default NewsBoard