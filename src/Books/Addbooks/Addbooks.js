import axios from "axios";
import React,{useState} from "react";
import './Addbooks.css';
import { Link, useNavigate } from "react-router-dom";


export default function Addbooks() {
    const navigate = useNavigate();
    const url = "http://localhost:3001/Books"
    const [books , setbooks] = useState({
        title:"",
        author:"",
        publisher:"",
        release_date:"",
        id:""
    })

   async function submit(e){
        e.preventDefault();
        axios.post(url,{
            title: books.title,
            author:books.author,
            publisher:books.publisher,
            release_date:books.release_date,
            
        }).then((res)=>{
            alert("book is added");
            navigate("/");
        })
        .then(resp=>{
            console.log(resp.books)
        })
    }

    function handel(e){
        const newbook = { ...books }
        newbook[e.target.id] = e.target.value
        setbooks(newbook)
        console.log(newbook)
    }
    return (
        <div className="add-books-box">
            <div className="add-book-img">
                <img src="https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489_960_720.jpg" alt="error" />
            </div>
            <div className="add-book-form">
                <div className="add-book-form-title"><h1>Add Book</h1></div>
                <div className="book-form">
                    <form onSubmit={(e)=>submit(e)}>
                        <div className="title">
                            <label>Title :</label>
                            <div className="input-tilte"><input 
                            type={"text"} 
                            placeholder={"Write title here..."} 
                            value={books.title}
                            id="title"
                            onChange={(e) =>handel(e) }
                            /></div>
                        </div>
                        <div className="author">
                            <label>Author :</label>
                            <div className="input-author"><input 
                            type={"text"} 
                            placeholder={"Write Author name here..."} 
                            value={books.author}
                            id="author"
                            onChange={(e) =>handel(e) }
                            /></div>
                        </div>
                        <div className="publisher">
                            <label>Publisher :</label>
                            <div className="input-publisher"><input 
                            type={"text"} 
                            placeholder={"Write Publisher name here..."} 
                            value={books.publisher}
                            id="publisher"
                            onChange={(e) =>handel(e) }
                            /></div>
                        </div>
                        <div className="release_date">
                            <label>ISBN# :</label>
                            <div className="input-release-date"><input 
                            type={"number"} 
                            placeholder={"Enter ISBN..."} 
                            value={books.release_date}
                            id="release_date"
                            onChange={(e) =>handel(e) }
                            /></div>
                        </div>
                        
                        <button>Add a Book</button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}