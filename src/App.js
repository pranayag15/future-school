import React from 'react';
import {Router, Route} from 'react-router-dom'
import history from './history';
import BasicQuestions from './Components/basic'
import ExperienceQuestions from './Components/experience'
import ShortResponseQuestion from './Components/response'
import Success from './Components/success'

function App() {
  return (
    <Router history={history}>
        <React.Fragment>
          <Route exact path="/" component={BasicQuestions} ></Route>
          <Route exact path="/experience" component={ExperienceQuestions} ></Route>
          <Route exact path="/response" component={ShortResponseQuestion} ></Route>
          <Route exact path="/success" component={Success} ></Route>
        </React.Fragment>
      </Router>
  );
}

export default App;
