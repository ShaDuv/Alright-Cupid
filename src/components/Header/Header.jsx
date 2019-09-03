import React from "react";
import './styles.css'

function Header(){
  return(
    <div>
      <h1>AlrightCupid</h1>
      <nav>
      <a href="#">Home</a>
      <a href="#">Profile</a>
      <a href="#">Feed</a>
      <form action="/action_page.php">
        <input type="text" name="lname"/>
        <input type="submit" value="Submit"/>
      </form>

       </nav>
    </div>
  );
}

export default Header;
