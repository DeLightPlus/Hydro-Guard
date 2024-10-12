import './styles.css';
import React from 'react';

const Header = ({isAuthenticated}) => {
  return (
    <header className='header'>
        <br/>
      <strong>CardioMinder</strong>

      <nav>
      <ul>
    { 
        isAuthenticated ? (
            <>
            <li><a href='#'>Admin-User</a></li> <hr/>     
            <li><a href='#'>Logout</a></li>  
              </>
        ):(
<>
            <li><a href='#'>Signup</a></li>    <hr/>       
            <li><a href='#'>Signin</a></li>
              </>
        )
    }   
      </ul>
      </nav>
      
    </header>
  );
};



export default Header;
