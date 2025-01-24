
import '/workspaces/codespaces-react/src/App.css';
import React, { useState } from 'react';
import { Button, Checkbox } from 'antd';
import { Routes, Route, Link } from 'react-router-dom'; 
import market from './images/market.png'
import pizza from './images/pizza.png'
import card from './images/card.png'

import DatePickerComponent from './DatePickerComponent';


function App() {
  const [isClicked, setIsClicked] = useState(false); // State to track button click

  const handleClick = () => {
    setIsClicked(true); // Update the state when the button is clicked
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          hi there !  i have a question for you <span className="heart">🤭</span> 
        </h1>
      </header>
      <body className='body'>

      {!isClicked ? (
        // Show this part if button hasn't been clicked
        <div>
          <h3>
            i was wondering if you would like to be my valentine and hang out with me 🫣
          </h3>

          <div>
            <Button type="primary" onClick={() => alert('Wrong answer 😡')}>
              yeah
            </Button>

            <Button variant="primary" onClick={handleClick}>
              YES !!
            </Button>
          </div>
        </div>
      ) : (
        // Show this part if the button has been clicked
        <div>
          <h2>
            Would these dates work ?
            
          </h2>
          
          <div>
            <DatePickerComponent /> {/* Use the DatePicker component here */}
          </div>
          <Checkbox>Yes</Checkbox>

          <div>
            
            <p>here are some ideas i had:</p>
            <img style={{ width: '500px', height: 'auto' }} src={market}></img> <p href="https://www.abbottsquaremarket.com/">Link</p>
            <img style={{ width: '500px', height: 'auto' }} src={[pizza]}></img> <p href="https://www.abbottsquaremarket.com/">Link</p>
            <h3>And more to come!</h3>
          </div>
          <div>
            <h3>So what do you think 🤭🫣</h3>
            <img style={{ width: '500px', height: 'auto' }} src={[card]}></img>
          </div>
        </div>
        
      )}





        
        
        
      </body>
    </div>
  );
}

export default App;
