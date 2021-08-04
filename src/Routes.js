import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar'
import Body from './components/Body/Body';
import Add from './components/Admin/Add';
import TourContextProvider from './components/Contexts/TourContext';



const Routes = () => {
    return (
        <TourContextProvider>
            <BrowserRouter>
                <Navbar />
                {/* <Body ></Body> */}
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route exact path="/add" component={Add} />
                </Switch>
            </BrowserRouter>
        </TourContextProvider>
    );
};

export default Routes;