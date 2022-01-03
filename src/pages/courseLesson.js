import React, { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'

import { Container, Row, Col, Button } from "react-bootstrap"
import Header from '../components/Header';

import '../styles/courseLesson.css'

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

export default function Courselesson() {
  const params = useParams()

  let courseDetail = null
  courses.map((course, index) => (
    course.id === parseInt(params.courseId) ?
      courseDetail = course : courseDetail
  ))
  let lessons = [1, 2, 3, 4, 5, 6, 7]

  return (
    <>
      <Header />
      {
        <Container className="mt-5">
          <Row>
            <Col md={8}>
              <div className="card card-body cardLesCard px-4">
                <p className="coursetitle mt-2">{courseDetail.title}</p>
                <div className="row mt-3 justify-center">
                  {lessons.map((lesson, index) => (
                    <LessonCards title={`Lesson ${lesson}`} key={index} bgColor="#FCAC06" />
                  ))}

                </div>

              </div>

            </Col>
            <Col md={4}>
              <div className="card card-body cardLesCard px-5">
                <div className="d-flex justify-between align-items-center">
                  <p className="mt-2 mb-0" > {`${courseDetail.title} Progress`}</p>
                  <img src={require('../img/icons/graphic-designer.png')} style={{ width: 40 }} alt="" />
                </div>

                <hr />
                <Progressview />
              </div>

              <div className="card card-body cardLesCard px-5 mt-5">
                <p className="mt-2 mb-0" >Leaderboard</p>
                <div>
                  <Leaderboard />
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      }


    </>
  )
}


const LessonCards = (props) => {
  const navigate = useNavigate()
  return (
    <div className="col-sm-4 mb-5" onClick={() => navigate('/course')}>
      <div className="lessonsRoundCard hover:translate-y-0.5 cursor-pointer transition d-flex justify-center flex-col align-items-center text-center">
        <div className="imgCont rounded-full" style={{ background: `${props.bgColor}` }}>
          <img src={require('../img/icons/graphic-designer.png')} className="lessonImg" alt="" />
        </div>
        <p className="mb-0 mt-2">{props.title}</p>
      </div>
    </div>
  )
}

const Progressview = () => {
  return (
    <>
      <div className="progressCont mt-3">
        <div className="barOuter w-100">
          <div className="barInner" style={{ width: '53%' }}></div>
        </div>
        <div className="d-flex justify-between align-items-center mt-4">
          <div className="d-flex align-items-center">
            <img src={require('../img/icons/gems.png')} alt="" />
            <p className="mb-0 ml-3">190 <span style={{ color: 'gray' }}>XP</span></p>
          </div>
          <p className="mb-0 ml-3">53 <span style={{ color: 'gray' }}>%</span></p>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="buttonCont">
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


const leaderboards = [
  {
    id: 1,
    name: "Aisha Ibrahim",
    points: "200"
  },
  {
    id: 2,
    name: "Aisha Musa",
    points: "190"
  },
  {
    id: 3,
    name: "Khadija Ibrahim",
    points: "180"
  },
  {
    id: 4,
    name: "Maryam Kabir",
    points: "170"
  }
]

const Leaderboard = () => {
  return (
    <div className="leaderboardCont">
      <div className="theScrolliew">
        {leaderboards.map((leaderboard, index) => (
          <div className="d-flex justify-between align-items-center mb-3 mt-4" key={index}>
            <div className="d-flex align-items-center">
              <img src={require('../img/icons/profile.png')} alt="" className="rounded-full w-9" />
              <p className="mb-0 theName ml-2">{leaderboard.name}</p>
            </div>
            <p className="theXp mb-0">{leaderboard.points} XP</p>
          </div>
        ))}
      </div>
      <Button className="takeQuiz w-100 mt-4">See Full List</Button>
    </div>
  )
}