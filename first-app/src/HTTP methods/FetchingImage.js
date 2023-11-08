import React,{useState, useEffect} from 'react'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css"


export default function FetchingImage() {
    const [myData, setMyData] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res.data)
            setMyData(res.data)
        })
        .catch(errs=>{
            console.log(errs)
        })
    },[])
  return (
    <div>   
        {
               myData.map((x,i)=>{
                    return (
                        <ul key={i}>
                            <li>{x.id}<img src={x.image}></img></li>  
                        </ul>
                    )
                })
            }
    </div>
  )
}








