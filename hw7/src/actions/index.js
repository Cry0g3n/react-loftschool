import {createActions} from "redux-actions";

export const {
    searchRequest: fetchShowListRequest,
    searchSuccess: fetchShowListSuccess,
    searchFailure: fetchShowListFailure,
    showRequest: fetchShowDataRequest,
    showSuccess: fetchShowDataSuccess,
    showFailure: fetchShowDataFailure
} = createActions({
    SEARCH_REQUEST: undefined,
    SEARCH_SUCCESS: [
        showList => showList,
        showList => ({length: showList.length})
    ],
    SEARCH_FAILURE: undefined,
    SHOW_REQUEST: undefined,
    SHOW_SUCCESS: data => data,
    SHOW_FAILURE: undefined
});