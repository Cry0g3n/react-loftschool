import React, {Component} from 'react';
import './ShowItem.css';
import {Link} from "react-router-dom";

class ShowItem extends Component {

    render() {
        const {image, name, id, summary} = this.props;

        return (
            <div className='show-item'>
                <div className="show-item__left">
                    <div className="show-item__image">
                        <img src={image} alt={name}/>
                    </div>
                </div>
                <div className="show-item__right">
                    <div className="show-item__link">
                        <Link to={`/shows/${id}`}>{name}</Link>
                    </div>
                    <div className="show-item__description">
                        <div dangerouslySetInnerHTML={{__html: summary}} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowItem;