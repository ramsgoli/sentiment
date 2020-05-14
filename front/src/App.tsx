import React from 'react';
import './App.css';
import {AppStore} from './app_store';

interface AppProps {
  store: AppStore;
}

export const App: React.FC<AppProps> = ({ store }) => {
  return (
    <div className='App'>
      <div className='column'>
        <div
          contentEditable={true}
          spellCheck={true}
          id='content'
          className="content"
          placeholder='Enter your review here...'
        >
        </div>
        <button
          onClick={store.getSentiment}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

