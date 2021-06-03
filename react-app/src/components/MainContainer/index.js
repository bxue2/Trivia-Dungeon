import React from 'react';
import { Route, Switch } from "react-router-dom";
import Sidebar from '../Sidebar'
import SplashPage from '../SplashPage';

import './MainContainer.css';

const MainContainer = () => {
    return (
        <div className='main-container'>
            <Sidebar />
            <Switch>
                {/* <Route path="/login" exact={true}>
                <LoginForm/>
                </Route>
                <Route path="/sign-up" exact={true}>
                <SignUpForm />
                </Route>
                <ProtectedRoute path="/users" exact={true}>
                <UsersList/>
                </ProtectedRoute>
                <ProtectedRoute path="/users/:userId" exact={true} >
                <User />
                </ProtectedRoute> */}
                <Route path="/" exact={true} >
                    <SplashPage />
                </Route>
                <Route>
                    <h1>404 Page not Found</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContainer;
