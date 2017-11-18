import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './ModalButton.css'

class Modal extends Component {
    render() {
        const {hideModal} = this.props;

        return ReactDOM.createPortal(
            <div className="modal">
                <div className="modal__fog">
                    <div className="modal__body">
                        <h1>Modal!</h1>
                        <button className="modal__btn" onClick={hideModal}>Закрыть</button>
                    </div>
                </div>
            </div>,
            document.getElementById('portal')
        );
    }
}

export default Modal;
