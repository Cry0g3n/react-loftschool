import React, {Component} from 'react';
import CardNumberInput from "../CardNumberInput/CardNumberInput";

class CardNumberHolder extends Component {
    state = {
        cardNumber: ''
    };

    handleChange = () => {

    };

    render() {
        const {cardNumber} = this.state.cardNumber;
        return (
            <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange}/>
        );
    }
}

export default CardNumberHolder;
