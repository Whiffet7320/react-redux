import React from 'react';
import './StudentTable.css'

function handleClick(sNo,history){
  history.push(`/student/${sNo}`)
}

export default function StudentTable(props) {
  // console.log(props)
  const stus = props.stus.map(ele => {
    return <tr key={ele.id}>
      <td>{ele.sNo}</td>
      <td>{ele.name}</td>
      <td>{ele.sex===0?'男':'女'}</td>
      <td>{ele.birth}</td>
      <td>{ele.email}</td>
      <td>
        <button onClick={()=>{
          handleClick(ele.sNo,props.history)
        }}>详情</button>
      </td>
    </tr>
  })
  return (
    <div className='student-table'>
      <table>
        <thead>
          <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>出生年月</th>
            <th>邮箱</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {stus}
        </tbody>
      </table>
    </div>
  )
}
