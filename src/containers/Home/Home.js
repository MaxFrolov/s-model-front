import React, { Component, PropTypes } from 'react'
// components
import Helmet from 'react-helmet'
// styles
import styles from './Home.scss'

export default class Home extends Component {
  static propTypes = {
    paneLoaded: PropTypes.bool
  };

  render() {
    return (
      <div className={styles['home-wrapper']}>
        <Helmet title="Home"/>
        <div className={styles['home-main-section']}>
          <h1 className="text-center">Search Models</h1>
        </div>
      </div>
    )
  }
}
