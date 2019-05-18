// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"zenscroll/zenscroll-min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "function" == typeof define && define.amd ? define([], e()) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : function n() {
    document && document.body ? t.zenscroll = e() : setTimeout(n, 9);
  }();
}(this, function () {
  "use strict";

  var t = function t(_t) {
    return _t && "getComputedStyle" in window && "smooth" === window.getComputedStyle(_t)["scroll-behavior"];
  };

  if ("undefined" == typeof window || !("document" in window)) return {};

  var e = function e(_e, n, o) {
    n = n || 999, o || 0 === o || (o = 9);

    var i,
        r = function r(t) {
      i = t;
    },
        u = function u() {
      clearTimeout(i), r(0);
    },
        c = function c(t) {
      return Math.max(0, _e.getTopOf(t) - o);
    },
        a = function a(o, i, c) {
      if (u(), 0 === i || i && i < 0 || t(_e.body)) _e.toY(o), c && c();else {
        var a = _e.getY(),
            f = Math.max(0, o) - a,
            s = new Date().getTime();

        i = i || Math.min(Math.abs(f), n), function t() {
          r(setTimeout(function () {
            var n = Math.min(1, (new Date().getTime() - s) / i),
                o = Math.max(0, Math.floor(a + f * (n < .5 ? 2 * n * n : n * (4 - 2 * n) - 1)));
            _e.toY(o), n < 1 && _e.getHeight() + o < _e.body.scrollHeight ? t() : (setTimeout(u, 99), c && c());
          }, 9));
        }();
      }
    },
        f = function f(t, e, n) {
      a(c(t), e, n);
    },
        s = function s(t, n, i) {
      var r = t.getBoundingClientRect().height,
          u = _e.getTopOf(t) + r,
          s = _e.getHeight(),
          l = _e.getY(),
          d = l + s;

      c(t) < l || r + o > s ? f(t, n, i) : u + o > d ? a(u - s + o, n, i) : i && i();
    },
        l = function l(t, n, o, i) {
      a(Math.max(0, _e.getTopOf(t) - _e.getHeight() / 2 + (o || t.getBoundingClientRect().height / 2)), n, i);
    };

    return {
      setup: function setup(t, e) {
        return (0 === t || t) && (n = t), (0 === e || e) && (o = e), {
          defaultDuration: n,
          edgeOffset: o
        };
      },
      to: f,
      toY: a,
      intoView: s,
      center: l,
      stop: u,
      moving: function moving() {
        return !!i;
      },
      getY: _e.getY,
      getTopOf: _e.getTopOf
    };
  },
      n = document.documentElement,
      o = function o() {
    return window.scrollY || n.scrollTop;
  },
      i = e({
    body: document.scrollingElement || document.body,
    toY: function toY(t) {
      window.scrollTo(0, t);
    },
    getY: o,
    getHeight: function getHeight() {
      return window.innerHeight || n.clientHeight;
    },
    getTopOf: function getTopOf(t) {
      return t.getBoundingClientRect().top + o() - n.offsetTop;
    }
  });

  if (i.createScroller = function (t, o, i) {
    return e({
      body: t,
      toY: function toY(e) {
        t.scrollTop = e;
      },
      getY: function getY() {
        return t.scrollTop;
      },
      getHeight: function getHeight() {
        return Math.min(t.clientHeight, window.innerHeight || n.clientHeight);
      },
      getTopOf: function getTopOf(t) {
        return t.offsetTop;
      }
    }, o, i);
  }, "addEventListener" in window && !window.noZensmooth && !t(document.body)) {
    var r = "history" in window && "pushState" in history,
        u = r && "scrollRestoration" in history;
    u && (history.scrollRestoration = "auto"), window.addEventListener("load", function () {
      u && (setTimeout(function () {
        history.scrollRestoration = "manual";
      }, 9), window.addEventListener("popstate", function (t) {
        t.state && "zenscrollY" in t.state && i.toY(t.state.zenscrollY);
      }, !1)), window.location.hash && setTimeout(function () {
        var t = i.setup().edgeOffset;

        if (t) {
          var e = document.getElementById(window.location.href.split("#")[1]);

          if (e) {
            var n = Math.max(0, i.getTopOf(e) - t),
                o = i.getY() - n;
            0 <= o && o < 9 && window.scrollTo(0, n);
          }
        }
      }, 9);
    }, !1);
    var c = new RegExp("(^|\\s)noZensmooth(\\s|$)");
    window.addEventListener("click", function (t) {
      for (var e = t.target; e && "A" !== e.tagName;) {
        e = e.parentNode;
      }

      if (!(!e || 1 !== t.which || t.shiftKey || t.metaKey || t.ctrlKey || t.altKey)) {
        if (u) {
          var n = history.state && "object" == _typeof(history.state) ? history.state : {};
          n.zenscrollY = i.getY();

          try {
            history.replaceState(n, "");
          } catch (t) {}
        }

        var o = e.getAttribute("href") || "";

        if (0 === o.indexOf("#") && !c.test(e.className)) {
          var a = 0,
              f = document.getElementById(o.substring(1));

          if ("#" !== o) {
            if (!f) return;
            a = i.getTopOf(f);
          }

          t.preventDefault();

          var s = function s() {
            window.location = o;
          },
              l = i.setup().edgeOffset;

          l && (a = Math.max(0, a - l), r && (s = function s() {
            history.pushState({}, "", o);
          })), i.toY(a, null, s);
        }
      }
    }, !1);
  }

  return i;
});
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50000" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","zenscroll/zenscroll-min.js"], null)
//# sourceMappingURL=/zenscroll-min.5b6e1ba3.js.map