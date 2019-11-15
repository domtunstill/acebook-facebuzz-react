import React from 'react';
import Post from './Post';
import PostForm from './PostForm'

class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      feed: []
    }
    this.getFeed = this.getFeed.bind(this)
  }

  getFeed() {
    fetch('/api/posts',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET',
      }
    )
    .then(response => response.json() )
    .then(data => this.setState({ feed: data }))
  }

  componentDidMount() {
    this.getFeed()
  }

  render() {
    return (
      <div className="Posts">
        <PostForm getFeed={this.getFeed} />
        {
          this.state.feed.map((post) => (
            <Post
              id={post.id}
              body={post.message}
              timestamp={post.created_at}
              likes="0"
            />
          ))
        }
      </div>
    )
  }
}

export default Posts;
