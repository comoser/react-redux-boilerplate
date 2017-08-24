import { combineReducers } from 'redux';

const appReducer = combineReducers({
    state: () => {},
});

const rootReducer = (state, action) => {
    let stateRef = state;
    // do any intermediate actions here to the redux state
    // e.g cleaning the session in case the action is LOGOUT
    return appReducer(stateRef, action);
};

export default rootReducer;
