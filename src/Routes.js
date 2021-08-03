import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar'
import Body from './components/Body/Body';
import Carusel from './components/Carusel/Carusel';


const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Body >
                {/* <Carusel /> */}

            </Body>



            <Switch>
                <Route />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;