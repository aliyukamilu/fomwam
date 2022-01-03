import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

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
  // const [isShow, setIsShow] = useState(false)

  // showOverlay() {
  //   alert('helllo')
  // }
  // function showOverlay(e) {
    
  //   // let theOverlay = e.getAttribute(`${e.dataset.vidcard}`)
  //   console.log("hello")
  // }

  return (
    <>
      {
        Lessons.map((lesson, index) => (
          <div className="videoCards mb-3"
            style={{ background: `${colors[index]}` }}
            key={index}
            data-vidcard={index}
            // onMouseOver={showOverlay()}
            // onMouseLeave={(this.hideOverlay}
              >
            <p className="lessonTitle mb-0">Lesson {index + 1}</p>
            <div className="courseImgCont w-100 d-flex justify-center p-3 pb-5">
              <img src={require('../img/icons/graphic-designer.png')} alt="" className="theimg" />
            </div>
            <div className="overLayBtn text-center" data-overcont={index}>
              <div className="d-flex justify-center align-items-center h-100">
                <img src={require('../img/icons/play.png')} alt="" style={{ width: 60 }} />
              </div>
            </div>

          </div>
        ))
      }
    </>

  )
}

const VideoPlayer = () => {
  return (
    <>
      <div className="d-flex justify-between align-items-center courseInfo">
        <p className="courseTitle">Graphics Design</p>
        <p className="lessonTitle">Lesson : 1</p>
      </div>
      <Player style={{ borderRadius: 10 }}>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>

      <div className="buttonCont mt-5" style={{width : '38%'}}>
        <Button className="takeQuiz w-100 d-flex align-items-center justify-between">
          <span className="iconCont rounded-full">
            <img src={require('../img/icons/open-book.png')} alt="" className="theIcon" />
          </span>
          <p className="mb-0" style={{ marginRight: '32%' }}>Take Quiz</p>
        </Button>
      </div>
    </>
  )
}

export default Course