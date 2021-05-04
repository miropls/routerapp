import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Todolist from './components/Todolist'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link> {" "}
          <Link to="/todolist">Todolist</Link> {" "}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todolist" component={Todolist} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
