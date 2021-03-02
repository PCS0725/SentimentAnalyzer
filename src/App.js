import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import { NavbarComponent } from './components/Navbar';
import { HomePage } from './pages/Homepage';
import { Process } from './pages/Process';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/*<Route path="/login">*/}
          {/*  <Login />*/}
          {/*</Route>*/}
          {/*<Route path="/signup">*/}
          {/*  <Signup />*/}
          {/*</Route>*/}
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/process" exact>
            <Process />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
