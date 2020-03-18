import React, { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';
import Footer from './components/todos/Footer';
import Clock from './components/todos/Clock';

class App extends Component {
  state = { todos: [
    { id: 1, title: 'Learn Rails', complete: true },
    { id: 2, title: 'Learn React', complete: false },
    { id: 3, title: 'Learn Hooks', complete: false },
    // { id: 14, title: 'buy milk', complete: false }
    ],
    filter: 'All',
    showClock: false
  }

  toggleShowClock = () => {
    // change opp value to what show clock is
    this.setState({ showClock: !this.state.showClock })
  }

  setFilter = (incomingFilter) => {
    this.setState({ filter: incomingFilter })
  }

  visibleTodos = () => {
    const { todos, filter } = this.state
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete ) 
      case 'Complete':
        return todos.filter( t => t.complete )
      default:
        return todos;
    }
  }

  // renderTodos = () => {
  //   const { todos } = this.state 
  //   return todos.map( todo => {
  //     return (
  //       <li key={todo.id}>{todo.title}</li>
  //     )
  //   })
  // }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  // { title: 'buy milk'}
  addTodo = (todo) => {
    // grab the array from state
    const { todos } = this.state
    // create the new todo
    const newTodo = { id: this.getUniqId(), title: todo.title, complete: false }
    // const newTodo = { id: 14, title: 'buy milk', complete: false }

    // const newTodo = {...todo}
    // add the new todo into the array
    this.setState({ todos: [newTodo, ...todos]})
  }

  render() {
    const { todos, filter, showClock } = this.state
    return(
      <div>
        {/* { this.renderTodos() } */}
        <TodoForm addTodo={this.addTodo} />

        { showClock && <Clock /> }
        <button onClick={this.toggleShowClock}>Toggle Clock</button>

        <List name='Coding todo list' todos={this.visibleTodos()} />
        <Footer filter={filter} setFilter={this.setFilter} />
        {/* <List name='Coding todo list' todos /> */}
      </div>
    )
  }
}

export default App;
