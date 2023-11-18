import Button from './Button'
import Display from './Display'
import Card from './Card';
import React, { useState } from "react";
import '../../src/styles/app.css';
import CardList from './CardList';

class App extends React.Component {
  // constrcutor
  // this

  render() {
    return (
      <div>
       <div className='header'>{this.props.title}</div>
       <CardList />
       </div>
    );
  }
}
export default App;