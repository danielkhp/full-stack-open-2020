import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ courseName }) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((runningSum, value) => {
    return runningSum += value.exercises;
  }, 0)

  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />
        )}
      total of {totalExercises} exercises
    </div>
  )
}

const Course = ({ course }) => (
  <div>
    <Header courseName={course.name} />
    <Content parts={course.parts} />
  </div>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))
