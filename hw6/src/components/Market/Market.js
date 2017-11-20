import React, {Component} from 'react';
import './Market.css';
import {connect} from 'react-redux';
import Order from "../Order/Order";
import {createOrder, moveOrderToFarm} from "../../actions/marketActions";

let id = 0;
const getId = () => {
    id += 1;
    return id;
};
export const vegetables = [
    'Капуста',
    'Редиска',
    'Огурцы',
    'Морковь',
    'Горох',
    'Баклажан',
    'Тыква',
    'Чеснок',
    'Лук',
    'Перец',
    'Картофель',
    'Редька'
];

const getNewOrder = () => {
    return {
        id: getId(),
        name: vegetables[Math.floor(Math.random() * vegetables.length)],
        price: 100 + Math.floor(Math.random() * 100),
        createdAt: new Date()
    };
};

export class Market extends Component {

    handleCreateOrder = () => {
        const {createOrder} = this.props;
        createOrder(getNewOrder());
    };

    handleMoveOrderToFarm = () => {
        const {orders, moveOrderToFarm} = this.props;
        orders.length ? moveOrderToFarm(orders[orders.length - 1]) : undefined;
    };

    render() {
        const {orders} = this.props;

        return (
            <div className="market">
                <h2>Новые заказы в магазине</h2>
                <button className="new-orders__create-button" onClick={this.handleCreateOrder}>Создать заказ</button>
                <button disabled={!orders.length} onClick={this.handleMoveOrderToFarm}>Отправить заказ на ферму</button>
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
    orders: state.market ? state.market.orders : []
});

const mapDispatchToProps = {
    createOrder,
    moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
