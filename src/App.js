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
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
