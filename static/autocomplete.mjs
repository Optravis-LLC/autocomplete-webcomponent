function Sf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ys = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr = Symbol.for("react.element"), kf = Symbol.for("react.portal"), xf = Symbol.for("react.fragment"), Ef = Symbol.for("react.strict_mode"), Cf = Symbol.for("react.profiler"), _f = Symbol.for("react.provider"), Pf = Symbol.for("react.context"), Nf = Symbol.for("react.forward_ref"), Tf = Symbol.for("react.suspense"), Lf = Symbol.for("react.memo"), Of = Symbol.for("react.lazy"), Nu = Symbol.iterator;
function Rf(e) {
  return e === null || typeof e != "object" ? null : (e = Nu && e[Nu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Gs = Object.assign, Zs = {};
function xn(e, t, n) {
  this.props = e, this.context = t, this.refs = Zs, this.updater = n || Xs;
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Js() {
}
Js.prototype = xn.prototype;
function Ni(e, t, n) {
  this.props = e, this.context = t, this.refs = Zs, this.updater = n || Xs;
}
var Ti = Ni.prototype = new Js();
Ti.constructor = Ni;
Gs(Ti, xn.prototype);
Ti.isPureReactComponent = !0;
var Tu = Array.isArray, qs = Object.prototype.hasOwnProperty, Li = { current: null }, bs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ea(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) qs.call(t, r) && !bs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: mr, type: e, key: o, ref: i, props: l, _owner: Li.current };
}
function If(e, t) {
  return { $$typeof: mr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Oi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mr;
}
function zf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Lu = /\/+/g;
function Kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? zf("" + e.key) : t.toString(36);
}
function Qr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case mr:
        case kf:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Kl(i, 0) : r, Tu(l) ? (n = "", e != null && (n = e.replace(Lu, "$&/") + "/"), Qr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Oi(l) && (l = If(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Lu, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Tu(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + Kl(o, u);
    i += Qr(o, t, n, s, l);
  }
  else if (s = Rf(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Kl(o, u++), i += Qr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Er(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Qr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function $f(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null }, Wr = { transition: null }, jf = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: Wr, ReactCurrentOwner: Li };
$.Children = { map: Er, forEach: function(e, t, n) {
  Er(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Er(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Er(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Oi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = xn;
$.Fragment = xf;
$.Profiler = Cf;
$.PureComponent = Ni;
$.StrictMode = Ef;
$.Suspense = Tf;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jf;
$.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Gs({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Li.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) qs.call(t, s) && !bs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: mr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
$.createContext = function(e) {
  return e = { $$typeof: Pf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: _f, _context: e }, e.Consumer = e;
};
$.createElement = ea;
$.createFactory = function(e) {
  var t = ea.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: Nf, render: e };
};
$.isValidElement = Oi;
$.lazy = function(e) {
  return { $$typeof: Of, _payload: { _status: -1, _result: e }, _init: $f };
};
$.memo = function(e, t) {
  return { $$typeof: Lf, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = Wr.transition;
  Wr.transition = {};
  try {
    e();
  } finally {
    Wr.transition = t;
  }
};
$.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
$.useCallback = function(e, t) {
  return pe.current.useCallback(e, t);
};
$.useContext = function(e) {
  return pe.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return pe.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return pe.current.useEffect(e, t);
};
$.useId = function() {
  return pe.current.useId();
};
$.useImperativeHandle = function(e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function(e, t) {
  return pe.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return pe.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return pe.current.useMemo(e, t);
};
$.useReducer = function(e, t, n) {
  return pe.current.useReducer(e, t, n);
};
$.useRef = function(e) {
  return pe.current.useRef(e);
};
$.useState = function(e) {
  return pe.current.useState(e);
};
$.useSyncExternalStore = function(e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function() {
  return pe.current.useTransition();
};
$.version = "18.2.0";
Ys.exports = $;
var P = Ys.exports;
const Qe = /* @__PURE__ */ Sf(P);
var ta = { exports: {} }, Pe = {}, na = { exports: {} }, ra = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(C, L) {
    var R = C.length;
    C.push(L);
    e: for (; 0 < R; ) {
      var B = R - 1 >>> 1, Q = C[B];
      if (0 < l(Q, L)) C[B] = L, C[R] = Q, R = B;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0], R = C.pop();
    if (R !== L) {
      C[0] = R;
      e: for (var B = 0, Q = C.length, Yt = Q >>> 1; B < Yt; ) {
        var I = 2 * (B + 1) - 1, F = C[I], W = I + 1, Xe = C[W];
        if (0 > l(F, R)) W < Q && 0 > l(Xe, F) ? (C[B] = Xe, C[W] = R, B = W) : (C[B] = F, C[I] = R, B = I);
        else if (W < Q && 0 > l(Xe, R)) C[B] = Xe, C[W] = R, B = W;
        else break e;
      }
    }
    return L;
  }
  function l(C, L) {
    var R = C.sortIndex - L.sortIndex;
    return R !== 0 ? R : C.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], h = 1, p = null, m = 3, w = !1, v = !1, g = !1, T = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= C) r(c), L.sortIndex = L.expirationTime, t(s, L);
      else break;
      L = n(c);
    }
  }
  function y(C) {
    if (g = !1, d(C), !v) if (n(s) !== null) v = !0, Nn(k);
    else {
      var L = n(c);
      L !== null && Ye(y, L.startTime - C);
    }
  }
  function k(C, L) {
    v = !1, g && (g = !1, f(E), E = -1), w = !0;
    var R = m;
    try {
      for (d(L), p = n(s); p !== null && (!(p.expirationTime > L) || C && !ke()); ) {
        var B = p.callback;
        if (typeof B == "function") {
          p.callback = null, m = p.priorityLevel;
          var Q = B(p.expirationTime <= L);
          L = e.unstable_now(), typeof Q == "function" ? p.callback = Q : p === n(s) && r(s), d(L);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var Yt = !0;
      else {
        var I = n(c);
        I !== null && Ye(y, I.startTime - L), Yt = !1;
      }
      return Yt;
    } finally {
      p = null, m = R, w = !1;
    }
  }
  var x = !1, N = null, E = -1, V = 5, z = -1;
  function ke() {
    return !(e.unstable_now() - z < V);
  }
  function Lt() {
    if (N !== null) {
      var C = e.unstable_now();
      z = C;
      var L = !0;
      try {
        L = N(!0, C);
      } finally {
        L ? Ot() : (x = !1, N = null);
      }
    } else x = !1;
  }
  var Ot;
  if (typeof a == "function") Ot = function() {
    a(Lt);
  };
  else if (typeof MessageChannel < "u") {
    var xr = new MessageChannel(), Wl = xr.port2;
    xr.port1.onmessage = Lt, Ot = function() {
      Wl.postMessage(null);
    };
  } else Ot = function() {
    T(Lt, 0);
  };
  function Nn(C) {
    N = C, x || (x = !0, Ot());
  }
  function Ye(C, L) {
    E = T(function() {
      C(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    v || w || (v = !0, Nn(k));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(C) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = m;
    }
    var R = m;
    m = L;
    try {
      return C();
    } finally {
      m = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, L) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var R = m;
    m = C;
    try {
      return L();
    } finally {
      m = R;
    }
  }, e.unstable_scheduleCallback = function(C, L, R) {
    var B = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? B + R : B) : R = B, C) {
      case 1:
        var Q = -1;
        break;
      case 2:
        Q = 250;
        break;
      case 5:
        Q = 1073741823;
        break;
      case 4:
        Q = 1e4;
        break;
      default:
        Q = 5e3;
    }
    return Q = R + Q, C = { id: h++, callback: L, priorityLevel: C, startTime: R, expirationTime: Q, sortIndex: -1 }, R > B ? (C.sortIndex = R, t(c, C), n(s) === null && C === n(c) && (g ? (f(E), E = -1) : g = !0, Ye(y, R - B))) : (C.sortIndex = Q, t(s, C), v || w || (v = !0, Nn(k))), C;
  }, e.unstable_shouldYield = ke, e.unstable_wrapCallback = function(C) {
    var L = m;
    return function() {
      var R = m;
      m = L;
      try {
        return C.apply(this, arguments);
      } finally {
        m = R;
      }
    };
  };
})(ra);
na.exports = ra;
var Df = na.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var la = P, _e = Df;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var oa = /* @__PURE__ */ new Set(), Gn = {};
function Wt(e, t) {
  mn(e, t), mn(e + "Capture", t);
}
function mn(e, t) {
  for (Gn[e] = t, e = 0; e < t.length; e++) oa.add(t[e]);
}
var nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), To = Object.prototype.hasOwnProperty, Ff = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ou = {}, Ru = {};
function Mf(e) {
  return To.call(Ru, e) ? !0 : To.call(Ou, e) ? !1 : Ff.test(e) ? Ru[e] = !0 : (Ou[e] = !0, !1);
}
function Af(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Uf(e, t, n, r) {
  if (t === null || typeof t > "u" || Af(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function me(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ie[e] = new me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ie[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ie[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ie[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ie[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ie[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ie[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ie[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ie[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ri = /[\-:]([a-z])/g;
function Ii(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ri,
    Ii
  );
  ie[t] = new me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ri, Ii);
  ie[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ri, Ii);
  ie[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zi(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Uf(t, n, l, r) && (n = null), r || l === null ? Mf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ut = la.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Cr = Symbol.for("react.element"), Gt = Symbol.for("react.portal"), Zt = Symbol.for("react.fragment"), $i = Symbol.for("react.strict_mode"), Lo = Symbol.for("react.profiler"), ia = Symbol.for("react.provider"), ua = Symbol.for("react.context"), ji = Symbol.for("react.forward_ref"), Oo = Symbol.for("react.suspense"), Ro = Symbol.for("react.suspense_list"), Di = Symbol.for("react.memo"), ct = Symbol.for("react.lazy"), sa = Symbol.for("react.offscreen"), Iu = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object" ? null : (e = Iu && e[Iu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, Yl;
function Dn(e) {
  if (Yl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Yl = t && t[1] || "";
  }
  return `
` + Yl + e;
}
var Xl = !1;
function Gl(e, t) {
  if (!e || Xl) return "";
  Xl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    Xl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Dn(e) : "";
}
function Hf(e) {
  switch (e.tag) {
    case 5:
      return Dn(e.type);
    case 16:
      return Dn("Lazy");
    case 13:
      return Dn("Suspense");
    case 19:
      return Dn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Gl(e.type, !1), e;
    case 11:
      return e = Gl(e.type.render, !1), e;
    case 1:
      return e = Gl(e.type, !0), e;
    default:
      return "";
  }
}
function Io(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zt:
      return "Fragment";
    case Gt:
      return "Portal";
    case Lo:
      return "Profiler";
    case $i:
      return "StrictMode";
    case Oo:
      return "Suspense";
    case Ro:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ua:
      return (e.displayName || "Context") + ".Consumer";
    case ia:
      return (e._context.displayName || "Context") + ".Provider";
    case ji:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Di:
      return t = e.displayName || null, t !== null ? t : Io(e.type) || "Memo";
    case ct:
      t = e._payload, e = e._init;
      try {
        return Io(e(t));
      } catch {
      }
  }
  return null;
}
function Vf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Io(t);
    case 8:
      return t === $i ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ct(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function aa(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Bf(e) {
  var t = aa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function _r(e) {
  e._valueTracker || (e._valueTracker = Bf(e));
}
function ca(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = aa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function nl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zo(e, t) {
  var n = t.checked;
  return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function zu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ct(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function fa(e, t) {
  t = t.checked, t != null && zi(e, "checked", t, !1);
}
function $o(e, t) {
  fa(e, t);
  var n = Ct(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? jo(e, t.type, n) : t.hasOwnProperty("defaultValue") && jo(e, t.type, Ct(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function $u(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function jo(e, t, n) {
  (t !== "number" || nl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fn = Array.isArray;
function sn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ct(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Do(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ju(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (Fn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ct(n) };
}
function da(e, t) {
  var n = Ct(t.value), r = Ct(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Du(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function pa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? pa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Pr, ma = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Pr = Pr || document.createElement("div"), Pr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Pr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Zn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Un = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Qf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Un).forEach(function(e) {
  Qf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Un[t] = Un[e];
  });
});
function ha(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + t).trim() : t + "px";
}
function va(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = ha(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Wf = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Mo(e, t) {
  if (t) {
    if (Wf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Ao(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Uo = null;
function Fi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ho = null, an = null, cn = null;
function Fu(e) {
  if (e = yr(e)) {
    if (typeof Ho != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Rl(t), Ho(e.stateNode, e.type, t));
  }
}
function ya(e) {
  an ? cn ? cn.push(e) : cn = [e] : an = e;
}
function ga() {
  if (an) {
    var e = an, t = cn;
    if (cn = an = null, Fu(e), t) for (e = 0; e < t.length; e++) Fu(t[e]);
  }
}
function wa(e, t) {
  return e(t);
}
function Sa() {
}
var Zl = !1;
function ka(e, t, n) {
  if (Zl) return e(t, n);
  Zl = !0;
  try {
    return wa(e, t, n);
  } finally {
    Zl = !1, (an !== null || cn !== null) && (Sa(), ga());
  }
}
function Jn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Rl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Vo = !1;
if (nt) try {
  var Ln = {};
  Object.defineProperty(Ln, "passive", { get: function() {
    Vo = !0;
  } }), window.addEventListener("test", Ln, Ln), window.removeEventListener("test", Ln, Ln);
} catch {
  Vo = !1;
}
function Kf(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Hn = !1, rl = null, ll = !1, Bo = null, Yf = { onError: function(e) {
  Hn = !0, rl = e;
} };
function Xf(e, t, n, r, l, o, i, u, s) {
  Hn = !1, rl = null, Kf.apply(Yf, arguments);
}
function Gf(e, t, n, r, l, o, i, u, s) {
  if (Xf.apply(this, arguments), Hn) {
    if (Hn) {
      var c = rl;
      Hn = !1, rl = null;
    } else throw Error(S(198));
    ll || (ll = !0, Bo = c);
  }
}
function Kt(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Mu(e) {
  if (Kt(e) !== e) throw Error(S(188));
}
function Zf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Kt(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Mu(l), e;
        if (o === r) return Mu(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Ea(e) {
  return e = Zf(e), e !== null ? Ca(e) : null;
}
function Ca(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ca(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _a = _e.unstable_scheduleCallback, Au = _e.unstable_cancelCallback, Jf = _e.unstable_shouldYield, qf = _e.unstable_requestPaint, J = _e.unstable_now, bf = _e.unstable_getCurrentPriorityLevel, Mi = _e.unstable_ImmediatePriority, Pa = _e.unstable_UserBlockingPriority, ol = _e.unstable_NormalPriority, ed = _e.unstable_LowPriority, Na = _e.unstable_IdlePriority, Nl = null, We = null;
function td(e) {
  if (We && typeof We.onCommitFiberRoot == "function") try {
    We.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Me = Math.clz32 ? Math.clz32 : ld, nd = Math.log, rd = Math.LN2;
function ld(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (nd(e) / rd | 0) | 0;
}
var Nr = 64, Tr = 4194304;
function Mn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function il(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Mn(u) : (o &= i, o !== 0 && (r = Mn(o)));
  } else i = n & ~l, i !== 0 ? r = Mn(i) : o !== 0 && (r = Mn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Me(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function od(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function id(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Me(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = od(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Qo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ta() {
  var e = Nr;
  return Nr <<= 1, !(Nr & 4194240) && (Nr = 64), e;
}
function Jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Me(t), e[t] = n;
}
function ud(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Ai(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var D = 0;
function La(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Oa, Ui, Ra, Ia, za, Wo = !1, Lr = [], vt = null, yt = null, gt = null, qn = /* @__PURE__ */ new Map(), bn = /* @__PURE__ */ new Map(), dt = [], sd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vt = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      gt = null;
      break;
    case "pointerover":
    case "pointerout":
      qn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bn.delete(t.pointerId);
  }
}
function On(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = yr(t), t !== null && Ui(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function ad(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return vt = On(vt, e, t, n, r, l), !0;
    case "dragenter":
      return yt = On(yt, e, t, n, r, l), !0;
    case "mouseover":
      return gt = On(gt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return qn.set(o, On(qn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, bn.set(o, On(bn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function $a(e) {
  var t = $t(e.target);
  if (t !== null) {
    var n = Kt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = xa(n), t !== null) {
          e.blockedOn = t, za(e.priority, function() {
            Ra(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Uo = r, n.target.dispatchEvent(r), Uo = null;
    } else return t = yr(n), t !== null && Ui(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Hu(e, t, n) {
  Kr(e) && n.delete(t);
}
function cd() {
  Wo = !1, vt !== null && Kr(vt) && (vt = null), yt !== null && Kr(yt) && (yt = null), gt !== null && Kr(gt) && (gt = null), qn.forEach(Hu), bn.forEach(Hu);
}
function Rn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Wo || (Wo = !0, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, cd)));
}
function er(e) {
  function t(l) {
    return Rn(l, e);
  }
  if (0 < Lr.length) {
    Rn(Lr[0], e);
    for (var n = 1; n < Lr.length; n++) {
      var r = Lr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (vt !== null && Rn(vt, e), yt !== null && Rn(yt, e), gt !== null && Rn(gt, e), qn.forEach(t), bn.forEach(t), n = 0; n < dt.length; n++) r = dt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dt.length && (n = dt[0], n.blockedOn === null); ) $a(n), n.blockedOn === null && dt.shift();
}
var fn = ut.ReactCurrentBatchConfig, ul = !0;
function fd(e, t, n, r) {
  var l = D, o = fn.transition;
  fn.transition = null;
  try {
    D = 1, Hi(e, t, n, r);
  } finally {
    D = l, fn.transition = o;
  }
}
function dd(e, t, n, r) {
  var l = D, o = fn.transition;
  fn.transition = null;
  try {
    D = 4, Hi(e, t, n, r);
  } finally {
    D = l, fn.transition = o;
  }
}
function Hi(e, t, n, r) {
  if (ul) {
    var l = Ko(e, t, n, r);
    if (l === null) uo(e, t, r, sl, n), Uu(e, r);
    else if (ad(l, e, t, n, r)) r.stopPropagation();
    else if (Uu(e, r), t & 4 && -1 < sd.indexOf(e)) {
      for (; l !== null; ) {
        var o = yr(l);
        if (o !== null && Oa(o), o = Ko(e, t, n, r), o === null && uo(e, t, r, sl, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else uo(e, t, r, null, n);
  }
}
var sl = null;
function Ko(e, t, n, r) {
  if (sl = null, e = Fi(r), e = $t(e), e !== null) if (t = Kt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = xa(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return sl = e, null;
}
function ja(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (bf()) {
        case Mi:
          return 1;
        case Pa:
          return 4;
        case ol:
        case ed:
          return 16;
        case Na:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mt = null, Vi = null, Yr = null;
function Da() {
  if (Yr) return Yr;
  var e, t = Vi, n = t.length, r, l = "value" in mt ? mt.value : mt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Yr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Xr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Or() {
  return !0;
}
function Vu() {
  return !1;
}
function Ne(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Or : Vu, this.isPropagationStopped = Vu, this;
  }
  return G(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Or);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Or);
  }, persist: function() {
  }, isPersistent: Or }), t;
}
var En = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Bi = Ne(En), vr = G({}, En, { view: 0, detail: 0 }), pd = Ne(vr), ql, bl, In, Tl = G({}, vr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== In && (In && e.type === "mousemove" ? (ql = e.screenX - In.screenX, bl = e.screenY - In.screenY) : bl = ql = 0, In = e), ql);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : bl;
} }), Bu = Ne(Tl), md = G({}, Tl, { dataTransfer: 0 }), hd = Ne(md), vd = G({}, vr, { relatedTarget: 0 }), eo = Ne(vd), yd = G({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gd = Ne(yd), wd = G({}, En, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Sd = Ne(wd), kd = G({}, En, { data: 0 }), Qu = Ne(kd), xd = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Ed = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Cd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function _d(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cd[e]) ? !!t[e] : !1;
}
function Qi() {
  return _d;
}
var Pd = G({}, vr, { key: function(e) {
  if (e.key) {
    var t = xd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Xr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ed[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qi, charCode: function(e) {
  return e.type === "keypress" ? Xr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Xr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Nd = Ne(Pd), Td = G({}, Tl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Wu = Ne(Td), Ld = G({}, vr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qi }), Od = Ne(Ld), Rd = G({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Id = Ne(Rd), zd = G({}, Tl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $d = Ne(zd), jd = [9, 13, 27, 32], Wi = nt && "CompositionEvent" in window, Vn = null;
nt && "documentMode" in document && (Vn = document.documentMode);
var Dd = nt && "TextEvent" in window && !Vn, Fa = nt && (!Wi || Vn && 8 < Vn && 11 >= Vn), Ku = " ", Yu = !1;
function Ma(e, t) {
  switch (e) {
    case "keyup":
      return jd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Aa(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Jt = !1;
function Fd(e, t) {
  switch (e) {
    case "compositionend":
      return Aa(t);
    case "keypress":
      return t.which !== 32 ? null : (Yu = !0, Ku);
    case "textInput":
      return e = t.data, e === Ku && Yu ? null : e;
    default:
      return null;
  }
}
function Md(e, t) {
  if (Jt) return e === "compositionend" || !Wi && Ma(e, t) ? (e = Da(), Yr = Vi = mt = null, Jt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Fa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ad = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ad[e.type] : t === "textarea";
}
function Ua(e, t, n, r) {
  ya(r), t = al(t, "onChange"), 0 < t.length && (n = new Bi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Bn = null, tr = null;
function Ud(e) {
  Ja(e, 0);
}
function Ll(e) {
  var t = en(e);
  if (ca(t)) return e;
}
function Hd(e, t) {
  if (e === "change") return t;
}
var Ha = !1;
if (nt) {
  var to;
  if (nt) {
    var no = "oninput" in document;
    if (!no) {
      var Gu = document.createElement("div");
      Gu.setAttribute("oninput", "return;"), no = typeof Gu.oninput == "function";
    }
    to = no;
  } else to = !1;
  Ha = to && (!document.documentMode || 9 < document.documentMode);
}
function Zu() {
  Bn && (Bn.detachEvent("onpropertychange", Va), tr = Bn = null);
}
function Va(e) {
  if (e.propertyName === "value" && Ll(tr)) {
    var t = [];
    Ua(t, tr, e, Fi(e)), ka(Ud, t);
  }
}
function Vd(e, t, n) {
  e === "focusin" ? (Zu(), Bn = t, tr = n, Bn.attachEvent("onpropertychange", Va)) : e === "focusout" && Zu();
}
function Bd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ll(tr);
}
function Qd(e, t) {
  if (e === "click") return Ll(t);
}
function Wd(e, t) {
  if (e === "input" || e === "change") return Ll(t);
}
function Kd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ue = typeof Object.is == "function" ? Object.is : Kd;
function nr(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!To.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function Ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qu(e, t) {
  var n = Ju(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ju(n);
  }
}
function Ba(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ba(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Qa() {
  for (var e = window, t = nl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = nl(e.document);
  }
  return t;
}
function Ki(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Yd(e) {
  var t = Qa(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ba(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ki(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = qu(n, o);
        var i = qu(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Xd = nt && "documentMode" in document && 11 >= document.documentMode, qt = null, Yo = null, Qn = null, Xo = !1;
function bu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xo || qt == null || qt !== nl(r) || (r = qt, "selectionStart" in r && Ki(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Qn && nr(Qn, r) || (Qn = r, r = al(Yo, "onSelect"), 0 < r.length && (t = new Bi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = qt)));
}
function Rr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var bt = { animationend: Rr("Animation", "AnimationEnd"), animationiteration: Rr("Animation", "AnimationIteration"), animationstart: Rr("Animation", "AnimationStart"), transitionend: Rr("Transition", "TransitionEnd") }, ro = {}, Wa = {};
nt && (Wa = document.createElement("div").style, "AnimationEvent" in window || (delete bt.animationend.animation, delete bt.animationiteration.animation, delete bt.animationstart.animation), "TransitionEvent" in window || delete bt.transitionend.transition);
function Ol(e) {
  if (ro[e]) return ro[e];
  if (!bt[e]) return e;
  var t = bt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wa) return ro[e] = t[n];
  return e;
}
var Ka = Ol("animationend"), Ya = Ol("animationiteration"), Xa = Ol("animationstart"), Ga = Ol("transitionend"), Za = /* @__PURE__ */ new Map(), es = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Pt(e, t) {
  Za.set(e, t), Wt(t, [e]);
}
for (var lo = 0; lo < es.length; lo++) {
  var oo = es[lo], Gd = oo.toLowerCase(), Zd = oo[0].toUpperCase() + oo.slice(1);
  Pt(Gd, "on" + Zd);
}
Pt(Ka, "onAnimationEnd");
Pt(Ya, "onAnimationIteration");
Pt(Xa, "onAnimationStart");
Pt("dblclick", "onDoubleClick");
Pt("focusin", "onFocus");
Pt("focusout", "onBlur");
Pt(Ga, "onTransitionEnd");
mn("onMouseEnter", ["mouseout", "mouseover"]);
mn("onMouseLeave", ["mouseout", "mouseover"]);
mn("onPointerEnter", ["pointerout", "pointerover"]);
mn("onPointerLeave", ["pointerout", "pointerover"]);
Wt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jd = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));
function ts(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Gf(r, t, void 0, e), e.currentTarget = null;
}
function Ja(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        ts(l, u, c), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        ts(l, u, c), o = s;
      }
    }
  }
  if (ll) throw e = Bo, ll = !1, Bo = null, e;
}
function A(e, t) {
  var n = t[bo];
  n === void 0 && (n = t[bo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (qa(t, e, 2, !1), n.add(r));
}
function io(e, t, n) {
  var r = 0;
  t && (r |= 4), qa(n, e, r, t);
}
var Ir = "_reactListening" + Math.random().toString(36).slice(2);
function rr(e) {
  if (!e[Ir]) {
    e[Ir] = !0, oa.forEach(function(n) {
      n !== "selectionchange" && (Jd.has(n) || io(n, !1, e), io(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ir] || (t[Ir] = !0, io("selectionchange", !1, t));
  }
}
function qa(e, t, n, r) {
  switch (ja(t)) {
    case 1:
      var l = fd;
      break;
    case 4:
      l = dd;
      break;
    default:
      l = Hi;
  }
  n = l.bind(null, t, n, e), l = void 0, !Vo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function uo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = $t(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  ka(function() {
    var c = o, h = Fi(n), p = [];
    e: {
      var m = Za.get(e);
      if (m !== void 0) {
        var w = Bi, v = e;
        switch (e) {
          case "keypress":
            if (Xr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Nd;
            break;
          case "focusin":
            v = "focus", w = eo;
            break;
          case "focusout":
            v = "blur", w = eo;
            break;
          case "beforeblur":
          case "afterblur":
            w = eo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Bu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = hd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Od;
            break;
          case Ka:
          case Ya:
          case Xa:
            w = gd;
            break;
          case Ga:
            w = Id;
            break;
          case "scroll":
            w = pd;
            break;
          case "wheel":
            w = $d;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Sd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Wu;
        }
        var g = (t & 4) !== 0, T = !g && e === "scroll", f = g ? m !== null ? m + "Capture" : null : m;
        g = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (d.tag === 5 && y !== null && (d = y, f !== null && (y = Jn(a, f), y != null && g.push(lr(a, y, d)))), T) break;
          a = a.return;
        }
        0 < g.length && (m = new w(m, v, null, n, h), p.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", m && n !== Uo && (v = n.relatedTarget || n.fromElement) && ($t(v) || v[rt])) break e;
        if ((w || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, w ? (v = n.relatedTarget || n.toElement, w = c, v = v ? $t(v) : null, v !== null && (T = Kt(v), v !== T || v.tag !== 5 && v.tag !== 6) && (v = null)) : (w = null, v = c), w !== v)) {
          if (g = Bu, y = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (g = Wu, y = "onPointerLeave", f = "onPointerEnter", a = "pointer"), T = w == null ? m : en(w), d = v == null ? m : en(v), m = new g(y, a + "leave", w, n, h), m.target = T, m.relatedTarget = d, y = null, $t(h) === c && (g = new g(f, a + "enter", v, n, h), g.target = d, g.relatedTarget = T, y = g), T = y, w && v) t: {
            for (g = w, f = v, a = 0, d = g; d; d = Xt(d)) a++;
            for (d = 0, y = f; y; y = Xt(y)) d++;
            for (; 0 < a - d; ) g = Xt(g), a--;
            for (; 0 < d - a; ) f = Xt(f), d--;
            for (; a--; ) {
              if (g === f || f !== null && g === f.alternate) break t;
              g = Xt(g), f = Xt(f);
            }
            g = null;
          }
          else g = null;
          w !== null && ns(p, m, w, g, !1), v !== null && T !== null && ns(p, T, v, g, !0);
        }
      }
      e: {
        if (m = c ? en(c) : window, w = m.nodeName && m.nodeName.toLowerCase(), w === "select" || w === "input" && m.type === "file") var k = Hd;
        else if (Xu(m)) if (Ha) k = Wd;
        else {
          k = Bd;
          var x = Vd;
        }
        else (w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (k = Qd);
        if (k && (k = k(e, c))) {
          Ua(p, k, n, h);
          break e;
        }
        x && x(e, m, c), e === "focusout" && (x = m._wrapperState) && x.controlled && m.type === "number" && jo(m, "number", m.value);
      }
      switch (x = c ? en(c) : window, e) {
        case "focusin":
          (Xu(x) || x.contentEditable === "true") && (qt = x, Yo = c, Qn = null);
          break;
        case "focusout":
          Qn = Yo = qt = null;
          break;
        case "mousedown":
          Xo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Xo = !1, bu(p, n, h);
          break;
        case "selectionchange":
          if (Xd) break;
        case "keydown":
        case "keyup":
          bu(p, n, h);
      }
      var N;
      if (Wi) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else Jt ? Ma(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Fa && n.locale !== "ko" && (Jt || E !== "onCompositionStart" ? E === "onCompositionEnd" && Jt && (N = Da()) : (mt = h, Vi = "value" in mt ? mt.value : mt.textContent, Jt = !0)), x = al(c, E), 0 < x.length && (E = new Qu(E, e, null, n, h), p.push({ event: E, listeners: x }), N ? E.data = N : (N = Aa(n), N !== null && (E.data = N)))), (N = Dd ? Fd(e, n) : Md(e, n)) && (c = al(c, "onBeforeInput"), 0 < c.length && (h = new Qu("onBeforeInput", "beforeinput", null, n, h), p.push({ event: h, listeners: c }), h.data = N));
    }
    Ja(p, t);
  });
}
function lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function al(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Jn(e, n), o != null && r.unshift(lr(e, o, l)), o = Jn(e, t), o != null && r.push(lr(e, o, l))), e = e.return;
  }
  return r;
}
function Xt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ns(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Jn(n, o), s != null && i.unshift(lr(n, s, u))) : l || (s = Jn(n, o), s != null && i.push(lr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var qd = /\r\n?/g, bd = /\u0000|\uFFFD/g;
function rs(e) {
  return (typeof e == "string" ? e : "" + e).replace(qd, `
`).replace(bd, "");
}
function zr(e, t, n) {
  if (t = rs(t), rs(e) !== t && n) throw Error(S(425));
}
function cl() {
}
var Go = null, Zo = null;
function Jo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qo = typeof setTimeout == "function" ? setTimeout : void 0, ep = typeof clearTimeout == "function" ? clearTimeout : void 0, ls = typeof Promise == "function" ? Promise : void 0, tp = typeof queueMicrotask == "function" ? queueMicrotask : typeof ls < "u" ? function(e) {
  return ls.resolve(null).then(e).catch(np);
} : qo;
function np(e) {
  setTimeout(function() {
    throw e;
  });
}
function so(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), er(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  er(t);
}
function wt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function os(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Cn = Math.random().toString(36).slice(2), Be = "__reactFiber$" + Cn, or = "__reactProps$" + Cn, rt = "__reactContainer$" + Cn, bo = "__reactEvents$" + Cn, rp = "__reactListeners$" + Cn, lp = "__reactHandles$" + Cn;
function $t(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[rt] || n[Be]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = os(e); e !== null; ) {
        if (n = e[Be]) return n;
        e = os(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function yr(e) {
  return e = e[Be] || e[rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function en(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Rl(e) {
  return e[or] || null;
}
var ei = [], tn = -1;
function Nt(e) {
  return { current: e };
}
function U(e) {
  0 > tn || (e.current = ei[tn], ei[tn] = null, tn--);
}
function M(e, t) {
  tn++, ei[tn] = e.current, e.current = t;
}
var _t = {}, ce = Nt(_t), ge = Nt(!1), Ut = _t;
function hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function we(e) {
  return e = e.childContextTypes, e != null;
}
function fl() {
  U(ge), U(ce);
}
function is(e, t, n) {
  if (ce.current !== _t) throw Error(S(168));
  M(ce, t), M(ge, n);
}
function ba(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Vf(e) || "Unknown", l));
  return G({}, n, r);
}
function dl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _t, Ut = ce.current, M(ce, e), M(ge, ge.current), !0;
}
function us(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = ba(e, t, Ut), r.__reactInternalMemoizedMergedChildContext = e, U(ge), U(ce), M(ce, e)) : U(ge), M(ge, n);
}
var Ze = null, Il = !1, ao = !1;
function ec(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
function op(e) {
  Il = !0, ec(e);
}
function Tt() {
  if (!ao && Ze !== null) {
    ao = !0;
    var e = 0, t = D;
    try {
      var n = Ze;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ze = null, Il = !1;
    } catch (l) {
      throw Ze !== null && (Ze = Ze.slice(e + 1)), _a(Mi, Tt), l;
    } finally {
      D = t, ao = !1;
    }
  }
  return null;
}
var nn = [], rn = 0, pl = null, ml = 0, Te = [], Le = 0, Ht = null, Je = 1, qe = "";
function It(e, t) {
  nn[rn++] = ml, nn[rn++] = pl, pl = e, ml = t;
}
function tc(e, t, n) {
  Te[Le++] = Je, Te[Le++] = qe, Te[Le++] = Ht, Ht = e;
  var r = Je;
  e = qe;
  var l = 32 - Me(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Me(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Je = 1 << 32 - Me(t) + l | n << l | r, qe = o + e;
  } else Je = 1 << o | n << l | r, qe = e;
}
function Yi(e) {
  e.return !== null && (It(e, 1), tc(e, 1, 0));
}
function Xi(e) {
  for (; e === pl; ) pl = nn[--rn], nn[rn] = null, ml = nn[--rn], nn[rn] = null;
  for (; e === Ht; ) Ht = Te[--Le], Te[Le] = null, qe = Te[--Le], Te[Le] = null, Je = Te[--Le], Te[Le] = null;
}
var Ce = null, Ee = null, H = !1, Fe = null;
function nc(e, t) {
  var n = Oe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ss(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ce = e, Ee = wt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ce = e, Ee = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ht !== null ? { id: Je, overflow: qe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Oe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ce = e, Ee = null, !0) : !1;
    default:
      return !1;
  }
}
function ti(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ni(e) {
  if (H) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!ss(e, t)) {
        if (ti(e)) throw Error(S(418));
        t = wt(n.nextSibling);
        var r = Ce;
        t && ss(e, t) ? nc(r, n) : (e.flags = e.flags & -4097 | 2, H = !1, Ce = e);
      }
    } else {
      if (ti(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, H = !1, Ce = e;
    }
  }
}
function as(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ce = e;
}
function $r(e) {
  if (e !== Ce) return !1;
  if (!H) return as(e), H = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Jo(e.type, e.memoizedProps)), t && (t = Ee)) {
    if (ti(e)) throw rc(), Error(S(418));
    for (; t; ) nc(e, t), t = wt(t.nextSibling);
  }
  if (as(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = wt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ce ? wt(e.stateNode.nextSibling) : null;
  return !0;
}
function rc() {
  for (var e = Ee; e; ) e = wt(e.nextSibling);
}
function vn() {
  Ee = Ce = null, H = !1;
}
function Gi(e) {
  Fe === null ? Fe = [e] : Fe.push(e);
}
var ip = ut.ReactCurrentBatchConfig;
function je(e, t) {
  if (e && e.defaultProps) {
    t = G({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var hl = Nt(null), vl = null, ln = null, Zi = null;
function Ji() {
  Zi = ln = vl = null;
}
function qi(e) {
  var t = hl.current;
  U(hl), e._currentValue = t;
}
function ri(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function dn(e, t) {
  vl = e, Zi = ln = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ve = !0), e.firstContext = null);
}
function Ie(e) {
  var t = e._currentValue;
  if (Zi !== e) if (e = { context: e, memoizedValue: t, next: null }, ln === null) {
    if (vl === null) throw Error(S(308));
    ln = e, vl.dependencies = { lanes: 0, firstContext: e };
  } else ln = ln.next = e;
  return t;
}
var jt = null;
function bi(e) {
  jt === null ? jt = [e] : jt.push(e);
}
function lc(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, bi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, lt(e, r);
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ft = !1;
function eu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function oc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function be(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function St(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, j & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, lt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, bi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, lt(e, n);
}
function Gr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ai(e, n);
  }
}
function cs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function yl(e, t, n, r) {
  var l = e.updateQueue;
  ft = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var p = l.baseState;
    i = 0, h = c = s = null, u = o;
    do {
      var m = u.lane, w = u.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: w,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var v = e, g = u;
          switch (m = t, w = n, g.tag) {
            case 1:
              if (v = g.payload, typeof v == "function") {
                p = v.call(w, p, m);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = g.payload, m = typeof v == "function" ? v.call(w, p, m) : v, m == null) break e;
              p = G({}, p, m);
              break e;
            case 2:
              ft = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else w = { eventTime: w, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = w, s = p) : h = h.next = w, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = p), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Bt |= i, e.lanes = i, e.memoizedState = p;
  }
}
function fs(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var ic = new la.Component().refs;
function li(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Kt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = de(), l = xt(e), o = be(r, l);
  o.payload = t, n != null && (o.callback = n), t = St(e, o, l), t !== null && (Ae(t, e, l, r), Gr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = de(), l = xt(e), o = be(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = St(e, o, l), t !== null && (Ae(t, e, l, r), Gr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = de(), r = xt(e), l = be(n, r);
  l.tag = 2, t != null && (l.callback = t), t = St(e, l, r), t !== null && (Ae(t, e, r, n), Gr(t, e, r));
} };
function ds(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !nr(n, r) || !nr(l, o) : !0;
}
function uc(e, t, n) {
  var r = !1, l = _t, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ie(o) : (l = we(t) ? Ut : ce.current, r = t.contextTypes, o = (r = r != null) ? hn(e, l) : _t), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ps(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zl.enqueueReplaceState(t, t.state, null);
}
function oi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = ic, eu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ie(o) : (o = we(t) ? Ut : ce.current, l.context = hn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (li(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && zl.enqueueReplaceState(l, l.state, null), yl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === ic && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function jr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ms(e) {
  var t = e._init;
  return t(e._payload);
}
function sc(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = Et(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, y) {
    return a === null || a.tag !== 6 ? (a = yo(d, f.mode, y), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, y) {
    var k = d.type;
    return k === Zt ? h(f, a, d.props.children, y, d.key) : a !== null && (a.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ct && ms(k) === a.type) ? (y = l(a, d.props), y.ref = zn(f, a, d), y.return = f, y) : (y = tl(d.type, d.key, d.props, null, f.mode, y), y.ref = zn(f, a, d), y.return = f, y);
  }
  function c(f, a, d, y) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = go(d, f.mode, y), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, y, k) {
    return a === null || a.tag !== 7 ? (a = Mt(d, f.mode, y, k), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function p(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = yo("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case Cr:
          return d = tl(a.type, a.key, a.props, null, f.mode, d), d.ref = zn(f, null, a), d.return = f, d;
        case Gt:
          return a = go(a, f.mode, d), a.return = f, a;
        case ct:
          var y = a._init;
          return p(f, y(a._payload), d);
      }
      if (Fn(a) || Tn(a)) return a = Mt(a, f.mode, d, null), a.return = f, a;
      jr(f, a);
    }
    return null;
  }
  function m(f, a, d, y) {
    var k = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return k !== null ? null : u(f, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Cr:
          return d.key === k ? s(f, a, d, y) : null;
        case Gt:
          return d.key === k ? c(f, a, d, y) : null;
        case ct:
          return k = d._init, m(
            f,
            a,
            k(d._payload),
            y
          );
      }
      if (Fn(d) || Tn(d)) return k !== null ? null : h(f, a, d, y, null);
      jr(f, d);
    }
    return null;
  }
  function w(f, a, d, y, k) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(d) || null, u(a, f, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Cr:
          return f = f.get(y.key === null ? d : y.key) || null, s(a, f, y, k);
        case Gt:
          return f = f.get(y.key === null ? d : y.key) || null, c(a, f, y, k);
        case ct:
          var x = y._init;
          return w(f, a, d, x(y._payload), k);
      }
      if (Fn(y) || Tn(y)) return f = f.get(d) || null, h(a, f, y, k, null);
      jr(a, y);
    }
    return null;
  }
  function v(f, a, d, y) {
    for (var k = null, x = null, N = a, E = a = 0, V = null; N !== null && E < d.length; E++) {
      N.index > E ? (V = N, N = null) : V = N.sibling;
      var z = m(f, N, d[E], y);
      if (z === null) {
        N === null && (N = V);
        break;
      }
      e && N && z.alternate === null && t(f, N), a = o(z, a, E), x === null ? k = z : x.sibling = z, x = z, N = V;
    }
    if (E === d.length) return n(f, N), H && It(f, E), k;
    if (N === null) {
      for (; E < d.length; E++) N = p(f, d[E], y), N !== null && (a = o(N, a, E), x === null ? k = N : x.sibling = N, x = N);
      return H && It(f, E), k;
    }
    for (N = r(f, N); E < d.length; E++) V = w(N, f, E, d[E], y), V !== null && (e && V.alternate !== null && N.delete(V.key === null ? E : V.key), a = o(V, a, E), x === null ? k = V : x.sibling = V, x = V);
    return e && N.forEach(function(ke) {
      return t(f, ke);
    }), H && It(f, E), k;
  }
  function g(f, a, d, y) {
    var k = Tn(d);
    if (typeof k != "function") throw Error(S(150));
    if (d = k.call(d), d == null) throw Error(S(151));
    for (var x = k = null, N = a, E = a = 0, V = null, z = d.next(); N !== null && !z.done; E++, z = d.next()) {
      N.index > E ? (V = N, N = null) : V = N.sibling;
      var ke = m(f, N, z.value, y);
      if (ke === null) {
        N === null && (N = V);
        break;
      }
      e && N && ke.alternate === null && t(f, N), a = o(ke, a, E), x === null ? k = ke : x.sibling = ke, x = ke, N = V;
    }
    if (z.done) return n(
      f,
      N
    ), H && It(f, E), k;
    if (N === null) {
      for (; !z.done; E++, z = d.next()) z = p(f, z.value, y), z !== null && (a = o(z, a, E), x === null ? k = z : x.sibling = z, x = z);
      return H && It(f, E), k;
    }
    for (N = r(f, N); !z.done; E++, z = d.next()) z = w(N, f, E, z.value, y), z !== null && (e && z.alternate !== null && N.delete(z.key === null ? E : z.key), a = o(z, a, E), x === null ? k = z : x.sibling = z, x = z);
    return e && N.forEach(function(Lt) {
      return t(f, Lt);
    }), H && It(f, E), k;
  }
  function T(f, a, d, y) {
    if (typeof d == "object" && d !== null && d.type === Zt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Cr:
          e: {
            for (var k = d.key, x = a; x !== null; ) {
              if (x.key === k) {
                if (k = d.type, k === Zt) {
                  if (x.tag === 7) {
                    n(f, x.sibling), a = l(x, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (x.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ct && ms(k) === x.type) {
                  n(f, x.sibling), a = l(x, d.props), a.ref = zn(f, x, d), a.return = f, f = a;
                  break e;
                }
                n(f, x);
                break;
              } else t(f, x);
              x = x.sibling;
            }
            d.type === Zt ? (a = Mt(d.props.children, f.mode, y, d.key), a.return = f, f = a) : (y = tl(d.type, d.key, d.props, null, f.mode, y), y.ref = zn(f, a, d), y.return = f, f = y);
          }
          return i(f);
        case Gt:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = go(d, f.mode, y), a.return = f, f = a;
          }
          return i(f);
        case ct:
          return x = d._init, T(f, a, x(d._payload), y);
      }
      if (Fn(d)) return v(f, a, d, y);
      if (Tn(d)) return g(f, a, d, y);
      jr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = yo(d, f.mode, y), a.return = f, f = a), i(f)) : n(f, a);
  }
  return T;
}
var yn = sc(!0), ac = sc(!1), gr = {}, Ke = Nt(gr), ir = Nt(gr), ur = Nt(gr);
function Dt(e) {
  if (e === gr) throw Error(S(174));
  return e;
}
function tu(e, t) {
  switch (M(ur, t), M(ir, e), M(Ke, gr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fo(t, e);
  }
  U(Ke), M(Ke, t);
}
function gn() {
  U(Ke), U(ir), U(ur);
}
function cc(e) {
  Dt(ur.current);
  var t = Dt(Ke.current), n = Fo(t, e.type);
  t !== n && (M(ir, e), M(Ke, n));
}
function nu(e) {
  ir.current === e && (U(Ke), U(ir));
}
var Y = Nt(0);
function gl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var co = [];
function ru() {
  for (var e = 0; e < co.length; e++) co[e]._workInProgressVersionPrimary = null;
  co.length = 0;
}
var Zr = ut.ReactCurrentDispatcher, fo = ut.ReactCurrentBatchConfig, Vt = 0, X = null, b = null, ne = null, wl = !1, Wn = !1, sr = 0, up = 0;
function ue() {
  throw Error(S(321));
}
function lu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function ou(e, t, n, r, l, o) {
  if (Vt = o, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Zr.current = e === null || e.memoizedState === null ? fp : dp, e = n(r, l), Wn) {
    o = 0;
    do {
      if (Wn = !1, sr = 0, 25 <= o) throw Error(S(301));
      o += 1, ne = b = null, t.updateQueue = null, Zr.current = pp, e = n(r, l);
    } while (Wn);
  }
  if (Zr.current = Sl, t = b !== null && b.next !== null, Vt = 0, ne = b = X = null, wl = !1, t) throw Error(S(300));
  return e;
}
function iu() {
  var e = sr !== 0;
  return sr = 0, e;
}
function Ve() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ne === null ? X.memoizedState = ne = e : ne = ne.next = e, ne;
}
function ze() {
  if (b === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var t = ne === null ? X.memoizedState : ne.next;
  if (t !== null) ne = t, b = e;
  else {
    if (e === null) throw Error(S(310));
    b = e, e = { memoizedState: b.memoizedState, baseState: b.baseState, baseQueue: b.baseQueue, queue: b.queue, next: null }, ne === null ? X.memoizedState = ne = e : ne = ne.next = e;
  }
  return ne;
}
function ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function po(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = b, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var h = c.lane;
      if ((Vt & h) === h) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var p = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = p, i = r) : s = s.next = p, X.lanes |= h, Bt |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, Ue(r, t.memoizedState) || (ve = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, X.lanes |= o, Bt |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function mo(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ue(o, t.memoizedState) || (ve = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function fc() {
}
function dc(e, t) {
  var n = X, r = ze(), l = t(), o = !Ue(r.memoizedState, l);
  if (o && (r.memoizedState = l, ve = !0), r = r.queue, uu(hc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ne !== null && ne.memoizedState.tag & 1) {
    if (n.flags |= 2048, cr(9, mc.bind(null, n, r, l, t), void 0, null), re === null) throw Error(S(349));
    Vt & 30 || pc(n, t, l);
  }
  return l;
}
function pc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function mc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, vc(t) && yc(e);
}
function hc(e, t, n) {
  return n(function() {
    vc(t) && yc(e);
  });
}
function vc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function yc(e) {
  var t = lt(e, 1);
  t !== null && Ae(t, e, 1, -1);
}
function hs(e) {
  var t = Ve();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, t.queue = e, e = e.dispatch = cp.bind(null, X, e), [t.memoizedState, e];
}
function cr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function gc() {
  return ze().memoizedState;
}
function Jr(e, t, n, r) {
  var l = Ve();
  X.flags |= e, l.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r);
}
function $l(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (b !== null) {
    var i = b.memoizedState;
    if (o = i.destroy, r !== null && lu(r, i.deps)) {
      l.memoizedState = cr(t, n, o, r);
      return;
    }
  }
  X.flags |= e, l.memoizedState = cr(1 | t, n, o, r);
}
function vs(e, t) {
  return Jr(8390656, 8, e, t);
}
function uu(e, t) {
  return $l(2048, 8, e, t);
}
function wc(e, t) {
  return $l(4, 2, e, t);
}
function Sc(e, t) {
  return $l(4, 4, e, t);
}
function kc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function xc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, $l(4, 4, kc.bind(null, t, e), n);
}
function su() {
}
function Ec(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Cc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function _c(e, t, n) {
  return Vt & 21 ? (Ue(n, t) || (n = Ta(), X.lanes |= n, Bt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ve = !0), e.memoizedState = n);
}
function sp(e, t) {
  var n = D;
  D = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = fo.transition;
  fo.transition = {};
  try {
    e(!1), t();
  } finally {
    D = n, fo.transition = r;
  }
}
function Pc() {
  return ze().memoizedState;
}
function ap(e, t, n) {
  var r = xt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Nc(e)) Tc(t, n);
  else if (n = lc(e, t, n, r), n !== null) {
    var l = de();
    Ae(n, e, r, l), Lc(n, t, r);
  }
}
function cp(e, t, n) {
  var r = xt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nc(e)) Tc(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ue(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, bi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = lc(e, t, l, r), n !== null && (l = de(), Ae(n, e, r, l), Lc(n, t, r));
  }
}
function Nc(e) {
  var t = e.alternate;
  return e === X || t !== null && t === X;
}
function Tc(e, t) {
  Wn = wl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Lc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ai(e, n);
  }
}
var Sl = { readContext: Ie, useCallback: ue, useContext: ue, useEffect: ue, useImperativeHandle: ue, useInsertionEffect: ue, useLayoutEffect: ue, useMemo: ue, useReducer: ue, useRef: ue, useState: ue, useDebugValue: ue, useDeferredValue: ue, useTransition: ue, useMutableSource: ue, useSyncExternalStore: ue, useId: ue, unstable_isNewReconciler: !1 }, fp = { readContext: Ie, useCallback: function(e, t) {
  return Ve().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ie, useEffect: vs, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Jr(
    4194308,
    4,
    kc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Jr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Jr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ve();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ve();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ap.bind(null, X, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ve();
  return e = { current: e }, t.memoizedState = e;
}, useState: hs, useDebugValue: su, useDeferredValue: function(e) {
  return Ve().memoizedState = e;
}, useTransition: function() {
  var e = hs(!1), t = e[0];
  return e = sp.bind(null, e[1]), Ve().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = X, l = Ve();
  if (H) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), re === null) throw Error(S(349));
    Vt & 30 || pc(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, vs(hc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, cr(9, mc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ve(), t = re.identifierPrefix;
  if (H) {
    var n = qe, r = Je;
    n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = up++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, dp = {
  readContext: Ie,
  useCallback: Ec,
  useContext: Ie,
  useEffect: uu,
  useImperativeHandle: xc,
  useInsertionEffect: wc,
  useLayoutEffect: Sc,
  useMemo: Cc,
  useReducer: po,
  useRef: gc,
  useState: function() {
    return po(ar);
  },
  useDebugValue: su,
  useDeferredValue: function(e) {
    var t = ze();
    return _c(t, b.memoizedState, e);
  },
  useTransition: function() {
    var e = po(ar)[0], t = ze().memoizedState;
    return [e, t];
  },
  useMutableSource: fc,
  useSyncExternalStore: dc,
  useId: Pc,
  unstable_isNewReconciler: !1
}, pp = { readContext: Ie, useCallback: Ec, useContext: Ie, useEffect: uu, useImperativeHandle: xc, useInsertionEffect: wc, useLayoutEffect: Sc, useMemo: Cc, useReducer: mo, useRef: gc, useState: function() {
  return mo(ar);
}, useDebugValue: su, useDeferredValue: function(e) {
  var t = ze();
  return b === null ? t.memoizedState = e : _c(t, b.memoizedState, e);
}, useTransition: function() {
  var e = mo(ar)[0], t = ze().memoizedState;
  return [e, t];
}, useMutableSource: fc, useSyncExternalStore: dc, useId: Pc, unstable_isNewReconciler: !1 };
function wn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Hf(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ho(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ii(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var mp = typeof WeakMap == "function" ? WeakMap : Map;
function Oc(e, t, n) {
  n = be(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    xl || (xl = !0, vi = r), ii(e, t);
  }, n;
}
function Rc(e, t, n) {
  n = be(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      ii(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    ii(e, t), typeof r != "function" && (kt === null ? kt = /* @__PURE__ */ new Set([this]) : kt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function ys(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Tp.bind(null, e, t, n), t.then(e, e));
}
function gs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ws(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = be(-1, 1), t.tag = 2, St(n, t, 1))), n.lanes |= 1), e);
}
var hp = ut.ReactCurrentOwner, ve = !1;
function fe(e, t, n, r) {
  t.child = e === null ? ac(t, null, n, r) : yn(t, e.child, n, r);
}
function Ss(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return dn(t, l), r = ou(e, t, n, r, o, l), n = iu(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (H && n && Yi(t), t.flags |= 1, fe(e, t, r, l), t.child);
}
function ks(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !vu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ic(e, t, o, r, l)) : (e = tl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : nr, n(i, r) && e.ref === t.ref) return ot(e, t, l);
  }
  return t.flags |= 1, e = Et(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ic(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (nr(o, r) && e.ref === t.ref) if (ve = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ve = !0);
    else return t.lanes = e.lanes, ot(e, t, l);
  }
  return ui(e, t, n, r, l);
}
function zc(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(un, xe), xe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, M(un, xe), xe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, M(un, xe), xe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, M(un, xe), xe |= r;
  return fe(e, t, l, n), t.child;
}
function $c(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ui(e, t, n, r, l) {
  var o = we(n) ? Ut : ce.current;
  return o = hn(t, o), dn(t, l), n = ou(e, t, n, r, o, l), r = iu(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (H && r && Yi(t), t.flags |= 1, fe(e, t, n, l), t.child);
}
function xs(e, t, n, r, l) {
  if (we(n)) {
    var o = !0;
    dl(t);
  } else o = !1;
  if (dn(t, l), t.stateNode === null) qr(e, t), uc(t, n, r), oi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ie(c) : (c = we(n) ? Ut : ce.current, c = hn(t, c));
    var h = n.getDerivedStateFromProps, p = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && ps(t, i, r, c), ft = !1;
    var m = t.memoizedState;
    i.state = m, yl(t, r, i, l), s = t.memoizedState, u !== r || m !== s || ge.current || ft ? (typeof h == "function" && (li(t, n, h, r), s = t.memoizedState), (u = ft || ds(t, n, u, r, m, s, c)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, oc(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : je(t.type, u), i.props = c, p = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ie(s) : (s = we(n) ? Ut : ce.current, s = hn(t, s));
    var w = n.getDerivedStateFromProps;
    (h = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== p || m !== s) && ps(t, i, r, s), ft = !1, m = t.memoizedState, i.state = m, yl(t, r, i, l);
    var v = t.memoizedState;
    u !== p || m !== v || ge.current || ft ? (typeof w == "function" && (li(t, n, w, r), v = t.memoizedState), (c = ft || ds(t, n, c, r, m, v, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return si(e, t, n, r, o, l);
}
function si(e, t, n, r, l, o) {
  $c(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && us(t, n, !1), ot(e, t, o);
  r = t.stateNode, hp.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = yn(t, e.child, null, o), t.child = yn(t, null, u, o)) : fe(e, t, u, o), t.memoizedState = r.state, l && us(t, n, !0), t.child;
}
function jc(e) {
  var t = e.stateNode;
  t.pendingContext ? is(e, t.pendingContext, t.pendingContext !== t.context) : t.context && is(e, t.context, !1), tu(e, t.containerInfo);
}
function Es(e, t, n, r, l) {
  return vn(), Gi(l), t.flags |= 256, fe(e, t, n, r), t.child;
}
var ai = { dehydrated: null, treeContext: null, retryLane: 0 };
function ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dc(e, t, n) {
  var r = t.pendingProps, l = Y.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M(Y, l & 1), e === null)
    return ni(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Fl(i, r, 0, null), e = Mt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ci(n), t.memoizedState = ai, e) : au(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return vp(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Et(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Et(u, o) : (o = Mt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? ci(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = ai, r;
  }
  return o = e.child, e = o.sibling, r = Et(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function au(e, t) {
  return t = Fl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Dr(e, t, n, r) {
  return r !== null && Gi(r), yn(t, e.child, null, n), e = au(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function vp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ho(Error(S(422))), Dr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Fl({ mode: "visible", children: r.children }, l, 0, null), o = Mt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && yn(t, e.child, null, i), t.child.memoizedState = ci(i), t.memoizedState = ai, o);
  if (!(t.mode & 1)) return Dr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(S(419)), r = ho(o, r, void 0), Dr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ve || u) {
    if (r = re, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, lt(e, l), Ae(r, e, l, -1));
    }
    return hu(), r = ho(Error(S(421))), Dr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Lp.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ee = wt(l.nextSibling), Ce = t, H = !0, Fe = null, e !== null && (Te[Le++] = Je, Te[Le++] = qe, Te[Le++] = Ht, Je = e.id, qe = e.overflow, Ht = t), t = au(t, r.children), t.flags |= 4096, t);
}
function Cs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ri(e.return, t, n);
}
function vo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Fc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (fe(e, t, r.children, n), r = Y.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Cs(e, n, t);
      else if (e.tag === 19) Cs(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (M(Y, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && gl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), vo(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && gl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      vo(t, !0, n, null, o);
      break;
    case "together":
      vo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function qr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ot(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Bt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Et(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function yp(e, t, n) {
  switch (t.tag) {
    case 3:
      jc(t), vn();
      break;
    case 5:
      cc(t);
      break;
    case 1:
      we(t.type) && dl(t);
      break;
    case 4:
      tu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      M(hl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (M(Y, Y.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Dc(e, t, n) : (M(Y, Y.current & 1), e = ot(e, t, n), e !== null ? e.sibling : null);
      M(Y, Y.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Fc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), M(Y, Y.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, zc(e, t, n);
  }
  return ot(e, t, n);
}
var Mc, fi, Ac, Uc;
Mc = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
fi = function() {
};
Ac = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Dt(Ke.current);
    var o = null;
    switch (n) {
      case "input":
        l = zo(e, l), r = zo(e, r), o = [];
        break;
      case "select":
        l = G({}, l, { value: void 0 }), r = G({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Do(e, l), r = Do(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = cl);
    }
    Mo(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Gn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Gn.hasOwnProperty(c) ? (s != null && c === "onScroll" && A("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Uc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $n(e, t) {
  if (!H) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function gp(e, t, n) {
  var r = t.pendingProps;
  switch (Xi(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return se(t), null;
    case 1:
      return we(t.type) && fl(), se(t), null;
    case 3:
      return r = t.stateNode, gn(), U(ge), U(ce), ru(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && ($r(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Fe !== null && (wi(Fe), Fe = null))), fi(e, t), se(t), null;
    case 5:
      nu(t);
      var l = Dt(ur.current);
      if (n = t.type, e !== null && t.stateNode != null) Ac(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return se(t), null;
        }
        if (e = Dt(Ke.current), $r(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Be] = t, r[or] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              A("cancel", r), A("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              A("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < An.length; l++) A(An[l], r);
              break;
            case "source":
              A("error", r);
              break;
            case "img":
            case "image":
            case "link":
              A(
                "error",
                r
              ), A("load", r);
              break;
            case "details":
              A("toggle", r);
              break;
            case "input":
              zu(r, o), A("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, A("invalid", r);
              break;
            case "textarea":
              ju(r, o), A("invalid", r);
          }
          Mo(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && zr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && zr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Gn.hasOwnProperty(i) && u != null && i === "onScroll" && A("scroll", r);
          }
          switch (n) {
            case "input":
              _r(r), $u(r, o, !0);
              break;
            case "textarea":
              _r(r), Du(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = cl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = pa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Be] = t, e[or] = r, Mc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ao(n, r), n) {
              case "dialog":
                A("cancel", e), A("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                A("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < An.length; l++) A(An[l], e);
                l = r;
                break;
              case "source":
                A("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                A(
                  "error",
                  e
                ), A("load", e), l = r;
                break;
              case "details":
                A("toggle", e), l = r;
                break;
              case "input":
                zu(e, r), l = zo(e, r), A("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = G({}, r, { value: void 0 }), A("invalid", e);
                break;
              case "textarea":
                ju(e, r), l = Do(e, r), A("invalid", e);
                break;
              default:
                l = r;
            }
            Mo(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? va(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ma(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Zn(e, s) : typeof s == "number" && Zn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Gn.hasOwnProperty(o) ? s != null && o === "onScroll" && A("scroll", e) : s != null && zi(e, o, s, i));
            }
            switch (n) {
              case "input":
                _r(e), $u(e, r, !1);
                break;
              case "textarea":
                _r(e), Du(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ct(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? sn(e, !!r.multiple, o, !1) : r.defaultValue != null && sn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = cl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) Uc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = Dt(ur.current), Dt(Ke.current), $r(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Be] = t, (o = r.nodeValue !== n) && (e = Ce, e !== null)) switch (e.tag) {
            case 3:
              zr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && zr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Be] = t, t.stateNode = r;
      }
      return se(t), null;
    case 13:
      if (U(Y), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (H && Ee !== null && t.mode & 1 && !(t.flags & 128)) rc(), vn(), t.flags |= 98560, o = !1;
        else if (o = $r(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[Be] = t;
          } else vn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          se(t), o = !1;
        } else Fe !== null && (wi(Fe), Fe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Y.current & 1 ? ee === 0 && (ee = 3) : hu())), t.updateQueue !== null && (t.flags |= 4), se(t), null);
    case 4:
      return gn(), fi(e, t), e === null && rr(t.stateNode.containerInfo), se(t), null;
    case 10:
      return qi(t.type._context), se(t), null;
    case 17:
      return we(t.type) && fl(), se(t), null;
    case 19:
      if (U(Y), o = t.memoizedState, o === null) return se(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) $n(o, !1);
      else {
        if (ee !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = gl(e), i !== null) {
            for (t.flags |= 128, $n(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return M(Y, Y.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && J() > Sn && (t.flags |= 128, r = !0, $n(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = gl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), $n(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !H) return se(t), null;
        } else 2 * J() - o.renderingStartTime > Sn && n !== 1073741824 && (t.flags |= 128, r = !0, $n(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = Y.current, M(Y, r ? n & 1 | 2 : n & 1), t) : (se(t), null);
    case 22:
    case 23:
      return mu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? xe & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : se(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function wp(e, t) {
  switch (Xi(t), t.tag) {
    case 1:
      return we(t.type) && fl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return gn(), U(ge), U(ce), ru(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return nu(t), null;
    case 13:
      if (U(Y), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        vn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return U(Y), null;
    case 4:
      return gn(), null;
    case 10:
      return qi(t.type._context), null;
    case 22:
    case 23:
      return mu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fr = !1, ae = !1, Sp = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function on(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Z(e, t, r);
  }
  else n.current = null;
}
function di(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var _s = !1;
function kp(e, t) {
  if (Go = ul, e = Qa(), Ki(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, s = -1, c = 0, h = 0, p = e, m = null;
        t: for (; ; ) {
          for (var w; p !== n || l !== 0 && p.nodeType !== 3 || (u = i + l), p !== o || r !== 0 && p.nodeType !== 3 || (s = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (w = p.firstChild) !== null; )
            m = p, p = w;
          for (; ; ) {
            if (p === e) break t;
            if (m === n && ++c === l && (u = i), m === o && ++h === r && (s = i), (w = p.nextSibling) !== null) break;
            p = m, m = p.parentNode;
          }
          p = w;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zo = { focusedElem: e, selectionRange: n }, ul = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
  else for (; _ !== null; ) {
    t = _;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var g = v.memoizedProps, T = v.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? g : je(t.type, g), T);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(S(163));
      }
    } catch (y) {
      Z(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, _ = e;
      break;
    }
    _ = t.return;
  }
  return v = _s, _s = !1, v;
}
function Kn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && di(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function jl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function pi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Hc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Hc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Be], delete t[or], delete t[bo], delete t[rp], delete t[lp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Vc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ps(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function mi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = cl));
  else if (r !== 4 && (e = e.child, e !== null)) for (mi(e, t, n), e = e.sibling; e !== null; ) mi(e, t, n), e = e.sibling;
}
function hi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (hi(e, t, n), e = e.sibling; e !== null; ) hi(e, t, n), e = e.sibling;
}
var le = null, De = !1;
function st(e, t, n) {
  for (n = n.child; n !== null; ) Bc(e, t, n), n = n.sibling;
}
function Bc(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function") try {
    We.onCommitFiberUnmount(Nl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ae || on(n, t);
    case 6:
      var r = le, l = De;
      le = null, st(e, t, n), le = r, De = l, le !== null && (De ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null && (De ? (e = le, n = n.stateNode, e.nodeType === 8 ? so(e.parentNode, n) : e.nodeType === 1 && so(e, n), er(e)) : so(le, n.stateNode));
      break;
    case 4:
      r = le, l = De, le = n.stateNode.containerInfo, De = !0, st(e, t, n), le = r, De = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ae && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && di(n, t, i), l = l.next;
        } while (l !== r);
      }
      st(e, t, n);
      break;
    case 1:
      if (!ae && (on(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Z(n, t, u);
      }
      st(e, t, n);
      break;
    case 21:
      st(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ae = (r = ae) || n.memoizedState !== null, st(e, t, n), ae = r) : st(e, t, n);
      break;
    default:
      st(e, t, n);
  }
}
function Ns(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sp()), t.forEach(function(r) {
      var l = Op.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            le = u.stateNode, De = !1;
            break e;
          case 3:
            le = u.stateNode.containerInfo, De = !0;
            break e;
          case 4:
            le = u.stateNode.containerInfo, De = !0;
            break e;
        }
        u = u.return;
      }
      if (le === null) throw Error(S(160));
      Bc(o, i, l), le = null, De = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      Z(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qc(t, e), t = t.sibling;
}
function Qc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ($e(t, e), He(e), r & 4) {
        try {
          Kn(3, e, e.return), jl(3, e);
        } catch (g) {
          Z(e, e.return, g);
        }
        try {
          Kn(5, e, e.return);
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      break;
    case 1:
      $e(t, e), He(e), r & 512 && n !== null && on(n, n.return);
      break;
    case 5:
      if ($e(t, e), He(e), r & 512 && n !== null && on(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Zn(l, "");
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && fa(l, o), Ao(u, i);
          var c = Ao(u, o);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], p = s[i + 1];
            h === "style" ? va(l, p) : h === "dangerouslySetInnerHTML" ? ma(l, p) : h === "children" ? Zn(l, p) : zi(l, h, p, c);
          }
          switch (u) {
            case "input":
              $o(l, o);
              break;
            case "textarea":
              da(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? sn(l, !!o.multiple, w, !1) : m !== !!o.multiple && (o.defaultValue != null ? sn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : sn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[or] = o;
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      break;
    case 6:
      if ($e(t, e), He(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      break;
    case 3:
      if ($e(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        er(t.containerInfo);
      } catch (g) {
        Z(e, e.return, g);
      }
      break;
    case 4:
      $e(t, e), He(e);
      break;
    case 13:
      $e(t, e), He(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (du = J())), r & 4 && Ns(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ae = (c = ae) || h, $e(t, e), ae = c) : $e(t, e), He(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (_ = e, h = e.child; h !== null; ) {
          for (p = _ = h; _ !== null; ) {
            switch (m = _, w = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Kn(4, m, m.return);
                break;
              case 1:
                on(m, m.return);
                var v = m.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (g) {
                    Z(r, n, g);
                  }
                }
                break;
              case 5:
                on(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Ls(p);
                  continue;
                }
            }
            w !== null ? (w.return = m, _ = w) : Ls(p);
          }
          h = h.sibling;
        }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                l = p.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = p.stateNode, s = p.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ha("display", i));
              } catch (g) {
                Z(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (h === null) try {
              p.stateNode.nodeValue = c ? "" : p.memoizedProps;
            } catch (g) {
              Z(e, e.return, g);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), p = p.return;
          }
          h === p && (h = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      $e(t, e), He(e), r & 4 && Ns(e);
      break;
    case 21:
      break;
    default:
      $e(
        t,
        e
      ), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Zn(l, ""), r.flags &= -33);
          var o = Ps(e);
          hi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ps(e);
          mi(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      Z(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xp(e, t, n) {
  _ = e, Wc(e);
}
function Wc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Fr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ae;
        u = Fr;
        var c = ae;
        if (Fr = i, (ae = s) && !c) for (_ = l; _ !== null; ) i = _, s = i.child, i.tag === 22 && i.memoizedState !== null ? Os(l) : s !== null ? (s.return = i, _ = s) : Os(l);
        for (; o !== null; ) _ = o, Wc(o), o = o.sibling;
        _ = l, Fr = u, ae = c;
      }
      Ts(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, _ = o) : Ts(e);
  }
}
function Ts(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ae || jl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ae) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : je(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && fs(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              fs(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var h = c.memoizedState;
                if (h !== null) {
                  var p = h.dehydrated;
                  p !== null && er(p);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(S(163));
        }
        ae || t.flags & 512 && pi(t);
      } catch (m) {
        Z(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function Ls(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function Os(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
          } catch (s) {
            Z(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Z(t, l, s);
            }
          }
          var o = t.return;
          try {
            pi(t);
          } catch (s) {
            Z(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            pi(t);
          } catch (s) {
            Z(t, i, s);
          }
      }
    } catch (s) {
      Z(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, _ = u;
      break;
    }
    _ = t.return;
  }
}
var Ep = Math.ceil, kl = ut.ReactCurrentDispatcher, cu = ut.ReactCurrentOwner, Re = ut.ReactCurrentBatchConfig, j = 0, re = null, q = null, oe = 0, xe = 0, un = Nt(0), ee = 0, fr = null, Bt = 0, Dl = 0, fu = 0, Yn = null, he = null, du = 0, Sn = 1 / 0, Ge = null, xl = !1, vi = null, kt = null, Mr = !1, ht = null, El = 0, Xn = 0, yi = null, br = -1, el = 0;
function de() {
  return j & 6 ? J() : br !== -1 ? br : br = J();
}
function xt(e) {
  return e.mode & 1 ? j & 2 && oe !== 0 ? oe & -oe : ip.transition !== null ? (el === 0 && (el = Ta()), el) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ja(e.type)), e) : 1;
}
function Ae(e, t, n, r) {
  if (50 < Xn) throw Xn = 0, yi = null, Error(S(185));
  hr(e, n, r), (!(j & 2) || e !== re) && (e === re && (!(j & 2) && (Dl |= n), ee === 4 && pt(e, oe)), Se(e, r), n === 1 && j === 0 && !(t.mode & 1) && (Sn = J() + 500, Il && Tt()));
}
function Se(e, t) {
  var n = e.callbackNode;
  id(e, t);
  var r = il(e, e === re ? oe : 0);
  if (r === 0) n !== null && Au(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Au(n), t === 1) e.tag === 0 ? op(Rs.bind(null, e)) : ec(Rs.bind(null, e)), tp(function() {
      !(j & 6) && Tt();
    }), n = null;
    else {
      switch (La(r)) {
        case 1:
          n = Mi;
          break;
        case 4:
          n = Pa;
          break;
        case 16:
          n = ol;
          break;
        case 536870912:
          n = Na;
          break;
        default:
          n = ol;
      }
      n = bc(n, Kc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Kc(e, t) {
  if (br = -1, el = 0, j & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (pn() && e.callbackNode !== n) return null;
  var r = il(e, e === re ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
  else {
    t = r;
    var l = j;
    j |= 2;
    var o = Xc();
    (re !== e || oe !== t) && (Ge = null, Sn = J() + 500, Ft(e, t));
    do
      try {
        Pp();
        break;
      } catch (u) {
        Yc(e, u);
      }
    while (!0);
    Ji(), kl.current = o, j = l, q !== null ? t = 0 : (re = null, oe = 0, t = ee);
  }
  if (t !== 0) {
    if (t === 2 && (l = Qo(e), l !== 0 && (r = l, t = gi(e, l))), t === 1) throw n = fr, Ft(e, 0), pt(e, r), Se(e, J()), n;
    if (t === 6) pt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Cp(l) && (t = Cl(e, r), t === 2 && (o = Qo(e), o !== 0 && (r = o, t = gi(e, o))), t === 1)) throw n = fr, Ft(e, 0), pt(e, r), Se(e, J()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          zt(e, he, Ge);
          break;
        case 3:
          if (pt(e, r), (r & 130023424) === r && (t = du + 500 - J(), 10 < t)) {
            if (il(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              de(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = qo(zt.bind(null, e, he, Ge), t);
            break;
          }
          zt(e, he, Ge);
          break;
        case 4:
          if (pt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Me(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ep(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qo(zt.bind(null, e, he, Ge), r);
            break;
          }
          zt(e, he, Ge);
          break;
        case 5:
          zt(e, he, Ge);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Se(e, J()), e.callbackNode === n ? Kc.bind(null, e) : null;
}
function gi(e, t) {
  var n = Yn;
  return e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256), e = Cl(e, t), e !== 2 && (t = he, he = n, t !== null && wi(t)), e;
}
function wi(e) {
  he === null ? he = e : he.push.apply(he, e);
}
function Cp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Ue(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function pt(e, t) {
  for (t &= ~fu, t &= ~Dl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Me(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Rs(e) {
  if (j & 6) throw Error(S(327));
  pn();
  var t = il(e, 0);
  if (!(t & 1)) return Se(e, J()), null;
  var n = Cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qo(e);
    r !== 0 && (t = r, n = gi(e, r));
  }
  if (n === 1) throw n = fr, Ft(e, 0), pt(e, t), Se(e, J()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, zt(e, he, Ge), Se(e, J()), null;
}
function pu(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    j = n, j === 0 && (Sn = J() + 500, Il && Tt());
  }
}
function Qt(e) {
  ht !== null && ht.tag === 0 && !(j & 6) && pn();
  var t = j;
  j |= 1;
  var n = Re.transition, r = D;
  try {
    if (Re.transition = null, D = 1, e) return e();
  } finally {
    D = r, Re.transition = n, j = t, !(j & 6) && Tt();
  }
}
function mu() {
  xe = un.current, U(un);
}
function Ft(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ep(n)), q !== null) for (n = q.return; n !== null; ) {
    var r = n;
    switch (Xi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && fl();
        break;
      case 3:
        gn(), U(ge), U(ce), ru();
        break;
      case 5:
        nu(r);
        break;
      case 4:
        gn();
        break;
      case 13:
        U(Y);
        break;
      case 19:
        U(Y);
        break;
      case 10:
        qi(r.type._context);
        break;
      case 22:
      case 23:
        mu();
    }
    n = n.return;
  }
  if (re = e, q = e = Et(e.current, null), oe = xe = t, ee = 0, fr = null, fu = Dl = Bt = 0, he = Yn = null, jt !== null) {
    for (t = 0; t < jt.length; t++) if (n = jt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    jt = null;
  }
  return e;
}
function Yc(e, t) {
  do {
    var n = q;
    try {
      if (Ji(), Zr.current = Sl, wl) {
        for (var r = X.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        wl = !1;
      }
      if (Vt = 0, ne = b = X = null, Wn = !1, sr = 0, cu.current = null, n === null || n.return === null) {
        ee = 1, fr = t, q = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = oe, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = u, p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var w = gs(i);
          if (w !== null) {
            w.flags &= -257, ws(w, i, u, o, t), w.mode & 1 && ys(o, c, t), t = w, s = c;
            var v = t.updateQueue;
            if (v === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ys(o, c, t), hu();
              break e;
            }
            s = Error(S(426));
          }
        } else if (H && u.mode & 1) {
          var T = gs(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), ws(T, i, u, o, t), Gi(wn(s, u));
            break e;
          }
        }
        o = s = wn(s, u), ee !== 4 && (ee = 2), Yn === null ? Yn = [o] : Yn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Oc(o, s, t);
              cs(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (kt === null || !kt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = Rc(o, u, t);
                cs(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Zc(n);
    } catch (k) {
      t = k, q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xc() {
  var e = kl.current;
  return kl.current = Sl, e === null ? Sl : e;
}
function hu() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4), re === null || !(Bt & 268435455) && !(Dl & 268435455) || pt(re, oe);
}
function Cl(e, t) {
  var n = j;
  j |= 2;
  var r = Xc();
  (re !== e || oe !== t) && (Ge = null, Ft(e, t));
  do
    try {
      _p();
      break;
    } catch (l) {
      Yc(e, l);
    }
  while (!0);
  if (Ji(), j = n, kl.current = r, q !== null) throw Error(S(261));
  return re = null, oe = 0, ee;
}
function _p() {
  for (; q !== null; ) Gc(q);
}
function Pp() {
  for (; q !== null && !Jf(); ) Gc(q);
}
function Gc(e) {
  var t = qc(e.alternate, e, xe);
  e.memoizedProps = e.pendingProps, t === null ? Zc(e) : q = t, cu.current = null;
}
function Zc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = wp(n, t), n !== null) {
        n.flags &= 32767, q = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ee = 6, q = null;
        return;
      }
    } else if (n = gp(n, t, xe), n !== null) {
      q = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function zt(e, t, n) {
  var r = D, l = Re.transition;
  try {
    Re.transition = null, D = 1, Np(e, t, n, r);
  } finally {
    Re.transition = l, D = r;
  }
  return null;
}
function Np(e, t, n, r) {
  do
    pn();
  while (ht !== null);
  if (j & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (ud(e, o), e === re && (q = re = null, oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Mr || (Mr = !0, bc(ol, function() {
    return pn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Re.transition, Re.transition = null;
    var i = D;
    D = 1;
    var u = j;
    j |= 4, cu.current = null, kp(e, n), Qc(n, e), Yd(Zo), ul = !!Go, Zo = Go = null, e.current = n, xp(n), qf(), j = u, D = i, Re.transition = o;
  } else e.current = n;
  if (Mr && (Mr = !1, ht = e, El = l), o = e.pendingLanes, o === 0 && (kt = null), td(n.stateNode), Se(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (xl) throw xl = !1, e = vi, vi = null, e;
  return El & 1 && e.tag !== 0 && pn(), o = e.pendingLanes, o & 1 ? e === yi ? Xn++ : (Xn = 0, yi = e) : Xn = 0, Tt(), null;
}
function pn() {
  if (ht !== null) {
    var e = La(El), t = Re.transition, n = D;
    try {
      if (Re.transition = null, D = 16 > e ? 16 : e, ht === null) var r = !1;
      else {
        if (e = ht, ht = null, El = 0, j & 6) throw Error(S(331));
        var l = j;
        for (j |= 4, _ = e.current; _ !== null; ) {
          var o = _, i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (_ = c; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kn(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) p.return = h, _ = p;
                  else for (; _ !== null; ) {
                    h = _;
                    var m = h.sibling, w = h.return;
                    if (Hc(h), h === c) {
                      _ = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = w, _ = m;
                      break;
                    }
                    _ = w;
                  }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var T = g.sibling;
                    g.sibling = null, g = T;
                  } while (g !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, _ = i;
          else e: for (; _ !== null; ) {
            if (o = _, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Kn(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, _ = f;
              break e;
            }
            _ = o.return;
          }
        }
        var a = e.current;
        for (_ = a; _ !== null; ) {
          i = _;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, _ = d;
          else e: for (i = a; _ !== null; ) {
            if (u = _, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  jl(9, u);
              }
            } catch (k) {
              Z(u, u.return, k);
            }
            if (u === i) {
              _ = null;
              break e;
            }
            var y = u.sibling;
            if (y !== null) {
              y.return = u.return, _ = y;
              break e;
            }
            _ = u.return;
          }
        }
        if (j = l, Tt(), We && typeof We.onPostCommitFiberRoot == "function") try {
          We.onPostCommitFiberRoot(Nl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      D = n, Re.transition = t;
    }
  }
  return !1;
}
function Is(e, t, n) {
  t = wn(n, t), t = Oc(e, t, 1), e = St(e, t, 1), t = de(), e !== null && (hr(e, 1, t), Se(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Is(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Is(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kt === null || !kt.has(r))) {
        e = wn(n, e), e = Rc(t, e, 1), t = St(t, e, 1), e = de(), t !== null && (hr(t, 1, e), Se(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Tp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = de(), e.pingedLanes |= e.suspendedLanes & n, re === e && (oe & n) === n && (ee === 4 || ee === 3 && (oe & 130023424) === oe && 500 > J() - du ? Ft(e, 0) : fu |= n), Se(e, t);
}
function Jc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Tr, Tr <<= 1, !(Tr & 130023424) && (Tr = 4194304)) : t = 1);
  var n = de();
  e = lt(e, t), e !== null && (hr(e, t, n), Se(e, n));
}
function Lp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Jc(e, n);
}
function Op(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Jc(e, n);
}
var qc;
qc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ge.current) ve = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ve = !1, yp(e, t, n);
    ve = !!(e.flags & 131072);
  }
  else ve = !1, H && t.flags & 1048576 && tc(t, ml, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      qr(e, t), e = t.pendingProps;
      var l = hn(t, ce.current);
      dn(t, n), l = ou(null, t, r, e, l, n);
      var o = iu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, we(r) ? (o = !0, dl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, eu(t), l.updater = zl, t.stateNode = l, l._reactInternals = t, oi(t, r, e, n), t = si(null, t, r, !0, o, n)) : (t.tag = 0, H && o && Yi(t), fe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (qr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ip(r), e = je(r, e), l) {
          case 0:
            t = ui(null, t, r, e, n);
            break e;
          case 1:
            t = xs(null, t, r, e, n);
            break e;
          case 11:
            t = Ss(null, t, r, e, n);
            break e;
          case 14:
            t = ks(null, t, r, je(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), ui(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), xs(e, t, r, l, n);
    case 3:
      e: {
        if (jc(t), e === null) throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, oc(e, t), yl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = wn(Error(S(423)), t), t = Es(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = wn(Error(S(424)), t), t = Es(e, t, r, n, l);
          break e;
        } else for (Ee = wt(t.stateNode.containerInfo.firstChild), Ce = t, H = !0, Fe = null, n = ac(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (vn(), r === l) {
            t = ot(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return cc(t), e === null && ni(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Jo(r, l) ? i = null : o !== null && Jo(r, o) && (t.flags |= 32), $c(e, t), fe(e, t, i, n), t.child;
    case 6:
      return e === null && ni(t), null;
    case 13:
      return Dc(e, t, n);
    case 4:
      return tu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = yn(t, null, r, n) : fe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Ss(e, t, r, l, n);
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, M(hl, r._currentValue), r._currentValue = i, o !== null) if (Ue(o.value, i)) {
          if (o.children === l.children && !ge.current) {
            t = ot(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = be(-1, n & -n), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), ri(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(S(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), ri(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        fe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, dn(t, n), l = Ie(l), r = r(l), t.flags |= 1, fe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = je(r, t.pendingProps), l = je(r.type, l), ks(e, t, r, l, n);
    case 15:
      return Ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), qr(e, t), t.tag = 1, we(r) ? (e = !0, dl(t)) : e = !1, dn(t, n), uc(t, r, l), oi(t, r, l, n), si(null, t, r, !0, e, n);
    case 19:
      return Fc(e, t, n);
    case 22:
      return zc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function bc(e, t) {
  return _a(e, t);
}
function Rp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Oe(e, t, n, r) {
  return new Rp(e, t, n, r);
}
function vu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ip(e) {
  if (typeof e == "function") return vu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ji) return 11;
    if (e === Di) return 14;
  }
  return 2;
}
function Et(e, t) {
  var n = e.alternate;
  return n === null ? (n = Oe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function tl(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") vu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Zt:
      return Mt(n.children, l, o, t);
    case $i:
      i = 8, l |= 8;
      break;
    case Lo:
      return e = Oe(12, n, t, l | 2), e.elementType = Lo, e.lanes = o, e;
    case Oo:
      return e = Oe(13, n, t, l), e.elementType = Oo, e.lanes = o, e;
    case Ro:
      return e = Oe(19, n, t, l), e.elementType = Ro, e.lanes = o, e;
    case sa:
      return Fl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ia:
          i = 10;
          break e;
        case ua:
          i = 9;
          break e;
        case ji:
          i = 11;
          break e;
        case Di:
          i = 14;
          break e;
        case ct:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = Oe(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Mt(e, t, n, r) {
  return e = Oe(7, e, r, t), e.lanes = n, e;
}
function Fl(e, t, n, r) {
  return e = Oe(22, e, r, t), e.elementType = sa, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function yo(e, t, n) {
  return e = Oe(6, e, null, t), e.lanes = n, e;
}
function go(e, t, n) {
  return t = Oe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function zp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Jl(0), this.expirationTimes = Jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function yu(e, t, n, r, l, o, i, u, s) {
  return e = new zp(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Oe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, eu(o), e;
}
function $p(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Gt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ef(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (Kt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return ba(e, n, t);
  }
  return t;
}
function tf(e, t, n, r, l, o, i, u, s) {
  return e = yu(n, r, !0, e, l, o, i, u, s), e.context = ef(null), n = e.current, r = de(), l = xt(n), o = be(r, l), o.callback = t ?? null, St(n, o, l), e.current.lanes = l, hr(e, l, r), Se(e, r), e;
}
function Ml(e, t, n, r) {
  var l = t.current, o = de(), i = xt(l);
  return n = ef(n), t.context === null ? t.context = n : t.pendingContext = n, t = be(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = St(l, t, i), e !== null && (Ae(e, l, i, o), Gr(e, l, i)), i;
}
function _l(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function gu(e, t) {
  zs(e, t), (e = e.alternate) && zs(e, t);
}
function jp() {
  return null;
}
var nf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function wu(e) {
  this._internalRoot = e;
}
Al.prototype.render = wu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Ml(e, t, null, null);
};
Al.prototype.unmount = wu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function() {
      Ml(null, e, null, null);
    }), t[rt] = null;
  }
};
function Al(e) {
  this._internalRoot = e;
}
Al.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ia();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dt.length && t !== 0 && t < dt[n].priority; n++) ;
    dt.splice(n, 0, e), n === 0 && $a(e);
  }
};
function Su(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ul(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function $s() {
}
function Dp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = _l(i);
        o.call(c);
      };
    }
    var i = tf(t, r, e, 0, null, !1, !1, "", $s);
    return e._reactRootContainer = i, e[rt] = i.current, rr(e.nodeType === 8 ? e.parentNode : e), Qt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = _l(s);
      u.call(c);
    };
  }
  var s = yu(e, 0, !1, null, null, !1, !1, "", $s);
  return e._reactRootContainer = s, e[rt] = s.current, rr(e.nodeType === 8 ? e.parentNode : e), Qt(function() {
    Ml(t, s, n, r);
  }), s;
}
function Hl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = _l(i);
        u.call(s);
      };
    }
    Ml(t, i, e, l);
  } else i = Dp(n, t, e, l, r);
  return _l(i);
}
Oa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 && (Ai(t, n | 1), Se(t, J()), !(j & 6) && (Sn = J() + 500, Tt()));
      }
      break;
    case 13:
      Qt(function() {
        var r = lt(e, 1);
        if (r !== null) {
          var l = de();
          Ae(r, e, 1, l);
        }
      }), gu(e, 1);
  }
};
Ui = function(e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = de();
      Ae(t, e, 134217728, n);
    }
    gu(e, 134217728);
  }
};
Ra = function(e) {
  if (e.tag === 13) {
    var t = xt(e), n = lt(e, t);
    if (n !== null) {
      var r = de();
      Ae(n, e, t, r);
    }
    gu(e, t);
  }
};
Ia = function() {
  return D;
};
za = function(e, t) {
  var n = D;
  try {
    return D = e, t();
  } finally {
    D = n;
  }
};
Ho = function(e, t, n) {
  switch (t) {
    case "input":
      if ($o(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Rl(r);
            if (!l) throw Error(S(90));
            ca(r), $o(r, l);
          }
        }
      }
      break;
    case "textarea":
      da(e, n);
      break;
    case "select":
      t = n.value, t != null && sn(e, !!n.multiple, t, !1);
  }
};
wa = pu;
Sa = Qt;
var Fp = { usingClientEntryPoint: !1, Events: [yr, en, Rl, ya, ga, pu] }, jn = { findFiberByHostInstance: $t, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Mp = { bundleType: jn.bundleType, version: jn.version, rendererPackageName: jn.rendererPackageName, rendererConfig: jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ea(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jn.findFiberByHostInstance || jp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ar.isDisabled && Ar.supportsFiber) try {
    Nl = Ar.inject(Mp), We = Ar;
  } catch {
  }
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fp;
Pe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Su(t)) throw Error(S(200));
  return $p(e, t, null, n);
};
Pe.createRoot = function(e, t) {
  if (!Su(e)) throw Error(S(299));
  var n = !1, r = "", l = nf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = yu(e, 1, !1, null, null, n, !1, r, l), e[rt] = t.current, rr(e.nodeType === 8 ? e.parentNode : e), new wu(t);
};
Pe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Ea(t), e = e === null ? null : e.stateNode, e;
};
Pe.flushSync = function(e) {
  return Qt(e);
};
Pe.hydrate = function(e, t, n) {
  if (!Ul(t)) throw Error(S(200));
  return Hl(null, e, t, !0, n);
};
Pe.hydrateRoot = function(e, t, n) {
  if (!Su(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = nf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = tf(t, null, e, 1, n ?? null, l, !1, o, i), e[rt] = t.current, rr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Al(t);
};
Pe.render = function(e, t, n) {
  if (!Ul(t)) throw Error(S(200));
  return Hl(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function(e) {
  if (!Ul(e)) throw Error(S(40));
  return e._reactRootContainer ? (Qt(function() {
    Hl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[rt] = null;
    });
  }), !0) : !1;
};
Pe.unstable_batchedUpdates = pu;
Pe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ul(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Hl(e, t, n, !1, r);
};
Pe.version = "18.2.0-next-9e3b772b8-20220608";
function rf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf);
    } catch (e) {
      console.error(e);
    }
}
rf(), ta.exports = Pe;
var Ap = ta.exports, lf, js = Ap;
lf = js.createRoot, js.hydrateRoot;
var Up = Object.defineProperty, Hp = (e, t, n) => t in e ? Up(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ur = (e, t, n) => (Hp(e, typeof t != "symbol" ? t + "" : t, n), n);
const Vp = {
  stringify: (e) => e,
  parse: (e) => e
}, Bp = {
  stringify: (e) => `${e}`,
  parse: (e) => parseFloat(e)
}, Qp = {
  stringify: (e) => e ? "true" : "false",
  parse: (e) => /^[ty1-9]/i.test(e)
}, Wp = {
  stringify: (e) => e.name,
  parse: (e, t) => {
    const n = (() => {
      if (typeof window < "u" && e in window)
        return window[e];
      if (typeof global < "u" && e in global)
        return global[e];
    })();
    return typeof n == "function" ? n.bind(t) : void 0;
  }
}, Kp = {
  stringify: (e) => JSON.stringify(e),
  parse: (e) => JSON.parse(e)
}, wo = {
  string: Vp,
  number: Bp,
  boolean: Qp,
  function: Wp,
  json: Kp
}, So = Symbol.for("r2wc.render"), Hr = Symbol.for("r2wc.connected"), Rt = Symbol.for("r2wc.context"), at = Symbol.for("r2wc.props");
function Yp(e, t, n) {
  var r, l, o;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []);
  const i = (Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props)).filter((p) => p !== "container"), u = {}, s = {}, c = {};
  for (const p of i) {
    u[p] = Array.isArray(t.props) ? "string" : t.props[p];
    const m = Xp(p);
    s[p] = m, c[m] = p;
  }
  class h extends HTMLElement {
    constructor() {
      super(), Ur(this, r, !0), Ur(this, l), Ur(this, o, {}), Ur(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[at].container = this.container;
      for (const m of i) {
        const w = s[m], v = this.getAttribute(w), g = u[m], T = wo[g];
        v && T != null && T.parse && (this[at][m] = T.parse(v, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(c);
    }
    connectedCallback() {
      this[Hr] = !0, this[So]();
    }
    disconnectedCallback() {
      this[Hr] = !1, this[Rt] && n.unmount(this[Rt]), delete this[Rt];
    }
    attributeChangedCallback(m, w, v) {
      const g = c[m], T = u[g], f = wo[T];
      g in u && f != null && f.parse && (this[at][g] = f.parse(v, this), this[So]());
    }
    [(r = Hr, l = Rt, o = at, So)]() {
      this[Hr] && (this[Rt] ? n.update(this[Rt], this[at]) : this[Rt] = n.mount(
        this.container,
        e,
        this[at]
      ));
    }
  }
  for (const p of i) {
    const m = s[p], w = u[p];
    Object.defineProperty(h.prototype, p, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[at][p];
      },
      set(v) {
        this[at][p] = v;
        const g = wo[w];
        if (g != null && g.stringify) {
          const T = g.stringify(v);
          this.getAttribute(m) !== T && this.setAttribute(m, T);
        }
      }
    });
  }
  return h;
}
function Xp(e = "") {
  return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function Gp(e, t, n) {
  const r = lf(e), l = Qe.createElement(t, n);
  return r.render(l), {
    root: r,
    ReactComponent: t
  };
}
function Zp({ root: e, ReactComponent: t }, n) {
  const r = Qe.createElement(t, n);
  e.render(r);
}
function Jp({ root: e }) {
  e.unmount();
}
function qp(e, t = {}) {
  return Yp(e, t, { mount: Gp, update: Zp, unmount: Jp });
}
var of = { exports: {} }, Vl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bp = P, em = Symbol.for("react.element"), tm = Symbol.for("react.fragment"), nm = Object.prototype.hasOwnProperty, rm = bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, lm = { key: !0, ref: !0, __self: !0, __source: !0 };
function uf(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) nm.call(t, r) && !lm.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: em, type: e, key: o, ref: i, props: l, _owner: rm.current };
}
Vl.Fragment = tm;
Vl.jsx = uf;
Vl.jsxs = uf;
of.exports = Vl;
var O = of.exports;
function kn(...e) {
  return e.filter(Boolean).join(" ");
}
const om = (e) => {
  const t = e.maximumItemsToRender || 20, [n, r] = P.useState(t), l = e.items.filter((s) => s.label.toLowerCase().indexOf(e.searchTerm.toLowerCase()) !== -1), o = l.length > n, i = o ? l.slice(0, n) : l, u = l.length > 0;
  return !e.isOpen || !u ? /* @__PURE__ */ O.jsx(O.Fragment, {}) : /* @__PURE__ */ O.jsxs("div", { className: "absolute w-full grid border-gray-300 shadow-sm border rounded-md text-sm my-1 mt-px z-50 overflow-hidden", "data-testid": "AutocompleteList", children: [
    e.actionItem && /* @__PURE__ */ O.jsx(
      "div",
      {
        className: "block pl-4 py-1 cursor-pointer hover:bg-gray-100 text-gray-900 select-none",
        onClick: () => {
          e.onActionItem && e.onActionItem();
        },
        children: e.actionItem
      },
      "action-item"
    ),
    i.map((s) => /* @__PURE__ */ O.jsx(
      "div",
      {
        className: kn(
          "block pl-4 py-1 select-none bg-white",
          !s.selected && !s.disabled ? "cursor-pointer hover:bg-msg-red hover:text-gray-50 text-gray-700" : "text-gray-300"
        ),
        onClick: () => {
          if (console.log("here", { item: s, props: e }), !s.disabled)
            return e.onAdd(s);
        },
        children: s.label
      },
      s.id
    )),
    o && /* @__PURE__ */ O.jsx(
      "div",
      {
        className: "block pl-4 py-1 text-gray-700 bg-white cursor-pointer hover:text-gray-50 hover:bg-msg-red select-none",
        onClick: () => {
          r(n + t);
        },
        children: "Show more items"
      },
      "show-more-item"
    )
  ] });
}, im = (e) => /* @__PURE__ */ O.jsxs(
  "span",
  {
    className: kn(
      "inline-flex h-7 mt-1 ml-1 mb-1 pl-4 py-1 items-center rounded-full bg-gray-200 text-sm font-normal text-black flex items-center",
      e.disabled ? "pr-4" : "pr-2"
    ),
    children: [
      e.item.label,
      !e.disabled && /* @__PURE__ */ O.jsxs(
        "button",
        {
          "data-testid": "badgeButton",
          type: "button",
          className: "ml-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-500 bg-gray-400 hover:bg-gray-500 text-white focus:bg-msg-red focus:text-white focus:outline-none",
          onClick: (t) => {
            t.stopPropagation(), e.disabled || e.onRemove(e.item);
          },
          children: [
            /* @__PURE__ */ O.jsx("span", { className: "sr-only", children: "Remove small option" }),
            /* @__PURE__ */ O.jsx("svg", { className: "h-2 w-2", stroke: "currentColor", fill: "none", viewBox: "0 0 8 8", children: /* @__PURE__ */ O.jsx("path", { strokeLinecap: "round", strokeWidth: "1", d: "M1 1l6 6m0-6L1 7" }) })
          ]
        }
      )
    ]
  }
);
var um = Object.defineProperty, sm = (e, t, n) => t in e ? um(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ko = (e, t, n) => (sm(e, typeof t != "symbol" ? t + "" : t, n), n);
let am = class {
  constructor() {
    ko(this, "current", this.detect()), ko(this, "handoffState", "pending"), ko(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, At = new am(), it = (e, t) => {
  At.isServer ? P.useEffect(e, t) : P.useLayoutEffect(e, t);
};
function Bl(e) {
  let t = P.useRef(e);
  return it(() => {
    t.current = e;
  }, [e]), t;
}
function sf(e, t) {
  let [n, r] = P.useState(e), l = Bl(e);
  return it(() => r(l.current), [l, r, ...t]), n;
}
function cm(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function dr() {
  let e = [], t = { addEventListener(n, r, l, o) {
    return n.addEventListener(r, l, o), t.add(() => n.removeEventListener(r, l, o));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return cm(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, l) {
    let o = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: l }), this.add(() => {
      Object.assign(n.style, { [r]: o });
    });
  }, group(n) {
    let r = dr();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let l of e.splice(r, 1)) l();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
function Pl() {
  let [e] = P.useState(dr);
  return P.useEffect(() => () => e.dispose(), [e]), e;
}
let K = function(e) {
  let t = Bl(e);
  return Qe.useCallback((...n) => t.current(...n), [t]);
};
function fm() {
  let [e, t] = P.useState(At.isHandoffComplete);
  return e && At.isHandoffComplete === !1 && t(!1), P.useEffect(() => {
    e !== !0 && t(!0);
  }, [e]), P.useEffect(() => At.handoff(), []), e;
}
var Ds;
let Ql = (Ds = Qe.useId) != null ? Ds : function() {
  let e = fm(), [t, n] = Qe.useState(e ? () => At.nextId() : null);
  return it(() => {
    t === null && n(At.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function et(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, et), r;
}
function af(e) {
  return At.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let Fs = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var dm = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(dm || {}), pm = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(pm || {}), mm = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(mm || {}), ku = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ku || {});
function cf(e, t = 0) {
  var n;
  return e === ((n = af(e)) == null ? void 0 : n.body) ? !1 : et(t, { 0() {
    return e.matches(Fs);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Fs)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var hm = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(hm || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function vm(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n), o = t(r);
    if (l === null || o === null) return 0;
    let i = l.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function xo(e, t, n) {
  let r = Bl(t);
  P.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return document.addEventListener(e, l, n), () => document.removeEventListener(e, l, n);
  }, [e, n]);
}
function ym(e, t, n = !0) {
  let r = P.useRef(!1);
  P.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, u) {
    if (!r.current || i.defaultPrevented) return;
    let s = function h(p) {
      return typeof p == "function" ? h(p()) : Array.isArray(p) || p instanceof Set ? p : [p];
    }(e), c = u(i);
    if (c !== null && c.getRootNode().contains(c)) {
      for (let h of s) {
        if (h === null) continue;
        let p = h instanceof HTMLElement ? h : h.current;
        if (p != null && p.contains(c) || i.composed && i.composedPath().includes(p)) return;
      }
      return !cf(c, ku.Loose) && c.tabIndex !== -1 && i.preventDefault(), t(i, c);
    }
  }
  let o = P.useRef(null);
  xo("mousedown", (i) => {
    var u, s;
    r.current && (o.current = ((s = (u = i.composedPath) == null ? void 0 : u.call(i)) == null ? void 0 : s[0]) || i.target);
  }, !0), xo("click", (i) => {
    o.current && (l(i, () => o.current), o.current = null);
  }, !0), xo("blur", (i) => l(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Ms(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function gm(e, t) {
  let [n, r] = P.useState(() => Ms(e));
  return it(() => {
    r(Ms(e));
  }, [e.type, e.as]), it(() => {
    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button");
  }, [n, t]), n;
}
let wm = Symbol();
function wr(...e) {
  let t = P.useRef(e);
  P.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = K((r) => {
    for (let l of t.current) l != null && (typeof l == "function" ? l(r) : l.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[wm])) ? void 0 : n;
}
function Sm(e) {
  throw new Error("Unexpected object: " + e);
}
var ye = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ye || {});
function km(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), l = r ?? -1, o = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = n.slice().reverse().findIndex((u, s, c) => l !== -1 && c.length - s - 1 >= l ? !1 : !t.resolveDisabled(u));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 2:
        return n.findIndex((i, u) => u <= l ? !1 : !t.resolveDisabled(i));
      case 3: {
        let i = n.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 4:
        return n.findIndex((i) => t.resolveId(i) === e.id);
      case 5:
        return null;
      default:
        Sm(e);
    }
  })();
  return o === -1 ? r : o;
}
function As(...e) {
  return e.filter(Boolean).join(" ");
}
var Si = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Si || {}), xm = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(xm || {});
function _n({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: l, visible: o = !0, name: i }) {
  let u = ff(t, e);
  if (o) return Vr(u, n, r, i);
  let s = l ?? 0;
  if (s & 2) {
    let { static: c = !1, ...h } = u;
    if (c) return Vr(h, n, r, i);
  }
  if (s & 1) {
    let { unmount: c = !0, ...h } = u;
    return et(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Vr({ ...h, hidden: !0, style: { display: "none" } }, n, r, i);
    } });
  }
  return Vr(u, n, r, i);
}
function Vr(e, t = {}, n, r) {
  let { as: l = n, children: o, refName: i = "ref", ...u } = Eo(e, ["unmount", "static"]), s = e.ref !== void 0 ? { [i]: e.ref } : {}, c = typeof o == "function" ? o(t) : o;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t));
  let h = {};
  if (t) {
    let p = !1, m = [];
    for (let [w, v] of Object.entries(t)) typeof v == "boolean" && (p = !0), v === !0 && m.push(w);
    p && (h["data-headlessui-state"] = m.join(" "));
  }
  if (l === P.Fragment && Object.keys(ki(u)).length > 0) {
    if (!P.isValidElement(c) || Array.isArray(c) && c.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
    let p = c.props, m = typeof (p == null ? void 0 : p.className) == "function" ? (...v) => As(p == null ? void 0 : p.className(...v), u.className) : As(p == null ? void 0 : p.className, u.className), w = m ? { className: m } : {};
    return P.cloneElement(c, Object.assign({}, ff(c.props, ki(Eo(u, ["ref"]))), h, s, Em(c.ref, s.ref), w));
  }
  return P.createElement(l, Object.assign({}, Eo(u, ["ref"]), l !== P.Fragment && s, l !== P.Fragment && h), c);
}
function Em(...e) {
  return { ref: e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  } };
}
function ff(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let l in r) l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n) Object.assign(t, { [r](l, ...o) {
    let i = n[r];
    for (let u of i) {
      if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented) return;
      u(l, ...o);
    }
  } });
  return t;
}
function Pn(e) {
  var t;
  return Object.assign(P.forwardRef(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function ki(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Eo(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Cm(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && _m(n) ? !1 : r;
}
function _m(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function df(e = {}, t = null, n = []) {
  for (let [r, l] of Object.entries(e)) mf(n, pf(t, r), l);
  return n;
}
function pf(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function mf(e, t, n) {
  if (Array.isArray(n)) for (let [r, l] of n.entries()) mf(e, pf(t, r.toString()), l);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : df(n, t, e);
}
let Pm = "div";
var hf = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(hf || {});
function Nm(e, t) {
  let { features: n = 1, ...r } = e, l = { ref: t, "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return _n({ ourProps: l, theirProps: r, slot: {}, defaultTag: Pm, name: "Hidden" });
}
let Tm = Pn(Nm), xu = P.createContext(null);
xu.displayName = "OpenClosedContext";
var pr = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(pr || {});
function Lm() {
  return P.useContext(xu);
}
function Om({ value: e, children: t }) {
  return Qe.createElement(xu.Provider, { value: e }, t);
}
var te = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(te || {});
function Rm(e, t, n) {
  let [r, l] = P.useState(n), o = e !== void 0, i = P.useRef(o), u = P.useRef(!1), s = P.useRef(!1);
  return o && !i.current && !u.current ? (u.current = !0, i.current = o, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !o && i.current && !s.current && (s.current = !0, i.current = o, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [o ? e : r, K((c) => (o || l(c), t == null ? void 0 : t(c)))];
}
function Us(e) {
  return [e.screenX, e.screenY];
}
function Im() {
  let e = P.useRef([-1, -1]);
  return { wasMoved(t) {
    let n = Us(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Us(t);
  } };
}
var zm = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(zm || {}), $m = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))($m || {}), jm = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(jm || {}), Dm = ((e) => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterOption = 5] = "RegisterOption", e[e.UnregisterOption = 6] = "UnregisterOption", e[e.RegisterLabel = 7] = "RegisterLabel", e))(Dm || {});
function Co(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = vm(t(e.options.slice()), (o) => o.dataRef.current.domRef.current), l = n ? r.indexOf(n) : null;
  return l === -1 && (l = null), { options: r, activeOptionIndex: l };
}
let Fm = { 1(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 ? e : { ...e, activeOptionIndex: null, listboxState: 1 };
}, 0(e) {
  if (e.dataRef.current.disabled || e.listboxState === 0) return e;
  let t = e.activeOptionIndex, { isSelected: n } = e.dataRef.current, r = e.options.findIndex((l) => n(l.dataRef.current.value));
  return r !== -1 && (t = r), { ...e, listboxState: 0, activeOptionIndex: t };
}, 2(e, t) {
  var n;
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let r = Co(e), l = km(t, { resolveItems: () => r.options, resolveActiveIndex: () => r.activeOptionIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return { ...e, ...r, searchQuery: "", activeOptionIndex: l, activationTrigger: (n = t.trigger) != null ? n : 1 };
}, 3: (e, t) => {
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), l = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find((i) => {
    var u;
    return !i.dataRef.current.disabled && ((u = i.dataRef.current.textValue) == null ? void 0 : u.startsWith(r));
  }), o = l ? e.options.indexOf(l) : -1;
  return o === -1 || o === e.activeOptionIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeOptionIndex: o, activationTrigger: 1 };
}, 4(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : { ...e, searchQuery: "" };
}, 5: (e, t) => {
  let n = { id: t.id, dataRef: t.dataRef }, r = Co(e, (l) => [...l, n]);
  return e.activeOptionIndex === null && e.dataRef.current.isSelected(t.dataRef.current.value) && (r.activeOptionIndex = r.options.indexOf(n)), { ...e, ...r };
}, 6: (e, t) => {
  let n = Co(e, (r) => {
    let l = r.findIndex((o) => o.id === t.id);
    return l !== -1 && r.splice(l, 1), r;
  });
  return { ...e, ...n, activationTrigger: 1 };
}, 7: (e, t) => ({ ...e, labelId: t.id }) }, Eu = P.createContext(null);
Eu.displayName = "ListboxActionsContext";
function Sr(e) {
  let t = P.useContext(Eu);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Sr), n;
  }
  return t;
}
let Cu = P.createContext(null);
Cu.displayName = "ListboxDataContext";
function kr(e) {
  let t = P.useContext(Cu);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, kr), n;
  }
  return t;
}
function Mm(e, t) {
  return et(t.type, Fm, e, t);
}
let Am = P.Fragment;
function Um(e, t) {
  let { value: n, defaultValue: r, form: l, name: o, onChange: i, by: u = (I, F) => I === F, disabled: s = !1, horizontal: c = !1, multiple: h = !1, ...p } = e;
  const m = c ? "horizontal" : "vertical";
  let w = wr(t), [v = h ? [] : void 0, g] = Rm(n, i, r), [T, f] = P.useReducer(Mm, { dataRef: P.createRef(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), a = P.useRef({ static: !1, hold: !1 }), d = P.useRef(null), y = P.useRef(null), k = P.useRef(null), x = K(typeof u == "string" ? (I, F) => {
    let W = u;
    return (I == null ? void 0 : I[W]) === (F == null ? void 0 : F[W]);
  } : u), N = P.useCallback((I) => et(E.mode, { 1: () => v.some((F) => x(F, I)), 0: () => x(v, I) }), [v]), E = P.useMemo(() => ({ ...T, value: v, disabled: s, mode: h ? 1 : 0, orientation: m, compare: x, isSelected: N, optionsPropsRef: a, labelRef: d, buttonRef: y, optionsRef: k }), [v, s, h, T]);
  it(() => {
    T.dataRef.current = E;
  }, [E]), ym([E.buttonRef, E.optionsRef], (I, F) => {
    var W;
    f({ type: 1 }), cf(F, ku.Loose) || (I.preventDefault(), (W = E.buttonRef.current) == null || W.focus());
  }, E.listboxState === 0);
  let V = P.useMemo(() => ({ open: E.listboxState === 0, disabled: s, value: v }), [E, s, v]), z = K((I) => {
    let F = E.options.find((W) => W.id === I);
    F && Ye(F.dataRef.current.value);
  }), ke = K(() => {
    if (E.activeOptionIndex !== null) {
      let { dataRef: I, id: F } = E.options[E.activeOptionIndex];
      Ye(I.current.value), f({ type: 2, focus: ye.Specific, id: F });
    }
  }), Lt = K(() => f({ type: 0 })), Ot = K(() => f({ type: 1 })), xr = K((I, F, W) => I === ye.Specific ? f({ type: 2, focus: ye.Specific, id: F, trigger: W }) : f({ type: 2, focus: I, trigger: W })), Wl = K((I, F) => (f({ type: 5, id: I, dataRef: F }), () => f({ type: 6, id: I }))), Nn = K((I) => (f({ type: 7, id: I }), () => f({ type: 7, id: null }))), Ye = K((I) => et(E.mode, { 0() {
    return g == null ? void 0 : g(I);
  }, 1() {
    let F = E.value.slice(), W = F.findIndex((Xe) => x(Xe, I));
    return W === -1 ? F.push(I) : F.splice(W, 1), g == null ? void 0 : g(F);
  } })), C = K((I) => f({ type: 3, value: I })), L = K(() => f({ type: 4 })), R = P.useMemo(() => ({ onChange: Ye, registerOption: Wl, registerLabel: Nn, goToOption: xr, closeListbox: Ot, openListbox: Lt, selectActiveOption: ke, selectOption: z, search: C, clearSearch: L }), []), B = { ref: w }, Q = P.useRef(null), Yt = Pl();
  return P.useEffect(() => {
    Q.current && r !== void 0 && Yt.addEventListener(Q.current, "reset", () => {
      Ye(r);
    });
  }, [Q, Ye]), Qe.createElement(Eu.Provider, { value: R }, Qe.createElement(Cu.Provider, { value: E }, Qe.createElement(Om, { value: et(E.listboxState, { 0: pr.Open, 1: pr.Closed }) }, o != null && v != null && df({ [o]: v }).map(([I, F], W) => Qe.createElement(Tm, { features: hf.Hidden, ref: W === 0 ? (Xe) => {
    var Pu;
    Q.current = (Pu = Xe == null ? void 0 : Xe.closest("form")) != null ? Pu : null;
  } : void 0, ...ki({ key: I, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: l, name: I, value: F }) })), _n({ ourProps: B, theirProps: p, slot: V, defaultTag: Am, name: "Listbox" }))));
}
let Hm = "button";
function Vm(e, t) {
  var n;
  let r = Ql(), { id: l = `headlessui-listbox-button-${r}`, ...o } = e, i = kr("Listbox.Button"), u = Sr("Listbox.Button"), s = wr(i.buttonRef, t), c = Pl(), h = K((T) => {
    switch (T.key) {
      case te.Space:
      case te.Enter:
      case te.ArrowDown:
        T.preventDefault(), u.openListbox(), c.nextFrame(() => {
          i.value || u.goToOption(ye.First);
        });
        break;
      case te.ArrowUp:
        T.preventDefault(), u.openListbox(), c.nextFrame(() => {
          i.value || u.goToOption(ye.Last);
        });
        break;
    }
  }), p = K((T) => {
    switch (T.key) {
      case te.Space:
        T.preventDefault();
        break;
    }
  }), m = K((T) => {
    if (Cm(T.currentTarget)) return T.preventDefault();
    i.listboxState === 0 ? (u.closeListbox(), c.nextFrame(() => {
      var f;
      return (f = i.buttonRef.current) == null ? void 0 : f.focus({ preventScroll: !0 });
    })) : (T.preventDefault(), u.openListbox());
  }), w = sf(() => {
    if (i.labelId) return [i.labelId, l].join(" ");
  }, [i.labelId, l]), v = P.useMemo(() => ({ open: i.listboxState === 0, disabled: i.disabled, value: i.value }), [i]), g = { ref: s, id: l, type: gm(e, i.buttonRef), "aria-haspopup": "listbox", "aria-controls": (n = i.optionsRef.current) == null ? void 0 : n.id, "aria-expanded": i.disabled ? void 0 : i.listboxState === 0, "aria-labelledby": w, disabled: i.disabled, onKeyDown: h, onKeyUp: p, onClick: m };
  return _n({ ourProps: g, theirProps: o, slot: v, defaultTag: Hm, name: "Listbox.Button" });
}
let Bm = "label";
function Qm(e, t) {
  let n = Ql(), { id: r = `headlessui-listbox-label-${n}`, ...l } = e, o = kr("Listbox.Label"), i = Sr("Listbox.Label"), u = wr(o.labelRef, t);
  it(() => i.registerLabel(r), [r]);
  let s = K(() => {
    var h;
    return (h = o.buttonRef.current) == null ? void 0 : h.focus({ preventScroll: !0 });
  }), c = P.useMemo(() => ({ open: o.listboxState === 0, disabled: o.disabled }), [o]);
  return _n({ ourProps: { ref: u, id: r, onClick: s }, theirProps: l, slot: c, defaultTag: Bm, name: "Listbox.Label" });
}
let Wm = "ul", Km = Si.RenderStrategy | Si.Static;
function Ym(e, t) {
  var n;
  let r = Ql(), { id: l = `headlessui-listbox-options-${r}`, ...o } = e, i = kr("Listbox.Options"), u = Sr("Listbox.Options"), s = wr(i.optionsRef, t), c = Pl(), h = Pl(), p = Lm(), m = p !== null ? (p & pr.Open) === pr.Open : i.listboxState === 0;
  P.useEffect(() => {
    var f;
    let a = i.optionsRef.current;
    a && i.listboxState === 0 && a !== ((f = af(a)) == null ? void 0 : f.activeElement) && a.focus({ preventScroll: !0 });
  }, [i.listboxState, i.optionsRef]);
  let w = K((f) => {
    switch (h.dispose(), f.key) {
      case te.Space:
        if (i.searchQuery !== "") return f.preventDefault(), f.stopPropagation(), u.search(f.key);
      case te.Enter:
        if (f.preventDefault(), f.stopPropagation(), i.activeOptionIndex !== null) {
          let { dataRef: a } = i.options[i.activeOptionIndex];
          u.onChange(a.current.value);
        }
        i.mode === 0 && (u.closeListbox(), dr().nextFrame(() => {
          var a;
          return (a = i.buttonRef.current) == null ? void 0 : a.focus({ preventScroll: !0 });
        }));
        break;
      case et(i.orientation, { vertical: te.ArrowDown, horizontal: te.ArrowRight }):
        return f.preventDefault(), f.stopPropagation(), u.goToOption(ye.Next);
      case et(i.orientation, { vertical: te.ArrowUp, horizontal: te.ArrowLeft }):
        return f.preventDefault(), f.stopPropagation(), u.goToOption(ye.Previous);
      case te.Home:
      case te.PageUp:
        return f.preventDefault(), f.stopPropagation(), u.goToOption(ye.First);
      case te.End:
      case te.PageDown:
        return f.preventDefault(), f.stopPropagation(), u.goToOption(ye.Last);
      case te.Escape:
        return f.preventDefault(), f.stopPropagation(), u.closeListbox(), c.nextFrame(() => {
          var a;
          return (a = i.buttonRef.current) == null ? void 0 : a.focus({ preventScroll: !0 });
        });
      case te.Tab:
        f.preventDefault(), f.stopPropagation();
        break;
      default:
        f.key.length === 1 && (u.search(f.key), h.setTimeout(() => u.clearSearch(), 350));
        break;
    }
  }), v = sf(() => {
    var f, a, d;
    return (d = (f = i.labelRef.current) == null ? void 0 : f.id) != null ? d : (a = i.buttonRef.current) == null ? void 0 : a.id;
  }, [i.labelRef.current, i.buttonRef.current]), g = P.useMemo(() => ({ open: i.listboxState === 0 }), [i]), T = { "aria-activedescendant": i.activeOptionIndex === null || (n = i.options[i.activeOptionIndex]) == null ? void 0 : n.id, "aria-multiselectable": i.mode === 1 ? !0 : void 0, "aria-labelledby": v, "aria-orientation": i.orientation, id: l, onKeyDown: w, role: "listbox", tabIndex: 0, ref: s };
  return _n({ ourProps: T, theirProps: o, slot: g, defaultTag: Wm, features: Km, visible: m, name: "Listbox.Options" });
}
let Xm = "li";
function Gm(e, t) {
  let n = Ql(), { id: r = `headlessui-listbox-option-${n}`, disabled: l = !1, value: o, ...i } = e, u = kr("Listbox.Option"), s = Sr("Listbox.Option"), c = u.activeOptionIndex !== null ? u.options[u.activeOptionIndex].id === r : !1, h = u.isSelected(o), p = P.useRef(null), m = Bl({ disabled: l, value: o, domRef: p, get textValue() {
    var k, x;
    return (x = (k = p.current) == null ? void 0 : k.textContent) == null ? void 0 : x.toLowerCase();
  } }), w = wr(t, p);
  it(() => {
    if (u.listboxState !== 0 || !c || u.activationTrigger === 0) return;
    let k = dr();
    return k.requestAnimationFrame(() => {
      var x, N;
      (N = (x = p.current) == null ? void 0 : x.scrollIntoView) == null || N.call(x, { block: "nearest" });
    }), k.dispose;
  }, [p, c, u.listboxState, u.activationTrigger, u.activeOptionIndex]), it(() => s.registerOption(r, m), [m, r]);
  let v = K((k) => {
    if (l) return k.preventDefault();
    s.onChange(o), u.mode === 0 && (s.closeListbox(), dr().nextFrame(() => {
      var x;
      return (x = u.buttonRef.current) == null ? void 0 : x.focus({ preventScroll: !0 });
    }));
  }), g = K(() => {
    if (l) return s.goToOption(ye.Nothing);
    s.goToOption(ye.Specific, r);
  }), T = Im(), f = K((k) => T.update(k)), a = K((k) => {
    T.wasMoved(k) && (l || c || s.goToOption(ye.Specific, r, 0));
  }), d = K((k) => {
    T.wasMoved(k) && (l || c && s.goToOption(ye.Nothing));
  }), y = P.useMemo(() => ({ active: c, selected: h, disabled: l }), [c, h, l]);
  return _n({ ourProps: { id: r, ref: w, role: "option", tabIndex: l === !0 ? void 0 : -1, "aria-disabled": l === !0 ? !0 : void 0, "aria-selected": h, disabled: void 0, onClick: v, onFocus: g, onPointerEnter: f, onMouseEnter: f, onPointerMove: a, onMouseMove: a, onPointerLeave: d, onMouseLeave: d }, theirProps: i, slot: y, defaultTag: Xm, name: "Listbox.Option" });
}
let Zm = Pn(Um), Jm = Pn(Vm), qm = Pn(Qm), bm = Pn(Ym), eh = Pn(Gm), _o = Object.assign(Zm, { Button: Jm, Label: qm, Options: bm, Option: eh });
const th = "relative w-full rounded-md border py-2 pl-3 pr-10 text-left sm:text-sm cursor-default cursor-default border-gray-300 bg-gray-50 text-gray-500", xi = (e) => e.text ? /* @__PURE__ */ O.jsx("div", { className: "tooltiptext flex items-center", children: /* @__PURE__ */ O.jsx("div", { className: "px-2 text-center w-full block", children: e.text }) }) : /* @__PURE__ */ O.jsx(O.Fragment, {}), Hs = (e) => /* @__PURE__ */ O.jsx(_o, { children: /* @__PURE__ */ O.jsxs("div", { className: kn("w-full tooltip", e.disabledTextDirection && e.disabledTextDirection === "left" ? "tooltip-left" : ""), children: [
  /* @__PURE__ */ O.jsx(_o.Label, { className: kn("block text-sm font-medium text-gray-700 ") }),
  /* @__PURE__ */ O.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ O.jsxs(_o.Button, { className: th, children: [
      /* @__PURE__ */ O.jsx("span", { className: "block truncate", children: e.text }),
      /* @__PURE__ */ O.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" })
    ] }),
    e.disabledText && /* @__PURE__ */ O.jsx(xi, { text: e.disabledText })
  ] })
] }) }), nh = "block w-full text-gray-700 rounded-md border border-gray-300 bg-white py-2 pr-3 text-sm placeholder-gray-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-gray-400 focus:ring-gray-400 disabled:cursor-default disabled:border-gray-300 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm hover:bg-gray-100", rh = P.forwardRef(function(t, n) {
  const { disabled: r, disabledText: l, disabledTextDirection: o, tooltipText: i, ...u } = t;
  return /* @__PURE__ */ O.jsxs("div", { className: kn("tooltip w-full h-full", o && o === "left" ? "tooltip-left" : ""), children: [
    /* @__PURE__ */ O.jsx(
      "input",
      {
        type: "text",
        autoComplete: "off",
        className: nh,
        ...u,
        ref: n,
        style: { width: "calc(100% - 1px)" },
        disabled: r ?? !1
      }
    ),
    r && l && /* @__PURE__ */ O.jsx(xi, { text: l }),
    !r && i && /* @__PURE__ */ O.jsx(xi, { text: i })
  ] });
}), lh = (e) => /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx("input", { className: "hidden", type: "text", id: e.name, name: e.name, value: e.value }) });
var Ei = function(e, t) {
  return Ei = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
  }, Ei(e, t);
};
function vf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ei(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Vs(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ci(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), l, o = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(l = r.next()).done; ) o.push(l.value);
  } catch (u) {
    i = { error: u };
  } finally {
    try {
      l && !l.done && (n = r.return) && n.call(r);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}
function _i(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, l = t.length, o; r < l; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function tt(e) {
  return typeof e == "function";
}
function oh(e) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Po = oh(function(e) {
  return function(n) {
    e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, l) {
      return l + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Bs(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var _u = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, n, r, l, o;
    if (!this.closed) {
      this.closed = !0;
      var i = this._parentage;
      if (i)
        if (this._parentage = null, Array.isArray(i))
          try {
            for (var u = Vs(i), s = u.next(); !s.done; s = u.next()) {
              var c = s.value;
              c.remove(this);
            }
          } catch (g) {
            t = { error: g };
          } finally {
            try {
              s && !s.done && (n = u.return) && n.call(u);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          i.remove(this);
      var h = this.initialTeardown;
      if (tt(h))
        try {
          h();
        } catch (g) {
          o = g instanceof Po ? g.errors : [g];
        }
      var p = this._finalizers;
      if (p) {
        this._finalizers = null;
        try {
          for (var m = Vs(p), w = m.next(); !w.done; w = m.next()) {
            var v = w.value;
            try {
              Qs(v);
            } catch (g) {
              o = o ?? [], g instanceof Po ? o = _i(_i([], Ci(o)), Ci(g.errors)) : o.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            w && !w.done && (l = m.return) && l.call(m);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (o)
        throw new Po(o);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        Qs(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var n = this._parentage;
    return n === t || Array.isArray(n) && n.includes(t);
  }, e.prototype._addParent = function(t) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }, e.prototype._removeParent = function(t) {
    var n = this._parentage;
    n === t ? this._parentage = null : Array.isArray(n) && Bs(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && Bs(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}();
_u.EMPTY;
function yf(e) {
  return e instanceof _u || e && "closed" in e && tt(e.remove) && tt(e.add) && tt(e.unsubscribe);
}
function Qs(e) {
  tt(e) ? e() : e.unsubscribe();
}
var gf = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, ih = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, _i([e, t], Ci(n)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function uh(e) {
  ih.setTimeout(function() {
    throw e;
  });
}
function Ws() {
}
function sh(e) {
  e();
}
var wf = function(e) {
  vf(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, yf(n) && n.add(r)) : r.destination = dh, r;
  }
  return t.create = function(n, r, l) {
    return new Pi(n, r, l);
  }, t.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, t.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(n) {
    this.destination.next(n);
  }, t.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(_u), ah = Function.prototype.bind;
function No(e, t) {
  return ah.call(e, t);
}
var ch = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (r) {
        Br(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        Br(r);
      }
    else
      Br(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        Br(n);
      }
  }, e;
}(), Pi = function(e) {
  vf(t, e);
  function t(n, r, l) {
    var o = e.call(this) || this, i;
    if (tt(n) || !n)
      i = {
        next: n ?? void 0,
        error: r ?? void 0,
        complete: l ?? void 0
      };
    else {
      var u;
      o && gf.useDeprecatedNextContext ? (u = Object.create(n), u.unsubscribe = function() {
        return o.unsubscribe();
      }, i = {
        next: n.next && No(n.next, u),
        error: n.error && No(n.error, u),
        complete: n.complete && No(n.complete, u)
      }) : i = n;
    }
    return o.destination = new ch(i), o;
  }
  return t;
}(wf);
function Br(e) {
  uh(e);
}
function fh(e) {
  throw e;
}
var dh = {
  closed: !0,
  next: Ws,
  error: fh,
  complete: Ws
}, ph = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function mh(e) {
  return e;
}
function hh(e) {
  return e.length === 0 ? mh : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(r, l) {
      return l(r);
    }, n);
  };
}
var vh = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var l = this, o = gh(t) ? t : new Pi(t, n, r);
    return sh(function() {
      var i = l, u = i.operator, s = i.source;
      o.add(u ? u.call(o, s) : s ? l._subscribe(o) : l._trySubscribe(o));
    }), o;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (n) {
      t.error(n);
    }
  }, e.prototype.forEach = function(t, n) {
    var r = this;
    return n = Ks(n), new n(function(l, o) {
      var i = new Pi({
        next: function(u) {
          try {
            t(u);
          } catch (s) {
            o(s), i.unsubscribe();
          }
        },
        error: o,
        complete: l
      });
      r.subscribe(i);
    });
  }, e.prototype._subscribe = function(t) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
  }, e.prototype[ph] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return hh(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = Ks(t), new t(function(r, l) {
      var o;
      n.subscribe(function(i) {
        return o = i;
      }, function(i) {
        return l(i);
      }, function() {
        return r(o);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function Ks(e) {
  var t;
  return (t = e ?? gf.Promise) !== null && t !== void 0 ? t : Promise;
}
function yh(e) {
  return e && tt(e.next) && tt(e.error) && tt(e.complete);
}
function gh(e) {
  return e && e instanceof wf || yh(e) && yf(e);
}
const wh = (e) => new vh((t) => {
  P.useEffect(() => {
    function n(r) {
      const o = r.composedPath().includes(e.current);
      e.current && !o && (t.next(r.target), t.complete());
    }
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, [e, t]);
}), Sh = (e) => {
  const t = e.disabled ?? !1, n = e.stylesheetUrl ?? "./webcomponent.css", [r, l] = P.useState(!1), [o, i] = P.useState(!1), [u, s] = P.useState(""), [c, h] = P.useState(e.initSelectedItems || e.items.filter((a) => a.selected)), p = P.useRef(null), m = P.useRef(null);
  wh(p).subscribe({
    next() {
      console.log("click outside trigger"), l(!1), i(!1), s("");
    }
  });
  const v = (a) => {
    const d = [...e.items];
    d.forEach((k) => {
      k.id === a.id && (k.selected = !1);
    });
    const y = c.filter((k) => k.id !== a.id);
    if (h(y), !e.keepSelectOrder)
      e.onChange && e.onChange(d);
    else {
      const k = d.filter((x) => !x.selected);
      e.onChange && (e == null || e.onChange([...y, ...k]));
    }
    i(!0);
  }, g = (a) => {
    const d = [...e.items];
    d.forEach((x) => {
      x.id === a.id && (x.selected = !0);
    });
    const y = c.some((x) => x.id === a.id), k = y ? c : [...c, a];
    if (y || h(k), !e.keepSelectOrder)
      e.onChange && e.onChange(d);
    else {
      const x = d.filter((N) => !N.selected);
      e.onChange && e.onChange([...k, ...x]);
    }
  };
  if (t) {
    const a = e.items.filter((d) => d.selected);
    if (a.length > 0) {
      const d = a.map((y) => y.label).join(", ");
      return /* @__PURE__ */ O.jsx(Hs, { text: d });
    } else
      return /* @__PURE__ */ O.jsx(Hs, { text: e.placeholder });
  }
  const T = e.keepSelectOrder ? c : e.items.filter((a) => a.selected), f = e.items.filter((a) => a.selected).map((a) => a.id).join(",");
  return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    /* @__PURE__ */ O.jsx("style", { children: "@import '" + n + "';" }),
    /* @__PURE__ */ O.jsx(lh, { name: e.controlName, value: f }),
    /* @__PURE__ */ O.jsxs(
      "div",
      {
        ref: p,
        onClick: () => {
          var a;
          i(!0), t || (l(!0), (a = m.current) == null || a.focus());
        },
        className: "w-full tooltip",
        children: [
          /* @__PURE__ */ O.jsxs(
            "div",
            {
              className: kn(
                "w-full border-gray-300 shadow-sm border rounded-md min-h-[38px] relative cursor-pointer",
                o ? "border-gray-400 border-2 -m-[1px]" : "border-gray-300",
                t ? "" : "hover:bg-gray-100"
              ),
              children: [
                T.map((a) => /* @__PURE__ */ O.jsx(im, { item: a, onRemove: v, disabled: t }, a.id)),
                !t && /* @__PURE__ */ O.jsx("span", { className: "h-[36px] w-[240px] inline-block", children: /* @__PURE__ */ O.jsx(
                  rh,
                  {
                    ref: m,
                    value: u,
                    type: "text",
                    placeholder: e.placeholder,
                    className: "w-full ml-3 p-0 align-middle h-full border-transparent focus:border-transparent focus:ring-0 text-sm bg-transparent",
                    onChange: (a) => {
                      a.target && s(a.target.value);
                    },
                    autoComplete: "off"
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ O.jsx("div", { className: "w-full", children: !t && r && /* @__PURE__ */ O.jsx(
            om,
            {
              searchTerm: u,
              items: e.items,
              onAdd: g,
              isOpen: r,
              maximumItemsToRender: e.maximumItemsToRender
            },
            "list"
          ) })
        ]
      }
    )
  ] });
}, kh = qp(Sh, {
  props: {
    items: "json",
    disabled: "boolean",
    keepSelectOrder: "boolean",
    onChange: "function",
    initSelectedItems: "json",
    maximumItemsToRender: "number",
    placeholder: "string",
    stylesheetUrl: "string",
    controlName: "string"
  }
});
customElements.define("combo-box", kh);
const Eh = !0;
export {
  Eh as hmr
};
