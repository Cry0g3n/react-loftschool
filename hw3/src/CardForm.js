import React, {Component} from 'react';
import Title from './Title';
import './CardForm.css';

export class CardForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leftTime: 120
        };
        props.onChangeTimeOver(false);
    }

    componentDidMount() {
        this.id = setInterval(() => {
            const leftTime = Math.max(this.state.leftTime - 1, 0);
            this.setState({leftTime});
            if (leftTime === 0) {
                this.props.onChangeTimeOver(true);
                clearInterval(this.id);
            }
        }, 1000);
    }

    componentWillUnmount() {
        this.props.onChangeTimeOver(false);
        clearInterval(this.id);
    }

    handleChangeForm = (event) => {
        const {onChangeForm} = this.props;
        const {name, value} = event.target;
        onChangeForm(name, value);
    };

    render() {
        const {leftTime} = this.state;
        const {cardNumber} = this.props;
        return (
            <div>
                <Title>Номер карты</Title>
                <p className="left-time">Осталось {leftTime} секунд</p>
                <div className="card-form">
                    <input
                        type="text"
                        name="cardNumber"
                        value={cardNumber}
                        onChange={this.handleChangeForm}/>
                </div>
            </div>
        );
    }
}

export default CardForm;
