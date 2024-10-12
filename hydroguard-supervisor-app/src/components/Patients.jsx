import './styles.css';

import React from 'react';
import Sidebar from './Sidebar';

const Patients = () => {
  const progress = 30;
    const radius = 45; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

  return (
    <div className='dash-container'>
    <Sidebar/>    
    <main className='dashboard'>
      <input placeholder='Find Patient By Name'/>
      <select>
        <option value="">List of Patients</option>
        <option value="">12345456</option>
        <option value="">87665432</option>
      </select>
      <h2>Patient: Name (age: 00, male) </h2>
      <strong>Vital Signs</strong>
      <div className='metrics'>
      <div className='card' >
        <h3>Heart Rate</h3><hr/>
        <h2>36</h2>
      </div>

      <div className='card'>
        <h3>Blood Pressure</h3><hr/>
        <h2>45</h2>
      </div>      

      <div className='card'>
        <h3>Temperature</h3><hr/>
        <h2>10</h2>
      </div>

      <div className="card">
    <h3>Complience</h3>
<div className="radial-progress">
            <svg width="100" height="100">
                <circle className="progress-bg" cx="50" cy="50" r={radius}></circle>
                <circle
                    className="progress"
                    cx="50"
                    cy="50"
                    r={radius}
                    style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
                ></circle>
            </svg>
            <div className="percentage">{progress}%</div>
        </div>
</div>
<div className='card'>
        <h3>Alerts</h3><hr/>
        <h2>10</h2>
      </div>   

      <div>
      <h3>Appointment</h3><hr/>
      <p>- new prescription</p>
      <p>- Date: 14/10/2024</p>
        </div>  

      </div>
      
<div className='trends'><div>
<strong>Overall Health Trends</strong>
<br></br>
<u>Symptoms / Patient-reported Data</u>
<ul style={{textAlign:'left'}}>
  <li>- Dizzieness</li>
  <li>- Headche</li>
  <li>- Fatique</li>
</ul>
</div>
    <div className='graph'></div>
    
    
    </div>


    </main>
    </div>
  );
};



export default Patients;
