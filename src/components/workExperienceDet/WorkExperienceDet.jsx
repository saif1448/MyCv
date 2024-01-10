import React, { useState } from 'react'

const WorkExperienceDet = ({ item }) => {

    const { duration, description: { designation, organization, responsibilities } } = item


    return (
        <div>
            <h3>{designation}</h3>
            <p>{duration}</p>
            <h4>{organization}</h4>
            <h4>Responsibilities</h4>
            <ul>
                {responsibilities.map(element => (
                    <li key={element.id}>{element}</li>
                ))}
            </ul>
        </div>
    )
}

export default WorkExperienceDet