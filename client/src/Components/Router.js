import React from 'react'
import { Switch, Route, withRouter } from 'react-router'

//for teach
import LogHome from '../Pages/teach/LogHome';
import Post from '../Pages/teach/Post'
import EditPost from '../Pages/teach/EditPost'
import ViewMore from '../Pages/teach/ViewMore'
///
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Landing from '../Pages/Landing'
import Elementary from '../Pages/Elementary'
import HighSchool from '../Pages/HighSchool'
import SecondGrade from '../Pages/SecondGrade'
import FirstGrade from '../Pages/FirstGrade'
import ThirdGrade from '../Pages/ThirdGrade'
import Kindergarten from '../Pages/Kindergarten'
import Moran from '../Pages/Moran'
import MoranParentLog from '../Pages/MoranParentLog'


const Router = (props) => {
    return (
        <main>
            <Switch>
                <Route
                exact 
                path = "/login"
                component = {props => 
                    <Login {...props} />
                }
                />
                <Route 
                exact 
                path = "/home"
                component = {props => 
                    <Home {...props} />
                }
                />
                  <Route 
                exact 
                path = "/elementary"
                component = {props => 
                    <Elementary {...props} />
                }
                />
                  <Route 
                exact 
                path = "/kindergarten"
                component = {props => 
                    <Kindergarten {...props} />
                }
                />
                  <Route 
                exact 
                path = "/first-grade"
                component = {props => 
                    <FirstGrade {...props} />
                }
                />
                  <Route 
                exact 
                path = "/second-grade"
                component = {props => 
                    <SecondGrade {...props} />
                }
                />
                  <Route 
                exact 
                path = "/third-grade"
                component = {props => 
                    <ThirdGrade {...props} />
                }
                />
                  <Route 
                exact 
                path = "/highschool"
                component = {props => 
                    <HighSchool {...props} />
                }
                />
                <Route
                  exact
                  path="/"
                  component = { props => 
                <Login {...props} />
                }
                />
                <Route
                  exact
                  path="/landing"
                  component = { props => 
                <Landing {...props} />
                }
                />
                    <Route
                  exact
                  path="/moran"
                  component = { props => 
                <Moran {...props} />
                }
                />
                  <Route
                  exact
                  path="/moranparentlog"
                  component = { props => 
                <MoranParentLog {...props} />
                }
                />
                
               <Route exact path="/loghome" component={LogHome} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/editpost/:postId" component={EditPost} />
            <Route exact path="/viewmore/:postId" component={ViewMore} />
                
            </Switch>

        </main>
    )
            }

export default withRouter(Router)


