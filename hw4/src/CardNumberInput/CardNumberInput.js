import React, {Component} from 'react';
import PropTypes from "prop-types";

class CardNumberInput extends Component {
    state = {
        number: ''
    };

    static propTypes = {
        cardNumber: PropTypes.string
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            number: this.format(nextProps.cardNumber)
        })
    }

    componentDidMount() {
        const {cardNumber} = this.props;

        this.setState({
            number: this.format(cardNumber)
        });
    }

    format(number) {
        return number
            ? number
            .toString()
            .replace(/[^\d]/g, "")
            .replace(/(\d{4})(?=(\d{1,4})+([^\d]|$))/ig, "$1 ")
            : '';
    }

    normalize(str) {
        return str.replace(/[^\d]/ig, "");
    }

    handleChange = event => {
        const {onChange} = this.props;
        const cardNumber = event.target.value;
        this.setState({
            cardNumber: this.format(cardNumber)
        });
        onChange(this.normalize(cardNumber));
    };

    render() {
        const {cardNumber} = this.state;

        return (
            <input
                type="text"
                value={cardNumber}
                onChange={this.handleChange}
            />
        );
    }
}

export default CardNumberInput;
