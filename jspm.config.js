SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "play-virtual-dom/": "src/"
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "build.js": [
        "webapp/app.js",
        "npm:dom-delegator@13.1.0/index.js",
        "npm:dom-delegator@13.1.0.json",
        "npm:dom-delegator@13.1.0/dom-delegator.js",
        "npm:dom-delegator@13.1.0/proxy-event.js",
        "npm:inherits@2.0.1/inherits_browser.js",
        "npm:inherits@2.0.1.json",
        "npm:dom-delegator@13.1.0/remove-event.js",
        "npm:ev-store@7.0.0/index.js",
        "npm:ev-store@7.0.0.json",
        "npm:individual@3.0.0/one-version.js",
        "npm:individual@3.0.0.json",
        "npm:individual@3.0.0/index.js",
        "npm:dom-delegator@13.1.0/add-event.js",
        "npm:weakmap-shim@1.1.0/create-store.js",
        "npm:weakmap-shim@1.1.0.json",
        "npm:weakmap-shim@1.1.0/hidden-store.js",
        "npm:global@4.3.0/document.js",
        "npm:global@4.3.0.json",
        "npm:min-document@2.18.0/index.js",
        "npm:min-document@2.18.0.json",
        "npm:min-document@2.18.0/document.js",
        "npm:min-document@2.18.0/event/remove-event-listener.js",
        "npm:min-document@2.18.0/event/add-event-listener.js",
        "npm:min-document@2.18.0/event/dispatch-event.js",
        "npm:min-document@2.18.0/event.js",
        "npm:min-document@2.18.0/dom-fragment.js",
        "npm:min-document@2.18.0/dom-element.js",
        "npm:min-document@2.18.0/serialize.js",
        "npm:dom-walk@0.1.1/index.js",
        "npm:dom-walk@0.1.1.json",
        "npm:min-document@2.18.0/dom-text.js",
        "npm:min-document@2.18.0/dom-comment.js",
        "npm:cuid@1.3.8/dist/browser-cuid.js",
        "npm:cuid@1.3.8.json",
        "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
        "github:jspm/nodelibs-process@0.2.0-alpha.json",
        "npm:individual@2.0.0/index.js",
        "npm:individual@2.0.0.json",
        "npm:virtual-dom@2.1.1/create-element.js",
        "npm:virtual-dom@2.1.1.json",
        "npm:virtual-dom@2.1.1/vdom/create-element.js",
        "npm:virtual-dom@2.1.1/vnode/handle-thunk.js",
        "npm:virtual-dom@2.1.1/vnode/is-thunk.js",
        "npm:virtual-dom@2.1.1/vnode/is-widget.js",
        "npm:virtual-dom@2.1.1/vnode/is-vtext.js",
        "npm:virtual-dom@2.1.1/vnode/version.js",
        "npm:virtual-dom@2.1.1/vnode/is-vnode.js",
        "npm:virtual-dom@2.1.1/vdom/apply-properties.js",
        "npm:virtual-dom@2.1.1/vnode/is-vhook.js",
        "npm:is-object@1.0.1/index.js",
        "npm:is-object@1.0.1.json",
        "npm:virtual-dom@2.1.1/patch.js",
        "npm:virtual-dom@2.1.1/vdom/patch.js",
        "npm:virtual-dom@2.1.1/vdom/patch-op.js",
        "npm:virtual-dom@2.1.1/vdom/update-widget.js",
        "npm:virtual-dom@2.1.1/vnode/vpatch.js",
        "npm:virtual-dom@2.1.1/vdom/dom-index.js",
        "npm:x-is-array@0.1.0/index.js",
        "npm:x-is-array@0.1.0.json",
        "npm:virtual-dom@2.1.1/diff.js",
        "npm:virtual-dom@2.1.1/vtree/diff.js",
        "npm:virtual-dom@2.1.1/vtree/diff-props.js",
        "npm:virtual-dom@2.1.1/h.js",
        "npm:virtual-dom@2.1.1/virtual-hyperscript/index.js",
        "npm:virtual-dom@2.1.1/virtual-hyperscript/hooks/ev-hook.js",
        "npm:virtual-dom@2.1.1/virtual-hyperscript/hooks/soft-set-hook.js",
        "npm:virtual-dom@2.1.1/virtual-hyperscript/parse-tag.js",
        "npm:browser-split@0.0.1/index.js",
        "npm:browser-split@0.0.1.json",
        "npm:virtual-dom@2.1.1/vnode/vtext.js",
        "npm:virtual-dom@2.1.1/vnode/vnode.js"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "play-virtual-dom": {
      "main": "play-virtual-dom.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "dom-delegator": "npm:dom-delegator@13.1.0",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "jspm-caddy-hmr": "npm:jspm-caddy-hmr@0.2.8",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vdom-event": "npm:vdom-event@0.1.1",
    "virtual-dom": "npm:virtual-dom@2.1.1",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
  },
  packages: {
    "npm:jspm-caddy-hmr@0.2.8": {
      "map": {
        "path": "npm:path@0.12.7",
        "lodash-es": "npm:lodash-es@4.13.1",
        "css": "github:systemjs/plugin-css@0.1.23"
      }
    },
    "npm:path@0.12.7": {
      "map": {
        "process": "npm:process@0.11.5",
        "util": "npm:util@0.10.3"
      }
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.0"
      }
    },
    "npm:buffer@4.7.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "npm:virtual-dom@2.1.1": {
      "map": {
        "error": "npm:error@4.4.0",
        "next-tick": "npm:next-tick@0.2.2",
        "x-is-array": "npm:x-is-array@0.1.0",
        "global": "npm:global@4.3.0",
        "browser-split": "npm:browser-split@0.0.1",
        "is-object": "npm:is-object@1.0.1",
        "x-is-string": "npm:x-is-string@0.1.0",
        "ev-store": "npm:ev-store@7.0.0"
      }
    },
    "npm:global@4.3.0": {
      "map": {
        "process": "npm:process@0.5.2",
        "min-document": "npm:min-document@2.18.0",
        "node-min-document": "npm:min-document@2.18.0"
      }
    },
    "npm:error@4.4.0": {
      "map": {
        "camelize": "npm:camelize@1.0.0",
        "string-template": "npm:string-template@0.2.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:ev-store@7.0.0": {
      "map": {
        "individual": "npm:individual@3.0.0"
      }
    },
    "npm:min-document@2.18.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:dom-delegator@13.1.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "ev-store": "npm:ev-store@7.0.0",
        "individual": "npm:individual@2.0.0",
        "global": "npm:global@4.3.0",
        "xtend": "npm:xtend@2.2.0",
        "weakmap-shim": "npm:weakmap-shim@1.1.0",
        "cuid": "npm:cuid@1.3.8"
      }
    },
    "npm:cuid@1.3.8": {
      "map": {
        "core-js": "npm:core-js@1.2.6",
        "browser-fingerprint": "npm:browser-fingerprint@0.0.1",
        "node-fingerprint": "npm:node-fingerprint@0.0.2"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-timers@0.2.0-alpha": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.5"
      }
    }
  }
});
