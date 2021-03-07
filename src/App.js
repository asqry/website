import './App.css';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, ViewPage } from './pages';

function App() {
  document.title = 'asqry';
  return (
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      <Route
        path="/twitter"
        component={() => {
          window.location.href = 'https://twitter.com/asqrybot';
          return null;
        }}
      />
      <Route
        path="/github"
        component={() => {
          window.location.href = 'https://github.com/seekeroftacos';
          return null;
        }}
      />
      <Route path="/view" exact={true} component={ViewPage} />
    </Switch>
  );
}

export default App;
