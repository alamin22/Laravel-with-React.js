import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState , useEffect } from "react";

function Details(){
    const [info,setInfo] = useState({
        name:"",
        designation:"",
        describe1:"",
        describe2:"",
    });
    const{ id } = useParams();

    useEffect(()=>{
        getInfo();
    },[]);

    const getInfo=()=>{
        fetch('/details/'+id).then(response => {
            console.log(response);
            return response.json();
          }).then(data => {
            // Work with JSON data here
            setInfo(data);
            console.log(data);
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    }
    return(
        <div className="container mt-5">
            <div className="card text-center">
                <div className="card-body">
                    <h3>{info.name}</h3>
                    <b>{info.designation}</b>
                    <p>{info.describe1}</p>
                    <p>{info.describe2}</p>
                </div>
            </div>
        </div>
    )
}
export default Details;