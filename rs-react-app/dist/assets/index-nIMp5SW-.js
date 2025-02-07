var Oc = Object.defineProperty;
var Dc = (P, O, m) =>
  O in P
    ? Oc(P, O, { enumerable: !0, configurable: !0, writable: !0, value: m })
    : (P[O] = m);
var Ot = (P, O, m) => Dc(P, typeof O != 'symbol' ? O + '' : O, m);
(function () {
  const O = document.createElement('link').relList;
  if (O && O.supports && O.supports('modulepreload')) return;
  for (const A of document.querySelectorAll('link[rel="modulepreload"]')) fe(A);
  new MutationObserver((A) => {
    for (const Y of A)
      if (Y.type === 'childList')
        for (const ce of Y.addedNodes)
          ce.tagName === 'LINK' && ce.rel === 'modulepreload' && fe(ce);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(A) {
    const Y = {};
    return (
      A.integrity && (Y.integrity = A.integrity),
      A.referrerPolicy && (Y.referrerPolicy = A.referrerPolicy),
      A.crossOrigin === 'use-credentials'
        ? (Y.credentials = 'include')
        : A.crossOrigin === 'anonymous'
          ? (Y.credentials = 'omit')
          : (Y.credentials = 'same-origin'),
      Y
    );
  }
  function fe(A) {
    if (A.ep) return;
    A.ep = !0;
    const Y = m(A);
    fetch(A.href, Y);
  }
})();
var xi = { exports: {} },
  wr = {},
  Ci = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ca;
function Mc() {
  if (Ca) return M;
  Ca = 1;
  var P = Symbol.for('react.element'),
    O = Symbol.for('react.portal'),
    m = Symbol.for('react.fragment'),
    fe = Symbol.for('react.strict_mode'),
    A = Symbol.for('react.profiler'),
    Y = Symbol.for('react.provider'),
    ce = Symbol.for('react.context'),
    de = Symbol.for('react.forward_ref'),
    $ = Symbol.for('react.suspense'),
    Ce = Symbol.for('react.memo'),
    we = Symbol.for('react.lazy'),
    ee = Symbol.iterator;
  function Z(f) {
    return f === null || typeof f != 'object'
      ? null
      : ((f = (ee && f[ee]) || f['@@iterator']),
        typeof f == 'function' ? f : null);
  }
  var $e = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    We = Object.assign,
    J = {};
  function W(f, v, D) {
    (this.props = f),
      (this.context = v),
      (this.refs = J),
      (this.updater = D || $e);
  }
  (W.prototype.isReactComponent = {}),
    (W.prototype.setState = function (f, v) {
      if (typeof f != 'object' && typeof f != 'function' && f != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, f, v, 'setState');
    }),
    (W.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, 'forceUpdate');
    });
  function yn() {}
  yn.prototype = W.prototype;
  function an(f, v, D) {
    (this.props = f),
      (this.context = v),
      (this.refs = J),
      (this.updater = D || $e);
  }
  var qe = (an.prototype = new yn());
  (qe.constructor = an), We(qe, W.prototype), (qe.isPureReactComponent = !0);
  var Se = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(f, v, D) {
    var I,
      F = {},
      U = null,
      Q = null;
    if (v != null)
      for (I in (v.ref !== void 0 && (Q = v.ref),
      v.key !== void 0 && (U = '' + v.key),
      v))
        be.call(v, I) && !Le.hasOwnProperty(I) && (F[I] = v[I]);
    var B = arguments.length - 2;
    if (B === 1) F.children = D;
    else if (1 < B) {
      for (var q = Array(B), Ue = 0; Ue < B; Ue++) q[Ue] = arguments[Ue + 2];
      F.children = q;
    }
    if (f && f.defaultProps)
      for (I in ((B = f.defaultProps), B)) F[I] === void 0 && (F[I] = B[I]);
    return {
      $$typeof: P,
      type: f,
      key: U,
      ref: Q,
      props: F,
      _owner: Ne.current,
    };
  }
  function Pn(f, v) {
    return {
      $$typeof: P,
      type: f.type,
      key: v,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    };
  }
  function gn(f) {
    return typeof f == 'object' && f !== null && f.$$typeof === P;
  }
  function Yn(f) {
    var v = { '=': '=0', ':': '=2' };
    return (
      '$' +
      f.replace(/[=:]/g, function (D) {
        return v[D];
      })
    );
  }
  var fn = /\/+/g;
  function Fe(f, v) {
    return typeof f == 'object' && f !== null && f.key != null
      ? Yn('' + f.key)
      : v.toString(36);
  }
  function en(f, v, D, I, F) {
    var U = typeof f;
    (U === 'undefined' || U === 'boolean') && (f = null);
    var Q = !1;
    if (f === null) Q = !0;
    else
      switch (U) {
        case 'string':
        case 'number':
          Q = !0;
          break;
        case 'object':
          switch (f.$$typeof) {
            case P:
            case O:
              Q = !0;
          }
      }
    if (Q)
      return (
        (Q = f),
        (F = F(Q)),
        (f = I === '' ? '.' + Fe(Q, 0) : I),
        Se(F)
          ? ((D = ''),
            f != null && (D = f.replace(fn, '$&/') + '/'),
            en(F, v, D, '', function (Ue) {
              return Ue;
            }))
          : F != null &&
            (gn(F) &&
              (F = Pn(
                F,
                D +
                  (!F.key || (Q && Q.key === F.key)
                    ? ''
                    : ('' + F.key).replace(fn, '$&/') + '/') +
                  f
              )),
            v.push(F)),
        1
      );
    if (((Q = 0), (I = I === '' ? '.' : I + ':'), Se(f)))
      for (var B = 0; B < f.length; B++) {
        U = f[B];
        var q = I + Fe(U, B);
        Q += en(U, v, D, q, F);
      }
    else if (((q = Z(f)), typeof q == 'function'))
      for (f = q.call(f), B = 0; !(U = f.next()).done; )
        (U = U.value), (q = I + Fe(U, B++)), (Q += en(U, v, D, q, F));
    else if (U === 'object')
      throw (
        ((v = String(f)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (v === '[object Object]'
              ? 'object with keys {' + Object.keys(f).join(', ') + '}'
              : v) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return Q;
  }
  function cn(f, v, D) {
    if (f == null) return f;
    var I = [],
      F = 0;
    return (
      en(f, I, '', '', function (U) {
        return v.call(D, U, F++);
      }),
      I
    );
  }
  function Te(f) {
    if (f._status === -1) {
      var v = f._result;
      (v = v()),
        v.then(
          function (D) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = D));
          },
          function (D) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = D));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = v));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var re = { current: null },
    S = { transition: null },
    T = {
      ReactCurrentDispatcher: re,
      ReactCurrentBatchConfig: S,
      ReactCurrentOwner: Ne,
    };
  function _() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (M.Children = {
      map: cn,
      forEach: function (f, v, D) {
        cn(
          f,
          function () {
            v.apply(this, arguments);
          },
          D
        );
      },
      count: function (f) {
        var v = 0;
        return (
          cn(f, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (f) {
        return (
          cn(f, function (v) {
            return v;
          }) || []
        );
      },
      only: function (f) {
        if (!gn(f))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return f;
      },
    }),
    (M.Component = W),
    (M.Fragment = m),
    (M.Profiler = A),
    (M.PureComponent = an),
    (M.StrictMode = fe),
    (M.Suspense = $),
    (M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
    (M.act = _),
    (M.cloneElement = function (f, v, D) {
      if (f == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            f +
            '.'
        );
      var I = We({}, f.props),
        F = f.key,
        U = f.ref,
        Q = f._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((U = v.ref), (Q = Ne.current)),
          v.key !== void 0 && (F = '' + v.key),
          f.type && f.type.defaultProps)
        )
          var B = f.type.defaultProps;
        for (q in v)
          be.call(v, q) &&
            !Le.hasOwnProperty(q) &&
            (I[q] = v[q] === void 0 && B !== void 0 ? B[q] : v[q]);
      }
      var q = arguments.length - 2;
      if (q === 1) I.children = D;
      else if (1 < q) {
        B = Array(q);
        for (var Ue = 0; Ue < q; Ue++) B[Ue] = arguments[Ue + 2];
        I.children = B;
      }
      return { $$typeof: P, type: f.type, key: F, ref: U, props: I, _owner: Q };
    }),
    (M.createContext = function (f) {
      return (
        (f = {
          $$typeof: ce,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: Y, _context: f }),
        (f.Consumer = f)
      );
    }),
    (M.createElement = Qe),
    (M.createFactory = function (f) {
      var v = Qe.bind(null, f);
      return (v.type = f), v;
    }),
    (M.createRef = function () {
      return { current: null };
    }),
    (M.forwardRef = function (f) {
      return { $$typeof: de, render: f };
    }),
    (M.isValidElement = gn),
    (M.lazy = function (f) {
      return { $$typeof: we, _payload: { _status: -1, _result: f }, _init: Te };
    }),
    (M.memo = function (f, v) {
      return { $$typeof: Ce, type: f, compare: v === void 0 ? null : v };
    }),
    (M.startTransition = function (f) {
      var v = S.transition;
      S.transition = {};
      try {
        f();
      } finally {
        S.transition = v;
      }
    }),
    (M.unstable_act = _),
    (M.useCallback = function (f, v) {
      return re.current.useCallback(f, v);
    }),
    (M.useContext = function (f) {
      return re.current.useContext(f);
    }),
    (M.useDebugValue = function () {}),
    (M.useDeferredValue = function (f) {
      return re.current.useDeferredValue(f);
    }),
    (M.useEffect = function (f, v) {
      return re.current.useEffect(f, v);
    }),
    (M.useId = function () {
      return re.current.useId();
    }),
    (M.useImperativeHandle = function (f, v, D) {
      return re.current.useImperativeHandle(f, v, D);
    }),
    (M.useInsertionEffect = function (f, v) {
      return re.current.useInsertionEffect(f, v);
    }),
    (M.useLayoutEffect = function (f, v) {
      return re.current.useLayoutEffect(f, v);
    }),
    (M.useMemo = function (f, v) {
      return re.current.useMemo(f, v);
    }),
    (M.useReducer = function (f, v, D) {
      return re.current.useReducer(f, v, D);
    }),
    (M.useRef = function (f) {
      return re.current.useRef(f);
    }),
    (M.useState = function (f) {
      return re.current.useState(f);
    }),
    (M.useSyncExternalStore = function (f, v, D) {
      return re.current.useSyncExternalStore(f, v, D);
    }),
    (M.useTransition = function () {
      return re.current.useTransition();
    }),
    (M.version = '18.3.1'),
    M
  );
}
var Na;
function Li() {
  return Na || ((Na = 1), (Ci.exports = Mc())), Ci.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function Ic() {
  if (Pa) return wr;
  Pa = 1;
  var P = Li(),
    O = Symbol.for('react.element'),
    m = Symbol.for('react.fragment'),
    fe = Object.prototype.hasOwnProperty,
    A = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(de, $, Ce) {
    var we,
      ee = {},
      Z = null,
      $e = null;
    Ce !== void 0 && (Z = '' + Ce),
      $.key !== void 0 && (Z = '' + $.key),
      $.ref !== void 0 && ($e = $.ref);
    for (we in $) fe.call($, we) && !Y.hasOwnProperty(we) && (ee[we] = $[we]);
    if (de && de.defaultProps)
      for (we in (($ = de.defaultProps), $))
        ee[we] === void 0 && (ee[we] = $[we]);
    return {
      $$typeof: O,
      type: de,
      key: Z,
      ref: $e,
      props: ee,
      _owner: A.current,
    };
  }
  return (wr.Fragment = m), (wr.jsx = ce), (wr.jsxs = ce), wr;
}
var za;
function jc() {
  return za || ((za = 1), (xi.exports = Ic())), xi.exports;
}
var ve = jc(),
  Dt = Li(),
  Tl = {},
  Ni = { exports: {} },
  je = {},
  Pi = { exports: {} },
  zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function Fc() {
  return (
    La ||
      ((La = 1),
      (function (P) {
        function O(S, T) {
          var _ = S.length;
          S.push(T);
          e: for (; 0 < _; ) {
            var f = (_ - 1) >>> 1,
              v = S[f];
            if (0 < A(v, T)) (S[f] = T), (S[_] = v), (_ = f);
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function fe(S) {
          if (S.length === 0) return null;
          var T = S[0],
            _ = S.pop();
          if (_ !== T) {
            S[0] = _;
            e: for (var f = 0, v = S.length, D = v >>> 1; f < D; ) {
              var I = 2 * (f + 1) - 1,
                F = S[I],
                U = I + 1,
                Q = S[U];
              if (0 > A(F, _))
                U < v && 0 > A(Q, F)
                  ? ((S[f] = Q), (S[U] = _), (f = U))
                  : ((S[f] = F), (S[I] = _), (f = I));
              else if (U < v && 0 > A(Q, _)) (S[f] = Q), (S[U] = _), (f = U);
              else break e;
            }
          }
          return T;
        }
        function A(S, T) {
          var _ = S.sortIndex - T.sortIndex;
          return _ !== 0 ? _ : S.id - T.id;
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var Y = performance;
          P.unstable_now = function () {
            return Y.now();
          };
        } else {
          var ce = Date,
            de = ce.now();
          P.unstable_now = function () {
            return ce.now() - de;
          };
        }
        var $ = [],
          Ce = [],
          we = 1,
          ee = null,
          Z = 3,
          $e = !1,
          We = !1,
          J = !1,
          W = typeof setTimeout == 'function' ? setTimeout : null,
          yn = typeof clearTimeout == 'function' ? clearTimeout : null,
          an = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function qe(S) {
          for (var T = m(Ce); T !== null; ) {
            if (T.callback === null) fe(Ce);
            else if (T.startTime <= S)
              fe(Ce), (T.sortIndex = T.expirationTime), O($, T);
            else break;
            T = m(Ce);
          }
        }
        function Se(S) {
          if (((J = !1), qe(S), !We))
            if (m($) !== null) (We = !0), Te(be);
            else {
              var T = m(Ce);
              T !== null && re(Se, T.startTime - S);
            }
        }
        function be(S, T) {
          (We = !1), J && ((J = !1), yn(Qe), (Qe = -1)), ($e = !0);
          var _ = Z;
          try {
            for (
              qe(T), ee = m($);
              ee !== null && (!(ee.expirationTime > T) || (S && !Yn()));

            ) {
              var f = ee.callback;
              if (typeof f == 'function') {
                (ee.callback = null), (Z = ee.priorityLevel);
                var v = f(ee.expirationTime <= T);
                (T = P.unstable_now()),
                  typeof v == 'function'
                    ? (ee.callback = v)
                    : ee === m($) && fe($),
                  qe(T);
              } else fe($);
              ee = m($);
            }
            if (ee !== null) var D = !0;
            else {
              var I = m(Ce);
              I !== null && re(Se, I.startTime - T), (D = !1);
            }
            return D;
          } finally {
            (ee = null), (Z = _), ($e = !1);
          }
        }
        var Ne = !1,
          Le = null,
          Qe = -1,
          Pn = 5,
          gn = -1;
        function Yn() {
          return !(P.unstable_now() - gn < Pn);
        }
        function fn() {
          if (Le !== null) {
            var S = P.unstable_now();
            gn = S;
            var T = !0;
            try {
              T = Le(!0, S);
            } finally {
              T ? Fe() : ((Ne = !1), (Le = null));
            }
          } else Ne = !1;
        }
        var Fe;
        if (typeof an == 'function')
          Fe = function () {
            an(fn);
          };
        else if (typeof MessageChannel < 'u') {
          var en = new MessageChannel(),
            cn = en.port2;
          (en.port1.onmessage = fn),
            (Fe = function () {
              cn.postMessage(null);
            });
        } else
          Fe = function () {
            W(fn, 0);
          };
        function Te(S) {
          (Le = S), Ne || ((Ne = !0), Fe());
        }
        function re(S, T) {
          Qe = W(function () {
            S(P.unstable_now());
          }, T);
        }
        (P.unstable_IdlePriority = 5),
          (P.unstable_ImmediatePriority = 1),
          (P.unstable_LowPriority = 4),
          (P.unstable_NormalPriority = 3),
          (P.unstable_Profiling = null),
          (P.unstable_UserBlockingPriority = 2),
          (P.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (P.unstable_continueExecution = function () {
            We || $e || ((We = !0), Te(be));
          }),
          (P.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Pn = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (P.unstable_getCurrentPriorityLevel = function () {
            return Z;
          }),
          (P.unstable_getFirstCallbackNode = function () {
            return m($);
          }),
          (P.unstable_next = function (S) {
            switch (Z) {
              case 1:
              case 2:
              case 3:
                var T = 3;
                break;
              default:
                T = Z;
            }
            var _ = Z;
            Z = T;
            try {
              return S();
            } finally {
              Z = _;
            }
          }),
          (P.unstable_pauseExecution = function () {}),
          (P.unstable_requestPaint = function () {}),
          (P.unstable_runWithPriority = function (S, T) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var _ = Z;
            Z = S;
            try {
              return T();
            } finally {
              Z = _;
            }
          }),
          (P.unstable_scheduleCallback = function (S, T, _) {
            var f = P.unstable_now();
            switch (
              (typeof _ == 'object' && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == 'number' && 0 < _ ? f + _ : f))
                : (_ = f),
              S)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = _ + v),
              (S = {
                id: we++,
                callback: T,
                priorityLevel: S,
                startTime: _,
                expirationTime: v,
                sortIndex: -1,
              }),
              _ > f
                ? ((S.sortIndex = _),
                  O(Ce, S),
                  m($) === null &&
                    S === m(Ce) &&
                    (J ? (yn(Qe), (Qe = -1)) : (J = !0), re(Se, _ - f)))
                : ((S.sortIndex = v), O($, S), We || $e || ((We = !0), Te(be))),
              S
            );
          }),
          (P.unstable_shouldYield = Yn),
          (P.unstable_wrapCallback = function (S) {
            var T = Z;
            return function () {
              var _ = Z;
              Z = T;
              try {
                return S.apply(this, arguments);
              } finally {
                Z = _;
              }
            };
          });
      })(zi)),
    zi
  );
}
var Ta;
function Uc() {
  return Ta || ((Ta = 1), (Pi.exports = Fc())), Pi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra;
function Vc() {
  if (Ra) return je;
  Ra = 1;
  var P = Li(),
    O = Uc();
  function m(e) {
    for (
      var n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        t = 1;
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
  var fe = new Set(),
    A = {};
  function Y(e, n) {
    ce(e, n), ce(e + 'Capture', n);
  }
  function ce(e, n) {
    for (A[e] = n, e = 0; e < n.length; e++) fe.add(n[e]);
  }
  var de = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    $ = Object.prototype.hasOwnProperty,
    Ce =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    we = {},
    ee = {};
  function Z(e) {
    return $.call(ee, e)
      ? !0
      : $.call(we, e)
        ? !1
        : Ce.test(e)
          ? (ee[e] = !0)
          : ((we[e] = !0), !1);
  }
  function $e(e, n, t, r) {
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
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function We(e, n, t, r) {
    if (n === null || typeof n > 'u' || $e(e, n, t, r)) return !0;
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
  function J(e, n, t, r, l, u, i) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = t),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i);
  }
  var W = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      W[e] = new J(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var n = e[0];
      W[n] = new J(n, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        W[e] = new J(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      W[e] = new J(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        W[e] = new J(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      W[e] = new J(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      W[e] = new J(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      W[e] = new J(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      W[e] = new J(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var yn = /[\-:]([a-z])/g;
  function an(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var n = e.replace(yn, an);
      W[n] = new J(n, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var n = e.replace(yn, an);
        W[n] = new J(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var n = e.replace(yn, an);
      W[n] = new J(n, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      W[e] = new J(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (W.xlinkHref = new J(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      W[e] = new J(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function qe(e, n, t, r) {
    var l = W.hasOwnProperty(n) ? W[n] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < n.length) ||
        (n[0] !== 'o' && n[0] !== 'O') ||
        (n[1] !== 'n' && n[1] !== 'N')) &&
      (We(n, t, l, r) && (t = null),
      r || l === null
        ? Z(n) &&
          (t === null ? e.removeAttribute(n) : e.setAttribute(n, '' + t))
        : l.mustUseProperty
          ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : '') : t)
          : ((n = l.attributeName),
            (r = l.attributeNamespace),
            t === null
              ? e.removeAttribute(n)
              : ((l = l.type),
                (t = l === 3 || (l === 4 && t === !0) ? '' : '' + t),
                r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var Se = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for('react.element'),
    Ne = Symbol.for('react.portal'),
    Le = Symbol.for('react.fragment'),
    Qe = Symbol.for('react.strict_mode'),
    Pn = Symbol.for('react.profiler'),
    gn = Symbol.for('react.provider'),
    Yn = Symbol.for('react.context'),
    fn = Symbol.for('react.forward_ref'),
    Fe = Symbol.for('react.suspense'),
    en = Symbol.for('react.suspense_list'),
    cn = Symbol.for('react.memo'),
    Te = Symbol.for('react.lazy'),
    re = Symbol.for('react.offscreen'),
    S = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (S && e[S]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var _ = Object.assign,
    f;
  function v(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        f = (n && n[1]) || '';
      }
    return (
      `
` +
      f +
      e
    );
  }
  var D = !1;
  function I(e, n) {
    if (!e || D) return '';
    D = !0;
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
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (p) {
            r = p;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == 'string') {
        for (
          var l = p.stack.split(`
`),
            u = r.stack.split(`
`),
            i = l.length - 1,
            o = u.length - 1;
          1 <= i && 0 <= o && l[i] !== u[o];

        )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (l[i] !== u[o]) {
            if (i !== 1 || o !== 1)
              do
                if ((i--, o--, 0 > o || l[i] !== u[o])) {
                  var s =
                    `
` + l[i].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      s.includes('<anonymous>') &&
                      (s = s.replace('<anonymous>', e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      (D = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : '') ? v(e) : '';
  }
  function F(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v('Lazy');
      case 13:
        return v('Suspense');
      case 19:
        return v('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = I(e.type, !1)), e;
      case 11:
        return (e = I(e.type.render, !1)), e;
      case 1:
        return (e = I(e.type, !0)), e;
      default:
        return '';
    }
  }
  function U(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Le:
        return 'Fragment';
      case Ne:
        return 'Portal';
      case Pn:
        return 'Profiler';
      case Qe:
        return 'StrictMode';
      case Fe:
        return 'Suspense';
      case en:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Yn:
          return (e.displayName || 'Context') + '.Consumer';
        case gn:
          return (e._context.displayName || 'Context') + '.Provider';
        case fn:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case cn:
          return (
            (n = e.displayName || null), n !== null ? n : U(e.type) || 'Memo'
          );
        case Te:
          (n = e._payload), (e = e._init);
          try {
            return U(e(n));
          } catch {}
      }
    return null;
  }
  function Q(e) {
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
        return U(n);
      case 8:
        return n === Qe ? 'StrictMode' : 'Mode';
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
  function B(e) {
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
  function q(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (n === 'checkbox' || n === 'radio')
    );
  }
  function Ue(e) {
    var n = q(e) ? 'checked' : 'value',
      t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      r = '' + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof t < 'u' &&
      typeof t.get == 'function' &&
      typeof t.set == 'function'
    ) {
      var l = t.get,
        u = t.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            (r = '' + i), u.call(this, i);
          },
        }),
        Object.defineProperty(e, n, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = '' + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Ti(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
      r = '';
    return (
      e && (r = q(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== t ? (n.setValue(e), !0) : !1
    );
  }
  function kr(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, n) {
    var t = n.checked;
    return _({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: t ?? e._wrapperState.initialChecked,
    });
  }
  function Ri(e, n) {
    var t = n.defaultValue == null ? '' : n.defaultValue,
      r = n.checked != null ? n.checked : n.defaultChecked;
    (t = B(n.value != null ? n.value : t)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled:
          n.type === 'checkbox' || n.type === 'radio'
            ? n.checked != null
            : n.value != null,
      });
  }
  function Oi(e, n) {
    (n = n.checked), n != null && qe(e, 'checked', n, !1);
  }
  function Ol(e, n) {
    Oi(e, n);
    var t = B(n.value),
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
      ? Dl(e, n.type, t)
      : n.hasOwnProperty('defaultValue') && Dl(e, n.type, B(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function Di(e, n, t) {
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
  function Dl(e, n, t) {
    (n !== 'number' || kr(e.ownerDocument) !== e) &&
      (t == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + t && (e.defaultValue = '' + t));
  }
  var Mt = Array.isArray;
  function ot(e, n, t, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var l = 0; l < t.length; l++) n['$' + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        (l = n.hasOwnProperty('$' + e[t].value)),
          e[t].selected !== l && (e[t].selected = l),
          l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = '' + B(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ml(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Mi(e, n) {
    var t = n.value;
    if (t == null) {
      if (((t = n.children), (n = n.defaultValue), t != null)) {
        if (n != null) throw Error(m(92));
        if (Mt(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ''), (t = n);
    }
    e._wrapperState = { initialValue: B(t) };
  }
  function Ii(e, n) {
    var t = B(n.value),
      r = B(n.defaultValue);
    t != null &&
      ((t = '' + t),
      t !== e.value && (e.value = t),
      n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
      r != null && (e.defaultValue = '' + r);
  }
  function ji(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== '' &&
      n !== null &&
      (e.value = n);
  }
  function Fi(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Il(e, n) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Fi(n)
      : e === 'http://www.w3.org/2000/svg' && n === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Er,
    Ui = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, t, r, l);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = n;
      else {
        for (
          Er = Er || document.createElement('div'),
            Er.innerHTML = '<svg>' + n.valueOf().toString() + '</svg>',
            n = Er.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function It(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var jt = {
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
    Ia = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(jt).forEach(function (e) {
    Ia.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (jt[n] = jt[e]);
    });
  });
  function Vi(e, n, t) {
    return n == null || typeof n == 'boolean' || n === ''
      ? ''
      : t || typeof n != 'number' || n === 0 || (jt.hasOwnProperty(e) && jt[e])
        ? ('' + n).trim()
        : n + 'px';
  }
  function Ai(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf('--') === 0,
          l = Vi(t, n[t], r);
        t === 'float' && (t = 'cssFloat'), r ? e.setProperty(t, l) : (e[t] = l);
      }
  }
  var ja = _(
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
  function jl(e, n) {
    if (n) {
      if (ja[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (
          typeof n.dangerouslySetInnerHTML != 'object' ||
          !('__html' in n.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (n.style != null && typeof n.style != 'object') throw Error(m(62));
    }
  }
  function Fl(e, n) {
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
  var Ul = null;
  function Vl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Al = null,
    st = null,
    at = null;
  function Bi(e) {
    if ((e = lr(e))) {
      if (typeof Al != 'function') throw Error(m(280));
      var n = e.stateNode;
      n && ((n = Qr(n)), Al(e.stateNode, e.type, n));
    }
  }
  function Hi(e) {
    st ? (at ? at.push(e) : (at = [e])) : (st = e);
  }
  function $i() {
    if (st) {
      var e = st,
        n = at;
      if (((at = st = null), Bi(e), n)) for (e = 0; e < n.length; e++) Bi(n[e]);
    }
  }
  function Wi(e, n) {
    return e(n);
  }
  function Qi() {}
  var Bl = !1;
  function Ki(e, n, t) {
    if (Bl) return e(n, t);
    Bl = !0;
    try {
      return Wi(e, n, t);
    } finally {
      (Bl = !1), (st !== null || at !== null) && (Qi(), $i());
    }
  }
  function Ft(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Qr(t);
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
    if (t && typeof t != 'function') throw Error(m(231, n, typeof t));
    return t;
  }
  var Hl = !1;
  if (de)
    try {
      var Ut = {};
      Object.defineProperty(Ut, 'passive', {
        get: function () {
          Hl = !0;
        },
      }),
        window.addEventListener('test', Ut, Ut),
        window.removeEventListener('test', Ut, Ut);
    } catch {
      Hl = !1;
    }
  function Fa(e, n, t, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Vt = !1,
    _r = null,
    xr = !1,
    $l = null,
    Ua = {
      onError: function (e) {
        (Vt = !0), (_r = e);
      },
    };
  function Va(e, n, t, r, l, u, i, o, s) {
    (Vt = !1), (_r = null), Fa.apply(Ua, arguments);
  }
  function Aa(e, n, t, r, l, u, i, o, s) {
    if ((Va.apply(this, arguments), Vt)) {
      if (Vt) {
        var p = _r;
        (Vt = !1), (_r = null);
      } else throw Error(m(198));
      xr || ((xr = !0), ($l = p));
    }
  }
  function Xn(e) {
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
  function Yi(e) {
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
  function Xi(e) {
    if (Xn(e) !== e) throw Error(m(188));
  }
  function Ba(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = Xn(e)), n === null)) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t) return Xi(l), e;
          if (u === r) return Xi(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) (t = l), (r = u);
      else {
        for (var i = !1, o = l.child; o; ) {
          if (o === t) {
            (i = !0), (t = l), (r = u);
            break;
          }
          if (o === r) {
            (i = !0), (r = l), (t = u);
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === t) {
              (i = !0), (t = u), (r = l);
              break;
            }
            if (o === r) {
              (i = !0), (r = u), (t = l);
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Gi(e) {
    return (e = Ba(e)), e !== null ? Zi(e) : null;
  }
  function Zi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Zi(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Ji = O.unstable_scheduleCallback,
    qi = O.unstable_cancelCallback,
    Ha = O.unstable_shouldYield,
    $a = O.unstable_requestPaint,
    ue = O.unstable_now,
    Wa = O.unstable_getCurrentPriorityLevel,
    Wl = O.unstable_ImmediatePriority,
    bi = O.unstable_UserBlockingPriority,
    Cr = O.unstable_NormalPriority,
    Qa = O.unstable_LowPriority,
    eo = O.unstable_IdlePriority,
    Nr = null,
    dn = null;
  function Ka(e) {
    if (dn && typeof dn.onCommitFiberRoot == 'function')
      try {
        dn.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nn = Math.clz32 ? Math.clz32 : Ga,
    Ya = Math.log,
    Xa = Math.LN2;
  function Ga(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ya(e) / Xa) | 0)) | 0;
  }
  var Pr = 64,
    zr = 4194304;
  function At(e) {
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
  function Lr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = t & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = At(o)) : ((u &= i), u !== 0 && (r = At(u)));
    } else (i = t & ~l), i !== 0 ? (r = At(i)) : u !== 0 && (r = At(u));
    if (r === 0) return 0;
    if (
      n !== 0 &&
      n !== r &&
      !(n & l) &&
      ((l = r & -r), (u = n & -n), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= r; 0 < n; )
        (t = 31 - nn(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    return r;
  }
  function Za(e, n) {
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
  function Ja(e, n) {
    for (
      var t = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var i = 31 - nn(u),
        o = 1 << i,
        s = l[i];
      s === -1
        ? (!(o & t) || o & r) && (l[i] = Za(o, n))
        : s <= n && (e.expiredLanes |= o),
        (u &= ~o);
    }
  }
  function Ql(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function no() {
    var e = Pr;
    return (Pr <<= 1), !(Pr & 4194240) && (Pr = 64), e;
  }
  function Kl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Bt(e, n, t) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - nn(n)),
      (e[n] = t);
  }
  function qa(e, n) {
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
      var l = 31 - nn(t),
        u = 1 << l;
      (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~u);
    }
  }
  function Yl(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
      var r = 31 - nn(t),
        l = 1 << r;
      (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
    }
  }
  var H = 0;
  function to(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var ro,
    Xl,
    lo,
    uo,
    io,
    Gl = !1,
    Tr = [],
    zn = null,
    Ln = null,
    Tn = null,
    Ht = new Map(),
    $t = new Map(),
    Rn = [],
    ba =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function oo(e, n) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        zn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ln = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Tn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Ht.delete(n.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        $t.delete(n.pointerId);
    }
  }
  function Wt(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        n !== null && ((n = lr(n)), n !== null && Xl(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        l !== null && n.indexOf(l) === -1 && n.push(l),
        e);
  }
  function ef(e, n, t, r, l) {
    switch (n) {
      case 'focusin':
        return (zn = Wt(zn, e, n, t, r, l)), !0;
      case 'dragenter':
        return (Ln = Wt(Ln, e, n, t, r, l)), !0;
      case 'mouseover':
        return (Tn = Wt(Tn, e, n, t, r, l)), !0;
      case 'pointerover':
        var u = l.pointerId;
        return Ht.set(u, Wt(Ht.get(u) || null, e, n, t, r, l)), !0;
      case 'gotpointercapture':
        return (
          (u = l.pointerId), $t.set(u, Wt($t.get(u) || null, e, n, t, r, l)), !0
        );
    }
    return !1;
  }
  function so(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (((n = t.tag), n === 13)) {
          if (((n = Yi(t)), n !== null)) {
            (e.blockedOn = n),
              io(e.priority, function () {
                lo(t);
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
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Jl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        (Ul = r), t.target.dispatchEvent(r), (Ul = null);
      } else return (n = lr(t)), n !== null && Xl(n), (e.blockedOn = t), !1;
      n.shift();
    }
    return !0;
  }
  function ao(e, n, t) {
    Rr(e) && t.delete(n);
  }
  function nf() {
    (Gl = !1),
      zn !== null && Rr(zn) && (zn = null),
      Ln !== null && Rr(Ln) && (Ln = null),
      Tn !== null && Rr(Tn) && (Tn = null),
      Ht.forEach(ao),
      $t.forEach(ao);
  }
  function Qt(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Gl ||
        ((Gl = !0),
        O.unstable_scheduleCallback(O.unstable_NormalPriority, nf)));
  }
  function Kt(e) {
    function n(l) {
      return Qt(l, e);
    }
    if (0 < Tr.length) {
      Qt(Tr[0], e);
      for (var t = 1; t < Tr.length; t++) {
        var r = Tr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zn !== null && Qt(zn, e),
        Ln !== null && Qt(Ln, e),
        Tn !== null && Qt(Tn, e),
        Ht.forEach(n),
        $t.forEach(n),
        t = 0;
      t < Rn.length;
      t++
    )
      (r = Rn[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && ((t = Rn[0]), t.blockedOn === null); )
      so(t), t.blockedOn === null && Rn.shift();
  }
  var ft = Se.ReactCurrentBatchConfig,
    Or = !0;
  function tf(e, n, t, r) {
    var l = H,
      u = ft.transition;
    ft.transition = null;
    try {
      (H = 1), Zl(e, n, t, r);
    } finally {
      (H = l), (ft.transition = u);
    }
  }
  function rf(e, n, t, r) {
    var l = H,
      u = ft.transition;
    ft.transition = null;
    try {
      (H = 4), Zl(e, n, t, r);
    } finally {
      (H = l), (ft.transition = u);
    }
  }
  function Zl(e, n, t, r) {
    if (Or) {
      var l = Jl(e, n, t, r);
      if (l === null) mu(e, n, r, Dr, t), oo(e, r);
      else if (ef(l, e, n, t, r)) r.stopPropagation();
      else if ((oo(e, r), n & 4 && -1 < ba.indexOf(e))) {
        for (; l !== null; ) {
          var u = lr(l);
          if (
            (u !== null && ro(u),
            (u = Jl(e, n, t, r)),
            u === null && mu(e, n, r, Dr, t),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else mu(e, n, r, null, t);
    }
  }
  var Dr = null;
  function Jl(e, n, t, r) {
    if (((Dr = null), (e = Vl(r)), (e = Gn(e)), e !== null))
      if (((n = Xn(e)), n === null)) e = null;
      else if (((t = n.tag), t === 13)) {
        if (((e = Yi(n)), e !== null)) return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (Dr = e), null;
  }
  function fo(e) {
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
        switch (Wa()) {
          case Wl:
            return 1;
          case bi:
            return 4;
          case Cr:
          case Qa:
            return 16;
          case eo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var On = null,
    ql = null,
    Mr = null;
  function co() {
    if (Mr) return Mr;
    var e,
      n = ql,
      t = n.length,
      r,
      l = 'value' in On ? On.value : On.textContent,
      u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[u - r]; r++);
    return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ir(e) {
    var n = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function jr() {
    return !0;
  }
  function po() {
    return !1;
  }
  function Ve(e) {
    function n(t, r, l, u, i) {
      (this._reactName = t),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null);
      for (var o in e)
        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(u) : u[o]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? jr
          : po),
        (this.isPropagationStopped = po),
        this
      );
    }
    return (
      _(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != 'unknown' && (t.returnValue = !1),
            (this.isDefaultPrevented = jr));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != 'unknown' && (t.cancelBubble = !0),
            (this.isPropagationStopped = jr));
        },
        persist: function () {},
        isPersistent: jr,
      }),
      n
    );
  }
  var ct = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bl = Ve(ct),
    Yt = _({}, ct, { view: 0, detail: 0 }),
    lf = Ve(Yt),
    eu,
    nu,
    Xt,
    Fr = _({}, Yt, {
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
      getModifierState: ru,
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
          : (e !== Xt &&
              (Xt && e.type === 'mousemove'
                ? ((eu = e.screenX - Xt.screenX), (nu = e.screenY - Xt.screenY))
                : (nu = eu = 0),
              (Xt = e)),
            eu);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : nu;
      },
    }),
    mo = Ve(Fr),
    uf = _({}, Fr, { dataTransfer: 0 }),
    of = Ve(uf),
    sf = _({}, Yt, { relatedTarget: 0 }),
    tu = Ve(sf),
    af = _({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ff = Ve(af),
    cf = _({}, ct, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    df = Ve(cf),
    pf = _({}, ct, { data: 0 }),
    ho = Ve(pf),
    mf = {
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
    hf = {
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
    vf = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function yf(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = vf[e])
        ? !!n[e]
        : !1;
  }
  function ru() {
    return yf;
  }
  var gf = _({}, Yt, {
      key: function (e) {
        if (e.key) {
          var n = mf[e.key] || e.key;
          if (n !== 'Unidentified') return n;
        }
        return e.type === 'keypress'
          ? ((e = Ir(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? hf[e.keyCode] || 'Unidentified'
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
      getModifierState: ru,
      charCode: function (e) {
        return e.type === 'keypress' ? Ir(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Ir(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    wf = Ve(gf),
    Sf = _({}, Fr, {
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
    vo = Ve(Sf),
    kf = _({}, Yt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ru,
    }),
    Ef = Ve(kf),
    _f = _({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xf = Ve(_f),
    Cf = _({}, Fr, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
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
    Nf = Ve(Cf),
    Pf = [9, 13, 27, 32],
    lu = de && 'CompositionEvent' in window,
    Gt = null;
  de && 'documentMode' in document && (Gt = document.documentMode);
  var zf = de && 'TextEvent' in window && !Gt,
    yo = de && (!lu || (Gt && 8 < Gt && 11 >= Gt)),
    go = ' ',
    wo = !1;
  function So(e, n) {
    switch (e) {
      case 'keyup':
        return Pf.indexOf(n.keyCode) !== -1;
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
  function ko(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var dt = !1;
  function Lf(e, n) {
    switch (e) {
      case 'compositionend':
        return ko(n);
      case 'keypress':
        return n.which !== 32 ? null : ((wo = !0), go);
      case 'textInput':
        return (e = n.data), e === go && wo ? null : e;
      default:
        return null;
    }
  }
  function Tf(e, n) {
    if (dt)
      return e === 'compositionend' || (!lu && So(e, n))
        ? ((e = co()), (Mr = ql = On = null), (dt = !1), e)
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
        return yo && n.locale !== 'ko' ? null : n.data;
      default:
        return null;
    }
  }
  var Rf = {
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
  function Eo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === 'input' ? !!Rf[e.type] : n === 'textarea';
  }
  function _o(e, n, t, r) {
    Hi(r),
      (n = Hr(n, 'onChange')),
      0 < n.length &&
        ((t = new bl('onChange', 'change', null, t, r)),
        e.push({ event: t, listeners: n }));
  }
  var Zt = null,
    Jt = null;
  function Of(e) {
    Bo(e, 0);
  }
  function Ur(e) {
    var n = yt(e);
    if (Ti(n)) return e;
  }
  function Df(e, n) {
    if (e === 'change') return n;
  }
  var xo = !1;
  if (de) {
    var uu;
    if (de) {
      var iu = 'oninput' in document;
      if (!iu) {
        var Co = document.createElement('div');
        Co.setAttribute('oninput', 'return;'),
          (iu = typeof Co.oninput == 'function');
      }
      uu = iu;
    } else uu = !1;
    xo = uu && (!document.documentMode || 9 < document.documentMode);
  }
  function No() {
    Zt && (Zt.detachEvent('onpropertychange', Po), (Jt = Zt = null));
  }
  function Po(e) {
    if (e.propertyName === 'value' && Ur(Jt)) {
      var n = [];
      _o(n, Jt, e, Vl(e)), Ki(Of, n);
    }
  }
  function Mf(e, n, t) {
    e === 'focusin'
      ? (No(), (Zt = n), (Jt = t), Zt.attachEvent('onpropertychange', Po))
      : e === 'focusout' && No();
  }
  function If(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Ur(Jt);
  }
  function jf(e, n) {
    if (e === 'click') return Ur(n);
  }
  function Ff(e, n) {
    if (e === 'input' || e === 'change') return Ur(n);
  }
  function Uf(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var tn = typeof Object.is == 'function' ? Object.is : Uf;
  function qt(e, n) {
    if (tn(e, n)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof n != 'object' ||
      n === null
    )
      return !1;
    var t = Object.keys(e),
      r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!$.call(n, l) || !tn(e[l], n[l])) return !1;
    }
    return !0;
  }
  function zo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Lo(e, n) {
    var t = zo(e);
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
      t = zo(t);
    }
  }
  function To(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? To(e, n.parentNode)
            : 'contains' in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function Ro() {
    for (var e = window, n = kr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == 'string';
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = kr(e.document);
    }
    return n;
  }
  function ou(e) {
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
  function Vf(e) {
    var n = Ro(),
      t = e.focusedElem,
      r = e.selectionRange;
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      To(t.ownerDocument.documentElement, t)
    ) {
      if (r !== null && ou(t)) {
        if (
          ((n = r.start),
          (e = r.end),
          e === void 0 && (e = n),
          'selectionStart' in t)
        )
          (t.selectionStart = n),
            (t.selectionEnd = Math.min(e, t.value.length));
        else if (
          ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = t.textContent.length,
            u = Math.min(r.start, l);
          (r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = Lo(t, u));
          var i = Lo(t, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((n = n.createRange()),
            n.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(n), e.extend(i.node, i.offset))
              : (n.setEnd(i.node, i.offset), e.addRange(n)));
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
  var Af = de && 'documentMode' in document && 11 >= document.documentMode,
    pt = null,
    su = null,
    bt = null,
    au = !1;
  function Oo(e, n, t) {
    var r =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    au ||
      pt == null ||
      pt !== kr(r) ||
      ((r = pt),
      'selectionStart' in r && ou(r)
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
      (bt && qt(bt, r)) ||
        ((bt = r),
        (r = Hr(su, 'onSelect')),
        0 < r.length &&
          ((n = new bl('onSelect', 'select', null, n, t)),
          e.push({ event: n, listeners: r }),
          (n.target = pt))));
  }
  function Vr(e, n) {
    var t = {};
    return (
      (t[e.toLowerCase()] = n.toLowerCase()),
      (t['Webkit' + e] = 'webkit' + n),
      (t['Moz' + e] = 'moz' + n),
      t
    );
  }
  var mt = {
      animationend: Vr('Animation', 'AnimationEnd'),
      animationiteration: Vr('Animation', 'AnimationIteration'),
      animationstart: Vr('Animation', 'AnimationStart'),
      transitionend: Vr('Transition', 'TransitionEnd'),
    },
    fu = {},
    Do = {};
  de &&
    ((Do = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete mt.animationend.animation,
      delete mt.animationiteration.animation,
      delete mt.animationstart.animation),
    'TransitionEvent' in window || delete mt.transitionend.transition);
  function Ar(e) {
    if (fu[e]) return fu[e];
    if (!mt[e]) return e;
    var n = mt[e],
      t;
    for (t in n) if (n.hasOwnProperty(t) && t in Do) return (fu[e] = n[t]);
    return e;
  }
  var Mo = Ar('animationend'),
    Io = Ar('animationiteration'),
    jo = Ar('animationstart'),
    Fo = Ar('transitionend'),
    Uo = new Map(),
    Vo =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Dn(e, n) {
    Uo.set(e, n), Y(n, [e]);
  }
  for (var cu = 0; cu < Vo.length; cu++) {
    var du = Vo[cu],
      Bf = du.toLowerCase(),
      Hf = du[0].toUpperCase() + du.slice(1);
    Dn(Bf, 'on' + Hf);
  }
  Dn(Mo, 'onAnimationEnd'),
    Dn(Io, 'onAnimationIteration'),
    Dn(jo, 'onAnimationStart'),
    Dn('dblclick', 'onDoubleClick'),
    Dn('focusin', 'onFocus'),
    Dn('focusout', 'onBlur'),
    Dn(Fo, 'onTransitionEnd'),
    ce('onMouseEnter', ['mouseout', 'mouseover']),
    ce('onMouseLeave', ['mouseout', 'mouseover']),
    ce('onPointerEnter', ['pointerout', 'pointerover']),
    ce('onPointerLeave', ['pointerout', 'pointerover']),
    Y(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    Y(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Y('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Y(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Y(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Y(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var er =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    $f = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(er)
    );
  function Ao(e, n, t) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = t), Aa(r, n, void 0, e), (e.currentTarget = null);
  }
  function Bo(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i],
              s = o.instance,
              p = o.currentTarget;
            if (((o = o.listener), s !== u && l.isPropagationStopped()))
              break e;
            Ao(l, o, p), (u = s);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((o = r[i]),
              (s = o.instance),
              (p = o.currentTarget),
              (o = o.listener),
              s !== u && l.isPropagationStopped())
            )
              break e;
            Ao(l, o, p), (u = s);
          }
      }
    }
    if (xr) throw ((e = $l), (xr = !1), ($l = null), e);
  }
  function X(e, n) {
    var t = n[Su];
    t === void 0 && (t = n[Su] = new Set());
    var r = e + '__bubble';
    t.has(r) || (Ho(n, e, 2, !1), t.add(r));
  }
  function pu(e, n, t) {
    var r = 0;
    n && (r |= 4), Ho(t, e, r, n);
  }
  var Br = '_reactListening' + Math.random().toString(36).slice(2);
  function nr(e) {
    if (!e[Br]) {
      (e[Br] = !0),
        fe.forEach(function (t) {
          t !== 'selectionchange' && ($f.has(t) || pu(t, !1, e), pu(t, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Br] || ((n[Br] = !0), pu('selectionchange', !1, n));
    }
  }
  function Ho(e, n, t, r) {
    switch (fo(n)) {
      case 1:
        var l = tf;
        break;
      case 4:
        l = rf;
        break;
      default:
        l = Zl;
    }
    (t = l.bind(null, n, t, e)),
      (l = void 0),
      !Hl ||
        (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(n, t, { capture: !0, passive: l })
          : e.addEventListener(n, t, !0)
        : l !== void 0
          ? e.addEventListener(n, t, { passive: l })
          : e.addEventListener(n, t, !1);
  }
  function mu(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; o !== null; ) {
            if (((i = Gn(o)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Ki(function () {
      var p = u,
        y = Vl(t),
        g = [];
      e: {
        var h = Uo.get(e);
        if (h !== void 0) {
          var k = bl,
            x = e;
          switch (e) {
            case 'keypress':
              if (Ir(t) === 0) break e;
            case 'keydown':
            case 'keyup':
              k = wf;
              break;
            case 'focusin':
              (x = 'focus'), (k = tu);
              break;
            case 'focusout':
              (x = 'blur'), (k = tu);
              break;
            case 'beforeblur':
            case 'afterblur':
              k = tu;
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
              k = mo;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              k = of;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              k = Ef;
              break;
            case Mo:
            case Io:
            case jo:
              k = ff;
              break;
            case Fo:
              k = xf;
              break;
            case 'scroll':
              k = lf;
              break;
            case 'wheel':
              k = Nf;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              k = df;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              k = vo;
          }
          var C = (n & 4) !== 0,
            ie = !C && e === 'scroll',
            c = C ? (h !== null ? h + 'Capture' : null) : h;
          C = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w),
                c !== null &&
                  ((w = Ft(a, c)), w != null && C.push(tr(a, w, d)))),
              ie)
            )
              break;
            a = a.return;
          }
          0 < C.length &&
            ((h = new k(h, x, null, t, y)), g.push({ event: h, listeners: C }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((h = e === 'mouseover' || e === 'pointerover'),
            (k = e === 'mouseout' || e === 'pointerout'),
            h &&
              t !== Ul &&
              (x = t.relatedTarget || t.fromElement) &&
              (Gn(x) || x[wn]))
          )
            break e;
          if (
            (k || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            k
              ? ((x = t.relatedTarget || t.toElement),
                (k = p),
                (x = x ? Gn(x) : null),
                x !== null &&
                  ((ie = Xn(x)), x !== ie || (x.tag !== 5 && x.tag !== 6)) &&
                  (x = null))
              : ((k = null), (x = p)),
            k !== x)
          ) {
            if (
              ((C = mo),
              (w = 'onMouseLeave'),
              (c = 'onMouseEnter'),
              (a = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((C = vo),
                (w = 'onPointerLeave'),
                (c = 'onPointerEnter'),
                (a = 'pointer')),
              (ie = k == null ? h : yt(k)),
              (d = x == null ? h : yt(x)),
              (h = new C(w, a + 'leave', k, t, y)),
              (h.target = ie),
              (h.relatedTarget = d),
              (w = null),
              Gn(y) === p &&
                ((C = new C(c, a + 'enter', x, t, y)),
                (C.target = d),
                (C.relatedTarget = ie),
                (w = C)),
              (ie = w),
              k && x)
            )
              n: {
                for (C = k, c = x, a = 0, d = C; d; d = ht(d)) a++;
                for (d = 0, w = c; w; w = ht(w)) d++;
                for (; 0 < a - d; ) (C = ht(C)), a--;
                for (; 0 < d - a; ) (c = ht(c)), d--;
                for (; a--; ) {
                  if (C === c || (c !== null && C === c.alternate)) break n;
                  (C = ht(C)), (c = ht(c));
                }
                C = null;
              }
            else C = null;
            k !== null && $o(g, h, k, C, !1),
              x !== null && ie !== null && $o(g, ie, x, C, !0);
          }
        }
        e: {
          if (
            ((h = p ? yt(p) : window),
            (k = h.nodeName && h.nodeName.toLowerCase()),
            k === 'select' || (k === 'input' && h.type === 'file'))
          )
            var N = Df;
          else if (Eo(h))
            if (xo) N = Ff;
            else {
              N = If;
              var z = Mf;
            }
          else
            (k = h.nodeName) &&
              k.toLowerCase() === 'input' &&
              (h.type === 'checkbox' || h.type === 'radio') &&
              (N = jf);
          if (N && (N = N(e, p))) {
            _o(g, N, t, y);
            break e;
          }
          z && z(e, h, p),
            e === 'focusout' &&
              (z = h._wrapperState) &&
              z.controlled &&
              h.type === 'number' &&
              Dl(h, 'number', h.value);
        }
        switch (((z = p ? yt(p) : window), e)) {
          case 'focusin':
            (Eo(z) || z.contentEditable === 'true') &&
              ((pt = z), (su = p), (bt = null));
            break;
          case 'focusout':
            bt = su = pt = null;
            break;
          case 'mousedown':
            au = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (au = !1), Oo(g, t, y);
            break;
          case 'selectionchange':
            if (Af) break;
          case 'keydown':
          case 'keyup':
            Oo(g, t, y);
        }
        var L;
        if (lu)
          e: {
            switch (e) {
              case 'compositionstart':
                var R = 'onCompositionStart';
                break e;
              case 'compositionend':
                R = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                R = 'onCompositionUpdate';
                break e;
            }
            R = void 0;
          }
        else
          dt
            ? So(e, t) && (R = 'onCompositionEnd')
            : e === 'keydown' &&
              t.keyCode === 229 &&
              (R = 'onCompositionStart');
        R &&
          (yo &&
            t.locale !== 'ko' &&
            (dt || R !== 'onCompositionStart'
              ? R === 'onCompositionEnd' && dt && (L = co())
              : ((On = y),
                (ql = 'value' in On ? On.value : On.textContent),
                (dt = !0))),
          (z = Hr(p, R)),
          0 < z.length &&
            ((R = new ho(R, e, null, t, y)),
            g.push({ event: R, listeners: z }),
            L ? (R.data = L) : ((L = ko(t)), L !== null && (R.data = L)))),
          (L = zf ? Lf(e, t) : Tf(e, t)) &&
            ((p = Hr(p, 'onBeforeInput')),
            0 < p.length &&
              ((y = new ho('onBeforeInput', 'beforeinput', null, t, y)),
              g.push({ event: y, listeners: p }),
              (y.data = L)));
      }
      Bo(g, n);
    });
  }
  function tr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Hr(e, n) {
    for (var t = n + 'Capture', r = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Ft(e, t)),
        u != null && r.unshift(tr(e, u, l)),
        (u = Ft(e, n)),
        u != null && r.push(tr(e, u, l))),
        (e = e.return);
    }
    return r;
  }
  function ht(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function $o(e, n, t, r, l) {
    for (var u = n._reactName, i = []; t !== null && t !== r; ) {
      var o = t,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = Ft(t, u)), s != null && i.unshift(tr(t, s, o)))
          : l || ((s = Ft(t, u)), s != null && i.push(tr(t, s, o)))),
        (t = t.return);
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var Wf = /\r\n?/g,
    Qf = /\u0000|\uFFFD/g;
  function Wo(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Wf,
        `
`
      )
      .replace(Qf, '');
  }
  function $r(e, n, t) {
    if (((n = Wo(n)), Wo(e) !== n && t)) throw Error(m(425));
  }
  function Wr() {}
  var hu = null,
    vu = null;
  function yu(e, n) {
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
  var gu = typeof setTimeout == 'function' ? setTimeout : void 0,
    Kf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Qo = typeof Promise == 'function' ? Promise : void 0,
    Yf =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Qo < 'u'
          ? function (e) {
              return Qo.resolve(null).then(e).catch(Xf);
            }
          : gu;
  function Xf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wu(e, n) {
    var t = n,
      r = 0;
    do {
      var l = t.nextSibling;
      if ((e.removeChild(t), l && l.nodeType === 8))
        if (((t = l.data), t === '/$')) {
          if (r === 0) {
            e.removeChild(l), Kt(n);
            return;
          }
          r--;
        } else (t !== '$' && t !== '$?' && t !== '$!') || r++;
      t = l;
    } while (t);
    Kt(n);
  }
  function Mn(e) {
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
  function Ko(e) {
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
  var vt = Math.random().toString(36).slice(2),
    pn = '__reactFiber$' + vt,
    rr = '__reactProps$' + vt,
    wn = '__reactContainer$' + vt,
    Su = '__reactEvents$' + vt,
    Gf = '__reactListeners$' + vt,
    Zf = '__reactHandles$' + vt;
  function Gn(e) {
    var n = e[pn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if ((n = t[wn] || t[pn])) {
        if (
          ((t = n.alternate),
          n.child !== null || (t !== null && t.child !== null))
        )
          for (e = Ko(e); e !== null; ) {
            if ((t = e[pn])) return t;
            e = Ko(e);
          }
        return n;
      }
      (e = t), (t = e.parentNode);
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[pn] || e[wn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var ku = [],
    gt = -1;
  function In(e) {
    return { current: e };
  }
  function G(e) {
    0 > gt || ((e.current = ku[gt]), (ku[gt] = null), gt--);
  }
  function K(e, n) {
    gt++, (ku[gt] = e.current), (e.current = n);
  }
  var jn = {},
    ke = In(jn),
    Re = In(!1),
    Zn = jn;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return jn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in t) l[u] = n[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Oe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Kr() {
    G(Re), G(ke);
  }
  function Yo(e, n, t) {
    if (ke.current !== jn) throw Error(m(168));
    K(ke, n), K(Re, t);
  }
  function Xo(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != 'function'))
      return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, Q(e) || 'Unknown', l));
    return _({}, t, r);
  }
  function Yr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        jn),
      (Zn = ke.current),
      K(ke, e),
      K(Re, Re.current),
      !0
    );
  }
  function Go(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t
      ? ((e = Xo(e, n, Zn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        G(Re),
        G(ke),
        K(ke, e))
      : G(Re),
      K(Re, t);
  }
  var Sn = null,
    Xr = !1,
    Eu = !1;
  function Zo(e) {
    Sn === null ? (Sn = [e]) : Sn.push(e);
  }
  function Jf(e) {
    (Xr = !0), Zo(e);
  }
  function Fn() {
    if (!Eu && Sn !== null) {
      Eu = !0;
      var e = 0,
        n = H;
      try {
        var t = Sn;
        for (H = 1; e < t.length; e++) {
          var r = t[e];
          do r = r(!0);
          while (r !== null);
        }
        (Sn = null), (Xr = !1);
      } catch (l) {
        throw (Sn !== null && (Sn = Sn.slice(e + 1)), Ji(Wl, Fn), l);
      } finally {
        (H = n), (Eu = !1);
      }
    }
    return null;
  }
  var St = [],
    kt = 0,
    Gr = null,
    Zr = 0,
    Ke = [],
    Ye = 0,
    Jn = null,
    kn = 1,
    En = '';
  function qn(e, n) {
    (St[kt++] = Zr), (St[kt++] = Gr), (Gr = e), (Zr = n);
  }
  function Jo(e, n, t) {
    (Ke[Ye++] = kn), (Ke[Ye++] = En), (Ke[Ye++] = Jn), (Jn = e);
    var r = kn;
    e = En;
    var l = 32 - nn(r) - 1;
    (r &= ~(1 << l)), (t += 1);
    var u = 32 - nn(n) + l;
    if (30 < u) {
      var i = l - (l % 5);
      (u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (kn = (1 << (32 - nn(n) + l)) | (t << l) | r),
        (En = u + e);
    } else (kn = (1 << u) | (t << l) | r), (En = e);
  }
  function _u(e) {
    e.return !== null && (qn(e, 1), Jo(e, 1, 0));
  }
  function xu(e) {
    for (; e === Gr; )
      (Gr = St[--kt]), (St[kt] = null), (Zr = St[--kt]), (St[kt] = null);
    for (; e === Jn; )
      (Jn = Ke[--Ye]),
        (Ke[Ye] = null),
        (En = Ke[--Ye]),
        (Ke[Ye] = null),
        (kn = Ke[--Ye]),
        (Ke[Ye] = null);
  }
  var Ae = null,
    Be = null,
    b = !1,
    rn = null;
  function qo(e, n) {
    var t = Je(5, null, null, 0);
    (t.elementType = 'DELETED'),
      (t.stateNode = n),
      (t.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
  }
  function bo(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return (
          (n =
            n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (Ae = e), (Be = Mn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === '' || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (Ae = e), (Be = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((t = Jn !== null ? { id: kn, overflow: En } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: t,
                retryLane: 1073741824,
              }),
              (t = Je(18, null, null, 0)),
              (t.stateNode = n),
              (t.return = e),
              (e.child = t),
              (Ae = e),
              (Be = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Cu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Nu(e) {
    if (b) {
      var n = Be;
      if (n) {
        var t = n;
        if (!bo(e, n)) {
          if (Cu(e)) throw Error(m(418));
          n = Mn(t.nextSibling);
          var r = Ae;
          n && bo(e, n)
            ? qo(r, t)
            : ((e.flags = (e.flags & -4097) | 2), (b = !1), (Ae = e));
        }
      } else {
        if (Cu(e)) throw Error(m(418));
        (e.flags = (e.flags & -4097) | 2), (b = !1), (Ae = e);
      }
    }
  }
  function es(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ae = e;
  }
  function Jr(e) {
    if (e !== Ae) return !1;
    if (!b) return es(e), (b = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== 'head' && n !== 'body' && !yu(e.type, e.memoizedProps))),
      n && (n = Be))
    ) {
      if (Cu(e)) throw (ns(), Error(m(418)));
      for (; n; ) qo(e, n), (n = Mn(n.nextSibling));
    }
    if ((es(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === '/$') {
              if (n === 0) {
                Be = Mn(e.nextSibling);
                break e;
              }
              n--;
            } else (t !== '$' && t !== '$!' && t !== '$?') || n++;
          }
          e = e.nextSibling;
        }
        Be = null;
      }
    } else Be = Ae ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ns() {
    for (var e = Be; e; ) e = Mn(e.nextSibling);
  }
  function Et() {
    (Be = Ae = null), (b = !1);
  }
  function Pu(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  var qf = Se.ReactCurrentBatchConfig;
  function ur(e, n, t) {
    if (
      ((e = t.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (t._owner) {
        if (((t = t._owner), t)) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          u = '' + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == 'function' &&
          n.ref._stringRef === u
          ? n.ref
          : ((n = function (i) {
              var o = l.refs;
              i === null ? delete o[u] : (o[u] = i);
            }),
            (n._stringRef = u),
            n);
      }
      if (typeof e != 'string') throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function qr(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        m(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(n).join(', ') + '}'
            : e
        )
      ))
    );
  }
  function ts(e) {
    var n = e._init;
    return n(e._payload);
  }
  function rs(e) {
    function n(c, a) {
      if (e) {
        var d = c.deletions;
        d === null ? ((c.deletions = [a]), (c.flags |= 16)) : d.push(a);
      }
    }
    function t(c, a) {
      if (!e) return null;
      for (; a !== null; ) n(c, a), (a = a.sibling);
      return null;
    }
    function r(c, a) {
      for (c = new Map(); a !== null; )
        a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
      return c;
    }
    function l(c, a) {
      return (c = Qn(c, a)), (c.index = 0), (c.sibling = null), c;
    }
    function u(c, a, d) {
      return (
        (c.index = d),
        e
          ? ((d = c.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((c.flags |= 2), a) : d)
              : ((c.flags |= 2), a))
          : ((c.flags |= 1048576), a)
      );
    }
    function i(c) {
      return e && c.alternate === null && (c.flags |= 2), c;
    }
    function o(c, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = gi(d, c.mode, w)), (a.return = c), a)
        : ((a = l(a, d)), (a.return = c), a);
    }
    function s(c, a, d, w) {
      var N = d.type;
      return N === Le
        ? y(c, a, d.props.children, w, d.key)
        : a !== null &&
            (a.elementType === N ||
              (typeof N == 'object' &&
                N !== null &&
                N.$$typeof === Te &&
                ts(N) === a.type))
          ? ((w = l(a, d.props)), (w.ref = ur(c, a, d)), (w.return = c), w)
          : ((w = El(d.type, d.key, d.props, null, c.mode, w)),
            (w.ref = ur(c, a, d)),
            (w.return = c),
            w);
    }
    function p(c, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = wi(d, c.mode, w)), (a.return = c), a)
        : ((a = l(a, d.children || [])), (a.return = c), a);
    }
    function y(c, a, d, w, N) {
      return a === null || a.tag !== 7
        ? ((a = it(d, c.mode, w, N)), (a.return = c), a)
        : ((a = l(a, d)), (a.return = c), a);
    }
    function g(c, a, d) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return (a = gi('' + a, c.mode, d)), (a.return = c), a;
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (d = El(a.type, a.key, a.props, null, c.mode, d)),
              (d.ref = ur(c, null, a)),
              (d.return = c),
              d
            );
          case Ne:
            return (a = wi(a, c.mode, d)), (a.return = c), a;
          case Te:
            var w = a._init;
            return g(c, w(a._payload), d);
        }
        if (Mt(a) || T(a))
          return (a = it(a, c.mode, d, null)), (a.return = c), a;
        qr(c, a);
      }
      return null;
    }
    function h(c, a, d, w) {
      var N = a !== null ? a.key : null;
      if ((typeof d == 'string' && d !== '') || typeof d == 'number')
        return N !== null ? null : o(c, a, '' + d, w);
      if (typeof d == 'object' && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === N ? s(c, a, d, w) : null;
          case Ne:
            return d.key === N ? p(c, a, d, w) : null;
          case Te:
            return (N = d._init), h(c, a, N(d._payload), w);
        }
        if (Mt(d) || T(d)) return N !== null ? null : y(c, a, d, w, null);
        qr(c, d);
      }
      return null;
    }
    function k(c, a, d, w, N) {
      if ((typeof w == 'string' && w !== '') || typeof w == 'number')
        return (c = c.get(d) || null), o(a, c, '' + w, N);
      if (typeof w == 'object' && w !== null) {
        switch (w.$$typeof) {
          case be:
            return (
              (c = c.get(w.key === null ? d : w.key) || null), s(a, c, w, N)
            );
          case Ne:
            return (
              (c = c.get(w.key === null ? d : w.key) || null), p(a, c, w, N)
            );
          case Te:
            var z = w._init;
            return k(c, a, d, z(w._payload), N);
        }
        if (Mt(w) || T(w)) return (c = c.get(d) || null), y(a, c, w, N, null);
        qr(a, w);
      }
      return null;
    }
    function x(c, a, d, w) {
      for (
        var N = null, z = null, L = a, R = (a = 0), he = null;
        L !== null && R < d.length;
        R++
      ) {
        L.index > R ? ((he = L), (L = null)) : (he = L.sibling);
        var V = h(c, L, d[R], w);
        if (V === null) {
          L === null && (L = he);
          break;
        }
        e && L && V.alternate === null && n(c, L),
          (a = u(V, a, R)),
          z === null ? (N = V) : (z.sibling = V),
          (z = V),
          (L = he);
      }
      if (R === d.length) return t(c, L), b && qn(c, R), N;
      if (L === null) {
        for (; R < d.length; R++)
          (L = g(c, d[R], w)),
            L !== null &&
              ((a = u(L, a, R)),
              z === null ? (N = L) : (z.sibling = L),
              (z = L));
        return b && qn(c, R), N;
      }
      for (L = r(c, L); R < d.length; R++)
        (he = k(L, c, R, d[R], w)),
          he !== null &&
            (e &&
              he.alternate !== null &&
              L.delete(he.key === null ? R : he.key),
            (a = u(he, a, R)),
            z === null ? (N = he) : (z.sibling = he),
            (z = he));
      return (
        e &&
          L.forEach(function (Kn) {
            return n(c, Kn);
          }),
        b && qn(c, R),
        N
      );
    }
    function C(c, a, d, w) {
      var N = T(d);
      if (typeof N != 'function') throw Error(m(150));
      if (((d = N.call(d)), d == null)) throw Error(m(151));
      for (
        var z = (N = null), L = a, R = (a = 0), he = null, V = d.next();
        L !== null && !V.done;
        R++, V = d.next()
      ) {
        L.index > R ? ((he = L), (L = null)) : (he = L.sibling);
        var Kn = h(c, L, V.value, w);
        if (Kn === null) {
          L === null && (L = he);
          break;
        }
        e && L && Kn.alternate === null && n(c, L),
          (a = u(Kn, a, R)),
          z === null ? (N = Kn) : (z.sibling = Kn),
          (z = Kn),
          (L = he);
      }
      if (V.done) return t(c, L), b && qn(c, R), N;
      if (L === null) {
        for (; !V.done; R++, V = d.next())
          (V = g(c, V.value, w)),
            V !== null &&
              ((a = u(V, a, R)),
              z === null ? (N = V) : (z.sibling = V),
              (z = V));
        return b && qn(c, R), N;
      }
      for (L = r(c, L); !V.done; R++, V = d.next())
        (V = k(L, c, R, V.value, w)),
          V !== null &&
            (e && V.alternate !== null && L.delete(V.key === null ? R : V.key),
            (a = u(V, a, R)),
            z === null ? (N = V) : (z.sibling = V),
            (z = V));
      return (
        e &&
          L.forEach(function (Rc) {
            return n(c, Rc);
          }),
        b && qn(c, R),
        N
      );
    }
    function ie(c, a, d, w) {
      if (
        (typeof d == 'object' &&
          d !== null &&
          d.type === Le &&
          d.key === null &&
          (d = d.props.children),
        typeof d == 'object' && d !== null)
      ) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var N = d.key, z = a; z !== null; ) {
                if (z.key === N) {
                  if (((N = d.type), N === Le)) {
                    if (z.tag === 7) {
                      t(c, z.sibling),
                        (a = l(z, d.props.children)),
                        (a.return = c),
                        (c = a);
                      break e;
                    }
                  } else if (
                    z.elementType === N ||
                    (typeof N == 'object' &&
                      N !== null &&
                      N.$$typeof === Te &&
                      ts(N) === z.type)
                  ) {
                    t(c, z.sibling),
                      (a = l(z, d.props)),
                      (a.ref = ur(c, z, d)),
                      (a.return = c),
                      (c = a);
                    break e;
                  }
                  t(c, z);
                  break;
                } else n(c, z);
                z = z.sibling;
              }
              d.type === Le
                ? ((a = it(d.props.children, c.mode, w, d.key)),
                  (a.return = c),
                  (c = a))
                : ((w = El(d.type, d.key, d.props, null, c.mode, w)),
                  (w.ref = ur(c, a, d)),
                  (w.return = c),
                  (c = w));
            }
            return i(c);
          case Ne:
            e: {
              for (z = d.key; a !== null; ) {
                if (a.key === z)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    t(c, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = c),
                      (c = a);
                    break e;
                  } else {
                    t(c, a);
                    break;
                  }
                else n(c, a);
                a = a.sibling;
              }
              (a = wi(d, c.mode, w)), (a.return = c), (c = a);
            }
            return i(c);
          case Te:
            return (z = d._init), ie(c, a, z(d._payload), w);
        }
        if (Mt(d)) return x(c, a, d, w);
        if (T(d)) return C(c, a, d, w);
        qr(c, d);
      }
      return (typeof d == 'string' && d !== '') || typeof d == 'number'
        ? ((d = '' + d),
          a !== null && a.tag === 6
            ? (t(c, a.sibling), (a = l(a, d)), (a.return = c), (c = a))
            : (t(c, a), (a = gi(d, c.mode, w)), (a.return = c), (c = a)),
          i(c))
        : t(c, a);
    }
    return ie;
  }
  var _t = rs(!0),
    ls = rs(!1),
    br = In(null),
    el = null,
    xt = null,
    zu = null;
  function Lu() {
    zu = xt = el = null;
  }
  function Tu(e) {
    var n = br.current;
    G(br), (e._currentValue = n);
  }
  function Ru(e, n, t) {
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
  function Ct(e, n) {
    (el = e),
      (zu = xt = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (De = !0), (e.firstContext = null));
  }
  function Xe(e) {
    var n = e._currentValue;
    if (zu !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), xt === null)) {
        if (el === null) throw Error(m(308));
        (xt = e), (el.dependencies = { lanes: 0, firstContext: e });
      } else xt = xt.next = e;
    return n;
  }
  var bn = null;
  function Ou(e) {
    bn === null ? (bn = [e]) : bn.push(e);
  }
  function us(e, n, t, r) {
    var l = n.interleaved;
    return (
      l === null ? ((t.next = t), Ou(n)) : ((t.next = l.next), (l.next = t)),
      (n.interleaved = t),
      _n(e, r)
    );
  }
  function _n(e, n) {
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
  var Un = !1;
  function Du(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function is(e, n) {
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
  function xn(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vn(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), j & 2)) {
      var l = r.pending;
      return (
        l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
        (r.pending = n),
        _n(e, t)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((n.next = n), Ou(r)) : ((n.next = l.next), (l.next = n)),
      (r.interleaved = n),
      _n(e, t)
    );
  }
  function nl(e, n, t) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Yl(e, t);
    }
  }
  function os(e, n) {
    var t = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
      var l = null,
        u = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var i = {
            eventTime: t.eventTime,
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: t.callback,
            next: null,
          };
          u === null ? (l = u = i) : (u = u.next = i), (t = t.next);
        } while (t !== null);
        u === null ? (l = u = n) : (u = u.next = n);
      } else l = u = n;
      (t = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
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
  function tl(e, n, t, r) {
    var l = e.updateQueue;
    Un = !1;
    var u = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        p = s.next;
      (s.next = null), i === null ? (u = p) : (i.next = p), (i = s);
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (o = y.lastBaseUpdate),
        o !== i &&
          (o === null ? (y.firstBaseUpdate = p) : (o.next = p),
          (y.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var g = l.baseState;
      (i = 0), (y = p = s = null), (o = u);
      do {
        var h = o.lane,
          k = o.eventTime;
        if ((r & h) === h) {
          y !== null &&
            (y = y.next =
              {
                eventTime: k,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var x = e,
              C = o;
            switch (((h = n), (k = t), C.tag)) {
              case 1:
                if (((x = C.payload), typeof x == 'function')) {
                  g = x.call(k, g, h);
                  break e;
                }
                g = x;
                break e;
              case 3:
                x.flags = (x.flags & -65537) | 128;
              case 0:
                if (
                  ((x = C.payload),
                  (h = typeof x == 'function' ? x.call(k, g, h) : x),
                  h == null)
                )
                  break e;
                g = _({}, g, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64),
            (h = l.effects),
            h === null ? (l.effects = [o]) : h.push(o));
        } else
          (k = {
            eventTime: k,
            lane: h,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            y === null ? ((p = y = k), (s = g)) : (y = y.next = k),
            (i |= h);
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          (h = o),
            (o = h.next),
            (h.next = null),
            (l.lastBaseUpdate = h),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (y === null && (s = g),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = y),
        (n = l.shared.interleaved),
        n !== null)
      ) {
        l = n;
        do (i |= l.lane), (l = l.next);
        while (l !== n);
      } else u === null && (l.shared.lanes = 0);
      (tt |= i), (e.lanes = i), (e.memoizedState = g);
    }
  }
  function ss(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var r = e[n],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = t), typeof l != 'function'))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var ir = {},
    mn = In(ir),
    or = In(ir),
    sr = In(ir);
  function et(e) {
    if (e === ir) throw Error(m(174));
    return e;
  }
  function Mu(e, n) {
    switch ((K(sr, n), K(or, e), K(mn, ir), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Il(null, '');
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Il(n, e));
    }
    G(mn), K(mn, n);
  }
  function Nt() {
    G(mn), G(or), G(sr);
  }
  function as(e) {
    et(sr.current);
    var n = et(mn.current),
      t = Il(n, e.type);
    n !== t && (K(or, e), K(mn, t));
  }
  function Iu(e) {
    or.current === e && (G(mn), G(or));
  }
  var ne = In(0);
  function rl(e) {
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
  var ju = [];
  function Fu() {
    for (var e = 0; e < ju.length; e++)
      ju[e]._workInProgressVersionPrimary = null;
    ju.length = 0;
  }
  var ll = Se.ReactCurrentDispatcher,
    Uu = Se.ReactCurrentBatchConfig,
    nt = 0,
    te = null,
    se = null,
    pe = null,
    ul = !1,
    ar = !1,
    fr = 0,
    bf = 0;
  function Ee() {
    throw Error(m(321));
  }
  function Vu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!tn(e[t], n[t])) return !1;
    return !0;
  }
  function Au(e, n, t, r, l, u) {
    if (
      ((nt = u),
      (te = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? rc : lc),
      (e = t(r, l)),
      ar)
    ) {
      u = 0;
      do {
        if (((ar = !1), (fr = 0), 25 <= u)) throw Error(m(301));
        (u += 1),
          (pe = se = null),
          (n.updateQueue = null),
          (ll.current = uc),
          (e = t(r, l));
      } while (ar);
    }
    if (
      ((ll.current = sl),
      (n = se !== null && se.next !== null),
      (nt = 0),
      (pe = se = te = null),
      (ul = !1),
      n)
    )
      throw Error(m(300));
    return e;
  }
  function Bu() {
    var e = fr !== 0;
    return (fr = 0), e;
  }
  function hn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return pe === null ? (te.memoizedState = pe = e) : (pe = pe.next = e), pe;
  }
  function Ge() {
    if (se === null) {
      var e = te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = se.next;
    var n = pe === null ? te.memoizedState : pe.next;
    if (n !== null) (pe = n), (se = e);
    else {
      if (e === null) throw Error(m(310));
      (se = e),
        (e = {
          memoizedState: se.memoizedState,
          baseState: se.baseState,
          baseQueue: se.baseQueue,
          queue: se.queue,
          next: null,
        }),
        pe === null ? (te.memoizedState = pe = e) : (pe = pe.next = e);
    }
    return pe;
  }
  function cr(e, n) {
    return typeof n == 'function' ? n(e) : n;
  }
  function Hu(e) {
    var n = Ge(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = se,
      l = r.baseQueue,
      u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        (l.next = u.next), (u.next = i);
      }
      (r.baseQueue = l = u), (t.pending = null);
    }
    if (l !== null) {
      (u = l.next), (r = r.baseState);
      var o = (i = null),
        s = null,
        p = u;
      do {
        var y = p.lane;
        if ((nt & y) === y)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action));
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          s === null ? ((o = s = g), (i = r)) : (s = s.next = g),
            (te.lanes |= y),
            (tt |= y);
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? (i = r) : (s.next = o),
        tn(r, n.memoizedState) || (De = !0),
        (n.memoizedState = r),
        (n.baseState = i),
        (n.baseQueue = s),
        (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
      l = e;
      do (u = l.lane), (te.lanes |= u), (tt |= u), (l = l.next);
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function $u(e) {
    var n = Ge(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
      l = t.pending,
      u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = (l = l.next);
      do (u = e(u, i.action)), (i = i.next);
      while (i !== l);
      tn(u, n.memoizedState) || (De = !0),
        (n.memoizedState = u),
        n.baseQueue === null && (n.baseState = u),
        (t.lastRenderedState = u);
    }
    return [u, r];
  }
  function fs() {}
  function cs(e, n) {
    var t = te,
      r = Ge(),
      l = n(),
      u = !tn(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (De = !0)),
      (r = r.queue),
      Wu(ms.bind(null, t, r, e), [e]),
      r.getSnapshot !== n || u || (pe !== null && pe.memoizedState.tag & 1))
    ) {
      if (
        ((t.flags |= 2048),
        dr(9, ps.bind(null, t, r, l, n), void 0, null),
        me === null)
      )
        throw Error(m(349));
      nt & 30 || ds(t, n, l);
    }
    return l;
  }
  function ds(e, n, t) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: t }),
      (n = te.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (te.updateQueue = n),
          (n.stores = [e]))
        : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
  }
  function ps(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), hs(n) && vs(e);
  }
  function ms(e, n, t) {
    return t(function () {
      hs(n) && vs(e);
    });
  }
  function hs(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !tn(e, t);
    } catch {
      return !0;
    }
  }
  function vs(e) {
    var n = _n(e, 1);
    n !== null && sn(n, e, 1, -1);
  }
  function ys(e) {
    var n = hn();
    return (
      typeof e == 'function' && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = tc.bind(null, te, e)),
      [n.memoizedState, e]
    );
  }
  function dr(e, n, t, r) {
    return (
      (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
      (n = te.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (te.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((t = n.lastEffect),
          t === null
            ? (n.lastEffect = e.next = e)
            : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
      e
    );
  }
  function gs() {
    return Ge().memoizedState;
  }
  function il(e, n, t, r) {
    var l = hn();
    (te.flags |= e),
      (l.memoizedState = dr(1 | n, t, void 0, r === void 0 ? null : r));
  }
  function ol(e, n, t, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (se !== null) {
      var i = se.memoizedState;
      if (((u = i.destroy), r !== null && Vu(r, i.deps))) {
        l.memoizedState = dr(n, t, u, r);
        return;
      }
    }
    (te.flags |= e), (l.memoizedState = dr(1 | n, t, u, r));
  }
  function ws(e, n) {
    return il(8390656, 8, e, n);
  }
  function Wu(e, n) {
    return ol(2048, 8, e, n);
  }
  function Ss(e, n) {
    return ol(4, 2, e, n);
  }
  function ks(e, n) {
    return ol(4, 4, e, n);
  }
  function Es(e, n) {
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
  function _s(e, n, t) {
    return (
      (t = t != null ? t.concat([e]) : null), ol(4, 4, Es.bind(null, n, e), t)
    );
  }
  function Qu() {}
  function xs(e, n) {
    var t = Ge();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vu(n, r[1])
      ? r[0]
      : ((t.memoizedState = [e, n]), e);
  }
  function Cs(e, n) {
    var t = Ge();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vu(n, r[1])
      ? r[0]
      : ((e = e()), (t.memoizedState = [e, n]), e);
  }
  function Ns(e, n, t) {
    return nt & 21
      ? (tn(t, n) ||
          ((t = no()), (te.lanes |= t), (tt |= t), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = t));
  }
  function ec(e, n) {
    var t = H;
    (H = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = Uu.transition;
    Uu.transition = {};
    try {
      e(!1), n();
    } finally {
      (H = t), (Uu.transition = r);
    }
  }
  function Ps() {
    return Ge().memoizedState;
  }
  function nc(e, n, t) {
    var r = $n(e);
    if (
      ((t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zs(e))
    )
      Ls(n, t);
    else if (((t = us(e, n, t, r)), t !== null)) {
      var l = ze();
      sn(t, e, r, l), Ts(t, n, r);
    }
  }
  function tc(e, n, t) {
    var r = $n(e),
      l = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (zs(e)) Ls(n, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = n.lastRenderedReducer), u !== null)
      )
        try {
          var i = n.lastRenderedState,
            o = u(i, t);
          if (((l.hasEagerState = !0), (l.eagerState = o), tn(o, i))) {
            var s = n.interleaved;
            s === null
              ? ((l.next = l), Ou(n))
              : ((l.next = s.next), (s.next = l)),
              (n.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (t = us(e, n, l, r)),
        t !== null && ((l = ze()), sn(t, e, r, l), Ts(t, n, r));
    }
  }
  function zs(e) {
    var n = e.alternate;
    return e === te || (n !== null && n === te);
  }
  function Ls(e, n) {
    ar = ul = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
      (e.pending = n);
  }
  function Ts(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Yl(e, t);
    }
  }
  var sl = {
      readContext: Xe,
      useCallback: Ee,
      useContext: Ee,
      useEffect: Ee,
      useImperativeHandle: Ee,
      useInsertionEffect: Ee,
      useLayoutEffect: Ee,
      useMemo: Ee,
      useReducer: Ee,
      useRef: Ee,
      useState: Ee,
      useDebugValue: Ee,
      useDeferredValue: Ee,
      useTransition: Ee,
      useMutableSource: Ee,
      useSyncExternalStore: Ee,
      useId: Ee,
      unstable_isNewReconciler: !1,
    },
    rc = {
      readContext: Xe,
      useCallback: function (e, n) {
        return (hn().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Xe,
      useEffect: ws,
      useImperativeHandle: function (e, n, t) {
        return (
          (t = t != null ? t.concat([e]) : null),
          il(4194308, 4, Es.bind(null, n, e), t)
        );
      },
      useLayoutEffect: function (e, n) {
        return il(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return il(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var t = hn();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (t.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, t) {
        var r = hn();
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
          (e = e.dispatch = nc.bind(null, te, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = hn();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: ys,
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        return (hn().memoizedState = e);
      },
      useTransition: function () {
        var e = ys(!1),
          n = e[0];
        return (e = ec.bind(null, e[1])), (hn().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, t) {
        var r = te,
          l = hn();
        if (b) {
          if (t === void 0) throw Error(m(407));
          t = t();
        } else {
          if (((t = n()), me === null)) throw Error(m(349));
          nt & 30 || ds(r, n, t);
        }
        l.memoizedState = t;
        var u = { value: t, getSnapshot: n };
        return (
          (l.queue = u),
          ws(ms.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          dr(9, ps.bind(null, r, u, t, n), void 0, null),
          t
        );
      },
      useId: function () {
        var e = hn(),
          n = me.identifierPrefix;
        if (b) {
          var t = En,
            r = kn;
          (t = (r & ~(1 << (32 - nn(r) - 1))).toString(32) + t),
            (n = ':' + n + 'R' + t),
            (t = fr++),
            0 < t && (n += 'H' + t.toString(32)),
            (n += ':');
        } else (t = bf++), (n = ':' + n + 'r' + t.toString(32) + ':');
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    lc = {
      readContext: Xe,
      useCallback: xs,
      useContext: Xe,
      useEffect: Wu,
      useImperativeHandle: _s,
      useInsertionEffect: Ss,
      useLayoutEffect: ks,
      useMemo: Cs,
      useReducer: Hu,
      useRef: gs,
      useState: function () {
        return Hu(cr);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        var n = Ge();
        return Ns(n, se.memoizedState, e);
      },
      useTransition: function () {
        var e = Hu(cr)[0],
          n = Ge().memoizedState;
        return [e, n];
      },
      useMutableSource: fs,
      useSyncExternalStore: cs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    },
    uc = {
      readContext: Xe,
      useCallback: xs,
      useContext: Xe,
      useEffect: Wu,
      useImperativeHandle: _s,
      useInsertionEffect: Ss,
      useLayoutEffect: ks,
      useMemo: Cs,
      useReducer: $u,
      useRef: gs,
      useState: function () {
        return $u(cr);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        var n = Ge();
        return se === null ? (n.memoizedState = e) : Ns(n, se.memoizedState, e);
      },
      useTransition: function () {
        var e = $u(cr)[0],
          n = Ge().memoizedState;
        return [e, n];
      },
      useMutableSource: fs,
      useSyncExternalStore: cs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    };
  function ln(e, n) {
    if (e && e.defaultProps) {
      (n = _({}, n)), (e = e.defaultProps);
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Ku(e, n, t, r) {
    (n = e.memoizedState),
      (t = t(r, n)),
      (t = t == null ? n : _({}, n, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xn(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
      e = e._reactInternals;
      var r = ze(),
        l = $n(e),
        u = xn(r, l);
      (u.payload = n),
        t != null && (u.callback = t),
        (n = Vn(e, u, l)),
        n !== null && (sn(n, e, l, r), nl(n, e, l));
    },
    enqueueReplaceState: function (e, n, t) {
      e = e._reactInternals;
      var r = ze(),
        l = $n(e),
        u = xn(r, l);
      (u.tag = 1),
        (u.payload = n),
        t != null && (u.callback = t),
        (n = Vn(e, u, l)),
        n !== null && (sn(n, e, l, r), nl(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var t = ze(),
        r = $n(e),
        l = xn(t, r);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = Vn(e, l, r)),
        n !== null && (sn(n, e, r, t), nl(n, e, r));
    },
  };
  function Rs(e, n, t, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, u, i)
        : n.prototype && n.prototype.isPureReactComponent
          ? !qt(t, r) || !qt(l, u)
          : !0
    );
  }
  function Os(e, n, t) {
    var r = !1,
      l = jn,
      u = n.contextType;
    return (
      typeof u == 'object' && u !== null
        ? (u = Xe(u))
        : ((l = Oe(n) ? Zn : ke.current),
          (r = n.contextTypes),
          (u = (r = r != null) ? wt(e, l) : jn)),
      (n = new n(t, u)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = al),
      (e.stateNode = n),
      (n._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      n
    );
  }
  function Ds(e, n, t, r) {
    (e = n.state),
      typeof n.componentWillReceiveProps == 'function' &&
        n.componentWillReceiveProps(t, r),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(t, r),
      n.state !== e && al.enqueueReplaceState(n, n.state, null);
  }
  function Yu(e, n, t, r) {
    var l = e.stateNode;
    (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Du(e);
    var u = n.contextType;
    typeof u == 'object' && u !== null
      ? (l.context = Xe(u))
      : ((u = Oe(n) ? Zn : ke.current), (l.context = wt(e, u))),
      (l.state = e.memoizedState),
      (u = n.getDerivedStateFromProps),
      typeof u == 'function' && (Ku(e, n, u, t), (l.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((n = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' &&
          l.UNSAFE_componentWillMount(),
        n !== l.state && al.enqueueReplaceState(l, l.state, null),
        tl(e, t, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function Pt(e, n) {
    try {
      var t = '',
        r = n;
      do (t += F(r)), (r = r.return);
      while (r);
      var l = t;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Xu(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Gu(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }
  }
  var ic = typeof WeakMap == 'function' ? WeakMap : Map;
  function Ms(e, n, t) {
    (t = xn(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
      (t.callback = function () {
        vl || ((vl = !0), (fi = r)), Gu(e, n);
      }),
      t
    );
  }
  function Is(e, n, t) {
    (t = xn(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = n.value;
      (t.payload = function () {
        return r(l);
      }),
        (t.callback = function () {
          Gu(e, n);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == 'function' &&
        (t.callback = function () {
          Gu(e, n),
            typeof r != 'function' &&
              (Bn === null ? (Bn = new Set([this])) : Bn.add(this));
          var i = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: i !== null ? i : '',
          });
        }),
      t
    );
  }
  function js(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new ic();
      var l = new Set();
      r.set(n, l);
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
    l.has(t) || (l.add(t), (e = Sc.bind(null, e, n, t)), n.then(e, e));
  }
  function Fs(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Us(e, n, t, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (t.flags |= 131072),
            (t.flags &= -52805),
            t.tag === 1 &&
              (t.alternate === null
                ? (t.tag = 17)
                : ((n = xn(-1, 1)), (n.tag = 2), Vn(t, n, 1))),
            (t.lanes |= 1)),
        e);
  }
  var oc = Se.ReactCurrentOwner,
    De = !1;
  function Pe(e, n, t, r) {
    n.child = e === null ? ls(n, null, t, r) : _t(n, e.child, t, r);
  }
  function Vs(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return (
      Ct(n, l),
      (r = Au(e, n, t, r, u, l)),
      (t = Bu()),
      e !== null && !De
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Cn(e, n, l))
        : (b && t && _u(n), (n.flags |= 1), Pe(e, n, r, l), n.child)
    );
  }
  function As(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == 'function' &&
        !yi(u) &&
        u.defaultProps === void 0 &&
        t.compare === null &&
        t.defaultProps === void 0
        ? ((n.tag = 15), (n.type = u), Bs(e, n, u, r, l))
        : ((e = El(t.type, null, r, n, n.mode, l)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((u = e.child), !(e.lanes & l))) {
      var i = u.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : qt), t(i, r) && e.ref === n.ref)
      )
        return Cn(e, n, l);
    }
    return (
      (n.flags |= 1),
      (e = Qn(u, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Bs(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (qt(u, r) && e.ref === n.ref)
        if (((De = !1), (n.pendingProps = r = u), (e.lanes & l) !== 0))
          e.flags & 131072 && (De = !0);
        else return (n.lanes = e.lanes), Cn(e, n, l);
    }
    return Zu(e, n, t, r, l);
  }
  function Hs(e, n, t) {
    var r = n.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          K(Lt, He),
          (He |= t);
      else {
        if (!(t & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | t : t),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            K(Lt, He),
            (He |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : t),
          K(Lt, He),
          (He |= r);
      }
    else
      u !== null ? ((r = u.baseLanes | t), (n.memoizedState = null)) : (r = t),
        K(Lt, He),
        (He |= r);
    return Pe(e, n, l, t), n.child;
  }
  function $s(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function Zu(e, n, t, r, l) {
    var u = Oe(t) ? Zn : ke.current;
    return (
      (u = wt(n, u)),
      Ct(n, l),
      (t = Au(e, n, t, r, u, l)),
      (r = Bu()),
      e !== null && !De
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Cn(e, n, l))
        : (b && r && _u(n), (n.flags |= 1), Pe(e, n, t, l), n.child)
    );
  }
  function Ws(e, n, t, r, l) {
    if (Oe(t)) {
      var u = !0;
      Yr(n);
    } else u = !1;
    if ((Ct(n, l), n.stateNode === null))
      cl(e, n), Os(n, t, r), Yu(n, t, r, l), (r = !0);
    else if (e === null) {
      var i = n.stateNode,
        o = n.memoizedProps;
      i.props = o;
      var s = i.context,
        p = t.contextType;
      typeof p == 'object' && p !== null
        ? (p = Xe(p))
        : ((p = Oe(t) ? Zn : ke.current), (p = wt(n, p)));
      var y = t.getDerivedStateFromProps,
        g =
          typeof y == 'function' ||
          typeof i.getSnapshotBeforeUpdate == 'function';
      g ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((o !== r || s !== p) && Ds(n, i, r, p)),
        (Un = !1);
      var h = n.memoizedState;
      (i.state = h),
        tl(n, r, i, l),
        (s = n.memoizedState),
        o !== r || h !== s || Re.current || Un
          ? (typeof y == 'function' && (Ku(n, t, y, r), (s = n.memoizedState)),
            (o = Un || Rs(n, t, o, r, h, s, p))
              ? (g ||
                  (typeof i.UNSAFE_componentWillMount != 'function' &&
                    typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' &&
                  (n.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = p),
            (r = o))
          : (typeof i.componentDidMount == 'function' && (n.flags |= 4194308),
            (r = !1));
    } else {
      (i = n.stateNode),
        is(e, n),
        (o = n.memoizedProps),
        (p = n.type === n.elementType ? o : ln(n.type, o)),
        (i.props = p),
        (g = n.pendingProps),
        (h = i.context),
        (s = t.contextType),
        typeof s == 'object' && s !== null
          ? (s = Xe(s))
          : ((s = Oe(t) ? Zn : ke.current), (s = wt(n, s)));
      var k = t.getDerivedStateFromProps;
      (y =
        typeof k == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((o !== g || h !== s) && Ds(n, i, r, s)),
        (Un = !1),
        (h = n.memoizedState),
        (i.state = h),
        tl(n, r, i, l);
      var x = n.memoizedState;
      o !== g || h !== x || Re.current || Un
        ? (typeof k == 'function' && (Ku(n, t, k, r), (x = n.memoizedState)),
          (p = Un || Rs(n, t, p, r, h, x, s) || !1)
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' &&
                  i.componentWillUpdate(r, x, s),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, x, s)),
              typeof i.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' &&
                (n.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = x)),
          (i.props = r),
          (i.state = x),
          (i.context = s),
          (r = p))
        : (typeof i.componentDidUpdate != 'function' ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return Ju(e, n, t, r, u, l);
  }
  function Ju(e, n, t, r, l, u) {
    $s(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && Go(n, t, !1), Cn(e, n, u);
    (r = n.stateNode), (oc.current = n);
    var o =
      i && typeof t.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (n.flags |= 1),
      e !== null && i
        ? ((n.child = _t(n, e.child, null, u)), (n.child = _t(n, null, o, u)))
        : Pe(e, n, o, u),
      (n.memoizedState = r.state),
      l && Go(n, t, !0),
      n.child
    );
  }
  function Qs(e) {
    var n = e.stateNode;
    n.pendingContext
      ? Yo(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Yo(e, n.context, !1),
      Mu(e, n.containerInfo);
  }
  function Ks(e, n, t, r, l) {
    return Et(), Pu(l), (n.flags |= 256), Pe(e, n, t, r), n.child;
  }
  var qu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ys(e, n, t) {
    var r = n.pendingProps,
      l = ne.current,
      u = !1,
      i = (n.flags & 128) !== 0,
      o;
    if (
      ((o = i) ||
        (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o
        ? ((u = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      K(ne, l & 1),
      e === null)
    )
      return (
        Nu(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === '$!'
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((i = r.children),
            (e = r.fallback),
            u
              ? ((r = n.mode),
                (u = n.child),
                (i = { mode: 'hidden', children: i }),
                !(r & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = i))
                  : (u = _l(i, r, 0, null)),
                (e = it(e, r, t, null)),
                (u.return = n),
                (e.return = n),
                (u.sibling = e),
                (n.child = u),
                (n.child.memoizedState = bu(t)),
                (n.memoizedState = qu),
                e)
              : ei(n, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return sc(e, n, i, r, o, l, t);
    if (u) {
      (u = r.fallback), (i = n.mode), (l = e.child), (o = l.sibling);
      var s = { mode: 'hidden', children: r.children };
      return (
        !(i & 1) && n.child !== l
          ? ((r = n.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (n.deletions = null))
          : ((r = Qn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = Qn(o, u)) : ((u = it(u, i, t, null)), (u.flags |= 2)),
        (u.return = n),
        (r.return = n),
        (r.sibling = u),
        (n.child = r),
        (r = u),
        (u = n.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? bu(t)
            : {
                baseLanes: i.baseLanes | t,
                cachePool: null,
                transitions: i.transitions,
              }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~t),
        (n.memoizedState = qu),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = Qn(u, { mode: 'visible', children: r.children })),
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
  function ei(e, n) {
    return (
      (n = _l({ mode: 'visible', children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function fl(e, n, t, r) {
    return (
      r !== null && Pu(r),
      _t(n, e.child, null, t),
      (e = ei(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function sc(e, n, t, r, l, u, i) {
    if (t)
      return n.flags & 256
        ? ((n.flags &= -257), (r = Xu(Error(m(422)))), fl(e, n, i, r))
        : n.memoizedState !== null
          ? ((n.child = e.child), (n.flags |= 128), null)
          : ((u = r.fallback),
            (l = n.mode),
            (r = _l({ mode: 'visible', children: r.children }, l, 0, null)),
            (u = it(u, l, i, null)),
            (u.flags |= 2),
            (r.return = n),
            (u.return = n),
            (r.sibling = u),
            (n.child = r),
            n.mode & 1 && _t(n, e.child, null, i),
            (n.child.memoizedState = bu(i)),
            (n.memoizedState = qu),
            u);
    if (!(n.mode & 1)) return fl(e, n, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return (
        (r = o), (u = Error(m(419))), (r = Xu(u, r, void 0)), fl(e, n, i, r)
      );
    }
    if (((o = (i & e.childLanes) !== 0), De || o)) {
      if (((r = me), r !== null)) {
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
        (l = l & (r.suspendedLanes | i) ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), _n(e, l), sn(r, e, l, -1));
      }
      return vi(), (r = Xu(Error(m(421)))), fl(e, n, i, r);
    }
    return l.data === '$?'
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = kc.bind(null, e)),
        (l._reactRetry = n),
        null)
      : ((e = u.treeContext),
        (Be = Mn(l.nextSibling)),
        (Ae = n),
        (b = !0),
        (rn = null),
        e !== null &&
          ((Ke[Ye++] = kn),
          (Ke[Ye++] = En),
          (Ke[Ye++] = Jn),
          (kn = e.id),
          (En = e.overflow),
          (Jn = n)),
        (n = ei(n, r.children)),
        (n.flags |= 4096),
        n);
  }
  function Xs(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Ru(e.return, n, t);
  }
  function ni(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: t,
          tailMode: l,
        })
      : ((u.isBackwards = n),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = t),
        (u.tailMode = l));
  }
  function Gs(e, n, t) {
    var r = n.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Pe(e, n, r.children, t), (r = ne.current), r & 2))
      (r = (r & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xs(e, t, n);
          else if (e.tag === 19) Xs(e, t, n);
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
    if ((K(ne, r), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (t = n.child, l = null; t !== null; )
            (e = t.alternate),
              e !== null && rl(e) === null && (l = t),
              (t = t.sibling);
          (t = l),
            t === null
              ? ((l = n.child), (n.child = null))
              : ((l = t.sibling), (t.sibling = null)),
            ni(n, !1, l, t, u);
          break;
        case 'backwards':
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
              n.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = t), (t = l), (l = e);
          }
          ni(n, !0, t, null, u);
          break;
        case 'together':
          ni(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function cl(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function Cn(e, n, t) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (tt |= n.lanes),
      !(t & n.childLanes))
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (
        e = n.child, t = Qn(e, e.pendingProps), n.child = t, t.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (t = t.sibling = Qn(e, e.pendingProps)),
          (t.return = n);
      t.sibling = null;
    }
    return n.child;
  }
  function ac(e, n, t) {
    switch (n.tag) {
      case 3:
        Qs(n), Et();
        break;
      case 5:
        as(n);
        break;
      case 1:
        Oe(n.type) && Yr(n);
        break;
      case 4:
        Mu(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context,
          l = n.memoizedProps.value;
        K(br, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = n.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (K(ne, ne.current & 1), (n.flags |= 128), null)
            : t & n.child.childLanes
              ? Ys(e, n, t)
              : (K(ne, ne.current & 1),
                (e = Cn(e, n, t)),
                e !== null ? e.sibling : null);
        K(ne, ne.current & 1);
        break;
      case 19:
        if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
          if (r) return Gs(e, n, t);
          n.flags |= 128;
        }
        if (
          ((l = n.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          K(ne, ne.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Hs(e, n, t);
    }
    return Cn(e, n, t);
  }
  var Zs, ti, Js, qs;
  (Zs = function (e, n) {
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
  }),
    (ti = function () {}),
    (Js = function (e, n, t, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = n.stateNode), et(mn.current);
        var u = null;
        switch (t) {
          case 'input':
            (l = Rl(e, l)), (r = Rl(e, r)), (u = []);
            break;
          case 'select':
            (l = _({}, l, { value: void 0 })),
              (r = _({}, r, { value: void 0 })),
              (u = []);
            break;
          case 'textarea':
            (l = Ml(e, l)), (r = Ml(e, r)), (u = []);
            break;
          default:
            typeof l.onClick != 'function' &&
              typeof r.onClick == 'function' &&
              (e.onclick = Wr);
        }
        jl(t, r);
        var i;
        t = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === 'style') {
              var o = l[p];
              for (i in o) o.hasOwnProperty(i) && (t || (t = {}), (t[i] = ''));
            } else
              p !== 'dangerouslySetInnerHTML' &&
                p !== 'children' &&
                p !== 'suppressContentEditableWarning' &&
                p !== 'suppressHydrationWarning' &&
                p !== 'autoFocus' &&
                (A.hasOwnProperty(p)
                  ? u || (u = [])
                  : (u = u || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((o = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== o && (s != null || o != null))
          )
            if (p === 'style')
              if (o) {
                for (i in o)
                  !o.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (t || (t = {}), (t[i] = ''));
                for (i in s)
                  s.hasOwnProperty(i) &&
                    o[i] !== s[i] &&
                    (t || (t = {}), (t[i] = s[i]));
              } else t || (u || (u = []), u.push(p, t)), (t = s);
            else
              p === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (u = u || []).push(p, s))
                : p === 'children'
                  ? (typeof s != 'string' && typeof s != 'number') ||
                    (u = u || []).push(p, '' + s)
                  : p !== 'suppressContentEditableWarning' &&
                    p !== 'suppressHydrationWarning' &&
                    (A.hasOwnProperty(p)
                      ? (s != null && p === 'onScroll' && X('scroll', e),
                        u || o === s || (u = []))
                      : (u = u || []).push(p, s));
        }
        t && (u = u || []).push('style', t);
        var p = u;
        (n.updateQueue = p) && (n.flags |= 4);
      }
    }),
    (qs = function (e, n, t, r) {
      t !== r && (n.flags |= 4);
    });
  function pr(e, n) {
    if (!b)
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
  function _e(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
  }
  function fc(e, n, t) {
    var r = n.pendingProps;
    switch ((xu(n), n.tag)) {
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
        return _e(n), null;
      case 1:
        return Oe(n.type) && Kr(), _e(n), null;
      case 3:
        return (
          (r = n.stateNode),
          Nt(),
          G(Re),
          G(ke),
          Fu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), rn !== null && (pi(rn), (rn = null)))),
          ti(e, n),
          _e(n),
          null
        );
      case 5:
        Iu(n);
        var l = et(sr.current);
        if (((t = n.type), e !== null && n.stateNode != null))
          Js(e, n, t, r, l),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return _e(n), null;
          }
          if (((e = et(mn.current)), Jr(n))) {
            (r = n.stateNode), (t = n.type);
            var u = n.memoizedProps;
            switch (((r[pn] = n), (r[rr] = u), (e = (n.mode & 1) !== 0), t)) {
              case 'dialog':
                X('cancel', r), X('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                X('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < er.length; l++) X(er[l], r);
                break;
              case 'source':
                X('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                X('error', r), X('load', r);
                break;
              case 'details':
                X('toggle', r);
                break;
              case 'input':
                Ri(r, u), X('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!u.multiple }),
                  X('invalid', r);
                break;
              case 'textarea':
                Mi(r, u), X('invalid', r);
            }
            jl(t, u), (l = null);
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === 'children'
                  ? typeof o == 'string'
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 &&
                        $r(r.textContent, o, e),
                      (l = ['children', o]))
                    : typeof o == 'number' &&
                      r.textContent !== '' + o &&
                      (u.suppressHydrationWarning !== !0 &&
                        $r(r.textContent, o, e),
                      (l = ['children', '' + o]))
                  : A.hasOwnProperty(i) &&
                    o != null &&
                    i === 'onScroll' &&
                    X('scroll', r);
              }
            switch (t) {
              case 'input':
                Sr(r), Di(r, u, !0);
                break;
              case 'textarea':
                Sr(r), ji(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof u.onClick == 'function' && (r.onclick = Wr);
            }
            (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Fi(t)),
              e === 'http://www.w3.org/1999/xhtml'
                ? t === 'script'
                  ? ((e = i.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = i.createElement(t, { is: r.is }))
                    : ((e = i.createElement(t)),
                      t === 'select' &&
                        ((i = e),
                        r.multiple
                          ? (i.multiple = !0)
                          : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, t)),
              (e[pn] = n),
              (e[rr] = r),
              Zs(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((i = Fl(t, r)), t)) {
                case 'dialog':
                  X('cancel', e), X('close', e), (l = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  X('load', e), (l = r);
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < er.length; l++) X(er[l], e);
                  l = r;
                  break;
                case 'source':
                  X('error', e), (l = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  X('error', e), X('load', e), (l = r);
                  break;
                case 'details':
                  X('toggle', e), (l = r);
                  break;
                case 'input':
                  Ri(e, r), (l = Rl(e, r)), X('invalid', e);
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    X('invalid', e);
                  break;
                case 'textarea':
                  Mi(e, r), (l = Ml(e, r)), X('invalid', e);
                  break;
                default:
                  l = r;
              }
              jl(t, l), (o = l);
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === 'style'
                    ? Ai(e, s)
                    : u === 'dangerouslySetInnerHTML'
                      ? ((s = s ? s.__html : void 0), s != null && Ui(e, s))
                      : u === 'children'
                        ? typeof s == 'string'
                          ? (t !== 'textarea' || s !== '') && It(e, s)
                          : typeof s == 'number' && It(e, '' + s)
                        : u !== 'suppressContentEditableWarning' &&
                          u !== 'suppressHydrationWarning' &&
                          u !== 'autoFocus' &&
                          (A.hasOwnProperty(u)
                            ? s != null && u === 'onScroll' && X('scroll', e)
                            : s != null && qe(e, u, s, i));
                }
              switch (t) {
                case 'input':
                  Sr(e), Di(e, r, !1);
                  break;
                case 'textarea':
                  Sr(e), ji(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + B(r.value));
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? ot(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        ot(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = Wr);
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
        return _e(n), null;
      case 6:
        if (e && n.stateNode != null) qs(e, n, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && n.stateNode === null) throw Error(m(166));
          if (((t = et(sr.current)), et(mn.current), Jr(n))) {
            if (
              ((r = n.stateNode),
              (t = n.memoizedProps),
              (r[pn] = n),
              (u = r.nodeValue !== t) && ((e = Ae), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $r(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $r(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            u && (n.flags |= 4);
          } else
            (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
              (r[pn] = n),
              (n.stateNode = r);
        }
        return _e(n), null;
      case 13:
        if (
          (G(ne),
          (r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (b && Be !== null && n.mode & 1 && !(n.flags & 128))
            ns(), Et(), (n.flags |= 98560), (u = !1);
          else if (((u = Jr(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[pn] = n;
            } else
              Et(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            _e(n), (u = !1);
          } else rn !== null && (pi(rn), (rn = null)), (u = !0);
          if (!u) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = t), n)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || ne.current & 1 ? ae === 0 && (ae = 3) : vi())),
            n.updateQueue !== null && (n.flags |= 4),
            _e(n),
            null);
      case 4:
        return (
          Nt(),
          ti(e, n),
          e === null && nr(n.stateNode.containerInfo),
          _e(n),
          null
        );
      case 10:
        return Tu(n.type._context), _e(n), null;
      case 17:
        return Oe(n.type) && Kr(), _e(n), null;
      case 19:
        if ((G(ne), (u = n.memoizedState), u === null)) return _e(n), null;
        if (((r = (n.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) pr(u, !1);
          else {
            if (ae !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((i = rl(e)), i !== null)) {
                  for (
                    n.flags |= 128,
                      pr(u, !1),
                      r = i.updateQueue,
                      r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      r = t,
                      t = n.child;
                    t !== null;

                  )
                    (u = t),
                      (e = r),
                      (u.flags &= 14680066),
                      (i = u.alternate),
                      i === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = i.childLanes),
                          (u.lanes = i.lanes),
                          (u.child = i.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = i.memoizedProps),
                          (u.memoizedState = i.memoizedState),
                          (u.updateQueue = i.updateQueue),
                          (u.type = i.type),
                          (e = i.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (t = t.sibling);
                  return K(ne, (ne.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              ue() > Tt &&
              ((n.flags |= 128), (r = !0), pr(u, !1), (n.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = rl(i)), e !== null)) {
              if (
                ((n.flags |= 128),
                (r = !0),
                (t = e.updateQueue),
                t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                pr(u, !0),
                u.tail === null &&
                  u.tailMode === 'hidden' &&
                  !i.alternate &&
                  !b)
              )
                return _e(n), null;
            } else
              2 * ue() - u.renderingStartTime > Tt &&
                t !== 1073741824 &&
                ((n.flags |= 128), (r = !0), pr(u, !1), (n.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = n.child), (n.child = i))
            : ((t = u.last),
              t !== null ? (t.sibling = i) : (n.child = i),
              (u.last = i));
        }
        return u.tail !== null
          ? ((n = u.tail),
            (u.rendering = n),
            (u.tail = n.sibling),
            (u.renderingStartTime = ue()),
            (n.sibling = null),
            (t = ne.current),
            K(ne, r ? (t & 1) | 2 : t & 1),
            n)
          : (_e(n), null);
      case 22:
      case 23:
        return (
          hi(),
          (r = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
          r && n.mode & 1
            ? He & 1073741824 &&
              (_e(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : _e(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function cc(e, n) {
    switch ((xu(n), n.tag)) {
      case 1:
        return (
          Oe(n.type) && Kr(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Nt(),
          G(Re),
          G(ke),
          Fu(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return Iu(n), null;
      case 13:
        if (
          (G(ne), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(m(340));
          Et();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return G(ne), null;
      case 4:
        return Nt(), null;
      case 10:
        return Tu(n.type._context), null;
      case 22:
      case 23:
        return hi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    xe = !1,
    dc = typeof WeakSet == 'function' ? WeakSet : Set,
    E = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == 'function')
        try {
          t(null);
        } catch (r) {
          le(e, n, r);
        }
      else t.current = null;
  }
  function ri(e, n, t) {
    try {
      t();
    } catch (r) {
      le(e, n, r);
    }
  }
  var bs = !1;
  function pc(e, n) {
    if (((hu = Or), (e = Ro()), ou(e))) {
      if ('selectionStart' in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break e;
            }
            var i = 0,
              o = -1,
              s = -1,
              p = 0,
              y = 0,
              g = e,
              h = null;
            n: for (;;) {
              for (
                var k;
                g !== t || (l !== 0 && g.nodeType !== 3) || (o = i + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (k = g.firstChild) !== null;

              )
                (h = g), (g = k);
              for (;;) {
                if (g === e) break n;
                if (
                  (h === t && ++p === l && (o = i),
                  h === u && ++y === r && (s = i),
                  (k = g.nextSibling) !== null)
                )
                  break;
                (g = h), (h = g.parentNode);
              }
              g = k;
            }
            t = o === -1 || s === -1 ? null : { start: o, end: s };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      vu = { focusedElem: e, selectionRange: t }, Or = !1, E = n;
      E !== null;

    )
      if (((n = E), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (E = e);
      else
        for (; E !== null; ) {
          n = E;
          try {
            var x = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (x !== null) {
                    var C = x.memoizedProps,
                      ie = x.memoizedState,
                      c = n.stateNode,
                      a = c.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? C : ln(n.type, C),
                        ie
                      );
                    c.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = n.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = '')
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            le(n, n.return, w);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (E = e);
            break;
          }
          E = n.return;
        }
    return (x = bs), (bs = !1), x;
  }
  function mr(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          (l.destroy = void 0), u !== void 0 && ri(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, n) {
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
  function li(e) {
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
  function ea(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), ea(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[pn],
          delete n[rr],
          delete n[Su],
          delete n[Gf],
          delete n[Zf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function na(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ta(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || na(e.return)) return null;
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
  function ui(e, n, t) {
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
            t != null || n.onclick !== null || (n.onclick = Wr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ui(e, n, t), e = e.sibling; e !== null; )
        ui(e, n, t), (e = e.sibling);
  }
  function ii(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ii(e, n, t), e = e.sibling; e !== null; )
        ii(e, n, t), (e = e.sibling);
  }
  var ye = null,
    un = !1;
  function An(e, n, t) {
    for (t = t.child; t !== null; ) ra(e, n, t), (t = t.sibling);
  }
  function ra(e, n, t) {
    if (dn && typeof dn.onCommitFiberUnmount == 'function')
      try {
        dn.onCommitFiberUnmount(Nr, t);
      } catch {}
    switch (t.tag) {
      case 5:
        xe || zt(t, n);
      case 6:
        var r = ye,
          l = un;
        (ye = null),
          An(e, n, t),
          (ye = r),
          (un = l),
          ye !== null &&
            (un
              ? ((e = ye),
                (t = t.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(t)
                  : e.removeChild(t))
              : ye.removeChild(t.stateNode));
        break;
      case 18:
        ye !== null &&
          (un
            ? ((e = ye),
              (t = t.stateNode),
              e.nodeType === 8
                ? wu(e.parentNode, t)
                : e.nodeType === 1 && wu(e, t),
              Kt(e))
            : wu(ye, t.stateNode));
        break;
      case 4:
        (r = ye),
          (l = un),
          (ye = t.stateNode.containerInfo),
          (un = !0),
          An(e, n, t),
          (ye = r),
          (un = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !xe &&
          ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            (u = u.tag),
              i !== void 0 && (u & 2 || u & 4) && ri(t, n, i),
              (l = l.next);
          } while (l !== r);
        }
        An(e, n, t);
        break;
      case 1:
        if (
          !xe &&
          (zt(t, n),
          (r = t.stateNode),
          typeof r.componentWillUnmount == 'function')
        )
          try {
            (r.props = t.memoizedProps),
              (r.state = t.memoizedState),
              r.componentWillUnmount();
          } catch (o) {
            le(t, n, o);
          }
        An(e, n, t);
        break;
      case 21:
        An(e, n, t);
        break;
      case 22:
        t.mode & 1
          ? ((xe = (r = xe) || t.memoizedState !== null), An(e, n, t), (xe = r))
          : An(e, n, t);
        break;
      default:
        An(e, n, t);
    }
  }
  function la(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new dc()),
        n.forEach(function (r) {
          var l = Ec.bind(null, e, r);
          t.has(r) || (t.add(r), r.then(l, l));
        });
    }
  }
  function on(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var u = e,
            i = n,
            o = i;
          e: for (; o !== null; ) {
            switch (o.tag) {
              case 5:
                (ye = o.stateNode), (un = !1);
                break e;
              case 3:
                (ye = o.stateNode.containerInfo), (un = !0);
                break e;
              case 4:
                (ye = o.stateNode.containerInfo), (un = !0);
                break e;
            }
            o = o.return;
          }
          if (ye === null) throw Error(m(160));
          ra(u, i, l), (ye = null), (un = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (p) {
          le(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) ua(n, e), (n = n.sibling);
  }
  function ua(e, n) {
    var t = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((on(n, e), vn(e), r & 4)) {
          try {
            mr(3, e, e.return), pl(3, e);
          } catch (C) {
            le(e, e.return, C);
          }
          try {
            mr(5, e, e.return);
          } catch (C) {
            le(e, e.return, C);
          }
        }
        break;
      case 1:
        on(n, e), vn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (
          (on(n, e),
          vn(e),
          r & 512 && t !== null && zt(t, t.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            It(l, '');
          } catch (C) {
            le(e, e.return, C);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = t !== null ? t.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              o === 'input' && u.type === 'radio' && u.name != null && Oi(l, u),
                Fl(o, i);
              var p = Fl(o, u);
              for (i = 0; i < s.length; i += 2) {
                var y = s[i],
                  g = s[i + 1];
                y === 'style'
                  ? Ai(l, g)
                  : y === 'dangerouslySetInnerHTML'
                    ? Ui(l, g)
                    : y === 'children'
                      ? It(l, g)
                      : qe(l, y, g, p);
              }
              switch (o) {
                case 'input':
                  Ol(l, u);
                  break;
                case 'textarea':
                  Ii(l, u);
                  break;
                case 'select':
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var k = u.value;
                  k != null
                    ? ot(l, !!u.multiple, k, !1)
                    : h !== !!u.multiple &&
                      (u.defaultValue != null
                        ? ot(l, !!u.multiple, u.defaultValue, !0)
                        : ot(l, !!u.multiple, u.multiple ? [] : '', !1));
              }
              l[rr] = u;
            } catch (C) {
              le(e, e.return, C);
            }
        }
        break;
      case 6:
        if ((on(n, e), vn(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          (l = e.stateNode), (u = e.memoizedProps);
          try {
            l.nodeValue = u;
          } catch (C) {
            le(e, e.return, C);
          }
        }
        break;
      case 3:
        if (
          (on(n, e), vn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Kt(n.containerInfo);
          } catch (C) {
            le(e, e.return, C);
          }
        break;
      case 4:
        on(n, e), vn(e);
        break;
      case 13:
        on(n, e),
          vn(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ai = ue())),
          r & 4 && la(e);
        break;
      case 22:
        if (
          ((y = t !== null && t.memoizedState !== null),
          e.mode & 1 ? ((xe = (p = xe) || y), on(n, e), (xe = p)) : on(n, e),
          vn(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null),
            (e.stateNode.isHidden = p) && !y && e.mode & 1)
          )
            for (E = e, y = e.child; y !== null; ) {
              for (g = E = y; E !== null; ) {
                switch (((h = E), (k = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, h, h.return);
                    break;
                  case 1:
                    zt(h, h.return);
                    var x = h.stateNode;
                    if (typeof x.componentWillUnmount == 'function') {
                      (r = h), (t = h.return);
                      try {
                        (n = r),
                          (x.props = n.memoizedProps),
                          (x.state = n.memoizedState),
                          x.componentWillUnmount();
                      } catch (C) {
                        le(r, t, C);
                      }
                    }
                    break;
                  case 5:
                    zt(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      sa(g);
                      continue;
                    }
                }
                k !== null ? ((k.return = h), (E = k)) : sa(g);
              }
              y = y.sibling;
            }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  (l = g.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == 'function'
                          ? u.setProperty('display', 'none', 'important')
                          : (u.display = 'none'))
                      : ((o = g.stateNode),
                        (s = g.memoizedProps.style),
                        (i =
                          s != null && s.hasOwnProperty('display')
                            ? s.display
                            : null),
                        (o.style.display = Vi('display', i)));
                } catch (C) {
                  le(e, e.return, C);
                }
              }
            } else if (g.tag === 6) {
              if (y === null)
                try {
                  g.stateNode.nodeValue = p ? '' : g.memoizedProps;
                } catch (C) {
                  le(e, e.return, C);
                }
            } else if (
              ((g.tag !== 22 && g.tag !== 23) ||
                g.memoizedState === null ||
                g === e) &&
              g.child !== null
            ) {
              (g.child.return = g), (g = g.child);
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), (g = g.return);
            }
            y === g && (y = null),
              (g.sibling.return = g.return),
              (g = g.sibling);
          }
        }
        break;
      case 19:
        on(n, e), vn(e), r & 4 && la(e);
        break;
      case 21:
        break;
      default:
        on(n, e), vn(e);
    }
  }
  function vn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (na(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (It(l, ''), (r.flags &= -33));
            var u = ta(e);
            ii(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = ta(e);
            ui(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        le(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function mc(e, n, t) {
    (E = e), ia(e);
  }
  function ia(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || dl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || xe;
          o = dl;
          var p = xe;
          if (((dl = i), (xe = s) && !p))
            for (E = l; E !== null; )
              (i = E),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? aa(l)
                  : s !== null
                    ? ((s.return = i), (E = s))
                    : aa(l);
          for (; u !== null; ) (E = u), ia(u), (u = u.sibling);
          (E = l), (dl = o), (xe = p);
        }
        oa(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (E = u)) : oa(e);
    }
  }
  function oa(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                xe || pl(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !xe)
                  if (t === null) r.componentDidMount();
                  else {
                    var l =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : ln(n.type, t.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      t.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = n.updateQueue;
                u !== null && ss(n, u, r);
                break;
              case 3:
                var i = n.updateQueue;
                if (i !== null) {
                  if (((t = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  ss(n, i, t);
                }
                break;
              case 5:
                var o = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = o;
                  var s = n.memoizedProps;
                  switch (n.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      s.autoFocus && t.focus();
                      break;
                    case 'img':
                      s.src && (t.src = s.src);
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
                  var p = n.alternate;
                  if (p !== null) {
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && Kt(g);
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
                throw Error(m(163));
            }
          xe || (n.flags & 512 && li(n));
        } catch (h) {
          le(n, n.return, h);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (((t = n.sibling), t !== null)) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function sa(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function aa(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              pl(4, n);
            } catch (s) {
              le(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                le(n, l, s);
              }
            }
            var u = n.return;
            try {
              li(n);
            } catch (s) {
              le(n, u, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              li(n);
            } catch (s) {
              le(n, i, s);
            }
        }
      } catch (s) {
        le(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var o = n.sibling;
      if (o !== null) {
        (o.return = n.return), (E = o);
        break;
      }
      E = n.return;
    }
  }
  var hc = Math.ceil,
    ml = Se.ReactCurrentDispatcher,
    oi = Se.ReactCurrentOwner,
    Ze = Se.ReactCurrentBatchConfig,
    j = 0,
    me = null,
    oe = null,
    ge = 0,
    He = 0,
    Lt = In(0),
    ae = 0,
    hr = null,
    tt = 0,
    hl = 0,
    si = 0,
    vr = null,
    Me = null,
    ai = 0,
    Tt = 1 / 0,
    Nn = null,
    vl = !1,
    fi = null,
    Bn = null,
    yl = !1,
    Hn = null,
    gl = 0,
    yr = 0,
    ci = null,
    wl = -1,
    Sl = 0;
  function ze() {
    return j & 6 ? ue() : wl !== -1 ? wl : (wl = ue());
  }
  function $n(e) {
    return e.mode & 1
      ? j & 2 && ge !== 0
        ? ge & -ge
        : qf.transition !== null
          ? (Sl === 0 && (Sl = no()), Sl)
          : ((e = H),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : fo(e.type))),
            e)
      : 1;
  }
  function sn(e, n, t, r) {
    if (50 < yr) throw ((yr = 0), (ci = null), Error(m(185)));
    Bt(e, t, r),
      (!(j & 2) || e !== me) &&
        (e === me && (!(j & 2) && (hl |= t), ae === 4 && Wn(e, ge)),
        Ie(e, r),
        t === 1 && j === 0 && !(n.mode & 1) && ((Tt = ue() + 500), Xr && Fn()));
  }
  function Ie(e, n) {
    var t = e.callbackNode;
    Ja(e, n);
    var r = Lr(e, e === me ? ge : 0);
    if (r === 0)
      t !== null && qi(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
      if ((t != null && qi(t), n === 1))
        e.tag === 0 ? Jf(ca.bind(null, e)) : Zo(ca.bind(null, e)),
          Yf(function () {
            !(j & 6) && Fn();
          }),
          (t = null);
      else {
        switch (to(r)) {
          case 1:
            t = Wl;
            break;
          case 4:
            t = bi;
            break;
          case 16:
            t = Cr;
            break;
          case 536870912:
            t = eo;
            break;
          default:
            t = Cr;
        }
        t = wa(t, fa.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = t);
    }
  }
  function fa(e, n) {
    if (((wl = -1), (Sl = 0), j & 6)) throw Error(m(327));
    var t = e.callbackNode;
    if (Rt() && e.callbackNode !== t) return null;
    var r = Lr(e, e === me ? ge : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = kl(e, r);
    else {
      n = r;
      var l = j;
      j |= 2;
      var u = pa();
      (me !== e || ge !== n) && ((Nn = null), (Tt = ue() + 500), lt(e, n));
      do
        try {
          gc();
          break;
        } catch (o) {
          da(e, o);
        }
      while (!0);
      Lu(),
        (ml.current = u),
        (j = l),
        oe !== null ? (n = 0) : ((me = null), (ge = 0), (n = ae));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((l = Ql(e)), l !== 0 && ((r = l), (n = di(e, l)))),
        n === 1)
      )
        throw ((t = hr), lt(e, 0), Wn(e, r), Ie(e, ue()), t);
      if (n === 6) Wn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !vc(l) &&
            ((n = kl(e, r)),
            n === 2 && ((u = Ql(e)), u !== 0 && ((r = u), (n = di(e, u)))),
            n === 1))
        )
          throw ((t = hr), lt(e, 0), Wn(e, r), Ie(e, ue()), t);
        switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ut(e, Me, Nn);
            break;
          case 3:
            if (
              (Wn(e, r),
              (r & 130023424) === r && ((n = ai + 500 - ue()), 10 < n))
            ) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                ze(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = gu(ut.bind(null, e, Me, Nn), n);
              break;
            }
            ut(e, Me, Nn);
            break;
          case 4:
            if ((Wn(e, r), (r & 4194240) === r)) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - nn(r);
              (u = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~u);
            }
            if (
              ((r = l),
              (r = ue() - r),
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
                            : 1960 * hc(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = gu(ut.bind(null, e, Me, Nn), r);
              break;
            }
            ut(e, Me, Nn);
            break;
          case 5:
            ut(e, Me, Nn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ie(e, ue()), e.callbackNode === t ? fa.bind(null, e) : null;
  }
  function di(e, n) {
    var t = vr;
    return (
      e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256),
      (e = kl(e, n)),
      e !== 2 && ((n = Me), (Me = t), n !== null && pi(n)),
      e
    );
  }
  function pi(e) {
    Me === null ? (Me = e) : Me.push.apply(Me, e);
  }
  function vc(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && ((t = t.stores), t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!tn(u(), l)) return !1;
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
  function Wn(e, n) {
    for (
      n &= ~si,
        n &= ~hl,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var t = 31 - nn(n),
        r = 1 << t;
      (e[t] = -1), (n &= ~r);
    }
  }
  function ca(e) {
    if (j & 6) throw Error(m(327));
    Rt();
    var n = Lr(e, 0);
    if (!(n & 1)) return Ie(e, ue()), null;
    var t = kl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Ql(e);
      r !== 0 && ((n = r), (t = di(e, r)));
    }
    if (t === 1) throw ((t = hr), lt(e, 0), Wn(e, n), Ie(e, ue()), t);
    if (t === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      ut(e, Me, Nn),
      Ie(e, ue()),
      null
    );
  }
  function mi(e, n) {
    var t = j;
    j |= 1;
    try {
      return e(n);
    } finally {
      (j = t), j === 0 && ((Tt = ue() + 500), Xr && Fn());
    }
  }
  function rt(e) {
    Hn !== null && Hn.tag === 0 && !(j & 6) && Rt();
    var n = j;
    j |= 1;
    var t = Ze.transition,
      r = H;
    try {
      if (((Ze.transition = null), (H = 1), e)) return e();
    } finally {
      (H = r), (Ze.transition = t), (j = n), !(j & 6) && Fn();
    }
  }
  function hi() {
    (He = Lt.current), G(Lt);
  }
  function lt(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), Kf(t)), oe !== null))
      for (t = oe.return; t !== null; ) {
        var r = t;
        switch ((xu(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Kr();
            break;
          case 3:
            Nt(), G(Re), G(ke), Fu();
            break;
          case 5:
            Iu(r);
            break;
          case 4:
            Nt();
            break;
          case 13:
            G(ne);
            break;
          case 19:
            G(ne);
            break;
          case 10:
            Tu(r.type._context);
            break;
          case 22:
          case 23:
            hi();
        }
        t = t.return;
      }
    if (
      ((me = e),
      (oe = e = Qn(e.current, null)),
      (ge = He = n),
      (ae = 0),
      (hr = null),
      (si = hl = tt = 0),
      (Me = vr = null),
      bn !== null)
    ) {
      for (n = 0; n < bn.length; n++)
        if (((t = bn[n]), (r = t.interleaved), r !== null)) {
          t.interleaved = null;
          var l = r.next,
            u = t.pending;
          if (u !== null) {
            var i = u.next;
            (u.next = l), (r.next = i);
          }
          t.pending = r;
        }
      bn = null;
    }
    return e;
  }
  function da(e, n) {
    do {
      var t = oe;
      try {
        if ((Lu(), (ll.current = sl), ul)) {
          for (var r = te.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ul = !1;
        }
        if (
          ((nt = 0),
          (pe = se = te = null),
          (ar = !1),
          (fr = 0),
          (oi.current = null),
          t === null || t.return === null)
        ) {
          (ae = 1), (hr = n), (oe = null);
          break;
        }
        e: {
          var u = e,
            i = t.return,
            o = t,
            s = n;
          if (
            ((n = ge),
            (o.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var p = s,
              y = o,
              g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h
                ? ((y.updateQueue = h.updateQueue),
                  (y.memoizedState = h.memoizedState),
                  (y.lanes = h.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var k = Fs(i);
            if (k !== null) {
              (k.flags &= -257),
                Us(k, i, o, u, n),
                k.mode & 1 && js(u, p, n),
                (n = k),
                (s = p);
              var x = n.updateQueue;
              if (x === null) {
                var C = new Set();
                C.add(s), (n.updateQueue = C);
              } else x.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                js(u, p, n), vi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (b && o.mode & 1) {
            var ie = Fs(i);
            if (ie !== null) {
              !(ie.flags & 65536) && (ie.flags |= 256),
                Us(ie, i, o, u, n),
                Pu(Pt(s, o));
              break e;
            }
          }
          (u = s = Pt(s, o)),
            ae !== 4 && (ae = 2),
            vr === null ? (vr = [u]) : vr.push(u),
            (u = i);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                var c = Ms(u, s, n);
                os(u, c);
                break e;
              case 1:
                o = s;
                var a = u.type,
                  d = u.stateNode;
                if (
                  !(u.flags & 128) &&
                  (typeof a.getDerivedStateFromError == 'function' ||
                    (d !== null &&
                      typeof d.componentDidCatch == 'function' &&
                      (Bn === null || !Bn.has(d))))
                ) {
                  (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                  var w = Is(u, o, n);
                  os(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ha(t);
      } catch (N) {
        (n = N), oe === t && t !== null && (oe = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function pa() {
    var e = ml.current;
    return (ml.current = sl), e === null ? sl : e;
  }
  function vi() {
    (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
      me === null || (!(tt & 268435455) && !(hl & 268435455)) || Wn(me, ge);
  }
  function kl(e, n) {
    var t = j;
    j |= 2;
    var r = pa();
    (me !== e || ge !== n) && ((Nn = null), lt(e, n));
    do
      try {
        yc();
        break;
      } catch (l) {
        da(e, l);
      }
    while (!0);
    if ((Lu(), (j = t), (ml.current = r), oe !== null)) throw Error(m(261));
    return (me = null), (ge = 0), ae;
  }
  function yc() {
    for (; oe !== null; ) ma(oe);
  }
  function gc() {
    for (; oe !== null && !Ha(); ) ma(oe);
  }
  function ma(e) {
    var n = ga(e.alternate, e, He);
    (e.memoizedProps = e.pendingProps),
      n === null ? ha(e) : (oe = n),
      (oi.current = null);
  }
  function ha(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (((e = n.return), n.flags & 32768)) {
        if (((t = cc(t, n)), t !== null)) {
          (t.flags &= 32767), (oe = t);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (ae = 6), (oe = null);
          return;
        }
      } else if (((t = fc(t, n, He)), t !== null)) {
        oe = t;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        oe = n;
        return;
      }
      oe = n = e;
    } while (n !== null);
    ae === 0 && (ae = 5);
  }
  function ut(e, n, t) {
    var r = H,
      l = Ze.transition;
    try {
      (Ze.transition = null), (H = 1), wc(e, n, t, r);
    } finally {
      (Ze.transition = l), (H = r);
    }
    return null;
  }
  function wc(e, n, t, r) {
    do Rt();
    while (Hn !== null);
    if (j & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
      throw Error(m(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = t.lanes | t.childLanes;
    if (
      (qa(e, u),
      e === me && ((oe = me = null), (ge = 0)),
      (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
        yl ||
        ((yl = !0),
        wa(Cr, function () {
          return Rt(), null;
        })),
      (u = (t.flags & 15990) !== 0),
      t.subtreeFlags & 15990 || u)
    ) {
      (u = Ze.transition), (Ze.transition = null);
      var i = H;
      H = 1;
      var o = j;
      (j |= 4),
        (oi.current = null),
        pc(e, t),
        ua(t, e),
        Vf(vu),
        (Or = !!hu),
        (vu = hu = null),
        (e.current = t),
        mc(t),
        $a(),
        (j = o),
        (H = i),
        (Ze.transition = u);
    } else e.current = t;
    if (
      (yl && ((yl = !1), (Hn = e), (gl = l)),
      (u = e.pendingLanes),
      u === 0 && (Bn = null),
      Ka(t.stateNode),
      Ie(e, ue()),
      n !== null)
    )
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (vl) throw ((vl = !1), (e = fi), (fi = null), e);
    return (
      gl & 1 && e.tag !== 0 && Rt(),
      (u = e.pendingLanes),
      u & 1 ? (e === ci ? yr++ : ((yr = 0), (ci = e))) : (yr = 0),
      Fn(),
      null
    );
  }
  function Rt() {
    if (Hn !== null) {
      var e = to(gl),
        n = Ze.transition,
        t = H;
      try {
        if (((Ze.transition = null), (H = 16 > e ? 16 : e), Hn === null))
          var r = !1;
        else {
          if (((e = Hn), (Hn = null), (gl = 0), j & 6)) throw Error(m(331));
          var l = j;
          for (j |= 4, E = e.current; E !== null; ) {
            var u = E,
              i = u.child;
            if (E.flags & 16) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) (g.return = y), (E = g);
                    else
                      for (; E !== null; ) {
                        y = E;
                        var h = y.sibling,
                          k = y.return;
                        if ((ea(y), y === p)) {
                          E = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = k), (E = h);
                          break;
                        }
                        E = k;
                      }
                  }
                }
                var x = u.alternate;
                if (x !== null) {
                  var C = x.child;
                  if (C !== null) {
                    x.child = null;
                    do {
                      var ie = C.sibling;
                      (C.sibling = null), (C = ie);
                    } while (C !== null);
                  }
                }
                E = u;
              }
            }
            if (u.subtreeFlags & 2064 && i !== null) (i.return = u), (E = i);
            else
              e: for (; E !== null; ) {
                if (((u = E), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, u, u.return);
                  }
                var c = u.sibling;
                if (c !== null) {
                  (c.return = u.return), (E = c);
                  break e;
                }
                E = u.return;
              }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            i = E;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
            else
              e: for (i = a; E !== null; ) {
                if (((o = E), o.flags & 2048))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, o);
                    }
                  } catch (N) {
                    le(o, o.return, N);
                  }
                if (o === i) {
                  E = null;
                  break e;
                }
                var w = o.sibling;
                if (w !== null) {
                  (w.return = o.return), (E = w);
                  break e;
                }
                E = o.return;
              }
          }
          if (
            ((j = l), Fn(), dn && typeof dn.onPostCommitFiberRoot == 'function')
          )
            try {
              dn.onPostCommitFiberRoot(Nr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (H = t), (Ze.transition = n);
      }
    }
    return !1;
  }
  function va(e, n, t) {
    (n = Pt(t, n)),
      (n = Ms(e, n, 1)),
      (e = Vn(e, n, 1)),
      (n = ze()),
      e !== null && (Bt(e, 1, n), Ie(e, n));
  }
  function le(e, n, t) {
    if (e.tag === 3) va(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          va(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (Bn === null || !Bn.has(r)))
          ) {
            (e = Pt(t, e)),
              (e = Is(n, e, 1)),
              (n = Vn(n, e, 1)),
              (e = ze()),
              n !== null && (Bt(n, 1, e), Ie(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function Sc(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
      (n = ze()),
      (e.pingedLanes |= e.suspendedLanes & t),
      me === e &&
        (ge & t) === t &&
        (ae === 4 || (ae === 3 && (ge & 130023424) === ge && 500 > ue() - ai)
          ? lt(e, 0)
          : (si |= t)),
      Ie(e, n);
  }
  function ya(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = zr), (zr <<= 1), !(zr & 130023424) && (zr = 4194304))
        : (n = 1));
    var t = ze();
    (e = _n(e, n)), e !== null && (Bt(e, n, t), Ie(e, t));
  }
  function kc(e) {
    var n = e.memoizedState,
      t = 0;
    n !== null && (t = n.retryLane), ya(e, t);
  }
  function Ec(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), ya(e, t);
  }
  var ga;
  ga = function (e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Re.current) De = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128)) return (De = !1), ac(e, n, t);
        De = !!(e.flags & 131072);
      }
    else (De = !1), b && n.flags & 1048576 && Jo(n, Zr, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var r = n.type;
        cl(e, n), (e = n.pendingProps);
        var l = wt(n, ke.current);
        Ct(n, t), (l = Au(null, n, r, e, l, t));
        var u = Bu();
        return (
          (n.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              Oe(r) ? ((u = !0), Yr(n)) : (u = !1),
              (n.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Du(n),
              (l.updater = al),
              (n.stateNode = l),
              (l._reactInternals = n),
              Yu(n, r, e, t),
              (n = Ju(null, n, r, !0, u, t)))
            : ((n.tag = 0), b && u && _u(n), Pe(null, n, l, t), (n = n.child)),
          n
        );
      case 16:
        r = n.elementType;
        e: {
          switch (
            (cl(e, n),
            (e = n.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (n.type = r),
            (l = n.tag = xc(r)),
            (e = ln(r, e)),
            l)
          ) {
            case 0:
              n = Zu(null, n, r, e, t);
              break e;
            case 1:
              n = Ws(null, n, r, e, t);
              break e;
            case 11:
              n = Vs(null, n, r, e, t);
              break e;
            case 14:
              n = As(null, n, r, ln(r.type, e), t);
              break e;
          }
          throw Error(m(306, r, ''));
        }
        return n;
      case 0:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          Zu(e, n, r, l, t)
        );
      case 1:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          Ws(e, n, r, l, t)
        );
      case 3:
        e: {
          if ((Qs(n), e === null)) throw Error(m(387));
          (r = n.pendingProps),
            (u = n.memoizedState),
            (l = u.element),
            is(e, n),
            tl(n, r, null, t);
          var i = n.memoizedState;
          if (((r = i.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (n.updateQueue.baseState = u),
              (n.memoizedState = u),
              n.flags & 256)
            ) {
              (l = Pt(Error(m(423)), n)), (n = Ks(e, n, r, t, l));
              break e;
            } else if (r !== l) {
              (l = Pt(Error(m(424)), n)), (n = Ks(e, n, r, t, l));
              break e;
            } else
              for (
                Be = Mn(n.stateNode.containerInfo.firstChild),
                  Ae = n,
                  b = !0,
                  rn = null,
                  t = ls(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
          else {
            if ((Et(), r === l)) {
              n = Cn(e, n, t);
              break e;
            }
            Pe(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          as(n),
          e === null && Nu(n),
          (r = n.type),
          (l = n.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          yu(r, l) ? (i = null) : u !== null && yu(r, u) && (n.flags |= 32),
          $s(e, n),
          Pe(e, n, i, t),
          n.child
        );
      case 6:
        return e === null && Nu(n), null;
      case 13:
        return Ys(e, n, t);
      case 4:
        return (
          Mu(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = _t(n, null, r, t)) : Pe(e, n, r, t),
          n.child
        );
      case 11:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          Vs(e, n, r, l, t)
        );
      case 7:
        return Pe(e, n, n.pendingProps, t), n.child;
      case 8:
        return Pe(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Pe(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (
            ((r = n.type._context),
            (l = n.pendingProps),
            (u = n.memoizedProps),
            (i = l.value),
            K(br, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (tn(u.value, i)) {
              if (u.children === l.children && !Re.current) {
                n = Cn(e, n, t);
                break e;
              }
            } else
              for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var o = u.dependencies;
                if (o !== null) {
                  i = u.child;
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        (s = xn(-1, t & -t)), (s.tag = 2);
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          y === null
                            ? (s.next = s)
                            : ((s.next = y.next), (y.next = s)),
                            (p.pending = s);
                        }
                      }
                      (u.lanes |= t),
                        (s = u.alternate),
                        s !== null && (s.lanes |= t),
                        Ru(u.return, t, n),
                        (o.lanes |= t);
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) i = u.type === n.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((i = u.return), i === null)) throw Error(m(341));
                  (i.lanes |= t),
                    (o = i.alternate),
                    o !== null && (o.lanes |= t),
                    Ru(i, t, n),
                    (i = u.sibling);
                } else i = u.child;
                if (i !== null) i.return = u;
                else
                  for (i = u; i !== null; ) {
                    if (i === n) {
                      i = null;
                      break;
                    }
                    if (((u = i.sibling), u !== null)) {
                      (u.return = i.return), (i = u);
                      break;
                    }
                    i = i.return;
                  }
                u = i;
              }
          Pe(e, n, l.children, t), (n = n.child);
        }
        return n;
      case 9:
        return (
          (l = n.type),
          (r = n.pendingProps.children),
          Ct(n, t),
          (l = Xe(l)),
          (r = r(l)),
          (n.flags |= 1),
          Pe(e, n, r, t),
          n.child
        );
      case 14:
        return (
          (r = n.type),
          (l = ln(r, n.pendingProps)),
          (l = ln(r.type, l)),
          As(e, n, r, l, t)
        );
      case 15:
        return Bs(e, n, n.type, n.pendingProps, t);
      case 17:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          cl(e, n),
          (n.tag = 1),
          Oe(r) ? ((e = !0), Yr(n)) : (e = !1),
          Ct(n, t),
          Os(n, r, l),
          Yu(n, r, l, t),
          Ju(null, n, r, !0, e, t)
        );
      case 19:
        return Gs(e, n, t);
      case 22:
        return Hs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function wa(e, n) {
    return Ji(e, n);
  }
  function _c(e, n, t, r) {
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
  function Je(e, n, t, r) {
    return new _c(e, n, t, r);
  }
  function yi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function xc(e) {
    if (typeof e == 'function') return yi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === fn)) return 11;
      if (e === cn) return 14;
    }
    return 2;
  }
  function Qn(e, n) {
    var t = e.alternate;
    return (
      t === null
        ? ((t = Je(e.tag, n, e.key, e.mode)),
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
  function El(e, n, t, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == 'function')) yi(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case Le:
          return it(t.children, l, u, n);
        case Qe:
          (i = 8), (l |= 8);
          break;
        case Pn:
          return (
            (e = Je(12, t, n, l | 2)), (e.elementType = Pn), (e.lanes = u), e
          );
        case Fe:
          return (e = Je(13, t, n, l)), (e.elementType = Fe), (e.lanes = u), e;
        case en:
          return (e = Je(19, t, n, l)), (e.elementType = en), (e.lanes = u), e;
        case re:
          return _l(t, l, u, n);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case gn:
                i = 10;
                break e;
              case Yn:
                i = 9;
                break e;
              case fn:
                i = 11;
                break e;
              case cn:
                i = 14;
                break e;
              case Te:
                (i = 16), (r = null);
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ''));
      }
    return (
      (n = Je(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = u), n
    );
  }
  function it(e, n, t, r) {
    return (e = Je(7, e, r, n)), (e.lanes = t), e;
  }
  function _l(e, n, t, r) {
    return (
      (e = Je(22, e, r, n)),
      (e.elementType = re),
      (e.lanes = t),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function gi(e, n, t) {
    return (e = Je(6, e, null, n)), (e.lanes = t), e;
  }
  function wi(e, n, t) {
    return (
      (n = Je(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = t),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function Cc(e, n, t, r, l) {
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
      (this.eventTimes = Kl(0)),
      (this.expirationTimes = Kl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Kl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Si(e, n, t, r, l, u, i, o, s) {
    return (
      (e = new Cc(e, n, t, o, s)),
      n === 1 ? ((n = 1), u === !0 && (n |= 8)) : (n = 0),
      (u = Je(3, null, null, n)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Du(u),
      e
    );
  }
  function Nc(e, n, t) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ne,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: n,
      implementation: t,
    };
  }
  function Sa(e) {
    if (!e) return jn;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Oe(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Oe(t)) return Xo(e, t, n);
    }
    return n;
  }
  function ka(e, n, t, r, l, u, i, o, s) {
    return (
      (e = Si(t, r, !0, e, l, u, i, o, s)),
      (e.context = Sa(null)),
      (t = e.current),
      (r = ze()),
      (l = $n(t)),
      (u = xn(r, l)),
      (u.callback = n ?? null),
      Vn(t, u, l),
      (e.current.lanes = l),
      Bt(e, l, r),
      Ie(e, r),
      e
    );
  }
  function xl(e, n, t, r) {
    var l = n.current,
      u = ze(),
      i = $n(l);
    return (
      (t = Sa(t)),
      n.context === null ? (n.context = t) : (n.pendingContext = t),
      (n = xn(u, i)),
      (n.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (e = Vn(l, n, i)),
      e !== null && (sn(e, l, i, u), nl(e, l, i)),
      i
    );
  }
  function Cl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ea(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function ki(e, n) {
    Ea(e, n), (e = e.alternate) && Ea(e, n);
  }
  function Pc() {
    return null;
  }
  var _a =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ei(e) {
    this._internalRoot = e;
  }
  (Nl.prototype.render = Ei.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(m(409));
      xl(e, n, null, null);
    }),
    (Nl.prototype.unmount = Ei.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          rt(function () {
            xl(null, e, null, null);
          }),
            (n[wn] = null);
        }
      });
  function Nl(e) {
    this._internalRoot = e;
  }
  Nl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = uo();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++);
      Rn.splice(t, 0, e), t === 0 && so(e);
    }
  };
  function _i(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Pl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function xa() {}
  function zc(e, n, t, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var u = r;
        r = function () {
          var p = Cl(i);
          u.call(p);
        };
      }
      var i = ka(n, r, e, 0, null, !1, !1, '', xa);
      return (
        (e._reactRootContainer = i),
        (e[wn] = i.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        rt(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var p = Cl(s);
        o.call(p);
      };
    }
    var s = Si(e, 0, !1, null, null, !1, !1, '', xa);
    return (
      (e._reactRootContainer = s),
      (e[wn] = s.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      rt(function () {
        xl(n, s, t, r);
      }),
      s
    );
  }
  function zl(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == 'function') {
        var o = l;
        l = function () {
          var s = Cl(i);
          o.call(s);
        };
      }
      xl(n, i, e, l);
    } else i = zc(t, n, e, l, r);
    return Cl(i);
  }
  (ro = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = At(n.pendingLanes);
          t !== 0 &&
            (Yl(n, t | 1), Ie(n, ue()), !(j & 6) && ((Tt = ue() + 500), Fn()));
        }
        break;
      case 13:
        rt(function () {
          var r = _n(e, 1);
          if (r !== null) {
            var l = ze();
            sn(r, e, 1, l);
          }
        }),
          ki(e, 1);
    }
  }),
    (Xl = function (e) {
      if (e.tag === 13) {
        var n = _n(e, 134217728);
        if (n !== null) {
          var t = ze();
          sn(n, e, 134217728, t);
        }
        ki(e, 134217728);
      }
    }),
    (lo = function (e) {
      if (e.tag === 13) {
        var n = $n(e),
          t = _n(e, n);
        if (t !== null) {
          var r = ze();
          sn(t, e, n, r);
        }
        ki(e, n);
      }
    }),
    (uo = function () {
      return H;
    }),
    (io = function (e, n) {
      var t = H;
      try {
        return (H = e), n();
      } finally {
        H = t;
      }
    }),
    (Al = function (e, n, t) {
      switch (n) {
        case 'input':
          if ((Ol(e, t), (n = t.name), t.type === 'radio' && n != null)) {
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
                var l = Qr(r);
                if (!l) throw Error(m(90));
                Ti(r), Ol(r, l);
              }
            }
          }
          break;
        case 'textarea':
          Ii(e, t);
          break;
        case 'select':
          (n = t.value), n != null && ot(e, !!t.multiple, n, !1);
      }
    }),
    (Wi = mi),
    (Qi = rt);
  var Lc = { usingClientEntryPoint: !1, Events: [lr, yt, Qr, Hi, $i, mi] },
    gr = {
      findFiberByHostInstance: Gn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Tc = {
      bundleType: gr.bundleType,
      version: gr.version,
      rendererPackageName: gr.rendererPackageName,
      rendererConfig: gr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Gi(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || Pc,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ll.isDisabled && Ll.supportsFiber)
      try {
        (Nr = Ll.inject(Tc)), (dn = Ll);
      } catch {}
  }
  return (
    (je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lc),
    (je.createPortal = function (e, n) {
      var t =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_i(n)) throw Error(m(200));
      return Nc(e, n, null, t);
    }),
    (je.createRoot = function (e, n) {
      if (!_i(e)) throw Error(m(299));
      var t = !1,
        r = '',
        l = _a;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (t = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = Si(e, 1, !1, null, null, t, !1, r, l)),
        (e[wn] = n.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        new Ei(n)
      );
    }),
    (je.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == 'function'
          ? Error(m(188))
          : ((e = Object.keys(e).join(',')), Error(m(268, e)));
      return (e = Gi(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (je.flushSync = function (e) {
      return rt(e);
    }),
    (je.hydrate = function (e, n, t) {
      if (!Pl(n)) throw Error(m(200));
      return zl(null, e, n, !0, t);
    }),
    (je.hydrateRoot = function (e, n, t) {
      if (!_i(e)) throw Error(m(405));
      var r = (t != null && t.hydratedSources) || null,
        l = !1,
        u = '',
        i = _a;
      if (
        (t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (n = ka(n, null, e, 1, t ?? null, l, !1, u, i)),
        (e[wn] = n.current),
        nr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (t = r[e]),
            (l = t._getVersion),
            (l = l(t._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [t, l])
              : n.mutableSourceEagerHydrationData.push(t, l);
      return new Nl(n);
    }),
    (je.render = function (e, n, t) {
      if (!Pl(n)) throw Error(m(200));
      return zl(null, e, n, !1, t);
    }),
    (je.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rt(function () {
            zl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[wn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (je.unstable_batchedUpdates = mi),
    (je.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
      if (!Pl(t)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return zl(e, n, t, !1, r);
    }),
    (je.version = '18.3.1-next-f1338f8080-20240426'),
    je
  );
}
var Oa;
function Ac() {
  if (Oa) return Ni.exports;
  Oa = 1;
  function P() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P);
      } catch (O) {
        console.error(O);
      }
  }
  return P(), (Ni.exports = Vc()), Ni.exports;
}
var Da;
function Bc() {
  if (Da) return Tl;
  Da = 1;
  var P = Ac();
  return (Tl.createRoot = P.createRoot), (Tl.hydrateRoot = P.hydrateRoot), Tl;
}
var Hc = Bc();
class $c extends Dt.Component {
  constructor() {
    super(...arguments);
    Ot(this, 'state', { hasError: !1 });
  }
  componentDidCatch(m, fe) {
    console.error(m, fe), this.setState({ hasError: !0 });
  }
  render() {
    return this.state.hasError
      ? ve.jsx('h1', { children: 'Something went wrong' })
      : this.props.children;
  }
}
class Wc extends Dt.Component {
  render() {
    return ve.jsx('button', {
      onClick: this.props.handleClick,
      style: this.props.style,
      children: this.props.children,
    });
  }
}
class Qc extends Dt.Component {
  constructor() {
    super(...arguments);
    Ot(this, 'state', { inputValue: this.props.searchTerm });
    Ot(this, 'handleSubmit', (m) => {
      m.preventDefault(), this.props.onSearch(this.state.inputValue);
    });
  }
  render() {
    return ve.jsxs('form', {
      onSubmit: this.handleSubmit,
      className: 'form',
      children: [
        ve.jsx('input', {
          className: 'input',
          type: 'text',
          value: this.state.inputValue,
          onChange: (m) => this.setState({ inputValue: m.target.value }),
          placeholder: 'Search Star Wars characters',
        }),
        ve.jsx(Wc, { children: 'Search' }),
      ],
    });
  }
}
class Kc extends Dt.Component {
  render() {
    return this.props.isLoading
      ? ve.jsx('h1', { children: 'Is Loading...' })
      : this.props.results.length == 0
        ? ve.jsx('h1', { children: '404 Nothing is found' })
        : ve.jsx('div', {
            className: 'resultsWrapper',
            children: this.props.results.map((O, m) =>
              ve.jsxs(
                'div',
                {
                  className: 'resultItem',
                  children: [
                    ve.jsx('h2', {
                      className: 'resultItemName',
                      children: O.name,
                    }),
                    ve.jsxs('p', { children: ['Birth Year: ', O.birth_year] }),
                  ],
                },
                m
              )
            ),
          });
  }
}
async function Ma(P, O) {
  try {
    const m = await fetch(`${P}?search=${O}`),
      fe = await m.json();
    if (!m.ok) throw new Error('Failed to fetch results');
    return fe.results;
  } catch (m) {
    console.error(m);
  }
}
class Yc extends Dt.Component {
  constructor() {
    super(...arguments);
    Ot(this, 'state', {
      searchTerm: localStorage.getItem('searchTerm') || '',
      isLoading: !0,
      results: [],
    });
    Ot(this, 'handleSearch', async (m) => {
      localStorage.setItem('searchTerm', m),
        this.setState({ isLoading: !0 }),
        this.setState({
          isLoading: !1,
          searchTerm: m,
          results: await Ma('https://swapi.dev/api/people/', m),
        });
    });
  }
  async componentDidMount() {
    this.setState({
      isLoading: !1,
      results: await Ma('https://swapi.dev/api/people/', this.state.searchTerm),
    }),
      console.log(this.state.results);
  }
  render() {
    return ve.jsx(ve.Fragment, {
      children: ve.jsxs($c, {
        children: [
          ve.jsx(Qc, {
            searchTerm: this.state.searchTerm,
            onSearch: this.handleSearch,
          }),
          ve.jsx(Kc, {
            isLoading: this.state.isLoading,
            results: this.state.results,
          }),
        ],
      }),
    });
  }
}
const Xc = document.getElementById('root');
Hc.createRoot(Xc).render(ve.jsx(Dt.StrictMode, { children: ve.jsx(Yc, {}) }));
