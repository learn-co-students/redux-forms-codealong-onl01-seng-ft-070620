import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.addTodo(this.state);
    this.props.dispatch({ type: "ADD_TODO", payload: this.state });
  };

  render() {
    return (
      <div>
        Create Todo Component
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: "formData" }),
//   };
// };

// export default connect(null, mapDispatchToProps)(CreateTodo);

//remember, if connect doesn't have any arguments, it returns dispatch as a prop to the component we're wrapping in connect.
export default connect()(CreateTodo);
