import React from 'react'
import './loginstyle.css';



function login() {

    return (

 <div class="whole-page"> 

 <div class = "title-header">
    <h1> Login</h1>
    </div>

    <div class="login-form">
<form>
    <label for="UserName">UserName</label><br></br>
    <input type="text"></input><br></br>
    <label for="password">Password</label><br></br>
    <input type="password"></input><br></br>
    <button>Submit</button>

</form>
    </div>
   


    
 </div>

 

    );
}

export default login;