import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Courses from './components/Courses'
// import App from './App';
import * as serviceWorker from './serviceWorker';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <p>Number of exercises {sum}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  )
}

const Course = (props) => {
  const parts = props.course.parts
  const name = props.course.name
  const numex = parts.map(part => part.exercises)
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const x = numex.reduce(reducer)
  return (
    <div>
      <h1>{name}</h1>
      {parts.map(part => <p>{part.name} {part.exercises}</p>)}
      <b>total of {x} exercises</b>
    </div>
  )
}

const Courses = (props) => {
  const courses = props.courses
  return (
    <div>
    {courses.map(courses => <Course course = {courses} />)}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

ReactDOM.render(<App />, document.getElementById('root'))
