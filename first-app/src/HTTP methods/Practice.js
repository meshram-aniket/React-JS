import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";

export default function Practice() {
  const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);



//   using Async-await 
  const getApiData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
    setData(res.data)
  }

  useEffect(()=>{
    getApiData()
  },[])




  return (
    <>
      {data.map((x, i) => {
        return (
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card " style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{x.name}</h5>
                  <p className="card-text">{x.email}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
