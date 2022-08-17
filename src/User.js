import './App.css';
import React from 'react';

const User=(props)=>{
  const {data}=props;
  return (
    <>
      <h1>user component</h1>
      <h3>{data.name}</h3>
      <h4>{data.age}</h4>
    </>
  );
}

export default User;
