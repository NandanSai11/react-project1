import axios from "axios";
import React, { useEffect, useState } from "react";
//import axios from "axios";
// import { useState, useEffect } from "react";
//import styles from "@/styles/Home.module.css";
import { Link } from "react-router-dom";

function Posts(props) {
  const { indIdData } = props;
  console.log(indIdData);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${indIdData}/comments`)
      .then((res) => setData(res.data));
  });

  return (
    <>
      <Link to={"/home"}>
        <button className="btn btn-dark  mt-3 mx-3">Back</button>
      </Link>
      {data.length > 0 ? (
        <div className="container col-8">
          {data.map((ele) => {
            return (
              <div key={ele.id}>
                <div className="row align-items-start">
                  <div className="col">
                    {" "}
                    <h4>Name</h4>
                    <p style={{ textAlign: "justify" }}>{ele.name}</p>
                  </div>
                  <div className="col">
                    {" "}
                    <h4>Email</h4>
                    <p style={{ textAlign: "justify" }}>{ele.email}</p>
                  </div>
                  <div className="col">
                    {" "}
                    <h4>Body</h4>
                    <p style={{ textAlign: "justify" }}>{ele.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <center>
          <div className="spinner-border mt-5" role="status">
            <span className="sr-only"></span>
          </div>
        </center>
      )}
    </>
  );
}

export default Posts;
