import React from 'react';
import ReactDOM from 'react-dom';
import Webroutes from './Webroutes';
import {Provider} from 'react-redux';
import Store from './store/index';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../src/styles/global.css'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
   <Provider store={Store} >
      <Webroutes />
 </Provider>,
 document.getElementById('root'));