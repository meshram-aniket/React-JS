import axios from "axios";
import React, { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";
import { Link } from "react-router-dom";

export default function () {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Aniket")
      .then((resp) => {
        console.log(resp.data);
        setMydata(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Link to="/create">
        <button>Create Student</button>
      </Link>
      {JSON.stringify(mydata)}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((x, i) => {
            return (
              <tr key={i}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.username}</td>
                {/* <td>{item.address}</td> */}
                <td>
                  <Link
                    to={`/read/${x.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${x.id}`}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                     className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
