import React, {Component} from 'react';
import './App.css';
import Step from './Step';
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";

const stepTitles = ['Personal information', 'Card information', 'Finish'];

class App extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
        isTimeOver: false
    };

    handleTabClick = (number) => {
        this.setState(state => ({
            step: number
        }));
    };

    isFormCommitable = () => {
        let checkResult = false;
        const {step, firstName, lastName, email, cardNumber} = this.state;
        switch (step) {
            case 1:
                checkResult = firstName !== '' && lastName !== '' && email !== '' && email.includes('@');
                break;
            case 2:
                checkResult = cardNumber.length === 16;
                break;
        }
        return checkResult;
    };

    handleChangeForm = (name, value) => {
        this.setState({[name]: value});
    };

    handleChangeTimeOver = (isTimerOver) => {
        this.setState({isTimeOver: isTimerOver});
    };

    handleClickNextForm = () => {
        const {step} = this.state;
        this.setState({step: step + 1});
    };

    renderForm = () => {
        let content = '';
        const {step, firstName, lastName, email, cardNumber} = this.state;

        switch (step) {
            case 1:
                content = <PersonalForm
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    onChangeForm={this.handleChangeForm}
                />;
                break;
            case 2:
                content = <CardForm
                    cardNumber={cardNumber}
                    onChangeForm={this.handleChangeForm}
                    onChangeTimeOver={this.handleChangeTimeOver}
                />;
                break;
            case 3:
                content = 'Поздравляем!';
        }

        return content;
    };

    render() {
        const {step, isTimeOver} = this.state;

        return <div className="container">
            <div className="tab-panel">
                {stepTitles.map((stepName, i) => (
                    <Step
                        key={stepName}
                        number={i + 1}
                        children={stepName}
                        onClick={this.handleTabClick}
                        isClickable={i + 1 < step}
                        isSelected={i + 1 === step}
                    />
                ))}
            </div>
            <div className="form-content">
                {this.renderForm()}
            </div>
            <div className="button-panel">
                <button
                    className="button-next"
                    onClick={this.handleClickNextForm}
                    disabled={(!this.isFormCommitable() || isTimeOver) ? 'disabled' : ''}
                >
                    Next
                </button>
            </div>
        </div>;
    }
}

export default App;
