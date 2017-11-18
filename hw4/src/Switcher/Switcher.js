import React, {Component} from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
    state = {
        selectedChild: 0
    };

    handleChangeChild = (event) => {
        const dataId = +event.target.getAttribute('data-id');
        this.setState(
            {selectedChild: dataId}
        );
    };

    render() {
        const children = React.Children.toArray(this.props.children);

        return (
            <div>
                <nav>
                    <ul className='component-list'>
                        {children.map((child, i) => (
                            <li className='component-list__name'
                                key={child.key}
                                data-id={i}
                                onClick={this.handleChangeChild}
                            >
                                {child.type.displayName || child.type.name}
                            </li>
                        ))}
                    </ul>
                </nav>
                <hr/>
                <div className="component-wrapper">
                    {this.state.selectedChild === 0 ? children[0] : children[1]}
                </div>
            </div>
        );
    }
}

export default Switcher;
