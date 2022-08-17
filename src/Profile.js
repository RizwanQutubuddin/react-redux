import {useState} from 'react';
function Profile(){
    // const [loggedIn,setLoggedIn]=useState(3);
    let loggedIn=2;
    return(
        <div>
            {loggedIn==1?<h1>1 Component</h1>:loggedIn==2?<h1>2 Component</h1>:<h1>3 Component</h1>}
        </div>
    )
}
export default Profile;