import React from 'react';

function Members (props){
    return(
        <div className="">
            <h1>Members Component</h1>
            <button onClick={()=>{props.userData(Members)}}>data call function</button>
        </div>
    )
}

export default Members;