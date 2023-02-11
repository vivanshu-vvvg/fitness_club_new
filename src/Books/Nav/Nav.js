import React from "react";
import './Nav.css'


export default function () {
    return (
        <div className="nav-box">
            <div className="left-side-nav">
                <h1>BOOK LIST MAINTENANCE FORM</h1>
            </div>
            <div className="right-side-nav">
                <ul>
                   
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/addbook" >Addbooks</a></li>
                
                </ul>
            </div>
        </div>
    );
}