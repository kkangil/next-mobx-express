import React from 'react'
import Link from 'next/link'

export default class MainComponent extends React.Component {
  render() {
    const {
      text,
      posts
    } = this.props
    const postRow = posts.map((post, index) => {
      return (
        <Link
          key={index}
          prefetch
          href={{ pathname: '/posts', query: { id: post.id } }}
        >
          <a>{post.title}</a>
        </Link>
      )
    })

    return (
      <div>
        <div>{text}</div>
        {postRow}
      </div>
    )
  }
}