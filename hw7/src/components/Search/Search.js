import React, {Component} from 'react';
import './Search.css';
import {connect} from "react-redux";
import {getError, getIsFetched, getIsFetching, getShowList} from "../../reducers/search";
import {fetchShowListRequest} from "../../actions/index";
import ShowItem from "../ShowItem/ShowItem";

export class Search extends Component {
    handleSearchInput = (event) => {
        const value = event.target.value;
        this.setState({
            searchInput: value
        });
    };

    handleSearchClick = () => {
        const {fetchShowListRequest} = this.props;
        const {searchInput} = this.state;
        if (searchInput) {
            fetchShowListRequest(searchInput);
        }
    };

    render() {
        const {showList, isFetching} = this.props;

        return (
            <div>
                {!isFetching ? (
                    <div className="search">
                        <input className="search__text" type="text" onChange={this.handleSearchInput}/>
                        <button className="search__button" onClick={this.handleSearchClick}>Найти</button>
                        {showList ? showList.map(show => (
                            <ShowItem
                                key={show.id}
                                image={show.image ? show.image.medium : undefined}
                                name={show.name}
                                id={show.id}
                                summary={show.summary}
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
    showList: getShowList(state),
    error: getError(state)
});

const mapDispatchToProps = {
    fetchShowListRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

