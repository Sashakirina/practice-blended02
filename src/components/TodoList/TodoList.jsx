import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos, deleteItem }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <TodoListItem
          key={id}
          text={text}
          count={index + 1}
          deleteItem={deleteItem}
          id={id}
        />
      ))}
    </Grid>
  );
};
