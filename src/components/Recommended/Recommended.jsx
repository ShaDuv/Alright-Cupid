import React from "react";
import ProfileBadge from "./../ProfileBadge/ProfileBadge";
import './styles.css'

function Recommended(){
  return(
    <div>
      <h2>Who's Hot Now?</h2>
      <ProfileBadge/>
      <ProfileBadge/>
      <ProfileBadge/>
    </div>

  );
}
export default Recommended;
