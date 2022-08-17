import './App.css';
import React, { createRef } from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.inputRef=createRef();
  }

  componentDidMount(){
    // console.log(this.inputRef.current.value=109);
  }

  getVal(){
    alert(this.inputRef.current.value);
  }

  render(){
    return (
      <div className="App">
        <h1>Use ref </h1>
        <input type="text" ref={this.inputRef}/>
        <button onClick={()=>this.getVal()}>get Value</button>
      </div>
    );
  }
}

export default App;
