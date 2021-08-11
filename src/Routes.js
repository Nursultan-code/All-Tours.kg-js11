import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Body from './components/Body/Body';
import Add from './components/Admin/Add';
import TourContextProvider from './components/Contexts/TourContext';
import ToursList from './components/Tours/ToursList';
import Edit from './components/Admin/Edit';
import AdminPanell from './components/Admin/AdminPanell';
import Login from './components/Authorization/Login';
import Registration from './components/Authorization/Registration';
import AuthContextProvider from './components/Contexts/AuthContextProvider'



const Routes = () => {
    return (
        <AuthContextProvider>
            <TourContextProvider>
                <BrowserRouter>
                    <Navbar />
                    {/* <Body ></Body> */}
                    <Switch>
                        <Route exact path="/" component={Body} />
                        <Route exact path="/list" component={ToursList} />
                        <Route exact path="/admin" component={AdminPanell} />
                        <Route exact path="/edit/:id" component={Edit} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registration" component={Registration} />
                    </Switch>
                </BrowserRouter>
            </TourContextProvider>
        </AuthContextProvider>
    );
};

export default Routes;