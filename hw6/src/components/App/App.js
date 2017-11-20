import React, {Component} from 'react';
import './App.css';
import Market from "../Market/Market";
import Farm from "../Farm/Farm";
import Budget from "../Budget/Budget";

class App extends Component {

    render() {
        return (
            <div className="app">
                <Market/>
                <Farm/>
                <Budget/>
            </div>
        );
    }
}

export default App;