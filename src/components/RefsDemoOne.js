import React, { createRef } from "react";

class RefsDemoOne extends React.Component {
  constructor(props) {
    super(props);
    this.myField = React.createRef();
  }

  componentDidMount() {
    console.log(this.myField);
    this.myField.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myField} />
      </div>
    );
  }
}

export default RefsDemoOne;

// first we create the input field
// then use React.createRef() in the constructor
// Attach it to the jsx inout field by using the ref attribute

// seconsly we use componentDidMount() and log this.MyField to the console
// Open Dev Tools and see the 'object' then open its methods
// We can use these to our field so for focus...
// we use this.myField.current.focus
