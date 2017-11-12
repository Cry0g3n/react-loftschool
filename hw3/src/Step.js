import React, {PureComponent} from 'react';
import './Step.css';
import cx from 'classnames';

class Step extends PureComponent {

    handleClick = () => {
        const {onClick, number, isClickable} = this.props;
        if (!isClickable) {
            return;
        }
        onClick(number);
    };

    render() {
        const {number, children, isSelected, isClickable} = this.props;

        return (
            <div className={cx('step', {'step-selected': isSelected}, {'step-clickable': isClickable})}
                 onClick={this.handleClick}>
                <p className="step__number">{number}</p>
                <p className="step__title">{children}</p>
            </div>
        );
    }
}

export default Step;
