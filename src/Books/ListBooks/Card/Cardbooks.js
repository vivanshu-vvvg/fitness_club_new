import React from "react";
import './Cardbox.css'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../../../resourse";

export default function Cardbooks({ id, title, author, publisher, release_date, pages, getbooks }) {
   const navigate = useNavigate();

    async function deletebook(id){
        await axios.delete(`http://localhost:3001/Books/${id}`);
        getbooks();
        // alert(id)
    }
    const updateBook =(id)=>{
        navigate(`/editbook/${id}`);
        // alert(id);
    }

   
    return (
        <div className="card-book-content">
            <div className="title-books">
                <div className="marquee-box">
                    <marquee direction="right"><h2 className="card-book-title">{title}</h2></marquee>
                </div>
            </div>
            <div className="card-book-decription">
                <h3> <span>Books Written by :</span> {author}</h3>
                <h3><span>Book is Published by :</span> {publisher}</h3>
                <h3><span>Book is released on :</span> {release_date}</h3>
                
            </div>
            <div className="book-buttons">

                <button className="edit button" onClick={()=>{updateBook(id)}}>Edit</button>
                <button className="delete button "onClick={()=>{deletebook(id)}}>Delete</button>
            </div>
        </div>
    );
}