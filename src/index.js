import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store.js'
import router from './router.js'

ReactDOM.render(
<Provider store={store}>    
    <BrowserRouter>
        {router}
    </BrowserRouter>
</Provider>, document.getElementById('root'));
