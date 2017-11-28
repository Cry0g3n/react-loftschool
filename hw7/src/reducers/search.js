import {
    fetchShowListRequest,
    fetchShowListSuccess,
    fetchShowListFailure
} from '../actions';
import {handleAction, handleActions} from "redux-actions";
import {combineReducers} from "redux";

const showList = handleAction(
    fetchShowListSuccess,
    (state, action) => action.payload,
    []
);

const error = handleAction(
    fetchShowListFailure,
    (state, action) => action.error,
    null
);

const isFetching = handleActions({
        [fetchShowListRequest]: () => true,
        [fetchShowListSuccess]: () => false,
        [fetchShowListFailure]: () => false
    },
    false
);

const isFetched = handleActions({
        [fetchShowListRequest]: () => false,
        [fetchShowListSuccess]: () => true,
        [fetchShowListFailure]: () => true
    },
    false
);

export default combineReducers({
    error,
    showList,
    isFetched,
    isFetching
});

export const getShowList = state => state.search.showList;
export const getIsFetching = state => state.search.isFetching;
export const getIsFetched = state => state.search.isFetched;
export const getError = state => state.search.error;