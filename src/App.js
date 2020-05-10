import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';


function App() {
  return (
    <div className="App">
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Please type a number',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            validator: (value) => {
              if (isNaN(value)) {
                return 'value should be a number';
              }
              return true;
            },
            trigger: '1',
          },
        ]}
      />
    </div>
  );
}

export default App;
