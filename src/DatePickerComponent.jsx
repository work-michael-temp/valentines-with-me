// src/DatePickerComponent.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pic from './images/Subject.png'

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Example available dates
  const availableDates = [
    new Date(2025, 1, 14),
    new Date(2025, 1, 15),
    new Date(2025, 1, 16),
  ];

  return (
    <div>
      <h3>Select a Date:</h3> <br />
      <span style={{paddingLeft: "50px"}}>

        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)} // Update state when date is picked
          highlightDates={availableDates} // Highlight available dates
          inline
          openToDate={new Date("2025/02/01")}
        /> 
      </span>
       {/* <br /> */}
      <img style={{ width: '50px', height: 'auto' }} src={pic}></img>
    </div>
  );
};

export default DatePickerComponent;
