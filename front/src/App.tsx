import React from 'react';
import { observer } from 'mobx-react';
import './App.css';
import {AppStore} from './app_store';

interface AppProps {
  store: AppStore;
}

export const App: React.FC<AppProps> = observer(({ store }) => {
  const classes = ['App']
  if (store.sentiment) {
    classes.push(store.sentiment);
  }

  return (
    <div className={classes.join(' ')}>
      <div className='column'>
        <div
          onInput={e => store.handleInput(e.currentTarget.textContent)}
          contentEditable={true}
          spellCheck={true}
          id='content'
          className="content"
          placeholder='What are your thoughts...'
        >
        </div>
        <button
          onClick={store.handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
})

