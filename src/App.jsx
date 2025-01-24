
import '/workspaces/codespaces-react/src/App.css';
import React from 'react';
import { Button } from 'antd';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          hi there !  i have a question for you <span className="heart">🤭</span> 
        </h1>
      </header>
      <body className='body'>
        <h3>
        i was wondering if you would like to be my valentine and hang out with me 🫣
        </h3>

        <div>
          <Button type="primary" onClick={() => alert('Wrong answer 😡')}>
            yeah
          </Button>

          <Button  type="primary" >
            YES !!
          </Button>
        </div>
        
        
      </body>
    </div>
  );
}

export default App;
