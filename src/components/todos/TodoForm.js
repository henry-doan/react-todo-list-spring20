import React, { Component } from 'react';

class TodoForm extends Component {
  state = { title: '' }

  // updates the state to what the user type for each input
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    // this.setState({ title: value })
    // this.setState({ title: 'buy milk' })
  }

  handleSubmit = (e) => {
    // stop the page from reloading and losing data, and no in the url bar
    e.preventDefault()
    // console.log(this.state.title)
    // add the todo in our array
    // grab the todo from the state
    // this.state
    // add the new todo into the array
    // state = { title: 'buy milk'}
    this.props.addTodo(this.state)
    // this.props.addTodo({...this.state})

    // clearing out the form after
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          placeholder='add todo'

          name='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default TodoForm;