import React from "react";
import Navbar from "../components/Navbar";
import Home from '../pages/Home';
import Search from '../pages/Search';
import { useState } from 'react'
function PagePicker() {
    let [setPage, page] = useState("home")

    const goToSearch = () => {
       
        setPage()"search"
        console.log("searching", page);
    }
    const goToHome= () => {
        page = "home"
    }

    return (
        <div>
            <Navbar goToSearch={goToSearch}/>
            {
                page === "home" ?
                <Home />
                :
                <Search />
            }
        </div>
    );
}

export default PagePicker
