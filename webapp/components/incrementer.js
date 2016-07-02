import h from 'virtual-dom/h';
import { getContext } from 'webapp/store.js'

import {
    increment
} from 'webapp/actions/counter.js';

export default () => {
    const { dispatch, state } = getContext();
    return h(`button`, {
        'ev-click': function (ev) {
            dispatch(increment());
        },
        style: {
            height: '20px'
        }
    }, ['increment']);
};