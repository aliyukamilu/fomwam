import React from "react";
import { Link } from 'react-router-dom'
import "../styles/Header.css";
import "../App.css"



import Header from '../components/Header';
import Cards from "../components/Cards";

function Home() {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <h3 className="mb-3">Courses</h3>
                <div className="row">
                    <Cards />
                </div>
            </div>
        </>
    )
}

export default Home