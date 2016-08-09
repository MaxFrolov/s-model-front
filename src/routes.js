import React from 'react'
import {IndexRoute, Route} from 'react-router'
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth'
import {
    App,
    Chat,
    Home,
    OurWorks,
    AboutUs,
    Login,
    LoginSuccess,
    Blog,
    NotFound,
    Work
  } from 'containers'

export default (store, client) => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState()
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/')
      }
      cb()
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth)
    } else {
      checkAuth()
    }
  }

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App} client={client} scrollStrategy="none">
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes requiring login */ }
      <Route onEnter={requireLogin}>
        <Route path="chat" component={Chat}/>
        <Route path="loginSuccess" component={LoginSuccess}/>
      </Route>

      { /* Routes */ }
      <Route path="about-us" component={AboutUs}/>
      <Route path="login" component={Login}/>
      <Route path="blog" component={Blog}/>
      <Route path="/our-works" component={OurWorks} noScroll />
      <Route path="our-works/:id" component={Work} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
}
