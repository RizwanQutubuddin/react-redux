import React from "react";

class Student extends React.Component{
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render(){
        return(
            <div style={{backgroundColor:'aqua'}}>
                <h1>Student component</h1>
            </div>
        )
    }

}
export default Student;