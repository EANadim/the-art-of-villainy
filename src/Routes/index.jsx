import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NightKing from '../components/NightKing';
import Thanos from '../components/Thanos';
import Darkseid from '../components/Darkseid';
import Home from '../components/Home';

export default function Routes() {
    return (
        <>
            {/* <BrowserRouter> */}
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/night-king" exact>
                        <NightKing />
                    </Route>
                    <Route path="/thanos" exact>
                        <Thanos />
                    </Route>
                    <Route path="/darkseid" exact>
                        <Darkseid />
                    </Route>
                </Switch>
            {/* </BrowserRouter> */}
        </>
    );
}