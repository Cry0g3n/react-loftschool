import React, {Component} from 'react';
import './App.css';
import {addListener, removeListener, isAuthorized} from './AuthorizeApi';
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Auth from "./Auth";
import Private from './Private';
import Public from './Public';

class App extends Component {
    state = {
        isAuthorized
    };

    componentDidMount() {
        addListener(this.handleAuthorize);
    }

    componentWillUnmount() {
        removeListener(this.handleAuthorize);
    }

    handleAuthorize = isAuthorized => {
        this.setState({isAuthorized});
    };

    render() {
        const {isAuthorized} = this.state;

        return (
            <div>
                <ul>
                    <li><Link to="/auth">Войти</Link></li>
                    <li><Link to="/private">Секретная страница</Link></li>
                    <li><Link to="/public">Публичная страница</Link></li>
                    <li><Link to="/">Главная</Link></li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/auth" component={Auth}/>
                    <Route exact path="/public" component={Public}/>
                    <Route exact path="/" component={Home}/>
                    {isAuthorized ? (
                        <Route exact path="/private" component={Private}/>
                    ) : (
                        <Redirect from="/private" to="/auth"/>
                    )}
                    {!isAuthorized ? (
                        <Redirect from="*" to="/"/>
                    ) : undefined}
                </Switch>
            </div>
        );
    }
}

export default App;
