// it has life cycle, change it to be class

import React, { Component, PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends Component {
  componentDidMount() {
    const mockTweets = [{ id: 1, name: 'John', username: 'jd', tweetText: 'Hello', timestamp: 1234 },
    { id: 12, name: 'John2', username: 'jd2', tweetText: 'Hello2', timestamp: 1235 },
    ]
    this.props.fetchTweetsSuccess(mockTweets)
  }
  render() {
    return (
      <div className="tweet-list">
        { this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />) }
      </div>
    )
  }

}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object),
  fetchTweetsSuccess: PropTypes.func.isRequired,
}

TweetList.defaultProps = {
  tweets: [],
}

export default TweetList
