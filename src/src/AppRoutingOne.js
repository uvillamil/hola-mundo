import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundpage from './pages/404/NotFoundPage';
import AboutPages from './pages/about-faqs/aboutPages';
import ProfilePage from './pages/home/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import { cleanup } from '@testing-library/react';
import StatePage from './pages/home/StatePage';


function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged) 
  }, [])
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'> || HOME |</Link>
          <Link to='/about'> | ABOUT |</Link>
          <Link to='/faqs'> | FAQS |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/any404'>| Not Existing Route ||</Link>
          <Link to='/login'> | LOGIN ||</Link>
        </aside>
        <main>
        <Switch>
            <Route exact path='/' component={ HomePage }/>
            <Route exact path='/online-state' component={ StatePage }/>
            <Route path='/login' component={ LoginPage } >
            {
                logged ? 
                () => {
                 alert('You are logged in. Redirecting to home...')
                return <Redirect to='/'/>
                }
                :
                () => {
                return (<LoginPage></LoginPage>)
                }
            }
            </Route>
            <Route path='/(about|faqs)' component={AboutPages}/>
            <Route path='/profile' component={ ProfilePage }>
              {
                logged ? <ProfilePage /> 
                :
                () => {
                 alert('You must be logged in. Redirecting to login...')
                return <Redirect to='/login'/>
                }

              }
            </Route>
            <Route path= '/tasks' component={TasksPage}/>
            <Route 
              exact 
              path= '/task/:id'
              render={
                ({match}) => (<TaskDetailPage task={taskList[match.params.id-1]} />)
              }
              >

            </Route>
            {/* 404 - Page NoFound*/}
            <Route component={ NotFoundpage }/>
      </Switch>
      </main>
      </div>
      
    </Router>
  );
}

export default AppRoutingOne;
