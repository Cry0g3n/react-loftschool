import React, {Component} from 'react';
import './Budget.css';
import {connect} from 'react-redux';

class Budget extends Component {

    render() {
        const {profit, marketExpanse, farmExpanse, deliveryExpanse} = this.props;
        const total = profit - marketExpanse - farmExpanse - deliveryExpanse;

        return (
            <div className="budget">
                <h2>Бюджет</h2>
                <p>Всего получено денег: {profit}</p>
                <p>Расходы продавцов: {-marketExpanse}</p>
                <p>Расходы на ферме: {-farmExpanse}</p>
                <p>Расходы на доставку: {-deliveryExpanse}</p>
                <p>Итого: {total}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profit: state.budget ? state.budget.profit : 0,
    marketExpanse: state.budget ? state.budget.marketExpanse : 0,
    farmExpanse: state.budget ? state.budget.farmExpanse : 0,
    deliveryExpanse: state.budget ? state.budget.deliveryExpanse : 0
});

export default connect(mapStateToProps)(Budget);