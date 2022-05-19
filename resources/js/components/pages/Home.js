import React from "react";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [personalInfo , setPersonalInfo]  = useState([]);

    useEffect(()=>{
        getInfoData();
    },[]);
    //function calling api
   async function getInfoData(){
        const res = await fetch('http://localhost:8000/get-data');
        const datas = await res.json();
        setPersonalInfo(datas);
   }

    return (
        <div className="container-fluid">
            <div className=" justify-content-center mt-3">
                <div className="row col-md-12">
                    {
                        personalInfo.map((item)=>(
                        <div className="col-md-4 mt-3">
                           <div className="card">
                               <div className="card-body">
                                   <h3>{item.name}</h3>
                                   <b>{item.designation}</b>
                                   <p>{item.describe1}</p>
                                   <Link to={"/details/"+item.id}>more...</Link>
                               </div>
                           </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default Home;