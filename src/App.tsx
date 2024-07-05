import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPlansActions, setPlansActions, updatePlansActions } from './services/actions/plansAction';
import { snapshotPlansObservers } from './services/observers/plansObservers';


function App() {

  const [plansEffect, setPlansEffect]= useState<any[]>([])
  useEffect(()=>{  
        // snapshotPlansObservers(setPlansEffect,['Mensal'],'tOSE8orBhhDbcUTKeDSY')
  },[])
  return (
    <div className="App">
      <h1>
        {plansEffect.map((elemento,index) =>(
          <p key={index}>{elemento.text}</p>
        ))}
      </h1>

      <button onClick={()=> {
        setPlansActions({
          academia:'ZhqAZ9vGckQexoCWLiv3',
          text: 'fpaidjf',
          type:'mensal',
          value: 70
        },'ZhqAZ9vGckQexoCWLiv3')
      }}>SetPlanos</button>
    </div>
  );
}

export default App;
