import React from "react";
import PropTypes from "prop-types";
import Header from './components/Header/Header';
import ProfileBadge from './components/ProfileBadge/ProfileBadge';
// import ProfileDescription from './components/ProfileDescription/ProfileDescription';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Recommended from './components/Recommended/Recommended';



function App (){
  return (
    <div className="container">
      <Header/>
      <div className="row">
        <div className="col-4">
          <ProfileBadge/>
        </div>
        <div className="col-4">
          <NewsFeed/>
        </div>
        <div className="col-4">
          <Recommended/>
        </div>
      </div>

    </div>
  );
}

export default App;
