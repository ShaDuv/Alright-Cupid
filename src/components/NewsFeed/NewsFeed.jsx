import React from "react";
import NewsFeedItem from "./../NewsFeedItem/NewsFeedItem";
import './styles.css'

function NewsFeed (){
  return(
    <div>
      <form action="/action_page.php">
        <input type="text" name="search-news"/>
        <input type="submit" value="Submit"/>
        </form>
      <NewsFeedItem/>
      <NewsFeedItem/>
      <NewsFeedItem/>
      <NewsFeedItem/>
      <NewsFeedItem/>
    </div>
  );
}

export default NewsFeed;
