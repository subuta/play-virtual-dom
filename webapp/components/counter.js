import h from 'virtual-dom/h';

import store, { getContext } from 'webapp/store.js'
import { createSelector } from 'reselect';
import { getCount } from 'webapp/reducers/counter.js';

// - with memorize(efficient way / with reselect)
const render = createSelector(
    getCount,
    (count) => {
        console.log('counter rendered! counter = ', count);
        return h(`span`, {
            'ev-click': function (ev) {
                store.dispatch({
                    type: 'dummy'
                });
            }
        }, [count]);
    }
);

// // - without memorize(not efficient way)
// const render = (state) => {
//     const count = getCount(state);
//     console.log('counter rendered! counter = ', count);
//     return h(`span`, {
//         'ev-click': function (ev) {
//             store.dispatch({
//                 type: 'dummy'
//             });
//         }
//     }, [count]);
// };

export default () => {
    const { dispatch, state } = getContext();
    return render(state);
};