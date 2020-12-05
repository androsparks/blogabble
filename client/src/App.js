import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Posts from './pages/Posts/Posts'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
         <Route exact path="/" />
         <Route exact path="/profile/:id" />
         <Route exact path="/post" component={Posts} />
         <Route exact path ="/posts"/>
         {/* //eveyrone can get posts */}
         {/* post page will be the same but some PRivate route will have edit buttons, same with profiles  */}
         {/* cross reference the owner of the blog post with the current user if the same render update button */}
         <PrivateRoute exact path="/myprofile" /> 
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
