import React from 'react';
import './index.css';
import { hot } from "react-hot-loader";
import Counter from './components/Counter.jsx'
import Mobile from "./components/touchEvents/Mobile";
import EventComponent from "./components/touchEvents/EventComponent";

const App = () => (
    <div>
        <Counter/>
        <Mobile/>
        <EventComponent/>
    </div>
);

export default hot(module)(App)