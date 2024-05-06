import { Fragment, useState } from "react"
import Navbar from "./Navbar"
import NewsBoard from "./Newsboard"

const Newsmain=()=>{
    const [category,setCategory] = useState("general")
    const [country,setCountry]= useState("in")
    return(
        <Fragment>
             <Navbar setCategory={setCategory} setCountry={setCountry}/>
             <NewsBoard category={category} country={country}/>

        </Fragment>
    )
}
export default Newsmain