import React, {Component} from 'react'
// components
import Helmet from 'react-helmet'
// styles
import styles from './AboutUs.scss'

export default class AboutUs extends Component {

  render() {
    return (
      <div className={styles['about-us-wrapper']}>
        <h1>About Us</h1>
        <Helmet title="About Us"/>
      </div>
    )
  }
}
