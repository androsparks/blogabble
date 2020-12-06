import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Posts from './pages/Posts/Posts'
import NavigationBar from './components/NavigationBar'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profiles'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/profile/:id" />
         <Route exact path="/SignUp" component={SignUp}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/post" component={Posts} />
         <Route exact path="/profile" component={Profile}/>
         <Route exact path ="/posts"/>
         {/* //eveyrone can get posts */}
         {/* post page will be the same but some PRivate route will have edit buttons, same with profiles  */}
         {/* cross reference the owner of the blog post with the current user if the same render update button */}
         {/* <PrivateRoute exact path="/myprofile" />  */}
         {/* get all user posts with update button */}
         {/* <PrivateRoute exact path="/myposts" />  */}
          {/* update user id */}
         <PrivateRoute exact path="/update/:id"/>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
