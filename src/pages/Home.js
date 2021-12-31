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
                    <Cards name="Graphics Design" img="graphic-designer.png" bgColor="#F93131" />
                    <Cards name="Web Development" img="graphic-designer.png" bgColor="#28BBFC" />
                    <Cards name="Mobile Design" img="graphic-designer.png" bgColor="#F94445" />
                    <Cards name="Phantom Design" img="graphic-designer.png" bgColor="#F94445" />
                </div>
            </div>
        </>
    )
}

export default Home