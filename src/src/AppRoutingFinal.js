
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import NotFoundPage from './pages/404/NotFoundPage';
import DashBoardPage from './pages/dashboard/DashBoard';

function AppRoutingFinal() {
  // TODO: change to value from sessionStorage (or something dianmic)
  let loggedIn = true;

  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {
           loggedIn ? 
           (<Redirect from='/' to='/dashboard' />)
           :
           (<Redirect from='/' to='/login' /> )
          }
        </Route>
        {/* Login Route */}
        <Route exact path='/login' component={LoginPage} />  
        {/* DashBoard Route */}
        <Route exact path='/dashboard'>
          {
           loggedIn ? 
           (<DashBoardPage />)
           :
           (<Redirect from='/' to='/login' /> )
          }
        </Route>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>

  );
}

export default AppRoutingFinal;
