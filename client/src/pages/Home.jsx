import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { toast } from "react-toastify";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
        <Link to="/form">
        <button className="btn btn-contact">Form</button>
        </Link>
        
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>tel</th>
            <th style={{ textAlign: "center" }}>name</th>
            <th style={{ textAlign: "center" }}>data</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.tel}</td>
                <td>{item.name}</td>
                <td>{item.data}</td>
                <td>
                    <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button className="btn btn-delete">Delete</button>
                    <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                    </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
