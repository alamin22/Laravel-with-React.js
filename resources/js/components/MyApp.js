import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import Navbar from './Navbar';
import Footer from './Footer';
import AddUser from './pages/Signup';
import UserList from './pages/UserList';
import EditUser from './pages/EditUser';


function MyApp() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home /> } />
            <Route exact path="/about" element={<About /> } />
            <Route exact path="/contact" element={<Contact /> } />
            <Route exact path="/details/:id" element={<Details /> } />
            <Route exact path="/signup" element={<AddUser /> } />
            <Route exact path="/users" element={<UserList /> } />
            <Route exact path="/single/user/:id" element={<EditUser /> } />
        </Routes>
        <Footer />
        </>
    );
}

export default MyApp;

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>
            , document.getElementById('app'));
}