import React from "react";
import { Link , useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const EditUser = () =>{

    const [uName,setuName] = useState();
    const [author,setAuthor] = useState();
    const [price,setPrice] = useState();

    useEffect(()=>{
        getSingleUser();
    },[])

    const {id} = useParams();

    const getSingleUser = ()=>{
        axios.get('http://localhost:8000/single/user/'+id)
            .then(res => {
                console.log(res.data);
                setuName(res.data.name);
                setAuthor(res.data.author);
                setPrice(res.data.price);
            }).catch((error) =>{ 
                console.log(error);
            })
    }
    //for data save process

    const [msg,setMsg] = useState();
    const [errmsg,setErrmsg] = useState();

    const FormHandleEdit = e => {
        let item = {uName,author,price}
        e.preventDefault();
        addDataToServerEdit(item)
        console.log(item);
    }
    const addDataToServerEdit = (data) => {
        axios.post("http://localhost:8000/edit/user/"+id, data).then(
            (response) => {
                console.log(response);
                setuName(response.data.name);
                setAuthor(response.data.author);
                setPrice(response.data.price);
                setMsg('Data Updated !');
                window.location = '/users';
            }, (error) => {
                console.log(error);
                setErrmsg('Require Field Cannot Be Empty!');
            }
        );
    }

    setTimeout(() => {
        setErrmsg(' ');
    },10000);

    return (
        <div>
            <div className="container mt-5">
                <div className="w-50 mx-auto shadow p-5 mt-2 bg-light">
                    <div class="jumbotron">
                        <h3 class=" text-center">Information Addition</h3>
                        <center><b className='text-center text-success p-1'>{msg}</b></center>
                        <center><b className='text-center text-danger p-1'></b>{errmsg}</center>
                        <div>
                            <form onSubmit={e => FormHandleEdit(e)}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">User Name</label>
                                    <input type="text" class="form-control" name="bookName"  placeholder="Enter Here" value={uName} onChange={(e) => setuName(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Author Name</label>
                                    <input type="text" class="form-control" name="authorName"  placeholder="Enter Here" value={author} onChange={(e) => setAuthor(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Price</label>
                                    <input type="text" class="form-control" name="price"  placeholder="Enter Here" value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <div className="container text-center mt-3">
                                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Save Data</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditUser;