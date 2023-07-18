import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Documentreviewviewer from './views/documentreviewviewer'
import Documentreviewupload from './views/documentreviewupload'
import Webreview from './views/webreview'
import MainPage from './views/main-page'
import Documentreviewuploadsvg from './views/documentreviewuploadsvg'
import Documentreviewviewersvg from './views/documentreviewviewersvg'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={Documentreviewviewer}
          exact
          path="/documentreviewviewer"
        />
        <Route
          component={Documentreviewupload}
          exact
          path="/documentreviewupload"
        />
        <Route component={Webreview} exact path="/webreview" />
        <Route component={MainPage} exact path="/" />
        <Route
          component={Documentreviewuploadsvg}
          exact
          path="/documentreviewuploadsvg"
        />
        <Route
          component={Documentreviewviewersvg}
          exact
          path="/documentreviewviewersvg"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
