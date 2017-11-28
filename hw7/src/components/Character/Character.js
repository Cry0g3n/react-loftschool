import React, {Component} from 'react';
import './Character.css';

class Character extends Component {

    render() {
        const {image, actorName, characterName} = this.props;

        return (
            <div className='character'>
                <div className="character__left">
                    <div className="character__image">
                        <img src={image} alt={characterName}/>
                    </div>
                </div>
                <div className="character__right">
                    <div className="character__actor-name">
                        <span>{actorName}</span>
                    </div>
                    <div className="character__name">
                        <span>{'as ' + characterName}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Character;