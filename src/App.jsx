import { useState } from 'react';
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Events from './components/eventCreate/dayPlan';

function App() {

  const[value , onChange] = useState(new Date())
  
  return (

    <main>
      <Calendar onChange={onChange}  value={value}/>
      <Events selectedDate={value}/>
      

    </main>
 
    

  )
}

export default App
