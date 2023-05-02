import TicketBookingComponent from './components/ticket-booking.component';
import './App.css';
import React, {useState} from 'react'
import Axios from "axios"
const App = {} => {
  const [data, setData]=useState();

  const getData=async()=>{
    const response=await Axios.get("http://localhost:3001/api/student-tickets");
    setData(response.data);
  }

}
function App() {
  return (
    <div className="App">
      <TicketBookingComponent/>
    </div>
  );
}

export default App;
