import React from 'react'

export default function StudentDetails(props) {
  console.log(props.match.params.sNo)
  return (
    <div className='student-details'>
      <h1>学生详情页</h1>
      <p>学生学号：{props.match.params.sNo}</p>
    </div>
  )
}
