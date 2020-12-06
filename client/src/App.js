import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Post from './pages/Posts/SinglePost/Post'
import NavigationBar from './components/NavigationBar'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profiles'
import MyProfile from './pages/Profile/MyProfile'
import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
      <BrowserRouter>
      <NavigationBar />
       <Switch>
         {/* <Route exact path="/"  /> */}
         <Route exact path="/profile/:id" />
         <Route exact path="/SignUp" component={SignUp}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/post/:id" component={Post} />
         <Route exact path="/profile" component={Profile}/>
         {/* <Route exact path ="/posts"/> */}
         {/* //eveyrone can get posts */}
         {/* post page will be the same but some PRivate route will have edit buttons, same with profiles  */}
         {/* cross reference the owner of the blog post with the current user if the same render update button */}
         {/* <PrivateRoute exact path="/myprofile" />  */}
         {/* get all user posts with update button */}
         {/* <PrivateRoute exact path="/myposts" />  */}
          {/* update user id */}
         <PrivateRoute exact path="/myprofile" component={MyProfile}/>
         <PrivateRoute exact path ="/myposts" component={Home}/>
         <PrivateRoute exact path="/update/:id"/>
       </Switch>
      </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
