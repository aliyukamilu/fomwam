import React from 'react'
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Graphics design",
    image: "graphic-designer.png"
  },
  {
    id: 2,
    title: "Web Development",
    image: "graphic-designer.png"
  },
  {
    id: 3,
    title: "Mobile Development",
    image: "graphic-designer.png"
  },
  {
    id: 4,
    title: "Phantom Design",
    image: "graphic-designer.png"
  }

]
const colors = ["#F93131", "#28BBFC", "#F94445", "#44CD03"]


function Cards(props) {
  return (
    <>
      {courses.map((course, index) => (
        <div className="col-md-3" key={index}>
          <Link to={`courseLesson/${course.id}`} className="card courseCard">
            <div className="cardhead d-flex justify-content-center py-5" style={{ background: `${colors[index]}` }}>
              <img src={require(`../img/icons/${course.image}`)} alt="notification" className="imgCard" />
            </div>
            <div className="card-body p-3">
              <div className="card-title courseTitle">{course.title}</div>
            </div>
          </Link>
        </div>
      ))}


    </>
  )
}

export default Cards
