
import './App.css';
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { createStore, combineReducers, applyMiddleware,compose  } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import animals from './app/data/redux/animal/Animal.reducers'
import ListAnimal from "./app/presentation/view/animal/ListAnimal/ListAnimal";
import EditAnimal from './app/presentation/view/animal/EditAnimal/EditAnimal';
import CreateAnimal from './app/presentation/view/animal/CreateAnimal/CreateAnimal';

const reducers = combineReducers({ animals })
const store = createStore(reducers, compose(applyMiddleware(thunk)))

function App() {
  return (
    <div className="section-padding-50">
      <div className="container">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/edit-animal" component={EditAnimal} />
              <Route exact path="/create-animal" component={CreateAnimal} />
              <Route exact path="/" component={ListAnimal} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </Provider>
      </div>
    </div>
  );
}

export default App;
