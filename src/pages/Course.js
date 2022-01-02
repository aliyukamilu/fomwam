import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Player } from 'video-react';

import "../styles/Course.css"
import Header from '../components/Header';
import 'video-react/dist/video-react.css';

const Lessons = [
  {
    id: 1,
    title: "Lesson 1 Biography",
    url: "video.html"
  },
  {
    id: 2,
    title: "Lesson 2 Biography",
    url: "video.html"
  },
  {
    id: 3,
    title: "Lesson 3 Biography",
    url: "video.html"
  },
  {
    id: 4,
    title: "Lesson 4 Biography",
    url: "video.html"
  },
  {
    id: 5,
    title: "Lesson 5 Biography",
    url: "video.html"
  },
  {
    id: 6,
    title: "Lesson 6 Biography",
    url: "video.html"
  }
]
const colors = ['#AC3B6C', '#2F73A0', '#EFBB5B', '#47AE9B', '#EFBB5B', '#47AE9B']

function Course() {
  return (
    <>
      <Header />
      <Container className="mt-3">
        <Row>
          <Col md={4}>
            <div className="card card-body theSideBar">
              <VideoCards />
            </div>
          </Col>
          <Col md={8}>
            <div className="card card-body">
              <VideoPlayer />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const VideoCards = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      {
        Lessons.map((lesson, index) => (
          <div className="videoCards mb-3"
            style={{ background: `${colors[index]}` }}
            key={index}
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}>
            <p className="lessonTitle mb-0">Lesson {index + 1}</p>
            <div className="courseImgCont w-100 d-flex justify-center p-3 pb-5">
              <img src={require('../img/icons/graphic-designer.png')} alt="" className="theimg" />
            </div>
            {isShow && (
              <div className="overLayBtn text-center" key={index}>
                <div className="d-flex justify-center align-items-center h-100">
                  <img src={require('../img/icons/play.png')} alt="" style={{ width: 60 }} />
                </div>
              </div>
            )}

          </div>
        ))
      }
    </>

  )
}


const VideoPlayer = () => {
  return (
    <>
      <Player ref={(player) => { this.player = player }}>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
    </>
  )
}

export default Course