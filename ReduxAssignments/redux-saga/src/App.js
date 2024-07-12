
import React from 'react';
import './style.css';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Saga Example</h1>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
