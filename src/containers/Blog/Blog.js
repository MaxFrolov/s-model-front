import React, { Component } from 'react'
import Helmet from 'react-helmet'
// styles
import styles from './Blog.scss'

export default class Blog extends Component {
  render() {
    return (
      <div className={styles['blog-wrapper']}>
        <h1>Blog</h1>
        <Helmet title="Blog"/>
      </div>
    )
  }
}
