import axios from "axios";
import React from "react";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const UserList =()=>{

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = ()=>{
        axios.get('http://localhost:8000/get/users')
        .then((res)=>{
            console.log(res.data);
            setUsers(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const deleteUser = (id)=>{
        axios.get('http://localhost:8000/delete/users/'+id)
        .then((res)=>{
            console.log(res);
            //page refresh after delete data
            getUsers();
        }).catch((error)=>{
            console.log(error);
        });
    }

    const deleteData=(id)=>{
        deleteUser(id);
    }

    

    return(
        <React.Fragment>
        <div className="container">
            
                <table className="table table-borderless text-center">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                {
                    users.map((user,index)=>(
                        <tbody>
                            <tr className="p-3">
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.author}</td>
                                <td>{user.price}</td>
                                <td><Link className="btn btn-success" to={"/single/user/"+user.id}>Edit</Link>&nbsp;&nbsp;<button className="btn btn-danger" onClick={()=>deleteData(user.id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    ))
                }
                </table>
            </div>
        </React.Fragment>
    );
}
export default UserList;