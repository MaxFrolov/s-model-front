import React, { Component } from 'react'
// components
import { Link } from 'react-router'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
// styles
import styles from './MainLayoutFooter.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default class MainLayoutFooter extends Component {
  render () {
    return (
      <div className={styles['footer-wrapper']}>
        <div className={styles['footer-content']}>
          <div className="container">
            <div className="row">
              <div className={cx('footer-col', 'col-md-3 col-sm-4', 'links-col')}>
                <div className={styles['footer-col-inner']}>
                  <h3 className={styles['sub-title']}>Quick Links</h3>
                  <Nav className="list-unstyled">
                    <IndexLinkContainer to="/">
                      <NavItem eventKey={1}>Main</NavItem>
                    </IndexLinkContainer>
                    <LinkContainer to="/our-works">
                      <NavItem eventKey={2}>Our Works</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/blog">
                      <NavItem eventKey={3}>Blog</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/about-us">
                      <NavItem eventKey={4}>About Us</NavItem>
                    </LinkContainer>
                  </Nav>
                </div>
              </div>
              <div className={cx('footer-col', 'col-md-6 col-sm-8', 'blog-col')}>
                <div className={styles['footer-col-inner']}>
                  <h3 className={styles['sub-title']}>Latest From Our Blog</h3>
                  <div className={styles['item']}>
                    <div className={styles['figure']}>
                      <img className="img-responsive" src="" />
                    </div>
                    <div className={styles['content']}>
                      <h4 className={styles['post-title']}>
                        <Link to="/blog">DevStudio helps XYZ launch</Link>
                      </h4>
                      <p className={styles['intro']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales dolor
                        ut ligula faucibus...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('footer-col', 'col-md-3 col-sm-12', 'contact-col')}>
                <div className="footer-col-inner">
                  <h3 className={styles['sub-title']}>Get In Touch</h3>
                  <p className="intro">Proin sodales dolor ut ligula faucibus...</p>
                  <div className="row">
                    <p className={cx('adr', 'clearfix col-md-12 col-sm-4')}>
                      <i className="fa fa-map-marker" />
                      <span className="adr-group">
                        <span>56 College Green Road</span>
                        <br />
                        <span>Bristol</span>
                        <br />
                        <span>Ukraine</span>
                      </span>
                    </p>
                    <p className="tel col-md-12 col-sm-4">
                      <i className="fa fa-envelope-o" />
                      <a href="tel:+08001234567">08001234567</a>
                    </p>
                    <p className="email col-md-12 col-sm-4">
                      <i className="fa fa-comments-o" />
                      <a href="#">hello@yourdevstudio.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['bottom-bar']}>
          <div className="container center">
            <ul className={cx('social-icons', 'list-inline')}>
              <li>
                <a href="#"><i className="fa fa-twitter"/></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-facebook"/></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-instagram"/></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-linkedin"/></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-google-plus"/></a>
              </li>
            </ul>
            <small className={cx('copyright', 'text-center')}>
              Copyright @ 2016 Brocoders Team
            </small>
          </div>
        </div>
      </div>
    )
  }
}
