import React from 'react'
import { EDU_DATA as data } from '../../data/education-data'
import EduDetails from './EduDetails'
import "./Education.scss"

const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      <div className='edu-details'>
        {data.map(item => (
          <EduDetails key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Education