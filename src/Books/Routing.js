import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Addbooks from "./Addbooks/Addbooks";
import Booksdata from "./Booksdata";
import Editbook from "./Editbooks/Editbook";
import Nav from "./Nav/Nav";

export default function Routing(){
    return(
        <div className="routing">
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route exact path="/" element={<Booksdata />} />
                    <Route path="/addbook" element={<Addbooks />} />
                    <Route path="/editbook/:id" element={<Editbook />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}