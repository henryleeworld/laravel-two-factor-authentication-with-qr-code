import axios from 'axios';
import 'bootstrap';
import jQuery from 'jquery';
import Popper from '@popperjs/core/dist/umd/popper.js';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
