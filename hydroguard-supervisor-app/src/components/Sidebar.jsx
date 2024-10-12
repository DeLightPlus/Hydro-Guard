import './styles.css';

import React from 'react';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <ul>
        <li>Dashboard</li>
        <li>Reports</li>
        <li>Patients</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};


export default Sidebar;
