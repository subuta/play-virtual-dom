import h from 'virtual-dom/h';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';
import delegator from 'dom-delegator';

// 1: Create a function that declares what the DOM should look like
function render(count)  {
    return h(`div.test${count}`, {
        'ev-click': function (ev) {
            console.log(ev);
        },
        style: {
            textAlign: 'center',
            lineHeight: (100 + count) + 'px',
            border: '1px solid red',
            width: (100 + count) + 'px',
            height: (100 + count) + 'px'
        }
    }, [String(count)]);
}

// 2: Initialise the document
var count = 0;      // We need some app data. Here we just store a count.

var tree = render(count);               // We need an initial tree
var rootNode = createElement(tree);     // Create an initial root DOM node ...
document.body.appendChild(rootNode);    // ... and it should be in the document
delegator(document.body); // bind event handler.

// 3: Wire up the update logic
setInterval(function () {
    count++;

    var newTree = render(count);
    var patches = diff(tree, newTree);
    rootNode = patch(rootNode, patches);
    tree = newTree;
}, 1000);