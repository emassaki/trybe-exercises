// import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDo = ['Laundry', 'Cook dinner', 'Study React', 'Study JS', 'Do the exercises']

function App() {
  return (<ul>{ toDo.map(item => task(item)) }</ul>)
}

export default App;
