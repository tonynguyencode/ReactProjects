import logo from './logo.svg';
import './App.css';
import React from 'react';
import bubulogo from './bubulogo.png';

function App() {
  return (
    <div className="App">


      <div className="App-header">

        <div className="Topbar">
          <img class="icon" src={bubulogo} alt="Icon Image" className="icon"/>
          <h1 class="">Application</h1>
        </div>

        <div className="headerName" style={{margin: '15px'}}>
        <h1>Cash Flow Management</h1>
        </div>

      </div>
      

      {/**/}
      <div className="Cash-Debt-Page">
        {/* Middle Section */}
        <div className="Information-Feature" style={{display: 'flex', flexDirection: 'column',  marginTop: '80px'}}>

          {/* Cash Section */}
          <div className="Cash-Feature feature" style={{border: '0px solid'}}>
            {/* Cash Inflow and Cash Outflow container box*/}
            <div className="Info-flow container" style={{display: 'flex', flexDirection: 'column', alignItems:'flex-start', margin:'20px', boxSizing:'content-box', border:'0px solid', paddingBottom:'35px'}}>
              <p>Cash  Inflow </p>
              <p>Cash Outflow</p>
            </div>
            <div className="Content container" style={{display: 'flex', flexDirection: 'column', alignItems:'flex-start', boxSizing:'content-box', border:'0px solid'}}>
              <h2 style={{paddingLeft:'8px', fontSize:'35px'}}>Cash </h2>
              <p style={{font:'caption', fontSize:'30px'}}> Balance: </p>
              <button className="button-67" style={{fontSize:'25px'}}> Read More</button>
            </div>
          </div>




          {/* Debt Section */}
          <div className="Debt-Feature feature container" style={{marginLeft:'15px',}}>
          
          </div>
        </div>
      </div>

    {/* App DIV*/}
    </div>  
    
 
    
  );
}

export default App;
