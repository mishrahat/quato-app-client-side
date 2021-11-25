import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Cars from './Pages/Cars/Cars';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Help from './Pages/Help/Help';
import Order from './Pages/Order/Order';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './Pages/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/cars'>
            <Cars />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/help'>
            <Help />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <PrivateRoute path='/car/:carname/:carimg'>
            <Order />
          </PrivateRoute>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
