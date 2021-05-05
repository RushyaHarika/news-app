import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import AppAPI from './componentsAPI/AppAPI';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppAPI />, document.getElementById('root'));
registerServiceWorker();
