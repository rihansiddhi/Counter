import React, { Component } from "react";

class Counter extends Component {
  //handle events && updating states

  //Rendering lists
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.props.children}
        {/*Conditional Rendering
        {this.state.tags.length === 0 && "Please create a new tag!"}
    {this.renderTags()}*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

//   styles = {
//     fontSize: 10,
//     fontWeight: "bold"
//   };

//   constructor() {
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
//   }

//   doHandleIncrement = () => {
//     this.handleIncrement({ id: 1 });
//   };

//   state = {
//     count: this.props.counter.value,
//     tags: ["Shop More!"]
//   };
// handleIncrement = product => {
//     this.setState({ count: this.state.count + 1 });
// };
