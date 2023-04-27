import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const todos = useSelector(store => store.todos);
  const dispatch = useDispatch();

  const createTodo = (newTodo) => {
    dispatch({ type: 'ADD_TODO', todo: newTodo })
  }

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', id})
  }

  const sortedTodos = todos.sort((a,b) => a.priority - b.priority)

  const todoList = sortedTodos.map(t => (
    <Todo 
      key={t.id}
      text={t.text}
      priority={t.priority}
      deleteTodo={() => deleteTodo(t.id)}
      />
  ))

  console.log(todoList[0]);

  return (
    <div className="ui centered grid">
        <div className='ui segments'>
          {todoList}
          <TodoForm createTodo={createTodo} />
        </div>
    </div>
  );
}

export default App;
