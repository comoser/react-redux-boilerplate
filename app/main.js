import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import PromiseMiddleware from 'redux-thunk';
import reducers from './reducers';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(PromiseMiddleware)(createStore);
const store = createStoreWithMiddleware(
    reducers,
    // the following line adds the ability to view the redux tab in chrome dev tools
    // the extension is at https://github.com/zalmoxisus/redux-devtools-extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Component}/>
                        {
                            /* add other routes here to guarantee
                        only one component is rendered at a time */
                        }
                    </Switch>
                </Router>
            </AppContainer>
        </Provider>
        , document.querySelector('.container'),
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/app', () => {
        const newApp = require('./components/app').default;
        render(newApp);
    });
}
