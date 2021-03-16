
import './App.css';
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ListAnimal from "./app/presentation/view/animal/ListAnimal/ListAnimal";
import EditAnimal from './app/presentation/view/animal/EditAnimal/EditAnimal';
import CreateAnimal from './app/presentation/view/animal/CreateAnimal/CreateAnimal';
import logo from './assets/logo.png'

function App() {
  return (
    <div className="main">
      <img style={{marginTop:'50px'}} src={logo} alt="logo"></img>
      <div className="section-padding-50">
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/edit-animal" component={EditAnimal} />
              <Route exact path="/create-animal" component={CreateAnimal} />
              <Route exact path="/" component={ListAnimal} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>

  );
}

export default App;
