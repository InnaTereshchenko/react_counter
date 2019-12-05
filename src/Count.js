import React from 'react';

class Count extends React.Component {
  state = { count: 0 };

  buttonClick = () => {
    return this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.buttonClick}>Click me</button>
      </div>
    );
  }
}

export default Count;
