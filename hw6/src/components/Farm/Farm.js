import React, {Component} from 'react';
import './Farm.css';
import {connect} from 'react-redux';
import Order from "../Order/Order";
import {moveOrderToCustomer} from "../../actions/farmActions";

export class Farm extends Component {

    handleMoveOrderToCustomer = () => {
        const {orders, moveOrderToCustomer} = this.props;
        orders.length ? moveOrderToCustomer(orders[orders.length - 1]) : undefined;
    };

    render() {
        const {orders} = this.props;

        return (
            <div className="farm">
                <h2>Производство на ферме</h2>

                <button disabled={!orders.length} onClick={this.handleMoveOrderToCustomer}>Отправить урожай клиенту</button>
                <div className="order-list">
                    {orders ? orders.map(order => (
                        <Order
                            key={order.id}
                            createdAt={order.createdAt.toISOString()}
                            name={order.name}
                            price={order.price}
                        />
                    )) : undefined}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.farm ? state.farm.orders : []
});

const mapDispatchToProps = {
    moveOrderToCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
