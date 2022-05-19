import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="">
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
            <Link to="/" className="navbar-brand text-success">MyApp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className=" float-right" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link"><i>Sign Up</i></Link>
                    </li>
                    <li className="nav-item" style={{marginRight:'12px'}}>
                        <Link to="/users" className="nav-link btn btn-primary text-white"><i>Users</i></Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;