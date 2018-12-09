import React from 'react'

export default class Post extends React.Component {
  render() {
    const { post } = this.props
    return (
      <div>
        <div>{post.title}</div>
        <div>{post.content}</div>
      </div>
    )
  }
}