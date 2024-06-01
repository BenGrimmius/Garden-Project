(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === 'childList')
        for (const o of a.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = t(i);
    fetch(i.href, a);
  }
})();
function nf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var tf = { exports: {} },
  na = {},
  rf = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ar = Symbol.for('react.element'),
  Gd = Symbol.for('react.portal'),
  Zd = Symbol.for('react.fragment'),
  Jd = Symbol.for('react.strict_mode'),
  qd = Symbol.for('react.profiler'),
  ep = Symbol.for('react.provider'),
  np = Symbol.for('react.context'),
  tp = Symbol.for('react.forward_ref'),
  rp = Symbol.for('react.suspense'),
  ip = Symbol.for('react.memo'),
  ap = Symbol.for('react.lazy'),
  wu = Symbol.iterator;
function op(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (wu && e[wu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var af = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  of = Object.assign,
  lf = {};
function Lt(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = lf),
    (this.updater = t || af);
}
Lt.prototype.isReactComponent = {};
Lt.prototype.setState = function (e, n) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, n, 'setState');
};
Lt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function uf() {}
uf.prototype = Lt.prototype;
function fl(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = lf),
    (this.updater = t || af);
}
var cl = (fl.prototype = new uf());
cl.constructor = fl;
of(cl, Lt.prototype);
cl.isPureReactComponent = !0;
var ku = Array.isArray,
  sf = Object.prototype.hasOwnProperty,
  dl = { current: null },
  ff = { key: !0, ref: !0, __self: !0, __source: !0 };
function cf(e, n, t) {
  var r,
    i = {},
    a = null,
    o = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (o = n.ref),
    n.key !== void 0 && (a = '' + n.key),
    n))
      sf.call(n, r) && !ff.hasOwnProperty(r) && (i[r] = n[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = t;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Ar,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: dl.current,
  };
}
function lp(e, n) {
  return {
    $$typeof: Ar,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function pl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ar;
}
function up(e) {
  var n = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var xu = /\/+/g;
function _a(e, n) {
  return typeof e == 'object' && e !== null && e.key != null
    ? up('' + e.key)
    : n.toString(36);
}
function pi(e, n, t, r, i) {
  var a = typeof e;
  (a === 'undefined' || a === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Ar:
          case Gd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + _a(o, 0) : r),
      ku(i)
        ? ((t = ''),
          e != null && (t = e.replace(xu, '$&/') + '/'),
          pi(i, n, t, '', function (s) {
            return s;
          }))
        : i != null &&
          (pl(i) &&
            (i = lp(
              i,
              t +
                (!i.key || (o && o.key === i.key)
                  ? ''
                  : ('' + i.key).replace(xu, '$&/') + '/') +
                e
            )),
          n.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), ku(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var u = r + _a(a, l);
      o += pi(a, n, t, u, i);
    }
  else if (((u = op(e)), typeof u == 'function'))
    for (e = u.call(e), l = 0; !(a = e.next()).done; )
      (a = a.value), (u = r + _a(a, l++)), (o += pi(a, n, t, u, i));
  else if (a === 'object')
    throw (
      ((n = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (n === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : n) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function Ur(e, n, t) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    pi(e, r, '', '', function (a) {
      return n.call(t, a, i++);
    }),
    r
  );
}
function sp(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var me = { current: null },
  mi = { transition: null },
  fp = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: mi,
    ReactCurrentOwner: dl,
  };
R.Children = {
  map: Ur,
  forEach: function (e, n, t) {
    Ur(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      Ur(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      Ur(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!pl(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
R.Component = Lt;
R.Fragment = Zd;
R.Profiler = qd;
R.PureComponent = fl;
R.StrictMode = Jd;
R.Suspense = rp;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fp;
R.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = of({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((a = n.ref), (o = dl.current)),
      n.key !== void 0 && (i = '' + n.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in n)
      sf.call(n, u) &&
        !ff.hasOwnProperty(u) &&
        (r[u] = n[u] === void 0 && l !== void 0 ? l[u] : n[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = t;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: Ar, type: e.type, key: i, ref: a, props: r, _owner: o };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: np,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ep, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = cf;
R.createFactory = function (e) {
  var n = cf.bind(null, e);
  return (n.type = e), n;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: tp, render: e };
};
R.isValidElement = pl;
R.lazy = function (e) {
  return { $$typeof: ap, _payload: { _status: -1, _result: e }, _init: sp };
};
R.memo = function (e, n) {
  return { $$typeof: ip, type: e, compare: n === void 0 ? null : n };
};
R.startTransition = function (e) {
  var n = mi.transition;
  mi.transition = {};
  try {
    e();
  } finally {
    mi.transition = n;
  }
};
R.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
R.useCallback = function (e, n) {
  return me.current.useCallback(e, n);
};
R.useContext = function (e) {
  return me.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return me.current.useDeferredValue(e);
};
R.useEffect = function (e, n) {
  return me.current.useEffect(e, n);
};
R.useId = function () {
  return me.current.useId();
};
R.useImperativeHandle = function (e, n, t) {
  return me.current.useImperativeHandle(e, n, t);
};
R.useInsertionEffect = function (e, n) {
  return me.current.useInsertionEffect(e, n);
};
R.useLayoutEffect = function (e, n) {
  return me.current.useLayoutEffect(e, n);
};
R.useMemo = function (e, n) {
  return me.current.useMemo(e, n);
};
R.useReducer = function (e, n, t) {
  return me.current.useReducer(e, n, t);
};
R.useRef = function (e) {
  return me.current.useRef(e);
};
R.useState = function (e) {
  return me.current.useState(e);
};
R.useSyncExternalStore = function (e, n, t) {
  return me.current.useSyncExternalStore(e, n, t);
};
R.useTransition = function () {
  return me.current.useTransition();
};
R.version = '18.2.0';
rf.exports = R;
var ta = rf.exports;
const ml = nf(ta);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cp = ta,
  dp = Symbol.for('react.element'),
  pp = Symbol.for('react.fragment'),
  mp = Object.prototype.hasOwnProperty,
  vp = cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hp = { key: !0, ref: !0, __self: !0, __source: !0 };
function df(e, n, t) {
  var r,
    i = {},
    a = null,
    o = null;
  t !== void 0 && (a = '' + t),
    n.key !== void 0 && (a = '' + n.key),
    n.ref !== void 0 && (o = n.ref);
  for (r in n) mp.call(n, r) && !hp.hasOwnProperty(r) && (i[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) i[r] === void 0 && (i[r] = n[r]);
  return {
    $$typeof: dp,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: vp.current,
  };
}
na.Fragment = pp;
na.jsx = df;
na.jsxs = df;
tf.exports = na;
var S = tf.exports,
  to = {},
  pf = { exports: {} },
  _e = {},
  mf = { exports: {} },
  vf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(N, A) {
    var I = N.length;
    N.push(A);
    e: for (; 0 < I; ) {
      var G = (I - 1) >>> 1,
        te = N[G];
      if (0 < i(te, A)) (N[G] = A), (N[I] = te), (I = G);
      else break e;
    }
  }
  function t(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var A = N[0],
      I = N.pop();
    if (I !== A) {
      N[0] = I;
      e: for (var G = 0, te = N.length, Dr = te >>> 1; G < Dr; ) {
        var Mn = 2 * (G + 1) - 1,
          Ca = N[Mn],
          bn = Mn + 1,
          $r = N[bn];
        if (0 > i(Ca, I))
          bn < te && 0 > i($r, Ca)
            ? ((N[G] = $r), (N[bn] = I), (G = bn))
            : ((N[G] = Ca), (N[Mn] = I), (G = Mn));
        else if (bn < te && 0 > i($r, I)) (N[G] = $r), (N[bn] = I), (G = bn);
        else break e;
      }
    }
    return A;
  }
  function i(N, A) {
    var I = N.sortIndex - A.sortIndex;
    return I !== 0 ? I : N.id - A.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var u = [],
    s = [],
    c = 1,
    m = null,
    v = 3,
    h = !1,
    w = !1,
    k = !1,
    z = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var A = t(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= N)
        r(s), (A.sortIndex = A.expirationTime), n(u, A);
      else break;
      A = t(s);
    }
  }
  function g(N) {
    if (((k = !1), p(N), !w))
      if (t(u) !== null) (w = !0), Sa(x);
      else {
        var A = t(s);
        A !== null && Ea(g, A.startTime - N);
      }
  }
  function x(N, A) {
    (w = !1), k && ((k = !1), d(T), (T = -1)), (h = !0);
    var I = v;
    try {
      for (
        p(A), m = t(u);
        m !== null && (!(m.expirationTime > A) || (N && !je()));

      ) {
        var G = m.callback;
        if (typeof G == 'function') {
          (m.callback = null), (v = m.priorityLevel);
          var te = G(m.expirationTime <= A);
          (A = e.unstable_now()),
            typeof te == 'function' ? (m.callback = te) : m === t(u) && r(u),
            p(A);
        } else r(u);
        m = t(u);
      }
      if (m !== null) var Dr = !0;
      else {
        var Mn = t(s);
        Mn !== null && Ea(g, Mn.startTime - A), (Dr = !1);
      }
      return Dr;
    } finally {
      (m = null), (v = I), (h = !1);
    }
  }
  var _ = !1,
    P = null,
    T = -1,
    b = 5,
    L = -1;
  function je() {
    return !(e.unstable_now() - L < b);
  }
  function bt() {
    if (P !== null) {
      var N = e.unstable_now();
      L = N;
      var A = !0;
      try {
        A = P(!0, N);
      } finally {
        A ? Ft() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var Ft;
  if (typeof f == 'function')
    Ft = function () {
      f(bt);
    };
  else if (typeof MessageChannel < 'u') {
    var yu = new MessageChannel(),
      Xd = yu.port2;
    (yu.port1.onmessage = bt),
      (Ft = function () {
        Xd.postMessage(null);
      });
  } else
    Ft = function () {
      z(bt, 0);
    };
  function Sa(N) {
    (P = N), _ || ((_ = !0), Ft());
  }
  function Ea(N, A) {
    T = z(function () {
      N(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || h || ((w = !0), Sa(x));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (b = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(u);
    }),
    (e.unstable_next = function (N) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = v;
      }
      var I = v;
      v = A;
      try {
        return N();
      } finally {
        v = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, A) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var I = v;
      v = N;
      try {
        return A();
      } finally {
        v = I;
      }
    }),
    (e.unstable_scheduleCallback = function (N, A, I) {
      var G = e.unstable_now();
      switch (
        (typeof I == 'object' && I !== null
          ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? G + I : G))
          : (I = G),
        N)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = I + te),
        (N = {
          id: c++,
          callback: A,
          priorityLevel: N,
          startTime: I,
          expirationTime: te,
          sortIndex: -1,
        }),
        I > G
          ? ((N.sortIndex = I),
            n(s, N),
            t(u) === null &&
              N === t(s) &&
              (k ? (d(T), (T = -1)) : (k = !0), Ea(g, I - G)))
          : ((N.sortIndex = te), n(u, N), w || h || ((w = !0), Sa(x))),
        N
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (N) {
      var A = v;
      return function () {
        var I = v;
        v = A;
        try {
          return N.apply(this, arguments);
        } finally {
          v = I;
        }
      };
    });
})(vf);
mf.exports = vf;
var gp = mf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hf = ta,
  Ce = gp;
function y(e) {
  for (
    var n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, t = 1;
    t < arguments.length;
    t++
  )
    n += '&args[]=' + encodeURIComponent(arguments[t]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    n +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var gf = new Set(),
  sr = {};
function et(e, n) {
  _t(e, n), _t(e + 'Capture', n);
}
function _t(e, n) {
  for (sr[e] = n, e = 0; e < n.length; e++) gf.add(n[e]);
}
var en = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ro = Object.prototype.hasOwnProperty,
  yp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Su = {},
  Eu = {};
function wp(e) {
  return ro.call(Eu, e)
    ? !0
    : ro.call(Su, e)
    ? !1
    : yp.test(e)
    ? (Eu[e] = !0)
    : ((Su[e] = !0), !1);
}
function kp(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function xp(e, n, t, r) {
  if (n === null || typeof n > 'u' || kp(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ve(e, n, t, r, i, a, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var le = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    le[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var n = e[0];
  le[n] = new ve(n, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  le[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  le[e] = new ve(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    le[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  le[e] = new ve(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  le[e] = new ve(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  le[e] = new ve(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  le[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vl = /[\-:]([a-z])/g;
function hl(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var n = e.replace(vl, hl);
    le[n] = new ve(n, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var n = e.replace(vl, hl);
    le[n] = new ve(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var n = e.replace(vl, hl);
  le[n] = new ve(n, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  le[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new ve(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  le[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gl(e, n, t, r) {
  var i = le.hasOwnProperty(n) ? le[n] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== 'o' && n[0] !== 'O') ||
      (n[1] !== 'n' && n[1] !== 'N')) &&
    (xp(n, t, i, r) && (t = null),
    r || i === null
      ? wp(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, '' + t))
      : i.mustUseProperty
      ? (e[i.propertyName] = t === null ? (i.type === 3 ? !1 : '') : t)
      : ((n = i.attributeName),
        (r = i.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((i = i.type),
            (t = i === 3 || (i === 4 && t === !0) ? '' : '' + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var un = hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wr = Symbol.for('react.element'),
  rt = Symbol.for('react.portal'),
  it = Symbol.for('react.fragment'),
  yl = Symbol.for('react.strict_mode'),
  io = Symbol.for('react.profiler'),
  yf = Symbol.for('react.provider'),
  wf = Symbol.for('react.context'),
  wl = Symbol.for('react.forward_ref'),
  ao = Symbol.for('react.suspense'),
  oo = Symbol.for('react.suspense_list'),
  kl = Symbol.for('react.memo'),
  dn = Symbol.for('react.lazy'),
  kf = Symbol.for('react.offscreen'),
  Cu = Symbol.iterator;
function Dt(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Cu && e[Cu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Q = Object.assign,
  Pa;
function Qt(e) {
  if (Pa === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      Pa = (n && n[1]) || '';
    }
  return (
    `
` +
    Pa +
    e
  );
}
var Na = !1;
function Oa(e, n) {
  if (!e || Na) return '';
  Na = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (s) {
          r = s;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var i = s.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          l = a.length - 1;
        1 <= o && 0 <= l && i[o] !== a[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== a[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== a[l])) {
                var u =
                  `
` + i[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Na = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : '') ? Qt(e) : '';
}
function Sp(e) {
  switch (e.tag) {
    case 5:
      return Qt(e.type);
    case 16:
      return Qt('Lazy');
    case 13:
      return Qt('Suspense');
    case 19:
      return Qt('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Oa(e.type, !1)), e;
    case 11:
      return (e = Oa(e.type.render, !1)), e;
    case 1:
      return (e = Oa(e.type, !0)), e;
    default:
      return '';
  }
}
function lo(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case it:
      return 'Fragment';
    case rt:
      return 'Portal';
    case io:
      return 'Profiler';
    case yl:
      return 'StrictMode';
    case ao:
      return 'Suspense';
    case oo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case wf:
        return (e.displayName || 'Context') + '.Consumer';
      case yf:
        return (e._context.displayName || 'Context') + '.Provider';
      case wl:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case kl:
        return (
          (n = e.displayName || null), n !== null ? n : lo(e.type) || 'Memo'
        );
      case dn:
        (n = e._payload), (e = e._init);
        try {
          return lo(e(n));
        } catch {}
    }
  return null;
}
function Ep(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (n.displayName || 'Context') + '.Consumer';
    case 10:
      return (n._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ''),
        n.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return n;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return lo(n);
    case 8:
      return n === yl ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == 'function') return n.displayName || n.name || null;
      if (typeof n == 'string') return n;
  }
  return null;
}
function Nn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function xf(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (n === 'checkbox' || n === 'radio')
  );
}
function Cp(e) {
  var n = xf(e) ? 'checked' : 'value',
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = '' + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < 'u' &&
    typeof t.get == 'function' &&
    typeof t.set == 'function'
  ) {
    var i = t.get,
      a = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = '' + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function Hr(e) {
  e._valueTracker || (e._valueTracker = Cp(e));
}
function Sf(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = '';
  return (
    e && (r = xf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Ni(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uo(e, n) {
  var t = n.checked;
  return Q({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function _u(e, n) {
  var t = n.defaultValue == null ? '' : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = Nn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === 'checkbox' || n.type === 'radio'
          ? n.checked != null
          : n.value != null,
    });
}
function Ef(e, n) {
  (n = n.checked), n != null && gl(e, 'checked', n, !1);
}
function so(e, n) {
  Ef(e, n);
  var t = Nn(n.value),
    r = n.type;
  if (t != null)
    r === 'number'
      ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + t)
      : e.value !== '' + t && (e.value = '' + t);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  n.hasOwnProperty('value')
    ? fo(e, n.type, t)
    : n.hasOwnProperty('defaultValue') && fo(e, n.type, Nn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Pu(e, n, t) {
  if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
    var r = n.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = '' + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== '' && (e.name = t);
}
function fo(e, n, t) {
  (n !== 'number' || Ni(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + t && (e.defaultValue = '' + t));
}
var Kt = Array.isArray;
function yt(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var i = 0; i < t.length; i++) n['$' + t[i]] = !0;
    for (t = 0; t < e.length; t++)
      (i = n.hasOwnProperty('$' + e[t].value)),
        e[t].selected !== i && (e[t].selected = i),
        i && r && (e[t].defaultSelected = !0);
  } else {
    for (t = '' + Nn(t), n = null, i = 0; i < e.length; i++) {
      if (e[i].value === t) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      n !== null || e[i].disabled || (n = e[i]);
    }
    n !== null && (n.selected = !0);
  }
}
function co(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return Q({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Nu(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (Kt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ''), (t = n);
  }
  e._wrapperState = { initialValue: Nn(t) };
}
function Cf(e, n) {
  var t = Nn(n.value),
    r = Nn(n.defaultValue);
  t != null &&
    ((t = '' + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = '' + r);
}
function Ou(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== '' && n !== null && (e.value = n);
}
function _f(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function po(e, n) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? _f(n)
    : e === 'http://www.w3.org/2000/svg' && n === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Vr,
  Pf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, i);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = n;
    else {
      for (
        Vr = Vr || document.createElement('div'),
          Vr.innerHTML = '<svg>' + n.valueOf().toString() + '</svg>',
          n = Vr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function fr(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Jt = {
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
    strokeWidth: !0,
  },
  _p = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Jt).forEach(function (e) {
  _p.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Jt[n] = Jt[e]);
  });
});
function Nf(e, n, t) {
  return n == null || typeof n == 'boolean' || n === ''
    ? ''
    : t || typeof n != 'number' || n === 0 || (Jt.hasOwnProperty(e) && Jt[e])
    ? ('' + n).trim()
    : n + 'px';
}
function Of(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf('--') === 0,
        i = Nf(t, n[t], r);
      t === 'float' && (t = 'cssFloat'), r ? e.setProperty(t, i) : (e[t] = i);
    }
}
var Pp = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function mo(e, n) {
  if (n) {
    if (Pp[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != 'object' ||
        !('__html' in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != 'object') throw Error(y(62));
  }
}
function vo(e, n) {
  if (e.indexOf('-') === -1) return typeof n.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ho = null;
function xl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var go = null,
  wt = null,
  kt = null;
function Tu(e) {
  if ((e = jr(e))) {
    if (typeof go != 'function') throw Error(y(280));
    var n = e.stateNode;
    n && ((n = la(n)), go(e.stateNode, e.type, n));
  }
}
function Tf(e) {
  wt ? (kt ? kt.push(e) : (kt = [e])) : (wt = e);
}
function zf() {
  if (wt) {
    var e = wt,
      n = kt;
    if (((kt = wt = null), Tu(e), n)) for (e = 0; e < n.length; e++) Tu(n[e]);
  }
}
function Af(e, n) {
  return e(n);
}
function If() {}
var Ta = !1;
function Lf(e, n, t) {
  if (Ta) return e(n, t);
  Ta = !0;
  try {
    return Af(e, n, t);
  } finally {
    (Ta = !1), (wt !== null || kt !== null) && (If(), zf());
  }
}
function cr(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = la(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != 'function') throw Error(y(231, n, typeof t));
  return t;
}
var yo = !1;
if (en)
  try {
    var $t = {};
    Object.defineProperty($t, 'passive', {
      get: function () {
        yo = !0;
      },
    }),
      window.addEventListener('test', $t, $t),
      window.removeEventListener('test', $t, $t);
  } catch {
    yo = !1;
  }
function Np(e, n, t, r, i, a, o, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, s);
  } catch (c) {
    this.onError(c);
  }
}
var qt = !1,
  Oi = null,
  Ti = !1,
  wo = null,
  Op = {
    onError: function (e) {
      (qt = !0), (Oi = e);
    },
  };
function Tp(e, n, t, r, i, a, o, l, u) {
  (qt = !1), (Oi = null), Np.apply(Op, arguments);
}
function zp(e, n, t, r, i, a, o, l, u) {
  if ((Tp.apply(this, arguments), qt)) {
    if (qt) {
      var s = Oi;
      (qt = !1), (Oi = null);
    } else throw Error(y(198));
    Ti || ((Ti = !0), (wo = s));
  }
}
function nt(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function jf(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function zu(e) {
  if (nt(e) !== e) throw Error(y(188));
}
function Ap(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = nt(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var i = t.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === t) return zu(i), e;
        if (a === r) return zu(i), n;
        a = a.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = i), (r = a);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === t) {
          (o = !0), (t = i), (r = a);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (t = a);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = a.child; l; ) {
          if (l === t) {
            (o = !0), (t = a), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = a), (t = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Rf(e) {
  return (e = Ap(e)), e !== null ? Mf(e) : null;
}
function Mf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Mf(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var bf = Ce.unstable_scheduleCallback,
  Au = Ce.unstable_cancelCallback,
  Ip = Ce.unstable_shouldYield,
  Lp = Ce.unstable_requestPaint,
  Z = Ce.unstable_now,
  jp = Ce.unstable_getCurrentPriorityLevel,
  Sl = Ce.unstable_ImmediatePriority,
  Ff = Ce.unstable_UserBlockingPriority,
  zi = Ce.unstable_NormalPriority,
  Rp = Ce.unstable_LowPriority,
  Df = Ce.unstable_IdlePriority,
  ra = null,
  Qe = null;
function Mp(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == 'function')
    try {
      Qe.onCommitFiberRoot(ra, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $e = Math.clz32 ? Math.clz32 : Dp,
  bp = Math.log,
  Fp = Math.LN2;
function Dp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bp(e) / Fp) | 0)) | 0;
}
var Br = 64,
  Yr = 4194304;
function Xt(e) {
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
function Ai(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Xt(l)) : ((a &= o), a !== 0 && (r = Xt(a)));
  } else (o = t & ~i), o !== 0 ? (r = Xt(o)) : a !== 0 && (r = Xt(a));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & i) &&
    ((i = r & -r), (a = n & -n), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - $e(n)), (i = 1 << t), (r |= e[t]), (n &= ~i);
  return r;
}
function $p(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
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
      return n + 5e3;
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
function Up(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - $e(a),
      l = 1 << o,
      u = i[o];
    u === -1
      ? (!(l & t) || l & r) && (i[o] = $p(l, n))
      : u <= n && (e.expiredLanes |= l),
      (a &= ~l);
  }
}
function ko(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function $f() {
  var e = Br;
  return (Br <<= 1), !(Br & 4194240) && (Br = 64), e;
}
function za(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Ir(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - $e(n)),
    (e[n] = t);
}
function Wp(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var i = 31 - $e(t),
      a = 1 << i;
    (n[i] = 0), (r[i] = -1), (e[i] = -1), (t &= ~a);
  }
}
function El(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - $e(t),
      i = 1 << r;
    (i & n) | (e[r] & n) && (e[r] |= n), (t &= ~i);
  }
}
var F = 0;
function Uf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Wf,
  Cl,
  Hf,
  Vf,
  Bf,
  xo = !1,
  Qr = [],
  wn = null,
  kn = null,
  xn = null,
  dr = new Map(),
  pr = new Map(),
  mn = [],
  Hp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Iu(e, n) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      wn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      kn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      xn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      dr.delete(n.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      pr.delete(n.pointerId);
  }
}
function Ut(e, n, t, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      n !== null && ((n = jr(n)), n !== null && Cl(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      i !== null && n.indexOf(i) === -1 && n.push(i),
      e);
}
function Vp(e, n, t, r, i) {
  switch (n) {
    case 'focusin':
      return (wn = Ut(wn, e, n, t, r, i)), !0;
    case 'dragenter':
      return (kn = Ut(kn, e, n, t, r, i)), !0;
    case 'mouseover':
      return (xn = Ut(xn, e, n, t, r, i)), !0;
    case 'pointerover':
      var a = i.pointerId;
      return dr.set(a, Ut(dr.get(a) || null, e, n, t, r, i)), !0;
    case 'gotpointercapture':
      return (
        (a = i.pointerId), pr.set(a, Ut(pr.get(a) || null, e, n, t, r, i)), !0
      );
  }
  return !1;
}
function Yf(e) {
  var n = $n(e.target);
  if (n !== null) {
    var t = nt(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = jf(t)), n !== null)) {
          (e.blockedOn = n),
            Bf(e.priority, function () {
              Hf(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function vi(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = So(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (ho = r), t.target.dispatchEvent(r), (ho = null);
    } else return (n = jr(t)), n !== null && Cl(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function Lu(e, n, t) {
  vi(e) && t.delete(n);
}
function Bp() {
  (xo = !1),
    wn !== null && vi(wn) && (wn = null),
    kn !== null && vi(kn) && (kn = null),
    xn !== null && vi(xn) && (xn = null),
    dr.forEach(Lu),
    pr.forEach(Lu);
}
function Wt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    xo ||
      ((xo = !0),
      Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, Bp)));
}
function mr(e) {
  function n(i) {
    return Wt(i, e);
  }
  if (0 < Qr.length) {
    Wt(Qr[0], e);
    for (var t = 1; t < Qr.length; t++) {
      var r = Qr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    wn !== null && Wt(wn, e),
      kn !== null && Wt(kn, e),
      xn !== null && Wt(xn, e),
      dr.forEach(n),
      pr.forEach(n),
      t = 0;
    t < mn.length;
    t++
  )
    (r = mn[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mn.length && ((t = mn[0]), t.blockedOn === null); )
    Yf(t), t.blockedOn === null && mn.shift();
}
var xt = un.ReactCurrentBatchConfig,
  Ii = !0;
function Yp(e, n, t, r) {
  var i = F,
    a = xt.transition;
  xt.transition = null;
  try {
    (F = 1), _l(e, n, t, r);
  } finally {
    (F = i), (xt.transition = a);
  }
}
function Qp(e, n, t, r) {
  var i = F,
    a = xt.transition;
  xt.transition = null;
  try {
    (F = 4), _l(e, n, t, r);
  } finally {
    (F = i), (xt.transition = a);
  }
}
function _l(e, n, t, r) {
  if (Ii) {
    var i = So(e, n, t, r);
    if (i === null) $a(e, n, r, Li, t), Iu(e, r);
    else if (Vp(i, e, n, t, r)) r.stopPropagation();
    else if ((Iu(e, r), n & 4 && -1 < Hp.indexOf(e))) {
      for (; i !== null; ) {
        var a = jr(i);
        if (
          (a !== null && Wf(a),
          (a = So(e, n, t, r)),
          a === null && $a(e, n, r, Li, t),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else $a(e, n, r, null, t);
  }
}
var Li = null;
function So(e, n, t, r) {
  if (((Li = null), (e = xl(r)), (e = $n(e)), e !== null))
    if (((n = nt(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = jf(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Li = e), null;
}
function Qf(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (jp()) {
        case Sl:
          return 1;
        case Ff:
          return 4;
        case zi:
        case Rp:
          return 16;
        case Df:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hn = null,
  Pl = null,
  hi = null;
function Kf() {
  if (hi) return hi;
  var e,
    n = Pl,
    t = n.length,
    r,
    i = 'value' in hn ? hn.value : hn.textContent,
    a = i.length;
  for (e = 0; e < t && n[e] === i[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === i[a - r]; r++);
  return (hi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function gi(e) {
  var n = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Kr() {
  return !0;
}
function ju() {
  return !1;
}
function Pe(e) {
  function n(t, r, i, a, o) {
    (this._reactName = t),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Kr
        : ju),
      (this.isPropagationStopped = ju),
      this
    );
  }
  return (
    Q(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != 'unknown' && (t.returnValue = !1),
          (this.isDefaultPrevented = Kr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != 'unknown' && (t.cancelBubble = !0),
          (this.isPropagationStopped = Kr));
      },
      persist: function () {},
      isPersistent: Kr,
    }),
    n
  );
}
var jt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nl = Pe(jt),
  Lr = Q({}, jt, { view: 0, detail: 0 }),
  Kp = Pe(Lr),
  Aa,
  Ia,
  Ht,
  ia = Q({}, Lr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ol,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Ht &&
            (Ht && e.type === 'mousemove'
              ? ((Aa = e.screenX - Ht.screenX), (Ia = e.screenY - Ht.screenY))
              : (Ia = Aa = 0),
            (Ht = e)),
          Aa);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ia;
    },
  }),
  Ru = Pe(ia),
  Xp = Q({}, ia, { dataTransfer: 0 }),
  Gp = Pe(Xp),
  Zp = Q({}, Lr, { relatedTarget: 0 }),
  La = Pe(Zp),
  Jp = Q({}, jt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qp = Pe(Jp),
  em = Q({}, jt, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  nm = Pe(em),
  tm = Q({}, jt, { data: 0 }),
  Mu = Pe(tm),
  rm = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  im = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  am = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function om(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = am[e]) ? !!n[e] : !1;
}
function Ol() {
  return om;
}
var lm = Q({}, Lr, {
    key: function (e) {
      if (e.key) {
        var n = rm[e.key] || e.key;
        if (n !== 'Unidentified') return n;
      }
      return e.type === 'keypress'
        ? ((e = gi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? im[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ol,
    charCode: function (e) {
      return e.type === 'keypress' ? gi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? gi(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  um = Pe(lm),
  sm = Q({}, ia, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bu = Pe(sm),
  fm = Q({}, Lr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ol,
  }),
  cm = Pe(fm),
  dm = Q({}, jt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pm = Pe(dm),
  mm = Q({}, ia, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vm = Pe(mm),
  hm = [9, 13, 27, 32],
  Tl = en && 'CompositionEvent' in window,
  er = null;
en && 'documentMode' in document && (er = document.documentMode);
var gm = en && 'TextEvent' in window && !er,
  Xf = en && (!Tl || (er && 8 < er && 11 >= er)),
  Fu = String.fromCharCode(32),
  Du = !1;
function Gf(e, n) {
  switch (e) {
    case 'keyup':
      return hm.indexOf(n.keyCode) !== -1;
    case 'keydown':
      return n.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Zf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var at = !1;
function ym(e, n) {
  switch (e) {
    case 'compositionend':
      return Zf(n);
    case 'keypress':
      return n.which !== 32 ? null : ((Du = !0), Fu);
    case 'textInput':
      return (e = n.data), e === Fu && Du ? null : e;
    default:
      return null;
  }
}
function wm(e, n) {
  if (at)
    return e === 'compositionend' || (!Tl && Gf(e, n))
      ? ((e = Kf()), (hi = Pl = hn = null), (at = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case 'compositionend':
      return Xf && n.locale !== 'ko' ? null : n.data;
    default:
      return null;
  }
}
var km = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function $u(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === 'input' ? !!km[e.type] : n === 'textarea';
}
function Jf(e, n, t, r) {
  Tf(r),
    (n = ji(n, 'onChange')),
    0 < n.length &&
      ((t = new Nl('onChange', 'change', null, t, r)),
      e.push({ event: t, listeners: n }));
}
var nr = null,
  vr = null;
function xm(e) {
  sc(e, 0);
}
function aa(e) {
  var n = ut(e);
  if (Sf(n)) return e;
}
function Sm(e, n) {
  if (e === 'change') return n;
}
var qf = !1;
if (en) {
  var ja;
  if (en) {
    var Ra = 'oninput' in document;
    if (!Ra) {
      var Uu = document.createElement('div');
      Uu.setAttribute('oninput', 'return;'),
        (Ra = typeof Uu.oninput == 'function');
    }
    ja = Ra;
  } else ja = !1;
  qf = ja && (!document.documentMode || 9 < document.documentMode);
}
function Wu() {
  nr && (nr.detachEvent('onpropertychange', ec), (vr = nr = null));
}
function ec(e) {
  if (e.propertyName === 'value' && aa(vr)) {
    var n = [];
    Jf(n, vr, e, xl(e)), Lf(xm, n);
  }
}
function Em(e, n, t) {
  e === 'focusin'
    ? (Wu(), (nr = n), (vr = t), nr.attachEvent('onpropertychange', ec))
    : e === 'focusout' && Wu();
}
function Cm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return aa(vr);
}
function _m(e, n) {
  if (e === 'click') return aa(n);
}
function Pm(e, n) {
  if (e === 'input' || e === 'change') return aa(n);
}
function Nm(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var We = typeof Object.is == 'function' ? Object.is : Nm;
function hr(e, n) {
  if (We(e, n)) return !0;
  if (typeof e != 'object' || e === null || typeof n != 'object' || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var i = t[r];
    if (!ro.call(n, i) || !We(e[i], n[i])) return !1;
  }
  return !0;
}
function Hu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vu(e, n) {
  var t = Hu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Hu(t);
  }
}
function nc(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? nc(e, n.parentNode)
      : 'contains' in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function tc() {
  for (var e = window, n = Ni(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == 'string';
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Ni(e.document);
  }
  return n;
}
function zl(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      n === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Om(e) {
  var n = tc(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    nc(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && zl(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        'selectionStart' in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = t.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = Vu(t, a));
        var o = Vu(t, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(n), e.extend(o.node, o.offset))
            : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == 'function' && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Tm = en && 'documentMode' in document && 11 >= document.documentMode,
  ot = null,
  Eo = null,
  tr = null,
  Co = !1;
function Bu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Co ||
    ot == null ||
    ot !== Ni(r) ||
    ((r = ot),
    'selectionStart' in r && zl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (tr && hr(tr, r)) ||
      ((tr = r),
      (r = ji(Eo, 'onSelect')),
      0 < r.length &&
        ((n = new Nl('onSelect', 'select', null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = ot))));
}
function Xr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t['Webkit' + e] = 'webkit' + n),
    (t['Moz' + e] = 'moz' + n),
    t
  );
}
var lt = {
    animationend: Xr('Animation', 'AnimationEnd'),
    animationiteration: Xr('Animation', 'AnimationIteration'),
    animationstart: Xr('Animation', 'AnimationStart'),
    transitionend: Xr('Transition', 'TransitionEnd'),
  },
  Ma = {},
  rc = {};
en &&
  ((rc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete lt.animationend.animation,
    delete lt.animationiteration.animation,
    delete lt.animationstart.animation),
  'TransitionEvent' in window || delete lt.transitionend.transition);
function oa(e) {
  if (Ma[e]) return Ma[e];
  if (!lt[e]) return e;
  var n = lt[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in rc) return (Ma[e] = n[t]);
  return e;
}
var ic = oa('animationend'),
  ac = oa('animationiteration'),
  oc = oa('animationstart'),
  lc = oa('transitionend'),
  uc = new Map(),
  Yu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Ln(e, n) {
  uc.set(e, n), et(n, [e]);
}
for (var ba = 0; ba < Yu.length; ba++) {
  var Fa = Yu[ba],
    zm = Fa.toLowerCase(),
    Am = Fa[0].toUpperCase() + Fa.slice(1);
  Ln(zm, 'on' + Am);
}
Ln(ic, 'onAnimationEnd');
Ln(ac, 'onAnimationIteration');
Ln(oc, 'onAnimationStart');
Ln('dblclick', 'onDoubleClick');
Ln('focusin', 'onFocus');
Ln('focusout', 'onBlur');
Ln(lc, 'onTransitionEnd');
_t('onMouseEnter', ['mouseout', 'mouseover']);
_t('onMouseLeave', ['mouseout', 'mouseover']);
_t('onPointerEnter', ['pointerout', 'pointerover']);
_t('onPointerLeave', ['pointerout', 'pointerover']);
et(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
et(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
et('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
et(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
et(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
et(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Gt =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Im = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Gt));
function Qu(e, n, t) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = t), zp(r, n, void 0, e), (e.currentTarget = null);
}
function sc(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== a && i.isPropagationStopped())) break e;
          Qu(i, l, s), (a = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (u = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== a && i.isPropagationStopped())
          )
            break e;
          Qu(i, l, s), (a = u);
        }
    }
  }
  if (Ti) throw ((e = wo), (Ti = !1), (wo = null), e);
}
function $(e, n) {
  var t = n[To];
  t === void 0 && (t = n[To] = new Set());
  var r = e + '__bubble';
  t.has(r) || (fc(n, e, 2, !1), t.add(r));
}
function Da(e, n, t) {
  var r = 0;
  n && (r |= 4), fc(t, e, r, n);
}
var Gr = '_reactListening' + Math.random().toString(36).slice(2);
function gr(e) {
  if (!e[Gr]) {
    (e[Gr] = !0),
      gf.forEach(function (t) {
        t !== 'selectionchange' && (Im.has(t) || Da(t, !1, e), Da(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[Gr] || ((n[Gr] = !0), Da('selectionchange', !1, n));
  }
}
function fc(e, n, t, r) {
  switch (Qf(n)) {
    case 1:
      var i = Yp;
      break;
    case 4:
      i = Qp;
      break;
    default:
      i = _l;
  }
  (t = i.bind(null, n, t, e)),
    (i = void 0),
    !yo ||
      (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: i })
        : e.addEventListener(n, t, !0)
      : i !== void 0
      ? e.addEventListener(n, t, { passive: i })
      : e.addEventListener(n, t, !1);
}
function $a(e, n, t, r, i) {
  var a = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = $n(l)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = a = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Lf(function () {
    var s = a,
      c = xl(t),
      m = [];
    e: {
      var v = uc.get(e);
      if (v !== void 0) {
        var h = Nl,
          w = e;
        switch (e) {
          case 'keypress':
            if (gi(t) === 0) break e;
          case 'keydown':
          case 'keyup':
            h = um;
            break;
          case 'focusin':
            (w = 'focus'), (h = La);
            break;
          case 'focusout':
            (w = 'blur'), (h = La);
            break;
          case 'beforeblur':
          case 'afterblur':
            h = La;
            break;
          case 'click':
            if (t.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            h = Ru;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            h = Gp;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            h = cm;
            break;
          case ic:
          case ac:
          case oc:
            h = qp;
            break;
          case lc:
            h = pm;
            break;
          case 'scroll':
            h = Kp;
            break;
          case 'wheel':
            h = vm;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            h = nm;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            h = bu;
        }
        var k = (n & 4) !== 0,
          z = !k && e === 'scroll',
          d = k ? (v !== null ? v + 'Capture' : null) : v;
        k = [];
        for (var f = s, p; f !== null; ) {
          p = f;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              d !== null && ((g = cr(f, d)), g != null && k.push(yr(f, g, p)))),
            z)
          )
            break;
          f = f.return;
        }
        0 < k.length &&
          ((v = new h(v, w, null, t, c)), m.push({ event: v, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((v = e === 'mouseover' || e === 'pointerover'),
          (h = e === 'mouseout' || e === 'pointerout'),
          v &&
            t !== ho &&
            (w = t.relatedTarget || t.fromElement) &&
            ($n(w) || w[nn]))
        )
          break e;
        if (
          (h || v) &&
          ((v =
            c.window === c
              ? c
              : (v = c.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          h
            ? ((w = t.relatedTarget || t.toElement),
              (h = s),
              (w = w ? $n(w) : null),
              w !== null &&
                ((z = nt(w)), w !== z || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((h = null), (w = s)),
          h !== w)
        ) {
          if (
            ((k = Ru),
            (g = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((k = bu),
              (g = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (f = 'pointer')),
            (z = h == null ? v : ut(h)),
            (p = w == null ? v : ut(w)),
            (v = new k(g, f + 'leave', h, t, c)),
            (v.target = z),
            (v.relatedTarget = p),
            (g = null),
            $n(c) === s &&
              ((k = new k(d, f + 'enter', w, t, c)),
              (k.target = p),
              (k.relatedTarget = z),
              (g = k)),
            (z = g),
            h && w)
          )
            n: {
              for (k = h, d = w, f = 0, p = k; p; p = tt(p)) f++;
              for (p = 0, g = d; g; g = tt(g)) p++;
              for (; 0 < f - p; ) (k = tt(k)), f--;
              for (; 0 < p - f; ) (d = tt(d)), p--;
              for (; f--; ) {
                if (k === d || (d !== null && k === d.alternate)) break n;
                (k = tt(k)), (d = tt(d));
              }
              k = null;
            }
          else k = null;
          h !== null && Ku(m, v, h, k, !1),
            w !== null && z !== null && Ku(m, z, w, k, !0);
        }
      }
      e: {
        if (
          ((v = s ? ut(s) : window),
          (h = v.nodeName && v.nodeName.toLowerCase()),
          h === 'select' || (h === 'input' && v.type === 'file'))
        )
          var x = Sm;
        else if ($u(v))
          if (qf) x = Pm;
          else {
            x = Cm;
            var _ = Em;
          }
        else
          (h = v.nodeName) &&
            h.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (x = _m);
        if (x && (x = x(e, s))) {
          Jf(m, x, t, c);
          break e;
        }
        _ && _(e, v, s),
          e === 'focusout' &&
            (_ = v._wrapperState) &&
            _.controlled &&
            v.type === 'number' &&
            fo(v, 'number', v.value);
      }
      switch (((_ = s ? ut(s) : window), e)) {
        case 'focusin':
          ($u(_) || _.contentEditable === 'true') &&
            ((ot = _), (Eo = s), (tr = null));
          break;
        case 'focusout':
          tr = Eo = ot = null;
          break;
        case 'mousedown':
          Co = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Co = !1), Bu(m, t, c);
          break;
        case 'selectionchange':
          if (Tm) break;
        case 'keydown':
        case 'keyup':
          Bu(m, t, c);
      }
      var P;
      if (Tl)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        at
          ? Gf(e, t) && (T = 'onCompositionEnd')
          : e === 'keydown' && t.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (Xf &&
          t.locale !== 'ko' &&
          (at || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && at && (P = Kf())
            : ((hn = c),
              (Pl = 'value' in hn ? hn.value : hn.textContent),
              (at = !0))),
        (_ = ji(s, T)),
        0 < _.length &&
          ((T = new Mu(T, e, null, t, c)),
          m.push({ event: T, listeners: _ }),
          P ? (T.data = P) : ((P = Zf(t)), P !== null && (T.data = P)))),
        (P = gm ? ym(e, t) : wm(e, t)) &&
          ((s = ji(s, 'onBeforeInput')),
          0 < s.length &&
            ((c = new Mu('onBeforeInput', 'beforeinput', null, t, c)),
            m.push({ event: c, listeners: s }),
            (c.data = P)));
    }
    sc(m, n);
  });
}
function yr(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function ji(e, n) {
  for (var t = n + 'Capture', r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = cr(e, t)),
      a != null && r.unshift(yr(e, a, i)),
      (a = cr(e, n)),
      a != null && r.push(yr(e, a, i))),
      (e = e.return);
  }
  return r;
}
function tt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ku(e, n, t, r, i) {
  for (var a = n._reactName, o = []; t !== null && t !== r; ) {
    var l = t,
      u = l.alternate,
      s = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      i
        ? ((u = cr(t, a)), u != null && o.unshift(yr(t, u, l)))
        : i || ((u = cr(t, a)), u != null && o.push(yr(t, u, l)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var Lm = /\r\n?/g,
  jm = /\u0000|\uFFFD/g;
function Xu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Lm,
      `
`
    )
    .replace(jm, '');
}
function Zr(e, n, t) {
  if (((n = Xu(n)), Xu(e) !== n && t)) throw Error(y(425));
}
function Ri() {}
var _o = null,
  Po = null;
function No(e, n) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof n.children == 'string' ||
    typeof n.children == 'number' ||
    (typeof n.dangerouslySetInnerHTML == 'object' &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var Oo = typeof setTimeout == 'function' ? setTimeout : void 0,
  Rm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Gu = typeof Promise == 'function' ? Promise : void 0,
  Mm =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Gu < 'u'
      ? function (e) {
          return Gu.resolve(null).then(e).catch(bm);
        }
      : Oo;
function bm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ua(e, n) {
  var t = n,
    r = 0;
  do {
    var i = t.nextSibling;
    if ((e.removeChild(t), i && i.nodeType === 8))
      if (((t = i.data), t === '/$')) {
        if (r === 0) {
          e.removeChild(i), mr(n);
          return;
        }
        r--;
      } else (t !== '$' && t !== '$?' && t !== '$!') || r++;
    t = i;
  } while (t);
  mr(n);
}
function Sn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === '$' || n === '$!' || n === '$?')) break;
      if (n === '/$') return null;
    }
  }
  return e;
}
function Zu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === '$' || t === '$!' || t === '$?') {
        if (n === 0) return e;
        n--;
      } else t === '/$' && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Rt = Math.random().toString(36).slice(2),
  Be = '__reactFiber$' + Rt,
  wr = '__reactProps$' + Rt,
  nn = '__reactContainer$' + Rt,
  To = '__reactEvents$' + Rt,
  Fm = '__reactListeners$' + Rt,
  Dm = '__reactHandles$' + Rt;
function $n(e) {
  var n = e[Be];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[nn] || t[Be])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = Zu(e); e !== null; ) {
          if ((t = e[Be])) return t;
          e = Zu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function jr(e) {
  return (
    (e = e[Be] || e[nn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function la(e) {
  return e[wr] || null;
}
var zo = [],
  st = -1;
function jn(e) {
  return { current: e };
}
function W(e) {
  0 > st || ((e.current = zo[st]), (zo[st] = null), st--);
}
function D(e, n) {
  st++, (zo[st] = e.current), (e.current = n);
}
var On = {},
  ce = jn(On),
  ye = jn(!1),
  Qn = On;
function Pt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return On;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in t) i[a] = n[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function we(e) {
  return (e = e.childContextTypes), e != null;
}
function Mi() {
  W(ye), W(ce);
}
function Ju(e, n, t) {
  if (ce.current !== On) throw Error(y(168));
  D(ce, n), D(ye, t);
}
function cc(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != 'function'))
    return t;
  r = r.getChildContext();
  for (var i in r) if (!(i in n)) throw Error(y(108, Ep(e) || 'Unknown', i));
  return Q({}, t, r);
}
function bi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || On),
    (Qn = ce.current),
    D(ce, e),
    D(ye, ye.current),
    !0
  );
}
function qu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = cc(e, n, Qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(ye),
      W(ce),
      D(ce, e))
    : W(ye),
    D(ye, t);
}
var Ge = null,
  ua = !1,
  Wa = !1;
function dc(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function $m(e) {
  (ua = !0), dc(e);
}
function Rn() {
  if (!Wa && Ge !== null) {
    Wa = !0;
    var e = 0,
      n = F;
    try {
      var t = Ge;
      for (F = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ge = null), (ua = !1);
    } catch (i) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), bf(Sl, Rn), i);
    } finally {
      (F = n), (Wa = !1);
    }
  }
  return null;
}
var ft = [],
  ct = 0,
  Fi = null,
  Di = 0,
  Oe = [],
  Te = 0,
  Kn = null,
  Ze = 1,
  Je = '';
function Fn(e, n) {
  (ft[ct++] = Di), (ft[ct++] = Fi), (Fi = e), (Di = n);
}
function pc(e, n, t) {
  (Oe[Te++] = Ze), (Oe[Te++] = Je), (Oe[Te++] = Kn), (Kn = e);
  var r = Ze;
  e = Je;
  var i = 32 - $e(r) - 1;
  (r &= ~(1 << i)), (t += 1);
  var a = 32 - $e(n) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Ze = (1 << (32 - $e(n) + i)) | (t << i) | r),
      (Je = a + e);
  } else (Ze = (1 << a) | (t << i) | r), (Je = e);
}
function Al(e) {
  e.return !== null && (Fn(e, 1), pc(e, 1, 0));
}
function Il(e) {
  for (; e === Fi; )
    (Fi = ft[--ct]), (ft[ct] = null), (Di = ft[--ct]), (ft[ct] = null);
  for (; e === Kn; )
    (Kn = Oe[--Te]),
      (Oe[Te] = null),
      (Je = Oe[--Te]),
      (Oe[Te] = null),
      (Ze = Oe[--Te]),
      (Oe[Te] = null);
}
var Ee = null,
  Se = null,
  V = !1,
  Fe = null;
function mc(e, n) {
  var t = ze(5, null, null, 0);
  (t.elementType = 'DELETED'),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function es(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (Ee = e), (Se = Sn(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === '' || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (Ee = e), (Se = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Kn !== null ? { id: Ze, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = ze(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (Ee = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ao(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Io(e) {
  if (V) {
    var n = Se;
    if (n) {
      var t = n;
      if (!es(e, n)) {
        if (Ao(e)) throw Error(y(418));
        n = Sn(t.nextSibling);
        var r = Ee;
        n && es(e, n)
          ? mc(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Ee = e));
      }
    } else {
      if (Ao(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (Ee = e);
    }
  }
}
function ns(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ee = e;
}
function Jr(e) {
  if (e !== Ee) return !1;
  if (!V) return ns(e), (V = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== 'head' && n !== 'body' && !No(e.type, e.memoizedProps))),
    n && (n = Se))
  ) {
    if (Ao(e)) throw (vc(), Error(y(418)));
    for (; n; ) mc(e, n), (n = Sn(n.nextSibling));
  }
  if ((ns(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === '/$') {
            if (n === 0) {
              Se = Sn(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== '$' && t !== '$!' && t !== '$?') || n++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = Ee ? Sn(e.stateNode.nextSibling) : null;
  return !0;
}
function vc() {
  for (var e = Se; e; ) e = Sn(e.nextSibling);
}
function Nt() {
  (Se = Ee = null), (V = !1);
}
function Ll(e) {
  Fe === null ? (Fe = [e]) : Fe.push(e);
}
var Um = un.ReactCurrentBatchConfig;
function Me(e, n) {
  if (e && e.defaultProps) {
    (n = Q({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var $i = jn(null),
  Ui = null,
  dt = null,
  jl = null;
function Rl() {
  jl = dt = Ui = null;
}
function Ml(e) {
  var n = $i.current;
  W($i), (e._currentValue = n);
}
function Lo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function St(e, n) {
  (Ui = e),
    (jl = dt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (ge = !0), (e.firstContext = null));
}
function Ie(e) {
  var n = e._currentValue;
  if (jl !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), dt === null)) {
      if (Ui === null) throw Error(y(308));
      (dt = e), (Ui.dependencies = { lanes: 0, firstContext: e });
    } else dt = dt.next = e;
  return n;
}
var Un = null;
function bl(e) {
  Un === null ? (Un = [e]) : Un.push(e);
}
function hc(e, n, t, r) {
  var i = n.interleaved;
  return (
    i === null ? ((t.next = t), bl(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    tn(e, r)
  );
}
function tn(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var pn = !1;
function Fl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function gc(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function En(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var i = r.pending;
    return (
      i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
      (r.pending = n),
      tn(e, t)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((n.next = n), bl(r)) : ((n.next = i.next), (i.next = n)),
    (r.interleaved = n),
    tn(e, t)
  );
}
function yi(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), El(e, t);
  }
}
function ts(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var i = null,
      a = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (t = t.next);
      } while (t !== null);
      a === null ? (i = a = n) : (a = a.next = n);
    } else i = a = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Wi(e, n, t, r) {
  var i = e.updateQueue;
  pn = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), o === null ? (a = s) : (o.next = s), (o = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = s) : (l.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (a !== null) {
    var m = i.baseState;
    (o = 0), (c = s = u = null), (l = a);
    do {
      var v = l.lane,
        h = l.eventTime;
      if ((r & v) === v) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            k = l;
          switch (((v = n), (h = t), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == 'function')) {
                m = w.call(h, m, v);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (v = typeof w == 'function' ? w.call(h, m, v) : w),
                v == null)
              )
                break e;
              m = Q({}, m, v);
              break e;
            case 2:
              pn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [l]) : v.push(l));
      } else
        (h = {
          eventTime: h,
          lane: v,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((s = c = h), (u = m)) : (c = c.next = h),
          (o |= v);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (v = l),
          (l = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (u = m),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = c),
      (n = i.shared.interleaved),
      n !== null)
    ) {
      i = n;
      do (o |= i.lane), (i = i.next);
      while (i !== n);
    } else a === null && (i.shared.lanes = 0);
    (Gn |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function rs(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = t), typeof i != 'function'))
          throw Error(y(191, i));
        i.call(r);
      }
    }
}
var yc = new hf.Component().refs;
function jo(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : Q({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var sa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nt(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = pe(),
      i = _n(e),
      a = qe(r, i);
    (a.payload = n),
      t != null && (a.callback = t),
      (n = En(e, a, i)),
      n !== null && (Ue(n, e, i, r), yi(n, e, i));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = pe(),
      i = _n(e),
      a = qe(r, i);
    (a.tag = 1),
      (a.payload = n),
      t != null && (a.callback = t),
      (n = En(e, a, i)),
      n !== null && (Ue(n, e, i, r), yi(n, e, i));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = pe(),
      r = _n(e),
      i = qe(t, r);
    (i.tag = 2),
      n != null && (i.callback = n),
      (n = En(e, i, r)),
      n !== null && (Ue(n, e, r, t), yi(n, e, r));
  },
};
function is(e, n, t, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, a, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !hr(t, r) || !hr(i, a)
      : !0
  );
}
function wc(e, n, t) {
  var r = !1,
    i = On,
    a = n.contextType;
  return (
    typeof a == 'object' && a !== null
      ? (a = Ie(a))
      : ((i = we(n) ? Qn : ce.current),
        (r = n.contextTypes),
        (a = (r = r != null) ? Pt(e, i) : On)),
    (n = new n(t, a)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = sa),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    n
  );
}
function as(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == 'function' &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && sa.enqueueReplaceState(n, n.state, null);
}
function Ro(e, n, t, r) {
  var i = e.stateNode;
  (i.props = t), (i.state = e.memoizedState), (i.refs = yc), Fl(e);
  var a = n.contextType;
  typeof a == 'object' && a !== null
    ? (i.context = Ie(a))
    : ((a = we(n) ? Qn : ce.current), (i.context = Pt(e, a))),
    (i.state = e.memoizedState),
    (a = n.getDerivedStateFromProps),
    typeof a == 'function' && (jo(e, n, a, t), (i.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((n = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      n !== i.state && sa.enqueueReplaceState(i, i.state, null),
      Wi(e, t, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Vt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var i = r,
        a = '' + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == 'function' &&
        n.ref._stringRef === a
        ? n.ref
        : ((n = function (o) {
            var l = i.refs;
            l === yc && (l = i.refs = {}),
              o === null ? delete l[a] : (l[a] = o);
          }),
          (n._stringRef = a),
          n);
    }
    if (typeof e != 'string') throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function qr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(n).join(', ') + '}'
          : e
      )
    ))
  );
}
function os(e) {
  var n = e._init;
  return n(e._payload);
}
function kc(e) {
  function n(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [f]), (d.flags |= 16)) : p.push(f);
    }
  }
  function t(d, f) {
    if (!e) return null;
    for (; f !== null; ) n(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function i(d, f) {
    return (d = Pn(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function a(d, f, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < f ? ((d.flags |= 2), f) : p)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, f, p, g) {
    return f === null || f.tag !== 6
      ? ((f = Xa(p, d.mode, g)), (f.return = d), f)
      : ((f = i(f, p)), (f.return = d), f);
  }
  function u(d, f, p, g) {
    var x = p.type;
    return x === it
      ? c(d, f, p.props.children, g, p.key)
      : f !== null &&
        (f.elementType === x ||
          (typeof x == 'object' &&
            x !== null &&
            x.$$typeof === dn &&
            os(x) === f.type))
      ? ((g = i(f, p.props)), (g.ref = Vt(d, f, p)), (g.return = d), g)
      : ((g = Ci(p.type, p.key, p.props, null, d.mode, g)),
        (g.ref = Vt(d, f, p)),
        (g.return = d),
        g);
  }
  function s(d, f, p, g) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== p.containerInfo ||
      f.stateNode.implementation !== p.implementation
      ? ((f = Ga(p, d.mode, g)), (f.return = d), f)
      : ((f = i(f, p.children || [])), (f.return = d), f);
  }
  function c(d, f, p, g, x) {
    return f === null || f.tag !== 7
      ? ((f = Yn(p, d.mode, g, x)), (f.return = d), f)
      : ((f = i(f, p)), (f.return = d), f);
  }
  function m(d, f, p) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = Xa('' + f, d.mode, p)), (f.return = d), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case Wr:
          return (
            (p = Ci(f.type, f.key, f.props, null, d.mode, p)),
            (p.ref = Vt(d, null, f)),
            (p.return = d),
            p
          );
        case rt:
          return (f = Ga(f, d.mode, p)), (f.return = d), f;
        case dn:
          var g = f._init;
          return m(d, g(f._payload), p);
      }
      if (Kt(f) || Dt(f))
        return (f = Yn(f, d.mode, p, null)), (f.return = d), f;
      qr(d, f);
    }
    return null;
  }
  function v(d, f, p, g) {
    var x = f !== null ? f.key : null;
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return x !== null ? null : l(d, f, '' + p, g);
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Wr:
          return p.key === x ? u(d, f, p, g) : null;
        case rt:
          return p.key === x ? s(d, f, p, g) : null;
        case dn:
          return (x = p._init), v(d, f, x(p._payload), g);
      }
      if (Kt(p) || Dt(p)) return x !== null ? null : c(d, f, p, g, null);
      qr(d, p);
    }
    return null;
  }
  function h(d, f, p, g, x) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (d = d.get(p) || null), l(f, d, '' + g, x);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Wr:
          return (d = d.get(g.key === null ? p : g.key) || null), u(f, d, g, x);
        case rt:
          return (d = d.get(g.key === null ? p : g.key) || null), s(f, d, g, x);
        case dn:
          var _ = g._init;
          return h(d, f, p, _(g._payload), x);
      }
      if (Kt(g) || Dt(g)) return (d = d.get(p) || null), c(f, d, g, x, null);
      qr(f, g);
    }
    return null;
  }
  function w(d, f, p, g) {
    for (
      var x = null, _ = null, P = f, T = (f = 0), b = null;
      P !== null && T < p.length;
      T++
    ) {
      P.index > T ? ((b = P), (P = null)) : (b = P.sibling);
      var L = v(d, P, p[T], g);
      if (L === null) {
        P === null && (P = b);
        break;
      }
      e && P && L.alternate === null && n(d, P),
        (f = a(L, f, T)),
        _ === null ? (x = L) : (_.sibling = L),
        (_ = L),
        (P = b);
    }
    if (T === p.length) return t(d, P), V && Fn(d, T), x;
    if (P === null) {
      for (; T < p.length; T++)
        (P = m(d, p[T], g)),
          P !== null &&
            ((f = a(P, f, T)), _ === null ? (x = P) : (_.sibling = P), (_ = P));
      return V && Fn(d, T), x;
    }
    for (P = r(d, P); T < p.length; T++)
      (b = h(P, d, T, p[T], g)),
        b !== null &&
          (e && b.alternate !== null && P.delete(b.key === null ? T : b.key),
          (f = a(b, f, T)),
          _ === null ? (x = b) : (_.sibling = b),
          (_ = b));
    return (
      e &&
        P.forEach(function (je) {
          return n(d, je);
        }),
      V && Fn(d, T),
      x
    );
  }
  function k(d, f, p, g) {
    var x = Dt(p);
    if (typeof x != 'function') throw Error(y(150));
    if (((p = x.call(p)), p == null)) throw Error(y(151));
    for (
      var _ = (x = null), P = f, T = (f = 0), b = null, L = p.next();
      P !== null && !L.done;
      T++, L = p.next()
    ) {
      P.index > T ? ((b = P), (P = null)) : (b = P.sibling);
      var je = v(d, P, L.value, g);
      if (je === null) {
        P === null && (P = b);
        break;
      }
      e && P && je.alternate === null && n(d, P),
        (f = a(je, f, T)),
        _ === null ? (x = je) : (_.sibling = je),
        (_ = je),
        (P = b);
    }
    if (L.done) return t(d, P), V && Fn(d, T), x;
    if (P === null) {
      for (; !L.done; T++, L = p.next())
        (L = m(d, L.value, g)),
          L !== null &&
            ((f = a(L, f, T)), _ === null ? (x = L) : (_.sibling = L), (_ = L));
      return V && Fn(d, T), x;
    }
    for (P = r(d, P); !L.done; T++, L = p.next())
      (L = h(P, d, T, L.value, g)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? T : L.key),
          (f = a(L, f, T)),
          _ === null ? (x = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        P.forEach(function (bt) {
          return n(d, bt);
        }),
      V && Fn(d, T),
      x
    );
  }
  function z(d, f, p, g) {
    if (
      (typeof p == 'object' &&
        p !== null &&
        p.type === it &&
        p.key === null &&
        (p = p.props.children),
      typeof p == 'object' && p !== null)
    ) {
      switch (p.$$typeof) {
        case Wr:
          e: {
            for (var x = p.key, _ = f; _ !== null; ) {
              if (_.key === x) {
                if (((x = p.type), x === it)) {
                  if (_.tag === 7) {
                    t(d, _.sibling),
                      (f = i(_, p.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  _.elementType === x ||
                  (typeof x == 'object' &&
                    x !== null &&
                    x.$$typeof === dn &&
                    os(x) === _.type)
                ) {
                  t(d, _.sibling),
                    (f = i(_, p.props)),
                    (f.ref = Vt(d, _, p)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                t(d, _);
                break;
              } else n(d, _);
              _ = _.sibling;
            }
            p.type === it
              ? ((f = Yn(p.props.children, d.mode, g, p.key)),
                (f.return = d),
                (d = f))
              : ((g = Ci(p.type, p.key, p.props, null, d.mode, g)),
                (g.ref = Vt(d, f, p)),
                (g.return = d),
                (d = g));
          }
          return o(d);
        case rt:
          e: {
            for (_ = p.key; f !== null; ) {
              if (f.key === _)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === p.containerInfo &&
                  f.stateNode.implementation === p.implementation
                ) {
                  t(d, f.sibling),
                    (f = i(f, p.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  t(d, f);
                  break;
                }
              else n(d, f);
              f = f.sibling;
            }
            (f = Ga(p, d.mode, g)), (f.return = d), (d = f);
          }
          return o(d);
        case dn:
          return (_ = p._init), z(d, f, _(p._payload), g);
      }
      if (Kt(p)) return w(d, f, p, g);
      if (Dt(p)) return k(d, f, p, g);
      qr(d, p);
    }
    return (typeof p == 'string' && p !== '') || typeof p == 'number'
      ? ((p = '' + p),
        f !== null && f.tag === 6
          ? (t(d, f.sibling), (f = i(f, p)), (f.return = d), (d = f))
          : (t(d, f), (f = Xa(p, d.mode, g)), (f.return = d), (d = f)),
        o(d))
      : t(d, f);
  }
  return z;
}
var Ot = kc(!0),
  xc = kc(!1),
  Rr = {},
  Ke = jn(Rr),
  kr = jn(Rr),
  xr = jn(Rr);
function Wn(e) {
  if (e === Rr) throw Error(y(174));
  return e;
}
function Dl(e, n) {
  switch ((D(xr, n), D(kr, e), D(Ke, Rr), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : po(null, '');
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = po(n, e));
  }
  W(Ke), D(Ke, n);
}
function Tt() {
  W(Ke), W(kr), W(xr);
}
function Sc(e) {
  Wn(xr.current);
  var n = Wn(Ke.current),
    t = po(n, e.type);
  n !== t && (D(kr, e), D(Ke, t));
}
function $l(e) {
  kr.current === e && (W(Ke), W(kr));
}
var B = jn(0);
function Hi(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === '$?' || t.data === '$!')
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Ha = [];
function Ul() {
  for (var e = 0; e < Ha.length; e++)
    Ha[e]._workInProgressVersionPrimary = null;
  Ha.length = 0;
}
var wi = un.ReactCurrentDispatcher,
  Va = un.ReactCurrentBatchConfig,
  Xn = 0,
  Y = null,
  q = null,
  re = null,
  Vi = !1,
  rr = !1,
  Sr = 0,
  Wm = 0;
function ue() {
  throw Error(y(321));
}
function Wl(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!We(e[t], n[t])) return !1;
  return !0;
}
function Hl(e, n, t, r, i, a) {
  if (
    ((Xn = a),
    (Y = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (wi.current = e === null || e.memoizedState === null ? Ym : Qm),
    (e = t(r, i)),
    rr)
  ) {
    a = 0;
    do {
      if (((rr = !1), (Sr = 0), 25 <= a)) throw Error(y(301));
      (a += 1),
        (re = q = null),
        (n.updateQueue = null),
        (wi.current = Km),
        (e = t(r, i));
    } while (rr);
  }
  if (
    ((wi.current = Bi),
    (n = q !== null && q.next !== null),
    (Xn = 0),
    (re = q = Y = null),
    (Vi = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function Vl() {
  var e = Sr !== 0;
  return (Sr = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (Y.memoizedState = re = e) : (re = re.next = e), re;
}
function Le() {
  if (q === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var n = re === null ? Y.memoizedState : re.next;
  if (n !== null) (re = n), (q = e);
  else {
    if (e === null) throw Error(y(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      re === null ? (Y.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function Er(e, n) {
  return typeof n == 'function' ? n(e) : n;
}
function Ba(e) {
  var n = Le(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = q,
    i = r.baseQueue,
    a = t.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (t.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var l = (o = null),
      u = null,
      s = a;
    do {
      var c = s.lane;
      if ((Xn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var m = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((l = u = m), (o = r)) : (u = u.next = m),
          (Y.lanes |= c),
          (Gn |= c);
      }
      s = s.next;
    } while (s !== null && s !== a);
    u === null ? (o = r) : (u.next = l),
      We(r, n.memoizedState) || (ge = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = u),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (Y.lanes |= a), (Gn |= a), (i = i.next);
    while (i !== e);
  } else i === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Ya(e) {
  var n = Le(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    i = t.pending,
    a = n.memoizedState;
  if (i !== null) {
    t.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    We(a, n.memoizedState) || (ge = !0),
      (n.memoizedState = a),
      n.baseQueue === null && (n.baseState = a),
      (t.lastRenderedState = a);
  }
  return [a, r];
}
function Ec() {}
function Cc(e, n) {
  var t = Y,
    r = Le(),
    i = n(),
    a = !We(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (ge = !0)),
    (r = r.queue),
    Bl(Nc.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || a || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Cr(9, Pc.bind(null, t, r, i, n), void 0, null),
      ie === null)
    )
      throw Error(y(349));
    Xn & 30 || _c(t, n, i);
  }
  return i;
}
function _c(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = Y.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (Y.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function Pc(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), Oc(n) && Tc(e);
}
function Nc(e, n, t) {
  return t(function () {
    Oc(n) && Tc(e);
  });
}
function Oc(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !We(e, t);
  } catch {
    return !0;
  }
}
function Tc(e) {
  var n = tn(e, 1);
  n !== null && Ue(n, e, 1, -1);
}
function ls(e) {
  var n = Ve();
  return (
    typeof e == 'function' && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Er,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = Bm.bind(null, Y, e)),
    [n.memoizedState, e]
  );
}
function Cr(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = Y.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (Y.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function zc() {
  return Le().memoizedState;
}
function ki(e, n, t, r) {
  var i = Ve();
  (Y.flags |= e),
    (i.memoizedState = Cr(1 | n, t, void 0, r === void 0 ? null : r));
}
function fa(e, n, t, r) {
  var i = Le();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (q !== null) {
    var o = q.memoizedState;
    if (((a = o.destroy), r !== null && Wl(r, o.deps))) {
      i.memoizedState = Cr(n, t, a, r);
      return;
    }
  }
  (Y.flags |= e), (i.memoizedState = Cr(1 | n, t, a, r));
}
function us(e, n) {
  return ki(8390656, 8, e, n);
}
function Bl(e, n) {
  return fa(2048, 8, e, n);
}
function Ac(e, n) {
  return fa(4, 2, e, n);
}
function Ic(e, n) {
  return fa(4, 4, e, n);
}
function Lc(e, n) {
  if (typeof n == 'function')
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function jc(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), fa(4, 4, Lc.bind(null, n, e), t)
  );
}
function Yl() {}
function Rc(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Wl(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Mc(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Wl(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function bc(e, n, t) {
  return Xn & 21
    ? (We(t, n) || ((t = $f()), (Y.lanes |= t), (Gn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = t));
}
function Hm(e, n) {
  var t = F;
  (F = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Va.transition;
  Va.transition = {};
  try {
    e(!1), n();
  } finally {
    (F = t), (Va.transition = r);
  }
}
function Fc() {
  return Le().memoizedState;
}
function Vm(e, n, t) {
  var r = _n(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Dc(e))
  )
    $c(n, t);
  else if (((t = hc(e, n, t, r)), t !== null)) {
    var i = pe();
    Ue(t, e, r, i), Uc(t, n, r);
  }
}
function Bm(e, n, t) {
  var r = _n(e),
    i = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Dc(e)) $c(n, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = n.lastRenderedReducer), a !== null)
    )
      try {
        var o = n.lastRenderedState,
          l = a(o, t);
        if (((i.hasEagerState = !0), (i.eagerState = l), We(l, o))) {
          var u = n.interleaved;
          u === null
            ? ((i.next = i), bl(n))
            : ((i.next = u.next), (u.next = i)),
            (n.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (t = hc(e, n, i, r)),
      t !== null && ((i = pe()), Ue(t, e, r, i), Uc(t, n, r));
  }
}
function Dc(e) {
  var n = e.alternate;
  return e === Y || (n !== null && n === Y);
}
function $c(e, n) {
  rr = Vi = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Uc(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), El(e, t);
  }
}
var Bi = {
    readContext: Ie,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  Ym = {
    readContext: Ie,
    useCallback: function (e, n) {
      return (Ve().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ie,
    useEffect: us,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        ki(4194308, 4, Lc.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return ki(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return ki(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Ve();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = Ve();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = Vm.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Ve();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: ls,
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = ls(!1),
        n = e[0];
      return (e = Hm.bind(null, e[1])), (Ve().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = Y,
        i = Ve();
      if (V) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), ie === null)) throw Error(y(349));
        Xn & 30 || _c(r, n, t);
      }
      i.memoizedState = t;
      var a = { value: t, getSnapshot: n };
      return (
        (i.queue = a),
        us(Nc.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Cr(9, Pc.bind(null, r, a, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = Ve(),
        n = ie.identifierPrefix;
      if (V) {
        var t = Je,
          r = Ze;
        (t = (r & ~(1 << (32 - $e(r) - 1))).toString(32) + t),
          (n = ':' + n + 'R' + t),
          (t = Sr++),
          0 < t && (n += 'H' + t.toString(32)),
          (n += ':');
      } else (t = Wm++), (n = ':' + n + 'r' + t.toString(32) + ':');
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  Qm = {
    readContext: Ie,
    useCallback: Rc,
    useContext: Ie,
    useEffect: Bl,
    useImperativeHandle: jc,
    useInsertionEffect: Ac,
    useLayoutEffect: Ic,
    useMemo: Mc,
    useReducer: Ba,
    useRef: zc,
    useState: function () {
      return Ba(Er);
    },
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      var n = Le();
      return bc(n, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Ba(Er)[0],
        n = Le().memoizedState;
      return [e, n];
    },
    useMutableSource: Ec,
    useSyncExternalStore: Cc,
    useId: Fc,
    unstable_isNewReconciler: !1,
  },
  Km = {
    readContext: Ie,
    useCallback: Rc,
    useContext: Ie,
    useEffect: Bl,
    useImperativeHandle: jc,
    useInsertionEffect: Ac,
    useLayoutEffect: Ic,
    useMemo: Mc,
    useReducer: Ya,
    useRef: zc,
    useState: function () {
      return Ya(Er);
    },
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      var n = Le();
      return q === null ? (n.memoizedState = e) : bc(n, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Ya(Er)[0],
        n = Le().memoizedState;
      return [e, n];
    },
    useMutableSource: Ec,
    useSyncExternalStore: Cc,
    useId: Fc,
    unstable_isNewReconciler: !1,
  };
function zt(e, n) {
  try {
    var t = '',
      r = n;
    do (t += Sp(r)), (r = r.return);
    while (r);
    var i = t;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: n, stack: i, digest: null };
}
function Qa(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Mo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var Xm = typeof WeakMap == 'function' ? WeakMap : Map;
function Wc(e, n, t) {
  (t = qe(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Qi || ((Qi = !0), (Yo = r)), Mo(e, n);
    }),
    t
  );
}
function Hc(e, n, t) {
  (t = qe(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = n.value;
    (t.payload = function () {
      return r(i);
    }),
      (t.callback = function () {
        Mo(e, n);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == 'function' &&
      (t.callback = function () {
        Mo(e, n),
          typeof r != 'function' &&
            (Cn === null ? (Cn = new Set([this])) : Cn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    t
  );
}
function ss(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xm();
    var i = new Set();
    r.set(n, i);
  } else (i = r.get(n)), i === void 0 && ((i = new Set()), r.set(n, i));
  i.has(t) || (i.add(t), (e = sv.bind(null, e, n, t)), n.then(e, e));
}
function fs(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cs(e, n, t, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = qe(-1, 1)), (n.tag = 2), En(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var Gm = un.ReactCurrentOwner,
  ge = !1;
function de(e, n, t, r) {
  n.child = e === null ? xc(n, null, t, r) : Ot(n, e.child, t, r);
}
function ds(e, n, t, r, i) {
  t = t.render;
  var a = n.ref;
  return (
    St(n, i),
    (r = Hl(e, n, t, r, a, i)),
    (t = Vl()),
    e !== null && !ge
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~i),
        rn(e, n, i))
      : (V && t && Al(n), (n.flags |= 1), de(e, n, r, i), n.child)
  );
}
function ps(e, n, t, r, i) {
  if (e === null) {
    var a = t.type;
    return typeof a == 'function' &&
      !eu(a) &&
      a.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = a), Vc(e, n, a, r, i))
      : ((e = Ci(t.type, null, r, n, n.mode, i)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : hr), t(o, r) && e.ref === n.ref)
    )
      return rn(e, n, i);
  }
  return (
    (n.flags |= 1),
    (e = Pn(a, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Vc(e, n, t, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (hr(a, r) && e.ref === n.ref)
      if (((ge = !1), (n.pendingProps = r = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (n.lanes = e.lanes), rn(e, n, i);
  }
  return bo(e, n, t, r, i);
}
function Bc(e, n, t) {
  var r = n.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(mt, xe),
        (xe |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          D(mt, xe),
          (xe |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : t),
        D(mt, xe),
        (xe |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | t), (n.memoizedState = null)) : (r = t),
      D(mt, xe),
      (xe |= r);
  return de(e, n, i, t), n.child;
}
function Yc(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function bo(e, n, t, r, i) {
  var a = we(t) ? Qn : ce.current;
  return (
    (a = Pt(n, a)),
    St(n, i),
    (t = Hl(e, n, t, r, a, i)),
    (r = Vl()),
    e !== null && !ge
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~i),
        rn(e, n, i))
      : (V && r && Al(n), (n.flags |= 1), de(e, n, t, i), n.child)
  );
}
function ms(e, n, t, r, i) {
  if (we(t)) {
    var a = !0;
    bi(n);
  } else a = !1;
  if ((St(n, i), n.stateNode === null))
    xi(e, n), wc(n, t, r), Ro(n, t, r, i), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      l = n.memoizedProps;
    o.props = l;
    var u = o.context,
      s = t.contextType;
    typeof s == 'object' && s !== null
      ? (s = Ie(s))
      : ((s = we(t) ? Qn : ce.current), (s = Pt(n, s)));
    var c = t.getDerivedStateFromProps,
      m =
        typeof c == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== r || u !== s) && as(n, o, r, s)),
      (pn = !1);
    var v = n.memoizedState;
    (o.state = v),
      Wi(n, r, o, i),
      (u = n.memoizedState),
      l !== r || v !== u || ye.current || pn
        ? (typeof c == 'function' && (jo(n, t, c, r), (u = n.memoizedState)),
          (l = pn || is(n, t, l, r, v, u, s))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (n.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = l))
        : (typeof o.componentDidMount == 'function' && (n.flags |= 4194308),
          (r = !1));
  } else {
    (o = n.stateNode),
      gc(e, n),
      (l = n.memoizedProps),
      (s = n.type === n.elementType ? l : Me(n.type, l)),
      (o.props = s),
      (m = n.pendingProps),
      (v = o.context),
      (u = t.contextType),
      typeof u == 'object' && u !== null
        ? (u = Ie(u))
        : ((u = we(t) ? Qn : ce.current), (u = Pt(n, u)));
    var h = t.getDerivedStateFromProps;
    (c =
      typeof h == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== m || v !== u) && as(n, o, r, u)),
      (pn = !1),
      (v = n.memoizedState),
      (o.state = v),
      Wi(n, r, o, i);
    var w = n.memoizedState;
    l !== m || v !== w || ye.current || pn
      ? (typeof h == 'function' && (jo(n, t, h, r), (w = n.memoizedState)),
        (s = pn || is(n, t, s, r, v, w, u) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == 'function' && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Fo(e, n, t, r, a, i);
}
function Fo(e, n, t, r, i, a) {
  Yc(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return i && qu(n, t, !1), rn(e, n, a);
  (r = n.stateNode), (Gm.current = n);
  var l =
    o && typeof t.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o
      ? ((n.child = Ot(n, e.child, null, a)), (n.child = Ot(n, null, l, a)))
      : de(e, n, l, a),
    (n.memoizedState = r.state),
    i && qu(n, t, !0),
    n.child
  );
}
function Qc(e) {
  var n = e.stateNode;
  n.pendingContext
    ? Ju(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && Ju(e, n.context, !1),
    Dl(e, n.containerInfo);
}
function vs(e, n, t, r, i) {
  return Nt(), Ll(i), (n.flags |= 256), de(e, n, t, r), n.child;
}
var Do = { dehydrated: null, treeContext: null, retryLane: 0 };
function $o(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Kc(e, n, t) {
  var r = n.pendingProps,
    i = B.current,
    a = !1,
    o = (n.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((a = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    D(B, i & 1),
    e === null)
  )
    return (
      Io(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === '$!'
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = n.mode),
              (a = n.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = pa(o, r, 0, null)),
              (e = Yn(e, r, t, null)),
              (a.return = n),
              (e.return = n),
              (a.sibling = e),
              (n.child = a),
              (n.child.memoizedState = $o(t)),
              (n.memoizedState = Do),
              e)
            : Ql(n, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Zm(e, n, o, r, l, i, t);
  if (a) {
    (a = r.fallback), (o = n.mode), (i = e.child), (l = i.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && n.child !== i
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (n.deletions = null))
        : ((r = Pn(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (a = Pn(l, a)) : ((a = Yn(a, o, t, null)), (a.flags |= 2)),
      (a.return = n),
      (r.return = n),
      (r.sibling = a),
      (n.child = r),
      (r = a),
      (a = n.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? $o(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~t),
      (n.memoizedState = Do),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Pn(a, { mode: 'visible', children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Ql(e, n) {
  return (
    (n = pa({ mode: 'visible', children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function ei(e, n, t, r) {
  return (
    r !== null && Ll(r),
    Ot(n, e.child, null, t),
    (e = Ql(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function Zm(e, n, t, r, i, a, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Qa(Error(y(422)))), ei(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((a = r.fallback),
        (i = n.mode),
        (r = pa({ mode: 'visible', children: r.children }, i, 0, null)),
        (a = Yn(a, i, o, null)),
        (a.flags |= 2),
        (r.return = n),
        (a.return = n),
        (r.sibling = a),
        (n.child = r),
        n.mode & 1 && Ot(n, e.child, null, o),
        (n.child.memoizedState = $o(o)),
        (n.memoizedState = Do),
        a);
  if (!(n.mode & 1)) return ei(e, n, o, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (a = Error(y(419))), (r = Qa(a, r, void 0)), ei(e, n, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), ge || l)) {
    if (((r = ie), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), tn(e, i), Ue(r, e, i, -1));
    }
    return ql(), (r = Qa(Error(y(421)))), ei(e, n, o, r);
  }
  return i.data === '$?'
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = fv.bind(null, e)),
      (i._reactRetry = n),
      null)
    : ((e = a.treeContext),
      (Se = Sn(i.nextSibling)),
      (Ee = n),
      (V = !0),
      (Fe = null),
      e !== null &&
        ((Oe[Te++] = Ze),
        (Oe[Te++] = Je),
        (Oe[Te++] = Kn),
        (Ze = e.id),
        (Je = e.overflow),
        (Kn = n)),
      (n = Ql(n, r.children)),
      (n.flags |= 4096),
      n);
}
function hs(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Lo(e.return, n, t);
}
function Ka(e, n, t, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: i,
      })
    : ((a.isBackwards = n),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = t),
      (a.tailMode = i));
}
function Xc(e, n, t) {
  var r = n.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((de(e, n, r.children, t), (r = B.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hs(e, t, n);
        else if (e.tag === 19) hs(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(B, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (t = n.child, i = null; t !== null; )
          (e = t.alternate),
            e !== null && Hi(e) === null && (i = t),
            (t = t.sibling);
        (t = i),
          t === null
            ? ((i = n.child), (n.child = null))
            : ((i = t.sibling), (t.sibling = null)),
          Ka(n, !1, i, t, a);
        break;
      case 'backwards':
        for (t = null, i = n.child, n.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Hi(e) === null)) {
            n.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = t), (t = i), (i = e);
        }
        Ka(n, !0, t, null, a);
        break;
      case 'together':
        Ka(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function xi(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function rn(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Gn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = Pn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = Pn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function Jm(e, n, t) {
  switch (n.tag) {
    case 3:
      Qc(n), Nt();
      break;
    case 5:
      Sc(n);
      break;
    case 1:
      we(n.type) && bi(n);
      break;
    case 4:
      Dl(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        i = n.memoizedProps.value;
      D($i, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(B, B.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Kc(e, n, t)
          : (D(B, B.current & 1),
            (e = rn(e, n, t)),
            e !== null ? e.sibling : null);
      D(B, B.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xc(e, n, t);
        n.flags |= 128;
      }
      if (
        ((i = n.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        D(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Bc(e, n, t);
  }
  return rn(e, n, t);
}
var Gc, Uo, Zc, Jc;
Gc = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Uo = function () {};
Zc = function (e, n, t, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = n.stateNode), Wn(Ke.current);
    var a = null;
    switch (t) {
      case 'input':
        (i = uo(e, i)), (r = uo(e, r)), (a = []);
        break;
      case 'select':
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (a = []);
        break;
      case 'textarea':
        (i = co(e, i)), (r = co(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ri);
    }
    mo(t, r);
    var o;
    t = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === 'style') {
          var l = i[s];
          for (o in l) l.hasOwnProperty(o) && (t || (t = {}), (t[o] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (sr.hasOwnProperty(s)
              ? a || (a = [])
              : (a = a || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((l = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && u !== l && (u != null || l != null))
      )
        if (s === 'style')
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ''));
            for (o in u)
              u.hasOwnProperty(o) &&
                l[o] !== u[o] &&
                (t || (t = {}), (t[o] = u[o]));
          } else t || (a || (a = []), a.push(s, t)), (t = u);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (a = a || []).push(s, u))
            : s === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (a = a || []).push(s, '' + u)
            : s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              (sr.hasOwnProperty(s)
                ? (u != null && s === 'onScroll' && $('scroll', e),
                  a || l === u || (a = []))
                : (a = a || []).push(s, u));
    }
    t && (a = a || []).push('style', t);
    var s = a;
    (n.updateQueue = s) && (n.flags |= 4);
  }
};
Jc = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function Bt(e, n) {
  if (!V)
    switch (e.tailMode) {
      case 'hidden':
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case 'collapsed':
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function se(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var i = e.child; i !== null; )
      (t |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (t |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function qm(e, n, t) {
  var r = n.pendingProps;
  switch ((Il(n), n.tag)) {
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
      return se(n), null;
    case 1:
      return we(n.type) && Mi(), se(n), null;
    case 3:
      return (
        (r = n.stateNode),
        Tt(),
        W(ye),
        W(ce),
        Ul(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Jr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Fe !== null && (Xo(Fe), (Fe = null)))),
        Uo(e, n),
        se(n),
        null
      );
    case 5:
      $l(n);
      var i = Wn(xr.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Zc(e, n, t, r, i),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return se(n), null;
        }
        if (((e = Wn(Ke.current)), Jr(n))) {
          (r = n.stateNode), (t = n.type);
          var a = n.memoizedProps;
          switch (((r[Be] = n), (r[wr] = a), (e = (n.mode & 1) !== 0), t)) {
            case 'dialog':
              $('cancel', r), $('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              $('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Gt.length; i++) $(Gt[i], r);
              break;
            case 'source':
              $('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              $('error', r), $('load', r);
              break;
            case 'details':
              $('toggle', r);
              break;
            case 'input':
              _u(r, a), $('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                $('invalid', r);
              break;
            case 'textarea':
              Nu(r, a), $('invalid', r);
          }
          mo(t, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Zr(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Zr(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : sr.hasOwnProperty(o) &&
                  l != null &&
                  o === 'onScroll' &&
                  $('scroll', r);
            }
          switch (t) {
            case 'input':
              Hr(r), Pu(r, a, !0);
              break;
            case 'textarea':
              Hr(r), Ou(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof a.onClick == 'function' && (r.onclick = Ri);
          }
          (r = i), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = _f(t)),
            e === 'http://www.w3.org/1999/xhtml'
              ? t === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === 'select' &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Be] = n),
            (e[wr] = r),
            Gc(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = vo(t, r)), t)) {
              case 'dialog':
                $('cancel', e), $('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                $('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Gt.length; i++) $(Gt[i], e);
                i = r;
                break;
              case 'source':
                $('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                $('error', e), $('load', e), (i = r);
                break;
              case 'details':
                $('toggle', e), (i = r);
                break;
              case 'input':
                _u(e, r), (i = uo(e, r)), $('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  $('invalid', e);
                break;
              case 'textarea':
                Nu(e, r), (i = co(e, r)), $('invalid', e);
                break;
              default:
                i = r;
            }
            mo(t, i), (l = i);
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var u = l[a];
                a === 'style'
                  ? Of(e, u)
                  : a === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && Pf(e, u))
                  : a === 'children'
                  ? typeof u == 'string'
                    ? (t !== 'textarea' || u !== '') && fr(e, u)
                    : typeof u == 'number' && fr(e, '' + u)
                  : a !== 'suppressContentEditableWarning' &&
                    a !== 'suppressHydrationWarning' &&
                    a !== 'autoFocus' &&
                    (sr.hasOwnProperty(a)
                      ? u != null && a === 'onScroll' && $('scroll', e)
                      : u != null && gl(e, a, u, o));
              }
            switch (t) {
              case 'input':
                Hr(e), Pu(e, r, !1);
                break;
              case 'textarea':
                Hr(e), Ou(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Nn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? yt(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      yt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = Ri);
            }
            switch (t) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return se(n), null;
    case 6:
      if (e && n.stateNode != null) Jc(e, n, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && n.stateNode === null) throw Error(y(166));
        if (((t = Wn(xr.current)), Wn(Ke.current), Jr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Be] = n),
            (a = r.nodeValue !== t) && ((e = Ee), e !== null))
          )
            switch (e.tag) {
              case 3:
                Zr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Zr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          a && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Be] = n),
            (n.stateNode = r);
      }
      return se(n), null;
    case 13:
      if (
        (W(B),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && Se !== null && n.mode & 1 && !(n.flags & 128))
          vc(), Nt(), (n.flags |= 98560), (a = !1);
        else if (((a = Jr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(y(318));
            if (
              ((a = n.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(y(317));
            a[Be] = n;
          } else
            Nt(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          se(n), (a = !1);
        } else Fe !== null && (Xo(Fe), (Fe = null)), (a = !0);
        if (!a) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || B.current & 1 ? ee === 0 && (ee = 3) : ql())),
          n.updateQueue !== null && (n.flags |= 4),
          se(n),
          null);
    case 4:
      return (
        Tt(), Uo(e, n), e === null && gr(n.stateNode.containerInfo), se(n), null
      );
    case 10:
      return Ml(n.type._context), se(n), null;
    case 17:
      return we(n.type) && Mi(), se(n), null;
    case 19:
      if ((W(B), (a = n.memoizedState), a === null)) return se(n), null;
      if (((r = (n.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) Bt(a, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((o = Hi(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    Bt(a, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (a = t),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return D(B, (B.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Z() > At &&
            ((n.flags |= 128), (r = !0), Bt(a, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Hi(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              Bt(a, !0),
              a.tail === null && a.tailMode === 'hidden' && !o.alternate && !V)
            )
              return se(n), null;
          } else
            2 * Z() - a.renderingStartTime > At &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), Bt(a, !1), (n.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = a.last),
            t !== null ? (t.sibling = o) : (n.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((n = a.tail),
          (a.rendering = n),
          (a.tail = n.sibling),
          (a.renderingStartTime = Z()),
          (n.sibling = null),
          (t = B.current),
          D(B, r ? (t & 1) | 2 : t & 1),
          n)
        : (se(n), null);
    case 22:
    case 23:
      return (
        Jl(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? xe & 1073741824 && (se(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : se(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function ev(e, n) {
  switch ((Il(n), n.tag)) {
    case 1:
      return (
        we(n.type) && Mi(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        Tt(),
        W(ye),
        W(ce),
        Ul(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return $l(n), null;
    case 13:
      if ((W(B), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        Nt();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return W(B), null;
    case 4:
      return Tt(), null;
    case 10:
      return Ml(n.type._context), null;
    case 22:
    case 23:
      return Jl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ni = !1,
  fe = !1,
  nv = typeof WeakSet == 'function' ? WeakSet : Set,
  C = null;
function pt(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == 'function')
      try {
        t(null);
      } catch (r) {
        K(e, n, r);
      }
    else t.current = null;
}
function Wo(e, n, t) {
  try {
    t();
  } catch (r) {
    K(e, n, r);
  }
}
var gs = !1;
function tv(e, n) {
  if (((_o = Ii), (e = tc()), zl(e))) {
    if ('selectionStart' in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, a.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            l = -1,
            u = -1,
            s = 0,
            c = 0,
            m = e,
            v = null;
          n: for (;;) {
            for (
              var h;
              m !== t || (i !== 0 && m.nodeType !== 3) || (l = o + i),
                m !== a || (r !== 0 && m.nodeType !== 3) || (u = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (h = m.firstChild) !== null;

            )
              (v = m), (m = h);
            for (;;) {
              if (m === e) break n;
              if (
                (v === t && ++s === i && (l = o),
                v === a && ++c === r && (u = o),
                (h = m.nextSibling) !== null)
              )
                break;
              (m = v), (v = m.parentNode);
            }
            m = h;
          }
          t = l === -1 || u === -1 ? null : { start: l, end: u };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Po = { focusedElem: e, selectionRange: t }, Ii = !1, C = n; C !== null; )
    if (((n = C), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (C = e);
    else
      for (; C !== null; ) {
        n = C;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    z = w.memoizedState,
                    d = n.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? k : Me(n.type, k),
                      z
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = n.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = '')
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          K(n, n.return, g);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (C = e);
          break;
        }
        C = n.return;
      }
  return (w = gs), (gs = !1), w;
}
function ir(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && Wo(n, t, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ca(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Ho(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == 'function' ? n(e) : (n.current = e);
  }
}
function qc(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), qc(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Be], delete n[wr], delete n[To], delete n[Fm], delete n[Dm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ed(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ys(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ed(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Ri));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vo(e, n, t), e = e.sibling; e !== null; ) Vo(e, n, t), (e = e.sibling);
}
function Bo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bo(e, n, t), e = e.sibling; e !== null; ) Bo(e, n, t), (e = e.sibling);
}
var ae = null,
  be = !1;
function fn(e, n, t) {
  for (t = t.child; t !== null; ) nd(e, n, t), (t = t.sibling);
}
function nd(e, n, t) {
  if (Qe && typeof Qe.onCommitFiberUnmount == 'function')
    try {
      Qe.onCommitFiberUnmount(ra, t);
    } catch {}
  switch (t.tag) {
    case 5:
      fe || pt(t, n);
    case 6:
      var r = ae,
        i = be;
      (ae = null),
        fn(e, n, t),
        (ae = r),
        (be = i),
        ae !== null &&
          (be
            ? ((e = ae),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : ae.removeChild(t.stateNode));
      break;
    case 18:
      ae !== null &&
        (be
          ? ((e = ae),
            (t = t.stateNode),
            e.nodeType === 8
              ? Ua(e.parentNode, t)
              : e.nodeType === 1 && Ua(e, t),
            mr(e))
          : Ua(ae, t.stateNode));
      break;
    case 4:
      (r = ae),
        (i = be),
        (ae = t.stateNode.containerInfo),
        (be = !0),
        fn(e, n, t),
        (ae = r),
        (be = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && Wo(t, n, o),
            (i = i.next);
        } while (i !== r);
      }
      fn(e, n, t);
      break;
    case 1:
      if (
        !fe &&
        (pt(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          K(t, n, l);
        }
      fn(e, n, t);
      break;
    case 21:
      fn(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((fe = (r = fe) || t.memoizedState !== null), fn(e, n, t), (fe = r))
        : fn(e, n, t);
      break;
    default:
      fn(e, n, t);
  }
}
function ws(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new nv()),
      n.forEach(function (r) {
        var i = cv.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(i, i));
      });
  }
}
function Re(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      try {
        var a = e,
          o = n,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (be = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (be = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (be = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(y(160));
        nd(a, o, i), (ae = null), (be = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (s) {
        K(i, n, s);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) td(n, e), (n = n.sibling);
}
function td(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(n, e), He(e), r & 4)) {
        try {
          ir(3, e, e.return), ca(3, e);
        } catch (k) {
          K(e, e.return, k);
        }
        try {
          ir(5, e, e.return);
        } catch (k) {
          K(e, e.return, k);
        }
      }
      break;
    case 1:
      Re(n, e), He(e), r & 512 && t !== null && pt(t, t.return);
      break;
    case 5:
      if (
        (Re(n, e),
        He(e),
        r & 512 && t !== null && pt(t, t.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          fr(i, '');
        } catch (k) {
          K(e, e.return, k);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = t !== null ? t.memoizedProps : a,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === 'input' && a.type === 'radio' && a.name != null && Ef(i, a),
              vo(l, o);
            var s = vo(l, a);
            for (o = 0; o < u.length; o += 2) {
              var c = u[o],
                m = u[o + 1];
              c === 'style'
                ? Of(i, m)
                : c === 'dangerouslySetInnerHTML'
                ? Pf(i, m)
                : c === 'children'
                ? fr(i, m)
                : gl(i, c, m, s);
            }
            switch (l) {
              case 'input':
                so(i, a);
                break;
              case 'textarea':
                Cf(i, a);
                break;
              case 'select':
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var h = a.value;
                h != null
                  ? yt(i, !!a.multiple, h, !1)
                  : v !== !!a.multiple &&
                    (a.defaultValue != null
                      ? yt(i, !!a.multiple, a.defaultValue, !0)
                      : yt(i, !!a.multiple, a.multiple ? [] : '', !1));
            }
            i[wr] = a;
          } catch (k) {
            K(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Re(n, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (k) {
          K(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Re(n, e), He(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          mr(n.containerInfo);
        } catch (k) {
          K(e, e.return, k);
        }
      break;
    case 4:
      Re(n, e), He(e);
      break;
    case 13:
      Re(n, e),
        He(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Gl = Z())),
        r & 4 && ws(e);
      break;
    case 22:
      if (
        ((c = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((fe = (s = fe) || c), Re(n, e), (fe = s)) : Re(n, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (C = e, c = e.child; c !== null; ) {
            for (m = C = c; C !== null; ) {
              switch (((v = C), (h = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ir(4, v, v.return);
                  break;
                case 1:
                  pt(v, v.return);
                  var w = v.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = v), (t = v.return);
                    try {
                      (n = r),
                        (w.props = n.memoizedProps),
                        (w.state = n.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      K(r, t, k);
                    }
                  }
                  break;
                case 5:
                  pt(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    xs(m);
                    continue;
                  }
              }
              h !== null ? ((h.return = v), (C = h)) : xs(m);
            }
            c = c.sibling;
          }
        e: for (c = null, m = e; ; ) {
          if (m.tag === 5) {
            if (c === null) {
              c = m;
              try {
                (i = m.stateNode),
                  s
                    ? ((a = i.style),
                      typeof a.setProperty == 'function'
                        ? a.setProperty('display', 'none', 'important')
                        : (a.display = 'none'))
                    : ((l = m.stateNode),
                      (u = m.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (l.style.display = Nf('display', o)));
              } catch (k) {
                K(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (c === null)
              try {
                m.stateNode.nodeValue = s ? '' : m.memoizedProps;
              } catch (k) {
                K(e, e.return, k);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            c === m && (c = null), (m = m.return);
          }
          c === m && (c = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Re(n, e), He(e), r & 4 && ws(e);
      break;
    case 21:
      break;
    default:
      Re(n, e), He(e);
  }
}
function He(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (ed(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (fr(i, ''), (r.flags &= -33));
          var a = ys(e);
          Bo(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = ys(e);
          Vo(e, l, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (u) {
      K(e, e.return, u);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function rv(e, n, t) {
  (C = e), rd(e);
}
function rd(e, n, t) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var i = C,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ni;
      if (!o) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || fe;
        l = ni;
        var s = fe;
        if (((ni = o), (fe = u) && !s))
          for (C = i; C !== null; )
            (o = C),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ss(i)
                : u !== null
                ? ((u.return = o), (C = u))
                : Ss(i);
        for (; a !== null; ) (C = a), rd(a), (a = a.sibling);
        (C = i), (ni = l), (fe = s);
      }
      ks(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (C = a)) : ks(e);
  }
}
function ks(e) {
  for (; C !== null; ) {
    var n = C;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              fe || ca(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !fe)
                if (t === null) r.componentDidMount();
                else {
                  var i =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Me(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = n.updateQueue;
              a !== null && rs(n, a, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                rs(n, o, t);
              }
              break;
            case 5:
              var l = n.stateNode;
              if (t === null && n.flags & 4) {
                t = l;
                var u = n.memoizedProps;
                switch (n.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && t.focus();
                    break;
                  case 'img':
                    u.src && (t.src = u.src);
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
              if (n.memoizedState === null) {
                var s = n.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var m = c.dehydrated;
                    m !== null && mr(m);
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
              throw Error(y(163));
          }
        fe || (n.flags & 512 && Ho(n));
      } catch (v) {
        K(n, n.return, v);
      }
    }
    if (n === e) {
      C = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (C = t);
      break;
    }
    C = n.return;
  }
}
function xs(e) {
  for (; C !== null; ) {
    var n = C;
    if (n === e) {
      C = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (C = t);
      break;
    }
    C = n.return;
  }
}
function Ss(e) {
  for (; C !== null; ) {
    var n = C;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            ca(4, n);
          } catch (u) {
            K(n, t, u);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = n.return;
            try {
              r.componentDidMount();
            } catch (u) {
              K(n, i, u);
            }
          }
          var a = n.return;
          try {
            Ho(n);
          } catch (u) {
            K(n, a, u);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Ho(n);
          } catch (u) {
            K(n, o, u);
          }
      }
    } catch (u) {
      K(n, n.return, u);
    }
    if (n === e) {
      C = null;
      break;
    }
    var l = n.sibling;
    if (l !== null) {
      (l.return = n.return), (C = l);
      break;
    }
    C = n.return;
  }
}
var iv = Math.ceil,
  Yi = un.ReactCurrentDispatcher,
  Kl = un.ReactCurrentOwner,
  Ae = un.ReactCurrentBatchConfig,
  M = 0,
  ie = null,
  J = null,
  oe = 0,
  xe = 0,
  mt = jn(0),
  ee = 0,
  _r = null,
  Gn = 0,
  da = 0,
  Xl = 0,
  ar = null,
  he = null,
  Gl = 0,
  At = 1 / 0,
  Xe = null,
  Qi = !1,
  Yo = null,
  Cn = null,
  ti = !1,
  gn = null,
  Ki = 0,
  or = 0,
  Qo = null,
  Si = -1,
  Ei = 0;
function pe() {
  return M & 6 ? Z() : Si !== -1 ? Si : (Si = Z());
}
function _n(e) {
  return e.mode & 1
    ? M & 2 && oe !== 0
      ? oe & -oe
      : Um.transition !== null
      ? (Ei === 0 && (Ei = $f()), Ei)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qf(e.type))),
        e)
    : 1;
}
function Ue(e, n, t, r) {
  if (50 < or) throw ((or = 0), (Qo = null), Error(y(185)));
  Ir(e, t, r),
    (!(M & 2) || e !== ie) &&
      (e === ie && (!(M & 2) && (da |= t), ee === 4 && vn(e, oe)),
      ke(e, r),
      t === 1 && M === 0 && !(n.mode & 1) && ((At = Z() + 500), ua && Rn()));
}
function ke(e, n) {
  var t = e.callbackNode;
  Up(e, n);
  var r = Ai(e, e === ie ? oe : 0);
  if (r === 0)
    t !== null && Au(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Au(t), n === 1))
      e.tag === 0 ? $m(Es.bind(null, e)) : dc(Es.bind(null, e)),
        Mm(function () {
          !(M & 6) && Rn();
        }),
        (t = null);
    else {
      switch (Uf(r)) {
        case 1:
          t = Sl;
          break;
        case 4:
          t = Ff;
          break;
        case 16:
          t = zi;
          break;
        case 536870912:
          t = Df;
          break;
        default:
          t = zi;
      }
      t = cd(t, id.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function id(e, n) {
  if (((Si = -1), (Ei = 0), M & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (Et() && e.callbackNode !== t) return null;
  var r = Ai(e, e === ie ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = Xi(e, r);
  else {
    n = r;
    var i = M;
    M |= 2;
    var a = od();
    (ie !== e || oe !== n) && ((Xe = null), (At = Z() + 500), Bn(e, n));
    do
      try {
        lv();
        break;
      } catch (l) {
        ad(e, l);
      }
    while (1);
    Rl(),
      (Yi.current = a),
      (M = i),
      J !== null ? (n = 0) : ((ie = null), (oe = 0), (n = ee));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((i = ko(e)), i !== 0 && ((r = i), (n = Ko(e, i)))), n === 1)
    )
      throw ((t = _r), Bn(e, 0), vn(e, r), ke(e, Z()), t);
    if (n === 6) vn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !av(i) &&
          ((n = Xi(e, r)),
          n === 2 && ((a = ko(e)), a !== 0 && ((r = a), (n = Ko(e, a)))),
          n === 1))
      )
        throw ((t = _r), Bn(e, 0), vn(e, r), ke(e, Z()), t);
      switch (((e.finishedWork = i), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Dn(e, he, Xe);
          break;
        case 3:
          if (
            (vn(e, r), (r & 130023424) === r && ((n = Gl + 500 - Z()), 10 < n))
          ) {
            if (Ai(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              pe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Oo(Dn.bind(null, e, he, Xe), n);
            break;
          }
          Dn(e, he, Xe);
          break;
        case 4:
          if ((vn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - $e(r);
            (a = 1 << o), (o = n[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * iv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Oo(Dn.bind(null, e, he, Xe), r);
            break;
          }
          Dn(e, he, Xe);
          break;
        case 5:
          Dn(e, he, Xe);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return ke(e, Z()), e.callbackNode === t ? id.bind(null, e) : null;
}
function Ko(e, n) {
  var t = ar;
  return (
    e.current.memoizedState.isDehydrated && (Bn(e, n).flags |= 256),
    (e = Xi(e, n)),
    e !== 2 && ((n = he), (he = t), n !== null && Xo(n)),
    e
  );
}
function Xo(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function av(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var i = t[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!We(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function vn(e, n) {
  for (
    n &= ~Xl,
      n &= ~da,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - $e(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Es(e) {
  if (M & 6) throw Error(y(327));
  Et();
  var n = Ai(e, 0);
  if (!(n & 1)) return ke(e, Z()), null;
  var t = Xi(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = ko(e);
    r !== 0 && ((n = r), (t = Ko(e, r)));
  }
  if (t === 1) throw ((t = _r), Bn(e, 0), vn(e, n), ke(e, Z()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    Dn(e, he, Xe),
    ke(e, Z()),
    null
  );
}
function Zl(e, n) {
  var t = M;
  M |= 1;
  try {
    return e(n);
  } finally {
    (M = t), M === 0 && ((At = Z() + 500), ua && Rn());
  }
}
function Zn(e) {
  gn !== null && gn.tag === 0 && !(M & 6) && Et();
  var n = M;
  M |= 1;
  var t = Ae.transition,
    r = F;
  try {
    if (((Ae.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Ae.transition = t), (M = n), !(M & 6) && Rn();
  }
}
function Jl() {
  (xe = mt.current), W(mt);
}
function Bn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Rm(t)), J !== null))
    for (t = J.return; t !== null; ) {
      var r = t;
      switch ((Il(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Mi();
          break;
        case 3:
          Tt(), W(ye), W(ce), Ul();
          break;
        case 5:
          $l(r);
          break;
        case 4:
          Tt();
          break;
        case 13:
          W(B);
          break;
        case 19:
          W(B);
          break;
        case 10:
          Ml(r.type._context);
          break;
        case 22:
        case 23:
          Jl();
      }
      t = t.return;
    }
  if (
    ((ie = e),
    (J = e = Pn(e.current, null)),
    (oe = xe = n),
    (ee = 0),
    (_r = null),
    (Xl = da = Gn = 0),
    (he = ar = null),
    Un !== null)
  ) {
    for (n = 0; n < Un.length; n++)
      if (((t = Un[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var i = r.next,
          a = t.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        t.pending = r;
      }
    Un = null;
  }
  return e;
}
function ad(e, n) {
  do {
    var t = J;
    try {
      if ((Rl(), (wi.current = Bi), Vi)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Vi = !1;
      }
      if (
        ((Xn = 0),
        (re = q = Y = null),
        (rr = !1),
        (Sr = 0),
        (Kl.current = null),
        t === null || t.return === null)
      ) {
        (ee = 1), (_r = n), (J = null);
        break;
      }
      e: {
        var a = e,
          o = t.return,
          l = t,
          u = n;
        if (
          ((n = oe),
          (l.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var s = u,
            c = l,
            m = c.tag;
          if (!(c.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = c.alternate;
            v
              ? ((c.updateQueue = v.updateQueue),
                (c.memoizedState = v.memoizedState),
                (c.lanes = v.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = fs(o);
          if (h !== null) {
            (h.flags &= -257),
              cs(h, o, l, a, n),
              h.mode & 1 && ss(a, s, n),
              (n = h),
              (u = s);
            var w = n.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(u), (n.updateQueue = k);
            } else w.add(u);
            break e;
          } else {
            if (!(n & 1)) {
              ss(a, s, n), ql();
              break e;
            }
            u = Error(y(426));
          }
        } else if (V && l.mode & 1) {
          var z = fs(o);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256),
              cs(z, o, l, a, n),
              Ll(zt(u, l));
            break e;
          }
        }
        (a = u = zt(u, l)),
          ee !== 4 && (ee = 2),
          ar === null ? (ar = [a]) : ar.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (n &= -n), (a.lanes |= n);
              var d = Wc(a, u, n);
              ts(a, d);
              break e;
            case 1:
              l = u;
              var f = a.type,
                p = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (p !== null &&
                    typeof p.componentDidCatch == 'function' &&
                    (Cn === null || !Cn.has(p))))
              ) {
                (a.flags |= 65536), (n &= -n), (a.lanes |= n);
                var g = Hc(a, l, n);
                ts(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      ud(t);
    } catch (x) {
      (n = x), J === t && t !== null && (J = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function od() {
  var e = Yi.current;
  return (Yi.current = Bi), e === null ? Bi : e;
}
function ql() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    ie === null || (!(Gn & 268435455) && !(da & 268435455)) || vn(ie, oe);
}
function Xi(e, n) {
  var t = M;
  M |= 2;
  var r = od();
  (ie !== e || oe !== n) && ((Xe = null), Bn(e, n));
  do
    try {
      ov();
      break;
    } catch (i) {
      ad(e, i);
    }
  while (1);
  if ((Rl(), (M = t), (Yi.current = r), J !== null)) throw Error(y(261));
  return (ie = null), (oe = 0), ee;
}
function ov() {
  for (; J !== null; ) ld(J);
}
function lv() {
  for (; J !== null && !Ip(); ) ld(J);
}
function ld(e) {
  var n = fd(e.alternate, e, xe);
  (e.memoizedProps = e.pendingProps),
    n === null ? ud(e) : (J = n),
    (Kl.current = null);
}
function ud(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = ev(t, n)), t !== null)) {
        (t.flags &= 32767), (J = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (J = null);
        return;
      }
    } else if (((t = qm(t, n, xe)), t !== null)) {
      J = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      J = n;
      return;
    }
    J = n = e;
  } while (n !== null);
  ee === 0 && (ee = 5);
}
function Dn(e, n, t) {
  var r = F,
    i = Ae.transition;
  try {
    (Ae.transition = null), (F = 1), uv(e, n, t, r);
  } finally {
    (Ae.transition = i), (F = r);
  }
  return null;
}
function uv(e, n, t, r) {
  do Et();
  while (gn !== null);
  if (M & 6) throw Error(y(327));
  t = e.finishedWork;
  var i = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = t.lanes | t.childLanes;
  if (
    (Wp(e, a),
    e === ie && ((J = ie = null), (oe = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      ti ||
      ((ti = !0),
      cd(zi, function () {
        return Et(), null;
      })),
    (a = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || a)
  ) {
    (a = Ae.transition), (Ae.transition = null);
    var o = F;
    F = 1;
    var l = M;
    (M |= 4),
      (Kl.current = null),
      tv(e, t),
      td(t, e),
      Om(Po),
      (Ii = !!_o),
      (Po = _o = null),
      (e.current = t),
      rv(t),
      Lp(),
      (M = l),
      (F = o),
      (Ae.transition = a);
  } else e.current = t;
  if (
    (ti && ((ti = !1), (gn = e), (Ki = i)),
    (a = e.pendingLanes),
    a === 0 && (Cn = null),
    Mp(t.stateNode),
    ke(e, Z()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (i = n[t]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Qi) throw ((Qi = !1), (e = Yo), (Yo = null), e);
  return (
    Ki & 1 && e.tag !== 0 && Et(),
    (a = e.pendingLanes),
    a & 1 ? (e === Qo ? or++ : ((or = 0), (Qo = e))) : (or = 0),
    Rn(),
    null
  );
}
function Et() {
  if (gn !== null) {
    var e = Uf(Ki),
      n = Ae.transition,
      t = F;
    try {
      if (((Ae.transition = null), (F = 16 > e ? 16 : e), gn === null))
        var r = !1;
      else {
        if (((e = gn), (gn = null), (Ki = 0), M & 6)) throw Error(y(331));
        var i = M;
        for (M |= 4, C = e.current; C !== null; ) {
          var a = C,
            o = a.child;
          if (C.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var s = l[u];
                for (C = s; C !== null; ) {
                  var c = C;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, c, a);
                  }
                  var m = c.child;
                  if (m !== null) (m.return = c), (C = m);
                  else
                    for (; C !== null; ) {
                      c = C;
                      var v = c.sibling,
                        h = c.return;
                      if ((qc(c), c === s)) {
                        C = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = h), (C = v);
                        break;
                      }
                      C = h;
                    }
                }
              }
              var w = a.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var z = k.sibling;
                    (k.sibling = null), (k = z);
                  } while (k !== null);
                }
              }
              C = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (C = o);
          else
            e: for (; C !== null; ) {
              if (((a = C), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ir(9, a, a.return);
                }
              var d = a.sibling;
              if (d !== null) {
                (d.return = a.return), (C = d);
                break e;
              }
              C = a.return;
            }
        }
        var f = e.current;
        for (C = f; C !== null; ) {
          o = C;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (C = p);
          else
            e: for (o = f; C !== null; ) {
              if (((l = C), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ca(9, l);
                  }
                } catch (x) {
                  K(l, l.return, x);
                }
              if (l === o) {
                C = null;
                break e;
              }
              var g = l.sibling;
              if (g !== null) {
                (g.return = l.return), (C = g);
                break e;
              }
              C = l.return;
            }
        }
        if (
          ((M = i), Rn(), Qe && typeof Qe.onPostCommitFiberRoot == 'function')
        )
          try {
            Qe.onPostCommitFiberRoot(ra, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = t), (Ae.transition = n);
    }
  }
  return !1;
}
function Cs(e, n, t) {
  (n = zt(t, n)),
    (n = Wc(e, n, 1)),
    (e = En(e, n, 1)),
    (n = pe()),
    e !== null && (Ir(e, 1, n), ke(e, n));
}
function K(e, n, t) {
  if (e.tag === 3) Cs(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Cs(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Cn === null || !Cn.has(r)))
        ) {
          (e = zt(t, e)),
            (e = Hc(n, e, 1)),
            (n = En(n, e, 1)),
            (e = pe()),
            n !== null && (Ir(n, 1, e), ke(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function sv(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = pe()),
    (e.pingedLanes |= e.suspendedLanes & t),
    ie === e &&
      (oe & t) === t &&
      (ee === 4 || (ee === 3 && (oe & 130023424) === oe && 500 > Z() - Gl)
        ? Bn(e, 0)
        : (Xl |= t)),
    ke(e, n);
}
function sd(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = Yr), (Yr <<= 1), !(Yr & 130023424) && (Yr = 4194304))
      : (n = 1));
  var t = pe();
  (e = tn(e, n)), e !== null && (Ir(e, n, t), ke(e, t));
}
function fv(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), sd(e, t);
}
function cv(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (t = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), sd(e, t);
}
var fd;
fd = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || ye.current) ge = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (ge = !1), Jm(e, n, t);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), V && n.flags & 1048576 && pc(n, Di, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      xi(e, n), (e = n.pendingProps);
      var i = Pt(n, ce.current);
      St(n, t), (i = Hl(null, n, r, e, i, t));
      var a = Vl();
      return (
        (n.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            we(r) ? ((a = !0), bi(n)) : (a = !1),
            (n.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Fl(n),
            (i.updater = sa),
            (n.stateNode = i),
            (i._reactInternals = n),
            Ro(n, r, e, t),
            (n = Fo(null, n, r, !0, a, t)))
          : ((n.tag = 0), V && a && Al(n), de(null, n, i, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (xi(e, n),
          (e = n.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (n.type = r),
          (i = n.tag = pv(r)),
          (e = Me(r, e)),
          i)
        ) {
          case 0:
            n = bo(null, n, r, e, t);
            break e;
          case 1:
            n = ms(null, n, r, e, t);
            break e;
          case 11:
            n = ds(null, n, r, e, t);
            break e;
          case 14:
            n = ps(null, n, r, Me(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ''));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (i = n.pendingProps),
        (i = n.elementType === r ? i : Me(r, i)),
        bo(e, n, r, i, t)
      );
    case 1:
      return (
        (r = n.type),
        (i = n.pendingProps),
        (i = n.elementType === r ? i : Me(r, i)),
        ms(e, n, r, i, t)
      );
    case 3:
      e: {
        if ((Qc(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (a = n.memoizedState),
          (i = a.element),
          gc(e, n),
          Wi(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = a),
            (n.memoizedState = a),
            n.flags & 256)
          ) {
            (i = zt(Error(y(423)), n)), (n = vs(e, n, r, t, i));
            break e;
          } else if (r !== i) {
            (i = zt(Error(y(424)), n)), (n = vs(e, n, r, t, i));
            break e;
          } else
            for (
              Se = Sn(n.stateNode.containerInfo.firstChild),
                Ee = n,
                V = !0,
                Fe = null,
                t = xc(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((Nt(), r === i)) {
            n = rn(e, n, t);
            break e;
          }
          de(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        Sc(n),
        e === null && Io(n),
        (r = n.type),
        (i = n.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        No(r, i) ? (o = null) : a !== null && No(r, a) && (n.flags |= 32),
        Yc(e, n),
        de(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && Io(n), null;
    case 13:
      return Kc(e, n, t);
    case 4:
      return (
        Dl(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = Ot(n, null, r, t)) : de(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (i = n.pendingProps),
        (i = n.elementType === r ? i : Me(r, i)),
        ds(e, n, r, i, t)
      );
    case 7:
      return de(e, n, n.pendingProps, t), n.child;
    case 8:
      return de(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return de(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (i = n.pendingProps),
          (a = n.memoizedProps),
          (o = i.value),
          D($i, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (We(a.value, o)) {
            if (a.children === i.children && !ye.current) {
              n = rn(e, n, t);
              break e;
            }
          } else
            for (a = n.child, a !== null && (a.return = n); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                o = a.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (a.tag === 1) {
                      (u = qe(-1, t & -t)), (u.tag = 2);
                      var s = a.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (a.lanes |= t),
                      (u = a.alternate),
                      u !== null && (u.lanes |= t),
                      Lo(a.return, t, n),
                      (l.lanes |= t);
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10) o = a.type === n.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(y(341));
                (o.lanes |= t),
                  (l = o.alternate),
                  l !== null && (l.lanes |= t),
                  Lo(o, t, n),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        de(e, n, i.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (i = n.type),
        (r = n.pendingProps.children),
        St(n, t),
        (i = Ie(i)),
        (r = r(i)),
        (n.flags |= 1),
        de(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (i = Me(r, n.pendingProps)),
        (i = Me(r.type, i)),
        ps(e, n, r, i, t)
      );
    case 15:
      return Vc(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (i = n.pendingProps),
        (i = n.elementType === r ? i : Me(r, i)),
        xi(e, n),
        (n.tag = 1),
        we(r) ? ((e = !0), bi(n)) : (e = !1),
        St(n, t),
        wc(n, r, i),
        Ro(n, r, i, t),
        Fo(null, n, r, !0, e, t)
      );
    case 19:
      return Xc(e, n, t);
    case 22:
      return Bc(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function cd(e, n) {
  return bf(e, n);
}
function dv(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, n, t, r) {
  return new dv(e, n, t, r);
}
function eu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function pv(e) {
  if (typeof e == 'function') return eu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wl)) return 11;
    if (e === kl) return 14;
  }
  return 2;
}
function Pn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = ze(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Ci(e, n, t, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == 'function')) eu(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case it:
        return Yn(t.children, i, a, n);
      case yl:
        (o = 8), (i |= 8);
        break;
      case io:
        return (
          (e = ze(12, t, n, i | 2)), (e.elementType = io), (e.lanes = a), e
        );
      case ao:
        return (e = ze(13, t, n, i)), (e.elementType = ao), (e.lanes = a), e;
      case oo:
        return (e = ze(19, t, n, i)), (e.elementType = oo), (e.lanes = a), e;
      case kf:
        return pa(t, i, a, n);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case yf:
              o = 10;
              break e;
            case wf:
              o = 9;
              break e;
            case wl:
              o = 11;
              break e;
            case kl:
              o = 14;
              break e;
            case dn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ''));
    }
  return (
    (n = ze(o, t, n, i)), (n.elementType = e), (n.type = r), (n.lanes = a), n
  );
}
function Yn(e, n, t, r) {
  return (e = ze(7, e, r, n)), (e.lanes = t), e;
}
function pa(e, n, t, r) {
  return (
    (e = ze(22, e, r, n)),
    (e.elementType = kf),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xa(e, n, t) {
  return (e = ze(6, e, null, n)), (e.lanes = t), e;
}
function Ga(e, n, t) {
  return (
    (n = ze(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function mv(e, n, t, r, i) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = za(0)),
    (this.expirationTimes = za(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = za(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function nu(e, n, t, r, i, a, o, l, u) {
  return (
    (e = new mv(e, n, t, l, u)),
    n === 1 ? ((n = 1), a === !0 && (n |= 8)) : (n = 0),
    (a = ze(3, null, null, n)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fl(a),
    e
  );
}
function vv(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: rt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function dd(e) {
  if (!e) return On;
  e = e._reactInternals;
  e: {
    if (nt(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (we(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (we(t)) return cc(e, t, n);
  }
  return n;
}
function pd(e, n, t, r, i, a, o, l, u) {
  return (
    (e = nu(t, r, !0, e, i, a, o, l, u)),
    (e.context = dd(null)),
    (t = e.current),
    (r = pe()),
    (i = _n(t)),
    (a = qe(r, i)),
    (a.callback = n ?? null),
    En(t, a, i),
    (e.current.lanes = i),
    Ir(e, i, r),
    ke(e, r),
    e
  );
}
function ma(e, n, t, r) {
  var i = n.current,
    a = pe(),
    o = _n(i);
  return (
    (t = dd(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = qe(a, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = En(i, n, o)),
    e !== null && (Ue(e, i, o, a), yi(e, i, o)),
    o
  );
}
function Gi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _s(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function tu(e, n) {
  _s(e, n), (e = e.alternate) && _s(e, n);
}
function hv() {
  return null;
}
var md =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ru(e) {
  this._internalRoot = e;
}
va.prototype.render = ru.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  ma(e, n, null, null);
};
va.prototype.unmount = ru.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Zn(function () {
      ma(null, e, null, null);
    }),
      (n[nn] = null);
  }
};
function va(e) {
  this._internalRoot = e;
}
va.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Vf();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < mn.length && n !== 0 && n < mn[t].priority; t++);
    mn.splice(t, 0, e), t === 0 && Yf(e);
  }
};
function iu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ha(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Ps() {}
function gv(e, n, t, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var a = r;
      r = function () {
        var s = Gi(o);
        a.call(s);
      };
    }
    var o = pd(n, r, e, 0, null, !1, !1, '', Ps);
    return (
      (e._reactRootContainer = o),
      (e[nn] = o.current),
      gr(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var s = Gi(u);
      l.call(s);
    };
  }
  var u = nu(e, 0, !1, null, null, !1, !1, '', Ps);
  return (
    (e._reactRootContainer = u),
    (e[nn] = u.current),
    gr(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      ma(n, u, t, r);
    }),
    u
  );
}
function ga(e, n, t, r, i) {
  var a = t._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == 'function') {
      var l = i;
      i = function () {
        var u = Gi(o);
        l.call(u);
      };
    }
    ma(n, o, e, i);
  } else o = gv(t, n, e, i, r);
  return Gi(o);
}
Wf = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Xt(n.pendingLanes);
        t !== 0 &&
          (El(n, t | 1), ke(n, Z()), !(M & 6) && ((At = Z() + 500), Rn()));
      }
      break;
    case 13:
      Zn(function () {
        var r = tn(e, 1);
        if (r !== null) {
          var i = pe();
          Ue(r, e, 1, i);
        }
      }),
        tu(e, 1);
  }
};
Cl = function (e) {
  if (e.tag === 13) {
    var n = tn(e, 134217728);
    if (n !== null) {
      var t = pe();
      Ue(n, e, 134217728, t);
    }
    tu(e, 134217728);
  }
};
Hf = function (e) {
  if (e.tag === 13) {
    var n = _n(e),
      t = tn(e, n);
    if (t !== null) {
      var r = pe();
      Ue(t, e, n, r);
    }
    tu(e, n);
  }
};
Vf = function () {
  return F;
};
Bf = function (e, n) {
  var t = F;
  try {
    return (F = e), n();
  } finally {
    F = t;
  }
};
go = function (e, n, t) {
  switch (n) {
    case 'input':
      if ((so(e, t), (n = t.name), t.type === 'radio' && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var i = la(r);
            if (!i) throw Error(y(90));
            Sf(r), so(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Cf(e, t);
      break;
    case 'select':
      (n = t.value), n != null && yt(e, !!t.multiple, n, !1);
  }
};
Af = Zl;
If = Zn;
var yv = { usingClientEntryPoint: !1, Events: [jr, ut, la, Tf, zf, Zl] },
  Yt = {
    findFiberByHostInstance: $n,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  wv = {
    bundleType: Yt.bundleType,
    version: Yt.version,
    rendererPackageName: Yt.rendererPackageName,
    rendererConfig: Yt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Yt.findFiberByHostInstance || hv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ri.isDisabled && ri.supportsFiber)
    try {
      (ra = ri.inject(wv)), (Qe = ri);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yv;
_e.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!iu(n)) throw Error(y(200));
  return vv(e, n, null, t);
};
_e.createRoot = function (e, n) {
  if (!iu(e)) throw Error(y(299));
  var t = !1,
    r = '',
    i = md;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (n = nu(e, 1, !1, null, null, t, !1, r, i)),
    (e[nn] = n.current),
    gr(e.nodeType === 8 ? e.parentNode : e),
    new ru(n)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == 'function'
      ? Error(y(188))
      : ((e = Object.keys(e).join(',')), Error(y(268, e)));
  return (e = Rf(n)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Zn(e);
};
_e.hydrate = function (e, n, t) {
  if (!ha(n)) throw Error(y(200));
  return ga(null, e, n, !0, t);
};
_e.hydrateRoot = function (e, n, t) {
  if (!iu(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    i = !1,
    a = '',
    o = md;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (i = !0),
      t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = pd(n, null, e, 1, t ?? null, i, !1, a, o)),
    (e[nn] = n.current),
    gr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (i = t._getVersion),
        (i = i(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, i])
          : n.mutableSourceEagerHydrationData.push(t, i);
  return new va(n);
};
_e.render = function (e, n, t) {
  if (!ha(n)) throw Error(y(200));
  return ga(null, e, n, !1, t);
};
_e.unmountComponentAtNode = function (e) {
  if (!ha(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Zn(function () {
        ga(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nn] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Zl;
_e.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!ha(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return ga(e, n, t, !1, r);
};
_e.version = '18.2.0-next-9e3b772b8-20220608';
function vd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd);
    } catch (e) {
      console.error(e);
    }
}
vd(), (pf.exports = _e);
var kv = pf.exports,
  Ns = kv;
(to.createRoot = Ns.createRoot), (to.hydrateRoot = Ns.hydrateRoot);
function xv({ onNavigate: e, onSignIn: n }) {
  async function t(r) {
    r.preventDefault();
    try {
      const i = new FormData(r.target),
        a = Object.fromEntries(i.entries()),
        o = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(a),
        },
        l = await fetch('/api/auth/sign-in', o);
      if (!l.ok) throw new Error(`fetch Error ${l.status}`);
      const { token: u } = await l.json();
      sessionStorage.setItem('token', u), n();
    } catch (i) {
      alert(`Error signing in: ${i}`);
    }
  }
  return S.jsx(S.Fragment, {
    children: S.jsx('div', {
      className: 'form-container',
      children: S.jsxs('div', {
        className: 'sign-in-modal',
        children: [
          S.jsx('h1', { style: { fontSize: '40px' }, children: 'Login' }),
          S.jsxs('form', {
            className: 'sign-in-form',
            onSubmit: t,
            children: [
              S.jsx('div', {
                className: 'row',
                children: S.jsxs('label', {
                  style: { fontSize: '30px' },
                  children: [
                    'Username',
                    S.jsx('input', {
                      required: !0,
                      name: 'username',
                      type: 'text',
                      style: {
                        display: 'block',
                        height: '30px',
                        width: '200px',
                        fontSize: '25px',
                        marginBottom: '1rem',
                      },
                    }),
                  ],
                }),
              }),
              S.jsx('div', {
                className: 'row',
                children: S.jsxs('label', {
                  style: { fontSize: '30px' },
                  children: [
                    'Password',
                    S.jsx('input', {
                      required: !0,
                      name: 'password',
                      type: 'password',
                      style: {
                        display: 'block',
                        height: '30px',
                        width: '200px',
                        fontSize: '40px',
                        marginBottom: '1rem',
                      },
                    }),
                  ],
                }),
              }),
              S.jsx('div', {
                className: 'row',
                children: S.jsx('input', {
                  type: 'submit',
                  value: 'Submit',
                  style: { fontSize: '20px', cursor: 'pointer' },
                }),
              }),
            ],
          }),
          S.jsx('div', {
            className: 'row',
            children: S.jsxs('button', {
              className: 'nav-to-register-button',
              onClick: () => e('register'),
              children: [
                "Don't have an account?",
                S.jsx('br', {}),
                'Click here to register!',
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
function Sv({ onNavigate: e }) {
  async function n(t) {
    t.preventDefault();
    try {
      const r = new FormData(t.target),
        i = Object.fromEntries(r.entries()),
        a = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(i),
        },
        o = await fetch('/api/auth/sign-up', a);
      if (!o.ok) throw new Error(`fetch Error ${o.status}`);
    } catch (r) {
      alert(`Error registering user: ${r}`);
    } finally {
      e('sign-in');
    }
  }
  return S.jsx(S.Fragment, {
    children: S.jsx('div', {
      className: 'form-container',
      children: S.jsxs('div', {
        className: 'register-modal',
        children: [
          S.jsx('h1', {
            style: { fontSize: '40px' },
            children: 'Create An Account',
          }),
          S.jsxs('form', {
            className: 'sign-in-form',
            onSubmit: n,
            children: [
              S.jsx('div', {
                className: 'row',
                children: S.jsxs('label', {
                  style: { fontSize: '30px' },
                  children: [
                    'Username',
                    S.jsx('input', {
                      required: !0,
                      name: 'username',
                      type: 'text',
                      style: {
                        display: 'block',
                        height: '30px',
                        width: '200px',
                        fontSize: '25px',
                        marginBottom: '1rem',
                      },
                    }),
                  ],
                }),
              }),
              S.jsx('div', {
                className: 'row',
                children: S.jsxs('label', {
                  style: { fontSize: '30px' },
                  children: [
                    'Password',
                    S.jsx('input', {
                      required: !0,
                      name: 'password',
                      type: 'password',
                      style: {
                        display: 'block',
                        height: '30px',
                        width: '200px',
                        fontSize: '40px',
                        marginBottom: '.5rem',
                      },
                    }),
                  ],
                }),
              }),
              S.jsx('div', {
                className: 'row',
                children: S.jsx('input', {
                  type: 'submit',
                  value: 'Submit',
                  style: { fontSize: '20px', cursor: 'pointer' },
                }),
              }),
            ],
          }),
          S.jsx('div', {
            className: 'row',
            children: S.jsxs('button', {
              className: 'nav-to-register-button',
              onClick: () => e('sign-in'),
              children: [
                'Oh wait! ',
                S.jsx('br', {}),
                'I have an account already!',
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
function Os(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function E(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? Os(Object(t), !0).forEach(function (r) {
          ne(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : Os(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function Zi(e) {
  '@babel/helpers - typeof';
  return (
    (Zi =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == 'function' &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? 'symbol'
              : typeof n;
          }),
    Zi(e)
  );
}
function Ev(e, n) {
  if (!(e instanceof n))
    throw new TypeError('Cannot call a class as a function');
}
function Ts(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Cv(e, n, t) {
  return (
    n && Ts(e.prototype, n),
    t && Ts(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function ne(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = t),
    e
  );
}
function au(e, n) {
  return Pv(e) || Ov(e, n) || hd(e, n) || zv();
}
function Mr(e) {
  return _v(e) || Nv(e) || hd(e) || Tv();
}
function _v(e) {
  if (Array.isArray(e)) return Go(e);
}
function Pv(e) {
  if (Array.isArray(e)) return e;
}
function Nv(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function Ov(e, n) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var r = [],
      i = !0,
      a = !1,
      o,
      l;
    try {
      for (
        t = t.call(e);
        !(i = (o = t.next()).done) && (r.push(o.value), !(n && r.length === n));
        i = !0
      );
    } catch (u) {
      (a = !0), (l = u);
    } finally {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function hd(e, n) {
  if (e) {
    if (typeof e == 'string') return Go(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Go(e, n);
  }
}
function Go(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function Tv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var zs = function () {},
  ou = {},
  gd = {},
  yd = null,
  wd = { mark: zs, measure: zs };
try {
  typeof window < 'u' && (ou = window),
    typeof document < 'u' && (gd = document),
    typeof MutationObserver < 'u' && (yd = MutationObserver),
    typeof performance < 'u' && (wd = performance);
} catch {}
var Av = ou.navigator || {},
  As = Av.userAgent,
  Is = As === void 0 ? '' : As,
  Tn = ou,
  H = gd,
  Ls = yd,
  ii = wd;
Tn.document;
var sn =
    !!H.documentElement &&
    !!H.head &&
    typeof H.addEventListener == 'function' &&
    typeof H.createElement == 'function',
  kd = ~Is.indexOf('MSIE') || ~Is.indexOf('Trident/'),
  ai,
  oi,
  li,
  ui,
  si,
  an = '___FONT_AWESOME___',
  Zo = 16,
  xd = 'fa',
  Sd = 'svg-inline--fa',
  Jn = 'data-fa-i2svg',
  Jo = 'data-fa-pseudo-element',
  Iv = 'data-fa-pseudo-element-pending',
  lu = 'data-prefix',
  uu = 'data-icon',
  js = 'fontawesome-i2svg',
  Lv = 'async',
  jv = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  Ed = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  U = 'classic',
  X = 'sharp',
  su = [U, X];
function br(e) {
  return new Proxy(e, {
    get: function (t, r) {
      return r in t ? t[r] : t[U];
    },
  });
}
var Pr = br(
    ((ai = {}),
    ne(ai, U, {
      fa: 'solid',
      fas: 'solid',
      'fa-solid': 'solid',
      far: 'regular',
      'fa-regular': 'regular',
      fal: 'light',
      'fa-light': 'light',
      fat: 'thin',
      'fa-thin': 'thin',
      fad: 'duotone',
      'fa-duotone': 'duotone',
      fab: 'brands',
      'fa-brands': 'brands',
      fak: 'kit',
      fakd: 'kit',
      'fa-kit': 'kit',
      'fa-kit-duotone': 'kit',
    }),
    ne(ai, X, {
      fa: 'solid',
      fass: 'solid',
      'fa-solid': 'solid',
      fasr: 'regular',
      'fa-regular': 'regular',
      fasl: 'light',
      'fa-light': 'light',
      fast: 'thin',
      'fa-thin': 'thin',
    }),
    ai)
  ),
  Nr = br(
    ((oi = {}),
    ne(oi, U, {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
      kit: 'fak',
    }),
    ne(oi, X, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
    oi)
  ),
  Or = br(
    ((li = {}),
    ne(li, U, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    }),
    ne(li, X, {
      fass: 'fa-solid',
      fasr: 'fa-regular',
      fasl: 'fa-light',
      fast: 'fa-thin',
    }),
    li)
  ),
  Rv = br(
    ((ui = {}),
    ne(ui, U, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    }),
    ne(ui, X, {
      'fa-solid': 'fass',
      'fa-regular': 'fasr',
      'fa-light': 'fasl',
      'fa-thin': 'fast',
    }),
    ui)
  ),
  Mv = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  Cd = 'fa-layers-text',
  bv =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Fv = br(
    ((si = {}),
    ne(si, U, {
      900: 'fas',
      400: 'far',
      normal: 'far',
      300: 'fal',
      100: 'fat',
    }),
    ne(si, X, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
    si)
  ),
  _d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Dv = _d.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  $v = [
    'class',
    'data-prefix',
    'data-icon',
    'data-fa-transform',
    'data-fa-mask',
  ],
  Hn = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  Tr = new Set();
Object.keys(Nr[U]).map(Tr.add.bind(Tr));
Object.keys(Nr[X]).map(Tr.add.bind(Tr));
var Uv = []
    .concat(su, Mr(Tr), [
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      'beat',
      'border',
      'fade',
      'beat-fade',
      'bounce',
      'flip-both',
      'flip-horizontal',
      'flip-vertical',
      'flip',
      'fw',
      'inverse',
      'layers-counter',
      'layers-text',
      'layers',
      'li',
      'pull-left',
      'pull-right',
      'pulse',
      'rotate-180',
      'rotate-270',
      'rotate-90',
      'rotate-by',
      'shake',
      'spin-pulse',
      'spin-reverse',
      'spin',
      'stack-1x',
      'stack-2x',
      'stack',
      'ul',
      Hn.GROUP,
      Hn.SWAP_OPACITY,
      Hn.PRIMARY,
      Hn.SECONDARY,
    ])
    .concat(
      _d.map(function (e) {
        return ''.concat(e, 'x');
      })
    )
    .concat(
      Dv.map(function (e) {
        return 'w-'.concat(e);
      })
    ),
  lr = Tn.FontAwesomeConfig || {};
function Wv(e) {
  var n = H.querySelector('script[' + e + ']');
  if (n) return n.getAttribute(e);
}
function Hv(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e;
}
if (H && typeof H.querySelector == 'function') {
  var Vv = [
    ['data-family-prefix', 'familyPrefix'],
    ['data-css-prefix', 'cssPrefix'],
    ['data-family-default', 'familyDefault'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ];
  Vv.forEach(function (e) {
    var n = au(e, 2),
      t = n[0],
      r = n[1],
      i = Hv(Wv(t));
    i != null && (lr[r] = i);
  });
}
var Pd = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: xd,
  replacementClass: Sd,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: 'async',
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
lr.familyPrefix && (lr.cssPrefix = lr.familyPrefix);
var It = E(E({}, Pd), lr);
It.autoReplaceSvg || (It.observeMutations = !1);
var O = {};
Object.keys(Pd).forEach(function (e) {
  Object.defineProperty(O, e, {
    enumerable: !0,
    set: function (t) {
      (It[e] = t),
        ur.forEach(function (r) {
          return r(O);
        });
    },
    get: function () {
      return It[e];
    },
  });
});
Object.defineProperty(O, 'familyPrefix', {
  enumerable: !0,
  set: function (n) {
    (It.cssPrefix = n),
      ur.forEach(function (t) {
        return t(O);
      });
  },
  get: function () {
    return It.cssPrefix;
  },
});
Tn.FontAwesomeConfig = O;
var ur = [];
function Bv(e) {
  return (
    ur.push(e),
    function () {
      ur.splice(ur.indexOf(e), 1);
    }
  );
}
var cn = Zo,
  Ye = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function Yv(e) {
  if (!(!e || !sn)) {
    var n = H.createElement('style');
    n.setAttribute('type', 'text/css'), (n.innerHTML = e);
    for (var t = H.head.childNodes, r = null, i = t.length - 1; i > -1; i--) {
      var a = t[i],
        o = (a.tagName || '').toUpperCase();
      ['STYLE', 'LINK'].indexOf(o) > -1 && (r = a);
    }
    return H.head.insertBefore(n, r), e;
  }
}
var Qv = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function zr() {
  for (var e = 12, n = ''; e-- > 0; ) n += Qv[(Math.random() * 62) | 0];
  return n;
}
function Mt(e) {
  for (var n = [], t = (e || []).length >>> 0; t--; ) n[t] = e[t];
  return n;
}
function fu(e) {
  return e.classList
    ? Mt(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (n) {
        return n;
      });
}
function Nd(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function Kv(e) {
  return Object.keys(e || {})
    .reduce(function (n, t) {
      return n + ''.concat(t, '="').concat(Nd(e[t]), '" ');
    }, '')
    .trim();
}
function ya(e) {
  return Object.keys(e || {}).reduce(function (n, t) {
    return n + ''.concat(t, ': ').concat(e[t].trim(), ';');
  }, '');
}
function cu(e) {
  return (
    e.size !== Ye.size ||
    e.x !== Ye.x ||
    e.y !== Ye.y ||
    e.rotate !== Ye.rotate ||
    e.flipX ||
    e.flipY
  );
}
function Xv(e) {
  var n = e.transform,
    t = e.containerWidth,
    r = e.iconWidth,
    i = { transform: 'translate('.concat(t / 2, ' 256)') },
    a = 'translate('.concat(n.x * 32, ', ').concat(n.y * 32, ') '),
    o = 'scale('
      .concat((n.size / 16) * (n.flipX ? -1 : 1), ', ')
      .concat((n.size / 16) * (n.flipY ? -1 : 1), ') '),
    l = 'rotate('.concat(n.rotate, ' 0 0)'),
    u = { transform: ''.concat(a, ' ').concat(o, ' ').concat(l) },
    s = { transform: 'translate('.concat((r / 2) * -1, ' -256)') };
  return { outer: i, inner: u, path: s };
}
function Gv(e) {
  var n = e.transform,
    t = e.width,
    r = t === void 0 ? Zo : t,
    i = e.height,
    a = i === void 0 ? Zo : i,
    o = e.startCentered,
    l = o === void 0 ? !1 : o,
    u = '';
  return (
    l && kd
      ? (u += 'translate('
          .concat(n.x / cn - r / 2, 'em, ')
          .concat(n.y / cn - a / 2, 'em) '))
      : l
      ? (u += 'translate(calc(-50% + '
          .concat(n.x / cn, 'em), calc(-50% + ')
          .concat(n.y / cn, 'em)) '))
      : (u += 'translate('.concat(n.x / cn, 'em, ').concat(n.y / cn, 'em) ')),
    (u += 'scale('
      .concat((n.size / cn) * (n.flipX ? -1 : 1), ', ')
      .concat((n.size / cn) * (n.flipY ? -1 : 1), ') ')),
    (u += 'rotate('.concat(n.rotate, 'deg) ')),
    u
  );
}
var Zv = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Od() {
  var e = xd,
    n = Sd,
    t = O.cssPrefix,
    r = O.replacementClass,
    i = Zv;
  if (t !== e || r !== n) {
    var a = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      o = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      l = new RegExp('\\.'.concat(n), 'g');
    i = i
      .replace(a, '.'.concat(t, '-'))
      .replace(o, '--'.concat(t, '-'))
      .replace(l, '.'.concat(r));
  }
  return i;
}
var Rs = !1;
function Za() {
  O.autoAddCss && !Rs && (Yv(Od()), (Rs = !0));
}
var Jv = {
    mixout: function () {
      return { dom: { css: Od, insertCss: Za } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Za();
        },
        beforeI2svg: function () {
          Za();
        },
      };
    },
  },
  on = Tn || {};
on[an] || (on[an] = {});
on[an].styles || (on[an].styles = {});
on[an].hooks || (on[an].hooks = {});
on[an].shims || (on[an].shims = []);
var De = on[an],
  Td = [],
  qv = function e() {
    H.removeEventListener('DOMContentLoaded', e),
      (Ji = 1),
      Td.map(function (n) {
        return n();
      });
  },
  Ji = !1;
sn &&
  ((Ji = (H.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    H.readyState
  )),
  Ji || H.addEventListener('DOMContentLoaded', qv));
function eh(e) {
  sn && (Ji ? setTimeout(e, 0) : Td.push(e));
}
function Fr(e) {
  var n = e.tag,
    t = e.attributes,
    r = t === void 0 ? {} : t,
    i = e.children,
    a = i === void 0 ? [] : i;
  return typeof e == 'string'
    ? Nd(e)
    : '<'
        .concat(n, ' ')
        .concat(Kv(r), '>')
        .concat(a.map(Fr).join(''), '</')
        .concat(n, '>');
}
function Ms(e, n, t) {
  if (e && e[n] && e[n][t]) return { prefix: n, iconName: t, icon: e[n][t] };
}
var nh = function (n, t) {
    return function (r, i, a, o) {
      return n.call(t, r, i, a, o);
    };
  },
  Ja = function (n, t, r, i) {
    var a = Object.keys(n),
      o = a.length,
      l = i !== void 0 ? nh(t, i) : t,
      u,
      s,
      c;
    for (
      r === void 0 ? ((u = 1), (c = n[a[0]])) : ((u = 0), (c = r));
      u < o;
      u++
    )
      (s = a[u]), (c = l(c, n[s], s, n));
    return c;
  };
function th(e) {
  for (var n = [], t = 0, r = e.length; t < r; ) {
    var i = e.charCodeAt(t++);
    if (i >= 55296 && i <= 56319 && t < r) {
      var a = e.charCodeAt(t++);
      (a & 64512) == 56320
        ? n.push(((i & 1023) << 10) + (a & 1023) + 65536)
        : (n.push(i), t--);
    } else n.push(i);
  }
  return n;
}
function qo(e) {
  var n = th(e);
  return n.length === 1 ? n[0].toString(16) : null;
}
function rh(e, n) {
  var t = e.length,
    r = e.charCodeAt(n),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    t > n + 1 &&
    ((i = e.charCodeAt(n + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function bs(e) {
  return Object.keys(e).reduce(function (n, t) {
    var r = e[t],
      i = !!r.icon;
    return i ? (n[r.iconName] = r.icon) : (n[t] = r), n;
  }, {});
}
function el(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = t.skipHooks,
    i = r === void 0 ? !1 : r,
    a = bs(n);
  typeof De.hooks.addPack == 'function' && !i
    ? De.hooks.addPack(e, bs(n))
    : (De.styles[e] = E(E({}, De.styles[e] || {}), a)),
    e === 'fas' && el('fa', n);
}
var fi,
  ci,
  di,
  vt = De.styles,
  ih = De.shims,
  ah =
    ((fi = {}),
    ne(fi, U, Object.values(Or[U])),
    ne(fi, X, Object.values(Or[X])),
    fi),
  du = null,
  zd = {},
  Ad = {},
  Id = {},
  Ld = {},
  jd = {},
  oh =
    ((ci = {}),
    ne(ci, U, Object.keys(Pr[U])),
    ne(ci, X, Object.keys(Pr[X])),
    ci);
function lh(e) {
  return ~Uv.indexOf(e);
}
function uh(e, n) {
  var t = n.split('-'),
    r = t[0],
    i = t.slice(1).join('-');
  return r === e && i !== '' && !lh(i) ? i : null;
}
var Rd = function () {
  var n = function (a) {
    return Ja(
      vt,
      function (o, l, u) {
        return (o[u] = Ja(l, a, {})), o;
      },
      {}
    );
  };
  (zd = n(function (i, a, o) {
    if ((a[3] && (i[a[3]] = o), a[2])) {
      var l = a[2].filter(function (u) {
        return typeof u == 'number';
      });
      l.forEach(function (u) {
        i[u.toString(16)] = o;
      });
    }
    return i;
  })),
    (Ad = n(function (i, a, o) {
      if (((i[o] = o), a[2])) {
        var l = a[2].filter(function (u) {
          return typeof u == 'string';
        });
        l.forEach(function (u) {
          i[u] = o;
        });
      }
      return i;
    })),
    (jd = n(function (i, a, o) {
      var l = a[2];
      return (
        (i[o] = o),
        l.forEach(function (u) {
          i[u] = o;
        }),
        i
      );
    }));
  var t = 'far' in vt || O.autoFetchSvg,
    r = Ja(
      ih,
      function (i, a) {
        var o = a[0],
          l = a[1],
          u = a[2];
        return (
          l === 'far' && !t && (l = 'fas'),
          typeof o == 'string' && (i.names[o] = { prefix: l, iconName: u }),
          typeof o == 'number' &&
            (i.unicodes[o.toString(16)] = { prefix: l, iconName: u }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (Id = r.names),
    (Ld = r.unicodes),
    (du = wa(O.styleDefault, { family: O.familyDefault }));
};
Bv(function (e) {
  du = wa(e.styleDefault, { family: O.familyDefault });
});
Rd();
function pu(e, n) {
  return (zd[e] || {})[n];
}
function sh(e, n) {
  return (Ad[e] || {})[n];
}
function Vn(e, n) {
  return (jd[e] || {})[n];
}
function Md(e) {
  return Id[e] || { prefix: null, iconName: null };
}
function fh(e) {
  var n = Ld[e],
    t = pu('fas', e);
  return (
    n ||
    (t ? { prefix: 'fas', iconName: t } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function zn() {
  return du;
}
var mu = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function wa(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = n.family,
    r = t === void 0 ? U : t,
    i = Pr[r][e],
    a = Nr[r][e] || Nr[r][i],
    o = e in De.styles ? e : null;
  return a || o || null;
}
var Fs =
  ((di = {}), ne(di, U, Object.keys(Or[U])), ne(di, X, Object.keys(Or[X])), di);
function ka(e) {
  var n,
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = t.skipLookups,
    i = r === void 0 ? !1 : r,
    a =
      ((n = {}),
      ne(n, U, ''.concat(O.cssPrefix, '-').concat(U)),
      ne(n, X, ''.concat(O.cssPrefix, '-').concat(X)),
      n),
    o = null,
    l = U;
  (e.includes(a[U]) ||
    e.some(function (s) {
      return Fs[U].includes(s);
    })) &&
    (l = U),
    (e.includes(a[X]) ||
      e.some(function (s) {
        return Fs[X].includes(s);
      })) &&
      (l = X);
  var u = e.reduce(function (s, c) {
    var m = uh(O.cssPrefix, c);
    if (
      (vt[c]
        ? ((c = ah[l].includes(c) ? Rv[l][c] : c), (o = c), (s.prefix = c))
        : oh[l].indexOf(c) > -1
        ? ((o = c), (s.prefix = wa(c, { family: l })))
        : m
        ? (s.iconName = m)
        : c !== O.replacementClass &&
          c !== a[U] &&
          c !== a[X] &&
          s.rest.push(c),
      !i && s.prefix && s.iconName)
    ) {
      var v = o === 'fa' ? Md(s.iconName) : {},
        h = Vn(s.prefix, s.iconName);
      v.prefix && (o = null),
        (s.iconName = v.iconName || h || s.iconName),
        (s.prefix = v.prefix || s.prefix),
        s.prefix === 'far' &&
          !vt.far &&
          vt.fas &&
          !O.autoFetchSvg &&
          (s.prefix = 'fas');
    }
    return s;
  }, mu());
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (u.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (u.prefix = 'fad'),
    !u.prefix &&
      l === X &&
      (vt.fass || O.autoFetchSvg) &&
      ((u.prefix = 'fass'),
      (u.iconName = Vn(u.prefix, u.iconName) || u.iconName)),
    (u.prefix === 'fa' || o === 'fa') && (u.prefix = zn() || 'fas'),
    u
  );
}
var ch = (function () {
    function e() {
      Ev(this, e), (this.definitions = {});
    }
    return (
      Cv(e, [
        {
          key: 'add',
          value: function () {
            for (
              var t = this, r = arguments.length, i = new Array(r), a = 0;
              a < r;
              a++
            )
              i[a] = arguments[a];
            var o = i.reduce(this._pullDefinitions, {});
            Object.keys(o).forEach(function (l) {
              (t.definitions[l] = E(E({}, t.definitions[l] || {}), o[l])),
                el(l, o[l]);
              var u = Or[U][l];
              u && el(u, o[l]), Rd();
            });
          },
        },
        {
          key: 'reset',
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: '_pullDefinitions',
          value: function (t, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (a) {
                var o = i[a],
                  l = o.prefix,
                  u = o.iconName,
                  s = o.icon,
                  c = s[2];
                t[l] || (t[l] = {}),
                  c.length > 0 &&
                    c.forEach(function (m) {
                      typeof m == 'string' && (t[l][m] = s);
                    }),
                  (t[l][u] = s);
              }),
              t
            );
          },
        },
      ]),
      e
    );
  })(),
  Ds = [],
  ht = {},
  Ct = {},
  dh = Object.keys(Ct);
function ph(e, n) {
  var t = n.mixoutsTo;
  return (
    (Ds = e),
    (ht = {}),
    Object.keys(Ct).forEach(function (r) {
      dh.indexOf(r) === -1 && delete Ct[r];
    }),
    Ds.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (o) {
          typeof i[o] == 'function' && (t[o] = i[o]),
            Zi(i[o]) === 'object' &&
              Object.keys(i[o]).forEach(function (l) {
                t[o] || (t[o] = {}), (t[o][l] = i[o][l]);
              });
        }),
        r.hooks)
      ) {
        var a = r.hooks();
        Object.keys(a).forEach(function (o) {
          ht[o] || (ht[o] = []), ht[o].push(a[o]);
        });
      }
      r.provides && r.provides(Ct);
    }),
    t
  );
}
function nl(e, n) {
  for (
    var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), i = 2;
    i < t;
    i++
  )
    r[i - 2] = arguments[i];
  var a = ht[e] || [];
  return (
    a.forEach(function (o) {
      n = o.apply(null, [n].concat(r));
    }),
    n
  );
}
function qn(e) {
  for (
    var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
    r < n;
    r++
  )
    t[r - 1] = arguments[r];
  var i = ht[e] || [];
  i.forEach(function (a) {
    a.apply(null, t);
  });
}
function ln() {
  var e = arguments[0],
    n = Array.prototype.slice.call(arguments, 1);
  return Ct[e] ? Ct[e].apply(null, n) : void 0;
}
function tl(e) {
  e.prefix === 'fa' && (e.prefix = 'fas');
  var n = e.iconName,
    t = e.prefix || zn();
  if (n)
    return (n = Vn(t, n) || n), Ms(bd.definitions, t, n) || Ms(De.styles, t, n);
}
var bd = new ch(),
  mh = function () {
    (O.autoReplaceSvg = !1), (O.observeMutations = !1), qn('noAuto');
  },
  vh = {
    i2svg: function () {
      var n =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return sn
        ? (qn('beforeI2svg', n), ln('pseudoElements2svg', n), ln('i2svg', n))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var n =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = n.autoReplaceSvgRoot;
      O.autoReplaceSvg === !1 && (O.autoReplaceSvg = !0),
        (O.observeMutations = !0),
        eh(function () {
          gh({ autoReplaceSvgRoot: t }), qn('watch', n);
        });
    },
  },
  hh = {
    icon: function (n) {
      if (n === null) return null;
      if (Zi(n) === 'object' && n.prefix && n.iconName)
        return {
          prefix: n.prefix,
          iconName: Vn(n.prefix, n.iconName) || n.iconName,
        };
      if (Array.isArray(n) && n.length === 2) {
        var t = n[1].indexOf('fa-') === 0 ? n[1].slice(3) : n[1],
          r = wa(n[0]);
        return { prefix: r, iconName: Vn(r, t) || t };
      }
      if (
        typeof n == 'string' &&
        (n.indexOf(''.concat(O.cssPrefix, '-')) > -1 || n.match(Mv))
      ) {
        var i = ka(n.split(' '), { skipLookups: !0 });
        return {
          prefix: i.prefix || zn(),
          iconName: Vn(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof n == 'string') {
        var a = zn();
        return { prefix: a, iconName: Vn(a, n) || n };
      }
    },
  },
  Ne = {
    noAuto: mh,
    config: O,
    dom: vh,
    parse: hh,
    library: bd,
    findIconDefinition: tl,
    toHtml: Fr,
  },
  gh = function () {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = n.autoReplaceSvgRoot,
      r = t === void 0 ? H : t;
    (Object.keys(De.styles).length > 0 || O.autoFetchSvg) &&
      sn &&
      O.autoReplaceSvg &&
      Ne.dom.i2svg({ node: r });
  };
function xa(e, n) {
  return (
    Object.defineProperty(e, 'abstract', { get: n }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (r) {
          return Fr(r);
        });
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (sn) {
          var r = H.createElement('div');
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function yh(e) {
  var n = e.children,
    t = e.main,
    r = e.mask,
    i = e.attributes,
    a = e.styles,
    o = e.transform;
  if (cu(o) && t.found && !r.found) {
    var l = t.width,
      u = t.height,
      s = { x: l / u / 2, y: 0.5 };
    i.style = ya(
      E(
        E({}, a),
        {},
        {
          'transform-origin': ''
            .concat(s.x + o.x / 16, 'em ')
            .concat(s.y + o.y / 16, 'em'),
        }
      )
    );
  }
  return [{ tag: 'svg', attributes: i, children: n }];
}
function wh(e) {
  var n = e.prefix,
    t = e.iconName,
    r = e.children,
    i = e.attributes,
    a = e.symbol,
    o = a === !0 ? ''.concat(n, '-').concat(O.cssPrefix, '-').concat(t) : a;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [
        { tag: 'symbol', attributes: E(E({}, i), {}, { id: o }), children: r },
      ],
    },
  ];
}
function vu(e) {
  var n = e.icons,
    t = n.main,
    r = n.mask,
    i = e.prefix,
    a = e.iconName,
    o = e.transform,
    l = e.symbol,
    u = e.title,
    s = e.maskId,
    c = e.titleId,
    m = e.extra,
    v = e.watchable,
    h = v === void 0 ? !1 : v,
    w = r.found ? r : t,
    k = w.width,
    z = w.height,
    d = i === 'fak',
    f = [O.replacementClass, a ? ''.concat(O.cssPrefix, '-').concat(a) : '']
      .filter(function (b) {
        return m.classes.indexOf(b) === -1;
      })
      .filter(function (b) {
        return b !== '' || !!b;
      })
      .concat(m.classes)
      .join(' '),
    p = {
      children: [],
      attributes: E(
        E({}, m.attributes),
        {},
        {
          'data-prefix': i,
          'data-icon': a,
          class: f,
          role: m.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(k, ' ').concat(z),
        }
      ),
    },
    g =
      d && !~m.classes.indexOf('fa-fw')
        ? { width: ''.concat((k / z) * 16 * 0.0625, 'em') }
        : {};
  h && (p.attributes[Jn] = ''),
    u &&
      (p.children.push({
        tag: 'title',
        attributes: {
          id: p.attributes['aria-labelledby'] || 'title-'.concat(c || zr()),
        },
        children: [u],
      }),
      delete p.attributes.title);
  var x = E(
      E({}, p),
      {},
      {
        prefix: i,
        iconName: a,
        main: t,
        mask: r,
        maskId: s,
        transform: o,
        symbol: l,
        styles: E(E({}, g), m.styles),
      }
    ),
    _ =
      r.found && t.found
        ? ln('generateAbstractMask', x) || { children: [], attributes: {} }
        : ln('generateAbstractIcon', x) || { children: [], attributes: {} },
    P = _.children,
    T = _.attributes;
  return (x.children = P), (x.attributes = T), l ? wh(x) : yh(x);
}
function $s(e) {
  var n = e.content,
    t = e.width,
    r = e.height,
    i = e.transform,
    a = e.title,
    o = e.extra,
    l = e.watchable,
    u = l === void 0 ? !1 : l,
    s = E(
      E(E({}, o.attributes), a ? { title: a } : {}),
      {},
      { class: o.classes.join(' ') }
    );
  u && (s[Jn] = '');
  var c = E({}, o.styles);
  cu(i) &&
    ((c.transform = Gv({
      transform: i,
      startCentered: !0,
      width: t,
      height: r,
    })),
    (c['-webkit-transform'] = c.transform));
  var m = ya(c);
  m.length > 0 && (s.style = m);
  var v = [];
  return (
    v.push({ tag: 'span', attributes: s, children: [n] }),
    a &&
      v.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [a] }),
    v
  );
}
function kh(e) {
  var n = e.content,
    t = e.title,
    r = e.extra,
    i = E(
      E(E({}, r.attributes), t ? { title: t } : {}),
      {},
      { class: r.classes.join(' ') }
    ),
    a = ya(r.styles);
  a.length > 0 && (i.style = a);
  var o = [];
  return (
    o.push({ tag: 'span', attributes: i, children: [n] }),
    t &&
      o.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [t] }),
    o
  );
}
var qa = De.styles;
function rl(e) {
  var n = e[0],
    t = e[1],
    r = e.slice(4),
    i = au(r, 1),
    a = i[0],
    o = null;
  return (
    Array.isArray(a)
      ? (o = {
          tag: 'g',
          attributes: { class: ''.concat(O.cssPrefix, '-').concat(Hn.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(O.cssPrefix, '-').concat(Hn.SECONDARY),
                fill: 'currentColor',
                d: a[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(O.cssPrefix, '-').concat(Hn.PRIMARY),
                fill: 'currentColor',
                d: a[1],
              },
            },
          ],
        })
      : (o = { tag: 'path', attributes: { fill: 'currentColor', d: a } }),
    { found: !0, width: n, height: t, icon: o }
  );
}
var xh = { found: !1, width: 512, height: 512 };
function Sh(e, n) {
  !Ed &&
    !O.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(n, '" is missing.')
    );
}
function il(e, n) {
  var t = n;
  return (
    n === 'fa' && O.styleDefault !== null && (n = zn()),
    new Promise(function (r, i) {
      if ((ln('missingIconAbstract'), t === 'fa')) {
        var a = Md(e) || {};
        (e = a.iconName || e), (n = a.prefix || n);
      }
      if (e && n && qa[n] && qa[n][e]) {
        var o = qa[n][e];
        return r(rl(o));
      }
      Sh(e, n),
        r(
          E(
            E({}, xh),
            {},
            {
              icon:
                O.showMissingIcons && e ? ln('missingIconAbstract') || {} : {},
            }
          )
        );
    })
  );
}
var Us = function () {},
  al =
    O.measurePerformance && ii && ii.mark && ii.measure
      ? ii
      : { mark: Us, measure: Us },
  Zt = 'FA "6.5.1"',
  Eh = function (n) {
    return (
      al.mark(''.concat(Zt, ' ').concat(n, ' begins')),
      function () {
        return Fd(n);
      }
    );
  },
  Fd = function (n) {
    al.mark(''.concat(Zt, ' ').concat(n, ' ends')),
      al.measure(
        ''.concat(Zt, ' ').concat(n),
        ''.concat(Zt, ' ').concat(n, ' begins'),
        ''.concat(Zt, ' ').concat(n, ' ends')
      );
  },
  hu = { begin: Eh, end: Fd },
  _i = function () {};
function Ws(e) {
  var n = e.getAttribute ? e.getAttribute(Jn) : null;
  return typeof n == 'string';
}
function Ch(e) {
  var n = e.getAttribute ? e.getAttribute(lu) : null,
    t = e.getAttribute ? e.getAttribute(uu) : null;
  return n && t;
}
function _h(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(O.replacementClass)
  );
}
function Ph() {
  if (O.autoReplaceSvg === !0) return Pi.replace;
  var e = Pi[O.autoReplaceSvg];
  return e || Pi.replace;
}
function Nh(e) {
  return H.createElementNS('http://www.w3.org/2000/svg', e);
}
function Oh(e) {
  return H.createElement(e);
}
function Dd(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = n.ceFn,
    r = t === void 0 ? (e.tag === 'svg' ? Nh : Oh) : t;
  if (typeof e == 'string') return H.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (o) {
    i.setAttribute(o, e.attributes[o]);
  });
  var a = e.children || [];
  return (
    a.forEach(function (o) {
      i.appendChild(Dd(o, { ceFn: r }));
    }),
    i
  );
}
function Th(e) {
  var n = ' '.concat(e.outerHTML, ' ');
  return (n = ''.concat(n, 'Font Awesome fontawesome.com ')), n;
}
var Pi = {
  replace: function (n) {
    var t = n[0];
    if (t.parentNode)
      if (
        (n[1].forEach(function (i) {
          t.parentNode.insertBefore(Dd(i), t);
        }),
        t.getAttribute(Jn) === null && O.keepOriginalSource)
      ) {
        var r = H.createComment(Th(t));
        t.parentNode.replaceChild(r, t);
      } else t.remove();
  },
  nest: function (n) {
    var t = n[0],
      r = n[1];
    if (~fu(t).indexOf(O.replacementClass)) return Pi.replace(n);
    var i = new RegExp(''.concat(O.cssPrefix, '-.*'));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var a = r[0].attributes.class.split(' ').reduce(
        function (l, u) {
          return (
            u === O.replacementClass || u.match(i)
              ? l.toSvg.push(u)
              : l.toNode.push(u),
            l
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = a.toSvg.join(' ')),
        a.toNode.length === 0
          ? t.removeAttribute('class')
          : t.setAttribute('class', a.toNode.join(' '));
    }
    var o = r.map(function (l) {
      return Fr(l);
    }).join(`
`);
    t.setAttribute(Jn, ''), (t.innerHTML = o);
  },
};
function Hs(e) {
  e();
}
function $d(e, n) {
  var t = typeof n == 'function' ? n : _i;
  if (e.length === 0) t();
  else {
    var r = Hs;
    O.mutateApproach === Lv && (r = Tn.requestAnimationFrame || Hs),
      r(function () {
        var i = Ph(),
          a = hu.begin('mutate');
        e.map(i), a(), t();
      });
  }
}
var gu = !1;
function Ud() {
  gu = !0;
}
function ol() {
  gu = !1;
}
var qi = null;
function Vs(e) {
  if (Ls && O.observeMutations) {
    var n = e.treeCallback,
      t = n === void 0 ? _i : n,
      r = e.nodeCallback,
      i = r === void 0 ? _i : r,
      a = e.pseudoElementsCallback,
      o = a === void 0 ? _i : a,
      l = e.observeMutationsRoot,
      u = l === void 0 ? H : l;
    (qi = new Ls(function (s) {
      if (!gu) {
        var c = zn();
        Mt(s).forEach(function (m) {
          if (
            (m.type === 'childList' &&
              m.addedNodes.length > 0 &&
              !Ws(m.addedNodes[0]) &&
              (O.searchPseudoElements && o(m.target), t(m.target)),
            m.type === 'attributes' &&
              m.target.parentNode &&
              O.searchPseudoElements &&
              o(m.target.parentNode),
            m.type === 'attributes' &&
              Ws(m.target) &&
              ~$v.indexOf(m.attributeName))
          )
            if (m.attributeName === 'class' && Ch(m.target)) {
              var v = ka(fu(m.target)),
                h = v.prefix,
                w = v.iconName;
              m.target.setAttribute(lu, h || c),
                w && m.target.setAttribute(uu, w);
            } else _h(m.target) && i(m.target);
        });
      }
    })),
      sn &&
        qi.observe(u, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function zh() {
  qi && qi.disconnect();
}
function Ah(e) {
  var n = e.getAttribute('style'),
    t = [];
  return (
    n &&
      (t = n.split(';').reduce(function (r, i) {
        var a = i.split(':'),
          o = a[0],
          l = a.slice(1);
        return o && l.length > 0 && (r[o] = l.join(':').trim()), r;
      }, {})),
    t
  );
}
function Ih(e) {
  var n = e.getAttribute('data-prefix'),
    t = e.getAttribute('data-icon'),
    r = e.innerText !== void 0 ? e.innerText.trim() : '',
    i = ka(fu(e));
  return (
    i.prefix || (i.prefix = zn()),
    n && t && ((i.prefix = n), (i.iconName = t)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          sh(i.prefix, e.innerText) || pu(i.prefix, qo(e.innerText))),
      !i.iconName &&
        O.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function Lh(e) {
  var n = Mt(e.attributes).reduce(function (i, a) {
      return (
        i.name !== 'class' && i.name !== 'style' && (i[a.name] = a.value), i
      );
    }, {}),
    t = e.getAttribute('title'),
    r = e.getAttribute('data-fa-title-id');
  return (
    O.autoA11y &&
      (t
        ? (n['aria-labelledby'] = ''
            .concat(O.replacementClass, '-title-')
            .concat(r || zr()))
        : ((n['aria-hidden'] = 'true'), (n.focusable = 'false'))),
    n
  );
}
function jh() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ye,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Bs(e) {
  var n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    t = Ih(e),
    r = t.iconName,
    i = t.prefix,
    a = t.rest,
    o = Lh(e),
    l = nl('parseNodeAttributes', {}, e),
    u = n.styleParser ? Ah(e) : [];
  return E(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: i,
      transform: Ye,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: a, styles: u, attributes: o },
    },
    l
  );
}
var Rh = De.styles;
function Wd(e) {
  var n = O.autoReplaceSvg === 'nest' ? Bs(e, { styleParser: !1 }) : Bs(e);
  return ~n.extra.classes.indexOf(Cd)
    ? ln('generateLayersText', e, n)
    : ln('generateSvgReplacementMutation', e, n);
}
var An = new Set();
su.map(function (e) {
  An.add('fa-'.concat(e));
});
Object.keys(Pr[U]).map(An.add.bind(An));
Object.keys(Pr[X]).map(An.add.bind(An));
An = Mr(An);
function Ys(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!sn) return Promise.resolve();
  var t = H.documentElement.classList,
    r = function (m) {
      return t.add(''.concat(js, '-').concat(m));
    },
    i = function (m) {
      return t.remove(''.concat(js, '-').concat(m));
    },
    a = O.autoFetchSvg
      ? An
      : su
          .map(function (c) {
            return 'fa-'.concat(c);
          })
          .concat(Object.keys(Rh));
  a.includes('fa') || a.push('fa');
  var o = ['.'.concat(Cd, ':not([').concat(Jn, '])')]
    .concat(
      a.map(function (c) {
        return '.'.concat(c, ':not([').concat(Jn, '])');
      })
    )
    .join(', ');
  if (o.length === 0) return Promise.resolve();
  var l = [];
  try {
    l = Mt(e.querySelectorAll(o));
  } catch {}
  if (l.length > 0) r('pending'), i('complete');
  else return Promise.resolve();
  var u = hu.begin('onTree'),
    s = l.reduce(function (c, m) {
      try {
        var v = Wd(m);
        v && c.push(v);
      } catch (h) {
        Ed || (h.name === 'MissingIcon' && console.error(h));
      }
      return c;
    }, []);
  return new Promise(function (c, m) {
    Promise.all(s)
      .then(function (v) {
        $d(v, function () {
          r('active'),
            r('complete'),
            i('pending'),
            typeof n == 'function' && n(),
            u(),
            c();
        });
      })
      .catch(function (v) {
        u(), m(v);
      });
  });
}
function Mh(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Wd(e).then(function (t) {
    t && $d([t], n);
  });
}
function bh(e) {
  return function (n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (n || {}).icon ? n : tl(n || {}),
      i = t.mask;
    return (
      i && (i = (i || {}).icon ? i : tl(i || {})),
      e(r, E(E({}, t), {}, { mask: i }))
    );
  };
}
var Fh = function (n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = t.transform,
      i = r === void 0 ? Ye : r,
      a = t.symbol,
      o = a === void 0 ? !1 : a,
      l = t.mask,
      u = l === void 0 ? null : l,
      s = t.maskId,
      c = s === void 0 ? null : s,
      m = t.title,
      v = m === void 0 ? null : m,
      h = t.titleId,
      w = h === void 0 ? null : h,
      k = t.classes,
      z = k === void 0 ? [] : k,
      d = t.attributes,
      f = d === void 0 ? {} : d,
      p = t.styles,
      g = p === void 0 ? {} : p;
    if (n) {
      var x = n.prefix,
        _ = n.iconName,
        P = n.icon;
      return xa(E({ type: 'icon' }, n), function () {
        return (
          qn('beforeDOMElementCreation', { iconDefinition: n, params: t }),
          O.autoA11y &&
            (v
              ? (f['aria-labelledby'] = ''
                  .concat(O.replacementClass, '-title-')
                  .concat(w || zr()))
              : ((f['aria-hidden'] = 'true'), (f.focusable = 'false'))),
          vu({
            icons: {
              main: rl(P),
              mask: u
                ? rl(u.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: x,
            iconName: _,
            transform: E(E({}, Ye), i),
            symbol: o,
            title: v,
            maskId: c,
            titleId: w,
            extra: { attributes: f, styles: g, classes: z },
          })
        );
      });
    }
  },
  Dh = {
    mixout: function () {
      return { icon: bh(Fh) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (t) {
          return (t.treeCallback = Ys), (t.nodeCallback = Mh), t;
        },
      };
    },
    provides: function (n) {
      (n.i2svg = function (t) {
        var r = t.node,
          i = r === void 0 ? H : r,
          a = t.callback,
          o = a === void 0 ? function () {} : a;
        return Ys(i, o);
      }),
        (n.generateSvgReplacementMutation = function (t, r) {
          var i = r.iconName,
            a = r.title,
            o = r.titleId,
            l = r.prefix,
            u = r.transform,
            s = r.symbol,
            c = r.mask,
            m = r.maskId,
            v = r.extra;
          return new Promise(function (h, w) {
            Promise.all([
              il(i, l),
              c.iconName
                ? il(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (k) {
                var z = au(k, 2),
                  d = z[0],
                  f = z[1];
                h([
                  t,
                  vu({
                    icons: { main: d, mask: f },
                    prefix: l,
                    iconName: i,
                    transform: u,
                    symbol: s,
                    maskId: m,
                    title: a,
                    titleId: o,
                    extra: v,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(w);
          });
        }),
        (n.generateAbstractIcon = function (t) {
          var r = t.children,
            i = t.attributes,
            a = t.main,
            o = t.transform,
            l = t.styles,
            u = ya(l);
          u.length > 0 && (i.style = u);
          var s;
          return (
            cu(o) &&
              (s = ln('generateAbstractTransformGrouping', {
                main: a,
                transform: o,
                containerWidth: a.width,
                iconWidth: a.width,
              })),
            r.push(s || a.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  $h = {
    mixout: function () {
      return {
        layer: function (t) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            a = i === void 0 ? [] : i;
          return xa({ type: 'layer' }, function () {
            qn('beforeDOMElementCreation', { assembler: t, params: r });
            var o = [];
            return (
              t(function (l) {
                Array.isArray(l)
                  ? l.map(function (u) {
                      o = o.concat(u.abstract);
                    })
                  : (o = o.concat(l.abstract));
              }),
              [
                {
                  tag: 'span',
                  attributes: {
                    class: [''.concat(O.cssPrefix, '-layers')]
                      .concat(Mr(a))
                      .join(' '),
                  },
                  children: o,
                },
              ]
            );
          });
        },
      };
    },
  },
  Uh = {
    mixout: function () {
      return {
        counter: function (t) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            a = i === void 0 ? null : i,
            o = r.classes,
            l = o === void 0 ? [] : o,
            u = r.attributes,
            s = u === void 0 ? {} : u,
            c = r.styles,
            m = c === void 0 ? {} : c;
          return xa({ type: 'counter', content: t }, function () {
            return (
              qn('beforeDOMElementCreation', { content: t, params: r }),
              kh({
                content: t.toString(),
                title: a,
                extra: {
                  attributes: s,
                  styles: m,
                  classes: [''.concat(O.cssPrefix, '-layers-counter')].concat(
                    Mr(l)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  Wh = {
    mixout: function () {
      return {
        text: function (t) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            a = i === void 0 ? Ye : i,
            o = r.title,
            l = o === void 0 ? null : o,
            u = r.classes,
            s = u === void 0 ? [] : u,
            c = r.attributes,
            m = c === void 0 ? {} : c,
            v = r.styles,
            h = v === void 0 ? {} : v;
          return xa({ type: 'text', content: t }, function () {
            return (
              qn('beforeDOMElementCreation', { content: t, params: r }),
              $s({
                content: t,
                transform: E(E({}, Ye), a),
                title: l,
                extra: {
                  attributes: m,
                  styles: h,
                  classes: [''.concat(O.cssPrefix, '-layers-text')].concat(
                    Mr(s)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (n) {
      n.generateLayersText = function (t, r) {
        var i = r.title,
          a = r.transform,
          o = r.extra,
          l = null,
          u = null;
        if (kd) {
          var s = parseInt(getComputedStyle(t).fontSize, 10),
            c = t.getBoundingClientRect();
          (l = c.width / s), (u = c.height / s);
        }
        return (
          O.autoA11y && !i && (o.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            t,
            $s({
              content: t.innerHTML,
              width: l,
              height: u,
              transform: a,
              title: i,
              extra: o,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  Hh = new RegExp('"', 'ug'),
  Qs = [1105920, 1112319];
function Vh(e) {
  var n = e.replace(Hh, ''),
    t = rh(n, 0),
    r = t >= Qs[0] && t <= Qs[1],
    i = n.length === 2 ? n[0] === n[1] : !1;
  return { value: qo(i ? n[0] : n), isSecondary: r || i };
}
function Ks(e, n) {
  var t = ''.concat(Iv).concat(n.replace(':', '-'));
  return new Promise(function (r, i) {
    if (e.getAttribute(t) !== null) return r();
    var a = Mt(e.children),
      o = a.filter(function (P) {
        return P.getAttribute(Jo) === n;
      })[0],
      l = Tn.getComputedStyle(e, n),
      u = l.getPropertyValue('font-family').match(bv),
      s = l.getPropertyValue('font-weight'),
      c = l.getPropertyValue('content');
    if (o && !u) return e.removeChild(o), r();
    if (u && c !== 'none' && c !== '') {
      var m = l.getPropertyValue('content'),
        v = ~['Sharp'].indexOf(u[2]) ? X : U,
        h = ~[
          'Solid',
          'Regular',
          'Light',
          'Thin',
          'Duotone',
          'Brands',
          'Kit',
        ].indexOf(u[2])
          ? Nr[v][u[2].toLowerCase()]
          : Fv[v][s],
        w = Vh(m),
        k = w.value,
        z = w.isSecondary,
        d = u[0].startsWith('FontAwesome'),
        f = pu(h, k),
        p = f;
      if (d) {
        var g = fh(k);
        g.iconName && g.prefix && ((f = g.iconName), (h = g.prefix));
      }
      if (
        f &&
        !z &&
        (!o || o.getAttribute(lu) !== h || o.getAttribute(uu) !== p)
      ) {
        e.setAttribute(t, p), o && e.removeChild(o);
        var x = jh(),
          _ = x.extra;
        (_.attributes[Jo] = n),
          il(f, h)
            .then(function (P) {
              var T = vu(
                  E(
                    E({}, x),
                    {},
                    {
                      icons: { main: P, mask: mu() },
                      prefix: h,
                      iconName: p,
                      extra: _,
                      watchable: !0,
                    }
                  )
                ),
                b = H.createElementNS('http://www.w3.org/2000/svg', 'svg');
              n === '::before'
                ? e.insertBefore(b, e.firstChild)
                : e.appendChild(b),
                (b.outerHTML = T.map(function (L) {
                  return Fr(L);
                }).join(`
`)),
                e.removeAttribute(t),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function Bh(e) {
  return Promise.all([Ks(e, '::before'), Ks(e, '::after')]);
}
function Yh(e) {
  return (
    e.parentNode !== document.head &&
    !~jv.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Jo) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  );
}
function Xs(e) {
  if (sn)
    return new Promise(function (n, t) {
      var r = Mt(e.querySelectorAll('*')).filter(Yh).map(Bh),
        i = hu.begin('searchPseudoElements');
      Ud(),
        Promise.all(r)
          .then(function () {
            i(), ol(), n();
          })
          .catch(function () {
            i(), ol(), t();
          });
    });
}
var Qh = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (t) {
          return (t.pseudoElementsCallback = Xs), t;
        },
      };
    },
    provides: function (n) {
      n.pseudoElements2svg = function (t) {
        var r = t.node,
          i = r === void 0 ? H : r;
        O.searchPseudoElements && Xs(i);
      };
    },
  },
  Gs = !1,
  Kh = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Ud(), (Gs = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Vs(nl('mutationObserverCallbacks', {}));
        },
        noAuto: function () {
          zh();
        },
        watch: function (t) {
          var r = t.observeMutationsRoot;
          Gs
            ? ol()
            : Vs(nl('mutationObserverCallbacks', { observeMutationsRoot: r }));
        },
      };
    },
  },
  Zs = function (n) {
    var t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return n
      .toLowerCase()
      .split(' ')
      .reduce(function (r, i) {
        var a = i.toLowerCase().split('-'),
          o = a[0],
          l = a.slice(1).join('-');
        if (o && l === 'h') return (r.flipX = !0), r;
        if (o && l === 'v') return (r.flipY = !0), r;
        if (((l = parseFloat(l)), isNaN(l))) return r;
        switch (o) {
          case 'grow':
            r.size = r.size + l;
            break;
          case 'shrink':
            r.size = r.size - l;
            break;
          case 'left':
            r.x = r.x - l;
            break;
          case 'right':
            r.x = r.x + l;
            break;
          case 'up':
            r.y = r.y - l;
            break;
          case 'down':
            r.y = r.y + l;
            break;
          case 'rotate':
            r.rotate = r.rotate + l;
            break;
        }
        return r;
      }, t);
  },
  Xh = {
    mixout: function () {
      return {
        parse: {
          transform: function (t) {
            return Zs(t);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (t, r) {
          var i = r.getAttribute('data-fa-transform');
          return i && (t.transform = Zs(i)), t;
        },
      };
    },
    provides: function (n) {
      n.generateAbstractTransformGrouping = function (t) {
        var r = t.main,
          i = t.transform,
          a = t.containerWidth,
          o = t.iconWidth,
          l = { transform: 'translate('.concat(a / 2, ' 256)') },
          u = 'translate('.concat(i.x * 32, ', ').concat(i.y * 32, ') '),
          s = 'scale('
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ', ')
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ') '),
          c = 'rotate('.concat(i.rotate, ' 0 0)'),
          m = { transform: ''.concat(u, ' ').concat(s, ' ').concat(c) },
          v = { transform: 'translate('.concat((o / 2) * -1, ' -256)') },
          h = { outer: l, inner: m, path: v };
        return {
          tag: 'g',
          attributes: E({}, h.outer),
          children: [
            {
              tag: 'g',
              attributes: E({}, h.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: E(E({}, r.icon.attributes), h.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  eo = { x: 0, y: 0, width: '100%', height: '100%' };
function Js(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || n) && (e.attributes.fill = 'black'), e
  );
}
function Gh(e) {
  return e.tag === 'g' ? e.children : [e];
}
var Zh = {
    hooks: function () {
      return {
        parseNodeAttributes: function (t, r) {
          var i = r.getAttribute('data-fa-mask'),
            a = i
              ? ka(
                  i.split(' ').map(function (o) {
                    return o.trim();
                  })
                )
              : mu();
          return (
            a.prefix || (a.prefix = zn()),
            (t.mask = a),
            (t.maskId = r.getAttribute('data-fa-mask-id')),
            t
          );
        },
      };
    },
    provides: function (n) {
      n.generateAbstractMask = function (t) {
        var r = t.children,
          i = t.attributes,
          a = t.main,
          o = t.mask,
          l = t.maskId,
          u = t.transform,
          s = a.width,
          c = a.icon,
          m = o.width,
          v = o.icon,
          h = Xv({ transform: u, containerWidth: m, iconWidth: s }),
          w = { tag: 'rect', attributes: E(E({}, eo), {}, { fill: 'white' }) },
          k = c.children ? { children: c.children.map(Js) } : {},
          z = {
            tag: 'g',
            attributes: E({}, h.inner),
            children: [
              Js(
                E({ tag: c.tag, attributes: E(E({}, c.attributes), h.path) }, k)
              ),
            ],
          },
          d = { tag: 'g', attributes: E({}, h.outer), children: [z] },
          f = 'mask-'.concat(l || zr()),
          p = 'clip-'.concat(l || zr()),
          g = {
            tag: 'mask',
            attributes: E(
              E({}, eo),
              {},
              {
                id: f,
                maskUnits: 'userSpaceOnUse',
                maskContentUnits: 'userSpaceOnUse',
              }
            ),
            children: [w, d],
          },
          x = {
            tag: 'defs',
            children: [
              { tag: 'clipPath', attributes: { id: p }, children: Gh(v) },
              g,
            ],
          };
        return (
          r.push(x, {
            tag: 'rect',
            attributes: E(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(p, ')'),
                mask: 'url(#'.concat(f, ')'),
              },
              eo
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  Jh = {
    provides: function (n) {
      var t = !1;
      Tn.matchMedia &&
        (t = Tn.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (n.missingIconAbstract = function () {
          var r = [],
            i = { fill: 'currentColor' },
            a = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
          r.push({
            tag: 'path',
            attributes: E(
              E({}, i),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
              }
            ),
          });
          var o = E(E({}, a), {}, { attributeName: 'opacity' }),
            l = {
              tag: 'circle',
              attributes: E(E({}, i), {}, { cx: '256', cy: '364', r: '28' }),
              children: [],
            };
          return (
            t ||
              l.children.push(
                {
                  tag: 'animate',
                  attributes: E(
                    E({}, a),
                    {},
                    { attributeName: 'r', values: '28;14;28;28;14;28;' }
                  ),
                },
                {
                  tag: 'animate',
                  attributes: E(E({}, o), {}, { values: '1;0;1;1;0;1;' }),
                }
              ),
            r.push(l),
            r.push({
              tag: 'path',
              attributes: E(
                E({}, i),
                {},
                {
                  opacity: '1',
                  d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                }
              ),
              children: t
                ? []
                : [
                    {
                      tag: 'animate',
                      attributes: E(E({}, o), {}, { values: '1;0;0;0;0;1;' }),
                    },
                  ],
            }),
            t ||
              r.push({
                tag: 'path',
                attributes: E(
                  E({}, i),
                  {},
                  {
                    opacity: '0',
                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                  }
                ),
                children: [
                  {
                    tag: 'animate',
                    attributes: E(E({}, o), {}, { values: '0;0;1;1;0;0;' }),
                  },
                ],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: r }
          );
        });
    },
  },
  qh = {
    hooks: function () {
      return {
        parseNodeAttributes: function (t, r) {
          var i = r.getAttribute('data-fa-symbol'),
            a = i === null ? !1 : i === '' ? !0 : i;
          return (t.symbol = a), t;
        },
      };
    },
  },
  e0 = [Jv, Dh, $h, Uh, Wh, Qh, Kh, Xh, Zh, Jh, qh];
ph(e0, { mixoutsTo: Ne });
Ne.noAuto;
Ne.config;
Ne.library;
Ne.dom;
var ll = Ne.parse;
Ne.findIconDefinition;
Ne.toHtml;
var n0 = Ne.icon;
Ne.layer;
Ne.text;
Ne.counter;
var Hd = { exports: {} },
  t0 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  r0 = t0,
  i0 = r0;
function Vd() {}
function Bd() {}
Bd.resetWarningCache = Vd;
var a0 = function () {
  function e(r, i, a, o, l, u) {
    if (u !== i0) {
      var s = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((s.name = 'Invariant Violation'), s);
    }
  }
  e.isRequired = e;
  function n() {
    return e;
  }
  var t = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: n,
    element: e,
    elementType: e,
    instanceOf: n,
    node: e,
    objectOf: n,
    oneOf: n,
    oneOfType: n,
    shape: n,
    exact: n,
    checkPropTypes: Bd,
    resetWarningCache: Vd,
  };
  return (t.PropTypes = t), t;
};
Hd.exports = a0();
var o0 = Hd.exports;
const j = nf(o0);
function qs(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function yn(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? qs(Object(t), !0).forEach(function (r) {
          gt(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : qs(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function ea(e) {
  '@babel/helpers - typeof';
  return (
    (ea =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == 'function' &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? 'symbol'
              : typeof n;
          }),
    ea(e)
  );
}
function gt(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = t),
    e
  );
}
function l0(e, n) {
  if (e == null) return {};
  var t = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(n.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function u0(e, n) {
  if (e == null) return {};
  var t = l0(e, n),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(n.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (t[r] = e[r]);
  }
  return t;
}
function ul(e) {
  return s0(e) || f0(e) || c0(e) || d0();
}
function s0(e) {
  if (Array.isArray(e)) return sl(e);
}
function f0(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function c0(e, n) {
  if (e) {
    if (typeof e == 'string') return sl(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return sl(e, n);
  }
}
function sl(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function d0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function p0(e) {
  var n,
    t = e.beat,
    r = e.fade,
    i = e.beatFade,
    a = e.bounce,
    o = e.shake,
    l = e.flash,
    u = e.spin,
    s = e.spinPulse,
    c = e.spinReverse,
    m = e.pulse,
    v = e.fixedWidth,
    h = e.inverse,
    w = e.border,
    k = e.listItem,
    z = e.flip,
    d = e.size,
    f = e.rotation,
    p = e.pull,
    g =
      ((n = {
        'fa-beat': t,
        'fa-fade': r,
        'fa-beat-fade': i,
        'fa-bounce': a,
        'fa-shake': o,
        'fa-flash': l,
        'fa-spin': u,
        'fa-spin-reverse': c,
        'fa-spin-pulse': s,
        'fa-pulse': m,
        'fa-fw': v,
        'fa-inverse': h,
        'fa-border': w,
        'fa-li': k,
        'fa-flip': z === !0,
        'fa-flip-horizontal': z === 'horizontal' || z === 'both',
        'fa-flip-vertical': z === 'vertical' || z === 'both',
      }),
      gt(n, 'fa-'.concat(d), typeof d < 'u' && d !== null),
      gt(n, 'fa-rotate-'.concat(f), typeof f < 'u' && f !== null && f !== 0),
      gt(n, 'fa-pull-'.concat(p), typeof p < 'u' && p !== null),
      gt(n, 'fa-swap-opacity', e.swapOpacity),
      n);
  return Object.keys(g)
    .map(function (x) {
      return g[x] ? x : null;
    })
    .filter(function (x) {
      return x;
    });
}
function m0(e) {
  return (e = e - 0), e === e;
}
function Yd(e) {
  return m0(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (n, t) {
        return t ? t.toUpperCase() : '';
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var v0 = ['style'];
function h0(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function g0(e) {
  return e
    .split(';')
    .map(function (n) {
      return n.trim();
    })
    .filter(function (n) {
      return n;
    })
    .reduce(function (n, t) {
      var r = t.indexOf(':'),
        i = Yd(t.slice(0, r)),
        a = t.slice(r + 1).trim();
      return i.startsWith('webkit') ? (n[h0(i)] = a) : (n[i] = a), n;
    }, {});
}
function Qd(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof n == 'string') return n;
  var r = (n.children || []).map(function (u) {
      return Qd(e, u);
    }),
    i = Object.keys(n.attributes || {}).reduce(
      function (u, s) {
        var c = n.attributes[s];
        switch (s) {
          case 'class':
            (u.attrs.className = c), delete n.attributes.class;
            break;
          case 'style':
            u.attrs.style = g0(c);
            break;
          default:
            s.indexOf('aria-') === 0 || s.indexOf('data-') === 0
              ? (u.attrs[s.toLowerCase()] = c)
              : (u.attrs[Yd(s)] = c);
        }
        return u;
      },
      { attrs: {} }
    ),
    a = t.style,
    o = a === void 0 ? {} : a,
    l = u0(t, v0);
  return (
    (i.attrs.style = yn(yn({}, i.attrs.style), o)),
    e.apply(void 0, [n.tag, yn(yn({}, i.attrs), l)].concat(ul(r)))
  );
}
var Kd = !1;
try {
  Kd = !0;
} catch {}
function y0() {
  if (!Kd && console && typeof console.error == 'function') {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ef(e) {
  if (e && ea(e) === 'object' && e.prefix && e.iconName && e.icon) return e;
  if (ll.icon) return ll.icon(e);
  if (e === null) return null;
  if (e && ea(e) === 'object' && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == 'string') return { prefix: 'fas', iconName: e };
}
function no(e, n) {
  return (Array.isArray(n) && n.length > 0) || (!Array.isArray(n) && n)
    ? gt({}, e, n)
    : {};
}
var In = ml.forwardRef(function (e, n) {
  var t = e.icon,
    r = e.mask,
    i = e.symbol,
    a = e.className,
    o = e.title,
    l = e.titleId,
    u = e.maskId,
    s = ef(t),
    c = no('classes', [].concat(ul(p0(e)), ul(a.split(' ')))),
    m = no(
      'transform',
      typeof e.transform == 'string' ? ll.transform(e.transform) : e.transform
    ),
    v = no('mask', ef(r)),
    h = n0(
      s,
      yn(
        yn(yn(yn({}, c), m), v),
        {},
        { symbol: i, title: o, titleId: l, maskId: u }
      )
    );
  if (!h) return y0('Could not find icon', s), null;
  var w = h.abstract,
    k = { ref: n };
  return (
    Object.keys(e).forEach(function (z) {
      In.defaultProps.hasOwnProperty(z) || (k[z] = e[z]);
    }),
    w0(w[0], k)
  );
});
In.displayName = 'FontAwesomeIcon';
In.propTypes = {
  beat: j.bool,
  border: j.bool,
  beatFade: j.bool,
  bounce: j.bool,
  className: j.string,
  fade: j.bool,
  flash: j.bool,
  mask: j.oneOfType([j.object, j.array, j.string]),
  maskId: j.string,
  fixedWidth: j.bool,
  inverse: j.bool,
  flip: j.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: j.oneOfType([j.object, j.array, j.string]),
  listItem: j.bool,
  pull: j.oneOf(['right', 'left']),
  pulse: j.bool,
  rotation: j.oneOf([0, 90, 180, 270]),
  shake: j.bool,
  size: j.oneOf([
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ]),
  spin: j.bool,
  spinPulse: j.bool,
  spinReverse: j.bool,
  symbol: j.oneOfType([j.bool, j.string]),
  title: j.string,
  titleId: j.string,
  transform: j.oneOfType([j.string, j.object]),
  swapOpacity: j.bool,
};
In.defaultProps = {
  border: !1,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var w0 = Qd.bind(null, ml.createElement),
  k0 = {
    prefix: 'fas',
    iconName: 'backward',
    icon: [
      512,
      512,
      [9194],
      'f04a',
      'M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z',
    ],
  },
  x0 = {
    prefix: 'fas',
    iconName: 'circle-info',
    icon: [
      512,
      512,
      ['info-circle'],
      'f05a',
      'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z',
    ],
  },
  S0 = {
    prefix: 'fas',
    iconName: 'plus',
    icon: [
      448,
      512,
      [10133, 61543, 'add'],
      '2b',
      'M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z',
    ],
  },
  E0 = {
    prefix: 'fas',
    iconName: 'circle-plus',
    icon: [
      512,
      512,
      ['plus-circle'],
      'f055',
      'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z',
    ],
  };
function C0({ onNavigate: e, onSignout: n }) {
  const t = S.jsx(In, {
    icon: E0,
    style: {
      fontSize: '60px',
      color: 'rgb(112, 188, 112)',
      margin: '.5rem',
      cursor: 'pointer',
    },
    onClick: () => e('browse-screen'),
  });
  return S.jsx('div', {
    className: 'container',
    children: S.jsxs('div', {
      className: 'row as-flex-start jc-space-between',
      children: [
        S.jsx('button', {
          className: 'logout-button',
          onClick: () => n('sign-out'),
          children: 'Logout',
        }),
        S.jsxs('h1', {
          style: {
            fontSize: '50px',
            color: 'white',
            margin: '10px',
            textShadow: '5px 1px 5px black',
          },
          children: ['My', S.jsx('br', {}), 'Garden'],
        }),
        t,
      ],
    }),
  });
}
function _0() {
  const e = S.jsx(In, { icon: S0, style: { fontSize: '30px' } }),
    n = S.jsx(In, { icon: x0, style: { fontSize: '30px' } }),
    t = [
      {
        id: 1,
        plantName: 'Super spicy thing',
        plantCycle: 'Perenual',
        plantwatering: 'average',
        plantSunlight: ['full sun', 'partial sun'],
        plantOtherName: ['that thing', 'spicy guy'],
      },
      {
        id: 2,
        plantName: 'lil guy',
        plantCycle: 'Perenual',
        plantwatering: 'average',
        plantSunlight: ['full sun'],
        plantOtherName: ['that thing', 'where is it'],
      },
      {
        id: 3,
        plantName: 'Superlous thing',
        plantCycle: 'Perenual',
        plantwatering: 'average',
        plantSunlight: ['full sun'],
        plantOtherName: [],
      },
    ];
  return S.jsx('div', {
    className: 'browse-list-container',
    children: t.map((r) =>
      S.jsx(
        'div',
        {
          className: 'plant-wrapper',
          children: S.jsxs('div', {
            className: 'row',
            children: [
              S.jsx('div', {
                className: 'col-40',
                children: S.jsx('h2', {
                  style: {
                    margin: '5px',
                    fontSize: '25px',
                    overflowWrap: 'break-word',
                    display: 'flex',
                    justifyContent: 'center',
                  },
                  children: r.plantName,
                }),
              }),
              S.jsx('div', {
                className: 'col-40',
                children: S.jsx('img', {
                  alt: 'placeholder peppers',
                  className: 'plant-img',
                }),
              }),
              S.jsxs('div', {
                className: 'col-20',
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                },
                children: [
                  S.jsx('div', { style: { margin: '10px' }, children: e }),
                  S.jsx('div', { children: n }),
                ],
              }),
            ],
          }),
        },
        r.id
      )
    ),
  });
}
function P0({ onNavigate: e }) {
  const n = S.jsx(In, {
    icon: k0,
    style: {
      fontSize: '70px',
      margin: '1rem',
      position: 'absolute',
      left: '0',
      cursor: 'pointer',
    },
    onClick: () => e('my-garden'),
  });
  return S.jsxs('div', {
    className: 'container fd-column jc-center ai-flex-start',
    children: [
      S.jsxs('div', {
        className: 'row jc-space-between',
        children: [
          n,
          S.jsx('div', {
            style: { textAlign: 'center' },
            children: S.jsxs('h1', {
              style: { fontSize: '50px', margin: '5px 20px', width: '90%' },
              children: ['Find your', S.jsx('br', {}), 'plant'],
            }),
          }),
        ],
      }),
      S.jsx('div', { children: S.jsx(_0, {}) }),
    ],
  });
}
function N0() {
  const [e, n] = ta.useState('sign-in');
  function t(r) {
    n(r),
      r === 'sign-out' && (sessionStorage.removeItem('token'), n('sign-in'));
  }
  return S.jsxs('div', {
    className: 'App',
    children: [
      (e === 'sign-in' || e === 'register') &&
        S.jsx('div', { className: 'form-wallpaper' }),
      (e === 'my-garden' || e === 'browse-screen') &&
        S.jsx('div', { className: 'main-wallpaper' }),
      e === 'sign-in' &&
        S.jsx(xv, { onNavigate: t, onSignIn: () => t('my-garden') }),
      e === 'register' && S.jsx(Sv, { onNavigate: t }),
      e === 'my-garden' && S.jsx(C0, { onNavigate: t, onSignout: t }),
      e === 'browse-screen' && S.jsx(P0, { onNavigate: t }),
    ],
  });
}
to.createRoot(document.getElementById('root')).render(
  S.jsx(ml.StrictMode, { children: S.jsx(N0, {}) })
);
