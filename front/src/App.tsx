import React from 'react';
import './App.css';

export const App = () => {
  return (
    <div className='App'>
      <div
        contentEditable={true}
        spellCheck={true}
        className="content"
        placeholder='Enter your review here...'
      >
      </div>
    </div>
  );
}

