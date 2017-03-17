import { connect } from 'react-redux'
import { matchPath } from 'react-router-dom'
import TweetList from '../components/TweetList'
import { fetchTweets } from '../actions/tweet'

const mapStateToProps = (state) => {
// tweets: state.tweets, // + state.anotherkey ===> can do something here before presentation to view
  const match = matchPath(
    state.router.location.pathname,
    { path: '/:ownerUsername' },
  )
  return {
    tweets: state.tweets,
    ownerUsername: match ? match.params.ownerUsername : null,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchTweets: username => dispatch(fetchTweets(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TweetList)
