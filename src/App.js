import React from 'react';
import './App.css';
import ItemRow from './components/ItemRow'
import Form from './components/Form'

function App() {
  return (
    <div className="container">
      <div className="container-fluid">
        <h1>WOB</h1>
        <Form/>
      </div>      
    </div>    
  );  
}

export default App;
