import Api from './Api';
import Summary from './Summary';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact><Api /></Route>
          <Route path="/summary"><Summary /></Route>
          <Route path="*"><Redirect to="/" /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
