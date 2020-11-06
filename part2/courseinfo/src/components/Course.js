import React from 'react';

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

export default Course
