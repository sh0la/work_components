import React, { Component } from 'react';
import './index.css';




class CircleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {currentNum: this.generateRandom()}
  }
  
  generateRandom() {
    return Math.floor(Math.random() * 100) + 1;
  }

  updateNum() {
    this.setState({currentNum: this.generateRandom()})
  }

  render() {
    return (
      <div id='container'>
        <div className='circle' onClick={this.generateRandom}>
          <h3 className='random'>
            {this.state.currentNum}
          </h3>
        </div>
      </div>
      
      
    )
  }
}

export default CircleComponent;
