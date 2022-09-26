import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar';
import CalendarHeader from './components/CalendarHeader';
import CalendarSidebar from './components/CalendarSidebar';
function App() {
  return (
    <div className="App">
        <CalendarHeader/>
        <div className='content'>
            <CalendarSidebar/>
            <Calendar/>
        </div> 
    </div>
  );
}
export default App;
