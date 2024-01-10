import React, { useState, useEffect } from 'react';
import WorkExperienceDet from '../workExperienceDet/WorkExperienceDet';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    fetch('/data/workExperienceData.json')
      .then(response => response.json())
      .then(data => setExperienceData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Work Experience</h2>
      <div>
        {experienceData.map(item => (
          <WorkExperienceDet key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Experience