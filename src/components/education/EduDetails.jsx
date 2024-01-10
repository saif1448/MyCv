import React from 'react'
import "./EduDetails.scss"
const EduDetails = ({ item }) => {
    const { qualification, institution, result, session, duration } = item
    return (
        <div className='edu-item-details'>
            <h3>{qualification}</h3>
            <h4>{institution}</h4>
            <p>{result}</p>
            <p>{session}</p>
            <p>{duration}</p>
        </div>
    )
}

export default EduDetails