import {
    fetchShowDataRequest,
    fetchShowDataSuccess,
    fetchShowDataFailure
} from '../actions';
import {handleAction, handleActions} from "redux-actions";
import {combineReducers} from "redux";

const showData = handleAction(
    fetchShowDataSuccess,
    (state, action) => action.payload,
    []
);

const error = handleAction(
    fetchShowDataFailure,
    (state, action) => action.error,
    null
);

const isFetching = handleActions({
        [fetchShowDataRequest]: () => true,
        [fetchShowDataSuccess]: () => false,
        [fetchShowDataFailure]: () => false
    },
    false
);

const isFetched = handleActions({
        [fetchShowDataRequest]: () => false,
        [fetchShowDataSuccess]: () => true,
        [fetchShowDataFailure]: () => true
    },
    false
);

export default combineReducers({
    error,
    showData,
    isFetched,
    isFetching
});

export const getShowData = state => state.shows.showData;
export const getIsFetching = state => state.shows.isFetching;
export const getIsFetched = state => state.shows.isFetched;
export const getError = state => state.shows.error;