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
        "webapp/store.js",
        "webapp/reducers/index.js",
        "webapp/reducers/counter.js",
        "npm:redux@3.5.2/lib/index.js",
        "npm:redux@3.5.2.json",
        "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
        "github:jspm/nodelibs-process@0.2.0-alpha.json",
        "npm:redux@3.5.2/lib/utils/warning.js",
        "npm:redux@3.5.2/lib/compose.js",
        "npm:redux@3.5.2/lib/applyMiddleware.js",
        "npm:redux@3.5.2/lib/bindActionCreators.js",
        "npm:redux@3.5.2/lib/combineReducers.js",
        "npm:lodash@4.13.1/isPlainObject.js",
        "npm:lodash@4.13.1.json",
        "npm:lodash@4.13.1/isObjectLike.js",
        "npm:lodash@4.13.1/_isHostObject.js",
        "npm:lodash@4.13.1/_getPrototype.js",
        "npm:redux@3.5.2/lib/createStore.js",
        "npm:symbol-observable@0.2.4/index.js",
        "npm:symbol-observable@0.2.4.json",
        "npm:symbol-observable@0.2.4/ponyfill.js",
        "npm:lodash@4.13.1/lodash.js",
        "npm:redux-thunk@2.1.0/lib/index.js",
        "npm:redux-thunk@2.1.0.json",
        "webapp/components/decrementer.js",
        "webapp/actions/counter.js",
        "npm:virtual-dom@2.1.1/h.js",
        "npm:virtual-dom@2.1.1.json",
        "npm:virtual-dom@2.1.1/virtual-hyperscript/index.js",
        "npm:virtual-dom@2.1.1/virtual-hyperscript/hooks/ev-hook.js",
        "npm:ev-store@7.0.0/index.js",
        "npm:ev-store@7.0.0.json",
        "npm:individual@3.0.0/one-version.js",
        "npm:individual@3.0.0.json",
        "npm:individual@3.0.0/index.js",
        "npm:virtual-dom@2.1.1/virtual-hyperscript/hooks/soft-set-hook.js",
        "npm:virtual-dom@2.1.1/virtual-hyperscript/parse-tag.js",
        "npm:browser-split@0.0.1/index.js",
        "npm:browser-split@0.0.1.json",
        "npm:virtual-dom@2.1.1/vnode/is-thunk.js",
        "npm:virtual-dom@2.1.1/vnode/is-vhook.js",
        "npm:virtual-dom@2.1.1/vnode/is-widget.js",
        "npm:virtual-dom@2.1.1/vnode/is-vtext.js",
        "npm:virtual-dom@2.1.1/vnode/version.js",
        "npm:virtual-dom@2.1.1/vnode/is-vnode.js",
        "npm:virtual-dom@2.1.1/vnode/vtext.js",
        "npm:virtual-dom@2.1.1/vnode/vnode.js",
        "npm:x-is-array@0.1.0/index.js",
        "npm:x-is-array@0.1.0.json",
        "webapp/components/incrementer.js",
        "webapp/components/counter.js",
        "npm:reselect@2.5.1/lib/index.js",
        "npm:reselect@2.5.1.json",
        "npm:dom-delegator@13.1.0/index.js",
        "npm:dom-delegator@13.1.0.json",
        "npm:dom-delegator@13.1.0/dom-delegator.js",
        "npm:dom-delegator@13.1.0/proxy-event.js",
        "npm:inherits@2.0.1/inherits_browser.js",
        "npm:inherits@2.0.1.json",
        "npm:dom-delegator@13.1.0/remove-event.js",
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
        "npm:individual@2.0.0/index.js",
        "npm:individual@2.0.0.json",
        "npm:virtual-dom@2.1.1/create-element.js",
        "npm:virtual-dom@2.1.1/vdom/create-element.js",
        "npm:virtual-dom@2.1.1/vnode/handle-thunk.js",
        "npm:virtual-dom@2.1.1/vdom/apply-properties.js",
        "npm:is-object@1.0.1/index.js",
        "npm:is-object@1.0.1.json",
        "npm:virtual-dom@2.1.1/patch.js",
        "npm:virtual-dom@2.1.1/vdom/patch.js",
        "npm:virtual-dom@2.1.1/vdom/patch-op.js",
        "npm:virtual-dom@2.1.1/vdom/update-widget.js",
        "npm:virtual-dom@2.1.1/vnode/vpatch.js",
        "npm:virtual-dom@2.1.1/vdom/dom-index.js",
        "npm:virtual-dom@2.1.1/diff.js",
        "npm:virtual-dom@2.1.1/vtree/diff.js",
        "npm:virtual-dom@2.1.1/vtree/diff-props.js"
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
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "dom-delegator": "npm:dom-delegator@13.1.0",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "free-style": "npm:free-style@1.2.2",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "icepick": "npm:icepick@1.3.0",
    "jspm-caddy-hmr": "npm:jspm-caddy-hmr@0.2.8",
    "lodash": "npm:lodash@4.13.1",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "redux": "npm:redux@3.5.2",
    "redux-thunk": "npm:redux-thunk@2.1.0",
    "reselect": "npm:reselect@2.5.1",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
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
    },
    "npm:redux@3.5.2": {
      "map": {
        "lodash-es": "npm:lodash-es@4.13.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "symbol-observable": "npm:symbol-observable@0.2.4",
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.4",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "create-hash": "npm:create-hash@1.1.2",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "browserify-sign": "npm:browserify-sign@4.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.6.2"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.4",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.6.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    }
  }
});
