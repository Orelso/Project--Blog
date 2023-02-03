import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import Account from "./Account";
import Info from "./Info";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
