import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './index.css'
import Loading from './component/Loading'

const Home = lazy(() => import('./containers/Home'))
const Editor = lazy(() => import('./containers/Editor'))
const Effect = lazy(() => import('./containers/Effect'))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Loading />}>
        <Route exact path='/' component={Home} />
        <Route exact path='/editor' component={Editor} />
        <Route exact path='/effect' component={Effect} />
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
