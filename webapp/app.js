import h from 'virtual-dom/h';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';
import delegator from 'dom-delegator';

import Counter from './components/counter.js';
import incrementer from './components/incrementer.js';
import decrementer from './components/decrementer.js';

import store, { getContext } from 'webapp/store.js'

// 1: Create a function that declares what the DOM should look like
function render({dispatch, state})  {
    const count = state.counter.count;
    return h(`div.test${count}`, {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            border: '1px solid red',
            width: 100 + 'px',
            height: 100 + 'px'
        }
    }, [
        incrementer(),
        Counter(),
        decrementer()
    ]);
}


let tree = render(getContext()); // We need an initial tree
let rootNode = createElement(tree);     // Create an initial root DOM node ...

let childNode = document.body.appendChild(rootNode);    // ... and it should be in the document
delegator(document.body); // bind event handler.

// - with diff then patch(efficient way / with vdom)
const update = () => {
    var newTree = render(getContext());
    var patches = diff(tree, newTree);
    rootNode = patch(rootNode, patches);
    tree = newTree;
};

// // - without vdom(not efficient way)
// const update = () => {
//     // remove old node
//     childNode.parentNode.removeChild(childNode);
//
//     // calculate new node
//     let newTree = render(getContext());
//     rootNode = createElement(newTree);
//
//     // apply new node.
//     childNode = document.body.appendChild(rootNode);
// };

export const _unload = () => {
    childNode.parentNode.removeChild(childNode);
};

const unSubscribe = store.subscribe(update);