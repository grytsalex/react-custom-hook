import React from 'react';
import './index.css';
import { hot } from "react-hot-loader";
import Counter from './components/Counter.jsx'
import { TestComponent } from './libs/TestComponent.jsx'
import {Referral} from "./components/HOC/src/Referrals";

const App = () => (
    <div>
        {/*<Counter/>*/}
        {/*<TestComponent/>*/}
        <Referral/>
    </div>
);

export default hot(module)(App)