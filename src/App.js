    import React from 'react';
import './index.css';
import { hot } from "react-hot-loader";
import Counter from './components/Counter.jsx'

const App = () => (
    <div>
        <Counter/>
    </div>
);

export default hot(module)(App)