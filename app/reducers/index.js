import { combineReducers } from 'redux';

const appReducer = combineReducers({
    state: (state = {}) => state,
});

const rootReducer = (state, action) => {
    const stateRef = state;
    // do any intermediate actions here to the redux state
    // e.g cleaning the session in case the action is LOGOUT
    return appReducer(stateRef, action);
};

export default rootReducer;
