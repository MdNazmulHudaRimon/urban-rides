import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import BookDetails from './Components/BookDetails/BookDetails';
import Navbar from './Components/Navbar/Navbar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path ='/'>
            <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/book/:id'>
          <BookDetails></BookDetails>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>

    </UserContext.Provider>
  );
}

export default App;
