import React from 'react';
import './App.css';

const taskArray = ['React', 'Angular', 'Vue', 'Redux']
const Task = () => {
  return <ul>List of technologies{taskArray.map(i => <li>{i}</li>)}</ul>;
};
function App() {
  return (
    <Task />
  );
}

export default App;
