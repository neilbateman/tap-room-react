import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Cards from './components/Cards'
import Main from './components/Main'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'
import Buch1 from './components/articles/Buch1'
import Buch2 from './components/articles/Buch2'
import Buch3 from './components/articles/Buch3'
import Buch4 from './components/articles/Buch4'
import OrderForm from './components/OrderForm';
import CardItem from './components/cards/CardItem'



export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/dashboard' component={ Dashboard } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/wizard' component={ Wizard } />
          <Route exact path='/cards' component={ Cards } />
          <Route exact path='/article1' component={ Buch1 } />
          <Route exact path='/article2' component={ Buch2 } />
          <Route exact path='/article3' component={ Buch3 } />
          <Route exact path='/article4' component={ Buch4 } />
          <Route exact path='/OrderForm' component={ OrderForm } />
          <Route exact path='/CardItem' component={ CardItem } />

        </Switch>
      </ScrollToTop>
    </HashRouter>
  )
