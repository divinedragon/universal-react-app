import React from 'react';
import { hydrate } from 'react-dom';

import App from "../shared/App";

hydrate(<App {...window.APP_INITIAL_STATE} />, document.getElementById('root'));
