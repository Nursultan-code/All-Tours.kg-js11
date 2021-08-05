import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar'
import Body from './components/Body/Body';
import Add from './components/Admin/Add';
import TourContextProvider from './components/Contexts/TourContext';
import ToursList from './components/Tours/ToursList';
import Edit from './components/Admin/Edit';



const Routes = () => {
    return (
        <TourContextProvider>
            <BrowserRouter>
                <Navbar />
                {/* <Body ></Body> */}
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route exact path="/list" component={ToursList} />
                    <Route exact path="/add" component={Add} />
                    <Route exact path="/edit/:id" component={Edit} />
                </Switch>
            </BrowserRouter>
        </TourContextProvider>
    );
};

export default Routes;