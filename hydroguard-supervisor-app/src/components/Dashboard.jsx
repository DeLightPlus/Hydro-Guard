
import './progressBar.css';
import './styles.css';
import Sidebar from './Sidebar';

const Dashboard = () => {

    const progress = 30;
    const radius = 45; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

  return (
    <div className='dash-container'>
    <Sidebar/>    
    <main className='dashboard'>
      <h2>Metrics Overview</h2>
      <div className='metrics'>
      <div className='card'>
        <h3>Patients</h3>
        <h1>120</h1>
      </div>

      <div className='card'>
        <h3>Active Sessions</h3>
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

        <h3>Alerts</h3>
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
        <p>10</p>
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

      </div>
      
<div className='trends'>
<strong>Overall Health Trends</strong>
<div className='graph'></div>
    
    </div>


    </main>
    </div>
  );
};



export default Dashboard;
