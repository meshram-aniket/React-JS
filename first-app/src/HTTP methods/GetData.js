import React from 'react'
import {useState, useEffect} from 'react'
import axios from "axios"
// import {BrowserRouter, Route, }


export default function GetData() {
    const [myData, setMyData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/Aniket')
        .then(res=>{
            setMyData(res.data)
        })
        .catch(err=> {
            console.log(err.message)
        })
    },[])
  return (
    <>
    {
        myData.map((x,i)=>{
            return(
                <ol key={i}>
                    {x.name}{x.email}{x.phone}{x.id}

                </ol>
            )
        })
    }
    </>
  )
}
   