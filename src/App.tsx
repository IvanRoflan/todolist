import { Container } from '@material-ui/core';
import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <Container maxWidth="xs">
      <TodoInput />
      <TodoList />
    </Container>
  );
}

export default App;
