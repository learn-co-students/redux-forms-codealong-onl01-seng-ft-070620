import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {text: ''}

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ text: '' }) 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add todo: </label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <br></br><br></br>
          <input type="submit" />
        </form>
      </div>
    )
  }

}

// when addTodo() is called, an action will be dispatched
// with whatever data is stored in state at that moment
const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo)
// alternate export statement:
// export default connect()(CreateTodo)
