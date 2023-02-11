import React, { useState, useEffect } from "react";
import './Booksdata.css'
import axios from "axios";
import { url } from "../resourse";
import ListBooks from "./ListBooks/ListBooks";





export default function Booksdata() {

    const [books, setbooks] = useState([]);

    const getbooks = async () => {
        try {
            const data = await axios.get(url);
            setbooks(data.data);
            // console.log(data.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getbooks();
    }, [])

    return (
        <div className="outer-book-container">

            <div className="Books-data-outer-box">
                <ListBooks getbooks={getbooks} books={books} />
            </div>
            
        </div>
    );
}
