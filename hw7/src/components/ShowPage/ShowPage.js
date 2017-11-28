import React, {Component} from 'react';
import './ShowPage.css';
import {connect} from "react-redux";
import {getError, getIsFetched, getIsFetching, getShowData} from "../../reducers/shows";
import {fetchShowDataRequest} from "../../actions/index";
import Character from '../Character/Character'

export class ShowPage extends Component {
    componentDidMount() {
        const {location, fetchShowDataRequest} = this.props;
        const showId = parseInt(this.props.match.params.id);
        fetchShowDataRequest(showId);
    }

    render() {
        const {showData, isFetching} = this.props;
        const cast = showData._embedded ? showData._embedded.cast : [];

        return (
            <div>
                {!isFetching ? (
                    <div>
                        {cast ? cast.map(castItem => (
                            <Character
                                key={castItem.character.id}
                                actorName={castItem.person.name}
                                characterName={castItem.character.name}
                                image={castItem.character.image ? castItem.character.image.medium : undefined}
                            />
                        )) : undefined}
                    </div>
                ) : (
                    <div className="loading">
                        <p>Происходит загрузка...</p>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state),
    isFetched: getIsFetched(state),
    showData: getShowData(state),
    error: getError(state)
});

const mapDispatchToProps = {
    fetchShowDataRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);

