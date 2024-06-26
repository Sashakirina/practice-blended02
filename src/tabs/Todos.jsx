import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todo')) || [];
  });

  function addTodo(text) {
    const todo = {
      text,
      id: nanoid(),
    };
    setTodos(prevTodo => {
      return [...prevTodo, todo];
    });
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  const deleteItem = id => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.id !== id);
    });
  };

  console.log(todos);
  return (
    <>
      <Form onSubmit={addTodo} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
      <TodoList todos={todos} deleteItem={deleteItem} />
    </>
  );
};
