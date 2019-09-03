import React from "react";
import ProfileDescription from './../ProfileDescription/ProfileDescription';
import './styles.css'

function ProfileBadge(){
  return(
    <div className="profilebadge">
      <img src="http://lorempixel.com/100/100/"></img>
      <h2>Desperate4U1976</h2>
      <ProfileDescription/>
    </div>
  );
}

export default ProfileBadge;
