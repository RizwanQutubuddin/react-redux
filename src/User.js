import './App.css';
import React from 'react';

class User extends React.PureComponent {
  render(){
    console.log('component')
    return (
      <>
        <h1>user {this.props.data}</h1>
      </>
    );
  }
}

export default User;
