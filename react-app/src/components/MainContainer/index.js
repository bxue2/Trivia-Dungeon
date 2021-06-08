import React from 'react';
import { Route, Switch } from "react-router-dom";
import Sidebar from '../Sidebar'
import SplashPage from '../SplashPage';
import QuestionPage from '../QuestionPage';
import SetsPage from '../SetsPage';
import SearchResults from '../SearchResults';

import ProtectedRoute from '../auth/ProtectedRoute'
import Questions from '../Questions'
import Sets from '../Sets'

import './MainContainer.css';

const MainContainer = () => {
    return (
        <div className='main-container'>
            <Sidebar />
            <Switch>
                <ProtectedRoute path="/questions" exact={true}>
                    <Questions />
                </ProtectedRoute>
                <Route path="/questions/:id" exact={true}>
                    <QuestionPage />
                </Route>
                <ProtectedRoute path="/sets" exact={true}>
                    <Sets />
                </ProtectedRoute>
                <Route path="/sets/:id" exact={true}>
                    <SetsPage />
                </Route>
                <Route path="/search">
                    <SearchResults />
                </Route>
                {/*
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
