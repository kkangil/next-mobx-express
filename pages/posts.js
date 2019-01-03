import React from 'react'
import { inject, observer } from 'mobx-react'
import withData from '@/components/hoc/with-data'

import PostActions from '@/actions/posts'

import Head from 'components/head'
import Footer from 'components/footer'
import PostComponent from '@/components/posts'

@withData
@inject('store')
@observer
export default class Post extends React.Component {
  static getInitialProps(props) {
    let { query } = props
    return { query }
  }

  state = {
    post: null
  }

  async componentWillMount() {
    if (this.props.isServer) {
      this.setState({
        post: this.props.query.post
      })
    } else {
      try {
        const post = await PostActions.getPostById(this.props.query.id)

        this.setState({
          post
        })

      } catch (err) {
        alert(err.errorMessage)
      }
    }
  }

  render() {
    const { post } = this.state
    return [
      <Head key="head" />,
      post && <PostComponent key="body" post={post} />,
      <Footer key="footer" />
    ]
  }
}