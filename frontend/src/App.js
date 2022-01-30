import React from 'react'
import { BoundryContext } from './context/context'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorBoundry from './components/error-boundry'
import Header from './components/header'
import Login from './auth/login'
import Signup from './auth/signup'
import Logout from './auth/logout'
import Home from './pages/hhsearch/hhs'
import NewsList from './pages/news/news-list'
import FilteredNewsList from './pages/sidebar/filtered-news-list'
import NewsItem from './pages/news/news-item'
import CreateNews from './pages/news/create-news'
import UpdateNews from './pages/news/update-news'
import DeleteNews from './pages/news/delete-news'
import ChangeImage from './pages/news/change-image'
import Info from './pages/info'
import Analytics from './pages/analytics/analytics'
import Profile from './pages/profile/user-profile'
import Footer from './components/footer'

function App() {
  return (
    <div className="container">
      <Router>
        <BoundryContext>
          <ErrorBoundry>
            <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login/' component={Login} />
                <Route path='/signup/' component={Signup} />
                <Route path='/logout/' component={Logout} />
                <Route path='/about/' component={Info} />
                <Route path='/news/:slug' component={NewsItem} />
                <Route path='/news/' component={NewsList} />
                <Route path='/news-category/:id' component={FilteredNewsList} />
                <Route path='/create/' component={CreateNews} />
                <Route path='/update/:slug' component={UpdateNews} />
                <Route path='/editimage/:slug' component={ChangeImage} />
                <Route path='/delete/:slug' component={DeleteNews} />
                <Route path='/profile/' component={Profile} />
                <Route path='/analytics/' component={Analytics} />
                </Switch>
              <Footer />
            </ErrorBoundry>
        </BoundryContext>
      </Router>
    </div>
  );
}

export default App;
