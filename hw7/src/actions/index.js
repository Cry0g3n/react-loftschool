import {createActions} from "redux-actions";

export const {
    search: {
        fetchRequest: fetchShowListRequest,
        fetchSuccess: fetchShowListSuccess,
        fetchFailure: fetchShowListFailure
    },
    show: {
        fetchRequest: fetchShowDataRequest,
        fetchSuccess: fetchShowDataSuccess,
        fetchFailure: fetchShowDataFailure
    }
} = createActions({
    SEARCH: {
        FETCH_REQUEST: undefined,
        FETCH_SUCCESS: [
            showList => showList,
            showList => ({length: showList.length})
        ],
        FETCH_FAILURE: undefined
    },
    SHOW: {
        FETCH_REQUEST: undefined,
        FETCH_SUCCESS: data => data,
        FETCH_FAILURE: undefined
    }
});