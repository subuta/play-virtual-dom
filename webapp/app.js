import h from 'virtual-dom/h';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';
import delegator from 'dom-delegator';

import Counter from './components/counter.js';
import store from 'webapp/store.js'
import {
    increment,
    decrement
} from 'webapp/actions/counter.js';

// 1: Create a function that declares what the DOM should look like
function render(dispatch, state)  {
    const count = state.counter.count;
    return h(`div.test${count}`, {
        'ev-click': function (ev) {
            dispatch(increment());
        },
        style: {
            textAlign: 'center',
            lineHeight: 100 + 'px',
            border: '1px solid red',
            width: 100 + 'px',
            height: 100 + 'px'
        }
    }, [Counter(state)]);
}

var tree = render(store.dispatch, store.getState()); // We need an initial tree
var rootNode = createElement(tree);     // Create an initial root DOM node ...
document.body.appendChild(rootNode);    // ... and it should be in the document
delegator(document.body); // bind event handler.

const update = () => {
    var newTree = render(store.dispatch, store.getState());
    var patches = diff(tree, newTree);
    rootNode = patch(rootNode, patches);
    tree = newTree;
};

const unSubscribe = store.subscribe(update);