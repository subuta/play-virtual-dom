import h from 'virtual-dom/h';

import { createSelector } from 'reselect';
import { getCount } from 'webapp/reducers/counter.js';

export default createSelector(
    getCount,
    (count) => {
        console.log(count);
        return h(`span`, {}, [count]);
    }
);