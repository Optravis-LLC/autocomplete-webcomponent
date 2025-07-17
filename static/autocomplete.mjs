function Sf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ys = { exports: {} }, j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr = Symbol.for("react.element"), xf = Symbol.for("react.portal"), kf = Symbol.for("react.fragment"), Ef = Symbol.for("react.strict_mode"), Cf = Symbol.for("react.profiler"), _f = Symbol.for("react.provider"), Pf = Symbol.for("react.context"), Nf = Symbol.for("react.forward_ref"), Tf = Symbol.for("react.suspense"), Lf = Symbol.for("react.memo"), Of = Symbol.for("react.lazy"), Nu = Symbol.iterator;
function Rf(e) {
  return e === null || typeof e != "object" ? null : (e = Nu && e[Nu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Gs = Object.assign, Zs = {};
function kn(e, t, n) {
  this.props = e, this.context = t, this.refs = Zs, this.updater = n || Xs;
}
kn.prototype.isReactComponent = {};
kn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
kn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Js() {
}
Js.prototype = kn.prototype;
function Ni(e, t, n) {
  this.props = e, this.context = t, this.refs = Zs, this.updater = n || Xs;
}
var Ti = Ni.prototype = new Js();
Ti.constructor = Ni;
Gs(Ti, kn.prototype);
Ti.isPureReactComponent = !0;
var Tu = Array.isArray, qs = Object.prototype.hasOwnProperty, Li = { current: null }, bs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ea(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) qs.call(t, r) && !bs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
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
        case xf:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Kl(i, 0) : r, Tu(l) ? (n = "", e != null && (n = e.replace(Lu, "$&/") + "/"), Qr(l, t, n, "", function(a) {
    return a;
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
var me = { current: null }, Wr = { transition: null }, jf = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: Wr, ReactCurrentOwner: Li };
j.Children = { map: Er, forEach: function(e, t, n) {
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
j.Component = kn;
j.Fragment = kf;
j.Profiler = Cf;
j.PureComponent = Ni;
j.StrictMode = Ef;
j.Suspense = Tf;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jf;
j.cloneElement = function(e, t, n) {
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
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: mr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
j.createContext = function(e) {
  return e = { $$typeof: Pf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: _f, _context: e }, e.Consumer = e;
};
j.createElement = ea;
j.createFactory = function(e) {
  var t = ea.bind(null, e);
  return t.type = e, t;
};
j.createRef = function() {
  return { current: null };
};
j.forwardRef = function(e) {
  return { $$typeof: Nf, render: e };
};
j.isValidElement = Oi;
j.lazy = function(e) {
  return { $$typeof: Of, _payload: { _status: -1, _result: e }, _init: $f };
};
j.memo = function(e, t) {
  return { $$typeof: Lf, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function(e) {
  var t = Wr.transition;
  Wr.transition = {};
  try {
    e();
  } finally {
    Wr.transition = t;
  }
};
j.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
j.useCallback = function(e, t) {
  return me.current.useCallback(e, t);
};
j.useContext = function(e) {
  return me.current.useContext(e);
};
j.useDebugValue = function() {
};
j.useDeferredValue = function(e) {
  return me.current.useDeferredValue(e);
};
j.useEffect = function(e, t) {
  return me.current.useEffect(e, t);
};
j.useId = function() {
  return me.current.useId();
};
j.useImperativeHandle = function(e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function(e, t) {
  return me.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function(e, t) {
  return me.current.useLayoutEffect(e, t);
};
j.useMemo = function(e, t) {
  return me.current.useMemo(e, t);
};
j.useReducer = function(e, t, n) {
  return me.current.useReducer(e, t, n);
};
j.useRef = function(e) {
  return me.current.useRef(e);
};
j.useState = function(e) {
  return me.current.useState(e);
};
j.useSyncExternalStore = function(e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function() {
  return me.current.useTransition();
};
j.version = "18.2.0";
Ys.exports = j;
var _ = Ys.exports;
const Qe = /* @__PURE__ */ Sf(_);
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
  function t(P, O) {
    var I = P.length;
    P.push(O);
    e: for (; 0 < I; ) {
      var B = I - 1 >>> 1, Q = P[B];
      if (0 < l(Q, O)) P[B] = O, P[I] = Q, I = B;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var O = P[0], I = P.pop();
    if (I !== O) {
      P[0] = I;
      e: for (var B = 0, Q = P.length, Xt = Q >>> 1; B < Xt; ) {
        var z = 2 * (B + 1) - 1, F = P[z], W = z + 1, Xe = P[W];
        if (0 > l(F, I)) W < Q && 0 > l(Xe, F) ? (P[B] = Xe, P[W] = I, B = W) : (P[B] = F, P[z] = I, B = z);
        else if (W < Q && 0 > l(Xe, I)) P[B] = Xe, P[W] = I, B = W;
        else break e;
      }
    }
    return O;
  }
  function l(P, O) {
    var I = P.sortIndex - O.sortIndex;
    return I !== 0 ? I : P.id - O.id;
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
  var s = [], a = [], h = 1, p = null, m = 3, g = !1, v = !1, w = !1, T = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var O = n(a); O !== null; ) {
      if (O.callback === null) r(a);
      else if (O.startTime <= P) r(a), O.sortIndex = O.expirationTime, t(s, O);
      else break;
      O = n(a);
    }
  }
  function S(P) {
    if (w = !1, d(P), !v) if (n(s) !== null) v = !0, Nn(C);
    else {
      var O = n(a);
      O !== null && Ye(S, O.startTime - P);
    }
  }
  function C(P, O) {
    v = !1, w && (w = !1, f(E), E = -1), g = !0;
    var I = m;
    try {
      for (d(O), p = n(s); p !== null && (!(p.expirationTime > O) || P && !fe()); ) {
        var B = p.callback;
        if (typeof B == "function") {
          p.callback = null, m = p.priorityLevel;
          var Q = B(p.expirationTime <= O);
          O = e.unstable_now(), typeof Q == "function" ? p.callback = Q : p === n(s) && r(s), d(O);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var Xt = !0;
      else {
        var z = n(a);
        z !== null && Ye(S, z.startTime - O), Xt = !1;
      }
      return Xt;
    } finally {
      p = null, m = I, g = !1;
    }
  }
  var y = !1, k = null, E = -1, $ = 5, L = -1;
  function fe() {
    return !(e.unstable_now() - L < $);
  }
  function Lt() {
    if (k !== null) {
      var P = e.unstable_now();
      L = P;
      var O = !0;
      try {
        O = k(!0, P);
      } finally {
        O ? Ot() : (y = !1, k = null);
      }
    } else y = !1;
  }
  var Ot;
  if (typeof c == "function") Ot = function() {
    c(Lt);
  };
  else if (typeof MessageChannel < "u") {
    var kr = new MessageChannel(), Wl = kr.port2;
    kr.port1.onmessage = Lt, Ot = function() {
      Wl.postMessage(null);
    };
  } else Ot = function() {
    T(Lt, 0);
  };
  function Nn(P) {
    k = P, y || (y = !0, Ot());
  }
  function Ye(P, O) {
    E = T(function() {
      P(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    v || g || (v = !0, Nn(C));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = m;
    }
    var I = m;
    m = O;
    try {
      return P();
    } finally {
      m = I;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, O) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var I = m;
    m = P;
    try {
      return O();
    } finally {
      m = I;
    }
  }, e.unstable_scheduleCallback = function(P, O, I) {
    var B = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? B + I : B) : I = B, P) {
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
    return Q = I + Q, P = { id: h++, callback: O, priorityLevel: P, startTime: I, expirationTime: Q, sortIndex: -1 }, I > B ? (P.sortIndex = I, t(a, P), n(s) === null && P === n(a) && (w ? (f(E), E = -1) : w = !0, Ye(S, I - B))) : (P.sortIndex = Q, t(s, P), v || g || (v = !0, Nn(C))), P;
  }, e.unstable_shouldYield = fe, e.unstable_wrapCallback = function(P) {
    var O = m;
    return function() {
      var I = m;
      m = O;
      try {
        return P.apply(this, arguments);
      } finally {
        m = I;
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
var la = _, _e = Df;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var oa = /* @__PURE__ */ new Set(), Gn = {};
function Kt(e, t) {
  hn(e, t), hn(e + "Capture", t);
}
function hn(e, t) {
  for (Gn[e] = t, e = 0; e < t.length; e++) oa.add(t[e]);
}
var nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), To = Object.prototype.hasOwnProperty, Mf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ou = {}, Ru = {};
function Ff(e) {
  return To.call(Ru, e) ? !0 : To.call(Ou, e) ? !1 : Mf.test(e) ? Ru[e] = !0 : (Ou[e] = !0, !1);
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
function he(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ie[e] = new he(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ie[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ie[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ie[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ie[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ie[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ie[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ie[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ie[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  ie[t] = new he(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ri, Ii);
  ie[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ri, Ii);
  ie[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zi(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Uf(t, n, l, r) && (n = null), r || l === null ? Ff(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ut = la.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Cr = Symbol.for("react.element"), Zt = Symbol.for("react.portal"), Jt = Symbol.for("react.fragment"), $i = Symbol.for("react.strict_mode"), Lo = Symbol.for("react.profiler"), ia = Symbol.for("react.provider"), ua = Symbol.for("react.context"), ji = Symbol.for("react.forward_ref"), Oo = Symbol.for("react.suspense"), Ro = Symbol.for("react.suspense_list"), Di = Symbol.for("react.memo"), ct = Symbol.for("react.lazy"), sa = Symbol.for("react.offscreen"), Iu = Symbol.iterator;
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
      } catch (a) {
        var r = a;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (a) {
        r = a;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var l = a.stack.split(`
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
    case Jt:
      return "Fragment";
    case Zt:
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
var Mn = Array.isArray;
function an(e, t, n, r) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ju(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(x(92));
      if (Mn(n)) {
        if (1 < n.length) throw Error(x(93));
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
function Mo(e, t) {
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
function Fo(e, t) {
  if (t) {
    if (Wf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
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
function Mi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ho = null, cn = null, fn = null;
function Mu(e) {
  if (e = yr(e)) {
    if (typeof Ho != "function") throw Error(x(280));
    var t = e.stateNode;
    t && (t = Rl(t), Ho(e.stateNode, e.type, t));
  }
}
function ya(e) {
  cn ? fn ? fn.push(e) : fn = [e] : cn = e;
}
function ga() {
  if (cn) {
    var e = cn, t = fn;
    if (fn = cn = null, Mu(e), t) for (e = 0; e < t.length; e++) Mu(t[e]);
  }
}
function wa(e, t) {
  return e(t);
}
function Sa() {
}
var Zl = !1;
function xa(e, t, n) {
  if (Zl) return e(t, n);
  Zl = !0;
  try {
    return wa(e, t, n);
  } finally {
    Zl = !1, (cn !== null || fn !== null) && (Sa(), ga());
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
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
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
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
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
      var a = rl;
      Hn = !1, rl = null;
    } else throw Error(x(198));
    ll || (ll = !0, Bo = a);
  }
}
function Yt(e) {
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
function ka(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Fu(e) {
  if (Yt(e) !== e) throw Error(x(188));
}
function Zf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Yt(e), t === null) throw Error(x(188));
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
        if (o === n) return Fu(l), e;
        if (o === r) return Fu(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
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
        if (!i) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
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
var _a = _e.unstable_scheduleCallback, Au = _e.unstable_cancelCallback, Jf = _e.unstable_shouldYield, qf = _e.unstable_requestPaint, J = _e.unstable_now, bf = _e.unstable_getCurrentPriorityLevel, Fi = _e.unstable_ImmediatePriority, Pa = _e.unstable_UserBlockingPriority, ol = _e.unstable_NormalPriority, ed = _e.unstable_LowPriority, Na = _e.unstable_IdlePriority, Nl = null, We = null;
function td(e) {
  if (We && typeof We.onCommitFiberRoot == "function") try {
    We.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Fe = Math.clz32 ? Math.clz32 : ld, nd = Math.log, rd = Math.LN2;
function ld(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (nd(e) / rd | 0) | 0;
}
var Nr = 64, Tr = 4194304;
function Fn(e) {
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
    u !== 0 ? r = Fn(u) : (o &= i, o !== 0 && (r = Fn(o)));
  } else i = n & ~l, i !== 0 ? r = Fn(i) : o !== 0 && (r = Fn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Fe(t), l = 1 << n, r |= e[n], t &= ~l;
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
    var i = 31 - Fe(o), u = 1 << i, s = l[i];
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
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Fe(t), e[t] = n;
}
function ud(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Ai(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var M = 0;
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
    var n = Yt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ka(n), t !== null) {
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
var dn = ut.ReactCurrentBatchConfig, ul = !0;
function fd(e, t, n, r) {
  var l = M, o = dn.transition;
  dn.transition = null;
  try {
    M = 1, Hi(e, t, n, r);
  } finally {
    M = l, dn.transition = o;
  }
}
function dd(e, t, n, r) {
  var l = M, o = dn.transition;
  dn.transition = null;
  try {
    M = 4, Hi(e, t, n, r);
  } finally {
    M = l, dn.transition = o;
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
  if (sl = null, e = Mi(r), e = $t(e), e !== null) if (t = Yt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ka(t), e !== null) return e;
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
        case Fi:
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
} }), Sd = Ne(wd), xd = G({}, En, { data: 0 }), Qu = Ne(xd), kd = {
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
    var t = kd[e.key] || e.key;
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
var Dd = nt && "TextEvent" in window && !Vn, Ma = nt && (!Wi || Vn && 8 < Vn && 11 >= Vn), Ku = " ", Yu = !1;
function Fa(e, t) {
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
var qt = !1;
function Md(e, t) {
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
function Fd(e, t) {
  if (qt) return e === "compositionend" || !Wi && Fa(e, t) ? (e = Da(), Yr = Vi = mt = null, qt = !1, e) : null;
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
      return Ma && t.locale !== "ko" ? null : t.data;
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
  var t = tn(e);
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
    Ua(t, tr, e, Mi(e)), xa(Ud, t);
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
var Xd = nt && "documentMode" in document && 11 >= document.documentMode, bt = null, Yo = null, Qn = null, Xo = !1;
function bu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xo || bt == null || bt !== nl(r) || (r = bt, "selectionStart" in r && Ki(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Qn && nr(Qn, r) || (Qn = r, r = al(Yo, "onSelect"), 0 < r.length && (t = new Bi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = bt)));
}
function Rr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var en = { animationend: Rr("Animation", "AnimationEnd"), animationiteration: Rr("Animation", "AnimationIteration"), animationstart: Rr("Animation", "AnimationStart"), transitionend: Rr("Transition", "TransitionEnd") }, ro = {}, Wa = {};
nt && (Wa = document.createElement("div").style, "AnimationEvent" in window || (delete en.animationend.animation, delete en.animationiteration.animation, delete en.animationstart.animation), "TransitionEvent" in window || delete en.transitionend.transition);
function Ol(e) {
  if (ro[e]) return ro[e];
  if (!en[e]) return e;
  var t = en[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wa) return ro[e] = t[n];
  return e;
}
var Ka = Ol("animationend"), Ya = Ol("animationiteration"), Xa = Ol("animationstart"), Ga = Ol("transitionend"), Za = /* @__PURE__ */ new Map(), es = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Pt(e, t) {
  Za.set(e, t), Kt(t, [e]);
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
hn("onMouseEnter", ["mouseout", "mouseover"]);
hn("onMouseLeave", ["mouseout", "mouseover"]);
hn("onPointerEnter", ["pointerout", "pointerover"]);
hn("onPointerLeave", ["pointerout", "pointerover"]);
Kt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
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
        var u = r[i], s = u.instance, a = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        ts(l, u, a), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        ts(l, u, a), o = s;
      }
    }
  }
  if (ll) throw e = Bo, ll = !1, Bo = null, e;
}
function U(e, t) {
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
  xa(function() {
    var a = o, h = Mi(n), p = [];
    e: {
      var m = Za.get(e);
      if (m !== void 0) {
        var g = Bi, v = e;
        switch (e) {
          case "keypress":
            if (Xr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Nd;
            break;
          case "focusin":
            v = "focus", g = eo;
            break;
          case "focusout":
            v = "blur", g = eo;
            break;
          case "beforeblur":
          case "afterblur":
            g = eo;
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
            g = Bu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = hd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Od;
            break;
          case Ka:
          case Ya:
          case Xa:
            g = gd;
            break;
          case Ga:
            g = Id;
            break;
          case "scroll":
            g = pd;
            break;
          case "wheel":
            g = $d;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Sd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Wu;
        }
        var w = (t & 4) !== 0, T = !w && e === "scroll", f = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var S = d.stateNode;
          if (d.tag === 5 && S !== null && (d = S, f !== null && (S = Jn(c, f), S != null && w.push(lr(c, S, d)))), T) break;
          c = c.return;
        }
        0 < w.length && (m = new g(m, v, null, n, h), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && n !== Uo && (v = n.relatedTarget || n.fromElement) && ($t(v) || v[rt])) break e;
        if ((g || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (v = n.relatedTarget || n.toElement, g = a, v = v ? $t(v) : null, v !== null && (T = Yt(v), v !== T || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null, v = a), g !== v)) {
          if (w = Bu, S = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = Wu, S = "onPointerLeave", f = "onPointerEnter", c = "pointer"), T = g == null ? m : tn(g), d = v == null ? m : tn(v), m = new w(S, c + "leave", g, n, h), m.target = T, m.relatedTarget = d, S = null, $t(h) === a && (w = new w(f, c + "enter", v, n, h), w.target = d, w.relatedTarget = T, S = w), T = S, g && v) t: {
            for (w = g, f = v, c = 0, d = w; d; d = Gt(d)) c++;
            for (d = 0, S = f; S; S = Gt(S)) d++;
            for (; 0 < c - d; ) w = Gt(w), c--;
            for (; 0 < d - c; ) f = Gt(f), d--;
            for (; c--; ) {
              if (w === f || f !== null && w === f.alternate) break t;
              w = Gt(w), f = Gt(f);
            }
            w = null;
          }
          else w = null;
          g !== null && ns(p, m, g, w, !1), v !== null && T !== null && ns(p, T, v, w, !0);
        }
      }
      e: {
        if (m = a ? tn(a) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var C = Hd;
        else if (Xu(m)) if (Ha) C = Wd;
        else {
          C = Bd;
          var y = Vd;
        }
        else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = Qd);
        if (C && (C = C(e, a))) {
          Ua(p, C, n, h);
          break e;
        }
        y && y(e, m, a), e === "focusout" && (y = m._wrapperState) && y.controlled && m.type === "number" && jo(m, "number", m.value);
      }
      switch (y = a ? tn(a) : window, e) {
        case "focusin":
          (Xu(y) || y.contentEditable === "true") && (bt = y, Yo = a, Qn = null);
          break;
        case "focusout":
          Qn = Yo = bt = null;
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
      var k;
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
      else qt ? Fa(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Ma && n.locale !== "ko" && (qt || E !== "onCompositionStart" ? E === "onCompositionEnd" && qt && (k = Da()) : (mt = h, Vi = "value" in mt ? mt.value : mt.textContent, qt = !0)), y = al(a, E), 0 < y.length && (E = new Qu(E, e, null, n, h), p.push({ event: E, listeners: y }), k ? E.data = k : (k = Aa(n), k !== null && (E.data = k)))), (k = Dd ? Md(e, n) : Fd(e, n)) && (a = al(a, "onBeforeInput"), 0 < a.length && (h = new Qu("onBeforeInput", "beforeinput", null, n, h), p.push({ event: h, listeners: a }), h.data = k));
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
function Gt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ns(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && a !== null && (u = a, l ? (s = Jn(n, o), s != null && i.unshift(lr(n, s, u))) : l || (s = Jn(n, o), s != null && i.push(lr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var qd = /\r\n?/g, bd = /\u0000|\uFFFD/g;
function rs(e) {
  return (typeof e == "string" ? e : "" + e).replace(qd, `
`).replace(bd, "");
}
function zr(e, t, n) {
  if (t = rs(t), rs(e) !== t && n) throw Error(x(425));
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
function tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Rl(e) {
  return e[or] || null;
}
var ei = [], nn = -1;
function Nt(e) {
  return { current: e };
}
function H(e) {
  0 > nn || (e.current = ei[nn], ei[nn] = null, nn--);
}
function A(e, t) {
  nn++, ei[nn] = e.current, e.current = t;
}
var _t = {}, ce = Nt(_t), we = Nt(!1), Ut = _t;
function vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Se(e) {
  return e = e.childContextTypes, e != null;
}
function fl() {
  H(we), H(ce);
}
function is(e, t, n) {
  if (ce.current !== _t) throw Error(x(168));
  A(ce, t), A(we, n);
}
function ba(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Vf(e) || "Unknown", l));
  return G({}, n, r);
}
function dl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _t, Ut = ce.current, A(ce, e), A(we, we.current), !0;
}
function us(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n ? (e = ba(e, t, Ut), r.__reactInternalMemoizedMergedChildContext = e, H(we), H(ce), A(ce, e)) : H(we), A(we, n);
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
    var e = 0, t = M;
    try {
      var n = Ze;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ze = null, Il = !1;
    } catch (l) {
      throw Ze !== null && (Ze = Ze.slice(e + 1)), _a(Fi, Tt), l;
    } finally {
      M = t, ao = !1;
    }
  }
  return null;
}
var rn = [], ln = 0, pl = null, ml = 0, Te = [], Le = 0, Ht = null, Je = 1, qe = "";
function It(e, t) {
  rn[ln++] = ml, rn[ln++] = pl, pl = e, ml = t;
}
function tc(e, t, n) {
  Te[Le++] = Je, Te[Le++] = qe, Te[Le++] = Ht, Ht = e;
  var r = Je;
  e = qe;
  var l = 32 - Fe(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Fe(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Je = 1 << 32 - Fe(t) + l | n << l | r, qe = o + e;
  } else Je = 1 << o | n << l | r, qe = e;
}
function Yi(e) {
  e.return !== null && (It(e, 1), tc(e, 1, 0));
}
function Xi(e) {
  for (; e === pl; ) pl = rn[--ln], rn[ln] = null, ml = rn[--ln], rn[ln] = null;
  for (; e === Ht; ) Ht = Te[--Le], Te[Le] = null, qe = Te[--Le], Te[Le] = null, Je = Te[--Le], Te[Le] = null;
}
var Ce = null, Ee = null, V = !1, Me = null;
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
  if (V) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!ss(e, t)) {
        if (ti(e)) throw Error(x(418));
        t = wt(n.nextSibling);
        var r = Ce;
        t && ss(e, t) ? nc(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, Ce = e);
      }
    } else {
      if (ti(e)) throw Error(x(418));
      e.flags = e.flags & -4097 | 2, V = !1, Ce = e;
    }
  }
}
function as(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ce = e;
}
function $r(e) {
  if (e !== Ce) return !1;
  if (!V) return as(e), V = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Jo(e.type, e.memoizedProps)), t && (t = Ee)) {
    if (ti(e)) throw rc(), Error(x(418));
    for (; t; ) nc(e, t), t = wt(t.nextSibling);
  }
  if (as(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
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
function yn() {
  Ee = Ce = null, V = !1;
}
function Gi(e) {
  Me === null ? Me = [e] : Me.push(e);
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
var hl = Nt(null), vl = null, on = null, Zi = null;
function Ji() {
  Zi = on = vl = null;
}
function qi(e) {
  var t = hl.current;
  H(hl), e._currentValue = t;
}
function ri(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function pn(e, t) {
  vl = e, Zi = on = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ye = !0), e.firstContext = null);
}
function Ie(e) {
  var t = e._currentValue;
  if (Zi !== e) if (e = { context: e, memoizedValue: t, next: null }, on === null) {
    if (vl === null) throw Error(x(308));
    on = e, vl.dependencies = { lanes: 0, firstContext: e };
  } else on = on.next = e;
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
  if (r = r.shared, D & 2) {
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
    var s = u, a = s.next;
    s.next = null, i === null ? o = a : i.next = a, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = a : u.next = a, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var p = l.baseState;
    i = 0, h = a = s = null, u = o;
    do {
      var m = u.lane, g = u.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var v = e, w = u;
          switch (m = t, g = n, w.tag) {
            case 1:
              if (v = w.payload, typeof v == "function") {
                p = v.call(g, p, m);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = w.payload, m = typeof v == "function" ? v.call(g, p, m) : v, m == null) break e;
              p = G({}, p, m);
              break e;
            case 2:
              ft = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else g = { eventTime: g, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = g, s = p) : h = h.next = g, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = p), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
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
      if (r.callback = null, r = n, typeof l != "function") throw Error(x(191, l));
      l.call(r);
    }
  }
}
var ic = new la.Component().refs;
function li(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Yt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = pe(), l = kt(e), o = be(r, l);
  o.payload = t, n != null && (o.callback = n), t = St(e, o, l), t !== null && (Ae(t, e, l, r), Gr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = pe(), l = kt(e), o = be(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = St(e, o, l), t !== null && (Ae(t, e, l, r), Gr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = pe(), r = kt(e), l = be(n, r);
  l.tag = 2, t != null && (l.callback = t), t = St(e, l, r), t !== null && (Ae(t, e, r, n), Gr(t, e, r));
} };
function ds(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !nr(n, r) || !nr(l, o) : !0;
}
function uc(e, t, n) {
  var r = !1, l = _t, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ie(o) : (l = Se(t) ? Ut : ce.current, r = t.contextTypes, o = (r = r != null) ? vn(e, l) : _t), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ps(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zl.enqueueReplaceState(t, t.state, null);
}
function oi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = ic, eu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ie(o) : (o = Se(t) ? Ut : ce.current, l.context = vn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (li(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && zl.enqueueReplaceState(l, l.state, null), yl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === ic && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function jr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ms(e) {
  var t = e._init;
  return t(e._payload);
}
function sc(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [c], f.flags |= 16) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function l(f, c) {
    return f = Et(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, S) {
    return c === null || c.tag !== 6 ? (c = yo(d, f.mode, S), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function s(f, c, d, S) {
    var C = d.type;
    return C === Jt ? h(f, c, d.props.children, S, d.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ct && ms(C) === c.type) ? (S = l(c, d.props), S.ref = zn(f, c, d), S.return = f, S) : (S = tl(d.type, d.key, d.props, null, f.mode, S), S.ref = zn(f, c, d), S.return = f, S);
  }
  function a(f, c, d, S) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = go(d, f.mode, S), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, S, C) {
    return c === null || c.tag !== 7 ? (c = Ft(d, f.mode, S, C), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function p(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = yo("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Cr:
          return d = tl(c.type, c.key, c.props, null, f.mode, d), d.ref = zn(f, null, c), d.return = f, d;
        case Zt:
          return c = go(c, f.mode, d), c.return = f, c;
        case ct:
          var S = c._init;
          return p(f, S(c._payload), d);
      }
      if (Mn(c) || Tn(c)) return c = Ft(c, f.mode, d, null), c.return = f, c;
      jr(f, c);
    }
    return null;
  }
  function m(f, c, d, S) {
    var C = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return C !== null ? null : u(f, c, "" + d, S);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Cr:
          return d.key === C ? s(f, c, d, S) : null;
        case Zt:
          return d.key === C ? a(f, c, d, S) : null;
        case ct:
          return C = d._init, m(
            f,
            c,
            C(d._payload),
            S
          );
      }
      if (Mn(d) || Tn(d)) return C !== null ? null : h(f, c, d, S, null);
      jr(f, d);
    }
    return null;
  }
  function g(f, c, d, S, C) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return f = f.get(d) || null, u(c, f, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Cr:
          return f = f.get(S.key === null ? d : S.key) || null, s(c, f, S, C);
        case Zt:
          return f = f.get(S.key === null ? d : S.key) || null, a(c, f, S, C);
        case ct:
          var y = S._init;
          return g(f, c, d, y(S._payload), C);
      }
      if (Mn(S) || Tn(S)) return f = f.get(d) || null, h(c, f, S, C, null);
      jr(c, S);
    }
    return null;
  }
  function v(f, c, d, S) {
    for (var C = null, y = null, k = c, E = c = 0, $ = null; k !== null && E < d.length; E++) {
      k.index > E ? ($ = k, k = null) : $ = k.sibling;
      var L = m(f, k, d[E], S);
      if (L === null) {
        k === null && (k = $);
        break;
      }
      e && k && L.alternate === null && t(f, k), c = o(L, c, E), y === null ? C = L : y.sibling = L, y = L, k = $;
    }
    if (E === d.length) return n(f, k), V && It(f, E), C;
    if (k === null) {
      for (; E < d.length; E++) k = p(f, d[E], S), k !== null && (c = o(k, c, E), y === null ? C = k : y.sibling = k, y = k);
      return V && It(f, E), C;
    }
    for (k = r(f, k); E < d.length; E++) $ = g(k, f, E, d[E], S), $ !== null && (e && $.alternate !== null && k.delete($.key === null ? E : $.key), c = o($, c, E), y === null ? C = $ : y.sibling = $, y = $);
    return e && k.forEach(function(fe) {
      return t(f, fe);
    }), V && It(f, E), C;
  }
  function w(f, c, d, S) {
    var C = Tn(d);
    if (typeof C != "function") throw Error(x(150));
    if (d = C.call(d), d == null) throw Error(x(151));
    for (var y = C = null, k = c, E = c = 0, $ = null, L = d.next(); k !== null && !L.done; E++, L = d.next()) {
      k.index > E ? ($ = k, k = null) : $ = k.sibling;
      var fe = m(f, k, L.value, S);
      if (fe === null) {
        k === null && (k = $);
        break;
      }
      e && k && fe.alternate === null && t(f, k), c = o(fe, c, E), y === null ? C = fe : y.sibling = fe, y = fe, k = $;
    }
    if (L.done) return n(
      f,
      k
    ), V && It(f, E), C;
    if (k === null) {
      for (; !L.done; E++, L = d.next()) L = p(f, L.value, S), L !== null && (c = o(L, c, E), y === null ? C = L : y.sibling = L, y = L);
      return V && It(f, E), C;
    }
    for (k = r(f, k); !L.done; E++, L = d.next()) L = g(k, f, E, L.value, S), L !== null && (e && L.alternate !== null && k.delete(L.key === null ? E : L.key), c = o(L, c, E), y === null ? C = L : y.sibling = L, y = L);
    return e && k.forEach(function(Lt) {
      return t(f, Lt);
    }), V && It(f, E), C;
  }
  function T(f, c, d, S) {
    if (typeof d == "object" && d !== null && d.type === Jt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Cr:
          e: {
            for (var C = d.key, y = c; y !== null; ) {
              if (y.key === C) {
                if (C = d.type, C === Jt) {
                  if (y.tag === 7) {
                    n(f, y.sibling), c = l(y, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (y.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ct && ms(C) === y.type) {
                  n(f, y.sibling), c = l(y, d.props), c.ref = zn(f, y, d), c.return = f, f = c;
                  break e;
                }
                n(f, y);
                break;
              } else t(f, y);
              y = y.sibling;
            }
            d.type === Jt ? (c = Ft(d.props.children, f.mode, S, d.key), c.return = f, f = c) : (S = tl(d.type, d.key, d.props, null, f.mode, S), S.ref = zn(f, c, d), S.return = f, f = S);
          }
          return i(f);
        case Zt:
          e: {
            for (y = d.key; c !== null; ) {
              if (c.key === y) if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                n(f, c.sibling), c = l(c, d.children || []), c.return = f, f = c;
                break e;
              } else {
                n(f, c);
                break;
              }
              else t(f, c);
              c = c.sibling;
            }
            c = go(d, f.mode, S), c.return = f, f = c;
          }
          return i(f);
        case ct:
          return y = d._init, T(f, c, y(d._payload), S);
      }
      if (Mn(d)) return v(f, c, d, S);
      if (Tn(d)) return w(f, c, d, S);
      jr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, d), c.return = f, f = c) : (n(f, c), c = yo(d, f.mode, S), c.return = f, f = c), i(f)) : n(f, c);
  }
  return T;
}
var gn = sc(!0), ac = sc(!1), gr = {}, Ke = Nt(gr), ir = Nt(gr), ur = Nt(gr);
function Dt(e) {
  if (e === gr) throw Error(x(174));
  return e;
}
function tu(e, t) {
  switch (A(ur, t), A(ir, e), A(Ke, gr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Mo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Mo(t, e);
  }
  H(Ke), A(Ke, t);
}
function wn() {
  H(Ke), H(ir), H(ur);
}
function cc(e) {
  Dt(ur.current);
  var t = Dt(Ke.current), n = Mo(t, e.type);
  t !== n && (A(ir, e), A(Ke, n));
}
function nu(e) {
  ir.current === e && (H(Ke), H(ir));
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
  throw Error(x(321));
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
      if (Wn = !1, sr = 0, 25 <= o) throw Error(x(301));
      o += 1, ne = b = null, t.updateQueue = null, Zr.current = pp, e = n(r, l);
    } while (Wn);
  }
  if (Zr.current = Sl, t = b !== null && b.next !== null, Vt = 0, ne = b = X = null, wl = !1, t) throw Error(x(300));
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
    if (e === null) throw Error(x(310));
    b = e, e = { memoizedState: b.memoizedState, baseState: b.baseState, baseQueue: b.baseQueue, queue: b.queue, next: null }, ne === null ? X.memoizedState = ne = e : ne = ne.next = e;
  }
  return ne;
}
function ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function po(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(x(311));
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
    var u = i = null, s = null, a = o;
    do {
      var h = a.lane;
      if ((Vt & h) === h) s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = p, i = r) : s = s.next = p, X.lanes |= h, Bt |= h;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, Ue(r, t.memoizedState) || (ye = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
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
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ue(o, t.memoizedState) || (ye = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function fc() {
}
function dc(e, t) {
  var n = X, r = ze(), l = t(), o = !Ue(r.memoizedState, l);
  if (o && (r.memoizedState = l, ye = !0), r = r.queue, uu(hc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ne !== null && ne.memoizedState.tag & 1) {
    if (n.flags |= 2048, cr(9, mc.bind(null, n, r, l, t), void 0, null), re === null) throw Error(x(349));
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
function xc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function kc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, $l(4, 4, xc.bind(null, t, e), n);
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
  return Vt & 21 ? (Ue(n, t) || (n = Ta(), X.lanes |= n, Bt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ye = !0), e.memoizedState = n);
}
function sp(e, t) {
  var n = M;
  M = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = fo.transition;
  fo.transition = {};
  try {
    e(!1), t();
  } finally {
    M = n, fo.transition = r;
  }
}
function Pc() {
  return ze().memoizedState;
}
function ap(e, t, n) {
  var r = kt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Nc(e)) Tc(t, n);
  else if (n = lc(e, t, n, r), n !== null) {
    var l = pe();
    Ae(n, e, r, l), Lc(n, t, r);
  }
}
function cp(e, t, n) {
  var r = kt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
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
    n = lc(e, t, l, r), n !== null && (l = pe(), Ae(n, e, r, l), Lc(n, t, r));
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
    xc.bind(null, t, e),
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
  if (V) {
    if (n === void 0) throw Error(x(407));
    n = n();
  } else {
    if (n = t(), re === null) throw Error(x(349));
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
  if (V) {
    var n = qe, r = Je;
    n = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = up++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, dp = {
  readContext: Ie,
  useCallback: Ec,
  useContext: Ie,
  useEffect: uu,
  useImperativeHandle: kc,
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
}, pp = { readContext: Ie, useCallback: Ec, useContext: Ie, useEffect: uu, useImperativeHandle: kc, useInsertionEffect: wc, useLayoutEffect: Sc, useMemo: Cc, useReducer: mo, useRef: gc, useState: function() {
  return mo(ar);
}, useDebugValue: su, useDeferredValue: function(e) {
  var t = ze();
  return b === null ? t.memoizedState = e : _c(t, b.memoizedState, e);
}, useTransition: function() {
  var e = mo(ar)[0], t = ze().memoizedState;
  return [e, t];
}, useMutableSource: fc, useSyncExternalStore: dc, useId: Pc, unstable_isNewReconciler: !1 };
function Sn(e, t) {
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
    kl || (kl = !0, vi = r), ii(e, t);
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
    ii(e, t), typeof r != "function" && (xt === null ? xt = /* @__PURE__ */ new Set([this]) : xt.add(this));
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
var hp = ut.ReactCurrentOwner, ye = !1;
function de(e, t, n, r) {
  t.child = e === null ? ac(t, null, n, r) : gn(t, e.child, n, r);
}
function Ss(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return pn(t, l), r = ou(e, t, n, r, o, l), n = iu(), e !== null && !ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (V && n && Yi(t), t.flags |= 1, de(e, t, r, l), t.child);
}
function xs(e, t, n, r, l) {
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
    if (nr(o, r) && e.ref === t.ref) if (ye = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ye = !0);
    else return t.lanes = e.lanes, ot(e, t, l);
  }
  return ui(e, t, n, r, l);
}
function zc(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, A(sn, ke), ke |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, A(sn, ke), ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, A(sn, ke), ke |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, A(sn, ke), ke |= r;
  return de(e, t, l, n), t.child;
}
function $c(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ui(e, t, n, r, l) {
  var o = Se(n) ? Ut : ce.current;
  return o = vn(t, o), pn(t, l), n = ou(e, t, n, r, o, l), r = iu(), e !== null && !ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (V && r && Yi(t), t.flags |= 1, de(e, t, n, l), t.child);
}
function ks(e, t, n, r, l) {
  if (Se(n)) {
    var o = !0;
    dl(t);
  } else o = !1;
  if (pn(t, l), t.stateNode === null) qr(e, t), uc(t, n, r), oi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Ie(a) : (a = Se(n) ? Ut : ce.current, a = vn(t, a));
    var h = n.getDerivedStateFromProps, p = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && ps(t, i, r, a), ft = !1;
    var m = t.memoizedState;
    i.state = m, yl(t, r, i, l), s = t.memoizedState, u !== r || m !== s || we.current || ft ? (typeof h == "function" && (li(t, n, h, r), s = t.memoizedState), (u = ft || ds(t, n, u, r, m, s, a)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, oc(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : je(t.type, u), i.props = a, p = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ie(s) : (s = Se(n) ? Ut : ce.current, s = vn(t, s));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== p || m !== s) && ps(t, i, r, s), ft = !1, m = t.memoizedState, i.state = m, yl(t, r, i, l);
    var v = t.memoizedState;
    u !== p || m !== v || we.current || ft ? (typeof g == "function" && (li(t, n, g, r), v = t.memoizedState), (a = ft || ds(t, n, a, r, m, v, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return si(e, t, n, r, o, l);
}
function si(e, t, n, r, l, o) {
  $c(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && us(t, n, !1), ot(e, t, o);
  r = t.stateNode, hp.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = gn(t, e.child, null, o), t.child = gn(t, null, u, o)) : de(e, t, u, o), t.memoizedState = r.state, l && us(t, n, !0), t.child;
}
function jc(e) {
  var t = e.stateNode;
  t.pendingContext ? is(e, t.pendingContext, t.pendingContext !== t.context) : t.context && is(e, t.context, !1), tu(e, t.containerInfo);
}
function Es(e, t, n, r, l) {
  return yn(), Gi(l), t.flags |= 256, de(e, t, n, r), t.child;
}
var ai = { dehydrated: null, treeContext: null, retryLane: 0 };
function ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dc(e, t, n) {
  var r = t.pendingProps, l = Y.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), A(Y, l & 1), e === null)
    return ni(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Ml(i, r, 0, null), e = Ft(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ci(n), t.memoizedState = ai, e) : au(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return vp(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Et(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Et(u, o) : (o = Ft(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? ci(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = ai, r;
  }
  return o = e.child, e = o.sibling, r = Et(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function au(e, t) {
  return t = Ml({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Dr(e, t, n, r) {
  return r !== null && Gi(r), gn(t, e.child, null, n), e = au(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function vp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ho(Error(x(422))), Dr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Ml({ mode: "visible", children: r.children }, l, 0, null), o = Ft(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && gn(t, e.child, null, i), t.child.memoizedState = ci(i), t.memoizedState = ai, o);
  if (!(t.mode & 1)) return Dr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(x(419)), r = ho(o, r, void 0), Dr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ye || u) {
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
    return hu(), r = ho(Error(x(421))), Dr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Lp.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ee = wt(l.nextSibling), Ce = t, V = !0, Me = null, e !== null && (Te[Le++] = Je, Te[Le++] = qe, Te[Le++] = Ht, Je = e.id, qe = e.overflow, Ht = t), t = au(t, r.children), t.flags |= 4096, t);
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
function Mc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (de(e, t, r.children, n), r = Y.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (A(Y, r), !(t.mode & 1)) t.memoizedState = null;
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
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Et(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function yp(e, t, n) {
  switch (t.tag) {
    case 3:
      jc(t), yn();
      break;
    case 5:
      cc(t);
      break;
    case 1:
      Se(t.type) && dl(t);
      break;
    case 4:
      tu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      A(hl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (A(Y, Y.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Dc(e, t, n) : (A(Y, Y.current & 1), e = ot(e, t, n), e !== null ? e.sibling : null);
      A(Y, Y.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Mc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), A(Y, Y.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, zc(e, t, n);
  }
  return ot(e, t, n);
}
var Fc, fi, Ac, Uc;
Fc = function(e, t) {
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
    Fo(n, r);
    var i;
    n = null;
    for (a in l) if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null) if (a === "style") {
      var u = l[a];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Gn.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        a,
        n
      )), n = s;
      else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Gn.hasOwnProperty(a) ? (s != null && a === "onScroll" && U("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Uc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $n(e, t) {
  if (!V) switch (e.tailMode) {
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
      return Se(t.type) && fl(), se(t), null;
    case 3:
      return r = t.stateNode, wn(), H(we), H(ce), ru(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && ($r(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (wi(Me), Me = null))), fi(e, t), se(t), null;
    case 5:
      nu(t);
      var l = Dt(ur.current);
      if (n = t.type, e !== null && t.stateNode != null) Ac(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return se(t), null;
        }
        if (e = Dt(Ke.current), $r(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Be] = t, r[or] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < An.length; l++) U(An[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U(
                "error",
                r
              ), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              zu(r, o), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, U("invalid", r);
              break;
            case "textarea":
              ju(r, o), U("invalid", r);
          }
          Fo(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && zr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && zr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Gn.hasOwnProperty(i) && u != null && i === "onScroll" && U("scroll", r);
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
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = pa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Be] = t, e[or] = r, Fc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ao(n, r), n) {
              case "dialog":
                U("cancel", e), U("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < An.length; l++) U(An[l], e);
                l = r;
                break;
              case "source":
                U("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                U(
                  "error",
                  e
                ), U("load", e), l = r;
                break;
              case "details":
                U("toggle", e), l = r;
                break;
              case "input":
                zu(e, r), l = zo(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = G({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                ju(e, r), l = Do(e, r), U("invalid", e);
                break;
              default:
                l = r;
            }
            Fo(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? va(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ma(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Zn(e, s) : typeof s == "number" && Zn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Gn.hasOwnProperty(o) ? s != null && o === "onScroll" && U("scroll", e) : s != null && zi(e, o, s, i));
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
                e.multiple = !!r.multiple, o = r.value, o != null ? an(e, !!r.multiple, o, !1) : r.defaultValue != null && an(
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
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
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
      if (H(Y), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && Ee !== null && t.mode & 1 && !(t.flags & 128)) rc(), yn(), t.flags |= 98560, o = !1;
        else if (o = $r(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(x(317));
            o[Be] = t;
          } else yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          se(t), o = !1;
        } else Me !== null && (wi(Me), Me = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Y.current & 1 ? ee === 0 && (ee = 3) : hu())), t.updateQueue !== null && (t.flags |= 4), se(t), null);
    case 4:
      return wn(), fi(e, t), e === null && rr(t.stateNode.containerInfo), se(t), null;
    case 10:
      return qi(t.type._context), se(t), null;
    case 17:
      return Se(t.type) && fl(), se(t), null;
    case 19:
      if (H(Y), o = t.memoizedState, o === null) return se(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) $n(o, !1);
      else {
        if (ee !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = gl(e), i !== null) {
            for (t.flags |= 128, $n(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return A(Y, Y.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && J() > xn && (t.flags |= 128, r = !0, $n(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = gl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), $n(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V) return se(t), null;
        } else 2 * J() - o.renderingStartTime > xn && n !== 1073741824 && (t.flags |= 128, r = !0, $n(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = Y.current, A(Y, r ? n & 1 | 2 : n & 1), t) : (se(t), null);
    case 22:
    case 23:
      return mu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : se(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function wp(e, t) {
  switch (Xi(t), t.tag) {
    case 1:
      return Se(t.type) && fl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return wn(), H(we), H(ce), ru(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return nu(t), null;
    case 13:
      if (H(Y), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(x(340));
        yn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(Y), null;
    case 4:
      return wn(), null;
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
var Mr = !1, ae = !1, Sp = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function un(e, t) {
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
function xp(e, t) {
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
        var i = 0, u = -1, s = -1, a = 0, h = 0, p = e, m = null;
        t: for (; ; ) {
          for (var g; p !== n || l !== 0 && p.nodeType !== 3 || (u = i + l), p !== o || r !== 0 && p.nodeType !== 3 || (s = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (g = p.firstChild) !== null; )
            m = p, p = g;
          for (; ; ) {
            if (p === e) break t;
            if (m === n && ++a === l && (u = i), m === o && ++h === r && (s = i), (g = p.nextSibling) !== null) break;
            p = m, m = p.parentNode;
          }
          p = g;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zo = { focusedElem: e, selectionRange: n }, ul = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
  else for (; N !== null; ) {
    t = N;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var w = v.memoizedProps, T = v.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : je(t.type, w), T);
            f.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(x(163));
      }
    } catch (S) {
      Z(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, N = e;
      break;
    }
    N = t.return;
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
      ae || un(n, t);
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
      if (!ae && (un(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      if (le === null) throw Error(x(160));
      Bc(o, i, l), le = null, De = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (a) {
      Z(l, t, a);
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
        } catch (w) {
          Z(e, e.return, w);
        }
        try {
          Kn(5, e, e.return);
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 1:
      $e(t, e), He(e), r & 512 && n !== null && un(n, n.return);
      break;
    case 5:
      if ($e(t, e), He(e), r & 512 && n !== null && un(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Zn(l, "");
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && fa(l, o), Ao(u, i);
          var a = Ao(u, o);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], p = s[i + 1];
            h === "style" ? va(l, p) : h === "dangerouslySetInnerHTML" ? ma(l, p) : h === "children" ? Zn(l, p) : zi(l, h, p, a);
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
              var g = o.value;
              g != null ? an(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? an(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : an(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[or] = o;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 6:
      if ($e(t, e), He(e), r & 4) {
        if (e.stateNode === null) throw Error(x(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 3:
      if ($e(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        er(t.containerInfo);
      } catch (w) {
        Z(e, e.return, w);
      }
      break;
    case 4:
      $e(t, e), He(e);
      break;
    case 13:
      $e(t, e), He(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (du = J())), r & 4 && Ns(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ae = (a = ae) || h, $e(t, e), ae = a) : $e(t, e), He(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1) for (N = e, h = e.child; h !== null; ) {
          for (p = N = h; N !== null; ) {
            switch (m = N, g = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Kn(4, m, m.return);
                break;
              case 1:
                un(m, m.return);
                var v = m.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (w) {
                    Z(r, n, w);
                  }
                }
                break;
              case 5:
                un(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Ls(p);
                  continue;
                }
            }
            g !== null ? (g.return = m, N = g) : Ls(p);
          }
          h = h.sibling;
        }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                l = p.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = p.stateNode, s = p.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ha("display", i));
              } catch (w) {
                Z(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (h === null) try {
              p.stateNode.nodeValue = a ? "" : p.memoizedProps;
            } catch (w) {
              Z(e, e.return, w);
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
        throw Error(x(160));
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
          throw Error(x(161));
      }
    } catch (s) {
      Z(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function kp(e, t, n) {
  N = e, Wc(e);
}
function Wc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Mr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ae;
        u = Mr;
        var a = ae;
        if (Mr = i, (ae = s) && !a) for (N = l; N !== null; ) i = N, s = i.child, i.tag === 22 && i.memoizedState !== null ? Os(l) : s !== null ? (s.return = i, N = s) : Os(l);
        for (; o !== null; ) N = o, Wc(o), o = o.sibling;
        N = l, Mr = u, ae = a;
      }
      Ts(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, N = o) : Ts(e);
  }
}
function Ts(e) {
  for (; N !== null; ) {
    var t = N;
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
              var a = t.alternate;
              if (a !== null) {
                var h = a.memoizedState;
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
            throw Error(x(163));
        }
        ae || t.flags & 512 && pi(t);
      } catch (m) {
        Z(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Ls(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Os(e) {
  for (; N !== null; ) {
    var t = N;
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
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, N = u;
      break;
    }
    N = t.return;
  }
}
var Ep = Math.ceil, xl = ut.ReactCurrentDispatcher, cu = ut.ReactCurrentOwner, Re = ut.ReactCurrentBatchConfig, D = 0, re = null, q = null, oe = 0, ke = 0, sn = Nt(0), ee = 0, fr = null, Bt = 0, Dl = 0, fu = 0, Yn = null, ve = null, du = 0, xn = 1 / 0, Ge = null, kl = !1, vi = null, xt = null, Fr = !1, ht = null, El = 0, Xn = 0, yi = null, br = -1, el = 0;
function pe() {
  return D & 6 ? J() : br !== -1 ? br : br = J();
}
function kt(e) {
  return e.mode & 1 ? D & 2 && oe !== 0 ? oe & -oe : ip.transition !== null ? (el === 0 && (el = Ta()), el) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ja(e.type)), e) : 1;
}
function Ae(e, t, n, r) {
  if (50 < Xn) throw Xn = 0, yi = null, Error(x(185));
  hr(e, n, r), (!(D & 2) || e !== re) && (e === re && (!(D & 2) && (Dl |= n), ee === 4 && pt(e, oe)), xe(e, r), n === 1 && D === 0 && !(t.mode & 1) && (xn = J() + 500, Il && Tt()));
}
function xe(e, t) {
  var n = e.callbackNode;
  id(e, t);
  var r = il(e, e === re ? oe : 0);
  if (r === 0) n !== null && Au(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Au(n), t === 1) e.tag === 0 ? op(Rs.bind(null, e)) : ec(Rs.bind(null, e)), tp(function() {
      !(D & 6) && Tt();
    }), n = null;
    else {
      switch (La(r)) {
        case 1:
          n = Fi;
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
  if (br = -1, el = 0, D & 6) throw Error(x(327));
  var n = e.callbackNode;
  if (mn() && e.callbackNode !== n) return null;
  var r = il(e, e === re ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = Xc();
    (re !== e || oe !== t) && (Ge = null, xn = J() + 500, Mt(e, t));
    do
      try {
        Pp();
        break;
      } catch (u) {
        Yc(e, u);
      }
    while (!0);
    Ji(), xl.current = o, D = l, q !== null ? t = 0 : (re = null, oe = 0, t = ee);
  }
  if (t !== 0) {
    if (t === 2 && (l = Qo(e), l !== 0 && (r = l, t = gi(e, l))), t === 1) throw n = fr, Mt(e, 0), pt(e, r), xe(e, J()), n;
    if (t === 6) pt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Cp(l) && (t = Cl(e, r), t === 2 && (o = Qo(e), o !== 0 && (r = o, t = gi(e, o))), t === 1)) throw n = fr, Mt(e, 0), pt(e, r), xe(e, J()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          zt(e, ve, Ge);
          break;
        case 3:
          if (pt(e, r), (r & 130023424) === r && (t = du + 500 - J(), 10 < t)) {
            if (il(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              pe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = qo(zt.bind(null, e, ve, Ge), t);
            break;
          }
          zt(e, ve, Ge);
          break;
        case 4:
          if (pt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Fe(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ep(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qo(zt.bind(null, e, ve, Ge), r);
            break;
          }
          zt(e, ve, Ge);
          break;
        case 5:
          zt(e, ve, Ge);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return xe(e, J()), e.callbackNode === n ? Kc.bind(null, e) : null;
}
function gi(e, t) {
  var n = Yn;
  return e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256), e = Cl(e, t), e !== 2 && (t = ve, ve = n, t !== null && wi(t)), e;
}
function wi(e) {
  ve === null ? ve = e : ve.push.apply(ve, e);
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
    var n = 31 - Fe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Rs(e) {
  if (D & 6) throw Error(x(327));
  mn();
  var t = il(e, 0);
  if (!(t & 1)) return xe(e, J()), null;
  var n = Cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qo(e);
    r !== 0 && (t = r, n = gi(e, r));
  }
  if (n === 1) throw n = fr, Mt(e, 0), pt(e, t), xe(e, J()), n;
  if (n === 6) throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, zt(e, ve, Ge), xe(e, J()), null;
}
function pu(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (xn = J() + 500, Il && Tt());
  }
}
function Qt(e) {
  ht !== null && ht.tag === 0 && !(D & 6) && mn();
  var t = D;
  D |= 1;
  var n = Re.transition, r = M;
  try {
    if (Re.transition = null, M = 1, e) return e();
  } finally {
    M = r, Re.transition = n, D = t, !(D & 6) && Tt();
  }
}
function mu() {
  ke = sn.current, H(sn);
}
function Mt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ep(n)), q !== null) for (n = q.return; n !== null; ) {
    var r = n;
    switch (Xi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && fl();
        break;
      case 3:
        wn(), H(we), H(ce), ru();
        break;
      case 5:
        nu(r);
        break;
      case 4:
        wn();
        break;
      case 13:
        H(Y);
        break;
      case 19:
        H(Y);
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
  if (re = e, q = e = Et(e.current, null), oe = ke = t, ee = 0, fr = null, fu = Dl = Bt = 0, ve = Yn = null, jt !== null) {
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
          var a = s, h = u, p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = gs(i);
          if (g !== null) {
            g.flags &= -257, ws(g, i, u, o, t), g.mode & 1 && ys(o, a, t), t = g, s = a;
            var v = t.updateQueue;
            if (v === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), t.updateQueue = w;
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ys(o, a, t), hu();
              break e;
            }
            s = Error(x(426));
          }
        } else if (V && u.mode & 1) {
          var T = gs(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), ws(T, i, u, o, t), Gi(Sn(s, u));
            break e;
          }
        }
        o = s = Sn(s, u), ee !== 4 && (ee = 2), Yn === null ? Yn = [o] : Yn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Oc(o, s, t);
              cs(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (xt === null || !xt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var S = Rc(o, u, t);
                cs(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Zc(n);
    } catch (C) {
      t = C, q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xc() {
  var e = xl.current;
  return xl.current = Sl, e === null ? Sl : e;
}
function hu() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4), re === null || !(Bt & 268435455) && !(Dl & 268435455) || pt(re, oe);
}
function Cl(e, t) {
  var n = D;
  D |= 2;
  var r = Xc();
  (re !== e || oe !== t) && (Ge = null, Mt(e, t));
  do
    try {
      _p();
      break;
    } catch (l) {
      Yc(e, l);
    }
  while (!0);
  if (Ji(), D = n, xl.current = r, q !== null) throw Error(x(261));
  return re = null, oe = 0, ee;
}
function _p() {
  for (; q !== null; ) Gc(q);
}
function Pp() {
  for (; q !== null && !Jf(); ) Gc(q);
}
function Gc(e) {
  var t = qc(e.alternate, e, ke);
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
    } else if (n = gp(n, t, ke), n !== null) {
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
  var r = M, l = Re.transition;
  try {
    Re.transition = null, M = 1, Np(e, t, n, r);
  } finally {
    Re.transition = l, M = r;
  }
  return null;
}
function Np(e, t, n, r) {
  do
    mn();
  while (ht !== null);
  if (D & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (ud(e, o), e === re && (q = re = null, oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Fr || (Fr = !0, bc(ol, function() {
    return mn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Re.transition, Re.transition = null;
    var i = M;
    M = 1;
    var u = D;
    D |= 4, cu.current = null, xp(e, n), Qc(n, e), Yd(Zo), ul = !!Go, Zo = Go = null, e.current = n, kp(n), qf(), D = u, M = i, Re.transition = o;
  } else e.current = n;
  if (Fr && (Fr = !1, ht = e, El = l), o = e.pendingLanes, o === 0 && (xt = null), td(n.stateNode), xe(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (kl) throw kl = !1, e = vi, vi = null, e;
  return El & 1 && e.tag !== 0 && mn(), o = e.pendingLanes, o & 1 ? e === yi ? Xn++ : (Xn = 0, yi = e) : Xn = 0, Tt(), null;
}
function mn() {
  if (ht !== null) {
    var e = La(El), t = Re.transition, n = M;
    try {
      if (Re.transition = null, M = 16 > e ? 16 : e, ht === null) var r = !1;
      else {
        if (e = ht, ht = null, El = 0, D & 6) throw Error(x(331));
        var l = D;
        for (D |= 4, N = e.current; N !== null; ) {
          var o = N, i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (N = a; N !== null; ) {
                  var h = N;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kn(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) p.return = h, N = p;
                  else for (; N !== null; ) {
                    h = N;
                    var m = h.sibling, g = h.return;
                    if (Hc(h), h === a) {
                      N = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = g, N = m;
                      break;
                    }
                    N = g;
                  }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var T = w.sibling;
                    w.sibling = null, w = T;
                  } while (w !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, N = i;
          else e: for (; N !== null; ) {
            if (o = N, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Kn(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, N = f;
              break e;
            }
            N = o.return;
          }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          i = N;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, N = d;
          else e: for (i = c; N !== null; ) {
            if (u = N, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  jl(9, u);
              }
            } catch (C) {
              Z(u, u.return, C);
            }
            if (u === i) {
              N = null;
              break e;
            }
            var S = u.sibling;
            if (S !== null) {
              S.return = u.return, N = S;
              break e;
            }
            N = u.return;
          }
        }
        if (D = l, Tt(), We && typeof We.onPostCommitFiberRoot == "function") try {
          We.onPostCommitFiberRoot(Nl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      M = n, Re.transition = t;
    }
  }
  return !1;
}
function Is(e, t, n) {
  t = Sn(n, t), t = Oc(e, t, 1), e = St(e, t, 1), t = pe(), e !== null && (hr(e, 1, t), xe(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Is(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Is(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xt === null || !xt.has(r))) {
        e = Sn(n, e), e = Rc(t, e, 1), t = St(t, e, 1), e = pe(), t !== null && (hr(t, 1, e), xe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Tp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = pe(), e.pingedLanes |= e.suspendedLanes & n, re === e && (oe & n) === n && (ee === 4 || ee === 3 && (oe & 130023424) === oe && 500 > J() - du ? Mt(e, 0) : fu |= n), xe(e, t);
}
function Jc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Tr, Tr <<= 1, !(Tr & 130023424) && (Tr = 4194304)) : t = 1);
  var n = pe();
  e = lt(e, t), e !== null && (hr(e, t, n), xe(e, n));
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
      throw Error(x(314));
  }
  r !== null && r.delete(t), Jc(e, n);
}
var qc;
qc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || we.current) ye = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ye = !1, yp(e, t, n);
    ye = !!(e.flags & 131072);
  }
  else ye = !1, V && t.flags & 1048576 && tc(t, ml, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      qr(e, t), e = t.pendingProps;
      var l = vn(t, ce.current);
      pn(t, n), l = ou(null, t, r, e, l, n);
      var o = iu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Se(r) ? (o = !0, dl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, eu(t), l.updater = zl, t.stateNode = l, l._reactInternals = t, oi(t, r, e, n), t = si(null, t, r, !0, o, n)) : (t.tag = 0, V && o && Yi(t), de(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (qr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ip(r), e = je(r, e), l) {
          case 0:
            t = ui(null, t, r, e, n);
            break e;
          case 1:
            t = ks(null, t, r, e, n);
            break e;
          case 11:
            t = Ss(null, t, r, e, n);
            break e;
          case 14:
            t = xs(null, t, r, je(r.type, e), n);
            break e;
        }
        throw Error(x(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), ui(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), ks(e, t, r, l, n);
    case 3:
      e: {
        if (jc(t), e === null) throw Error(x(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, oc(e, t), yl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = Sn(Error(x(423)), t), t = Es(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Sn(Error(x(424)), t), t = Es(e, t, r, n, l);
          break e;
        } else for (Ee = wt(t.stateNode.containerInfo.firstChild), Ce = t, V = !0, Me = null, n = ac(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (yn(), r === l) {
            t = ot(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return cc(t), e === null && ni(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Jo(r, l) ? i = null : o !== null && Jo(r, o) && (t.flags |= 32), $c(e, t), de(e, t, i, n), t.child;
    case 6:
      return e === null && ni(t), null;
    case 13:
      return Dc(e, t, n);
    case 4:
      return tu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gn(t, null, r, n) : de(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Ss(e, t, r, l, n);
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, A(hl, r._currentValue), r._currentValue = i, o !== null) if (Ue(o.value, i)) {
          if (o.children === l.children && !we.current) {
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
                  var a = o.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var h = a.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
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
            if (i = o.return, i === null) throw Error(x(341));
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
        de(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, pn(t, n), l = Ie(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = je(r, t.pendingProps), l = je(r.type, l), xs(e, t, r, l, n);
    case 15:
      return Ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), qr(e, t), t.tag = 1, Se(r) ? (e = !0, dl(t)) : e = !1, pn(t, n), uc(t, r, l), oi(t, r, l, n), si(null, t, r, !0, e, n);
    case 19:
      return Mc(e, t, n);
    case 22:
      return zc(e, t, n);
  }
  throw Error(x(156, t.tag));
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
    case Jt:
      return Ft(n.children, l, o, t);
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
      return Ml(n, l, o, t);
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
      throw Error(x(130, e == null ? e : typeof e, ""));
  }
  return t = Oe(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Ft(e, t, n, r) {
  return e = Oe(7, e, r, t), e.lanes = n, e;
}
function Ml(e, t, n, r) {
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
  return { $$typeof: Zt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ef(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (Yt(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Se(n)) return ba(e, n, t);
  }
  return t;
}
function tf(e, t, n, r, l, o, i, u, s) {
  return e = yu(n, r, !0, e, l, o, i, u, s), e.context = ef(null), n = e.current, r = pe(), l = kt(n), o = be(r, l), o.callback = t ?? null, St(n, o, l), e.current.lanes = l, hr(e, l, r), xe(e, r), e;
}
function Fl(e, t, n, r) {
  var l = t.current, o = pe(), i = kt(l);
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
  if (t === null) throw Error(x(409));
  Fl(e, t, null, null);
};
Al.prototype.unmount = wu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function() {
      Fl(null, e, null, null);
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
        var a = _l(i);
        o.call(a);
      };
    }
    var i = tf(t, r, e, 0, null, !1, !1, "", $s);
    return e._reactRootContainer = i, e[rt] = i.current, rr(e.nodeType === 8 ? e.parentNode : e), Qt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = _l(s);
      u.call(a);
    };
  }
  var s = yu(e, 0, !1, null, null, !1, !1, "", $s);
  return e._reactRootContainer = s, e[rt] = s.current, rr(e.nodeType === 8 ? e.parentNode : e), Qt(function() {
    Fl(t, s, n, r);
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
    Fl(t, i, e, l);
  } else i = Dp(n, t, e, l, r);
  return _l(i);
}
Oa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fn(t.pendingLanes);
        n !== 0 && (Ai(t, n | 1), xe(t, J()), !(D & 6) && (xn = J() + 500, Tt()));
      }
      break;
    case 13:
      Qt(function() {
        var r = lt(e, 1);
        if (r !== null) {
          var l = pe();
          Ae(r, e, 1, l);
        }
      }), gu(e, 1);
  }
};
Ui = function(e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = pe();
      Ae(t, e, 134217728, n);
    }
    gu(e, 134217728);
  }
};
Ra = function(e) {
  if (e.tag === 13) {
    var t = kt(e), n = lt(e, t);
    if (n !== null) {
      var r = pe();
      Ae(n, e, t, r);
    }
    gu(e, t);
  }
};
Ia = function() {
  return M;
};
za = function(e, t) {
  var n = M;
  try {
    return M = e, t();
  } finally {
    M = n;
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
            if (!l) throw Error(x(90));
            ca(r), $o(r, l);
          }
        }
      }
      break;
    case "textarea":
      da(e, n);
      break;
    case "select":
      t = n.value, t != null && an(e, !!n.multiple, t, !1);
  }
};
wa = pu;
Sa = Qt;
var Mp = { usingClientEntryPoint: !1, Events: [yr, tn, Rl, ya, ga, pu] }, jn = { findFiberByHostInstance: $t, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Fp = { bundleType: jn.bundleType, version: jn.version, rendererPackageName: jn.rendererPackageName, rendererConfig: jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ea(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jn.findFiberByHostInstance || jp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ar.isDisabled && Ar.supportsFiber) try {
    Nl = Ar.inject(Fp), We = Ar;
  } catch {
  }
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mp;
Pe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Su(t)) throw Error(x(200));
  return $p(e, t, null, n);
};
Pe.createRoot = function(e, t) {
  if (!Su(e)) throw Error(x(299));
  var n = !1, r = "", l = nf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = yu(e, 1, !1, null, null, n, !1, r, l), e[rt] = t.current, rr(e.nodeType === 8 ? e.parentNode : e), new wu(t);
};
Pe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = Ea(t), e = e === null ? null : e.stateNode, e;
};
Pe.flushSync = function(e) {
  return Qt(e);
};
Pe.hydrate = function(e, t, n) {
  if (!Ul(t)) throw Error(x(200));
  return Hl(null, e, t, !0, n);
};
Pe.hydrateRoot = function(e, t, n) {
  if (!Su(e)) throw Error(x(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = nf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = tf(t, null, e, 1, n ?? null, l, !1, o, i), e[rt] = t.current, rr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Al(t);
};
Pe.render = function(e, t, n) {
  if (!Ul(t)) throw Error(x(200));
  return Hl(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function(e) {
  if (!Ul(e)) throw Error(x(40));
  return e._reactRootContainer ? (Qt(function() {
    Hl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[rt] = null;
    });
  }), !0) : !1;
};
Pe.unstable_batchedUpdates = pu;
Pe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ul(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
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
  const i = (Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props)).filter((p) => p !== "container"), u = {}, s = {}, a = {};
  for (const p of i) {
    u[p] = Array.isArray(t.props) ? "string" : t.props[p];
    const m = Xp(p);
    s[p] = m, a[m] = p;
  }
  class h extends HTMLElement {
    constructor() {
      super(), Ur(this, r, !0), Ur(this, l), Ur(this, o, {}), Ur(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[at].container = this.container;
      for (const m of i) {
        const g = s[m], v = this.getAttribute(g), w = u[m], T = wo[w];
        v && T != null && T.parse && (this[at][m] = T.parse(v, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(a);
    }
    connectedCallback() {
      this[Hr] = !0, this[So]();
    }
    disconnectedCallback() {
      this[Hr] = !1, this[Rt] && n.unmount(this[Rt]), delete this[Rt];
    }
    attributeChangedCallback(m, g, v) {
      const w = a[m], T = u[w], f = wo[T];
      w in u && f != null && f.parse && (this[at][w] = f.parse(v, this), this[So]());
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
    const m = s[p], g = u[p];
    Object.defineProperty(h.prototype, p, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[at][p];
      },
      set(v) {
        this[at][p] = v;
        const w = wo[g];
        if (w != null && w.stringify) {
          const T = w.stringify(v);
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
var bp = _, em = Symbol.for("react.element"), tm = Symbol.for("react.fragment"), nm = Object.prototype.hasOwnProperty, rm = bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, lm = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var R = of.exports;
function Wt(...e) {
  return e.filter(Boolean).join(" ");
}
const om = (e) => {
  const t = e.maximumItemsToRender || 20, [n, r] = _.useState(t), l = e.items.filter((s) => s.label.toLowerCase().indexOf(e.searchTerm.toLowerCase()) !== -1), o = l.length > n, i = o ? l.slice(0, n) : l, u = l.length > 0;
  return !e.isOpen || !u ? /* @__PURE__ */ R.jsx(R.Fragment, {}) : (console.log("render with ", e.selectedItemIndex), /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: "absolute w-full grid border-gray-300 shadow-sm border rounded-md text-sm my-1 mt-px z-50 overflow-hidden",
      "data-testid": "AutocompleteList",
      children: [
        i.map((s, a) => /* @__PURE__ */ R.jsx(
          "div",
          {
            className: Wt(
              !s.selected && e.selectedItemIndex === a ? "bg-msg-red text-gray-50" : "bg-white",
              "block pl-4 py-1 select-none ",
              s.selected || s.disabled ? "text-gray-300" : "cursor-pointer"
            ),
            onClick: () => {
              if (e.setItemToRemove(void 0), !s.disabled)
                return e.onAdd(s);
            },
            onMouseEnter: () => {
              e.setSelectedIndex(a), e.setItemToRemove(void 0);
            },
            onMouseLeave: () => e.setSelectedIndex(void 0),
            children: s.label
          },
          s.id
        )),
        o && /* @__PURE__ */ R.jsx(
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
      ]
    }
  ));
}, im = (e) => /* @__PURE__ */ R.jsxs(
  "span",
  {
    className: Wt(
      e.selected ? "border border-gray-600" : "",
      "inline-flex h-7 mt-1 ml-1 mb-1 pl-4 py-1 rounded-full bg-gray-200 text-sm font-normal text-black items-center",
      e.disabled ? "pr-4" : "pr-2"
    ),
    onMouseEnter: () => {
      e.setItemToRemove(e.item), e.setSelectedItemIndex(void 0);
    },
    onMouseLeave: () => {
      e.setItemToRemove(void 0);
    },
    children: [
      e.item.label,
      !e.disabled && /* @__PURE__ */ R.jsxs(
        "button",
        {
          "data-testid": "badgeButton",
          type: "button",
          className: Wt(
            e.selected ? "bg-msg-red text-gray-50" : "bg-gray-400",
            "ml-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full  text-white focus:outline-none"
          ),
          onClick: (t) => {
            t.stopPropagation(), e.disabled || e.onRemove(e.item);
          },
          children: [
            /* @__PURE__ */ R.jsx("span", { className: "sr-only", children: "Remove small option" }),
            /* @__PURE__ */ R.jsx("svg", { className: "h-2 w-2", stroke: "currentColor", fill: "none", viewBox: "0 0 8 8", children: /* @__PURE__ */ R.jsx("path", { strokeLinecap: "round", strokeWidth: "1", d: "M1 1l6 6m0-6L1 7" }) })
          ]
        }
      )
    ]
  }
);
var um = Object.defineProperty, sm = (e, t, n) => t in e ? um(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xo = (e, t, n) => (sm(e, typeof t != "symbol" ? t + "" : t, n), n);
let am = class {
  constructor() {
    xo(this, "current", this.detect()), xo(this, "handoffState", "pending"), xo(this, "currentId", 0);
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
  At.isServer ? _.useEffect(e, t) : _.useLayoutEffect(e, t);
};
function Bl(e) {
  let t = _.useRef(e);
  return it(() => {
    t.current = e;
  }, [e]), t;
}
function sf(e, t) {
  let [n, r] = _.useState(e), l = Bl(e);
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
  let [e] = _.useState(dr);
  return _.useEffect(() => () => e.dispose(), [e]), e;
}
let K = function(e) {
  let t = Bl(e);
  return Qe.useCallback((...n) => t.current(...n), [t]);
};
function fm() {
  let [e, t] = _.useState(At.isHandoffComplete);
  return e && At.isHandoffComplete === !1 && t(!1), _.useEffect(() => {
    e !== !0 && t(!0);
  }, [e]), _.useEffect(() => At.handoff(), []), e;
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
let Ms = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var dm = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(dm || {}), pm = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(pm || {}), mm = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(mm || {}), xu = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(xu || {});
function cf(e, t = 0) {
  var n;
  return e === ((n = af(e)) == null ? void 0 : n.body) ? !1 : et(t, { 0() {
    return e.matches(Ms);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Ms)) return !0;
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
function ko(e, t, n) {
  let r = Bl(t);
  _.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return document.addEventListener(e, l, n), () => document.removeEventListener(e, l, n);
  }, [e, n]);
}
function ym(e, t, n = !0) {
  let r = _.useRef(!1);
  _.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, u) {
    if (!r.current || i.defaultPrevented) return;
    let s = function h(p) {
      return typeof p == "function" ? h(p()) : Array.isArray(p) || p instanceof Set ? p : [p];
    }(e), a = u(i);
    if (a !== null && a.getRootNode().contains(a)) {
      for (let h of s) {
        if (h === null) continue;
        let p = h instanceof HTMLElement ? h : h.current;
        if (p != null && p.contains(a) || i.composed && i.composedPath().includes(p)) return;
      }
      return !cf(a, xu.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
    }
  }
  let o = _.useRef(null);
  ko("mousedown", (i) => {
    var u, s;
    r.current && (o.current = ((s = (u = i.composedPath) == null ? void 0 : u.call(i)) == null ? void 0 : s[0]) || i.target);
  }, !0), ko("click", (i) => {
    o.current && (l(i, () => o.current), o.current = null);
  }, !0), ko("blur", (i) => l(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Fs(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function gm(e, t) {
  let [n, r] = _.useState(() => Fs(e));
  return it(() => {
    r(Fs(e));
  }, [e.type, e.as]), it(() => {
    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button");
  }, [n, t]), n;
}
let wm = Symbol();
function wr(...e) {
  let t = _.useRef(e);
  _.useEffect(() => {
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
var ge = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ge || {});
function xm(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), l = r ?? -1, o = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = n.slice().reverse().findIndex((u, s, a) => l !== -1 && a.length - s - 1 >= l ? !1 : !t.resolveDisabled(u));
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
var Si = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Si || {}), km = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(km || {});
function _n({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: l, visible: o = !0, name: i }) {
  let u = ff(t, e);
  if (o) return Vr(u, n, r, i);
  let s = l ?? 0;
  if (s & 2) {
    let { static: a = !1, ...h } = u;
    if (a) return Vr(h, n, r, i);
  }
  if (s & 1) {
    let { unmount: a = !0, ...h } = u;
    return et(a ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Vr({ ...h, hidden: !0, style: { display: "none" } }, n, r, i);
    } });
  }
  return Vr(u, n, r, i);
}
function Vr(e, t = {}, n, r) {
  let { as: l = n, children: o, refName: i = "ref", ...u } = Eo(e, ["unmount", "static"]), s = e.ref !== void 0 ? { [i]: e.ref } : {}, a = typeof o == "function" ? o(t) : o;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t));
  let h = {};
  if (t) {
    let p = !1, m = [];
    for (let [g, v] of Object.entries(t)) typeof v == "boolean" && (p = !0), v === !0 && m.push(g);
    p && (h["data-headlessui-state"] = m.join(" "));
  }
  if (l === _.Fragment && Object.keys(xi(u)).length > 0) {
    if (!_.isValidElement(a) || Array.isArray(a) && a.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
    let p = a.props, m = typeof (p == null ? void 0 : p.className) == "function" ? (...v) => As(p == null ? void 0 : p.className(...v), u.className) : As(p == null ? void 0 : p.className, u.className), g = m ? { className: m } : {};
    return _.cloneElement(a, Object.assign({}, ff(a.props, xi(Eo(u, ["ref"]))), h, s, Em(a.ref, s.ref), g));
  }
  return _.createElement(l, Object.assign({}, Eo(u, ["ref"]), l !== _.Fragment && s, l !== _.Fragment && h), a);
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
  return Object.assign(_.forwardRef(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function xi(e) {
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
let Tm = Pn(Nm), ku = _.createContext(null);
ku.displayName = "OpenClosedContext";
var pr = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(pr || {});
function Lm() {
  return _.useContext(ku);
}
function Om({ value: e, children: t }) {
  return Qe.createElement(ku.Provider, { value: e }, t);
}
var te = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(te || {});
function Rm(e, t, n) {
  let [r, l] = _.useState(n), o = e !== void 0, i = _.useRef(o), u = _.useRef(!1), s = _.useRef(!1);
  return o && !i.current && !u.current ? (u.current = !0, i.current = o, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !o && i.current && !s.current && (s.current = !0, i.current = o, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [o ? e : r, K((a) => (o || l(a), t == null ? void 0 : t(a)))];
}
function Us(e) {
  return [e.screenX, e.screenY];
}
function Im() {
  let e = _.useRef([-1, -1]);
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
let Mm = { 1(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 ? e : { ...e, activeOptionIndex: null, listboxState: 1 };
}, 0(e) {
  if (e.dataRef.current.disabled || e.listboxState === 0) return e;
  let t = e.activeOptionIndex, { isSelected: n } = e.dataRef.current, r = e.options.findIndex((l) => n(l.dataRef.current.value));
  return r !== -1 && (t = r), { ...e, listboxState: 0, activeOptionIndex: t };
}, 2(e, t) {
  var n;
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let r = Co(e), l = xm(t, { resolveItems: () => r.options, resolveActiveIndex: () => r.activeOptionIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
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
}, 7: (e, t) => ({ ...e, labelId: t.id }) }, Eu = _.createContext(null);
Eu.displayName = "ListboxActionsContext";
function Sr(e) {
  let t = _.useContext(Eu);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Sr), n;
  }
  return t;
}
let Cu = _.createContext(null);
Cu.displayName = "ListboxDataContext";
function xr(e) {
  let t = _.useContext(Cu);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, xr), n;
  }
  return t;
}
function Fm(e, t) {
  return et(t.type, Mm, e, t);
}
let Am = _.Fragment;
function Um(e, t) {
  let { value: n, defaultValue: r, form: l, name: o, onChange: i, by: u = (z, F) => z === F, disabled: s = !1, horizontal: a = !1, multiple: h = !1, ...p } = e;
  const m = a ? "horizontal" : "vertical";
  let g = wr(t), [v = h ? [] : void 0, w] = Rm(n, i, r), [T, f] = _.useReducer(Fm, { dataRef: _.createRef(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), c = _.useRef({ static: !1, hold: !1 }), d = _.useRef(null), S = _.useRef(null), C = _.useRef(null), y = K(typeof u == "string" ? (z, F) => {
    let W = u;
    return (z == null ? void 0 : z[W]) === (F == null ? void 0 : F[W]);
  } : u), k = _.useCallback((z) => et(E.mode, { 1: () => v.some((F) => y(F, z)), 0: () => y(v, z) }), [v]), E = _.useMemo(() => ({ ...T, value: v, disabled: s, mode: h ? 1 : 0, orientation: m, compare: y, isSelected: k, optionsPropsRef: c, labelRef: d, buttonRef: S, optionsRef: C }), [v, s, h, T]);
  it(() => {
    T.dataRef.current = E;
  }, [E]), ym([E.buttonRef, E.optionsRef], (z, F) => {
    var W;
    f({ type: 1 }), cf(F, xu.Loose) || (z.preventDefault(), (W = E.buttonRef.current) == null || W.focus());
  }, E.listboxState === 0);
  let $ = _.useMemo(() => ({ open: E.listboxState === 0, disabled: s, value: v }), [E, s, v]), L = K((z) => {
    let F = E.options.find((W) => W.id === z);
    F && Ye(F.dataRef.current.value);
  }), fe = K(() => {
    if (E.activeOptionIndex !== null) {
      let { dataRef: z, id: F } = E.options[E.activeOptionIndex];
      Ye(z.current.value), f({ type: 2, focus: ge.Specific, id: F });
    }
  }), Lt = K(() => f({ type: 0 })), Ot = K(() => f({ type: 1 })), kr = K((z, F, W) => z === ge.Specific ? f({ type: 2, focus: ge.Specific, id: F, trigger: W }) : f({ type: 2, focus: z, trigger: W })), Wl = K((z, F) => (f({ type: 5, id: z, dataRef: F }), () => f({ type: 6, id: z }))), Nn = K((z) => (f({ type: 7, id: z }), () => f({ type: 7, id: null }))), Ye = K((z) => et(E.mode, { 0() {
    return w == null ? void 0 : w(z);
  }, 1() {
    let F = E.value.slice(), W = F.findIndex((Xe) => y(Xe, z));
    return W === -1 ? F.push(z) : F.splice(W, 1), w == null ? void 0 : w(F);
  } })), P = K((z) => f({ type: 3, value: z })), O = K(() => f({ type: 4 })), I = _.useMemo(() => ({ onChange: Ye, registerOption: Wl, registerLabel: Nn, goToOption: kr, closeListbox: Ot, openListbox: Lt, selectActiveOption: fe, selectOption: L, search: P, clearSearch: O }), []), B = { ref: g }, Q = _.useRef(null), Xt = Pl();
  return _.useEffect(() => {
    Q.current && r !== void 0 && Xt.addEventListener(Q.current, "reset", () => {
      Ye(r);
    });
  }, [Q, Ye]), Qe.createElement(Eu.Provider, { value: I }, Qe.createElement(Cu.Provider, { value: E }, Qe.createElement(Om, { value: et(E.listboxState, { 0: pr.Open, 1: pr.Closed }) }, o != null && v != null && df({ [o]: v }).map(([z, F], W) => Qe.createElement(Tm, { features: hf.Hidden, ref: W === 0 ? (Xe) => {
    var Pu;
    Q.current = (Pu = Xe == null ? void 0 : Xe.closest("form")) != null ? Pu : null;
  } : void 0, ...xi({ key: z, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: l, name: z, value: F }) })), _n({ ourProps: B, theirProps: p, slot: $, defaultTag: Am, name: "Listbox" }))));
}
let Hm = "button";
function Vm(e, t) {
  var n;
  let r = Ql(), { id: l = `headlessui-listbox-button-${r}`, ...o } = e, i = xr("Listbox.Button"), u = Sr("Listbox.Button"), s = wr(i.buttonRef, t), a = Pl(), h = K((T) => {
    switch (T.key) {
      case te.Space:
      case te.Enter:
      case te.ArrowDown:
        T.preventDefault(), u.openListbox(), a.nextFrame(() => {
          i.value || u.goToOption(ge.First);
        });
        break;
      case te.ArrowUp:
        T.preventDefault(), u.openListbox(), a.nextFrame(() => {
          i.value || u.goToOption(ge.Last);
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
    i.listboxState === 0 ? (u.closeListbox(), a.nextFrame(() => {
      var f;
      return (f = i.buttonRef.current) == null ? void 0 : f.focus({ preventScroll: !0 });
    })) : (T.preventDefault(), u.openListbox());
  }), g = sf(() => {
    if (i.labelId) return [i.labelId, l].join(" ");
  }, [i.labelId, l]), v = _.useMemo(() => ({ open: i.listboxState === 0, disabled: i.disabled, value: i.value }), [i]), w = { ref: s, id: l, type: gm(e, i.buttonRef), "aria-haspopup": "listbox", "aria-controls": (n = i.optionsRef.current) == null ? void 0 : n.id, "aria-expanded": i.disabled ? void 0 : i.listboxState === 0, "aria-labelledby": g, disabled: i.disabled, onKeyDown: h, onKeyUp: p, onClick: m };
  return _n({ ourProps: w, theirProps: o, slot: v, defaultTag: Hm, name: "Listbox.Button" });
}
let Bm = "label";
function Qm(e, t) {
  let n = Ql(), { id: r = `headlessui-listbox-label-${n}`, ...l } = e, o = xr("Listbox.Label"), i = Sr("Listbox.Label"), u = wr(o.labelRef, t);
  it(() => i.registerLabel(r), [r]);
  let s = K(() => {
    var h;
    return (h = o.buttonRef.current) == null ? void 0 : h.focus({ preventScroll: !0 });
  }), a = _.useMemo(() => ({ open: o.listboxState === 0, disabled: o.disabled }), [o]);
  return _n({ ourProps: { ref: u, id: r, onClick: s }, theirProps: l, slot: a, defaultTag: Bm, name: "Listbox.Label" });
}
let Wm = "ul", Km = Si.RenderStrategy | Si.Static;
function Ym(e, t) {
  var n;
  let r = Ql(), { id: l = `headlessui-listbox-options-${r}`, ...o } = e, i = xr("Listbox.Options"), u = Sr("Listbox.Options"), s = wr(i.optionsRef, t), a = Pl(), h = Pl(), p = Lm(), m = p !== null ? (p & pr.Open) === pr.Open : i.listboxState === 0;
  _.useEffect(() => {
    var f;
    let c = i.optionsRef.current;
    c && i.listboxState === 0 && c !== ((f = af(c)) == null ? void 0 : f.activeElement) && c.focus({ preventScroll: !0 });
  }, [i.listboxState, i.optionsRef]);
  let g = K((f) => {
    switch (h.dispose(), f.key) {
      case te.Space:
        if (i.searchQuery !== "") return f.preventDefault(), f.stopPropagation(), u.search(f.key);
      case te.Enter:
        if (f.preventDefault(), f.stopPropagation(), i.activeOptionIndex !== null) {
          let { dataRef: c } = i.options[i.activeOptionIndex];
          u.onChange(c.current.value);
        }
        i.mode === 0 && (u.closeListbox(), dr().nextFrame(() => {
          var c;
          return (c = i.buttonRef.current) == null ? void 0 : c.focus({ preventScroll: !0 });
        }));
        break;
      case et(i.orientation, { vertical: te.ArrowDown, horizontal: te.ArrowRight }):
        return f.preventDefault(), f.stopPropagation(), u.goToOption(ge.Next);
      case et(i.orientation, { vertical: te.ArrowUp, horizontal: te.ArrowLeft }):
        return f.preventDefault(), f.stopPropagation(), u.goToOption(ge.Previous);
      case te.Home:
      case te.PageUp:
        return f.preventDefault(), f.stopPropagation(), u.goToOption(ge.First);
      case te.End:
      case te.PageDown:
        return f.preventDefault(), f.stopPropagation(), u.goToOption(ge.Last);
      case te.Escape:
        return f.preventDefault(), f.stopPropagation(), u.closeListbox(), a.nextFrame(() => {
          var c;
          return (c = i.buttonRef.current) == null ? void 0 : c.focus({ preventScroll: !0 });
        });
      case te.Tab:
        f.preventDefault(), f.stopPropagation();
        break;
      default:
        f.key.length === 1 && (u.search(f.key), h.setTimeout(() => u.clearSearch(), 350));
        break;
    }
  }), v = sf(() => {
    var f, c, d;
    return (d = (f = i.labelRef.current) == null ? void 0 : f.id) != null ? d : (c = i.buttonRef.current) == null ? void 0 : c.id;
  }, [i.labelRef.current, i.buttonRef.current]), w = _.useMemo(() => ({ open: i.listboxState === 0 }), [i]), T = { "aria-activedescendant": i.activeOptionIndex === null || (n = i.options[i.activeOptionIndex]) == null ? void 0 : n.id, "aria-multiselectable": i.mode === 1 ? !0 : void 0, "aria-labelledby": v, "aria-orientation": i.orientation, id: l, onKeyDown: g, role: "listbox", tabIndex: 0, ref: s };
  return _n({ ourProps: T, theirProps: o, slot: w, defaultTag: Wm, features: Km, visible: m, name: "Listbox.Options" });
}
let Xm = "li";
function Gm(e, t) {
  let n = Ql(), { id: r = `headlessui-listbox-option-${n}`, disabled: l = !1, value: o, ...i } = e, u = xr("Listbox.Option"), s = Sr("Listbox.Option"), a = u.activeOptionIndex !== null ? u.options[u.activeOptionIndex].id === r : !1, h = u.isSelected(o), p = _.useRef(null), m = Bl({ disabled: l, value: o, domRef: p, get textValue() {
    var C, y;
    return (y = (C = p.current) == null ? void 0 : C.textContent) == null ? void 0 : y.toLowerCase();
  } }), g = wr(t, p);
  it(() => {
    if (u.listboxState !== 0 || !a || u.activationTrigger === 0) return;
    let C = dr();
    return C.requestAnimationFrame(() => {
      var y, k;
      (k = (y = p.current) == null ? void 0 : y.scrollIntoView) == null || k.call(y, { block: "nearest" });
    }), C.dispose;
  }, [p, a, u.listboxState, u.activationTrigger, u.activeOptionIndex]), it(() => s.registerOption(r, m), [m, r]);
  let v = K((C) => {
    if (l) return C.preventDefault();
    s.onChange(o), u.mode === 0 && (s.closeListbox(), dr().nextFrame(() => {
      var y;
      return (y = u.buttonRef.current) == null ? void 0 : y.focus({ preventScroll: !0 });
    }));
  }), w = K(() => {
    if (l) return s.goToOption(ge.Nothing);
    s.goToOption(ge.Specific, r);
  }), T = Im(), f = K((C) => T.update(C)), c = K((C) => {
    T.wasMoved(C) && (l || a || s.goToOption(ge.Specific, r, 0));
  }), d = K((C) => {
    T.wasMoved(C) && (l || a && s.goToOption(ge.Nothing));
  }), S = _.useMemo(() => ({ active: a, selected: h, disabled: l }), [a, h, l]);
  return _n({ ourProps: { id: r, ref: g, role: "option", tabIndex: l === !0 ? void 0 : -1, "aria-disabled": l === !0 ? !0 : void 0, "aria-selected": h, disabled: void 0, onClick: v, onFocus: w, onPointerEnter: f, onMouseEnter: f, onPointerMove: c, onMouseMove: c, onPointerLeave: d, onMouseLeave: d }, theirProps: i, slot: S, defaultTag: Xm, name: "Listbox.Option" });
}
let Zm = Pn(Um), Jm = Pn(Vm), qm = Pn(Qm), bm = Pn(Ym), eh = Pn(Gm), _o = Object.assign(Zm, { Button: Jm, Label: qm, Options: bm, Option: eh });
const th = "relative w-full rounded-md border py-2 pl-3 pr-10 text-left sm:text-sm cursor-default cursor-default border-gray-300 bg-gray-50 text-gray-500", ki = (e) => e.text ? /* @__PURE__ */ R.jsx("div", { className: "tooltiptext flex items-center", children: /* @__PURE__ */ R.jsx("div", { className: "px-2 text-center w-full block", children: e.text }) }) : /* @__PURE__ */ R.jsx(R.Fragment, {}), Hs = (e) => /* @__PURE__ */ R.jsx(_o, { children: /* @__PURE__ */ R.jsxs("div", { className: Wt("w-full tooltip", e.disabledTextDirection && e.disabledTextDirection === "left" ? "tooltip-left" : ""), children: [
  /* @__PURE__ */ R.jsx(_o.Label, { className: Wt("block text-sm font-medium text-gray-700 ") }),
  /* @__PURE__ */ R.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ R.jsxs(_o.Button, { className: th, children: [
      /* @__PURE__ */ R.jsx("span", { className: "block truncate", children: e.text }),
      /* @__PURE__ */ R.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" })
    ] }),
    e.disabledText && /* @__PURE__ */ R.jsx(ki, { text: e.disabledText })
  ] })
] }) }), nh = "block w-full text-gray-700 rounded-md border border-gray-300 bg-white py-2 pr-3 text-sm placeholder-gray-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-gray-400 focus:ring-gray-400 disabled:cursor-default disabled:border-gray-300 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm hover:bg-gray-100", rh = _.forwardRef(function(t, n) {
  const { disabled: r, disabledText: l, disabledTextDirection: o, tooltipText: i, ...u } = t;
  return /* @__PURE__ */ R.jsxs("div", { className: Wt("tooltip w-full h-full", o && o === "left" ? "tooltip-left" : ""), children: [
    /* @__PURE__ */ R.jsx(
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
    r && l && /* @__PURE__ */ R.jsx(ki, { text: l }),
    !r && i && /* @__PURE__ */ R.jsx(ki, { text: i })
  ] });
}), lh = (e) => /* @__PURE__ */ R.jsx(R.Fragment, { children: /* @__PURE__ */ R.jsx("input", { className: "hidden", type: "text", id: e.name, name: e.name, value: e.value }) });
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
              var a = s.value;
              a.remove(this);
            }
          } catch (w) {
            t = { error: w };
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
        } catch (w) {
          o = w instanceof Po ? w.errors : [w];
        }
      var p = this._finalizers;
      if (p) {
        this._finalizers = null;
        try {
          for (var m = Vs(p), g = m.next(); !g.done; g = m.next()) {
            var v = g.value;
            try {
              Qs(v);
            } catch (w) {
              o = o ?? [], w instanceof Po ? o = _i(_i([], Ci(o)), Ci(w.errors)) : o.push(w);
            }
          }
        } catch (w) {
          r = { error: w };
        } finally {
          try {
            g && !g.done && (l = m.return) && l.call(m);
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
  _.useEffect(() => {
    function n(r) {
      const o = r.composedPath().includes(e.current);
      e.current && !o && (t.next(r.target), t.complete());
    }
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, [e, t]);
}), Sh = (e) => {
  const t = e.disabled ?? !1, n = e.stylesheetUrl ?? "./webcomponent.css", [r, l] = _.useState(!1), [o, i] = _.useState(!1), [u, s] = _.useState(""), [a, h] = _.useState(), [p, m] = _.useState(), [g, v] = _.useState(e.initSelectedItems || e.items.filter((y) => y.selected)), w = _.useRef(null), T = _.useRef(null);
  wh(w).subscribe({
    next() {
      l(!1), i(!1), s("");
    }
  });
  const c = (y) => {
    const k = [...e.items];
    k.forEach(($) => {
      $.id === y.id && ($.selected = !1);
    });
    const E = g.filter(($) => $.id !== y.id);
    if (v(E), !e.keepSelectOrder)
      e.onChange && e.onChange(k);
    else {
      const $ = k.filter((L) => !L.selected);
      e.onChange && (e == null || e.onChange([...E, ...$]));
    }
    i(!0);
  }, d = (y) => {
    const k = [...e.items];
    k.forEach((L) => {
      L.id === y.id && (L.selected = !0);
    });
    const E = g.some((L) => L.id === y.id), $ = E ? g : [...g, y];
    if (E || v($), !e.keepSelectOrder)
      e.onChange && e.onChange(k);
    else {
      const L = k.filter((fe) => !fe.selected);
      e.onChange && e.onChange([...$, ...L]);
    }
  };
  if (t) {
    const y = e.items.filter((k) => k.selected);
    if (y.length > 0) {
      const k = y.map((E) => E.label).join(", ");
      return /* @__PURE__ */ R.jsx(Hs, { text: k });
    } else
      return /* @__PURE__ */ R.jsx(Hs, { text: e.placeholder });
  }
  const S = e.keepSelectOrder ? g : e.items.filter((y) => y.selected), C = e.items.filter((y) => y.selected).map((y) => y.id).join(",");
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx("style", { children: "@import '" + n + "';" }),
    /* @__PURE__ */ R.jsx(lh, { name: e.controlName, value: C }),
    /* @__PURE__ */ R.jsxs(
      "div",
      {
        ref: w,
        onClick: () => {
          var y;
          i(!0), t || (l(!0), (y = T.current) == null || y.focus());
        },
        onKeyDown: (y) => {
          if (y.code === "ArrowDown")
            if (y.preventDefault(), a === void 0) {
              const k = e.items.findIndex((E) => !E.selected);
              h(k);
            } else {
              const k = e.items.slice(a + 1).findIndex((E) => !E.selected) + a + 1;
              h(k);
            }
          if (y.code === "ArrowUp")
            if (y.preventDefault(), y.stopPropagation(), a === void 0) {
              const k = e.items.findLastIndex((E) => !E.selected);
              h(k);
            } else {
              const k = e.items.slice(0, a).findLastIndex(($) => !$.selected), E = e.items.findIndex(($) => !$.selected);
              h(k === -1 ? E : k);
            }
          if (y.code === "Enter" && a !== void 0) {
            y.preventDefault();
            const k = e.items.at(a);
            k && d(k), s("");
          }
          if (y.code === "Backspace" && u === "")
            if (h(void 0), p)
              c(p), m(void 0);
            else {
              const k = S.at(-1);
              m(k);
            }
        },
        className: "w-full tooltip",
        children: [
          /* @__PURE__ */ R.jsxs(
            "div",
            {
              className: Wt(
                "w-full border-gray-300 shadow-sm border rounded-md min-h-[38px] relative cursor-pointer",
                o ? "border-gray-400 border-2 -m-[1px]" : "border-gray-300",
                t ? "" : "hover:bg-gray-100"
              ),
              children: [
                S.map((y) => /* @__PURE__ */ R.jsx(
                  im,
                  {
                    item: y,
                    onRemove: c,
                    disabled: t,
                    selected: y.id === (p == null ? void 0 : p.id),
                    setItemToRemove: m,
                    setSelectedItemIndex: h
                  },
                  y.id
                )),
                !t && /* @__PURE__ */ R.jsx("span", { className: "h-[36px] w-[240px] inline-block", children: /* @__PURE__ */ R.jsx(
                  rh,
                  {
                    ref: T,
                    value: u,
                    type: "text",
                    placeholder: e.placeholder,
                    className: "w-full ml-3 p-0 align-middle h-full border-transparent focus:border-transparent focus:ring-0 text-sm bg-transparent",
                    onChange: (y) => {
                      y.target && (m(void 0), h(void 0), s(y.target.value));
                    },
                    autoComplete: "off"
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ R.jsx("div", { className: "w-full", children: !t && r && /* @__PURE__ */ R.jsx(
            om,
            {
              searchTerm: u,
              items: e.items,
              onAdd: d,
              isOpen: r,
              maximumItemsToRender: e.maximumItemsToRender,
              selectedItemIndex: a,
              setSelectedIndex: h,
              itemToRemove: p,
              setItemToRemove: m
            },
            "list"
          ) })
        ]
      }
    )
  ] });
}, xh = qp(Sh, {
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
customElements.define("combo-box", xh);
const Eh = !0;
export {
  Eh as hmr
};
