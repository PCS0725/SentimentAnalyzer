import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      {/*<Switch>*/}
      {/*  <Route path="/login">*/}
      {/*    <Login />*/}
      {/*  </Route>*/}
      {/*  <Route path="/signup">*/}
      {/*    <Signup />*/}
      {/*  </Route>*/}
      {/*</Switch>*/}
    </div>
  );
}

export default App;
