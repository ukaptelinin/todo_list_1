
import './App.css';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';

function App() {

  return (
    <>
      <h1>Список дел</h1>
        <div className='app-wrapper'>
          <TodoInput/>
          <TodoList/>
      </div>
    </>
  )
}

export default App
