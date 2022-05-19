import React, { useState } from 'react'
import axios from 'axios';
function AddUser() {
    //Step 1:
    const [book, setBook] = useState({
        bookName: '',
        authorName: '',
        price: ''
    });
    const [msg,setMsg] = useState();
    const [errmsg,setErrmsg] = useState();
    //Step 3:
    const onInputChange = e => {
        setBook({ ...book, [e.target.name]: e.target.value })
        console.log(book);
    }
    const { bookName, authorName, price } = book;
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(book)
    }
    const addDataToServer = (data) => {
        axios.post("http://localhost:8000/book/store", data).then(
            (response) => {
                console.log(response);
                setBook({bookName:'',authorName:'',price:''});
                setMsg('Data Save Successfully !');
            }, (error) => {
                console.log(error);
                setErrmsg('Require Field Cannot Be Empty!');
            }
        );
    }
    setTimeout(() => {
        setMsg(' ');
    },10000);

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
                        <center><b className='text-center text-danger p-1'>{errmsg}</b></center>
                        <div>
                            <form onSubmit={e => FormHandle(e)}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">User Name</label>
                                    <input type="text" class="form-control" name="bookName"  placeholder="Enter Here" value={bookName} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Author Name</label>
                                    <input type="text" class="form-control" name="authorName"  placeholder="Enter Here" value={authorName} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Price</label>
                                    <input type="text" class="form-control" name="price"  placeholder="Enter Here" value={price} onChange={(e) => onInputChange(e)} />
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
export default AddUser;
