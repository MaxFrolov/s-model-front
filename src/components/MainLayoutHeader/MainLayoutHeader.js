import React, { Component } from 'react'
// components
import { IndexLink } from 'react-router'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

export default class MainLayoutHeader extends Component {
  render () {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">Search Models</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse eventKey={0}>
          <Nav pullRight>
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
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
