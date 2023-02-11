import React,{useEffect, useState} from "react";
import './Editbook.css';
import { useNavigate, useParams } from "react-router-dom";
import  axios from "axios";

export default function Editbook() {
    const {id} = useParams();
    const [bookid , changeid] = useState("");
    const [title , changetitle] = useState("");
    const [author , changeauthor] = useState("");
    const [publisher , changepublisher] = useState("");
    const [release_date , changerelease_date] = useState("");
    
    const navigate = useNavigate();
    

    useEffect(()=>{
            axios.get("http://localhost:3001/Books/"+id).then((res)=>{
            // console.log(res.data)
            changetitle(res.data.title);
            changeauthor(res.data.author);
            changepublisher(res.data.publisher);
            changerelease_date(res.data.release_date);
            
        }).catch((err)=>{
            console.log(err.message);
        })
    },[]);


    async function submit(e) {
        e.preventDefault();
        // const booksdata = { title, author, publisher, release_date, pages }
        axios.put(`http://localhost:3001/Books/${id}`,{
            title:title,
            author:author,
            publisher:publisher,
            release_date:release_date,
           
        })
        .then(()=>{
            alert("Edited Succesfull");
            navigate("/");
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

    return (
        <div className="edit-books-box">
            <div className="edit-book-form">
                <div className="edit-book-form-title"><h1>Edit Book</h1></div>
                <div className="edit-form">
                    <form onSubmit={(e) => submit(e)}>
                        <div className="edit-title">
                            <label>Title :</label>
                            <div className="input-tilte"><input
                                type={"text"}
                                placeholder={"Write title here..."}
                                value={title}
                                id="title"
                                onChange={(e) => {changetitle(e.target.value)}}
                            /></div>
                        </div>
                        <div className="edit-author">
                            <label>Author :</label>
                            <div className="input-author"><input
                                type={"text"}
                                placeholder={"Write Author name here..."}
                                value={author}
                                id="author"
                                onChange={(e) => {changeauthor(e.target.value)}}
                            /></div>
                        </div>
                        <div className="edit-publisher">
                            <label>Publisher :</label>
                            <div className="input-publisher"><input
                                type={"text"}
                                placeholder={"Write Publisher name here..."}
                                value={publisher}
                                id="publisher"
                                onChange={(e) => {changepublisher(e.target.value)}}
                            /></div>
                        </div>
                        <div className="edit-release_date">
                            <label>ISBN# :</label>
                            <div className="input-release-date"><input
                                type={"number"}
                                placeholder={"Enter ISBN..."}
                                value={release_date}
                                id="release_date"
                                onChange={(e) => {changerelease_date(e.target.value)}}
                            /></div>
                        </div>
                        
                        <button type="submit">Save</button>

                    </form>
                </div>
            </div>
        </div>
    );
}