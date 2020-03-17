import React from 'react';

const List = (props) => (
  <div>
    <h1>{props.name}</h1>
    <ul>
      { 
        props.todos.map( todo => <li key={todo.id}>{todo.title}</li> )
      }
    </ul>
  </div>
)

export default List;