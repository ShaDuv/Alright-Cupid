import React from "react";
import PropTypes from "prop-types";
import Header from './components/Header/Header';
import ProfileBadge from './components/ProfileBadge/ProfileBadge';
import ProfileDescription from './components/ProfileDescription/ProfileDescription';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Recommended from './components/Recommended/Recommended';



function App (){
  return (
    <div>
      <Header/>
      <ProfileBadge/>
      <ProfileDescription/>
      <NewsFeed/>
      <Recommended/>
    </div>
  );
}

export default App;
