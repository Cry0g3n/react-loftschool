import React, {Component} from 'react';
import './App.css';
import Switcher from '../Switcher/Switcher';
import CardNumberHolder from '../CardNumberHolder/CardNumberHolder';
import ModalButton from '../ModalButton/ModalButton';

class App extends Component {
    render() {
        return (
            <Switcher>
                <CardNumberHolder/>
                <ModalButton/>
            </Switcher>
        );
    }
}

export default App;
