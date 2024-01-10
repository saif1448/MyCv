import React from 'react'
import './Research.scss'
import { RESEARCH_DATA as data } from '../../data/research-data'

const Research = () => {
  return (
    <div>
      <h2>Research and Publications</h2>
      <div className='research-details'>
        <div className='research-interest'>
          <h3>Research Interest</h3>
          <p>Natural Language Processing, Machine Learning, Deep Learning, Artificial Intelligence</p>
        </div>
        <div className='publications'>
          <h3>Publications</h3>
          <ul>
            {data.map( item => (
              <li>
                <h3><a href={item.url}>{item.title}</a></h3>
                <p>{item.conference_name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Research