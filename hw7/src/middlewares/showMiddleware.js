import {
    fetchShowDataRequest,
    fetchShowDataSuccess,
    fetchShowDataFailure
} from '../actions';
import { show } from "../api.js";

export default store => next => action => {
    const result = next(action);

    if (action.type === fetchShowDataRequest.toString()) {
        show(action.payload)
            .then(data => store.dispatch(fetchShowDataSuccess(data)))
            .catch(err => store.dispatch(fetchShowDataFailure(err)));
    }

    return result;
};