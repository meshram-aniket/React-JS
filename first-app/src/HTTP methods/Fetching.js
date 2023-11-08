import React,{useState, useEffect} from 'react'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css"

export default function Fetching() {
    const [myData, setMyData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
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
        <table className='table'>
            <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>userId</th>
                <th scope='col'>title</th>
                <th scope='col'>Body</th>
            </tr>
            </thead>
            <tbody>{
                myData.map((x,i)=>{
                    return (
                        <tr >
                            <td>{x.id}</td>
                            <td>{x.userId}</td>
                            <td>{x.title}</td>
                            <td>{x.Body}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    </div>
  )
}
