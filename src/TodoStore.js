import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List.jsx';
import useFetch from './useFetch.js';
import Header from './Header.jsx';
import Form from './Form.jsx';

export const TodoContext = React.createContext();

const TodoStore = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setTodos, 'http://localhost:8080/todos');

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { 'title': newTodo, 'id': todos.length + 1, 'status': 'todo' }]);
  }

  const changeTodoStatus = (id) => {
    // debugger;
    const updateTodos = todos.map(todo => {
      if (todo.id === +id) {
        if (todo.status == "done") todo.status = "todo";
        else todo.status = 'done';
      }
      return todo;
    })
    setTodos(updateTodos);
    console.log(updateTodos);
  }

  useEffect(() => {
    console.log("새로운 내용이 렌더링 되었습니다...", todos);
  }, [todos])


  return (
    <TodoContext.Provider value={{ todos, addTodo, changeInputData, loading, changeTodoStatus }} >
      <Header />
      <Form />
      <List />
    </TodoContext.Provider>
  )

}
export default TodoStore;
