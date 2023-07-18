import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '▶',
    };
  }
  changeContent = () => {
    this.setState({
      text: '▼',
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.changeContent}>카테고리</button>
      </div>
    );
  }
}

/*
import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '변경 전이요',
    };
  }
  changeText = () => {
    this.setState({
      text: '변경 성공!',
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.changeText}>카테고리</button>
      </div>
    );
  }
}
*/
