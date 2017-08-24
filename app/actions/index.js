import axios from 'axios';

// add the following line in case you want to use cookies for authentication
// **WARNING** this only works in same domain client and API
// IF you have your API served in a different domain, or you consume other general API's,
// you need to use a token based authentication system
axios.defaults.withCredentials = true;

// this is an example action creator using redux-thunk middleware to dispatch
// the action ONLY when you want it to be dispatched dealing very well with ASYNC requests
export function fetchSomething() {
    return (dispatch) => {
        axios.get('http://mydomain.com/api/myresourse')
        .then(({ data }) => {
            dispatch({
                type: 'FETCH_SOMETHING_SUCCESS',
                payload: data,
            });
        })
        .catch(({ response }) => {
            dispatch({
                type: 'FETCH_SOMETHING_ERROR',
                payload: response,
            });
        });
    };
}
