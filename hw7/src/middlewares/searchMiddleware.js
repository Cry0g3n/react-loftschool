import {
    fetchShowListRequest,
    fetchShowListSuccess,
    fetchShowListFailure
} from '../actions';
import { search } from "../api.js";

export default store => next => action => {
    const result = next(action);

    if (action.type === fetchShowListRequest.toString()) {
        search(action.payload)
            .then(showList => store.dispatch(fetchShowListSuccess(showList)))
            .catch(err => store.dispatch(fetchShowListFailure(err)));
    }

    return result;
};