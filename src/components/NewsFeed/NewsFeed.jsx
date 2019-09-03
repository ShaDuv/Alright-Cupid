import React from "react";
import NewsFeedItem from "./../NewsFeedItem/NewsFeedItem";
import './styles.css'

function NewsFeed (){
  return(
    <div className="newsfeed">
      <div className="feed-search">
        <form action="/action_page.php">
          <input type="text" name="search-news"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
      <br/>
      <NewsFeedItem/>
      <NewsFeedItem/>
      <NewsFeedItem/>
      <NewsFeedItem/>
      <NewsFeedItem/>
    </div>
  );
}

export default NewsFeed;
