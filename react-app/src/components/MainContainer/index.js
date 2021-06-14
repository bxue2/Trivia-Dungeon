import React from 'react';
import { Route, Switch } from "react-router-dom";
import Sidebar from '../Sidebar'
import RandomTriviaPage from '../RandomTriviaPage';
import QuestionPage from '../QuestionPage';
import SetsPage from '../SetsPage';
import SearchResults from '../SearchResults';
import SplashPage from '../SplashPage';
import Room from '../Room';

import ProtectedRoute from '../auth/ProtectedRoute'
import Questions from '../Questions'
import Sets from '../Sets'

import './MainContainer.css';

const MainContainer = () => {
    return (
        <div className='main-container'>

            <Switch>
                <ProtectedRoute path="/questions" exact={true}>
                    <Sidebar />
                    <Questions />
                </ProtectedRoute>
                <Route path="/questions/:id" exact={true}>
                    <Sidebar />
                    <QuestionPage />
                </Route>
                <ProtectedRoute path="/sets" exact={true}>
                    <Sidebar />
                    <Sets />
                </ProtectedRoute>
                <Route path="/sets/:id" exact={true}>
                    <Sidebar />
                    <SetsPage />
                </Route>
                <Route path="/search">
                    <Sidebar />
                    <SearchResults />
                </Route>
                {/*
                <ProtectedRoute path="/users" exact={true}>
                <UsersList/>
                </ProtectedRoute>
                <ProtectedRoute path="/users/:userId" exact={true} >
                <User />
                </ProtectedRoute> */}
                <Route path="/random" exact={true} >
                    <Sidebar />
                    <RandomTriviaPage />
                </Route>
                <Route path="/" exact={true} >
                    <SplashPage />
                </Route>
                <Route path="/room/:id">
                    <Sidebar />
                    <Room />
                </Route>
                <Route>
                    <h1 style={{color: 'white'}}>404 Page not Found</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContainer;
