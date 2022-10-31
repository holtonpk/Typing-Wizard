/*! For license information please see main.5661283a.js.LICENSE.txt */
!(function () {
  var e = {
      425: function (e, t, n) {
        var r;
        "undefined" != typeof self && self,
          (e.exports =
            ((r = n(791)),
            (function (e) {
              var t = {};
              function n(r) {
                if (t[r]) return t[r].exports;
                var i = (t[r] = { i: r, l: !1, exports: {} });
                return (
                  e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
                );
              }
              return (
                (n.m = e),
                (n.c = t),
                (n.d = function (e, t, r) {
                  n.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: r });
                }),
                (n.r = function (e) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (n.t = function (e, t) {
                  if ((1 & t && (e = n(e)), 8 & t)) return e;
                  if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                  var r = Object.create(null);
                  if (
                    (n.r(r),
                    Object.defineProperty(r, "default", {
                      enumerable: !0,
                      value: e,
                    }),
                    2 & t && "string" != typeof e)
                  )
                    for (var i in e)
                      n.d(
                        r,
                        i,
                        function (t) {
                          return e[t];
                        }.bind(null, i)
                      );
                  return r;
                }),
                (n.n = function (e) {
                  var t =
                    e && e.__esModule
                      ? function () {
                          return e.default;
                        }
                      : function () {
                          return e;
                        };
                  return n.d(t, "a", t), t;
                }),
                (n.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = ""),
                n((n.s = 2))
              );
            })([
              function (e, t) {
                e.exports = r;
              },
              function (e, t, n) {
                "use strict";
                var r = {
                  linear: function (e, t, n, r) {
                    return ((n - t) * e) / r + t;
                  },
                  easeInQuad: function (e, t, n, r) {
                    return (n - t) * (e /= r) * e + t;
                  },
                  easeOutQuad: function (e, t, n, r) {
                    return -(n - t) * (e /= r) * (e - 2) + t;
                  },
                  easeInOutQuad: function (e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1
                      ? (i / 2) * e * e + t
                      : (-i / 2) * (--e * (e - 2) - 1) + t;
                  },
                  easeInCubic: function (e, t, n, r) {
                    return (n - t) * (e /= r) * e * e + t;
                  },
                  easeOutCubic: function (e, t, n, r) {
                    return (n - t) * ((e = e / r - 1) * e * e + 1) + t;
                  },
                  easeInOutCubic: function (e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1
                      ? (i / 2) * e * e * e + t
                      : (i / 2) * ((e -= 2) * e * e + 2) + t;
                  },
                  easeInQuart: function (e, t, n, r) {
                    return (n - t) * (e /= r) * e * e * e + t;
                  },
                  easeOutQuart: function (e, t, n, r) {
                    return -(n - t) * ((e = e / r - 1) * e * e * e - 1) + t;
                  },
                  easeInOutQuart: function (e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1
                      ? (i / 2) * e * e * e * e + t
                      : (-i / 2) * ((e -= 2) * e * e * e - 2) + t;
                  },
                  easeInQuint: function (e, t, n, r) {
                    return (n - t) * (e /= r) * e * e * e * e + t;
                  },
                  easeOutQuint: function (e, t, n, r) {
                    return (n - t) * ((e = e / r - 1) * e * e * e * e + 1) + t;
                  },
                  easeInOutQuint: function (e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1
                      ? (i / 2) * e * e * e * e * e + t
                      : (i / 2) * ((e -= 2) * e * e * e * e + 2) + t;
                  },
                  easeInSine: function (e, t, n, r) {
                    var i = n - t;
                    return -i * Math.cos((e / r) * (Math.PI / 2)) + i + t;
                  },
                  easeOutSine: function (e, t, n, r) {
                    return (n - t) * Math.sin((e / r) * (Math.PI / 2)) + t;
                  },
                  easeInOutSine: function (e, t, n, r) {
                    return (
                      (-(n - t) / 2) * (Math.cos((Math.PI * e) / r) - 1) + t
                    );
                  },
                  easeInExpo: function (e, t, n, r) {
                    return 0 == e
                      ? t
                      : (n - t) * Math.pow(2, 10 * (e / r - 1)) + t;
                  },
                  easeOutExpo: function (e, t, n, r) {
                    var i = n - t;
                    return e == r
                      ? t + i
                      : i * (1 - Math.pow(2, (-10 * e) / r)) + t;
                  },
                  easeInOutExpo: function (e, t, n, r) {
                    var i = n - t;
                    return 0 === e
                      ? t
                      : e === r
                      ? t + i
                      : (e /= r / 2) < 1
                      ? (i / 2) * Math.pow(2, 10 * (e - 1)) + t
                      : (i / 2) * (2 - Math.pow(2, -10 * --e)) + t;
                  },
                  easeInCirc: function (e, t, n, r) {
                    return -(n - t) * (Math.sqrt(1 - (e /= r) * e) - 1) + t;
                  },
                  easeOutCirc: function (e, t, n, r) {
                    return (n - t) * Math.sqrt(1 - (e = e / r - 1) * e) + t;
                  },
                  easeInOutCirc: function (e, t, n, r) {
                    var i = n - t;
                    return (e /= r / 2) < 1
                      ? (-i / 2) * (Math.sqrt(1 - e * e) - 1) + t
                      : (i / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
                  },
                  easeInElastic: function (e, t, n, r) {
                    var i,
                      a,
                      o,
                      s = n - t;
                    return (
                      (o = 1.70158),
                      0 === e
                        ? t
                        : 1 == (e /= r)
                        ? t + s
                        : ((a = 0) || (a = 0.3 * r),
                          (i = s) < Math.abs(s)
                            ? ((i = s), (o = a / 4))
                            : (o = (a / (2 * Math.PI)) * Math.asin(s / i)),
                          -i *
                            Math.pow(2, 10 * (e -= 1)) *
                            Math.sin(((e * r - o) * (2 * Math.PI)) / a) +
                            t)
                    );
                  },
                  easeOutElastic: function (e, t, n, r) {
                    var i,
                      a,
                      o,
                      s = n - t;
                    return (
                      (o = 1.70158),
                      0 === e
                        ? t
                        : 1 == (e /= r)
                        ? t + s
                        : ((a = 0) || (a = 0.3 * r),
                          (i = s) < Math.abs(s)
                            ? ((i = s), (o = a / 4))
                            : (o = (a / (2 * Math.PI)) * Math.asin(s / i)),
                          i *
                            Math.pow(2, -10 * e) *
                            Math.sin(((e * r - o) * (2 * Math.PI)) / a) +
                            s +
                            t)
                    );
                  },
                  easeInOutElastic: function (e, t, n, r) {
                    var i,
                      a,
                      o,
                      s = n - t;
                    return (
                      (o = 1.70158),
                      0 === e
                        ? t
                        : 2 == (e /= r / 2)
                        ? t + s
                        : ((a = 0) || (a = r * (0.3 * 1.5)),
                          (i = s) < Math.abs(s)
                            ? ((i = s), (o = a / 4))
                            : (o = (a / (2 * Math.PI)) * Math.asin(s / i)),
                          e < 1
                            ? i *
                                Math.pow(2, 10 * (e -= 1)) *
                                Math.sin(((e * r - o) * (2 * Math.PI)) / a) *
                                -0.5 +
                              t
                            : i *
                                Math.pow(2, -10 * (e -= 1)) *
                                Math.sin(((e * r - o) * (2 * Math.PI)) / a) *
                                0.5 +
                              s +
                              t)
                    );
                  },
                  easeInBack: function (e, t, n, r, i) {
                    return (
                      void 0 === i && (i = 1.70158),
                      (n - t) * (e /= r) * e * ((i + 1) * e - i) + t
                    );
                  },
                  easeOutBack: function (e, t, n, r, i) {
                    return (
                      void 0 === i && (i = 1.70158),
                      (n - t) * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) +
                        t
                    );
                  },
                  easeInOutBack: function (e, t, n, r, i) {
                    var a = n - t;
                    return (
                      void 0 === i && (i = 1.70158),
                      (e /= r / 2) < 1
                        ? (a / 2) * (e * e * ((1 + (i *= 1.525)) * e - i)) + t
                        : (a / 2) *
                            ((e -= 2) * e * ((1 + (i *= 1.525)) * e + i) + 2) +
                          t
                    );
                  },
                  easeInBounce: function (e, t, n, i) {
                    var a = n - t;
                    return a - r.easeOutBounce(i - e, 0, a, i) + t;
                  },
                  easeOutBounce: function (e, t, n, r) {
                    var i = n - t;
                    return (e /= r) < 1 / 2.75
                      ? i * (7.5625 * e * e) + t
                      : e < 2 / 2.75
                      ? i * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
                      : e < 2.5 / 2.75
                      ? i * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
                      : i * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
                  },
                  easeInOutBounce: function (e, t, n, i) {
                    var a = n - t;
                    return e < i / 2
                      ? 0.5 * r.easeInBounce(2 * e, 0, a, i) + t
                      : 0.5 * r.easeOutBounce(2 * e - i, 0, a, i) + 0.5 * a + t;
                  },
                };
                e.exports = r;
              },
              function (e, t, n) {
                e.exports = n(3);
              },
              function (e, t, n) {
                "use strict";
                n.r(t),
                  n.d(t, "ReactConfetti", function () {
                    return B;
                  });
                var r,
                  i,
                  a = n(0),
                  o = n.n(a),
                  s = n(1),
                  l = n.n(s);
                function u(e, t) {
                  return e + Math.random() * (t - e);
                }
                function c(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                function f(e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e
                  );
                }
                !(function (e) {
                  (e[(e.Circle = 0)] = "Circle"),
                    (e[(e.Square = 1)] = "Square"),
                    (e[(e.Strip = 2)] = "Strip");
                })(r || (r = {})),
                  (function (e) {
                    (e[(e.Positive = 1)] = "Positive"),
                      (e[(e.Negative = -1)] = "Negative");
                  })(i || (i = {}));
                var h = (function () {
                  function e(t, n, r, a) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      f(this, "context", void 0),
                      f(this, "radius", void 0),
                      f(this, "x", void 0),
                      f(this, "y", void 0),
                      f(this, "w", void 0),
                      f(this, "h", void 0),
                      f(this, "vx", void 0),
                      f(this, "vy", void 0),
                      f(this, "shape", void 0),
                      f(this, "angle", void 0),
                      f(this, "angularSpin", void 0),
                      f(this, "color", void 0),
                      f(this, "rotateY", void 0),
                      f(this, "rotationDirection", void 0),
                      f(this, "getOptions", void 0),
                      (this.getOptions = n);
                    var o,
                      s,
                      l = this.getOptions(),
                      c = l.colors,
                      h = l.initialVelocityX,
                      d = l.initialVelocityY;
                    (this.context = t),
                      (this.x = r),
                      (this.y = a),
                      (this.w = u(5, 20)),
                      (this.h = u(5, 20)),
                      (this.radius = u(5, 10)),
                      (this.vx =
                        "number" == typeof h ? u(-h, h) : u(h.min, h.max)),
                      (this.vy =
                        "number" == typeof d ? u(-d, 0) : u(d.min, d.max)),
                      (this.shape =
                        ((o = 0),
                        (s = 2),
                        Math.floor(o + Math.random() * (s - o + 1)))),
                      (this.angle = (u(0, 360) * Math.PI) / 180),
                      (this.angularSpin = u(-0.2, 0.2)),
                      (this.color = c[Math.floor(Math.random() * c.length)]),
                      (this.rotateY = u(0, 1)),
                      (this.rotationDirection = u(0, 1)
                        ? i.Positive
                        : i.Negative);
                  }
                  var t, n, a;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "update",
                        value: function () {
                          var e = this.getOptions(),
                            t = e.gravity,
                            n = e.wind,
                            a = e.friction,
                            o = e.opacity,
                            s = e.drawShape;
                          (this.x += this.vx),
                            (this.y += this.vy),
                            (this.vy += t),
                            (this.vx += n),
                            (this.vx *= a),
                            (this.vy *= a),
                            this.rotateY >= 1 &&
                            this.rotationDirection === i.Positive
                              ? (this.rotationDirection = i.Negative)
                              : this.rotateY <= -1 &&
                                this.rotationDirection === i.Negative &&
                                (this.rotationDirection = i.Positive);
                          var l = 0.1 * this.rotationDirection;
                          if (
                            ((this.rotateY += l),
                            (this.angle += this.angularSpin),
                            this.context.save(),
                            this.context.translate(this.x, this.y),
                            this.context.rotate(this.angle),
                            this.context.scale(1, this.rotateY),
                            this.context.rotate(this.angle),
                            this.context.beginPath(),
                            (this.context.fillStyle = this.color),
                            (this.context.strokeStyle = this.color),
                            (this.context.globalAlpha = o),
                            (this.context.lineCap = "round"),
                            (this.context.lineWidth = 2),
                            s && "function" == typeof s)
                          )
                            s.call(this, this.context);
                          else
                            switch (this.shape) {
                              case r.Circle:
                                this.context.beginPath(),
                                  this.context.arc(
                                    0,
                                    0,
                                    this.radius,
                                    0,
                                    2 * Math.PI
                                  ),
                                  this.context.fill();
                                break;
                              case r.Square:
                                this.context.fillRect(
                                  -this.w / 2,
                                  -this.h / 2,
                                  this.w,
                                  this.h
                                );
                                break;
                              case r.Strip:
                                this.context.fillRect(
                                  -this.w / 6,
                                  -this.h / 2,
                                  this.w / 3,
                                  this.h
                                );
                            }
                          this.context.closePath(), this.context.restore();
                        },
                      },
                    ]) && c(t.prototype, n),
                    a && c(t, a),
                    e
                  );
                })();
                function d(e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e
                  );
                }
                var p = function e(t, n) {
                  var r = this;
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    d(this, "canvas", void 0),
                    d(this, "context", void 0),
                    d(this, "getOptions", void 0),
                    d(this, "x", 0),
                    d(this, "y", 0),
                    d(this, "w", 0),
                    d(this, "h", 0),
                    d(this, "lastNumberOfPieces", 0),
                    d(this, "tweenInitTime", Date.now()),
                    d(this, "particles", []),
                    d(this, "particlesGenerated", 0),
                    d(this, "removeParticleAt", function (e) {
                      r.particles.splice(e, 1);
                    }),
                    d(this, "getParticle", function () {
                      var e = u(r.x, r.w + r.x),
                        t = u(r.y, r.h + r.y);
                      return new h(r.context, r.getOptions, e, t);
                    }),
                    d(this, "animate", function () {
                      var e = r.canvas,
                        t = r.context,
                        n = r.particlesGenerated,
                        i = r.lastNumberOfPieces,
                        a = r.getOptions(),
                        o = a.run,
                        s = a.recycle,
                        l = a.numberOfPieces,
                        u = a.debug,
                        c = a.tweenFunction,
                        f = a.tweenDuration;
                      if (!o) return !1;
                      var h = r.particles.length,
                        d = s ? h : n,
                        p = Date.now();
                      if (d < l) {
                        i !== l &&
                          ((r.tweenInitTime = p), (r.lastNumberOfPieces = l));
                        for (
                          var v = r.tweenInitTime,
                            g = c(p - v > f ? f : Math.max(0, p - v), d, l, f),
                            m = Math.round(g - d),
                            y = 0;
                          y < m;
                          y++
                        )
                          r.particles.push(r.getParticle());
                        r.particlesGenerated += m;
                      }
                      return (
                        u &&
                          ((t.font = "12px sans-serif"),
                          (t.fillStyle = "#333"),
                          (t.textAlign = "right"),
                          t.fillText(
                            "Particles: ".concat(h),
                            e.width - 10,
                            e.height - 20
                          )),
                        r.particles.forEach(function (t, n) {
                          t.update(),
                            (t.y > e.height ||
                              t.y < -100 ||
                              t.x > e.width + 100 ||
                              t.x < -100) &&
                              (s && d <= l
                                ? (r.particles[n] = r.getParticle())
                                : r.removeParticleAt(n));
                        }),
                        h > 0 || d < l
                      );
                    }),
                    (this.canvas = t);
                  var i = this.canvas.getContext("2d");
                  if (!i) throw new Error("Could not get canvas context");
                  (this.context = i), (this.getOptions = n);
                };
                function v(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function g(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? v(Object(n), !0).forEach(function (t) {
                          y(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : v(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                }
                function m(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                function y(e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e
                  );
                }
                var b = {
                    width:
                      "undefined" != typeof window ? window.innerWidth : 300,
                    height:
                      "undefined" != typeof window ? window.innerHeight : 200,
                    numberOfPieces: 200,
                    friction: 0.99,
                    wind: 0,
                    gravity: 0.1,
                    initialVelocityX: 4,
                    initialVelocityY: 10,
                    colors: [
                      "#f44336",
                      "#e91e63",
                      "#9c27b0",
                      "#673ab7",
                      "#3f51b5",
                      "#2196f3",
                      "#03a9f4",
                      "#00bcd4",
                      "#009688",
                      "#4CAF50",
                      "#8BC34A",
                      "#CDDC39",
                      "#FFEB3B",
                      "#FFC107",
                      "#FF9800",
                      "#FF5722",
                      "#795548",
                    ],
                    opacity: 1,
                    debug: !1,
                    tweenFunction: l.a.easeInOutQuad,
                    tweenDuration: 5e3,
                    recycle: !0,
                    run: !0,
                  },
                  x = (function () {
                    function e(t, n) {
                      var r = this;
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                        y(this, "canvas", void 0),
                        y(this, "context", void 0),
                        y(this, "_options", void 0),
                        y(this, "generator", void 0),
                        y(this, "rafId", void 0),
                        y(this, "setOptionsWithDefaults", function (e) {
                          var t = {
                            confettiSource: {
                              x: 0,
                              y: 0,
                              w: r.canvas.width,
                              h: 0,
                            },
                          };
                          (r._options = g(g(g({}, t), b), e)),
                            Object.assign(r, e.confettiSource);
                        }),
                        y(this, "update", function () {
                          var e = r.options,
                            t = e.run,
                            n = e.onConfettiComplete,
                            i = r.canvas,
                            a = r.context;
                          t &&
                            ((a.fillStyle = "white"),
                            a.clearRect(0, 0, i.width, i.height)),
                            r.generator.animate()
                              ? (r.rafId = requestAnimationFrame(r.update))
                              : (n &&
                                  "function" == typeof n &&
                                  r.generator.particlesGenerated > 0 &&
                                  n.call(r, r),
                                (r._options.run = !1));
                        }),
                        y(this, "reset", function () {
                          r.generator &&
                            r.generator.particlesGenerated > 0 &&
                            ((r.generator.particlesGenerated = 0),
                            (r.generator.particles = []),
                            (r.generator.lastNumberOfPieces = 0));
                        }),
                        y(this, "stop", function () {
                          (r.options = { run: !1 }),
                            r.rafId &&
                              (cancelAnimationFrame(r.rafId),
                              (r.rafId = void 0));
                        }),
                        (this.canvas = t);
                      var i = this.canvas.getContext("2d");
                      if (!i) throw new Error("Could not get canvas context");
                      (this.context = i),
                        (this.generator = new p(this.canvas, function () {
                          return r.options;
                        })),
                        (this.options = n),
                        this.update();
                    }
                    var t, n, r;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: "options",
                          get: function () {
                            return this._options;
                          },
                          set: function (e) {
                            var t = this._options && this._options.run,
                              n = this._options && this._options.recycle;
                            this.setOptionsWithDefaults(e),
                              this.generator &&
                                (Object.assign(
                                  this.generator,
                                  this.options.confettiSource
                                ),
                                "boolean" == typeof e.recycle &&
                                  e.recycle &&
                                  !1 === n &&
                                  (this.generator.lastNumberOfPieces =
                                    this.generator.particles.length)),
                              "boolean" == typeof e.run &&
                                e.run &&
                                !1 === t &&
                                this.update();
                          },
                        },
                      ]) && m(t.prototype, n),
                      r && m(t, r),
                      e
                    );
                  })();
                function k(e) {
                  return (
                    (function (e) {
                      if (Array.isArray(e)) return C(e);
                    })(e) ||
                    (function (e) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(e)
                      )
                        return Array.from(e);
                    })(e) ||
                    P(e) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  );
                }
                function w(e) {
                  return (w =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        })(e);
                }
                function _() {
                  return (_ =
                    Object.assign ||
                    function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                      }
                      return e;
                    }).apply(this, arguments);
                }
                function S(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function M(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? S(Object(n), !0).forEach(function (t) {
                          z(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : S(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                }
                function E(e, t) {
                  return (
                    (function (e) {
                      if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(e)
                      ) {
                        var n = [],
                          r = !0,
                          i = !1,
                          a = void 0;
                        try {
                          for (
                            var o, s = e[Symbol.iterator]();
                            !(r = (o = s.next()).done) &&
                            (n.push(o.value), !t || n.length !== t);
                            r = !0
                          );
                        } catch (e) {
                          (i = !0), (a = e);
                        } finally {
                          try {
                            r || null == s.return || s.return();
                          } finally {
                            if (i) throw a;
                          }
                        }
                        return n;
                      }
                    })(e, t) ||
                    P(e, t) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  );
                }
                function P(e, t) {
                  if (e) {
                    if ("string" == typeof e) return C(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? C(e, t)
                        : void 0
                    );
                  }
                }
                function C(e, t) {
                  (null == t || t > e.length) && (t = e.length);
                  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                  return r;
                }
                function O(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function T(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                function L(e, t) {
                  return (L =
                    Object.setPrototypeOf ||
                    function (e, t) {
                      return (e.__proto__ = t), e;
                    })(e, t);
                }
                function I(e) {
                  var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                      return (
                        Date.prototype.toString.call(
                          Reflect.construct(Date, [], function () {})
                        ),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  })();
                  return function () {
                    var n,
                      r = j(e);
                    if (t) {
                      var i = j(this).constructor;
                      n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return D(this, n);
                  };
                }
                function D(e, t) {
                  return !t || ("object" !== w(t) && "function" != typeof t)
                    ? N(e)
                    : t;
                }
                function N(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                }
                function j(e) {
                  return (j = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
                }
                function z(e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e
                  );
                }
                var R = o.a.createRef(),
                  A = (function (e) {
                    !(function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        t && L(e, t);
                    })(a, e);
                    var t,
                      n,
                      r,
                      i = I(a);
                    function a(e) {
                      var t;
                      O(this, a);
                      for (
                        var n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          s = 1;
                        s < n;
                        s++
                      )
                        r[s - 1] = arguments[s];
                      return (
                        z(
                          N((t = i.call.apply(i, [this, e].concat(r)))),
                          "canvas",
                          o.a.createRef()
                        ),
                        z(N(t), "confetti", void 0),
                        (t.canvas = e.canvasRef || R),
                        t
                      );
                    }
                    return (
                      (t = a),
                      (n = [
                        {
                          key: "componentDidMount",
                          value: function () {
                            if (this.canvas.current) {
                              var e = F(this.props)[0];
                              this.confetti = new x(this.canvas.current, e);
                            }
                          },
                        },
                        {
                          key: "componentDidUpdate",
                          value: function () {
                            var e = F(this.props)[0];
                            this.confetti && (this.confetti.options = e);
                          },
                        },
                        {
                          key: "componentWillUnmount",
                          value: function () {
                            this.confetti && this.confetti.stop(),
                              (this.confetti = void 0);
                          },
                        },
                        {
                          key: "render",
                          value: function () {
                            var e = E(F(this.props), 2),
                              t = e[0],
                              n = e[1],
                              r = M(
                                {
                                  zIndex: 2,
                                  position: "absolute",
                                  pointerEvents: "none",
                                  top: 0,
                                  left: 0,
                                  bottom: 0,
                                  right: 0,
                                },
                                n.style
                              );
                            return o.a.createElement(
                              "canvas",
                              _(
                                {
                                  width: t.width,
                                  height: t.height,
                                  ref: this.canvas,
                                },
                                n,
                                { style: r }
                              )
                            );
                          },
                        },
                      ]) && T(t.prototype, n),
                      r && T(t, r),
                      a
                    );
                  })(a.Component);
                function F(e) {
                  var t = {},
                    n = {},
                    r = [].concat(k(Object.keys(b)), [
                      "confettiSource",
                      "drawShape",
                      "onConfettiComplete",
                    ]),
                    i = ["canvasRef"];
                  for (var a in e) {
                    var o = e[a];
                    r.includes(a)
                      ? (t[a] = o)
                      : i.includes(a)
                      ? (i[a] = o)
                      : (n[a] = o);
                  }
                  return [t, n, {}];
                }
                z(A, "defaultProps", M({}, b)),
                  z(A, "displayName", "ReactConfetti");
                var B = o.a.forwardRef(function (e, t) {
                  return o.a.createElement(A, _({ canvasRef: t }, e));
                });
                t.default = B;
              },
            ]).default));
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          i = n(296);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          d = {},
          p = {};
        function v(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var m = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = g.hasOwnProperty(t) ? g[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!f.call(p, e) ||
                    (!f.call(d, e) &&
                      (h.test(e) ? (p[e] = !0) : ((d[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(m, y);
            g[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(m, y);
              g[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(m, y);
            g[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          w = Symbol.for("react.portal"),
          _ = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          M = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          C = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          I = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var D = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var N = Symbol.iterator;
        function j(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (N && e[N]) || e["@@iterator"])
            ? e
            : null;
        }
        var z,
          R = Object.assign;
        function A(e) {
          if (void 0 === z)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              z = (t && t[1]) || "";
            }
          return "\n" + z + e;
        }
        var F = !1;
        function B(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var i = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  s = a.length - 1;
                1 <= o && 0 <= s && i[o] !== a[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (i[o] !== a[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || i[o] !== a[s])) {
                        var l = "\n" + i[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? A(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return A(e.type);
            case 16:
              return A("Lazy");
            case 13:
              return A("Suspense");
            case 19:
              return A("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case _:
              return "Fragment";
            case w:
              return "Portal";
            case M:
              return "Profiler";
            case S:
              return "StrictMode";
            case O:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case E:
                return (e._context.displayName || "Context") + ".Provider";
              case C:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case I:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
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
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
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
              return W(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function U(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return R({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = U(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          G(e, t);
          var n = U(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, U(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + U(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return R({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: U(n) };
        }
        function ae(e, t) {
          var n = U(t.value),
            r = U(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function he(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var de = {
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
          pe = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (de.hasOwnProperty(e) && de[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(de).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (de[t] = de[e]);
          });
        });
        var me = R(
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
        function ye(e, t) {
          if (t) {
            if (
              me[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var xe = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          _e = null,
          Se = null;
        function Me(e) {
          if ((e = bi(e))) {
            if ("function" !== typeof we) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ki(t)), we(e.stateNode, e.type, t));
          }
        }
        function Ee(e) {
          _e ? (Se ? Se.push(e) : (Se = [e])) : (_e = e);
        }
        function Pe() {
          if (_e) {
            var e = _e,
              t = Se;
            if (((Se = _e = null), Me(e), t))
              for (e = 0; e < t.length; e++) Me(t[e]);
          }
        }
        function Ce(e, t) {
          return e(t);
        }
        function Oe() {}
        var Te = !1;
        function Le(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Ce(e, t, n);
          } finally {
            (Te = !1), (null !== _e || null !== Se) && (Oe(), Pe());
          }
        }
        function Ie(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ki(n);
          if (null === r) return null;
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var De = !1;
        if (c)
          try {
            var Ne = {};
            Object.defineProperty(Ne, "passive", {
              get: function () {
                De = !0;
              },
            }),
              window.addEventListener("test", Ne, Ne),
              window.removeEventListener("test", Ne, Ne);
          } catch (ce) {
            De = !1;
          }
        function je(e, t, n, r, i, a, o, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var ze = !1,
          Re = null,
          Ae = !1,
          Fe = null,
          Be = {
            onError: function (e) {
              (ze = !0), (Re = e);
            },
          };
        function Ve(e, t, n, r, i, a, o, s, l) {
          (ze = !1), (Re = null), je.apply(Be, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ue(e) {
          if (We(e) !== e) throw Error(a(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return Ue(i), e;
                    if (o === r) return Ue(i), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var s = !1, l = i.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = i), (r = o);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = i), (n = o);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = o.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = o), (r = i);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = o), (n = i);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ye(e)
            : null;
        }
        function Ye(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ye(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = i.unstable_scheduleCallback,
          qe = i.unstable_cancelCallback,
          Ke = i.unstable_shouldYield,
          Xe = i.unstable_requestPaint,
          Ge = i.unstable_now,
          Je = i.unstable_getCurrentPriorityLevel,
          Ze = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          at = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function ht(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            a = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var s = o & ~i;
            0 !== s ? (r = ft(s)) : 0 !== (a &= o) && (r = ft(a));
          } else 0 !== (o = n & ~i) ? (r = ft(o)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (a = t & -t) || (16 === i && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function dt(e, t) {
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
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function mt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          wt,
          _t,
          St,
          Mt,
          Et = !1,
          Pt = [],
          Ct = null,
          Ot = null,
          Tt = null,
          Lt = new Map(),
          It = new Map(),
          Dt = [],
          Nt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function jt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ct = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              It.delete(t.pointerId);
          }
        }
        function zt(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i],
              }),
              null !== t && null !== (t = bi(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function Rt(e) {
          var t = yi(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Mt(e.priority, function () {
                      _t(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function At(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = bi(n)) && wt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          At(e) && n.delete(t);
        }
        function Bt() {
          (Et = !1),
            null !== Ct && At(Ct) && (Ct = null),
            null !== Ot && At(Ot) && (Ot = null),
            null !== Tt && At(Tt) && (Tt = null),
            Lt.forEach(Ft),
            It.forEach(Ft);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, Bt)));
        }
        function Wt(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < Pt.length) {
            Vt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ct && Vt(Ct, e),
              null !== Ot && Vt(Ot, e),
              null !== Tt && Vt(Tt, e),
              Lt.forEach(t),
              It.forEach(t),
              n = 0;
            n < Dt.length;
            n++
          )
            (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn; )
            Rt(n), null === n.blockedOn && Dt.shift();
        }
        var Ht = x.ReactCurrentBatchConfig,
          Ut = !0;
        function $t(e, t, n, r) {
          var i = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = i), (Ht.transition = a);
          }
        }
        function Yt(e, t, n, r) {
          var i = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = i), (Ht.transition = a);
          }
        }
        function Qt(e, t, n, r) {
          if (Ut) {
            var i = Kt(e, t, n, r);
            if (null === i) Ur(e, t, r, qt, n), jt(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (Ct = zt(Ct, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (Ot = zt(Ot, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Tt = zt(Tt, e, t, n, r, i)), !0;
                  case "pointerover":
                    var a = i.pointerId;
                    return Lt.set(a, zt(Lt.get(a) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (a = i.pointerId),
                      It.set(a, zt(It.get(a) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((jt(e, r), 4 & t && -1 < Nt.indexOf(e))) {
              for (; null !== i; ) {
                var a = bi(i);
                if (
                  (null !== a && kt(a),
                  null === (a = Kt(e, t, n, r)) && Ur(e, t, r, qt, n),
                  a === i)
                )
                  break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else Ur(e, t, r, null, n);
          }
        }
        var qt = null;
        function Kt(e, t, n, r) {
          if (((qt = null), null !== (e = yi((e = ke(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Xt(e) {
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
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            i = "value" in Gt ? Gt.value : Gt.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (Zt = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            R(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          fn = R({}, un, { view: 0, detail: 0 }),
          hn = an(fn),
          dn = R({}, fn, {
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
            getModifierState: Mn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          pn = an(dn),
          vn = an(R({}, dn, { dataTransfer: 0 })),
          gn = an(R({}, fn, { relatedTarget: 0 })),
          mn = an(
            R({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = R({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(R({}, un, { data: 0 })),
          kn = {
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
            MozPrintableKey: "Unidentified",
          },
          wn = {
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
            224: "Meta",
          },
          _n = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = _n[e]) && !!t[e];
        }
        function Mn() {
          return Sn;
        }
        var En = R({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? wn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Mn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = an(En),
          Cn = an(
            R({}, dn, {
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
            })
          ),
          On = an(
            R({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Mn,
            })
          ),
          Tn = an(
            R({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = R({}, dn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          In = an(Ln),
          Dn = [9, 13, 27, 32],
          Nn = c && "CompositionEvent" in window,
          jn = null;
        c && "documentMode" in document && (jn = document.documentMode);
        var zn = c && "TextEvent" in window && !jn,
          Rn = c && (!Nn || (jn && 8 < jn && 11 >= jn)),
          An = String.fromCharCode(32),
          Fn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Dn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
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
        function Un(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ee(r),
            0 < (t = Yr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Yn = null,
          Qn = null;
        function qn(e) {
          Ar(e, 0);
        }
        function Kn(e) {
          if (Q(xi(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Gn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Yn && (Yn.detachEvent("onpropertychange", nr), (Qn = Yn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Kn(Qn)) {
            var t = [];
            $n(t, Qn, e, ke(e)), Le(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (Yn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(Qn);
        }
        function ar(e, t) {
          if ("click" === e) return Kn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!f.call(t, i) || !sr(e[i], t[i])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function hr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function dr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = hr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && dr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  a = Math.min(r.start, i);
                (r = void 0 === r.end ? a : Math.min(r.end, i)),
                  !e.extend && a > r && ((i = r), (r = a), (a = i)),
                  (i = cr(n, a));
                var o = cr(n, r);
                i &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          mr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== q(r) ||
            ("selectionStart" in (r = gr) && dr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && lr(yr, r)) ||
              ((yr = r),
              0 < (r = Yr(mr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var wr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          _r = {},
          Sr = {};
        function Mr(e) {
          if (_r[e]) return _r[e];
          if (!wr[e]) return e;
          var t,
            n = wr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (_r[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete wr.animationend.animation,
            delete wr.animationiteration.animation,
            delete wr.animationstart.animation),
          "TransitionEvent" in window || delete wr.transitionend.transition);
        var Er = Mr("animationend"),
          Pr = Mr("animationiteration"),
          Cr = Mr("animationstart"),
          Or = Mr("transitionend"),
          Tr = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ir(e, t) {
          Tr.set(e, t), l(t, [e]);
        }
        for (var Dr = 0; Dr < Lr.length; Dr++) {
          var Nr = Lr[Dr];
          Ir(Nr.toLowerCase(), "on" + (Nr[0].toUpperCase() + Nr.slice(1)));
        }
        Ir(Er, "onAnimationEnd"),
          Ir(Pr, "onAnimationIteration"),
          Ir(Cr, "onAnimationStart"),
          Ir("dblclick", "onDoubleClick"),
          Ir("focusin", "onFocus"),
          Ir("focusout", "onBlur"),
          Ir(Or, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var jr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          zr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(jr)
          );
        function Rr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, o, s, l, u) {
              if ((Ve.apply(this, arguments), ze)) {
                if (!ze) throw Error(a(198));
                var c = Re;
                (ze = !1), (Re = null), Ae || ((Ae = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ar(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== a && i.isPropagationStopped()))
                    break e;
                  Rr(i, s, u), (a = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== a && i.isPropagationStopped())
                  )
                    break e;
                  Rr(i, s, u), (a = l);
                }
            }
          }
          if (Ae) throw ((e = Fe), (Ae = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[vi];
          void 0 === n && (n = t[vi] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Vr]) {
            (e[Vr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (zr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Vr] || ((t[Vr] = !0), Br("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var i = $t;
              break;
            case 4:
              i = Yt;
              break;
            default:
              i = Qt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !De ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Ur(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === i ||
                        (8 === l.nodeType && l.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = yi(s))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = a = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = a,
              i = ke(n),
              o = [];
            e: {
              var s = Tr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Pn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = On;
                    break;
                  case Er:
                  case Pr:
                  case Cr:
                    l = mn;
                    break;
                  case Or:
                    l = Tn;
                    break;
                  case "scroll":
                    l = hn;
                    break;
                  case "wheel":
                    l = In;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Cn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  h = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var d, p = r; null !== p; ) {
                  var v = (d = p).stateNode;
                  if (
                    (5 === d.tag &&
                      null !== v &&
                      ((d = v),
                      null !== h &&
                        null != (v = Ie(p, h)) &&
                        c.push($r(p, v, d))),
                    f)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, i)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!yi(u) && !u[pi])) &&
                  (l || s) &&
                  ((s =
                    i.window === i
                      ? i
                      : (s = i.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? yi(u)
                          : null) &&
                        (u !== (f = We(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = pn),
                  (v = "onMouseLeave"),
                  (h = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Cn),
                    (v = "onPointerLeave"),
                    (h = "onPointerEnter"),
                    (p = "pointer")),
                  (f = null == l ? s : xi(l)),
                  (d = null == u ? s : xi(u)),
                  ((s = new c(v, p + "leave", l, n, i)).target = f),
                  (s.relatedTarget = d),
                  (v = null),
                  yi(i) === r &&
                    (((c = new c(h, p + "enter", u, n, i)).target = d),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  l && u)
                )
                  e: {
                    for (h = u, p = 0, d = c = l; d; d = Qr(d)) p++;
                    for (d = 0, v = h; v; v = Qr(v)) d++;
                    for (; 0 < p - d; ) (c = Qr(c)), p--;
                    for (; 0 < d - p; ) (h = Qr(h)), d--;
                    for (; p--; ) {
                      if (c === h || (null !== h && c === h.alternate)) break e;
                      (c = Qr(c)), (h = Qr(h));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && qr(o, s, l, c, !1),
                  null !== u && null !== f && qr(o, f, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? xi(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = Xn;
              else if (Un(s))
                if (Gn) g = or;
                else {
                  g = ir;
                  var m = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (g = ar);
              switch (
                (g && (g = g(e, r))
                  ? $n(o, g, n, i)
                  : (m && m(e, s, r),
                    "focusout" === e &&
                      (m = s._wrapperState) &&
                      m.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (m = r ? xi(r) : window),
                e)
              ) {
                case "focusin":
                  (Un(m) || "true" === m.contentEditable) &&
                    ((gr = m), (mr = r), (yr = null));
                  break;
                case "focusout":
                  yr = mr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(o, n, i);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, i);
              }
              var y;
              if (Nn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Rn &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Wn && (y = en())
                    : ((Jt = "value" in (Gt = i) ? Gt.value : Gt.textContent),
                      (Wn = !0))),
                0 < (m = Yr(r, b)).length &&
                  ((b = new xn(b, e, null, n, i)),
                  o.push({ event: b, listeners: m }),
                  y ? (b.data = y) : null !== (y = Vn(n)) && (b.data = y))),
                (y = zn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), An);
                        case "textInput":
                          return (e = t.data) === An && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!Nn && Bn(e, t))
                          ? ((e = en()), (Zt = Jt = Gt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Rn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Yr(r, "onBeforeInput")).length &&
                  ((i = new xn("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            Ar(o, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Yr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = Ie(e, n)) && r.unshift($r(e, a, i)),
              null != (a = Ie(e, t)) && r.push($r(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              i
                ? null != (l = Ie(n, a)) && o.unshift($r(n, l, s))
                : i || (null != (l = Ie(n, a)) && o.push($r(n, l, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Kr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Kr, "\n")
            .replace(Xr, "");
        }
        function Jr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(a(425));
        }
        function Zr() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ai = "function" === typeof Promise ? Promise : void 0,
          oi =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ai
              ? function (e) {
                  return ai.resolve(null).then(e).catch(si);
                }
              : ri;
        function si(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function li(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          Wt(t);
        }
        function ui(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ci(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fi = Math.random().toString(36).slice(2),
          hi = "__reactFiber$" + fi,
          di = "__reactProps$" + fi,
          pi = "__reactContainer$" + fi,
          vi = "__reactEvents$" + fi,
          gi = "__reactListeners$" + fi,
          mi = "__reactHandles$" + fi;
        function yi(e) {
          var t = e[hi];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pi] || n[hi])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ci(e); null !== e; ) {
                  if ((n = e[hi])) return n;
                  e = ci(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function bi(e) {
          return !(e = e[hi] || e[pi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xi(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ki(e) {
          return e[di] || null;
        }
        var wi = [],
          _i = -1;
        function Si(e) {
          return { current: e };
        }
        function Mi(e) {
          0 > _i || ((e.current = wi[_i]), (wi[_i] = null), _i--);
        }
        function Ei(e, t) {
          _i++, (wi[_i] = e.current), (e.current = t);
        }
        var Pi = {},
          Ci = Si(Pi),
          Oi = Si(!1),
          Ti = Pi;
        function Li(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Pi;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Ii(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Di() {
          Mi(Oi), Mi(Ci);
        }
        function Ni(e, t, n) {
          if (Ci.current !== Pi) throw Error(a(168));
          Ei(Ci, t), Ei(Oi, n);
        }
        function ji(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(a(108, H(e) || "Unknown", i));
          return R({}, n, r);
        }
        function zi(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Pi),
            (Ti = Ci.current),
            Ei(Ci, e),
            Ei(Oi, Oi.current),
            !0
          );
        }
        function Ri(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = ji(e, t, Ti)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Mi(Oi),
              Mi(Ci),
              Ei(Ci, e))
            : Mi(Oi),
            Ei(Oi, n);
        }
        var Ai = null,
          Fi = !1,
          Bi = !1;
        function Vi(e) {
          null === Ai ? (Ai = [e]) : Ai.push(e);
        }
        function Wi() {
          if (!Bi && null !== Ai) {
            Bi = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ai;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ai = null), (Fi = !1);
            } catch (i) {
              throw (null !== Ai && (Ai = Ai.slice(e + 1)), Qe(Ze, Wi), i);
            } finally {
              (bt = t), (Bi = !1);
            }
          }
          return null;
        }
        var Hi = [],
          Ui = 0,
          $i = null,
          Yi = 0,
          Qi = [],
          qi = 0,
          Ki = null,
          Xi = 1,
          Gi = "";
        function Ji(e, t) {
          (Hi[Ui++] = Yi), (Hi[Ui++] = $i), ($i = e), (Yi = t);
        }
        function Zi(e, t, n) {
          (Qi[qi++] = Xi), (Qi[qi++] = Gi), (Qi[qi++] = Ki), (Ki = e);
          var r = Xi;
          e = Gi;
          var i = 32 - ot(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var a = 32 - ot(t) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (Xi = (1 << (32 - ot(t) + i)) | (n << i) | r),
              (Gi = a + e);
          } else (Xi = (1 << a) | (n << i) | r), (Gi = e);
        }
        function ea(e) {
          null !== e.return && (Ji(e, 1), Zi(e, 1, 0));
        }
        function ta(e) {
          for (; e === $i; )
            ($i = Hi[--Ui]), (Hi[Ui] = null), (Yi = Hi[--Ui]), (Hi[Ui] = null);
          for (; e === Ki; )
            (Ki = Qi[--qi]),
              (Qi[qi] = null),
              (Gi = Qi[--qi]),
              (Qi[qi] = null),
              (Xi = Qi[--qi]),
              (Qi[qi] = null);
        }
        var na = null,
          ra = null,
          ia = !1,
          aa = null;
        function oa(e, t) {
          var n = Lu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function sa(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (na = e), (ra = ui(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (na = e), (ra = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ki ? { id: Xi, overflow: Gi } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (na = e),
                (ra = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function la(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ua(e) {
          if (ia) {
            var t = ra;
            if (t) {
              var n = t;
              if (!sa(e, t)) {
                if (la(e)) throw Error(a(418));
                t = ui(n.nextSibling);
                var r = na;
                t && sa(e, t)
                  ? oa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e));
              }
            } else {
              if (la(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e);
            }
          }
        }
        function ca(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          na = e;
        }
        function fa(e) {
          if (e !== na) return !1;
          if (!ia) return ca(e), (ia = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = ra))
          ) {
            if (la(e)) throw (ha(), Error(a(418)));
            for (; t; ) oa(e, t), (t = ui(t.nextSibling));
          }
          if ((ca(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ra = ui(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ra = null;
            }
          } else ra = na ? ui(e.stateNode.nextSibling) : null;
          return !0;
        }
        function ha() {
          for (var e = ra; e; ) e = ui(e.nextSibling);
        }
        function da() {
          (ra = na = null), (ia = !1);
        }
        function pa(e) {
          null === aa ? (aa = [e]) : aa.push(e);
        }
        var va = x.ReactCurrentBatchConfig;
        function ga(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = R({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ma = Si(null),
          ya = null,
          ba = null,
          xa = null;
        function ka() {
          xa = ba = ya = null;
        }
        function wa(e) {
          var t = ma.current;
          Mi(ma), (e._currentValue = t);
        }
        function _a(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Sa(e, t) {
          (ya = e),
            (xa = ba = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xs = !0), (e.firstContext = null));
        }
        function Ma(e) {
          var t = e._currentValue;
          if (xa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === ba)
            ) {
              if (null === ya) throw Error(a(308));
              (ba = e), (ya.dependencies = { lanes: 0, firstContext: e });
            } else ba = ba.next = e;
          return t;
        }
        var Ea = null;
        function Pa(e) {
          null === Ea ? (Ea = [e]) : Ea.push(e);
        }
        function Ca(e, t, n, r) {
          var i = t.interleaved;
          return (
            null === i
              ? ((n.next = n), Pa(t))
              : ((n.next = i.next), (i.next = n)),
            (t.interleaved = n),
            Oa(e, r)
          );
        }
        function Oa(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ta = !1;
        function La(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ia(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Da(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Na(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Cl))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              Oa(e, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((t.next = t), Pa(r))
              : ((t.next = i.next), (i.next = t)),
            (r.interleaved = t),
            Oa(e, n)
          );
        }
        function ja(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function za(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ra(e, t, n, r) {
          var i = e.updateQueue;
          Ta = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === o ? (a = u) : (o.next = u), (o = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== a) {
            var f = i.baseState;
            for (o = 0, c = u = l = null, s = a; ; ) {
              var h = s.lane,
                d = s.eventTime;
              if ((r & h) === h) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: d,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    v = s;
                  switch (((h = t), (d = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (p = v.payload)) {
                        f = p.call(d, f, h);
                        break e;
                      }
                      f = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (h =
                            "function" === typeof (p = v.payload)
                              ? p.call(d, f, h)
                              : p) ||
                        void 0 === h
                      )
                        break e;
                      f = R({}, f, h);
                      break e;
                    case 2:
                      Ta = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (h = i.effects) ? (i.effects = [s]) : h.push(s));
              } else
                (d = {
                  eventTime: d,
                  lane: h,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = d), (l = f)) : (c = c.next = d),
                  (o |= h);
              if (null === (s = s.next)) {
                if (null === (s = i.shared.pending)) break;
                (s = (h = s).next),
                  (h.next = null),
                  (i.lastBaseUpdate = h),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (l = f),
              (i.baseState = l),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = c),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (o |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === a && (i.shared.lanes = 0);
            (zl |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Aa(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(a(191, i));
                i.call(r);
              }
            }
        }
        var Fa = new r.Component().refs;
        function Ba(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : R({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Va = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              i = tu(e),
              a = Da(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Na(e, a, i)) && (nu(t, e, i, r), ja(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              i = tu(e),
              a = Da(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Na(e, a, i)) && (nu(t, e, i, r), ja(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              i = Da(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              null !== (t = Na(e, i, r)) && (nu(t, e, r, n), ja(t, e, r));
          },
        };
        function Wa(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(i, a);
        }
        function Ha(e, t, n) {
          var r = !1,
            i = Pi,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Ma(a))
              : ((i = Ii(t) ? Ti : Ci.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Li(e, i)
                  : Pi)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Va),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function Ua(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Va.enqueueReplaceState(t, t.state, null);
        }
        function $a(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = Fa), La(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (i.context = Ma(a))
            : ((a = Ii(t) ? Ti : Ci.current), (i.context = Li(e, a))),
            (i.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (Ba(e, t, a, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && Va.enqueueReplaceState(i, i.state, null),
              Ra(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        function Ya(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var i = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    t === Fa && (t = i.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Qa(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function qa(e) {
          return (0, e._init)(e._payload);
        }
        function Ka(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Du(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ru(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === _
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === I &&
                    qa(a) === t.type))
              ? (((r = i(t, n.props)).ref = Ya(e, t, n)), (r.return = e), r)
              : (((r = Nu(n.type, n.key, n.props, null, e.mode, r)).ref = Ya(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Au(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = ju(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function h(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ru("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Nu(t.type, t.key, t.props, null, e.mode, n)).ref = Ya(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case w:
                  return ((t = Au(t, e.mode, n)).return = e), t;
                case I:
                  return h(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || j(t))
                return ((t = ju(t, e.mode, n, null)).return = e), t;
              Qa(e, t);
            }
            return null;
          }
          function d(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === i ? u(e, t, n, r) : null;
                case w:
                  return n.key === i ? c(e, t, n, r) : null;
                case I:
                  return d(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || j(n)) return null !== i ? null : f(e, t, n, r, null);
              Qa(e, n);
            }
            return null;
          }
          function p(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case I:
                  return p(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || j(r))
                return f(t, (e = e.get(n) || null), r, i, null);
              Qa(t, r);
            }
            return null;
          }
          function v(i, a, s, l) {
            for (
              var u = null, c = null, f = a, v = (a = 0), g = null;
              null !== f && v < s.length;
              v++
            ) {
              f.index > v ? ((g = f), (f = null)) : (g = f.sibling);
              var m = d(i, f, s[v], l);
              if (null === m) {
                null === f && (f = g);
                break;
              }
              e && f && null === m.alternate && t(i, f),
                (a = o(m, a, v)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m),
                (f = g);
            }
            if (v === s.length) return n(i, f), ia && Ji(i, v), u;
            if (null === f) {
              for (; v < s.length; v++)
                null !== (f = h(i, s[v], l)) &&
                  ((a = o(f, a, v)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return ia && Ji(i, v), u;
            }
            for (f = r(i, f); v < s.length; v++)
              null !== (g = p(f, i, v, s[v], l)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? v : g.key),
                (a = o(g, a, v)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Ji(i, v),
              u
            );
          }
          function g(i, s, l, u) {
            var c = j(l);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (l = c.call(l))) throw Error(a(151));
            for (
              var f = (c = null), v = s, g = (s = 0), m = null, y = l.next();
              null !== v && !y.done;
              g++, y = l.next()
            ) {
              v.index > g ? ((m = v), (v = null)) : (m = v.sibling);
              var b = d(i, v, y.value, u);
              if (null === b) {
                null === v && (v = m);
                break;
              }
              e && v && null === b.alternate && t(i, v),
                (s = o(b, s, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = m);
            }
            if (y.done) return n(i, v), ia && Ji(i, g), c;
            if (null === v) {
              for (; !y.done; g++, y = l.next())
                null !== (y = h(i, y.value, u)) &&
                  ((s = o(y, s, g)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ia && Ji(i, g), c;
            }
            for (v = r(i, v); !y.done; g++, y = l.next())
              null !== (y = p(v, i, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? g : y.key),
                (s = o(y, s, g)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Ji(i, g),
              c
            );
          }
          return function e(r, a, o, l) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === _ &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case k:
                  e: {
                    for (var u = o.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === _) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = i(c, o.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === I &&
                            qa(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = i(c, o.props)).ref = Ya(r, c, o)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === _
                      ? (((a = ju(o.props.children, r.mode, l, o.key)).return =
                          r),
                        (r = a))
                      : (((l = Nu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          l
                        )).ref = Ya(r, a, o)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case w:
                  e: {
                    for (c = o.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = i(a, o.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Au(o, r.mode, l)).return = r), (r = a);
                  }
                  return s(r);
                case I:
                  return e(r, a, (c = o._init)(o._payload), l);
              }
              if (te(o)) return v(r, a, o, l);
              if (j(o)) return g(r, a, o, l);
              Qa(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = i(a, o)).return = r), (r = a))
                  : (n(r, a), ((a = Ru(o, r.mode, l)).return = r), (r = a)),
                s(r))
              : n(r, a);
          };
        }
        var Xa = Ka(!0),
          Ga = Ka(!1),
          Ja = {},
          Za = Si(Ja),
          eo = Si(Ja),
          to = Si(Ja);
        function no(e) {
          if (e === Ja) throw Error(a(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ei(to, t), Ei(eo, e), Ei(Za, Ja), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Mi(Za), Ei(Za, t);
        }
        function io() {
          Mi(Za), Mi(eo), Mi(to);
        }
        function ao(e) {
          no(to.current);
          var t = no(Za.current),
            n = le(t, e.type);
          t !== n && (Ei(eo, e), Ei(Za, n));
        }
        function oo(e) {
          eo.current === e && (Mi(Za), Mi(eo));
        }
        var so = Si(0);
        function lo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var uo = [];
        function co() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          ho = x.ReactCurrentBatchConfig,
          po = 0,
          vo = null,
          go = null,
          mo = null,
          yo = !1,
          bo = !1,
          xo = 0,
          ko = 0;
        function wo() {
          throw Error(a(321));
        }
        function _o(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function So(e, t, n, r, i, o) {
          if (
            ((po = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ss : ls),
            (e = n(r, i)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(a(301));
              (o += 1),
                (mo = go = null),
                (t.updateQueue = null),
                (fo.current = us),
                (e = n(r, i));
            } while (bo);
          }
          if (
            ((fo.current = os),
            (t = null !== go && null !== go.next),
            (po = 0),
            (mo = go = vo = null),
            (yo = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Mo() {
          var e = 0 !== xo;
          return (xo = 0), e;
        }
        function Eo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === mo ? (vo.memoizedState = mo = e) : (mo = mo.next = e), mo
          );
        }
        function Po() {
          if (null === go) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = go.next;
          var t = null === mo ? vo.memoizedState : mo.next;
          if (null !== t) (mo = t), (go = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (go = e).memoizedState,
              baseState: go.baseState,
              baseQueue: go.baseQueue,
              queue: go.queue,
              next: null,
            }),
              null === mo ? (vo.memoizedState = mo = e) : (mo = mo.next = e);
          }
          return mo;
        }
        function Co(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Oo(e) {
          var t = Po(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = go,
            i = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var s = i.next;
              (i.next = o.next), (o.next = s);
            }
            (r.baseQueue = i = o), (n.pending = null);
          }
          if (null !== i) {
            (o = i.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = o;
            do {
              var f = c.lane;
              if ((po & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var h = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = h), (s = r)) : (u = u.next = h),
                  (vo.lanes |= f),
                  (zl |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (xs = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (o = i.lane), (vo.lanes |= o), (zl |= o), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function To(e) {
          var t = Po(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var s = (i = i.next);
            do {
              (o = e(o, s.action)), (s = s.next);
            } while (s !== i);
            sr(o, t.memoizedState) || (xs = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Lo() {}
        function Io(e, t) {
          var n = vo,
            r = Po(),
            i = t(),
            o = !sr(r.memoizedState, i);
          if (
            (o && ((r.memoizedState = i), (xs = !0)),
            (r = r.queue),
            Uo(jo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== mo && 1 & mo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fo(9, No.bind(null, n, r, i, t), void 0, null),
              null === Ol)
            )
              throw Error(a(349));
            0 !== (30 & po) || Do(n, t, i);
          }
          return i;
        }
        function Do(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function No(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), zo(t) && Ro(e);
        }
        function jo(e, t, n) {
          return n(function () {
            zo(t) && Ro(e);
          });
        }
        function zo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ro(e) {
          var t = Oa(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Ao(e) {
          var t = Eo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Co,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function Fo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Bo() {
          return Po().memoizedState;
        }
        function Vo(e, t, n, r) {
          var i = Eo();
          (vo.flags |= e),
            (i.memoizedState = Fo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Wo(e, t, n, r) {
          var i = Po();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== go) {
            var o = go.memoizedState;
            if (((a = o.destroy), null !== r && _o(r, o.deps)))
              return void (i.memoizedState = Fo(t, n, a, r));
          }
          (vo.flags |= e), (i.memoizedState = Fo(1 | t, n, a, r));
        }
        function Ho(e, t) {
          return Vo(8390656, 8, e, t);
        }
        function Uo(e, t) {
          return Wo(2048, 8, e, t);
        }
        function $o(e, t) {
          return Wo(4, 2, e, t);
        }
        function Yo(e, t) {
          return Wo(4, 4, e, t);
        }
        function Qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function qo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Wo(4, 4, Qo.bind(null, t, e), n)
          );
        }
        function Ko() {}
        function Xo(e, t) {
          var n = Po();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _o(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Go(e, t) {
          var n = Po();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _o(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Jo(e, t, n) {
          return 0 === (21 & po)
            ? (e.baseState && ((e.baseState = !1), (xs = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = vt()), (vo.lanes |= n), (zl |= n), (e.baseState = !0)),
              t);
        }
        function Zo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ho.transition;
          ho.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ho.transition = r);
          }
        }
        function es() {
          return Po().memoizedState;
        }
        function ts(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rs(e))
          )
            is(t, n);
          else if (null !== (n = Ca(e, t, n, r))) {
            nu(n, e, r, eu()), as(n, t, r);
          }
        }
        function ns(e, t, n) {
          var r = tu(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rs(e)) is(t, i);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), sr(s, o))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((i.next = i), Pa(t))
                      : ((i.next = l.next), (l.next = i)),
                    void (t.interleaved = i)
                  );
                }
              } catch (u) {}
            null !== (n = Ca(e, t, i, r)) &&
              (nu(n, e, r, (i = eu())), as(n, t, r));
          }
        }
        function rs(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function is(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function as(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var os = {
            readContext: Ma,
            useCallback: wo,
            useContext: wo,
            useEffect: wo,
            useImperativeHandle: wo,
            useInsertionEffect: wo,
            useLayoutEffect: wo,
            useMemo: wo,
            useReducer: wo,
            useRef: wo,
            useState: wo,
            useDebugValue: wo,
            useDeferredValue: wo,
            useTransition: wo,
            useMutableSource: wo,
            useSyncExternalStore: wo,
            useId: wo,
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: Ma,
            useCallback: function (e, t) {
              return (Eo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ma,
            useEffect: Ho,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Vo(4194308, 4, Qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Vo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Vo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Eo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Eo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ts.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Eo().memoizedState = e);
            },
            useState: Ao,
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              return (Eo().memoizedState = e);
            },
            useTransition: function () {
              var e = Ao(!1),
                t = e[0];
              return (
                (e = Zo.bind(null, e[1])), (Eo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                i = Eo();
              if (ia) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Ol)) throw Error(a(349));
                0 !== (30 & po) || Do(r, t, n);
              }
              i.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (i.queue = o),
                Ho(jo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Fo(9, No.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Eo(),
                t = Ol.identifierPrefix;
              if (ia) {
                var n = Gi;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xi & ~(1 << (32 - ot(Xi) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ko++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ls = {
            readContext: Ma,
            useCallback: Xo,
            useContext: Ma,
            useEffect: Uo,
            useImperativeHandle: qo,
            useInsertionEffect: $o,
            useLayoutEffect: Yo,
            useMemo: Go,
            useReducer: Oo,
            useRef: Bo,
            useState: function () {
              return Oo(Co);
            },
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              return Jo(Po(), go.memoizedState, e);
            },
            useTransition: function () {
              return [Oo(Co)[0], Po().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: Io,
            useId: es,
            unstable_isNewReconciler: !1,
          },
          us = {
            readContext: Ma,
            useCallback: Xo,
            useContext: Ma,
            useEffect: Uo,
            useImperativeHandle: qo,
            useInsertionEffect: $o,
            useLayoutEffect: Yo,
            useMemo: Go,
            useReducer: To,
            useRef: Bo,
            useState: function () {
              return To(Co);
            },
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              var t = Po();
              return null === go
                ? (t.memoizedState = e)
                : Jo(t, go.memoizedState, e);
            },
            useTransition: function () {
              return [To(Co)[0], Po().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: Io,
            useId: es,
            unstable_isNewReconciler: !1,
          };
        function cs(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: i, digest: null };
        }
        function fs(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function hs(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ds = "function" === typeof WeakMap ? WeakMap : Map;
        function ps(e, t, n) {
          ((n = Da(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ul || ((Ul = !0), ($l = r)), hs(0, t);
            }),
            n
          );
        }
        function vs(e, t, n) {
          (n = Da(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                hs(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                hs(0, t),
                  "function" !== typeof r &&
                    (null === Yl ? (Yl = new Set([this])) : Yl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gs(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ds();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = Mu.bind(null, e, t, n)), t.then(e, e));
        }
        function ms(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ys(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Da(-1, 1)).tag = 2), Na(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        var bs = x.ReactCurrentOwner,
          xs = !1;
        function ks(e, t, n, r) {
          t.child = null === e ? Ga(t, null, n, r) : Xa(t, e.child, n, r);
        }
        function ws(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            Sa(t, i),
            (r = So(e, t, n, r, a, i)),
            (n = Mo()),
            null === e || xs
              ? (ia && n && ea(t), (t.flags |= 1), ks(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Us(e, t, i))
          );
        }
        function _s(e, t, n, r, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Iu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Nu(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Ss(e, t, a, r, i));
          }
          if (((a = e.child), 0 === (e.lanes & i))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(o, r) &&
              e.ref === t.ref
            )
              return Us(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = Du(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ss(e, t, n, r, i) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (lr(a, r) && e.ref === t.ref) {
              if (((xs = !1), (t.pendingProps = r = a), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), Us(e, t, i);
              0 !== (131072 & e.flags) && (xs = !0);
            }
          }
          return Ps(e, t, n, r, i);
        }
        function Ms(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ei(Dl, Il),
                (Il |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ei(Dl, Il),
                  (Il |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Ei(Dl, Il),
                (Il |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ei(Dl, Il),
              (Il |= r);
          return ks(e, t, i, n), t.child;
        }
        function Es(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ps(e, t, n, r, i) {
          var a = Ii(n) ? Ti : Ci.current;
          return (
            (a = Li(t, a)),
            Sa(t, i),
            (n = So(e, t, n, r, a, i)),
            (r = Mo()),
            null === e || xs
              ? (ia && r && ea(t), (t.flags |= 1), ks(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Us(e, t, i))
          );
        }
        function Cs(e, t, n, r, i) {
          if (Ii(n)) {
            var a = !0;
            zi(t);
          } else a = !1;
          if ((Sa(t, i), null === t.stateNode))
            Hs(e, t), Ha(t, n, r), $a(t, n, r, i), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var l = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ma(u))
              : (u = Li(t, (u = Ii(n) ? Ti : Ci.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== r || l !== u) && Ua(t, o, r, u)),
              (Ta = !1);
            var h = t.memoizedState;
            (o.state = h),
              Ra(t, r, o, i),
              (l = t.memoizedState),
              s !== r || h !== l || Oi.current || Ta
                ? ("function" === typeof c &&
                    (Ba(t, n, c, r), (l = t.memoizedState)),
                  (s = Ta || Wa(t, n, s, r, h, l, u))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = u),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Ia(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : ga(t.type, s)),
              (o.props = u),
              (f = t.pendingProps),
              (h = o.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Ma(l))
                : (l = Li(t, (l = Ii(n) ? Ti : Ci.current)));
            var d = n.getDerivedStateFromProps;
            (c =
              "function" === typeof d ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== f || h !== l) && Ua(t, o, r, l)),
              (Ta = !1),
              (h = t.memoizedState),
              (o.state = h),
              Ra(t, r, o, i);
            var p = t.memoizedState;
            s !== f || h !== p || Oi.current || Ta
              ? ("function" === typeof d &&
                  (Ba(t, n, d, r), (p = t.memoizedState)),
                (u = Ta || Wa(t, n, u, r, h, p, l) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, p, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = l),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Os(e, t, n, r, a, i);
        }
        function Os(e, t, n, r, i, a) {
          Es(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return i && Ri(t, n, !1), Us(e, t, a);
          (r = t.stateNode), (bs.current = t);
          var s =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Xa(t, e.child, null, a)),
                (t.child = Xa(t, null, s, a)))
              : ks(e, t, s, a),
            (t.memoizedState = r.state),
            i && Ri(t, n, !0),
            t.child
          );
        }
        function Ts(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ni(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ni(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Ls(e, t, n, r, i) {
          return da(), pa(i), (t.flags |= 256), ks(e, t, n, r), t.child;
        }
        var Is,
          Ds,
          Ns,
          js = { dehydrated: null, treeContext: null, retryLane: 0 };
        function zs(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Rs(e, t, n) {
          var r,
            i = t.pendingProps,
            o = so.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ei(so, 1 & o),
            null === e)
          )
            return (
              ua(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = i.children),
                  (e = i.fallback),
                  s
                    ? ((i = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & i) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = zu(l, i, 0, null)),
                      (e = ju(e, i, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = zs(n)),
                      (t.memoizedState = js),
                      e)
                    : As(t, l))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, i, o, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fs(e, t, s, (r = fs(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (i = t.mode),
                    (r = zu(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((o = ju(o, i, s, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xa(t, e.child, null, s),
                    (t.child.memoizedState = zs(s)),
                    (t.memoizedState = js),
                    o);
              if (0 === (1 & t.mode)) return Fs(e, t, s, null);
              if ("$!" === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Fs(e, t, s, (r = fs((o = Error(a(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), xs || l)) {
                if (null !== (r = Ol)) {
                  switch (s & -s) {
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
                  0 !== (i = 0 !== (i & (r.suspendedLanes | s)) ? 0 : i) &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), Oa(e, i), nu(r, e, i, -1));
                }
                return vu(), Fs(e, t, s, (r = fs(Error(a(421)))));
              }
              return "$?" === i.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Pu.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ra = ui(i.nextSibling)),
                  (na = t),
                  (ia = !0),
                  (aa = null),
                  null !== e &&
                    ((Qi[qi++] = Xi),
                    (Qi[qi++] = Gi),
                    (Qi[qi++] = Ki),
                    (Xi = e.id),
                    (Gi = e.overflow),
                    (Ki = t)),
                  ((t = As(t, r.children)).flags |= 4096),
                  t);
            })(e, t, l, i, r, o, n);
          if (s) {
            (s = i.fallback), (l = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: i.children };
            return (
              0 === (1 & l) && t.child !== o
                ? (((i = t.child).childLanes = 0),
                  (i.pendingProps = u),
                  (t.deletions = null))
                : ((i = Du(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (s = Du(r, s))
                : ((s = ju(s, l, n, null)).flags |= 2),
              (s.return = t),
              (i.return = t),
              (i.sibling = s),
              (t.child = i),
              (i = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? zs(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = js),
              i
            );
          }
          return (
            (e = (s = e.child).sibling),
            (i = Du(s, { mode: "visible", children: i.children })),
            0 === (1 & t.mode) && (i.lanes = n),
            (i.return = t),
            (i.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = i),
            (t.memoizedState = null),
            i
          );
        }
        function As(e, t) {
          return (
            ((t = zu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fs(e, t, n, r) {
          return (
            null !== r && pa(r),
            Xa(t, e.child, null, n),
            ((e = As(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bs(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), _a(e.return, t, n);
        }
        function Vs(e, t, n, r, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i));
        }
        function Ws(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((ks(e, t, r.children, n), 0 !== (2 & (r = so.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bs(e, n, t);
                else if (19 === e.tag) Bs(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ei(so, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === lo(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Vs(t, !1, i, n, a);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === lo(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Vs(t, !0, n, null, a);
                break;
              case "together":
                Vs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Us(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (zl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Du((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Du(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $s(e, t) {
          if (!ia)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ys(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Qs(e, t, n) {
          var r = t.pendingProps;
          switch ((ta(t), t.tag)) {
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
              return Ys(t), null;
            case 1:
            case 17:
              return Ii(t.type) && Di(), Ys(t), null;
            case 3:
              return (
                (r = t.stateNode),
                io(),
                Mi(Oi),
                Mi(Ci),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== aa && (ou(aa), (aa = null)))),
                Ys(t),
                null
              );
            case 5:
              oo(t);
              var i = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ds(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Ys(t), null;
                }
                if (((e = no(Za.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[hi] = t), (r[di] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < jr.length; i++) Fr(jr[i], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      X(r, o), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ie(r, o), Fr("invalid", r);
                  }
                  for (var l in (ye(n, o), (i = null), o))
                    if (o.hasOwnProperty(l)) {
                      var u = o[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (i = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (i = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Y(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      Y(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[hi] = t),
                    (e[di] = r),
                    Is(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < jr.length; i++) Fr(jr[i], e);
                        i = r;
                        break;
                      case "source":
                        Fr("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (i = r);
                        break;
                      case "details":
                        Fr("toggle", e), (i = r);
                        break;
                      case "input":
                        X(e, r), (i = K(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = R({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), Fr("invalid", e);
                    }
                    for (o in (ye(n, i), (u = i)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && he(e, c)
                            : "number" === typeof c && he(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (s.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Fr("scroll", e)
                              : null != c && b(e, o, c, l));
                      }
                    switch (n) {
                      case "input":
                        Y(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Y(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + U(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = Zr);
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
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ys(t), null;
            case 6:
              if (e && null != t.stateNode) Ns(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = no(to.current)), no(Za.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[hi] = t),
                    (o = r.nodeValue !== n) && null !== (e = na))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[hi] = t),
                    (t.stateNode = r);
              }
              return Ys(t), null;
            case 13:
              if (
                (Mi(so),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ia &&
                  null !== ra &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  ha(), da(), (t.flags |= 98560), (o = !1);
                else if (((o = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(a(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(a(317));
                    o[hi] = t;
                  } else
                    da(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ys(t), (o = !1);
                } else null !== aa && (ou(aa), (aa = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & so.current)
                        ? 0 === Nl && (Nl = 3)
                        : vu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ys(t),
                  null);
            case 4:
              return (
                io(), null === e && Wr(t.stateNode.containerInfo), Ys(t), null
              );
            case 10:
              return wa(t.type._context), Ys(t), null;
            case 19:
              if ((Mi(so), null === (o = t.memoizedState))) return Ys(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = o.rendering)))
                if (r) $s(o, !1);
                else {
                  if (0 !== Nl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = lo(e))) {
                        for (
                          t.flags |= 128,
                            $s(o, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (l = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = l.childLanes),
                                (o.lanes = l.lanes),
                                (o.child = l.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = l.memoizedProps),
                                (o.memoizedState = l.memoizedState),
                                (o.updateQueue = l.updateQueue),
                                (o.type = l.type),
                                (e = l.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ei(so, (1 & so.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ge() > Wl &&
                    ((t.flags |= 128),
                    (r = !0),
                    $s(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = lo(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $s(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !l.alternate &&
                        !ia)
                    )
                      return Ys(t), null;
                  } else
                    2 * Ge() - o.renderingStartTime > Wl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $s(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = o.last) ? (n.sibling = l) : (t.child = l),
                    (o.last = l));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = so.current),
                  Ei(so, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ys(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Il) &&
                    (Ys(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ys(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function qs(e, t) {
          switch ((ta(t), t.tag)) {
            case 1:
              return (
                Ii(t.type) && Di(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                io(),
                Mi(Oi),
                Mi(Ci),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Mi(so),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                da();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Mi(so), null;
            case 4:
              return io(), null;
            case 10:
              return wa(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Is = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ds = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), no(Za.current);
              var a,
                o = null;
              switch (n) {
                case "input":
                  (i = K(e, i)), (r = K(e, r)), (o = []);
                  break;
                case "select":
                  (i = R({}, i, { value: void 0 })),
                    (r = R({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ("style" === c) {
                    var l = i[c];
                    for (a in l)
                      l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (a in l)
                        !l.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          l[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            o || l === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ns = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ks = !1,
          Xs = !1,
          Gs = "function" === typeof WeakSet ? WeakSet : Set,
          Js = null;
        function Zs(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Su(e, t, r);
              }
            else n.current = null;
        }
        function el(e, t, n) {
          try {
            n();
          } catch (r) {
            Su(e, t, r);
          }
        }
        var tl = !1;
        function nl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var a = i.destroy;
                (i.destroy = void 0), void 0 !== a && el(t, n, a);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function rl(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function il(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function al(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), al(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[hi],
              delete t[di],
              delete t[vi],
              delete t[gi],
              delete t[mi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ol(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function sl(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ol(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ll(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              ll(e, t, n), (e = e.sibling);
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        var cl = null,
          fl = !1;
        function hl(e, t, n) {
          for (n = n.child; null !== n; ) dl(e, t, n), (n = n.sibling);
        }
        function dl(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(it, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Xs || Zs(n, t);
            case 6:
              var r = cl,
                i = fl;
              (cl = null),
                hl(e, t, n),
                (fl = i),
                null !== (cl = r) &&
                  (fl
                    ? ((e = cl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cl.removeChild(n.stateNode));
              break;
            case 18:
              null !== cl &&
                (fl
                  ? ((e = cl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? li(e.parentNode, n)
                      : 1 === e.nodeType && li(e, n),
                    Wt(e))
                  : li(cl, n.stateNode));
              break;
            case 4:
              (r = cl),
                (i = fl),
                (cl = n.stateNode.containerInfo),
                (fl = !0),
                hl(e, t, n),
                (cl = r),
                (fl = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var a = i,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      el(n, t, o),
                    (i = i.next);
                } while (i !== r);
              }
              hl(e, t, n);
              break;
            case 1:
              if (
                !Xs &&
                (Zs(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Su(n, t, s);
                }
              hl(e, t, n);
              break;
            case 21:
              hl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xs = (r = Xs) || null !== n.memoizedState),
                  hl(e, t, n),
                  (Xs = r))
                : hl(e, t, n);
              break;
            default:
              hl(e, t, n);
          }
        }
        function pl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gs()),
              t.forEach(function (t) {
                var r = Cu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var o = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (cl = l.stateNode), (fl = !1);
                      break e;
                    case 3:
                    case 4:
                      (cl = l.stateNode.containerInfo), (fl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === cl) throw Error(a(160));
                dl(o, s, i), (cl = null), (fl = !1);
                var u = i.alternate;
                null !== u && (u.return = null), (i.return = null);
              } catch (c) {
                Su(i, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gl(t, e), (t = t.sibling);
        }
        function gl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vl(t, e), ml(e), 4 & r)) {
                try {
                  nl(3, e, e.return), rl(3, e);
                } catch (g) {
                  Su(e, e.return, g);
                }
                try {
                  nl(5, e, e.return);
                } catch (g) {
                  Su(e, e.return, g);
                }
              }
              break;
            case 1:
              vl(t, e), ml(e), 512 & r && null !== n && Zs(n, n.return);
              break;
            case 5:
              if (
                (vl(t, e),
                ml(e),
                512 & r && null !== n && Zs(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  he(i, "");
                } catch (g) {
                  Su(e, e.return, g);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var o = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === o.type &&
                      null != o.name &&
                      G(i, o),
                      be(l, s);
                    var c = be(l, o);
                    for (s = 0; s < u.length; s += 2) {
                      var f = u[s],
                        h = u[s + 1];
                      "style" === f
                        ? ge(i, h)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(i, h)
                        : "children" === f
                        ? he(i, h)
                        : b(i, f, h, c);
                    }
                    switch (l) {
                      case "input":
                        J(i, o);
                        break;
                      case "textarea":
                        ae(i, o);
                        break;
                      case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var p = o.value;
                        null != p
                          ? ne(i, !!o.multiple, p, !1)
                          : d !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(i, !!o.multiple, o.defaultValue, !0)
                              : ne(i, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    i[di] = o;
                  } catch (g) {
                    Su(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((vl(t, e), ml(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                  i.nodeValue = o;
                } catch (g) {
                  Su(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (vl(t, e),
                ml(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (g) {
                  Su(e, e.return, g);
                }
              break;
            case 4:
            default:
              vl(t, e), ml(e);
              break;
            case 13:
              vl(t, e),
                ml(e),
                8192 & (i = e.child).flags &&
                  ((o = null !== i.memoizedState),
                  (i.stateNode.isHidden = o),
                  !o ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (Vl = Ge())),
                4 & r && pl(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xs = (c = Xs) || f), vl(t, e), (Xs = c))
                  : vl(t, e),
                ml(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Js = e, f = e.child; null !== f; ) {
                    for (h = Js = f; null !== Js; ) {
                      switch (((p = (d = Js).child), d.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, d, d.return);
                          break;
                        case 1:
                          Zs(d, d.return);
                          var v = d.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = d), (n = d.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (g) {
                              Su(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Zs(d, d.return);
                          break;
                        case 22:
                          if (null !== d.memoizedState) {
                            kl(h);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = d), (Js = p)) : kl(h);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, h = e; ; ) {
                  if (5 === h.tag) {
                    if (null === f) {
                      f = h;
                      try {
                        (i = h.stateNode),
                          c
                            ? "function" === typeof (o = i.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((l = h.stateNode),
                              (s =
                                void 0 !== (u = h.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = ve("display", s)));
                      } catch (g) {
                        Su(e, e.return, g);
                      }
                    }
                  } else if (6 === h.tag) {
                    if (null === f)
                      try {
                        h.stateNode.nodeValue = c ? "" : h.memoizedProps;
                      } catch (g) {
                        Su(e, e.return, g);
                      }
                  } else if (
                    ((22 !== h.tag && 23 !== h.tag) ||
                      null === h.memoizedState ||
                      h === e) &&
                    null !== h.child
                  ) {
                    (h.child.return = h), (h = h.child);
                    continue;
                  }
                  if (h === e) break e;
                  for (; null === h.sibling; ) {
                    if (null === h.return || h.return === e) break e;
                    f === h && (f = null), (h = h.return);
                  }
                  f === h && (f = null),
                    (h.sibling.return = h.return),
                    (h = h.sibling);
                }
              }
              break;
            case 19:
              vl(t, e), ml(e), 4 & r && pl(e);
            case 21:
          }
        }
        function ml(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ol(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (he(i, ""), (r.flags &= -33)),
                    ul(e, sl(e), i);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ll(e, sl(e), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (s) {
              Su(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yl(e, t, n) {
          (Js = e), bl(e, t, n);
        }
        function bl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Js; ) {
            var i = Js,
              a = i.child;
            if (22 === i.tag && r) {
              var o = null !== i.memoizedState || Ks;
              if (!o) {
                var s = i.alternate,
                  l = (null !== s && null !== s.memoizedState) || Xs;
                s = Ks;
                var u = Xs;
                if (((Ks = o), (Xs = l) && !u))
                  for (Js = i; null !== Js; )
                    (l = (o = Js).child),
                      22 === o.tag && null !== o.memoizedState
                        ? wl(i)
                        : null !== l
                        ? ((l.return = o), (Js = l))
                        : wl(i);
                for (; null !== a; ) (Js = a), bl(a, t, n), (a = a.sibling);
                (Js = i), (Ks = s), (Xs = u);
              }
              xl(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== a
                ? ((a.return = i), (Js = a))
                : xl(e);
          }
        }
        function xl(e) {
          for (; null !== Js; ) {
            var t = Js;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xs || rl(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xs)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ga(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Aa(t, o, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Aa(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var h = f.dehydrated;
                            null !== h && Wt(h);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Xs || (512 & t.flags && il(t));
              } catch (d) {
                Su(t, t.return, d);
              }
            }
            if (t === e) {
              Js = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Js = n);
              break;
            }
            Js = t.return;
          }
        }
        function kl(e) {
          for (; null !== Js; ) {
            var t = Js;
            if (t === e) {
              Js = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Js = n);
              break;
            }
            Js = t.return;
          }
        }
        function wl(e) {
          for (; null !== Js; ) {
            var t = Js;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rl(4, t);
                  } catch (l) {
                    Su(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Su(t, i, l);
                    }
                  }
                  var a = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Su(t, a, l);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Su(t, o, l);
                  }
              }
            } catch (l) {
              Su(t, t.return, l);
            }
            if (t === e) {
              Js = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Js = s);
              break;
            }
            Js = t.return;
          }
        }
        var _l,
          Sl = Math.ceil,
          Ml = x.ReactCurrentDispatcher,
          El = x.ReactCurrentOwner,
          Pl = x.ReactCurrentBatchConfig,
          Cl = 0,
          Ol = null,
          Tl = null,
          Ll = 0,
          Il = 0,
          Dl = Si(0),
          Nl = 0,
          jl = null,
          zl = 0,
          Rl = 0,
          Al = 0,
          Fl = null,
          Bl = null,
          Vl = 0,
          Wl = 1 / 0,
          Hl = null,
          Ul = !1,
          $l = null,
          Yl = null,
          Ql = !1,
          ql = null,
          Kl = 0,
          Xl = 0,
          Gl = null,
          Jl = -1,
          Zl = 0;
        function eu() {
          return 0 !== (6 & Cl) ? Ge() : -1 !== Jl ? Jl : (Jl = Ge());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Cl) && 0 !== Ll
            ? Ll & -Ll
            : null !== va.transition
            ? (0 === Zl && (Zl = vt()), Zl)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Xl) throw ((Xl = 0), (Gl = null), Error(a(185)));
          mt(e, n, r),
            (0 !== (2 & Cl) && e === Ol) ||
              (e === Ol && (0 === (2 & Cl) && (Rl |= n), 4 === Nl && su(e, Ll)),
              ru(e, r),
              1 === n &&
                0 === Cl &&
                0 === (1 & t.mode) &&
                ((Wl = Ge() + 500), Fi && Wi()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var o = 31 - ot(a),
                s = 1 << o,
                l = i[o];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (i[o] = dt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (a &= ~s);
            }
          })(e, t);
          var r = ht(e, e === Ol ? Ll : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fi = !0), Vi(e);
                  })(lu.bind(null, e))
                : Vi(lu.bind(null, e)),
                oi(function () {
                  0 === (6 & Cl) && Wi();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ou(n, iu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function iu(e, t) {
          if (((Jl = -1), (Zl = 0), 0 !== (6 & Cl))) throw Error(a(327));
          var n = e.callbackNode;
          if (wu() && e.callbackNode !== n) return null;
          var r = ht(e, e === Ol ? Ll : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var i = Cl;
            Cl |= 2;
            var o = pu();
            for (
              (Ol === e && Ll === t) ||
              ((Hl = null), (Wl = Ge() + 500), hu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (l) {
                du(e, l);
              }
            ka(),
              (Ml.current = o),
              (Cl = i),
              null !== Tl ? (t = 0) : ((Ol = null), (Ll = 0), (t = Nl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = pt(e)) && ((r = i), (t = au(e, i))),
              1 === t)
            )
              throw ((n = jl), hu(e, 0), su(e, r), ru(e, Ge()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              a = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!sr(a(), i)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (o = pt(e)) &&
                    ((r = o), (t = au(e, o))),
                  1 === t))
              )
                throw ((n = jl), hu(e, 0), su(e, r), ru(e, Ge()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  ku(e, Bl, Hl);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Vl + 500 - Ge()))
                  ) {
                    if (0 !== ht(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(ku.bind(null, e, Bl, Hl), t);
                    break;
                  }
                  ku(e, Bl, Hl);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var s = 31 - ot(r);
                    (o = 1 << s), (s = t[s]) > i && (i = s), (r &= ~o);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
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
                          : 1960 * Sl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(ku.bind(null, e, Bl, Hl), r);
                    break;
                  }
                  ku(e, Bl, Hl);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ru(e, Ge()), e.callbackNode === n ? iu.bind(null, e) : null;
        }
        function au(e, t) {
          var n = Fl;
          return (
            e.current.memoizedState.isDehydrated && (hu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Bl), (Bl = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === Bl ? (Bl = e) : Bl.push.apply(Bl, e);
        }
        function su(e, t) {
          for (
            t &= ~Al,
              t &= ~Rl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function lu(e) {
          if (0 !== (6 & Cl)) throw Error(a(327));
          wu();
          var t = ht(e, 0);
          if (0 === (1 & t)) return ru(e, Ge()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = au(e, r)));
          }
          if (1 === n) throw ((n = jl), hu(e, 0), su(e, t), ru(e, Ge()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Bl, Hl),
            ru(e, Ge()),
            null
          );
        }
        function uu(e, t) {
          var n = Cl;
          Cl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Cl = n) && ((Wl = Ge() + 500), Fi && Wi());
          }
        }
        function cu(e) {
          null !== ql && 0 === ql.tag && 0 === (6 & Cl) && wu();
          var t = Cl;
          Cl |= 1;
          var n = Pl.transition,
            r = bt;
          try {
            if (((Pl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Pl.transition = n), 0 === (6 & (Cl = t)) && Wi();
          }
        }
        function fu() {
          (Il = Dl.current), Mi(Dl);
        }
        function hu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Tl))
            for (n = Tl.return; null !== n; ) {
              var r = n;
              switch ((ta(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Di();
                  break;
                case 3:
                  io(), Mi(Oi), Mi(Ci), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  io();
                  break;
                case 13:
                case 19:
                  Mi(so);
                  break;
                case 10:
                  wa(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Ol = e),
            (Tl = e = Du(e.current, null)),
            (Ll = Il = t),
            (Nl = 0),
            (jl = null),
            (Al = Rl = zl = 0),
            (Bl = Fl = null),
            null !== Ea)
          ) {
            for (t = 0; t < Ea.length; t++)
              if (null !== (r = (n = Ea[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  a = n.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = i), (r.next = o);
                }
                n.pending = r;
              }
            Ea = null;
          }
          return e;
        }
        function du(e, t) {
          for (;;) {
            var n = Tl;
            try {
              if ((ka(), (fo.current = os), yo)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((po = 0),
                (mo = go = vo = null),
                (bo = !1),
                (xo = 0),
                (El.current = null),
                null === n || null === n.return)
              ) {
                (Nl = 1), (jl = t), (Tl = null);
                break;
              }
              e: {
                var o = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Ll),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = l,
                    h = f.tag;
                  if (0 === (1 & f.mode) && (0 === h || 11 === h || 15 === h)) {
                    var d = f.alternate;
                    d
                      ? ((f.updateQueue = d.updateQueue),
                        (f.memoizedState = d.memoizedState),
                        (f.lanes = d.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var p = ms(s);
                  if (null !== p) {
                    (p.flags &= -257),
                      ys(p, s, l, 0, t),
                      1 & p.mode && gs(o, c, t),
                      (u = c);
                    var v = (t = p).updateQueue;
                    if (null === v) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else v.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gs(o, c, t), vu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (ia && 1 & l.mode) {
                  var m = ms(s);
                  if (null !== m) {
                    0 === (65536 & m.flags) && (m.flags |= 256),
                      ys(m, s, l, 0, t),
                      pa(cs(u, l));
                    break e;
                  }
                }
                (o = u = cs(u, l)),
                  4 !== Nl && (Nl = 2),
                  null === Fl ? (Fl = [o]) : Fl.push(o),
                  (o = s);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        za(o, ps(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Yl || !Yl.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          za(o, vs(o, l, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              xu(n);
            } catch (x) {
              (t = x), Tl === n && null !== n && (Tl = n = n.return);
              continue;
            }
            break;
          }
        }
        function pu() {
          var e = Ml.current;
          return (Ml.current = os), null === e ? os : e;
        }
        function vu() {
          (0 !== Nl && 3 !== Nl && 2 !== Nl) || (Nl = 4),
            null === Ol ||
              (0 === (268435455 & zl) && 0 === (268435455 & Rl)) ||
              su(Ol, Ll);
        }
        function gu(e, t) {
          var n = Cl;
          Cl |= 2;
          var r = pu();
          for ((Ol === e && Ll === t) || ((Hl = null), hu(e, t)); ; )
            try {
              mu();
              break;
            } catch (i) {
              du(e, i);
            }
          if ((ka(), (Cl = n), (Ml.current = r), null !== Tl))
            throw Error(a(261));
          return (Ol = null), (Ll = 0), Nl;
        }
        function mu() {
          for (; null !== Tl; ) bu(Tl);
        }
        function yu() {
          for (; null !== Tl && !Ke(); ) bu(Tl);
        }
        function bu(e) {
          var t = _l(e.alternate, e, Il);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (Tl = t),
            (El.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qs(n, t, Il))) return void (Tl = n);
            } else {
              if (null !== (n = qs(n, t)))
                return (n.flags &= 32767), void (Tl = n);
              if (null === e) return (Nl = 6), void (Tl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Tl = t);
            Tl = t = e;
          } while (null !== t);
          0 === Nl && (Nl = 5);
        }
        function ku(e, t, n) {
          var r = bt,
            i = Pl.transition;
          try {
            (Pl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  wu();
                } while (null !== ql);
                if (0 !== (6 & Cl)) throw Error(a(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - ot(n),
                        a = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
                    }
                  })(e, o),
                  e === Ol && ((Tl = Ol = null), (Ll = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ql ||
                    ((Ql = !0),
                    Ou(tt, function () {
                      return wu(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Pl.transition), (Pl.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = Cl;
                  (Cl |= 4),
                    (El.current = null),
                    (function (e, t) {
                      if (((ei = Ut), dr((e = hr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                h = e,
                                d = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  h !== n ||
                                    (0 !== i && 3 !== h.nodeType) ||
                                    (l = s + i),
                                    h !== o ||
                                      (0 !== r && 3 !== h.nodeType) ||
                                      (u = s + r),
                                    3 === h.nodeType &&
                                      (s += h.nodeValue.length),
                                    null !== (p = h.firstChild);

                                )
                                  (d = h), (h = p);
                                for (;;) {
                                  if (h === e) break t;
                                  if (
                                    (d === n && ++c === i && (l = s),
                                    d === o && ++f === r && (u = s),
                                    null !== (p = h.nextSibling))
                                  )
                                    break;
                                  d = (h = d).parentNode;
                                }
                                h = p;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          Ut = !1,
                          Js = t;
                        null !== Js;

                      )
                        if (
                          ((e = (t = Js).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Js = e);
                        else
                          for (; null !== Js; ) {
                            t = Js;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var g = v.memoizedProps,
                                        m = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ga(t.type, g),
                                          m
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (k) {
                              Su(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Js = e);
                              break;
                            }
                            Js = t.return;
                          }
                      (v = tl), (tl = !1);
                    })(e, n),
                    gl(n, e),
                    pr(ti),
                    (Ut = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    yl(n, e, i),
                    Xe(),
                    (Cl = l),
                    (bt = s),
                    (Pl.transition = o);
                } else e.current = n;
                if (
                  (Ql && ((Ql = !1), (ql = e), (Kl = i)),
                  0 === (o = e.pendingLanes) && (Yl = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((i = t[n]).value, {
                      componentStack: i.stack,
                      digest: i.digest,
                    });
                if (Ul) throw ((Ul = !1), (e = $l), ($l = null), e);
                0 !== (1 & Kl) && 0 !== e.tag && wu(),
                  0 !== (1 & (o = e.pendingLanes))
                    ? e === Gl
                      ? Xl++
                      : ((Xl = 0), (Gl = e))
                    : (Xl = 0),
                  Wi();
              })(e, t, n, r);
          } finally {
            (Pl.transition = i), (bt = r);
          }
          return null;
        }
        function wu() {
          if (null !== ql) {
            var e = xt(Kl),
              t = Pl.transition,
              n = bt;
            try {
              if (((Pl.transition = null), (bt = 16 > e ? 16 : e), null === ql))
                var r = !1;
              else {
                if (((e = ql), (ql = null), (Kl = 0), 0 !== (6 & Cl)))
                  throw Error(a(331));
                var i = Cl;
                for (Cl |= 4, Js = e.current; null !== Js; ) {
                  var o = Js,
                    s = o.child;
                  if (0 !== (16 & Js.flags)) {
                    var l = o.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Js = c; null !== Js; ) {
                          var f = Js;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, f, o);
                          }
                          var h = f.child;
                          if (null !== h) (h.return = f), (Js = h);
                          else
                            for (; null !== Js; ) {
                              var d = (f = Js).sibling,
                                p = f.return;
                              if ((al(f), f === c)) {
                                Js = null;
                                break;
                              }
                              if (null !== d) {
                                (d.return = p), (Js = d);
                                break;
                              }
                              Js = p;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var g = v.child;
                        if (null !== g) {
                          v.child = null;
                          do {
                            var m = g.sibling;
                            (g.sibling = null), (g = m);
                          } while (null !== g);
                        }
                      }
                      Js = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s)
                    (s.return = o), (Js = s);
                  else
                    e: for (; null !== Js; ) {
                      if (0 !== (2048 & (o = Js).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Js = y);
                        break e;
                      }
                      Js = o.return;
                    }
                }
                var b = e.current;
                for (Js = b; null !== Js; ) {
                  var x = (s = Js).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== x)
                    (x.return = s), (Js = x);
                  else
                    e: for (s = b; null !== Js; ) {
                      if (0 !== (2048 & (l = Js).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (w) {
                          Su(l, l.return, w);
                        }
                      if (l === s) {
                        Js = null;
                        break e;
                      }
                      var k = l.sibling;
                      if (null !== k) {
                        (k.return = l.return), (Js = k);
                        break e;
                      }
                      Js = l.return;
                    }
                }
                if (
                  ((Cl = i),
                  Wi(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(it, e);
                  } catch (w) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Pl.transition = t);
            }
          }
          return !1;
        }
        function _u(e, t, n) {
          (e = Na(e, (t = ps(0, (t = cs(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (mt(e, 1, t), ru(e, t));
        }
        function Su(e, t, n) {
          if (3 === e.tag) _u(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _u(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Yl || !Yl.has(r)))
                ) {
                  (t = Na(t, (e = vs(t, (e = cs(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (mt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Mu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ol === e &&
              (Ll & n) === n &&
              (4 === Nl ||
              (3 === Nl && (130023424 & Ll) === Ll && 500 > Ge() - Vl)
                ? hu(e, 0)
                : (Al |= n)),
            ru(e, t);
        }
        function Eu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Oa(e, t)) && (mt(e, t, n), ru(e, n));
        }
        function Pu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Eu(e, n);
        }
        function Cu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Eu(e, n);
        }
        function Ou(e, t) {
          return Qe(e, t);
        }
        function Tu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
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
        function Lu(e, t, n, r) {
          return new Tu(e, t, n, r);
        }
        function Iu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Du(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Nu(e, t, n, r, i, o) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Iu(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case _:
                return ju(n.children, i, o, t);
              case S:
                (s = 8), (i |= 8);
                break;
              case M:
                return (
                  ((e = Lu(12, n, t, 2 | i)).elementType = M), (e.lanes = o), e
                );
              case O:
                return (
                  ((e = Lu(13, n, t, i)).elementType = O), (e.lanes = o), e
                );
              case T:
                return (
                  ((e = Lu(19, n, t, i)).elementType = T), (e.lanes = o), e
                );
              case D:
                return zu(n, i, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      s = 10;
                      break e;
                    case P:
                      s = 9;
                      break e;
                    case C:
                      s = 11;
                      break e;
                    case L:
                      s = 14;
                      break e;
                    case I:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lu(s, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function ju(e, t, n, r) {
          return ((e = Lu(7, e, r, t)).lanes = n), e;
        }
        function zu(e, t, n, r) {
          return (
            ((e = Lu(22, e, r, t)).elementType = D),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ru(e, t, n) {
          return ((e = Lu(6, e, null, t)).lanes = n), e;
        }
        function Au(e, t, n) {
          return (
            ((t = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, t, n, r, i, a, o, s, l) {
          return (
            (e = new Fu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Lu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            La(a),
            e
          );
        }
        function Vu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: w,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Wu(e) {
          if (!e) return Pi;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ii(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ii(n)) return ji(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, i, a, o, s, l) {
          return (
            ((e = Bu(n, r, !0, e, 0, a, 0, s, l)).context = Wu(null)),
            (n = e.current),
            ((a = Da((r = eu()), (i = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Na(n, a, i),
            (e.current.lanes = i),
            mt(e, i, r),
            ru(e, r),
            e
          );
        }
        function Uu(e, t, n, r) {
          var i = t.current,
            a = eu(),
            o = tu(i);
          return (
            (n = Wu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Da(a, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Na(i, t, o)) && (nu(e, i, o, a), ja(e, i, o)),
            o
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Yu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qu(e, t) {
          Yu(e, t), (e = e.alternate) && Yu(e, t);
        }
        _l = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oi.current) xs = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xs = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ts(t), da();
                        break;
                      case 5:
                        ao(t);
                        break;
                      case 1:
                        Ii(t.type) && zi(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        Ei(ma, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ei(so, 1 & so.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Rs(e, t, n)
                            : (Ei(so, 1 & so.current),
                              null !== (e = Us(e, t, n)) ? e.sibling : null);
                        Ei(so, 1 & so.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Ws(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Ei(so, so.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ms(e, t, n);
                    }
                    return Us(e, t, n);
                  })(e, t, n)
                );
              xs = 0 !== (131072 & e.flags);
            }
          else (xs = !1), ia && 0 !== (1048576 & t.flags) && Zi(t, Yi, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hs(e, t), (e = t.pendingProps);
              var i = Li(t, Ci.current);
              Sa(t, n), (i = So(null, t, r, e, i, n));
              var o = Mo();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ii(r) ? ((o = !0), zi(t)) : (o = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    La(t),
                    (i.updater = Va),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    $a(t, r, e, n),
                    (t = Os(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ia && o && ea(t),
                    ks(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hs(e, t),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Iu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ga(r, e)),
                  i)
                ) {
                  case 0:
                    t = Ps(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Cs(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ws(null, t, r, e, n);
                    break e;
                  case 14:
                    t = _s(null, t, r, ga(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Ps(e, t, r, (i = t.elementType === r ? i : ga(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Cs(e, t, r, (i = t.elementType === r ? i : ga(r, i)), n)
              );
            case 3:
              e: {
                if ((Ts(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (i = (o = t.memoizedState).element),
                  Ia(e, t),
                  Ra(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ls(e, t, r, n, (i = cs(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== i) {
                    t = Ls(e, t, r, n, (i = cs(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    ra = ui(t.stateNode.containerInfo.firstChild),
                      na = t,
                      ia = !0,
                      aa = null,
                      n = Ga(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((da(), r === i)) {
                    t = Us(e, t, n);
                    break e;
                  }
                  ks(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ao(t),
                null === e && ua(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (s = i.children),
                ni(r, i)
                  ? (s = null)
                  : null !== o && ni(r, o) && (t.flags |= 32),
                Es(e, t),
                ks(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ua(t), null;
            case 13:
              return Rs(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xa(t, null, r, n)) : ks(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                ws(e, t, r, (i = t.elementType === r ? i : ga(r, i)), n)
              );
            case 7:
              return ks(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ks(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (o = t.memoizedProps),
                  (s = i.value),
                  Ei(ma, r._currentValue),
                  (r._currentValue = s),
                  null !== o)
                )
                  if (sr(o.value, s)) {
                    if (o.children === i.children && !Oi.current) {
                      t = Us(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var l = o.dependencies;
                      if (null !== l) {
                        s = o.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Da(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              _a(o.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        s = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(a(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          _a(s, n, t),
                          (s = o.sibling);
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else
                        for (s = o; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            (o.return = s.return), (s = o);
                            break;
                          }
                          s = s.return;
                        }
                      o = s;
                    }
                ks(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                Sa(t, n),
                (r = r((i = Ma(i)))),
                (t.flags |= 1),
                ks(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = ga((r = t.type), t.pendingProps)),
                _s(e, t, r, (i = ga(r.type, i)), n)
              );
            case 15:
              return Ss(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : ga(r, i)),
                Hs(e, t),
                (t.tag = 1),
                Ii(r) ? ((e = !0), zi(t)) : (e = !1),
                Sa(t, n),
                Ha(t, r, i),
                $a(t, r, i, n),
                Os(null, t, r, !0, e, n)
              );
            case 19:
              return Ws(e, t, n);
            case 22:
              return Ms(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ku(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a;
            if ("function" === typeof i) {
              var s = i;
              i = function () {
                var e = $u(o);
                s.call(e);
              };
            }
            Uu(t, o, e, i);
          } else
            o = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = $u(o);
                    a.call(e);
                  };
                }
                var o = Hu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = o),
                  (e[pi] = o.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  o
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = $u(l);
                  s.call(e);
                };
              }
              var l = Bu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = l),
                (e[pi] = l.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Uu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, i, r);
          return $u(o);
        }
        (Xu.prototype.render = Ku.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Uu(e, t, null, null);
          }),
          (Xu.prototype.unmount = Ku.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Uu(null, e, null, null);
                }),
                  (t[pi] = null);
              }
            }),
          (Xu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Dt.length && 0 !== t && t < Dt[n].priority;
                n++
              );
              Dt.splice(n, 0, e), 0 === n && Rt(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Ge()),
                    0 === (6 & Cl) && ((Wl = Ge() + 500), Wi()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Oa(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = Oa(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Qu(e, 134217728);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Oa(e, t);
              if (null !== n) nu(n, e, t, eu());
              Qu(e, t);
            }
          }),
          (St = function () {
            return bt;
          }),
          (Mt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (we = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = ki(r);
                      if (!i) throw Error(a(90));
                      Q(r), J(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ce = uu),
          (Oe = cu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [bi, xi, ki, Ee, Pe, uu],
          },
          nc = {
            findFiberByHostInstance: yi,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ic.isDisabled && ic.supportsFiber)
            try {
              (it = ic.inject(rc)), (at = ic);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gu(t)) throw Error(a(200));
            return Vu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(a(299));
            var n = !1,
              r = "",
              i = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = Bu(e, 1, !1, null, 0, n, 0, r, i)),
              (e[pi] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Ku(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              o = "",
              s = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, i, 0, o, s)),
              (e[pi] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Xu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          i = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: s.current,
          };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          d = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          g = {};
        function m(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = m.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), v(x, m.prototype), (x.isPureReactComponent = !0);
        var k = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          _ = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function M(e, t, r) {
          var i,
            a = {},
            o = null,
            s = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              w.call(t, i) && !S.hasOwnProperty(i) && (a[i] = t[i]);
          var l = arguments.length - 2;
          if (1 === l) a.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (i in (l = e.defaultProps)) void 0 === a[i] && (a[i] = l[i]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: a,
            _owner: _.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function C(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, i, a, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (o = o((l = e))),
              (e = "" === a ? "." + C(l, 0) : a),
              k(o)
                ? ((i = ""),
                  null != e && (i = e.replace(P, "$&/") + "/"),
                  O(o, t, i, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (E(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      i +
                        (!o.key || (l && l.key === o.key)
                          ? ""
                          : ("" + o.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((l = 0), (a = "" === a ? "." : a + ":"), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + C((s = e[u]), u);
              l += O(s, t, i, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += O((s = s.value), t, i, (c = a + C(s, u++)), o);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var I = { current: null },
          D = { transition: null },
          N = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: D,
            ReactCurrentOwner: _,
          };
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = m),
          (t.Fragment = i),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = v({}, e.props),
              a = e.key,
              o = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (s = _.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                w.call(t, u) &&
                  !S.hasOwnProperty(u) &&
                  (i[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              i.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: o,
              props: i,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = M),
          (t.createFactory = function (e) {
            var t = M.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: h,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = D.transition;
            D.transition = {};
            try {
              e();
            } finally {
              D.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return I.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return I.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return I.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return I.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return I.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return I.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return I.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return I.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return I.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (t.useState = function (e) {
            return I.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return I.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return I.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < a(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > a(l, n))
                u < i && 0 > a(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < i && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          f = 1,
          h = null,
          d = 3,
          p = !1,
          v = !1,
          g = !1,
          m = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), x(e), !v))
            if (null !== r(u)) (v = !0), D(w);
            else {
              var t = r(c);
              null !== t && N(k, t.startTime - e);
            }
        }
        function w(e, n) {
          (v = !1), g && ((g = !1), y(E), (E = -1)), (p = !0);
          var a = d;
          try {
            for (
              x(n), h = r(u);
              null !== h && (!(h.expirationTime > n) || (e && !O()));

            ) {
              var o = h.callback;
              if ("function" === typeof o) {
                (h.callback = null), (d = h.priorityLevel);
                var s = o(h.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (h.callback = s)
                    : h === r(u) && i(u),
                  x(n);
              } else i(u);
              h = r(u);
            }
            if (null !== h) var l = !0;
            else {
              var f = r(c);
              null !== f && N(k, f.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (h = null), (d = a), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var _,
          S = !1,
          M = null,
          E = -1,
          P = 5,
          C = -1;
        function O() {
          return !(t.unstable_now() - C < P);
        }
        function T() {
          if (null !== M) {
            var e = t.unstable_now();
            C = e;
            var n = !0;
            try {
              n = M(!0, e);
            } finally {
              n ? _() : ((S = !1), (M = null));
            }
          } else S = !1;
        }
        if ("function" === typeof b)
          _ = function () {
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var L = new MessageChannel(),
            I = L.port2;
          (L.port1.onmessage = T),
            (_ = function () {
              I.postMessage(null);
            });
        } else
          _ = function () {
            m(T, 0);
          };
        function D(e) {
          (M = e), S || ((S = !0), _());
        }
        function N(e, n) {
          E = m(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || p || ((v = !0), D(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return d;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (d) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = d;
            }
            var n = d;
            d = t;
            try {
              return e();
            } finally {
              d = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = d;
            d = e;
            try {
              return t();
            } finally {
              d = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(E), (E = -1)) : (g = !0), N(k, a - o)))
                : ((e.sortIndex = s), n(u, e), v || p || ((v = !0), D(w))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = d;
            return function () {
              var n = d;
              d = t;
              try {
                return e.apply(this, arguments);
              } finally {
                d = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, i) {
        if ((1 & i && (r = this(r)), 8 & i)) return r;
        if ("object" === typeof r && r) {
          if (4 & i && r.__esModule) return r;
          if (16 & i && "function" === typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & i && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach(function (e) {
            o[e] = function () {
              return r[e];
            };
          });
        return (
          (o.default = function () {
            return r;
          }),
          n.d(a, o),
          a
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e = n(791),
        t = n.t(e, 2),
        r = n(250);
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return i(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(e, t)
              : void 0
          );
        }
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                a = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (a.push(r.value), !t || a.length !== t);
                  o = !0
                );
              } catch (l) {
                (s = !0), (i = l);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw i;
                }
              }
              return a;
            }
          })(e, t) ||
          a(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var s = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        l = e.createContext && e.createContext(s),
        u = function () {
          return (
            (u =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            u.apply(this, arguments)
          );
        },
        c = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      function f(t) {
        return (
          t &&
          t.map(function (t, n) {
            return e.createElement(t.tag, u({ key: n }, t.attr), f(t.child));
          })
        );
      }
      function h(t) {
        return function (n) {
          return e.createElement(d, u({ attr: u({}, t.attr) }, n), f(t.child));
        };
      }
      function d(t) {
        var n = function (n) {
          var r,
            i = t.attr,
            a = t.size,
            o = t.title,
            s = c(t, ["attr", "size", "title"]),
            l = a || n.size || "1em";
          return (
            n.className && (r = n.className),
            t.className && (r = (r ? r + " " : "") + t.className),
            e.createElement(
              "svg",
              u(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                i,
                s,
                {
                  className: r,
                  style: u(u({ color: t.color || n.color }, n.style), t.style),
                  height: l,
                  width: l,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && e.createElement("title", null, o),
              t.children
            )
          );
        };
        return void 0 !== l
          ? e.createElement(l.Consumer, null, function (e) {
              return n(e);
            })
          : n(s);
      }
      function p(e) {
        return h({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z",
              },
            },
          ],
        })(e);
      }
      function v(e) {
        return h({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
              },
            },
          ],
        })(e);
      }
      function g(e) {
        return h({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
            {
              tag: "path",
              attr: {
                d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8zM6 13c0-1.65.67-3.15 1.76-4.24L6.34 7.34A8.014 8.014 0 004 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z",
              },
            },
          ],
        })(e);
      }
      function m(e) {
        return h({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" },
            },
          ],
        })(e);
      }
      var y = n(425),
        b = n.n(y);
      function x(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return i(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          a(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function k(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                k(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function S(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function M(e) {
        return (
          (M = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          M(e)
        );
      }
      function E(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = M(e));

        );
        return e;
      }
      function P() {
        return (
          (P =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = E(e, t);
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, t);
                    return i.get
                      ? i.get.call(arguments.length < 3 ? e : n)
                      : i.value;
                  }
                }),
          P.apply(this, arguments)
        );
      }
      function C(e, t) {
        return (
          (C = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          C(e, t)
        );
      }
      function O(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && C(e, t);
      }
      function T() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function L(e) {
        return (
          (L =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          L(e)
        );
      }
      function I(e, t) {
        if (t && ("object" === L(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return S(e);
      }
      function D(e) {
        var t = T();
        return function () {
          var n,
            r = M(e);
          if (t) {
            var i = M(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return I(this, n);
        };
      }
      function N(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = a(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          s = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (l = !0), (o = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function j(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function z(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function R(e, t, n) {
        return (
          t && z(e.prototype, t),
          n && z(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function A() {}
      var F = (function () {
        var e = 0;
        return function () {
          return e++;
        };
      })();
      function B(e) {
        return null === e || "undefined" === typeof e;
      }
      function V(e) {
        if (Array.isArray && Array.isArray(e)) return !0;
        var t = Object.prototype.toString.call(e);
        return "[object" === t.slice(0, 7) && "Array]" === t.slice(-6);
      }
      function W(e) {
        return (
          null !== e && "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      var H = function (e) {
        return ("number" === typeof e || e instanceof Number) && isFinite(+e);
      };
      function U(e, t) {
        return H(e) ? e : t;
      }
      function $(e, t) {
        return "undefined" === typeof e ? t : e;
      }
      var Y = function (e, t) {
        return "string" === typeof e && e.endsWith("%")
          ? (parseFloat(e) / 100) * t
          : +e;
      };
      function Q(e, t, n) {
        if (e && "function" === typeof e.call) return e.apply(n, t);
      }
      function q(e, t, n, r) {
        var i, a, o;
        if (V(e))
          if (((a = e.length), r))
            for (i = a - 1; i >= 0; i--) t.call(n, e[i], i);
          else for (i = 0; i < a; i++) t.call(n, e[i], i);
        else if (W(e))
          for (a = (o = Object.keys(e)).length, i = 0; i < a; i++)
            t.call(n, e[o[i]], o[i]);
      }
      function K(e, t) {
        var n, r, i, a;
        if (!e || !t || e.length !== t.length) return !1;
        for (n = 0, r = e.length; n < r; ++n)
          if (
            ((i = e[n]),
            (a = t[n]),
            i.datasetIndex !== a.datasetIndex || i.index !== a.index)
          )
            return !1;
        return !0;
      }
      function X(e) {
        if (V(e)) return e.map(X);
        if (W(e)) {
          for (
            var t = Object.create(null),
              n = Object.keys(e),
              r = n.length,
              i = 0;
            i < r;
            ++i
          )
            t[n[i]] = X(e[n[i]]);
          return t;
        }
        return e;
      }
      function G(e) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(e);
      }
      function J(e, t, n, r) {
        if (G(e)) {
          var i = t[e],
            a = n[e];
          W(i) && W(a) ? Z(i, a, r) : (t[e] = X(a));
        }
      }
      function Z(e, t, n) {
        var r = V(t) ? t : [t],
          i = r.length;
        if (!W(e)) return e;
        for (var a = (n = n || {}).merger || J, o = 0; o < i; ++o)
          if (W((t = r[o])))
            for (var s = Object.keys(t), l = 0, u = s.length; l < u; ++l)
              a(s[l], e, t, n);
        return e;
      }
      function ee(e, t) {
        return Z(e, t, { merger: te });
      }
      function te(e, t, n) {
        if (G(e)) {
          var r = t[e],
            i = n[e];
          W(r) && W(i)
            ? ee(r, i)
            : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = X(i));
        }
      }
      var ne = {
        "": function (e) {
          return e;
        },
        x: function (e) {
          return e.x;
        },
        y: function (e) {
          return e.y;
        },
      };
      function re(e, t) {
        var n =
          ne[t] ||
          (ne[t] = (function (e) {
            var t = (function (e) {
              var t,
                n = e.split("."),
                r = [],
                i = "",
                a = N(n);
              try {
                for (a.s(); !(t = a.n()).done; ) {
                  (i += t.value).endsWith("\\")
                    ? (i = i.slice(0, -1) + ".")
                    : (r.push(i), (i = ""));
                }
              } catch (o) {
                a.e(o);
              } finally {
                a.f();
              }
              return r;
            })(e);
            return function (e) {
              var n,
                r = N(t);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var i = n.value;
                  if ("" === i) break;
                  e = e && e[i];
                }
              } catch (a) {
                r.e(a);
              } finally {
                r.f();
              }
              return e;
            };
          })(t));
        return n(e);
      }
      function ie(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var ae = function (e) {
          return "undefined" !== typeof e;
        },
        oe = function (e) {
          return "function" === typeof e;
        },
        se = function (e, t) {
          if (e.size !== t.size) return !1;
          var n,
            r = N(e);
          try {
            for (r.s(); !(n = r.n()).done; ) {
              var i = n.value;
              if (!t.has(i)) return !1;
            }
          } catch (a) {
            r.e(a);
          } finally {
            r.f();
          }
          return !0;
        };
      var le = Math.PI,
        ue = 2 * le,
        ce = ue + le,
        fe = Number.POSITIVE_INFINITY,
        he = le / 180,
        de = le / 2,
        pe = le / 4,
        ve = (2 * le) / 3,
        ge = Math.log10,
        me = Math.sign;
      function ye(e) {
        var t = Math.round(e);
        e = xe(e, t, e / 1e3) ? t : e;
        var n = Math.pow(10, Math.floor(ge(e))),
          r = e / n;
        return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
      }
      function be(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      }
      function xe(e, t, n) {
        return Math.abs(e - t) < n;
      }
      function ke(e, t, n) {
        var r, i, a;
        for (r = 0, i = e.length; r < i; r++)
          (a = e[r][n]),
            isNaN(a) ||
              ((t.min = Math.min(t.min, a)), (t.max = Math.max(t.max, a)));
      }
      function we(e) {
        return e * (le / 180);
      }
      function _e(e) {
        return e * (180 / le);
      }
      function Se(e) {
        if (H(e)) {
          for (var t = 1, n = 0; Math.round(e * t) / t !== e; ) (t *= 10), n++;
          return n;
        }
      }
      function Me(e, t) {
        var n = t.x - e.x,
          r = t.y - e.y,
          i = Math.sqrt(n * n + r * r),
          a = Math.atan2(r, n);
        return a < -0.5 * le && (a += ue), { angle: a, distance: i };
      }
      function Ee(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function Pe(e, t) {
        return ((e - t + ce) % ue) - le;
      }
      function Ce(e) {
        return ((e % ue) + ue) % ue;
      }
      function Oe(e, t, n, r) {
        var i = Ce(e),
          a = Ce(t),
          o = Ce(n),
          s = Ce(a - i),
          l = Ce(o - i),
          u = Ce(i - a),
          c = Ce(i - o);
        return i === a || i === o || (r && a === o) || (s > l && u < c);
      }
      function Te(e, t, n) {
        return Math.max(t, Math.min(n, e));
      }
      function Le(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
        return e >= Math.min(t, n) - r && e <= Math.max(t, n) + r;
      }
      function Ie(e, t, n) {
        n =
          n ||
          function (n) {
            return e[n] < t;
          };
        for (var r, i = e.length - 1, a = 0; i - a > 1; )
          n((r = (a + i) >> 1)) ? (a = r) : (i = r);
        return { lo: a, hi: i };
      }
      var De = function (e, t, n, r) {
          return Ie(
            e,
            n,
            r
              ? function (r) {
                  return e[r][t] <= n;
                }
              : function (r) {
                  return e[r][t] < n;
                }
          );
        },
        Ne = function (e, t, n) {
          return Ie(e, n, function (r) {
            return e[r][t] >= n;
          });
        };
      var je = ["push", "pop", "shift", "splice", "unshift"];
      function ze(e, t) {
        var n = e._chartjs;
        if (n) {
          var r = n.listeners,
            i = r.indexOf(t);
          -1 !== i && r.splice(i, 1),
            r.length > 0 ||
              (je.forEach(function (t) {
                delete e[t];
              }),
              delete e._chartjs);
        }
      }
      function Re(e) {
        var t,
          n,
          r = new Set();
        for (t = 0, n = e.length; t < n; ++t) r.add(e[t]);
        return r.size === n ? e : Array.from(r);
      }
      var Ae =
        "undefined" === typeof window
          ? function (e) {
              return e();
            }
          : window.requestAnimationFrame;
      function Fe(e, t, n) {
        var r =
            n ||
            function (e) {
              return Array.prototype.slice.call(e);
            },
          i = !1,
          a = [];
        return function () {
          for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
            o[s] = arguments[s];
          (a = r(o)),
            i ||
              ((i = !0),
              Ae.call(window, function () {
                (i = !1), e.apply(t, a);
              }));
        };
      }
      var Be = function (e) {
          return "start" === e ? "left" : "end" === e ? "right" : "center";
        },
        Ve = function (e, t, n) {
          return "start" === e ? t : "end" === e ? n : (t + n) / 2;
        };
      function We(e, t, n) {
        var r = t.length,
          i = 0,
          a = r;
        if (e._sorted) {
          var o = e.iScale,
            s = e._parsed,
            l = o.axis,
            u = o.getUserBounds(),
            c = u.min,
            f = u.max,
            h = u.minDefined,
            d = u.maxDefined;
          h &&
            (i = Te(
              Math.min(
                De(s, o.axis, c).lo,
                n ? r : De(t, l, o.getPixelForValue(c)).lo
              ),
              0,
              r - 1
            )),
            (a = d
              ? Te(
                  Math.max(
                    De(s, o.axis, f, !0).hi + 1,
                    n ? 0 : De(t, l, o.getPixelForValue(f), !0).hi + 1
                  ),
                  i,
                  r
                ) - i
              : r - i);
        }
        return { start: i, count: a };
      }
      function He(e) {
        var t = e.xScale,
          n = e.yScale,
          r = e._scaleRanges,
          i = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max };
        if (!r) return (e._scaleRanges = i), !0;
        var a =
          r.xmin !== t.min ||
          r.xmax !== t.max ||
          r.ymin !== n.min ||
          r.ymax !== n.max;
        return Object.assign(r, i), a;
      }
      var Ue = function (e) {
          return 0 === e || 1 === e;
        },
        $e = function (e, t, n) {
          return -Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * ue) / n);
        },
        Ye = function (e, t, n) {
          return Math.pow(2, -10 * e) * Math.sin(((e - t) * ue) / n) + 1;
        },
        Qe = {
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return -e * (e - 2);
          },
          easeInOutQuad: function (e) {
            return (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return (e -= 1) * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return (e /= 0.5) < 1
              ? 0.5 * e * e * e
              : 0.5 * ((e -= 2) * e * e + 2);
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return -((e -= 1) * e * e * e - 1);
          },
          easeInOutQuart: function (e) {
            return (e /= 0.5) < 1
              ? 0.5 * e * e * e * e
              : -0.5 * ((e -= 2) * e * e * e - 2);
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return (e -= 1) * e * e * e * e + 1;
          },
          easeInOutQuint: function (e) {
            return (e /= 0.5) < 1
              ? 0.5 * e * e * e * e * e
              : 0.5 * ((e -= 2) * e * e * e * e + 2);
          },
          easeInSine: function (e) {
            return 1 - Math.cos(e * de);
          },
          easeOutSine: function (e) {
            return Math.sin(e * de);
          },
          easeInOutSine: function (e) {
            return -0.5 * (Math.cos(le * e) - 1);
          },
          easeInExpo: function (e) {
            return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
          },
          easeOutExpo: function (e) {
            return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
          },
          easeInOutExpo: function (e) {
            return Ue(e)
              ? e
              : e < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * e - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * e - 1)));
          },
          easeInCirc: function (e) {
            return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1);
          },
          easeOutCirc: function (e) {
            return Math.sqrt(1 - (e -= 1) * e);
          },
          easeInOutCirc: function (e) {
            return (e /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - e * e) - 1)
              : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
          },
          easeInElastic: function (e) {
            return Ue(e) ? e : $e(e, 0.075, 0.3);
          },
          easeOutElastic: function (e) {
            return Ue(e) ? e : Ye(e, 0.075, 0.3);
          },
          easeInOutElastic: function (e) {
            var t = 0.1125;
            return Ue(e)
              ? e
              : e < 0.5
              ? 0.5 * $e(2 * e, t, 0.45)
              : 0.5 + 0.5 * Ye(2 * e - 1, t, 0.45);
          },
          easeInBack: function (e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t);
          },
          easeOutBack: function (e) {
            var t = 1.70158;
            return (e -= 1) * e * ((t + 1) * e + t) + 1;
          },
          easeInOutBack: function (e) {
            var t = 1.70158;
            return (e /= 0.5) < 1
              ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
              : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
          },
          easeInBounce: function (e) {
            return 1 - Qe.easeOutBounce(1 - e);
          },
          easeOutBounce: function (e) {
            var t = 7.5625,
              n = 2.75;
            return e < 1 / n
              ? t * e * e
              : e < 2 / n
              ? t * (e -= 1.5 / n) * e + 0.75
              : e < 2.5 / n
              ? t * (e -= 2.25 / n) * e + 0.9375
              : t * (e -= 2.625 / n) * e + 0.984375;
          },
          easeInOutBounce: function (e) {
            return e < 0.5
              ? 0.5 * Qe.easeInBounce(2 * e)
              : 0.5 * Qe.easeOutBounce(2 * e - 1) + 0.5;
          },
        };
      function qe(e) {
        return (e + 0.5) | 0;
      }
      var Ke = function (e, t, n) {
        return Math.max(Math.min(e, n), t);
      };
      function Xe(e) {
        return Ke(qe(2.55 * e), 0, 255);
      }
      function Ge(e) {
        return Ke(qe(255 * e), 0, 255);
      }
      function Je(e) {
        return Ke(qe(e / 2.55) / 100, 0, 1);
      }
      function Ze(e) {
        return Ke(qe(100 * e), 0, 100);
      }
      var et = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        tt = x("0123456789ABCDEF"),
        nt = function (e) {
          return tt[15 & e];
        },
        rt = function (e) {
          return tt[(240 & e) >> 4] + tt[15 & e];
        },
        it = function (e) {
          return (240 & e) >> 4 === (15 & e);
        };
      function at(e) {
        var t = (function (e) {
          return it(e.r) && it(e.g) && it(e.b) && it(e.a);
        })(e)
          ? nt
          : rt;
        return e
          ? "#" +
              t(e.r) +
              t(e.g) +
              t(e.b) +
              (function (e, t) {
                return e < 255 ? t(e) : "";
              })(e.a, t)
          : void 0;
      }
      var ot =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function st(e, t, n) {
        var r = t * Math.min(n, 1 - n),
          i = function (t) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (t + e / 30) % 12;
            return n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
          };
        return [i(0), i(8), i(4)];
      }
      function lt(e, t, n) {
        var r = function (r) {
          var i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (r + e / 60) % 6;
          return n - n * t * Math.max(Math.min(i, 4 - i, 1), 0);
        };
        return [r(5), r(3), r(1)];
      }
      function ut(e, t, n) {
        var r,
          i = st(e, 1, 0.5);
        for (t + n > 1 && ((t *= r = 1 / (t + n)), (n *= r)), r = 0; r < 3; r++)
          (i[r] *= 1 - t - n), (i[r] += t);
        return i;
      }
      function ct(e) {
        var t,
          n,
          r,
          i = e.r / 255,
          a = e.g / 255,
          o = e.b / 255,
          s = Math.max(i, a, o),
          l = Math.min(i, a, o),
          u = (s + l) / 2;
        return (
          s !== l &&
            ((r = s - l),
            (n = u > 0.5 ? r / (2 - s - l) : r / (s + l)),
            (t = (function (e, t, n, r, i) {
              return e === i
                ? (t - n) / r + (t < n ? 6 : 0)
                : t === i
                ? (n - e) / r + 2
                : (e - t) / r + 4;
            })(i, a, o, r, s)),
            (t = 60 * t + 0.5)),
          [0 | t, n || 0, u]
        );
      }
      function ft(e, t, n, r) {
        return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(Ge);
      }
      function ht(e, t, n) {
        return ft(st, e, t, n);
      }
      function dt(e) {
        return ((e % 360) + 360) % 360;
      }
      function pt(e) {
        var t,
          n = ot.exec(e),
          r = 255;
        if (n) {
          n[5] !== t && (r = n[6] ? Xe(+n[5]) : Ge(+n[5]));
          var i = dt(+n[2]),
            a = +n[3] / 100,
            o = +n[4] / 100;
          return {
            r: (t =
              "hwb" === n[1]
                ? (function (e, t, n) {
                    return ft(ut, e, t, n);
                  })(i, a, o)
                : "hsv" === n[1]
                ? (function (e, t, n) {
                    return ft(lt, e, t, n);
                  })(i, a, o)
                : ht(i, a, o))[0],
            g: t[1],
            b: t[2],
            a: r,
          };
        }
      }
      var vt,
        gt = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        mt = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        };
      function yt(e) {
        vt ||
          ((vt = (function () {
            var e,
              t,
              n,
              r,
              i,
              a = {},
              o = Object.keys(mt),
              s = Object.keys(gt);
            for (e = 0; e < o.length; e++) {
              for (r = i = o[e], t = 0; t < s.length; t++)
                (n = s[t]), (i = i.replace(n, gt[n]));
              (n = parseInt(mt[r], 16)),
                (a[i] = [(n >> 16) & 255, (n >> 8) & 255, 255 & n]);
            }
            return a;
          })()).transparent = [0, 0, 0, 0]);
        var t = vt[e.toLowerCase()];
        return (
          t && { r: t[0], g: t[1], b: t[2], a: 4 === t.length ? t[3] : 255 }
        );
      }
      var bt =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
      var xt = function (e) {
          return e <= 0.0031308
            ? 12.92 * e
            : 1.055 * Math.pow(e, 1 / 2.4) - 0.055;
        },
        kt = function (e) {
          return e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
        };
      function wt(e, t, n) {
        if (e) {
          var r = ct(e);
          (r[t] = Math.max(0, Math.min(r[t] + r[t] * n, 0 === t ? 360 : 1))),
            (r = ht(r)),
            (e.r = r[0]),
            (e.g = r[1]),
            (e.b = r[2]);
        }
      }
      function _t(e, t) {
        return e ? Object.assign(t || {}, e) : e;
      }
      function St(e) {
        var t = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(e)
            ? e.length >= 3 &&
              ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
              e.length > 3 && (t.a = Ge(e[3])))
            : ((t = _t(e, { r: 0, g: 0, b: 0, a: 1 })).a = Ge(t.a)),
          t
        );
      }
      function Mt(e) {
        return "r" === e.charAt(0)
          ? (function (e) {
              var t,
                n,
                r,
                i = bt.exec(e),
                a = 255;
              if (i) {
                if (i[7] !== t) {
                  var o = +i[7];
                  a = i[8] ? Xe(o) : Ke(255 * o, 0, 255);
                }
                return (
                  (t = +i[1]),
                  (n = +i[3]),
                  (r = +i[5]),
                  {
                    r: (t = 255 & (i[2] ? Xe(t) : Ke(t, 0, 255))),
                    g: (n = 255 & (i[4] ? Xe(n) : Ke(n, 0, 255))),
                    b: (r = 255 & (i[6] ? Xe(r) : Ke(r, 0, 255))),
                    a: a,
                  }
                );
              }
            })(e)
          : pt(e);
      }
      var Et = (function () {
        function e(t) {
          if ((j(this, e), t instanceof e)) return t;
          var n,
            r = typeof t;
          "object" === r
            ? (n = St(t))
            : "string" === r &&
              (n =
                (function (e) {
                  var t,
                    n = e.length;
                  return (
                    "#" === e[0] &&
                      (4 === n || 5 === n
                        ? (t = {
                            r: 255 & (17 * et[e[1]]),
                            g: 255 & (17 * et[e[2]]),
                            b: 255 & (17 * et[e[3]]),
                            a: 5 === n ? 17 * et[e[4]] : 255,
                          })
                        : (7 !== n && 9 !== n) ||
                          (t = {
                            r: (et[e[1]] << 4) | et[e[2]],
                            g: (et[e[3]] << 4) | et[e[4]],
                            b: (et[e[5]] << 4) | et[e[6]],
                            a: 9 === n ? (et[e[7]] << 4) | et[e[8]] : 255,
                          })),
                    t
                  );
                })(t) ||
                yt(t) ||
                Mt(t)),
            (this._rgb = n),
            (this._valid = !!n);
        }
        return (
          R(e, [
            {
              key: "valid",
              get: function () {
                return this._valid;
              },
            },
            {
              key: "rgb",
              get: function () {
                var e = _t(this._rgb);
                return e && (e.a = Je(e.a)), e;
              },
              set: function (e) {
                this._rgb = St(e);
              },
            },
            {
              key: "rgbString",
              value: function () {
                return this._valid
                  ? (e = this._rgb) &&
                      (e.a < 255
                        ? "rgba("
                            .concat(e.r, ", ")
                            .concat(e.g, ", ")
                            .concat(e.b, ", ")
                            .concat(Je(e.a), ")")
                        : "rgb("
                            .concat(e.r, ", ")
                            .concat(e.g, ", ")
                            .concat(e.b, ")"))
                  : void 0;
                var e;
              },
            },
            {
              key: "hexString",
              value: function () {
                return this._valid ? at(this._rgb) : void 0;
              },
            },
            {
              key: "hslString",
              value: function () {
                return this._valid
                  ? (function (e) {
                      if (e) {
                        var t = ct(e),
                          n = t[0],
                          r = Ze(t[1]),
                          i = Ze(t[2]);
                        return e.a < 255
                          ? "hsla("
                              .concat(n, ", ")
                              .concat(r, "%, ")
                              .concat(i, "%, ")
                              .concat(Je(e.a), ")")
                          : "hsl("
                              .concat(n, ", ")
                              .concat(r, "%, ")
                              .concat(i, "%)");
                      }
                    })(this._rgb)
                  : void 0;
              },
            },
            {
              key: "mix",
              value: function (e, t) {
                if (e) {
                  var n,
                    r = this.rgb,
                    i = e.rgb,
                    a = t === n ? 0.5 : t,
                    o = 2 * a - 1,
                    s = r.a - i.a,
                    l = ((o * s === -1 ? o : (o + s) / (1 + o * s)) + 1) / 2;
                  (n = 1 - l),
                    (r.r = 255 & (l * r.r + n * i.r + 0.5)),
                    (r.g = 255 & (l * r.g + n * i.g + 0.5)),
                    (r.b = 255 & (l * r.b + n * i.b + 0.5)),
                    (r.a = a * r.a + (1 - a) * i.a),
                    (this.rgb = r);
                }
                return this;
              },
            },
            {
              key: "interpolate",
              value: function (e, t) {
                return (
                  e &&
                    (this._rgb = (function (e, t, n) {
                      var r = kt(Je(e.r)),
                        i = kt(Je(e.g)),
                        a = kt(Je(e.b));
                      return {
                        r: Ge(xt(r + n * (kt(Je(t.r)) - r))),
                        g: Ge(xt(i + n * (kt(Je(t.g)) - i))),
                        b: Ge(xt(a + n * (kt(Je(t.b)) - a))),
                        a: e.a + n * (t.a - e.a),
                      };
                    })(this._rgb, e._rgb, t)),
                  this
                );
              },
            },
            {
              key: "clone",
              value: function () {
                return new e(this.rgb);
              },
            },
            {
              key: "alpha",
              value: function (e) {
                return (this._rgb.a = Ge(e)), this;
              },
            },
            {
              key: "clearer",
              value: function (e) {
                return (this._rgb.a *= 1 - e), this;
              },
            },
            {
              key: "greyscale",
              value: function () {
                var e = this._rgb,
                  t = qe(0.3 * e.r + 0.59 * e.g + 0.11 * e.b);
                return (e.r = e.g = e.b = t), this;
              },
            },
            {
              key: "opaquer",
              value: function (e) {
                return (this._rgb.a *= 1 + e), this;
              },
            },
            {
              key: "negate",
              value: function () {
                var e = this._rgb;
                return (
                  (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this
                );
              },
            },
            {
              key: "lighten",
              value: function (e) {
                return wt(this._rgb, 2, e), this;
              },
            },
            {
              key: "darken",
              value: function (e) {
                return wt(this._rgb, 2, -e), this;
              },
            },
            {
              key: "saturate",
              value: function (e) {
                return wt(this._rgb, 1, e), this;
              },
            },
            {
              key: "desaturate",
              value: function (e) {
                return wt(this._rgb, 1, -e), this;
              },
            },
            {
              key: "rotate",
              value: function (e) {
                return (
                  (function (e, t) {
                    var n = ct(e);
                    (n[0] = dt(n[0] + t)),
                      (n = ht(n)),
                      (e.r = n[0]),
                      (e.g = n[1]),
                      (e.b = n[2]);
                  })(this._rgb, e),
                  this
                );
              },
            },
          ]),
          e
        );
      })();
      function Pt(e) {
        return new Et(e);
      }
      function Ct(e) {
        if (e && "object" === typeof e) {
          var t = e.toString();
          return (
            "[object CanvasPattern]" === t || "[object CanvasGradient]" === t
          );
        }
        return !1;
      }
      function Ot(e) {
        return Ct(e) ? e : Pt(e);
      }
      function Tt(e) {
        return Ct(e) ? e : Pt(e).saturate(0.5).darken(0.1).hexString();
      }
      var Lt = Object.create(null),
        It = Object.create(null);
      function Dt(e, t) {
        if (!t) return e;
        for (var n = t.split("."), r = 0, i = n.length; r < i; ++r) {
          var a = n[r];
          e = e[a] || (e[a] = Object.create(null));
        }
        return e;
      }
      function Nt(e, t, n) {
        return "string" === typeof t ? Z(Dt(e, t), n) : Z(Dt(e, ""), t);
      }
      var jt = (function () {
          function e(t) {
            j(this, e),
              (this.animation = void 0),
              (this.backgroundColor = "rgba(0,0,0,0.1)"),
              (this.borderColor = "rgba(0,0,0,0.1)"),
              (this.color = "#666"),
              (this.datasets = {}),
              (this.devicePixelRatio = function (e) {
                return e.chart.platform.getDevicePixelRatio();
              }),
              (this.elements = {}),
              (this.events = [
                "mousemove",
                "mouseout",
                "click",
                "touchstart",
                "touchmove",
              ]),
              (this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null,
              }),
              (this.hover = {}),
              (this.hoverBackgroundColor = function (e, t) {
                return Tt(t.backgroundColor);
              }),
              (this.hoverBorderColor = function (e, t) {
                return Tt(t.borderColor);
              }),
              (this.hoverColor = function (e, t) {
                return Tt(t.color);
              }),
              (this.indexAxis = "x"),
              (this.interaction = {
                mode: "nearest",
                intersect: !0,
                includeInvisible: !1,
              }),
              (this.maintainAspectRatio = !0),
              (this.onHover = null),
              (this.onClick = null),
              (this.parsing = !0),
              (this.plugins = {}),
              (this.responsive = !0),
              (this.scale = void 0),
              (this.scales = {}),
              (this.showLine = !0),
              (this.drawActiveElementsOnTop = !0),
              this.describe(t);
          }
          return (
            R(e, [
              {
                key: "set",
                value: function (e, t) {
                  return Nt(this, e, t);
                },
              },
              {
                key: "get",
                value: function (e) {
                  return Dt(this, e);
                },
              },
              {
                key: "describe",
                value: function (e, t) {
                  return Nt(It, e, t);
                },
              },
              {
                key: "override",
                value: function (e, t) {
                  return Nt(Lt, e, t);
                },
              },
              {
                key: "route",
                value: function (e, t, n, r) {
                  var i,
                    a = Dt(this, e),
                    o = Dt(this, n),
                    s = "_" + t;
                  Object.defineProperties(
                    a,
                    (k((i = {}), s, { value: a[t], writable: !0 }),
                    k(i, t, {
                      enumerable: !0,
                      get: function () {
                        var e = this[s],
                          t = o[r];
                        return W(e) ? Object.assign({}, t, e) : $(e, t);
                      },
                      set: function (e) {
                        this[s] = e;
                      },
                    }),
                    i)
                  );
                },
              },
            ]),
            e
          );
        })(),
        zt = new jt({
          _scriptable: function (e) {
            return !e.startsWith("on");
          },
          _indexable: function (e) {
            return "events" !== e;
          },
          hover: { _fallback: "interaction" },
          interaction: { _scriptable: !1, _indexable: !1 },
        });
      function Rt(e, t, n, r, i) {
        var a = t[i];
        return (
          a || ((a = t[i] = e.measureText(i).width), n.push(i)),
          a > r && (r = a),
          r
        );
      }
      function At(e, t, n, r) {
        var i = ((r = r || {}).data = r.data || {}),
          a = (r.garbageCollect = r.garbageCollect || []);
        r.font !== t &&
          ((i = r.data = {}), (a = r.garbageCollect = []), (r.font = t)),
          e.save(),
          (e.font = t);
        var o,
          s,
          l,
          u,
          c,
          f = 0,
          h = n.length;
        for (o = 0; o < h; o++)
          if (void 0 !== (u = n[o]) && null !== u && !0 !== V(u))
            f = Rt(e, i, a, f, u);
          else if (V(u))
            for (s = 0, l = u.length; s < l; s++)
              void 0 === (c = u[s]) ||
                null === c ||
                V(c) ||
                (f = Rt(e, i, a, f, c));
        e.restore();
        var d = a.length / 2;
        if (d > n.length) {
          for (o = 0; o < d; o++) delete i[a[o]];
          a.splice(0, d);
        }
        return f;
      }
      function Ft(e, t, n) {
        var r = e.currentDevicePixelRatio,
          i = 0 !== n ? Math.max(n / 2, 0.5) : 0;
        return Math.round((t - i) * r) / r + i;
      }
      function Bt(e, t) {
        (t = t || e.getContext("2d")).save(),
          t.resetTransform(),
          t.clearRect(0, 0, e.width, e.height),
          t.restore();
      }
      function Vt(e, t, n, r) {
        Wt(e, t, n, r, null);
      }
      function Wt(e, t, n, r, i) {
        var a,
          o,
          s,
          l,
          u,
          c,
          f = t.pointStyle,
          h = t.rotation,
          d = t.radius,
          p = (h || 0) * he;
        if (
          f &&
          "object" === typeof f &&
          ("[object HTMLImageElement]" === (a = f.toString()) ||
            "[object HTMLCanvasElement]" === a)
        )
          return (
            e.save(),
            e.translate(n, r),
            e.rotate(p),
            e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
            void e.restore()
          );
        if (!(isNaN(d) || d <= 0)) {
          switch ((e.beginPath(), f)) {
            default:
              i ? e.ellipse(n, r, i / 2, d, 0, 0, ue) : e.arc(n, r, d, 0, ue),
                e.closePath();
              break;
            case "triangle":
              e.moveTo(n + Math.sin(p) * d, r - Math.cos(p) * d),
                (p += ve),
                e.lineTo(n + Math.sin(p) * d, r - Math.cos(p) * d),
                (p += ve),
                e.lineTo(n + Math.sin(p) * d, r - Math.cos(p) * d),
                e.closePath();
              break;
            case "rectRounded":
              (l = d - (u = 0.516 * d)),
                (o = Math.cos(p + pe) * l),
                (s = Math.sin(p + pe) * l),
                e.arc(n - o, r - s, u, p - le, p - de),
                e.arc(n + s, r - o, u, p - de, p),
                e.arc(n + o, r + s, u, p, p + de),
                e.arc(n - s, r + o, u, p + de, p + le),
                e.closePath();
              break;
            case "rect":
              if (!h) {
                (l = Math.SQRT1_2 * d),
                  (c = i ? i / 2 : l),
                  e.rect(n - c, r - l, 2 * c, 2 * l);
                break;
              }
              p += pe;
            case "rectRot":
              (o = Math.cos(p) * d),
                (s = Math.sin(p) * d),
                e.moveTo(n - o, r - s),
                e.lineTo(n + s, r - o),
                e.lineTo(n + o, r + s),
                e.lineTo(n - s, r + o),
                e.closePath();
              break;
            case "crossRot":
              p += pe;
            case "cross":
              (o = Math.cos(p) * d),
                (s = Math.sin(p) * d),
                e.moveTo(n - o, r - s),
                e.lineTo(n + o, r + s),
                e.moveTo(n + s, r - o),
                e.lineTo(n - s, r + o);
              break;
            case "star":
              (o = Math.cos(p) * d),
                (s = Math.sin(p) * d),
                e.moveTo(n - o, r - s),
                e.lineTo(n + o, r + s),
                e.moveTo(n + s, r - o),
                e.lineTo(n - s, r + o),
                (p += pe),
                (o = Math.cos(p) * d),
                (s = Math.sin(p) * d),
                e.moveTo(n - o, r - s),
                e.lineTo(n + o, r + s),
                e.moveTo(n + s, r - o),
                e.lineTo(n - s, r + o);
              break;
            case "line":
              (o = i ? i / 2 : Math.cos(p) * d),
                (s = Math.sin(p) * d),
                e.moveTo(n - o, r - s),
                e.lineTo(n + o, r + s);
              break;
            case "dash":
              e.moveTo(n, r),
                e.lineTo(n + Math.cos(p) * d, r + Math.sin(p) * d);
          }
          e.fill(), t.borderWidth > 0 && e.stroke();
        }
      }
      function Ht(e, t, n) {
        return (
          (n = n || 0.5),
          !t ||
            (e &&
              e.x > t.left - n &&
              e.x < t.right + n &&
              e.y > t.top - n &&
              e.y < t.bottom + n)
        );
      }
      function Ut(e, t) {
        e.save(),
          e.beginPath(),
          e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
          e.clip();
      }
      function $t(e) {
        e.restore();
      }
      function Yt(e, t, n, r, i) {
        if (!t) return e.lineTo(n.x, n.y);
        if ("middle" === i) {
          var a = (t.x + n.x) / 2;
          e.lineTo(a, t.y), e.lineTo(a, n.y);
        } else
          ("after" === i) !== !!r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
        e.lineTo(n.x, n.y);
      }
      function Qt(e, t, n, r) {
        if (!t) return e.lineTo(n.x, n.y);
        e.bezierCurveTo(
          r ? t.cp1x : t.cp2x,
          r ? t.cp1y : t.cp2y,
          r ? n.cp2x : n.cp1x,
          r ? n.cp2y : n.cp1y,
          n.x,
          n.y
        );
      }
      function qt(e, t, n, r, i) {
        var a,
          o,
          s =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          l = V(t) ? t : [t],
          u = s.strokeWidth > 0 && "" !== s.strokeColor;
        for (e.save(), e.font = i.string, Kt(e, s), a = 0; a < l.length; ++a)
          (o = l[a]),
            u &&
              (s.strokeColor && (e.strokeStyle = s.strokeColor),
              B(s.strokeWidth) || (e.lineWidth = s.strokeWidth),
              e.strokeText(o, n, r, s.maxWidth)),
            e.fillText(o, n, r, s.maxWidth),
            Xt(e, n, r, o, s),
            (r += i.lineHeight);
        e.restore();
      }
      function Kt(e, t) {
        t.translation && e.translate(t.translation[0], t.translation[1]),
          B(t.rotation) || e.rotate(t.rotation),
          t.color && (e.fillStyle = t.color),
          t.textAlign && (e.textAlign = t.textAlign),
          t.textBaseline && (e.textBaseline = t.textBaseline);
      }
      function Xt(e, t, n, r, i) {
        if (i.strikethrough || i.underline) {
          var a = e.measureText(r),
            o = t - a.actualBoundingBoxLeft,
            s = t + a.actualBoundingBoxRight,
            l = n - a.actualBoundingBoxAscent,
            u = n + a.actualBoundingBoxDescent,
            c = i.strikethrough ? (l + u) / 2 : u;
          (e.strokeStyle = e.fillStyle),
            e.beginPath(),
            (e.lineWidth = i.decorationWidth || 2),
            e.moveTo(o, c),
            e.lineTo(s, c),
            e.stroke();
        }
      }
      function Gt(e, t) {
        var n = t.x,
          r = t.y,
          i = t.w,
          a = t.h,
          o = t.radius;
        e.arc(n + o.topLeft, r + o.topLeft, o.topLeft, -de, le, !0),
          e.lineTo(n, r + a - o.bottomLeft),
          e.arc(
            n + o.bottomLeft,
            r + a - o.bottomLeft,
            o.bottomLeft,
            le,
            de,
            !0
          ),
          e.lineTo(n + i - o.bottomRight, r + a),
          e.arc(
            n + i - o.bottomRight,
            r + a - o.bottomRight,
            o.bottomRight,
            de,
            0,
            !0
          ),
          e.lineTo(n + i, r + o.topRight),
          e.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -de, !0),
          e.lineTo(n + o.topLeft, r);
      }
      var Jt = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        Zt = new RegExp(
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
        );
      function en(e, t) {
        var n = ("" + e).match(Jt);
        if (!n || "normal" === n[1]) return 1.2 * t;
        switch (((e = +n[2]), n[3])) {
          case "px":
            return e;
          case "%":
            e /= 100;
        }
        return t * e;
      }
      function tn(e, t) {
        var n,
          r = {},
          i = W(t),
          a = i ? Object.keys(t) : t,
          o = W(e)
            ? i
              ? function (n) {
                  return $(e[n], e[t[n]]);
                }
              : function (t) {
                  return e[t];
                }
            : function () {
                return e;
              },
          s = N(a);
        try {
          for (s.s(); !(n = s.n()).done; ) {
            var l = n.value;
            r[l] = +o(l) || 0;
          }
        } catch (u) {
          s.e(u);
        } finally {
          s.f();
        }
        return r;
      }
      function nn(e) {
        return tn(e, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function rn(e) {
        return tn(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function an(e) {
        var t = nn(e);
        return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
      }
      function on(e, t) {
        (e = e || {}), (t = t || zt.font);
        var n = $(e.size, t.size);
        "string" === typeof n && (n = parseInt(n, 10));
        var r = $(e.style, t.style);
        r &&
          !("" + r).match(Zt) &&
          (console.warn('Invalid font style specified: "' + r + '"'), (r = ""));
        var i = {
          family: $(e.family, t.family),
          lineHeight: en($(e.lineHeight, t.lineHeight), n),
          size: n,
          style: r,
          weight: $(e.weight, t.weight),
          string: "",
        };
        return (
          (i.string = (function (e) {
            return !e || B(e.size) || B(e.family)
              ? null
              : (e.style ? e.style + " " : "") +
                  (e.weight ? e.weight + " " : "") +
                  e.size +
                  "px " +
                  e.family;
          })(i)),
          i
        );
      }
      function sn(e, t, n, r) {
        var i,
          a,
          o,
          s = !0;
        for (i = 0, a = e.length; i < a; ++i)
          if (
            void 0 !== (o = e[i]) &&
            (void 0 !== t && "function" === typeof o && ((o = o(t)), (s = !1)),
            void 0 !== n && V(o) && ((o = o[n % o.length]), (s = !1)),
            void 0 !== o)
          )
            return r && !s && (r.cacheable = !1), o;
      }
      function ln(e, t) {
        return Object.assign(Object.create(e), t);
      }
      function un(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [""],
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
          i = arguments.length > 3 ? arguments[3] : void 0,
          a =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : function () {
                  return e[0];
                };
        ae(i) || (i = kn("_fallback", e));
        var o =
          (k((t = {}), Symbol.toStringTag, "Object"),
          k(t, "_cacheable", !0),
          k(t, "_scopes", e),
          k(t, "_rootScopes", r),
          k(t, "_fallback", i),
          k(t, "_getTarget", a),
          k(t, "override", function (t) {
            return un([t].concat(x(e)), n, r, i);
          }),
          t);
        return new Proxy(o, {
          deleteProperty: function (t, n) {
            return delete t[n], delete t._keys, delete e[0][n], !0;
          },
          get: function (t, r) {
            return pn(t, r, function () {
              return xn(r, n, e, t);
            });
          },
          getOwnPropertyDescriptor: function (e, t) {
            return Reflect.getOwnPropertyDescriptor(e._scopes[0], t);
          },
          getPrototypeOf: function () {
            return Reflect.getPrototypeOf(e[0]);
          },
          has: function (e, t) {
            return wn(e).includes(t);
          },
          ownKeys: function (e) {
            return wn(e);
          },
          set: function (e, t, n) {
            var r = e._storage || (e._storage = a());
            return (e[t] = r[t] = n), delete e._keys, !0;
          },
        });
      }
      function cn(e, t, n, r) {
        var i = {
          _cacheable: !1,
          _proxy: e,
          _context: t,
          _subProxy: n,
          _stack: new Set(),
          _descriptors: fn(e, r),
          setContext: function (t) {
            return cn(e, t, n, r);
          },
          override: function (i) {
            return cn(e.override(i), t, n, r);
          },
        };
        return new Proxy(i, {
          deleteProperty: function (t, n) {
            return delete t[n], delete e[n], !0;
          },
          get: function (e, t, n) {
            return pn(e, t, function () {
              return (function (e, t, n) {
                var r = e._proxy,
                  i = e._context,
                  a = e._subProxy,
                  o = e._descriptors,
                  s = r[t];
                oe(s) &&
                  o.isScriptable(t) &&
                  (s = (function (e, t, n, r) {
                    var i = n._proxy,
                      a = n._context,
                      o = n._subProxy,
                      s = n._stack;
                    if (s.has(e))
                      throw new Error(
                        "Recursion detected: " +
                          Array.from(s).join("->") +
                          "->" +
                          e
                      );
                    s.add(e),
                      (t = t(a, o || r)),
                      s.delete(e),
                      dn(e, t) && (t = yn(i._scopes, i, e, t));
                    return t;
                  })(t, s, e, n));
                V(s) &&
                  s.length &&
                  (s = (function (e, t, n, r) {
                    var i = n._proxy,
                      a = n._context,
                      o = n._subProxy,
                      s = n._descriptors;
                    if (ae(a.index) && r(e)) t = t[a.index % t.length];
                    else if (W(t[0])) {
                      var l = t,
                        u = i._scopes.filter(function (e) {
                          return e !== l;
                        });
                      t = [];
                      var c,
                        f = N(l);
                      try {
                        for (f.s(); !(c = f.n()).done; ) {
                          var h = yn(u, i, e, c.value);
                          t.push(cn(h, a, o && o[e], s));
                        }
                      } catch (d) {
                        f.e(d);
                      } finally {
                        f.f();
                      }
                    }
                    return t;
                  })(t, s, e, o.isIndexable));
                dn(t, s) && (s = cn(s, i, a && a[t], o));
                return s;
              })(e, t, n);
            });
          },
          getOwnPropertyDescriptor: function (t, n) {
            return t._descriptors.allKeys
              ? Reflect.has(e, n)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(e, n);
          },
          getPrototypeOf: function () {
            return Reflect.getPrototypeOf(e);
          },
          has: function (t, n) {
            return Reflect.has(e, n);
          },
          ownKeys: function () {
            return Reflect.ownKeys(e);
          },
          set: function (t, n, r) {
            return (e[n] = r), delete t[n], !0;
          },
        });
      }
      function fn(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { scriptable: !0, indexable: !0 },
          n = e._scriptable,
          r = void 0 === n ? t.scriptable : n,
          i = e._indexable,
          a = void 0 === i ? t.indexable : i,
          o = e._allKeys,
          s = void 0 === o ? t.allKeys : o;
        return {
          allKeys: s,
          scriptable: r,
          indexable: a,
          isScriptable: oe(r)
            ? r
            : function () {
                return r;
              },
          isIndexable: oe(a)
            ? a
            : function () {
                return a;
              },
        };
      }
      var hn = function (e, t) {
          return e ? e + ie(t) : t;
        },
        dn = function (e, t) {
          return (
            W(t) &&
            "adapters" !== e &&
            (null === Object.getPrototypeOf(t) || t.constructor === Object)
          );
        };
      function pn(e, t, n) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
        var r = n();
        return (e[t] = r), r;
      }
      function vn(e, t, n) {
        return oe(e) ? e(t, n) : e;
      }
      var gn = function (e, t) {
        return !0 === e ? t : "string" === typeof e ? re(t, e) : void 0;
      };
      function mn(e, t, n, r, i) {
        var a,
          o = N(t);
        try {
          for (o.s(); !(a = o.n()).done; ) {
            var s = a.value,
              l = gn(n, s);
            if (l) {
              e.add(l);
              var u = vn(l._fallback, n, i);
              if (ae(u) && u !== n && u !== r) return u;
            } else if (!1 === l && ae(r) && n !== r) return null;
          }
        } catch (c) {
          o.e(c);
        } finally {
          o.f();
        }
        return !1;
      }
      function yn(e, t, n, r) {
        var i = t._rootScopes,
          a = vn(t._fallback, n, r),
          o = [].concat(x(e), x(i)),
          s = new Set();
        s.add(r);
        var l = bn(s, o, n, a || n, r);
        return (
          null !== l &&
          (!ae(a) || a === n || null !== (l = bn(s, o, a, l, r))) &&
          un(Array.from(s), [""], i, a, function () {
            return (function (e, t, n) {
              var r = e._getTarget();
              t in r || (r[t] = {});
              var i = r[t];
              if (V(i) && W(n)) return n;
              return i;
            })(t, n, r);
          })
        );
      }
      function bn(e, t, n, r, i) {
        for (; n; ) n = mn(e, t, n, r, i);
        return n;
      }
      function xn(e, t, n, r) {
        var i,
          a,
          o = N(t);
        try {
          for (o.s(); !(a = o.n()).done; ) {
            var s = a.value;
            if (((i = kn(hn(s, e), n)), ae(i)))
              return dn(e, i) ? yn(n, r, e, i) : i;
          }
        } catch (l) {
          o.e(l);
        } finally {
          o.f();
        }
      }
      function kn(e, t) {
        var n,
          r = N(t);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            if (i) {
              var a = i[e];
              if (ae(a)) return a;
            }
          }
        } catch (o) {
          r.e(o);
        } finally {
          r.f();
        }
      }
      function wn(e) {
        var t = e._keys;
        return (
          t ||
            (t = e._keys =
              (function (e) {
                var t,
                  n = new Set(),
                  r = N(e);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var i,
                      a = t.value,
                      o = N(
                        Object.keys(a).filter(function (e) {
                          return !e.startsWith("_");
                        })
                      );
                    try {
                      for (o.s(); !(i = o.n()).done; ) {
                        var s = i.value;
                        n.add(s);
                      }
                    } catch (l) {
                      o.e(l);
                    } finally {
                      o.f();
                    }
                  }
                } catch (l) {
                  r.e(l);
                } finally {
                  r.f();
                }
                return Array.from(n);
              })(e._scopes)),
          t
        );
      }
      function _n(e, t, n, r) {
        var i,
          a,
          o,
          s,
          l = e.iScale,
          u = this._parsing.key,
          c = void 0 === u ? "r" : u,
          f = new Array(r);
        for (i = 0, a = r; i < a; ++i)
          (s = t[(o = i + n)]), (f[i] = { r: l.parse(re(s, c), o) });
        return f;
      }
      var Sn = Number.EPSILON || 1e-14,
        Mn = function (e, t) {
          return t < e.length && !e[t].skip && e[t];
        },
        En = function (e) {
          return "x" === e ? "y" : "x";
        };
      function Pn(e, t, n, r) {
        var i = e.skip ? t : e,
          a = t,
          o = n.skip ? t : n,
          s = Ee(a, i),
          l = Ee(o, a),
          u = s / (s + l),
          c = l / (s + l),
          f = r * (u = isNaN(u) ? 0 : u),
          h = r * (c = isNaN(c) ? 0 : c);
        return {
          previous: { x: a.x - f * (o.x - i.x), y: a.y - f * (o.y - i.y) },
          next: { x: a.x + h * (o.x - i.x), y: a.y + h * (o.y - i.y) },
        };
      }
      function Cn(e, t, n) {
        for (
          var r, i, a, o, s, l = e.length, u = Mn(e, 0), c = 0;
          c < l - 1;
          ++c
        )
          (s = u),
            (u = Mn(e, c + 1)),
            s &&
              u &&
              (xe(t[c], 0, Sn)
                ? (n[c] = n[c + 1] = 0)
                : ((r = n[c] / t[c]),
                  (i = n[c + 1] / t[c]),
                  (o = Math.pow(r, 2) + Math.pow(i, 2)) <= 9 ||
                    ((a = 3 / Math.sqrt(o)),
                    (n[c] = r * a * t[c]),
                    (n[c + 1] = i * a * t[c]))));
      }
      function On(e, t) {
        for (
          var n,
            r,
            i,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "x",
            o = En(a),
            s = e.length,
            l = Mn(e, 0),
            u = 0;
          u < s;
          ++u
        )
          if (((r = i), (i = l), (l = Mn(e, u + 1)), i)) {
            var c = i[a],
              f = i[o];
            r &&
              ((n = (c - r[a]) / 3),
              (i["cp1".concat(a)] = c - n),
              (i["cp1".concat(o)] = f - n * t[u])),
              l &&
                ((n = (l[a] - c) / 3),
                (i["cp2".concat(a)] = c + n),
                (i["cp2".concat(o)] = f + n * t[u]));
          }
      }
      function Tn(e, t, n) {
        return Math.max(Math.min(e, n), t);
      }
      function Ln(e, t, n, r, i) {
        var a, o, s, l;
        if (
          (t.spanGaps &&
            (e = e.filter(function (e) {
              return !e.skip;
            })),
          "monotone" === t.cubicInterpolationMode)
        )
          !(function (e) {
            var t,
              n,
              r,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "x",
              a = En(i),
              o = e.length,
              s = Array(o).fill(0),
              l = Array(o),
              u = Mn(e, 0);
            for (t = 0; t < o; ++t)
              if (((n = r), (r = u), (u = Mn(e, t + 1)), r)) {
                if (u) {
                  var c = u[i] - r[i];
                  s[t] = 0 !== c ? (u[a] - r[a]) / c : 0;
                }
                l[t] = n
                  ? u
                    ? me(s[t - 1]) !== me(s[t])
                      ? 0
                      : (s[t - 1] + s[t]) / 2
                    : s[t - 1]
                  : s[t];
              }
            Cn(e, s, l), On(e, l, i);
          })(e, i);
        else {
          var u = r ? e[e.length - 1] : e[0];
          for (a = 0, o = e.length; a < o; ++a)
            (l = Pn(
              u,
              (s = e[a]),
              e[Math.min(a + 1, o - (r ? 0 : 1)) % o],
              t.tension
            )),
              (s.cp1x = l.previous.x),
              (s.cp1y = l.previous.y),
              (s.cp2x = l.next.x),
              (s.cp2y = l.next.y),
              (u = s);
        }
        t.capBezierPoints &&
          (function (e, t) {
            var n,
              r,
              i,
              a,
              o,
              s = Ht(e[0], t);
            for (n = 0, r = e.length; n < r; ++n)
              (o = a),
                (a = s),
                (s = n < r - 1 && Ht(e[n + 1], t)),
                a &&
                  ((i = e[n]),
                  o &&
                    ((i.cp1x = Tn(i.cp1x, t.left, t.right)),
                    (i.cp1y = Tn(i.cp1y, t.top, t.bottom))),
                  s &&
                    ((i.cp2x = Tn(i.cp2x, t.left, t.right)),
                    (i.cp2y = Tn(i.cp2y, t.top, t.bottom))));
          })(e, n);
      }
      function In() {
        return "undefined" !== typeof window && "undefined" !== typeof document;
      }
      function Dn(e) {
        var t = e.parentNode;
        return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t;
      }
      function Nn(e, t, n) {
        var r;
        return (
          "string" === typeof e
            ? ((r = parseInt(e, 10)),
              -1 !== e.indexOf("%") && (r = (r / 100) * t.parentNode[n]))
            : (r = e),
          r
        );
      }
      var jn = function (e) {
        return window.getComputedStyle(e, null);
      };
      var zn = ["top", "right", "bottom", "left"];
      function Rn(e, t, n) {
        var r = {};
        n = n ? "-" + n : "";
        for (var i = 0; i < 4; i++) {
          var a = zn[i];
          r[a] = parseFloat(e[t + "-" + a + n]) || 0;
        }
        return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
      }
      function An(e, t) {
        if ("native" in e) return e;
        var n = t.canvas,
          r = t.currentDevicePixelRatio,
          i = jn(n),
          a = "border-box" === i.boxSizing,
          o = Rn(i, "padding"),
          s = Rn(i, "border", "width"),
          l = (function (e, t) {
            var n,
              r,
              i = e.touches,
              a = i && i.length ? i[0] : e,
              o = a.offsetX,
              s = a.offsetY,
              l = !1;
            if (
              (function (e, t, n) {
                return (e > 0 || t > 0) && (!n || !n.shadowRoot);
              })(o, s, e.target)
            )
              (n = o), (r = s);
            else {
              var u = t.getBoundingClientRect();
              (n = a.clientX - u.left), (r = a.clientY - u.top), (l = !0);
            }
            return { x: n, y: r, box: l };
          })(e, n),
          u = l.x,
          c = l.y,
          f = l.box,
          h = o.left + (f && s.left),
          d = o.top + (f && s.top),
          p = t.width,
          v = t.height;
        return (
          a && ((p -= o.width + s.width), (v -= o.height + s.height)),
          {
            x: Math.round((((u - h) / p) * n.width) / r),
            y: Math.round((((c - d) / v) * n.height) / r),
          }
        );
      }
      var Fn = function (e) {
        return Math.round(10 * e) / 10;
      };
      function Bn(e, t, n, r) {
        var i = jn(e),
          a = Rn(i, "margin"),
          o = Nn(i.maxWidth, e, "clientWidth") || fe,
          s = Nn(i.maxHeight, e, "clientHeight") || fe,
          l = (function (e, t, n) {
            var r, i;
            if (void 0 === t || void 0 === n) {
              var a = Dn(e);
              if (a) {
                var o = a.getBoundingClientRect(),
                  s = jn(a),
                  l = Rn(s, "border", "width"),
                  u = Rn(s, "padding");
                (t = o.width - u.width - l.width),
                  (n = o.height - u.height - l.height),
                  (r = Nn(s.maxWidth, a, "clientWidth")),
                  (i = Nn(s.maxHeight, a, "clientHeight"));
              } else (t = e.clientWidth), (n = e.clientHeight);
            }
            return {
              width: t,
              height: n,
              maxWidth: r || fe,
              maxHeight: i || fe,
            };
          })(e, t, n),
          u = l.width,
          c = l.height;
        if ("content-box" === i.boxSizing) {
          var f = Rn(i, "border", "width"),
            h = Rn(i, "padding");
          (u -= h.width + f.width), (c -= h.height + f.height);
        }
        return (
          (u = Math.max(0, u - a.width)),
          (c = Math.max(0, r ? Math.floor(u / r) : c - a.height)),
          (u = Fn(Math.min(u, o, l.maxWidth))),
          (c = Fn(Math.min(c, s, l.maxHeight))),
          u && !c && (c = Fn(u / 2)),
          { width: u, height: c }
        );
      }
      function Vn(e, t, n) {
        var r = t || 1,
          i = Math.floor(e.height * r),
          a = Math.floor(e.width * r);
        (e.height = i / r), (e.width = a / r);
        var o = e.canvas;
        return (
          o.style &&
            (n || (!o.style.height && !o.style.width)) &&
            ((o.style.height = "".concat(e.height, "px")),
            (o.style.width = "".concat(e.width, "px"))),
          (e.currentDevicePixelRatio !== r ||
            o.height !== i ||
            o.width !== a) &&
            ((e.currentDevicePixelRatio = r),
            (o.height = i),
            (o.width = a),
            e.ctx.setTransform(r, 0, 0, r, 0, 0),
            !0)
        );
      }
      var Wn = (function () {
        var e = !1;
        try {
          var t = {
            get passive() {
              return (e = !0), !1;
            },
          };
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (n) {}
        return e;
      })();
      function Hn(e, t) {
        var n = (function (e, t) {
            return jn(e).getPropertyValue(t);
          })(e, t),
          r = n && n.match(/^(\d+)(\.\d+)?px$/);
        return r ? +r[1] : void 0;
      }
      function Un(e, t, n, r) {
        return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
      }
      function $n(e, t, n, r) {
        return {
          x: e.x + n * (t.x - e.x),
          y:
            "middle" === r
              ? n < 0.5
                ? e.y
                : t.y
              : "after" === r
              ? n < 1
                ? e.y
                : t.y
              : n > 0
              ? t.y
              : e.y,
        };
      }
      function Yn(e, t, n, r) {
        var i = { x: e.cp2x, y: e.cp2y },
          a = { x: t.cp1x, y: t.cp1y },
          o = Un(e, i, n),
          s = Un(i, a, n),
          l = Un(a, t, n),
          u = Un(o, s, n),
          c = Un(s, l, n);
        return Un(u, c, n);
      }
      var Qn = new Map();
      function qn(e, t, n) {
        return (function (e, t) {
          t = t || {};
          var n = e + JSON.stringify(t),
            r = Qn.get(n);
          return r || ((r = new Intl.NumberFormat(e, t)), Qn.set(n, r)), r;
        })(t, n).format(e);
      }
      function Kn(e, t, n) {
        return e
          ? (function (e, t) {
              return {
                x: function (n) {
                  return e + e + t - n;
                },
                setWidth: function (e) {
                  t = e;
                },
                textAlign: function (e) {
                  return "center" === e ? e : "right" === e ? "left" : "right";
                },
                xPlus: function (e, t) {
                  return e - t;
                },
                leftForLtr: function (e, t) {
                  return e - t;
                },
              };
            })(t, n)
          : {
              x: function (e) {
                return e;
              },
              setWidth: function (e) {},
              textAlign: function (e) {
                return e;
              },
              xPlus: function (e, t) {
                return e + t;
              },
              leftForLtr: function (e, t) {
                return e;
              },
            };
      }
      function Xn(e, t) {
        var n, r;
        ("ltr" !== t && "rtl" !== t) ||
          ((r = [
            (n = e.canvas.style).getPropertyValue("direction"),
            n.getPropertyPriority("direction"),
          ]),
          n.setProperty("direction", t, "important"),
          (e.prevTextDirection = r));
      }
      function Gn(e, t) {
        void 0 !== t &&
          (delete e.prevTextDirection,
          e.canvas.style.setProperty("direction", t[0], t[1]));
      }
      function Jn(e) {
        return "angle" === e
          ? { between: Oe, compare: Pe, normalize: Ce }
          : {
              between: Le,
              compare: function (e, t) {
                return e - t;
              },
              normalize: function (e) {
                return e;
              },
            };
      }
      function Zn(e) {
        var t = e.start,
          n = e.end,
          r = e.count;
        return {
          start: t % r,
          end: n % r,
          loop: e.loop && (n - t + 1) % r === 0,
          style: e.style,
        };
      }
      function er(e, t, n) {
        if (!n) return [e];
        for (
          var r,
            i,
            a,
            o = n.property,
            s = n.start,
            l = n.end,
            u = t.length,
            c = Jn(o),
            f = c.compare,
            h = c.between,
            d = c.normalize,
            p = (function (e, t, n) {
              var r,
                i,
                a = n.property,
                o = n.start,
                s = n.end,
                l = Jn(a),
                u = l.between,
                c = l.normalize,
                f = t.length,
                h = e.start,
                d = e.end,
                p = e.loop;
              if (p) {
                for (
                  h += f, d += f, r = 0, i = f;
                  r < i && u(c(t[h % f][a]), o, s);
                  ++r
                )
                  h--, d--;
                (h %= f), (d %= f);
              }
              return (
                d < h && (d += f), { start: h, end: d, loop: p, style: e.style }
              );
            })(e, t, n),
            v = p.start,
            g = p.end,
            m = p.loop,
            y = p.style,
            b = [],
            x = !1,
            k = null,
            w = function () {
              return x || (h(s, a, r) && 0 !== f(s, a));
            },
            _ = function () {
              return !x || 0 === f(l, r) || h(l, a, r);
            },
            S = v,
            M = v;
          S <= g;
          ++S
        )
          (i = t[S % u]).skip ||
            ((r = d(i[o])) !== a &&
              ((x = h(r, s, l)),
              null === k && w() && (k = 0 === f(r, s) ? S : M),
              null !== k &&
                _() &&
                (b.push(Zn({ start: k, end: S, loop: m, count: u, style: y })),
                (k = null)),
              (M = S),
              (a = r)));
        return (
          null !== k &&
            b.push(Zn({ start: k, end: g, loop: m, count: u, style: y })),
          b
        );
      }
      function tr(e, t) {
        for (var n = [], r = e.segments, i = 0; i < r.length; i++) {
          var a = er(r[i], e.points, t);
          a.length && n.push.apply(n, x(a));
        }
        return n;
      }
      function nr(e, t, n, r) {
        return r && r.setContext && n
          ? (function (e, t, n, r) {
              var i = e._chart.getContext(),
                a = rr(e.options),
                o = e._datasetIndex,
                s = e.options.spanGaps,
                l = n.length,
                u = [],
                c = a,
                f = t[0].start,
                h = f;
              function d(e, t, r, i) {
                var a = s ? -1 : 1;
                if (e !== t) {
                  for (e += l; n[e % l].skip; ) e -= a;
                  for (; n[t % l].skip; ) t += a;
                  e % l !== t % l &&
                    (u.push({ start: e % l, end: t % l, loop: r, style: i }),
                    (c = i),
                    (f = t % l));
                }
              }
              var p,
                v = N(t);
              try {
                for (v.s(); !(p = v.n()).done; ) {
                  var g = p.value;
                  f = s ? f : g.start;
                  var m = n[f % l],
                    y = void 0;
                  for (h = f + 1; h <= g.end; h++) {
                    var b = n[h % l];
                    ir(
                      (y = rr(
                        r.setContext(
                          ln(i, {
                            type: "segment",
                            p0: m,
                            p1: b,
                            p0DataIndex: (h - 1) % l,
                            p1DataIndex: h % l,
                            datasetIndex: o,
                          })
                        )
                      )),
                      c
                    ) && d(f, h - 1, g.loop, c),
                      (m = b),
                      (c = y);
                  }
                  f < h - 1 && d(f, h - 1, g.loop, c);
                }
              } catch (x) {
                v.e(x);
              } finally {
                v.f();
              }
              return u;
            })(e, t, n, r)
          : t;
      }
      function rr(e) {
        return {
          backgroundColor: e.backgroundColor,
          borderCapStyle: e.borderCapStyle,
          borderDash: e.borderDash,
          borderDashOffset: e.borderDashOffset,
          borderJoinStyle: e.borderJoinStyle,
          borderWidth: e.borderWidth,
          borderColor: e.borderColor,
        };
      }
      function ir(e, t) {
        return t && JSON.stringify(e) !== JSON.stringify(t);
      }
      var ar = (function () {
          function e() {
            j(this, e),
              (this._request = null),
              (this._charts = new Map()),
              (this._running = !1),
              (this._lastDate = void 0);
          }
          return (
            R(e, [
              {
                key: "_notify",
                value: function (e, t, n, r) {
                  var i = t.listeners[r],
                    a = t.duration;
                  i.forEach(function (r) {
                    return r({
                      chart: e,
                      initial: t.initial,
                      numSteps: a,
                      currentStep: Math.min(n - t.start, a),
                    });
                  });
                },
              },
              {
                key: "_refresh",
                value: function () {
                  var e = this;
                  this._request ||
                    ((this._running = !0),
                    (this._request = Ae.call(window, function () {
                      e._update(),
                        (e._request = null),
                        e._running && e._refresh();
                    })));
                },
              },
              {
                key: "_update",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : Date.now(),
                    n = 0;
                  this._charts.forEach(function (r, i) {
                    if (r.running && r.items.length) {
                      for (
                        var a, o = r.items, s = o.length - 1, l = !1;
                        s >= 0;
                        --s
                      )
                        (a = o[s])._active
                          ? (a._total > r.duration && (r.duration = a._total),
                            a.tick(t),
                            (l = !0))
                          : ((o[s] = o[o.length - 1]), o.pop());
                      l && (i.draw(), e._notify(i, r, t, "progress")),
                        o.length ||
                          ((r.running = !1),
                          e._notify(i, r, t, "complete"),
                          (r.initial = !1)),
                        (n += o.length);
                    }
                  }),
                    (this._lastDate = t),
                    0 === n && (this._running = !1);
                },
              },
              {
                key: "_getAnims",
                value: function (e) {
                  var t = this._charts,
                    n = t.get(e);
                  return (
                    n ||
                      ((n = {
                        running: !1,
                        initial: !0,
                        items: [],
                        listeners: { complete: [], progress: [] },
                      }),
                      t.set(e, n)),
                    n
                  );
                },
              },
              {
                key: "listen",
                value: function (e, t, n) {
                  this._getAnims(e).listeners[t].push(n);
                },
              },
              {
                key: "add",
                value: function (e, t) {
                  var n;
                  t &&
                    t.length &&
                    (n = this._getAnims(e).items).push.apply(n, x(t));
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._getAnims(e).items.length > 0;
                },
              },
              {
                key: "start",
                value: function (e) {
                  var t = this._charts.get(e);
                  t &&
                    ((t.running = !0),
                    (t.start = Date.now()),
                    (t.duration = t.items.reduce(function (e, t) {
                      return Math.max(e, t._duration);
                    }, 0)),
                    this._refresh());
                },
              },
              {
                key: "running",
                value: function (e) {
                  if (!this._running) return !1;
                  var t = this._charts.get(e);
                  return !!(t && t.running && t.items.length);
                },
              },
              {
                key: "stop",
                value: function (e) {
                  var t = this._charts.get(e);
                  if (t && t.items.length) {
                    for (var n = t.items, r = n.length - 1; r >= 0; --r)
                      n[r].cancel();
                    (t.items = []), this._notify(e, t, Date.now(), "complete");
                  }
                },
              },
              {
                key: "remove",
                value: function (e) {
                  return this._charts.delete(e);
                },
              },
            ]),
            e
          );
        })(),
        or = new ar(),
        sr = "transparent",
        lr = {
          boolean: function (e, t, n) {
            return n > 0.5 ? t : e;
          },
          color: function (e, t, n) {
            var r = Ot(e || sr),
              i = r.valid && Ot(t || sr);
            return i && i.valid ? i.mix(r, n).hexString() : t;
          },
          number: function (e, t, n) {
            return e + (t - e) * n;
          },
        },
        ur = (function () {
          function e(t, n, r, i) {
            j(this, e);
            var a = n[r];
            i = sn([t.to, i, a, t.from]);
            var o = sn([t.from, a, i]);
            (this._active = !0),
              (this._fn = t.fn || lr[t.type || typeof o]),
              (this._easing = Qe[t.easing] || Qe.linear),
              (this._start = Math.floor(Date.now() + (t.delay || 0))),
              (this._duration = this._total = Math.floor(t.duration)),
              (this._loop = !!t.loop),
              (this._target = n),
              (this._prop = r),
              (this._from = o),
              (this._to = i),
              (this._promises = void 0);
          }
          return (
            R(e, [
              {
                key: "active",
                value: function () {
                  return this._active;
                },
              },
              {
                key: "update",
                value: function (e, t, n) {
                  if (this._active) {
                    this._notify(!1);
                    var r = this._target[this._prop],
                      i = n - this._start,
                      a = this._duration - i;
                    (this._start = n),
                      (this._duration = Math.floor(Math.max(a, e.duration))),
                      (this._total += i),
                      (this._loop = !!e.loop),
                      (this._to = sn([e.to, t, r, e.from])),
                      (this._from = sn([e.from, r, t]));
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  this._active &&
                    (this.tick(Date.now()),
                    (this._active = !1),
                    this._notify(!1));
                },
              },
              {
                key: "tick",
                value: function (e) {
                  var t,
                    n = e - this._start,
                    r = this._duration,
                    i = this._prop,
                    a = this._from,
                    o = this._loop,
                    s = this._to;
                  if (((this._active = a !== s && (o || n < r)), !this._active))
                    return (this._target[i] = s), void this._notify(!0);
                  n < 0
                    ? (this._target[i] = a)
                    : ((t = (n / r) % 2),
                      (t = o && t > 1 ? 2 - t : t),
                      (t = this._easing(Math.min(1, Math.max(0, t)))),
                      (this._target[i] = this._fn(a, s, t)));
                },
              },
              {
                key: "wait",
                value: function () {
                  var e = this._promises || (this._promises = []);
                  return new Promise(function (t, n) {
                    e.push({ res: t, rej: n });
                  });
                },
              },
              {
                key: "_notify",
                value: function (e) {
                  for (
                    var t = e ? "res" : "rej", n = this._promises || [], r = 0;
                    r < n.length;
                    r++
                  )
                    n[r][t]();
                },
              },
            ]),
            e
          );
        })();
      zt.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      });
      var cr = Object.keys(zt.animation);
      zt.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: function (e) {
          return "onProgress" !== e && "onComplete" !== e && "fn" !== e;
        },
      }),
        zt.set("animations", {
          colors: {
            type: "color",
            properties: ["color", "borderColor", "backgroundColor"],
          },
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius", "tension"],
          },
        }),
        zt.describe("animations", { _fallback: "animation" }),
        zt.set("transitions", {
          active: { animation: { duration: 400 } },
          resize: { animation: { duration: 0 } },
          show: {
            animations: {
              colors: { from: "transparent" },
              visible: { type: "boolean", duration: 0 },
            },
          },
          hide: {
            animations: {
              colors: { to: "transparent" },
              visible: {
                type: "boolean",
                easing: "linear",
                fn: function (e) {
                  return 0 | e;
                },
              },
            },
          },
        });
      var fr = (function () {
        function e(t, n) {
          j(this, e),
            (this._chart = t),
            (this._properties = new Map()),
            this.configure(n);
        }
        return (
          R(e, [
            {
              key: "configure",
              value: function (e) {
                if (W(e)) {
                  var t = this._properties;
                  Object.getOwnPropertyNames(e).forEach(function (n) {
                    var r = e[n];
                    if (W(r)) {
                      var i,
                        a = {},
                        o = N(cr);
                      try {
                        for (o.s(); !(i = o.n()).done; ) {
                          var s = i.value;
                          a[s] = r[s];
                        }
                      } catch (l) {
                        o.e(l);
                      } finally {
                        o.f();
                      }
                      ((V(r.properties) && r.properties) || [n]).forEach(
                        function (e) {
                          (e !== n && t.has(e)) || t.set(e, a);
                        }
                      );
                    }
                  });
                }
              },
            },
            {
              key: "_animateOptions",
              value: function (e, t) {
                var n = t.options,
                  r = (function (e, t) {
                    if (!t) return;
                    var n = e.options;
                    if (!n) return void (e.options = t);
                    n.$shared &&
                      (e.options = n =
                        Object.assign({}, n, { $shared: !1, $animations: {} }));
                    return n;
                  })(e, n);
                if (!r) return [];
                var i = this._createAnimations(r, n);
                return (
                  n.$shared &&
                    (function (e, t) {
                      for (
                        var n = [], r = Object.keys(t), i = 0;
                        i < r.length;
                        i++
                      ) {
                        var a = e[r[i]];
                        a && a.active() && n.push(a.wait());
                      }
                      return Promise.all(n);
                    })(e.options.$animations, n).then(
                      function () {
                        e.options = n;
                      },
                      function () {}
                    ),
                  i
                );
              },
            },
            {
              key: "_createAnimations",
              value: function (e, t) {
                var n,
                  r = this._properties,
                  i = [],
                  a = e.$animations || (e.$animations = {}),
                  o = Object.keys(t),
                  s = Date.now();
                for (n = o.length - 1; n >= 0; --n) {
                  var l = o[n];
                  if ("$" !== l.charAt(0))
                    if ("options" !== l) {
                      var u = t[l],
                        c = a[l],
                        f = r.get(l);
                      if (c) {
                        if (f && c.active()) {
                          c.update(f, u, s);
                          continue;
                        }
                        c.cancel();
                      }
                      f && f.duration
                        ? ((a[l] = c = new ur(f, e, l, u)), i.push(c))
                        : (e[l] = u);
                    } else i.push.apply(i, x(this._animateOptions(e, t)));
                }
                return i;
              },
            },
            {
              key: "update",
              value: function (e, t) {
                if (0 !== this._properties.size) {
                  var n = this._createAnimations(e, t);
                  return n.length ? (or.add(this._chart, n), !0) : void 0;
                }
                Object.assign(e, t);
              },
            },
          ]),
          e
        );
      })();
      function hr(e, t) {
        var n = (e && e.options) || {},
          r = n.reverse,
          i = void 0 === n.min ? t : 0,
          a = void 0 === n.max ? t : 0;
        return { start: r ? a : i, end: r ? i : a };
      }
      function dr(e, t) {
        var n,
          r,
          i = [],
          a = e._getSortedDatasetMetas(t);
        for (n = 0, r = a.length; n < r; ++n) i.push(a[n].index);
        return i;
      }
      function pr(e, t, n) {
        var r,
          i,
          a,
          o,
          s =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          l = e.keys,
          u = "single" === s.mode;
        if (null !== t) {
          for (r = 0, i = l.length; r < i; ++r) {
            if ((a = +l[r]) === n) {
              if (s.all) continue;
              break;
            }
            (o = e.values[a]),
              H(o) && (u || 0 === t || me(t) === me(o)) && (t += o);
          }
          return t;
        }
      }
      function vr(e, t) {
        var n = e && e.options.stacked;
        return n || (void 0 === n && void 0 !== t.stack);
      }
      function gr(e, t, n) {
        var r = e[t] || (e[t] = {});
        return r[n] || (r[n] = {});
      }
      function mr(e, t, n, r) {
        var i,
          a = N(t.getMatchingVisibleMetas(r).reverse());
        try {
          for (a.s(); !(i = a.n()).done; ) {
            var o = i.value,
              s = e[o.index];
            if ((n && s > 0) || (!n && s < 0)) return o.index;
          }
        } catch (l) {
          a.e(l);
        } finally {
          a.f();
        }
        return null;
      }
      function yr(e, t) {
        for (
          var n,
            r = e.chart,
            i = e._cachedMeta,
            a = r._stacks || (r._stacks = {}),
            o = i.iScale,
            s = i.vScale,
            l = i.index,
            u = o.axis,
            c = s.axis,
            f = (function (e, t, n) {
              return ""
                .concat(e.id, ".")
                .concat(t.id, ".")
                .concat(n.stack || n.type);
            })(o, s, i),
            h = t.length,
            d = 0;
          d < h;
          ++d
        ) {
          var p = t[d],
            v = p[u],
            g = p[c];
          ((n = (p._stacks || (p._stacks = {}))[c] = gr(a, f, v))[l] = g),
            (n._top = mr(n, s, !0, i.type)),
            (n._bottom = mr(n, s, !1, i.type));
        }
      }
      function br(e, t) {
        var n = e.scales;
        return Object.keys(n)
          .filter(function (e) {
            return n[e].axis === t;
          })
          .shift();
      }
      function xr(e, t) {
        var n = e.controller.index,
          r = e.vScale && e.vScale.axis;
        if (r) {
          var i,
            a = N((t = t || e._parsed));
          try {
            for (a.s(); !(i = a.n()).done; ) {
              var o = i.value._stacks;
              if (!o || void 0 === o[r] || void 0 === o[r][n]) return;
              delete o[r][n];
            }
          } catch (s) {
            a.e(s);
          } finally {
            a.f();
          }
        }
      }
      var kr = function (e) {
          return "reset" === e || "none" === e;
        },
        wr = function (e, t) {
          return t ? e : Object.assign({}, e);
        },
        _r = (function () {
          function e(t, n) {
            j(this, e),
              (this.chart = t),
              (this._ctx = t.ctx),
              (this.index = n),
              (this._cachedDataOpts = {}),
              (this._cachedMeta = this.getMeta()),
              (this._type = this._cachedMeta.type),
              (this.options = void 0),
              (this._parsing = !1),
              (this._data = void 0),
              (this._objectData = void 0),
              (this._sharedOptions = void 0),
              (this._drawStart = void 0),
              (this._drawCount = void 0),
              (this.enableOptionSharing = !1),
              (this.supportsDecimation = !1),
              (this.$context = void 0),
              (this._syncList = []),
              this.initialize();
          }
          return (
            R(e, [
              {
                key: "initialize",
                value: function () {
                  var e = this._cachedMeta;
                  this.configure(),
                    this.linkScales(),
                    (e._stacked = vr(e.vScale, e)),
                    this.addElements();
                },
              },
              {
                key: "updateIndex",
                value: function (e) {
                  this.index !== e && xr(this._cachedMeta), (this.index = e);
                },
              },
              {
                key: "linkScales",
                value: function () {
                  var e = this.chart,
                    t = this._cachedMeta,
                    n = this.getDataset(),
                    r = function (e, t, n, r) {
                      return "x" === e ? t : "r" === e ? r : n;
                    },
                    i = (t.xAxisID = $(n.xAxisID, br(e, "x"))),
                    a = (t.yAxisID = $(n.yAxisID, br(e, "y"))),
                    o = (t.rAxisID = $(n.rAxisID, br(e, "r"))),
                    s = t.indexAxis,
                    l = (t.iAxisID = r(s, i, a, o)),
                    u = (t.vAxisID = r(s, a, i, o));
                  (t.xScale = this.getScaleForId(i)),
                    (t.yScale = this.getScaleForId(a)),
                    (t.rScale = this.getScaleForId(o)),
                    (t.iScale = this.getScaleForId(l)),
                    (t.vScale = this.getScaleForId(u));
                },
              },
              {
                key: "getDataset",
                value: function () {
                  return this.chart.data.datasets[this.index];
                },
              },
              {
                key: "getMeta",
                value: function () {
                  return this.chart.getDatasetMeta(this.index);
                },
              },
              {
                key: "getScaleForId",
                value: function (e) {
                  return this.chart.scales[e];
                },
              },
              {
                key: "_getOtherScale",
                value: function (e) {
                  var t = this._cachedMeta;
                  return e === t.iScale ? t.vScale : t.iScale;
                },
              },
              {
                key: "reset",
                value: function () {
                  this._update("reset");
                },
              },
              {
                key: "_destroy",
                value: function () {
                  var e = this._cachedMeta;
                  this._data && ze(this._data, this), e._stacked && xr(e);
                },
              },
              {
                key: "_dataCheck",
                value: function () {
                  var e,
                    t,
                    n = this.getDataset(),
                    r = n.data || (n.data = []),
                    i = this._data;
                  if (W(r))
                    this._data = (function (e) {
                      var t,
                        n,
                        r,
                        i = Object.keys(e),
                        a = new Array(i.length);
                      for (t = 0, n = i.length; t < n; ++t)
                        (r = i[t]), (a[t] = { x: r, y: e[r] });
                      return a;
                    })(r);
                  else if (i !== r) {
                    if (i) {
                      ze(i, this);
                      var a = this._cachedMeta;
                      xr(a), (a._parsed = []);
                    }
                    r &&
                      Object.isExtensible(r) &&
                      ((t = this),
                      (e = r)._chartjs
                        ? e._chartjs.listeners.push(t)
                        : (Object.defineProperty(e, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: { listeners: [t] },
                          }),
                          je.forEach(function (t) {
                            var n = "_onData" + ie(t),
                              r = e[t];
                            Object.defineProperty(e, t, {
                              configurable: !0,
                              enumerable: !1,
                              value: function () {
                                for (
                                  var t = arguments.length,
                                    i = new Array(t),
                                    a = 0;
                                  a < t;
                                  a++
                                )
                                  i[a] = arguments[a];
                                var o = r.apply(this, i);
                                return (
                                  e._chartjs.listeners.forEach(function (e) {
                                    "function" === typeof e[n] &&
                                      e[n].apply(e, i);
                                  }),
                                  o
                                );
                              },
                            });
                          }))),
                      (this._syncList = []),
                      (this._data = r);
                  }
                },
              },
              {
                key: "addElements",
                value: function () {
                  var e = this._cachedMeta;
                  this._dataCheck(),
                    this.datasetElementType &&
                      (e.dataset = new this.datasetElementType());
                },
              },
              {
                key: "buildOrUpdateElements",
                value: function (e) {
                  var t = this._cachedMeta,
                    n = this.getDataset(),
                    r = !1;
                  this._dataCheck();
                  var i = t._stacked;
                  (t._stacked = vr(t.vScale, t)),
                    t.stack !== n.stack &&
                      ((r = !0), xr(t), (t.stack = n.stack)),
                    this._resyncElements(e),
                    (r || i !== t._stacked) && yr(this, t._parsed);
                },
              },
              {
                key: "configure",
                value: function () {
                  var e = this.chart.config,
                    t = e.datasetScopeKeys(this._type),
                    n = e.getOptionScopes(this.getDataset(), t, !0);
                  (this.options = e.createResolver(n, this.getContext())),
                    (this._parsing = this.options.parsing),
                    (this._cachedDataOpts = {});
                },
              },
              {
                key: "parse",
                value: function (e, t) {
                  var n,
                    r,
                    i,
                    a = this._cachedMeta,
                    o = this._data,
                    s = a.iScale,
                    l = a._stacked,
                    u = s.axis,
                    c = (0 === e && t === o.length) || a._sorted,
                    f = e > 0 && a._parsed[e - 1];
                  if (!1 === this._parsing)
                    (a._parsed = o), (a._sorted = !0), (i = o);
                  else {
                    i = V(o[e])
                      ? this.parseArrayData(a, o, e, t)
                      : W(o[e])
                      ? this.parseObjectData(a, o, e, t)
                      : this.parsePrimitiveData(a, o, e, t);
                    for (n = 0; n < t; ++n)
                      (a._parsed[n + e] = r = i[n]),
                        c &&
                          ((null === r[u] || (f && r[u] < f[u])) && (c = !1),
                          (f = r));
                    a._sorted = c;
                  }
                  l && yr(this, i);
                },
              },
              {
                key: "parsePrimitiveData",
                value: function (e, t, n, r) {
                  var i,
                    a,
                    o,
                    s = e.iScale,
                    l = e.vScale,
                    u = s.axis,
                    c = l.axis,
                    f = s.getLabels(),
                    h = s === l,
                    d = new Array(r);
                  for (i = 0, a = r; i < a; ++i) {
                    var p;
                    (o = i + n),
                      (d[i] =
                        (k((p = {}), u, h || s.parse(f[o], o)),
                        k(p, c, l.parse(t[o], o)),
                        p));
                  }
                  return d;
                },
              },
              {
                key: "parseArrayData",
                value: function (e, t, n, r) {
                  var i,
                    a,
                    o,
                    s,
                    l = e.xScale,
                    u = e.yScale,
                    c = new Array(r);
                  for (i = 0, a = r; i < a; ++i)
                    (s = t[(o = i + n)]),
                      (c[i] = { x: l.parse(s[0], o), y: u.parse(s[1], o) });
                  return c;
                },
              },
              {
                key: "parseObjectData",
                value: function (e, t, n, r) {
                  var i,
                    a,
                    o,
                    s,
                    l = e.xScale,
                    u = e.yScale,
                    c = this._parsing,
                    f = c.xAxisKey,
                    h = void 0 === f ? "x" : f,
                    d = c.yAxisKey,
                    p = void 0 === d ? "y" : d,
                    v = new Array(r);
                  for (i = 0, a = r; i < a; ++i)
                    (s = t[(o = i + n)]),
                      (v[i] = {
                        x: l.parse(re(s, h), o),
                        y: u.parse(re(s, p), o),
                      });
                  return v;
                },
              },
              {
                key: "getParsed",
                value: function (e) {
                  return this._cachedMeta._parsed[e];
                },
              },
              {
                key: "getDataElement",
                value: function (e) {
                  return this._cachedMeta.data[e];
                },
              },
              {
                key: "applyStack",
                value: function (e, t, n) {
                  var r = this.chart,
                    i = this._cachedMeta,
                    a = t[e.axis];
                  return pr(
                    { keys: dr(r, !0), values: t._stacks[e.axis] },
                    a,
                    i.index,
                    { mode: n }
                  );
                },
              },
              {
                key: "updateRangeFromParsed",
                value: function (e, t, n, r) {
                  var i = n[t.axis],
                    a = null === i ? NaN : i,
                    o = r && n._stacks[t.axis];
                  r &&
                    o &&
                    ((r.values = o), (a = pr(r, i, this._cachedMeta.index))),
                    (e.min = Math.min(e.min, a)),
                    (e.max = Math.max(e.max, a));
                },
              },
              {
                key: "getMinMax",
                value: function (e, t) {
                  var n,
                    r,
                    i = this._cachedMeta,
                    a = i._parsed,
                    o = i._sorted && e === i.iScale,
                    s = a.length,
                    l = this._getOtherScale(e),
                    u = (function (e, t, n) {
                      return (
                        e &&
                        !t.hidden &&
                        t._stacked && { keys: dr(n, !0), values: null }
                      );
                    })(t, i, this.chart),
                    c = {
                      min: Number.POSITIVE_INFINITY,
                      max: Number.NEGATIVE_INFINITY,
                    },
                    f = (function (e) {
                      var t = e.getUserBounds(),
                        n = t.min,
                        r = t.max,
                        i = t.minDefined,
                        a = t.maxDefined;
                      return {
                        min: i ? n : Number.NEGATIVE_INFINITY,
                        max: a ? r : Number.POSITIVE_INFINITY,
                      };
                    })(l),
                    h = f.min,
                    d = f.max;
                  function p() {
                    var t = (r = a[n])[l.axis];
                    return !H(r[e.axis]) || h > t || d < t;
                  }
                  for (
                    n = 0;
                    n < s &&
                    (p() || (this.updateRangeFromParsed(c, e, r, u), !o));
                    ++n
                  );
                  if (o)
                    for (n = s - 1; n >= 0; --n)
                      if (!p()) {
                        this.updateRangeFromParsed(c, e, r, u);
                        break;
                      }
                  return c;
                },
              },
              {
                key: "getAllParsedValues",
                value: function (e) {
                  var t,
                    n,
                    r,
                    i = this._cachedMeta._parsed,
                    a = [];
                  for (t = 0, n = i.length; t < n; ++t)
                    (r = i[t][e.axis]), H(r) && a.push(r);
                  return a;
                },
              },
              {
                key: "getMaxOverflow",
                value: function () {
                  return !1;
                },
              },
              {
                key: "getLabelAndValue",
                value: function (e) {
                  var t = this._cachedMeta,
                    n = t.iScale,
                    r = t.vScale,
                    i = this.getParsed(e);
                  return {
                    label: n ? "" + n.getLabelForValue(i[n.axis]) : "",
                    value: r ? "" + r.getLabelForValue(i[r.axis]) : "",
                  };
                },
              },
              {
                key: "_update",
                value: function (e) {
                  var t = this._cachedMeta;
                  this.update(e || "default"),
                    (t._clip = (function (e) {
                      var t, n, r, i;
                      return (
                        W(e)
                          ? ((t = e.top),
                            (n = e.right),
                            (r = e.bottom),
                            (i = e.left))
                          : (t = n = r = i = e),
                        {
                          top: t,
                          right: n,
                          bottom: r,
                          left: i,
                          disabled: !1 === e,
                        }
                      );
                    })(
                      $(
                        this.options.clip,
                        (function (e, t, n) {
                          if (!1 === n) return !1;
                          var r = hr(e, n),
                            i = hr(t, n);
                          return {
                            top: i.end,
                            right: r.end,
                            bottom: i.start,
                            left: r.start,
                          };
                        })(t.xScale, t.yScale, this.getMaxOverflow())
                      )
                    ));
                },
              },
              { key: "update", value: function (e) {} },
              {
                key: "draw",
                value: function () {
                  var e,
                    t = this._ctx,
                    n = this.chart,
                    r = this._cachedMeta,
                    i = r.data || [],
                    a = n.chartArea,
                    o = [],
                    s = this._drawStart || 0,
                    l = this._drawCount || i.length - s,
                    u = this.options.drawActiveElementsOnTop;
                  for (
                    r.dataset && r.dataset.draw(t, a, s, l), e = s;
                    e < s + l;
                    ++e
                  ) {
                    var c = i[e];
                    c.hidden || (c.active && u ? o.push(c) : c.draw(t, a));
                  }
                  for (e = 0; e < o.length; ++e) o[e].draw(t, a);
                },
              },
              {
                key: "getStyle",
                value: function (e, t) {
                  var n = t ? "active" : "default";
                  return void 0 === e && this._cachedMeta.dataset
                    ? this.resolveDatasetElementOptions(n)
                    : this.resolveDataElementOptions(e || 0, n);
                },
              },
              {
                key: "getContext",
                value: function (e, t, n) {
                  var r,
                    i = this.getDataset();
                  if (e >= 0 && e < this._cachedMeta.data.length) {
                    var a = this._cachedMeta.data[e];
                    (r =
                      a.$context ||
                      (a.$context = (function (e, t, n) {
                        return ln(e, {
                          active: !1,
                          dataIndex: t,
                          parsed: void 0,
                          raw: void 0,
                          element: n,
                          index: t,
                          mode: "default",
                          type: "data",
                        });
                      })(this.getContext(), e, a))),
                      (r.parsed = this.getParsed(e)),
                      (r.raw = i.data[e]),
                      (r.index = r.dataIndex = e);
                  } else
                    (r =
                      this.$context ||
                      (this.$context = (function (e, t) {
                        return ln(e, {
                          active: !1,
                          dataset: void 0,
                          datasetIndex: t,
                          index: t,
                          mode: "default",
                          type: "dataset",
                        });
                      })(this.chart.getContext(), this.index))),
                      (r.dataset = i),
                      (r.index = r.datasetIndex = this.index);
                  return (r.active = !!t), (r.mode = n), r;
                },
              },
              {
                key: "resolveDatasetElementOptions",
                value: function (e) {
                  return this._resolveElementOptions(
                    this.datasetElementType.id,
                    e
                  );
                },
              },
              {
                key: "resolveDataElementOptions",
                value: function (e, t) {
                  return this._resolveElementOptions(
                    this.dataElementType.id,
                    t,
                    e
                  );
                },
              },
              {
                key: "_resolveElementOptions",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "default",
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    i = "active" === n,
                    a = this._cachedDataOpts,
                    o = e + "-" + n,
                    s = a[o],
                    l = this.enableOptionSharing && ae(r);
                  if (s) return wr(s, l);
                  var u = this.chart.config,
                    c = u.datasetElementScopeKeys(this._type, e),
                    f = i ? ["".concat(e, "Hover"), "hover", e, ""] : [e, ""],
                    h = u.getOptionScopes(this.getDataset(), c),
                    d = Object.keys(zt.elements[e]),
                    p = function () {
                      return t.getContext(r, i);
                    },
                    v = u.resolveNamedOptions(h, d, p, f);
                  return (
                    v.$shared &&
                      ((v.$shared = l), (a[o] = Object.freeze(wr(v, l)))),
                    v
                  );
                },
              },
              {
                key: "_resolveAnimations",
                value: function (e, t, n) {
                  var r,
                    i = this.chart,
                    a = this._cachedDataOpts,
                    o = "animation-".concat(t),
                    s = a[o];
                  if (s) return s;
                  if (!1 !== i.options.animation) {
                    var l = this.chart.config,
                      u = l.datasetAnimationScopeKeys(this._type, t),
                      c = l.getOptionScopes(this.getDataset(), u);
                    r = l.createResolver(c, this.getContext(e, n, t));
                  }
                  var f = new fr(i, r && r.animations);
                  return r && r._cacheable && (a[o] = Object.freeze(f)), f;
                },
              },
              {
                key: "getSharedOptions",
                value: function (e) {
                  if (e.$shared)
                    return (
                      this._sharedOptions ||
                      (this._sharedOptions = Object.assign({}, e))
                    );
                },
              },
              {
                key: "includeOptions",
                value: function (e, t) {
                  return !t || kr(e) || this.chart._animationsDisabled;
                },
              },
              {
                key: "_getSharedOptions",
                value: function (e, t) {
                  var n = this.resolveDataElementOptions(e, t),
                    r = this._sharedOptions,
                    i = this.getSharedOptions(n),
                    a = this.includeOptions(t, i) || i !== r;
                  return (
                    this.updateSharedOptions(i, t, n),
                    { sharedOptions: i, includeOptions: a }
                  );
                },
              },
              {
                key: "updateElement",
                value: function (e, t, n, r) {
                  kr(r)
                    ? Object.assign(e, n)
                    : this._resolveAnimations(t, r).update(e, n);
                },
              },
              {
                key: "updateSharedOptions",
                value: function (e, t, n) {
                  e &&
                    !kr(t) &&
                    this._resolveAnimations(void 0, t).update(e, n);
                },
              },
              {
                key: "_setStyle",
                value: function (e, t, n, r) {
                  e.active = r;
                  var i = this.getStyle(t, r);
                  this._resolveAnimations(t, n, r).update(e, {
                    options: (!r && this.getSharedOptions(i)) || i,
                  });
                },
              },
              {
                key: "removeHoverStyle",
                value: function (e, t, n) {
                  this._setStyle(e, n, "active", !1);
                },
              },
              {
                key: "setHoverStyle",
                value: function (e, t, n) {
                  this._setStyle(e, n, "active", !0);
                },
              },
              {
                key: "_removeDatasetHoverStyle",
                value: function () {
                  var e = this._cachedMeta.dataset;
                  e && this._setStyle(e, void 0, "active", !1);
                },
              },
              {
                key: "_setDatasetHoverStyle",
                value: function () {
                  var e = this._cachedMeta.dataset;
                  e && this._setStyle(e, void 0, "active", !0);
                },
              },
              {
                key: "_resyncElements",
                value: function (e) {
                  var t,
                    n = this._data,
                    r = this._cachedMeta.data,
                    i = N(this._syncList);
                  try {
                    for (i.s(); !(t = i.n()).done; ) {
                      var a = o(t.value, 3),
                        s = a[0],
                        l = a[1],
                        u = a[2];
                      this[s](l, u);
                    }
                  } catch (d) {
                    i.e(d);
                  } finally {
                    i.f();
                  }
                  this._syncList = [];
                  var c = r.length,
                    f = n.length,
                    h = Math.min(f, c);
                  h && this.parse(0, h),
                    f > c
                      ? this._insertElements(c, f - c, e)
                      : f < c && this._removeElements(f, c - f);
                },
              },
              {
                key: "_insertElements",
                value: function (e, t) {
                  var n,
                    r =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    i = this._cachedMeta,
                    a = i.data,
                    o = e + t,
                    s = function (e) {
                      for (e.length += t, n = e.length - 1; n >= o; n--)
                        e[n] = e[n - t];
                    };
                  for (s(a), n = e; n < o; ++n)
                    a[n] = new this.dataElementType();
                  this._parsing && s(i._parsed),
                    this.parse(e, t),
                    r && this.updateElements(a, e, t, "reset");
                },
              },
              { key: "updateElements", value: function (e, t, n, r) {} },
              {
                key: "_removeElements",
                value: function (e, t) {
                  var n = this._cachedMeta;
                  if (this._parsing) {
                    var r = n._parsed.splice(e, t);
                    n._stacked && xr(n, r);
                  }
                  n.data.splice(e, t);
                },
              },
              {
                key: "_sync",
                value: function (e) {
                  if (this._parsing) this._syncList.push(e);
                  else {
                    var t = o(e, 3),
                      n = t[0],
                      r = t[1],
                      i = t[2];
                    this[n](r, i);
                  }
                  this.chart._dataChanges.push([this.index].concat(x(e)));
                },
              },
              {
                key: "_onDataPush",
                value: function () {
                  var e = arguments.length;
                  this._sync([
                    "_insertElements",
                    this.getDataset().data.length - e,
                    e,
                  ]);
                },
              },
              {
                key: "_onDataPop",
                value: function () {
                  this._sync([
                    "_removeElements",
                    this._cachedMeta.data.length - 1,
                    1,
                  ]);
                },
              },
              {
                key: "_onDataShift",
                value: function () {
                  this._sync(["_removeElements", 0, 1]);
                },
              },
              {
                key: "_onDataSplice",
                value: function (e, t) {
                  t && this._sync(["_removeElements", e, t]);
                  var n = arguments.length - 2;
                  n && this._sync(["_insertElements", e, n]);
                },
              },
              {
                key: "_onDataUnshift",
                value: function () {
                  this._sync(["_insertElements", 0, arguments.length]);
                },
              },
            ]),
            e
          );
        })();
      function Sr(e) {
        var t,
          n,
          r,
          i,
          a = e.iScale,
          o = (function (e, t) {
            if (!e._cache.$bar) {
              for (
                var n = e.getMatchingVisibleMetas(t),
                  r = [],
                  i = 0,
                  a = n.length;
                i < a;
                i++
              )
                r = r.concat(n[i].controller.getAllParsedValues(e));
              e._cache.$bar = Re(
                r.sort(function (e, t) {
                  return e - t;
                })
              );
            }
            return e._cache.$bar;
          })(a, e.type),
          s = a._length,
          l = function () {
            32767 !== r &&
              -32768 !== r &&
              (ae(i) && (s = Math.min(s, Math.abs(r - i) || s)), (i = r));
          };
        for (t = 0, n = o.length; t < n; ++t)
          (r = a.getPixelForValue(o[t])), l();
        for (i = void 0, t = 0, n = a.ticks.length; t < n; ++t)
          (r = a.getPixelForTick(t)), l();
        return s;
      }
      function Mr(e, t, n, r) {
        return (
          V(e)
            ? (function (e, t, n, r) {
                var i = n.parse(e[0], r),
                  a = n.parse(e[1], r),
                  o = Math.min(i, a),
                  s = Math.max(i, a),
                  l = o,
                  u = s;
                Math.abs(o) > Math.abs(s) && ((l = s), (u = o)),
                  (t[n.axis] = u),
                  (t._custom = {
                    barStart: l,
                    barEnd: u,
                    start: i,
                    end: a,
                    min: o,
                    max: s,
                  });
              })(e, t, n, r)
            : (t[n.axis] = n.parse(e, r)),
          t
        );
      }
      function Er(e, t, n, r) {
        var i,
          a,
          o,
          s,
          l = e.iScale,
          u = e.vScale,
          c = l.getLabels(),
          f = l === u,
          h = [];
        for (i = n, a = n + r; i < a; ++i)
          (s = t[i]),
            ((o = {})[l.axis] = f || l.parse(c[i], i)),
            h.push(Mr(s, o, u, i));
        return h;
      }
      function Pr(e) {
        return e && void 0 !== e.barStart && void 0 !== e.barEnd;
      }
      function Cr(e, t, n, r) {
        var i = t.borderSkipped,
          a = {};
        if (i)
          if (!0 !== i) {
            var o = (function (e) {
                var t, n, r, i, a;
                return (
                  e.horizontal
                    ? ((t = e.base > e.x), (n = "left"), (r = "right"))
                    : ((t = e.base < e.y), (n = "bottom"), (r = "top")),
                  t
                    ? ((i = "end"), (a = "start"))
                    : ((i = "start"), (a = "end")),
                  { start: n, end: r, reverse: t, top: i, bottom: a }
                );
              })(e),
              s = o.start,
              l = o.end,
              u = o.reverse,
              c = o.top,
              f = o.bottom;
            "middle" === i &&
              n &&
              ((e.enableBorderRadius = !0),
              (n._top || 0) === r
                ? (i = c)
                : (n._bottom || 0) === r
                ? (i = f)
                : ((a[Or(f, s, l, u)] = !0), (i = c))),
              (a[Or(i, s, l, u)] = !0),
              (e.borderSkipped = a);
          } else e.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
        else e.borderSkipped = a;
      }
      function Or(e, t, n, r) {
        var i, a, o;
        return (
          r
            ? ((o = n),
              (e = Tr((e = (i = e) === (a = t) ? o : i === o ? a : i), n, t)))
            : (e = Tr(e, t, n)),
          e
        );
      }
      function Tr(e, t, n) {
        return "start" === e ? t : "end" === e ? n : e;
      }
      function Lr(e, t, n) {
        var r = t.inflateAmount;
        e.inflateAmount = "auto" === r ? (1 === n ? 0.33 : 0) : r;
      }
      (_r.defaults = {}),
        (_r.prototype.datasetElementType = null),
        (_r.prototype.dataElementType = null);
      var Ir = (function (e) {
        O(n, e);
        var t = D(n);
        function n() {
          return j(this, n), t.apply(this, arguments);
        }
        return (
          R(n, [
            {
              key: "parsePrimitiveData",
              value: function (e, t, n, r) {
                return Er(e, t, n, r);
              },
            },
            {
              key: "parseArrayData",
              value: function (e, t, n, r) {
                return Er(e, t, n, r);
              },
            },
            {
              key: "parseObjectData",
              value: function (e, t, n, r) {
                var i,
                  a,
                  o,
                  s,
                  l = e.iScale,
                  u = e.vScale,
                  c = this._parsing,
                  f = c.xAxisKey,
                  h = void 0 === f ? "x" : f,
                  d = c.yAxisKey,
                  p = void 0 === d ? "y" : d,
                  v = "x" === l.axis ? h : p,
                  g = "x" === u.axis ? h : p,
                  m = [];
                for (i = n, a = n + r; i < a; ++i)
                  (s = t[i]),
                    ((o = {})[l.axis] = l.parse(re(s, v), i)),
                    m.push(Mr(re(s, g), o, u, i));
                return m;
              },
            },
            {
              key: "updateRangeFromParsed",
              value: function (e, t, r, i) {
                P(M(n.prototype), "updateRangeFromParsed", this).call(
                  this,
                  e,
                  t,
                  r,
                  i
                );
                var a = r._custom;
                a &&
                  t === this._cachedMeta.vScale &&
                  ((e.min = Math.min(e.min, a.min)),
                  (e.max = Math.max(e.max, a.max)));
              },
            },
            {
              key: "getMaxOverflow",
              value: function () {
                return 0;
              },
            },
            {
              key: "getLabelAndValue",
              value: function (e) {
                var t = this._cachedMeta,
                  n = t.iScale,
                  r = t.vScale,
                  i = this.getParsed(e),
                  a = i._custom,
                  o = Pr(a)
                    ? "[" + a.start + ", " + a.end + "]"
                    : "" + r.getLabelForValue(i[r.axis]);
                return { label: "" + n.getLabelForValue(i[n.axis]), value: o };
              },
            },
            {
              key: "initialize",
              value: function () {
                (this.enableOptionSharing = !0),
                  P(M(n.prototype), "initialize", this).call(this),
                  (this._cachedMeta.stack = this.getDataset().stack);
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this._cachedMeta;
                this.updateElements(t.data, 0, t.data.length, e);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                for (
                  var i = "reset" === r,
                    a = this.index,
                    o = this._cachedMeta.vScale,
                    s = o.getBasePixel(),
                    l = o.isHorizontal(),
                    u = this._getRuler(),
                    c = this._getSharedOptions(t, r),
                    f = c.sharedOptions,
                    h = c.includeOptions,
                    d = t;
                  d < t + n;
                  d++
                ) {
                  var p = this.getParsed(d),
                    v =
                      i || B(p[o.axis])
                        ? { base: s, head: s }
                        : this._calculateBarValuePixels(d),
                    g = this._calculateBarIndexPixels(d, u),
                    m = (p._stacks || {})[o.axis],
                    y = {
                      horizontal: l,
                      base: v.base,
                      enableBorderRadius:
                        !m || Pr(p._custom) || a === m._top || a === m._bottom,
                      x: l ? v.head : g.center,
                      y: l ? g.center : v.head,
                      height: l ? g.size : Math.abs(v.size),
                      width: l ? Math.abs(v.size) : g.size,
                    };
                  h &&
                    (y.options =
                      f ||
                      this.resolveDataElementOptions(
                        d,
                        e[d].active ? "active" : r
                      ));
                  var b = y.options || e[d].options;
                  Cr(y, b, m, a),
                    Lr(y, b, u.ratio),
                    this.updateElement(e[d], d, y, r);
                }
              },
            },
            {
              key: "_getStacks",
              value: function (e, t) {
                var n,
                  r = this._cachedMeta.iScale,
                  i = r
                    .getMatchingVisibleMetas(this._type)
                    .filter(function (e) {
                      return e.controller.options.grouped;
                    }),
                  a = r.options.stacked,
                  o = [],
                  s = function (e) {
                    var n = e.controller.getParsed(t),
                      r = n && n[e.vScale.axis];
                    if (B(r) || isNaN(r)) return !0;
                  },
                  l = N(i);
                try {
                  for (l.s(); !(n = l.n()).done; ) {
                    var u = n.value;
                    if (
                      (void 0 === t || !s(u)) &&
                      ((!1 === a ||
                        -1 === o.indexOf(u.stack) ||
                        (void 0 === a && void 0 === u.stack)) &&
                        o.push(u.stack),
                      u.index === e)
                    )
                      break;
                  }
                } catch (c) {
                  l.e(c);
                } finally {
                  l.f();
                }
                return o.length || o.push(void 0), o;
              },
            },
            {
              key: "_getStackCount",
              value: function (e) {
                return this._getStacks(void 0, e).length;
              },
            },
            {
              key: "_getStackIndex",
              value: function (e, t, n) {
                var r = this._getStacks(e, n),
                  i = void 0 !== t ? r.indexOf(t) : -1;
                return -1 === i ? r.length - 1 : i;
              },
            },
            {
              key: "_getRuler",
              value: function () {
                var e,
                  t,
                  n = this.options,
                  r = this._cachedMeta,
                  i = r.iScale,
                  a = [];
                for (e = 0, t = r.data.length; e < t; ++e)
                  a.push(i.getPixelForValue(this.getParsed(e)[i.axis], e));
                var o = n.barThickness;
                return {
                  min: o || Sr(r),
                  pixels: a,
                  start: i._startPixel,
                  end: i._endPixel,
                  stackCount: this._getStackCount(),
                  scale: i,
                  grouped: n.grouped,
                  ratio: o ? 1 : n.categoryPercentage * n.barPercentage,
                };
              },
            },
            {
              key: "_calculateBarValuePixels",
              value: function (e) {
                var t,
                  n,
                  r = this._cachedMeta,
                  i = r.vScale,
                  a = r._stacked,
                  o = this.options,
                  s = o.base,
                  l = o.minBarLength,
                  u = s || 0,
                  c = this.getParsed(e),
                  f = c._custom,
                  h = Pr(f),
                  d = c[i.axis],
                  p = 0,
                  v = a ? this.applyStack(i, c, a) : d;
                v !== d && ((p = v - d), (v = d)),
                  h &&
                    ((d = f.barStart),
                    (v = f.barEnd - f.barStart),
                    0 !== d && me(d) !== me(f.barEnd) && (p = 0),
                    (p += d));
                var g = B(s) || h ? p : s,
                  m = i.getPixelForValue(g);
                if (
                  ((n =
                    (t = this.chart.getDataVisibility(e)
                      ? i.getPixelForValue(p + v)
                      : m) - m),
                  Math.abs(n) < l)
                ) {
                  (n =
                    (function (e, t, n) {
                      return 0 !== e
                        ? me(e)
                        : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
                    })(n, i, u) * l),
                    d === u && (m -= n / 2);
                  var y = i.getPixelForDecimal(0),
                    b = i.getPixelForDecimal(1),
                    x = Math.min(y, b),
                    k = Math.max(y, b);
                  t = (m = Math.max(Math.min(m, k), x)) + n;
                }
                if (m === i.getPixelForValue(u)) {
                  var w = (me(n) * i.getLineWidthForValue(u)) / 2;
                  (m += w), (n -= w);
                }
                return { size: n, base: m, head: t, center: t + n / 2 };
              },
            },
            {
              key: "_calculateBarIndexPixels",
              value: function (e, t) {
                var n,
                  r,
                  i = t.scale,
                  a = this.options,
                  o = a.skipNull,
                  s = $(a.maxBarThickness, 1 / 0);
                if (t.grouped) {
                  var l = o ? this._getStackCount(e) : t.stackCount,
                    u =
                      "flex" === a.barThickness
                        ? (function (e, t, n, r) {
                            var i = t.pixels,
                              a = i[e],
                              o = e > 0 ? i[e - 1] : null,
                              s = e < i.length - 1 ? i[e + 1] : null,
                              l = n.categoryPercentage;
                            null === o &&
                              (o = a - (null === s ? t.end - t.start : s - a)),
                              null === s && (s = a + a - o);
                            var u = a - ((a - Math.min(o, s)) / 2) * l;
                            return {
                              chunk: ((Math.abs(s - o) / 2) * l) / r,
                              ratio: n.barPercentage,
                              start: u,
                            };
                          })(e, t, a, l)
                        : (function (e, t, n, r) {
                            var i,
                              a,
                              o = n.barThickness;
                            return (
                              B(o)
                                ? ((i = t.min * n.categoryPercentage),
                                  (a = n.barPercentage))
                                : ((i = o * r), (a = 1)),
                              {
                                chunk: i / r,
                                ratio: a,
                                start: t.pixels[e] - i / 2,
                              }
                            );
                          })(e, t, a, l),
                    c = this._getStackIndex(
                      this.index,
                      this._cachedMeta.stack,
                      o ? e : void 0
                    );
                  (n = u.start + u.chunk * c + u.chunk / 2),
                    (r = Math.min(s, u.chunk * u.ratio));
                } else
                  (n = i.getPixelForValue(this.getParsed(e)[i.axis], e)),
                    (r = Math.min(s, t.min * t.ratio));
                return { base: n - r / 2, head: n + r / 2, center: n, size: r };
              },
            },
            {
              key: "draw",
              value: function () {
                for (
                  var e = this._cachedMeta,
                    t = e.vScale,
                    n = e.data,
                    r = n.length,
                    i = 0;
                  i < r;
                  ++i
                )
                  null !== this.getParsed(i)[t.axis] && n[i].draw(this._ctx);
              },
            },
          ]),
          n
        );
      })(_r);
      (Ir.id = "bar"),
        (Ir.defaults = {
          datasetElementType: !1,
          dataElementType: "bar",
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "base", "width", "height"],
            },
          },
        }),
        (Ir.overrides = {
          scales: {
            _index_: { type: "category", offset: !0, grid: { offset: !0 } },
            _value_: { type: "linear", beginAtZero: !0 },
          },
        });
      var Dr = (function (e) {
        O(n, e);
        var t = D(n);
        function n() {
          return j(this, n), t.apply(this, arguments);
        }
        return (
          R(n, [
            {
              key: "initialize",
              value: function () {
                (this.enableOptionSharing = !0),
                  P(M(n.prototype), "initialize", this).call(this);
              },
            },
            {
              key: "parsePrimitiveData",
              value: function (e, t, r, i) {
                for (
                  var a = P(M(n.prototype), "parsePrimitiveData", this).call(
                      this,
                      e,
                      t,
                      r,
                      i
                    ),
                    o = 0;
                  o < a.length;
                  o++
                )
                  a[o]._custom = this.resolveDataElementOptions(o + r).radius;
                return a;
              },
            },
            {
              key: "parseArrayData",
              value: function (e, t, r, i) {
                for (
                  var a = P(M(n.prototype), "parseArrayData", this).call(
                      this,
                      e,
                      t,
                      r,
                      i
                    ),
                    o = 0;
                  o < a.length;
                  o++
                ) {
                  var s = t[r + o];
                  a[o]._custom = $(
                    s[2],
                    this.resolveDataElementOptions(o + r).radius
                  );
                }
                return a;
              },
            },
            {
              key: "parseObjectData",
              value: function (e, t, r, i) {
                for (
                  var a = P(M(n.prototype), "parseObjectData", this).call(
                      this,
                      e,
                      t,
                      r,
                      i
                    ),
                    o = 0;
                  o < a.length;
                  o++
                ) {
                  var s = t[r + o];
                  a[o]._custom = $(
                    s && s.r && +s.r,
                    this.resolveDataElementOptions(o + r).radius
                  );
                }
                return a;
              },
            },
            {
              key: "getMaxOverflow",
              value: function () {
                for (
                  var e = this._cachedMeta.data, t = 0, n = e.length - 1;
                  n >= 0;
                  --n
                )
                  t = Math.max(
                    t,
                    e[n].size(this.resolveDataElementOptions(n)) / 2
                  );
                return t > 0 && t;
              },
            },
            {
              key: "getLabelAndValue",
              value: function (e) {
                var t = this._cachedMeta,
                  n = t.xScale,
                  r = t.yScale,
                  i = this.getParsed(e),
                  a = n.getLabelForValue(i.x),
                  o = r.getLabelForValue(i.y),
                  s = i._custom;
                return {
                  label: t.label,
                  value: "(" + a + ", " + o + (s ? ", " + s : "") + ")",
                };
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this._cachedMeta.data;
                this.updateElements(t, 0, t.length, e);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                for (
                  var i = "reset" === r,
                    a = this._cachedMeta,
                    o = a.iScale,
                    s = a.vScale,
                    l = this._getSharedOptions(t, r),
                    u = l.sharedOptions,
                    c = l.includeOptions,
                    f = o.axis,
                    h = s.axis,
                    d = t;
                  d < t + n;
                  d++
                ) {
                  var p = e[d],
                    v = !i && this.getParsed(d),
                    g = {},
                    m = (g[f] = i
                      ? o.getPixelForDecimal(0.5)
                      : o.getPixelForValue(v[f])),
                    y = (g[h] = i
                      ? s.getBasePixel()
                      : s.getPixelForValue(v[h]));
                  (g.skip = isNaN(m) || isNaN(y)),
                    c &&
                      ((g.options =
                        u ||
                        this.resolveDataElementOptions(
                          d,
                          p.active ? "active" : r
                        )),
                      i && (g.options.radius = 0)),
                    this.updateElement(p, d, g, r);
                }
              },
            },
            {
              key: "resolveDataElementOptions",
              value: function (e, t) {
                var r = this.getParsed(e),
                  i = P(M(n.prototype), "resolveDataElementOptions", this).call(
                    this,
                    e,
                    t
                  );
                i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
                var a = i.radius;
                return (
                  "active" !== t && (i.radius = 0),
                  (i.radius += $(r && r._custom, a)),
                  i
                );
              },
            },
          ]),
          n
        );
      })(_r);
      (Dr.id = "bubble"),
        (Dr.defaults = {
          datasetElementType: !1,
          dataElementType: "point",
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "borderWidth", "radius"],
            },
          },
        }),
        (Dr.overrides = {
          scales: { x: { type: "linear" }, y: { type: "linear" } },
          plugins: {
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
              },
            },
          },
        });
      var Nr = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e, r) {
          var i;
          return (
            j(this, n),
            ((i = t.call(this, e, r)).enableOptionSharing = !0),
            (i.innerRadius = void 0),
            (i.outerRadius = void 0),
            (i.offsetX = void 0),
            (i.offsetY = void 0),
            i
          );
        }
        return (
          R(n, [
            { key: "linkScales", value: function () {} },
            {
              key: "parse",
              value: function (e, t) {
                var n = this.getDataset().data,
                  r = this._cachedMeta;
                if (!1 === this._parsing) r._parsed = n;
                else {
                  var i,
                    a,
                    o = function (e) {
                      return +n[e];
                    };
                  if (W(n[e])) {
                    var s = this._parsing.key,
                      l = void 0 === s ? "value" : s;
                    o = function (e) {
                      return +re(n[e], l);
                    };
                  }
                  for (i = e, a = e + t; i < a; ++i) r._parsed[i] = o(i);
                }
              },
            },
            {
              key: "_getRotation",
              value: function () {
                return we(this.options.rotation - 90);
              },
            },
            {
              key: "_getCircumference",
              value: function () {
                return we(this.options.circumference);
              },
            },
            {
              key: "_getRotationExtents",
              value: function () {
                for (
                  var e = ue, t = -ue, n = 0;
                  n < this.chart.data.datasets.length;
                  ++n
                )
                  if (this.chart.isDatasetVisible(n)) {
                    var r = this.chart.getDatasetMeta(n).controller,
                      i = r._getRotation(),
                      a = r._getCircumference();
                    (e = Math.min(e, i)), (t = Math.max(t, i + a));
                  }
                return { rotation: e, circumference: t - e };
              },
            },
            {
              key: "update",
              value: function (e) {
                var t,
                  n,
                  r = this.chart.chartArea,
                  i = this._cachedMeta,
                  a = i.data,
                  o =
                    this.getMaxBorderWidth() +
                    this.getMaxOffset(a) +
                    this.options.spacing,
                  s = Math.max((Math.min(r.width, r.height) - o) / 2, 0),
                  l = Math.min(
                    ((t = this.options.cutout),
                    (n = s),
                    "string" === typeof t && t.endsWith("%")
                      ? parseFloat(t) / 100
                      : t / n),
                    1
                  ),
                  u = this._getRingWeight(this.index),
                  c = this._getRotationExtents(),
                  f = c.circumference,
                  h = (function (e, t, n) {
                    var r = 1,
                      i = 1,
                      a = 0,
                      o = 0;
                    if (t < ue) {
                      var s = e,
                        l = s + t,
                        u = Math.cos(s),
                        c = Math.sin(s),
                        f = Math.cos(l),
                        h = Math.sin(l),
                        d = function (e, t, r) {
                          return Oe(e, s, l, !0)
                            ? 1
                            : Math.max(t, t * n, r, r * n);
                        },
                        p = function (e, t, r) {
                          return Oe(e, s, l, !0)
                            ? -1
                            : Math.min(t, t * n, r, r * n);
                        },
                        v = d(0, u, f),
                        g = d(de, c, h),
                        m = p(le, u, f),
                        y = p(le + de, c, h);
                      (r = (v - m) / 2),
                        (i = (g - y) / 2),
                        (a = -(v + m) / 2),
                        (o = -(g + y) / 2);
                    }
                    return { ratioX: r, ratioY: i, offsetX: a, offsetY: o };
                  })(c.rotation, f, l),
                  d = h.ratioX,
                  p = h.ratioY,
                  v = h.offsetX,
                  g = h.offsetY,
                  m = (r.width - o) / d,
                  y = (r.height - o) / p,
                  b = Math.max(Math.min(m, y) / 2, 0),
                  x = Y(this.options.radius, b),
                  k =
                    (x - Math.max(x * l, 0)) /
                    this._getVisibleDatasetWeightTotal();
                (this.offsetX = v * x),
                  (this.offsetY = g * x),
                  (i.total = this.calculateTotal()),
                  (this.outerRadius =
                    x - k * this._getRingWeightOffset(this.index)),
                  (this.innerRadius = Math.max(this.outerRadius - k * u, 0)),
                  this.updateElements(a, 0, a.length, e);
              },
            },
            {
              key: "_circumference",
              value: function (e, t) {
                var n = this.options,
                  r = this._cachedMeta,
                  i = this._getCircumference();
                return (t && n.animation.animateRotate) ||
                  !this.chart.getDataVisibility(e) ||
                  null === r._parsed[e] ||
                  r.data[e].hidden
                  ? 0
                  : this.calculateCircumference((r._parsed[e] * i) / ue);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                var i,
                  a = "reset" === r,
                  o = this.chart,
                  s = o.chartArea,
                  l = o.options.animation,
                  u = (s.left + s.right) / 2,
                  c = (s.top + s.bottom) / 2,
                  f = a && l.animateScale,
                  h = f ? 0 : this.innerRadius,
                  d = f ? 0 : this.outerRadius,
                  p = this._getSharedOptions(t, r),
                  v = p.sharedOptions,
                  g = p.includeOptions,
                  m = this._getRotation();
                for (i = 0; i < t; ++i) m += this._circumference(i, a);
                for (i = t; i < t + n; ++i) {
                  var y = this._circumference(i, a),
                    b = e[i],
                    x = {
                      x: u + this.offsetX,
                      y: c + this.offsetY,
                      startAngle: m,
                      endAngle: m + y,
                      circumference: y,
                      outerRadius: d,
                      innerRadius: h,
                    };
                  g &&
                    (x.options =
                      v ||
                      this.resolveDataElementOptions(
                        i,
                        b.active ? "active" : r
                      )),
                    (m += y),
                    this.updateElement(b, i, x, r);
                }
              },
            },
            {
              key: "calculateTotal",
              value: function () {
                var e,
                  t = this._cachedMeta,
                  n = t.data,
                  r = 0;
                for (e = 0; e < n.length; e++) {
                  var i = t._parsed[e];
                  null === i ||
                    isNaN(i) ||
                    !this.chart.getDataVisibility(e) ||
                    n[e].hidden ||
                    (r += Math.abs(i));
                }
                return r;
              },
            },
            {
              key: "calculateCircumference",
              value: function (e) {
                var t = this._cachedMeta.total;
                return t > 0 && !isNaN(e) ? ue * (Math.abs(e) / t) : 0;
              },
            },
            {
              key: "getLabelAndValue",
              value: function (e) {
                var t = this._cachedMeta,
                  n = this.chart,
                  r = n.data.labels || [],
                  i = qn(t._parsed[e], n.options.locale);
                return { label: r[e] || "", value: i };
              },
            },
            {
              key: "getMaxBorderWidth",
              value: function (e) {
                var t,
                  n,
                  r,
                  i,
                  a,
                  o = 0,
                  s = this.chart;
                if (!e)
                  for (t = 0, n = s.data.datasets.length; t < n; ++t)
                    if (s.isDatasetVisible(t)) {
                      (e = (r = s.getDatasetMeta(t)).data), (i = r.controller);
                      break;
                    }
                if (!e) return 0;
                for (t = 0, n = e.length; t < n; ++t)
                  "inner" !==
                    (a = i.resolveDataElementOptions(t)).borderAlign &&
                    (o = Math.max(
                      o,
                      a.borderWidth || 0,
                      a.hoverBorderWidth || 0
                    ));
                return o;
              },
            },
            {
              key: "getMaxOffset",
              value: function (e) {
                for (var t = 0, n = 0, r = e.length; n < r; ++n) {
                  var i = this.resolveDataElementOptions(n);
                  t = Math.max(t, i.offset || 0, i.hoverOffset || 0);
                }
                return t;
              },
            },
            {
              key: "_getRingWeightOffset",
              value: function (e) {
                for (var t = 0, n = 0; n < e; ++n)
                  this.chart.isDatasetVisible(n) &&
                    (t += this._getRingWeight(n));
                return t;
              },
            },
            {
              key: "_getRingWeight",
              value: function (e) {
                return Math.max($(this.chart.data.datasets[e].weight, 1), 0);
              },
            },
            {
              key: "_getVisibleDatasetWeightTotal",
              value: function () {
                return (
                  this._getRingWeightOffset(this.chart.data.datasets.length) ||
                  1
                );
              },
            },
          ]),
          n
        );
      })(_r);
      (Nr.id = "doughnut"),
        (Nr.defaults = {
          datasetElementType: !1,
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !1 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "circumference",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "startAngle",
                "x",
                "y",
                "offset",
                "borderWidth",
                "spacing",
              ],
            },
          },
          cutout: "50%",
          rotation: 0,
          circumference: 360,
          radius: "100%",
          spacing: 0,
          indexAxis: "r",
        }),
        (Nr.descriptors = {
          _scriptable: function (e) {
            return "spacing" !== e;
          },
          _indexable: function (e) {
            return "spacing" !== e;
          },
        }),
        (Nr.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels: function (e) {
                  var t = e.data;
                  if (t.labels.length && t.datasets.length) {
                    var n = e.legend.options.labels.pointStyle;
                    return t.labels.map(function (t, r) {
                      var i = e.getDatasetMeta(0).controller.getStyle(r);
                      return {
                        text: t,
                        fillStyle: i.backgroundColor,
                        strokeStyle: i.borderColor,
                        lineWidth: i.borderWidth,
                        pointStyle: n,
                        hidden: !e.getDataVisibility(r),
                        index: r,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick: function (e, t, n) {
                n.chart.toggleDataVisibility(t.index), n.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
                label: function (e) {
                  var t = e.label,
                    n = ": " + e.formattedValue;
                  return V(t) ? ((t = t.slice())[0] += n) : (t += n), t;
                },
              },
            },
          },
        });
      var jr = (function (e) {
        O(n, e);
        var t = D(n);
        function n() {
          return j(this, n), t.apply(this, arguments);
        }
        return (
          R(n, [
            {
              key: "initialize",
              value: function () {
                (this.enableOptionSharing = !0),
                  (this.supportsDecimation = !0),
                  P(M(n.prototype), "initialize", this).call(this);
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this._cachedMeta,
                  n = t.dataset,
                  r = t.data,
                  i = void 0 === r ? [] : r,
                  a = t._dataset,
                  o = this.chart._animationsDisabled,
                  s = We(t, i, o),
                  l = s.start,
                  u = s.count;
                (this._drawStart = l),
                  (this._drawCount = u),
                  He(t) && ((l = 0), (u = i.length)),
                  (n._chart = this.chart),
                  (n._datasetIndex = this.index),
                  (n._decimated = !!a._decimated),
                  (n.points = i);
                var c = this.resolveDatasetElementOptions(e);
                this.options.showLine || (c.borderWidth = 0),
                  (c.segment = this.options.segment),
                  this.updateElement(
                    n,
                    void 0,
                    { animated: !o, options: c },
                    e
                  ),
                  this.updateElements(i, l, u, e);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                for (
                  var i = "reset" === r,
                    a = this._cachedMeta,
                    o = a.iScale,
                    s = a.vScale,
                    l = a._stacked,
                    u = a._dataset,
                    c = this._getSharedOptions(t, r),
                    f = c.sharedOptions,
                    h = c.includeOptions,
                    d = o.axis,
                    p = s.axis,
                    v = this.options,
                    g = v.spanGaps,
                    m = v.segment,
                    y = be(g) ? g : Number.POSITIVE_INFINITY,
                    b = this.chart._animationsDisabled || i || "none" === r,
                    x = t > 0 && this.getParsed(t - 1),
                    k = t;
                  k < t + n;
                  ++k
                ) {
                  var w = e[k],
                    _ = this.getParsed(k),
                    S = b ? w : {},
                    M = B(_[p]),
                    E = (S[d] = o.getPixelForValue(_[d], k)),
                    P = (S[p] =
                      i || M
                        ? s.getBasePixel()
                        : s.getPixelForValue(
                            l ? this.applyStack(s, _, l) : _[p],
                            k
                          ));
                  (S.skip = isNaN(E) || isNaN(P) || M),
                    (S.stop = k > 0 && Math.abs(_[d] - x[d]) > y),
                    m && ((S.parsed = _), (S.raw = u.data[k])),
                    h &&
                      (S.options =
                        f ||
                        this.resolveDataElementOptions(
                          k,
                          w.active ? "active" : r
                        )),
                    b || this.updateElement(w, k, S, r),
                    (x = _);
                }
              },
            },
            {
              key: "getMaxOverflow",
              value: function () {
                var e = this._cachedMeta,
                  t = e.dataset,
                  n = (t.options && t.options.borderWidth) || 0,
                  r = e.data || [];
                if (!r.length) return n;
                var i = r[0].size(this.resolveDataElementOptions(0)),
                  a = r[r.length - 1].size(
                    this.resolveDataElementOptions(r.length - 1)
                  );
                return Math.max(n, i, a) / 2;
              },
            },
            {
              key: "draw",
              value: function () {
                var e = this._cachedMeta;
                e.dataset.updateControlPoints(
                  this.chart.chartArea,
                  e.iScale.axis
                ),
                  P(M(n.prototype), "draw", this).call(this);
              },
            },
          ]),
          n
        );
      })(_r);
      (jr.id = "line"),
        (jr.defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          showLine: !0,
          spanGaps: !1,
        }),
        (jr.overrides = {
          scales: {
            _index_: { type: "category" },
            _value_: { type: "linear" },
          },
        });
      var zr = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e, r) {
          var i;
          return (
            j(this, n),
            ((i = t.call(this, e, r)).innerRadius = void 0),
            (i.outerRadius = void 0),
            i
          );
        }
        return (
          R(n, [
            {
              key: "getLabelAndValue",
              value: function (e) {
                var t = this._cachedMeta,
                  n = this.chart,
                  r = n.data.labels || [],
                  i = qn(t._parsed[e].r, n.options.locale);
                return { label: r[e] || "", value: i };
              },
            },
            {
              key: "parseObjectData",
              value: function (e, t, n, r) {
                return _n.bind(this)(e, t, n, r);
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this._cachedMeta.data;
                this._updateRadius(), this.updateElements(t, 0, t.length, e);
              },
            },
            {
              key: "getMinMax",
              value: function () {
                var e = this,
                  t = this._cachedMeta,
                  n = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY,
                  };
                return (
                  t.data.forEach(function (t, r) {
                    var i = e.getParsed(r).r;
                    !isNaN(i) &&
                      e.chart.getDataVisibility(r) &&
                      (i < n.min && (n.min = i), i > n.max && (n.max = i));
                  }),
                  n
                );
              },
            },
            {
              key: "_updateRadius",
              value: function () {
                var e = this.chart,
                  t = e.chartArea,
                  n = e.options,
                  r = Math.min(t.right - t.left, t.bottom - t.top),
                  i = Math.max(r / 2, 0),
                  a =
                    (i -
                      Math.max(
                        n.cutoutPercentage ? (i / 100) * n.cutoutPercentage : 1,
                        0
                      )) /
                    e.getVisibleDatasetCount();
                (this.outerRadius = i - a * this.index),
                  (this.innerRadius = this.outerRadius - a);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                var i,
                  a = "reset" === r,
                  o = this.chart,
                  s = o.options.animation,
                  l = this._cachedMeta.rScale,
                  u = l.xCenter,
                  c = l.yCenter,
                  f = l.getIndexAngle(0) - 0.5 * le,
                  h = f,
                  d = 360 / this.countVisibleElements();
                for (i = 0; i < t; ++i) h += this._computeAngle(i, r, d);
                for (i = t; i < t + n; i++) {
                  var p = e[i],
                    v = h,
                    g = h + this._computeAngle(i, r, d),
                    m = o.getDataVisibility(i)
                      ? l.getDistanceFromCenterForValue(this.getParsed(i).r)
                      : 0;
                  (h = g),
                    a &&
                      (s.animateScale && (m = 0),
                      s.animateRotate && (v = g = f));
                  var y = {
                    x: u,
                    y: c,
                    innerRadius: 0,
                    outerRadius: m,
                    startAngle: v,
                    endAngle: g,
                    options: this.resolveDataElementOptions(
                      i,
                      p.active ? "active" : r
                    ),
                  };
                  this.updateElement(p, i, y, r);
                }
              },
            },
            {
              key: "countVisibleElements",
              value: function () {
                var e = this,
                  t = this._cachedMeta,
                  n = 0;
                return (
                  t.data.forEach(function (t, r) {
                    !isNaN(e.getParsed(r).r) &&
                      e.chart.getDataVisibility(r) &&
                      n++;
                  }),
                  n
                );
              },
            },
            {
              key: "_computeAngle",
              value: function (e, t, n) {
                return this.chart.getDataVisibility(e)
                  ? we(this.resolveDataElementOptions(e, t).angle || n)
                  : 0;
              },
            },
          ]),
          n
        );
      })(_r);
      (zr.id = "polarArea"),
        (zr.defaults = {
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !0 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
              ],
            },
          },
          indexAxis: "r",
          startAngle: 0,
        }),
        (zr.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels: function (e) {
                  var t = e.data;
                  if (t.labels.length && t.datasets.length) {
                    var n = e.legend.options.labels.pointStyle;
                    return t.labels.map(function (t, r) {
                      var i = e.getDatasetMeta(0).controller.getStyle(r);
                      return {
                        text: t,
                        fillStyle: i.backgroundColor,
                        strokeStyle: i.borderColor,
                        lineWidth: i.borderWidth,
                        pointStyle: n,
                        hidden: !e.getDataVisibility(r),
                        index: r,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick: function (e, t, n) {
                n.chart.toggleDataVisibility(t.index), n.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
                label: function (e) {
                  return (
                    e.chart.data.labels[e.dataIndex] + ": " + e.formattedValue
                  );
                },
              },
            },
          },
          scales: {
            r: {
              type: "radialLinear",
              angleLines: { display: !1 },
              beginAtZero: !0,
              grid: { circular: !0 },
              pointLabels: { display: !1 },
              startAngle: 0,
            },
          },
        });
      var Rr = (function (e) {
        O(n, e);
        var t = D(n);
        function n() {
          return j(this, n), t.apply(this, arguments);
        }
        return R(n);
      })(Nr);
      (Rr.id = "pie"),
        (Rr.defaults = {
          cutout: 0,
          rotation: 0,
          circumference: 360,
          radius: "100%",
        });
      var Ar = (function (e) {
        O(n, e);
        var t = D(n);
        function n() {
          return j(this, n), t.apply(this, arguments);
        }
        return (
          R(n, [
            {
              key: "getLabelAndValue",
              value: function (e) {
                var t = this._cachedMeta.vScale,
                  n = this.getParsed(e);
                return {
                  label: t.getLabels()[e],
                  value: "" + t.getLabelForValue(n[t.axis]),
                };
              },
            },
            {
              key: "parseObjectData",
              value: function (e, t, n, r) {
                return _n.bind(this)(e, t, n, r);
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this._cachedMeta,
                  n = t.dataset,
                  r = t.data || [],
                  i = t.iScale.getLabels();
                if (((n.points = r), "resize" !== e)) {
                  var a = this.resolveDatasetElementOptions(e);
                  this.options.showLine || (a.borderWidth = 0);
                  var o = {
                    _loop: !0,
                    _fullLoop: i.length === r.length,
                    options: a,
                  };
                  this.updateElement(n, void 0, o, e);
                }
                this.updateElements(r, 0, r.length, e);
              },
            },
            {
              key: "updateElements",
              value: function (e, t, n, r) {
                for (
                  var i = this._cachedMeta.rScale, a = "reset" === r, o = t;
                  o < t + n;
                  o++
                ) {
                  var s = e[o],
                    l = this.resolveDataElementOptions(
                      o,
                      s.active ? "active" : r
                    ),
                    u = i.getPointPositionForValue(o, this.getParsed(o).r),
                    c = a ? i.xCenter : u.x,
                    f = a ? i.yCenter : u.y,
                    h = {
                      x: c,
                      y: f,
                      angle: u.angle,
                      skip: isNaN(c) || isNaN(f),
                      options: l,
                    };
                  this.updateElement(s, o, h, r);
                }
              },
            },
          ]),
          n
        );
      })(_r);
      (Ar.id = "radar"),
        (Ar.defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          indexAxis: "r",
          showLine: !0,
          elements: { line: { fill: "start" } },
        }),
        (Ar.overrides = {
          aspectRatio: 1,
          scales: { r: { type: "radialLinear" } },
        });
      var Fr = (function () {
        function e() {
          j(this, e),
            (this.x = void 0),
            (this.y = void 0),
            (this.active = !1),
            (this.options = void 0),
            (this.$animations = void 0);
        }
        return (
          R(e, [
            {
              key: "tooltipPosition",
              value: function (e) {
                var t = this.getProps(["x", "y"], e);
                return { x: t.x, y: t.y };
              },
            },
            {
              key: "hasValue",
              value: function () {
                return be(this.x) && be(this.y);
              },
            },
            {
              key: "getProps",
              value: function (e, t) {
                var n = this,
                  r = this.$animations;
                if (!t || !r) return this;
                var i = {};
                return (
                  e.forEach(function (e) {
                    i[e] = r[e] && r[e].active() ? r[e]._to : n[e];
                  }),
                  i
                );
              },
            },
          ]),
          e
        );
      })();
      (Fr.defaults = {}), (Fr.defaultRoutes = void 0);
      var Br = {
        values: function (e) {
          return V(e) ? e : "" + e;
        },
        numeric: function (e, t, n) {
          if (0 === e) return "0";
          var r,
            i = this.chart.options.locale,
            a = e;
          if (n.length > 1) {
            var o = Math.max(
              Math.abs(n[0].value),
              Math.abs(n[n.length - 1].value)
            );
            (o < 1e-4 || o > 1e15) && (r = "scientific"),
              (a = (function (e, t) {
                var n =
                  t.length > 3
                    ? t[2].value - t[1].value
                    : t[1].value - t[0].value;
                Math.abs(n) >= 1 &&
                  e !== Math.floor(e) &&
                  (n = e - Math.floor(e));
                return n;
              })(e, n));
          }
          var s = ge(Math.abs(a)),
            l = Math.max(Math.min(-1 * Math.floor(s), 20), 0),
            u = {
              notation: r,
              minimumFractionDigits: l,
              maximumFractionDigits: l,
            };
          return Object.assign(u, this.options.ticks.format), qn(e, i, u);
        },
        logarithmic: function (e, t, n) {
          if (0 === e) return "0";
          var r = e / Math.pow(10, Math.floor(ge(e)));
          return 1 === r || 2 === r || 5 === r
            ? Br.numeric.call(this, e, t, n)
            : "";
        },
      };
      var Vr = { formatters: Br };
      function Wr(e, t) {
        var n = e.options.ticks,
          r =
            n.maxTicksLimit ||
            (function (e) {
              var t = e.options.offset,
                n = e._tickSize(),
                r = e._length / n + (t ? 0 : 1),
                i = e._maxLength / n;
              return Math.floor(Math.min(r, i));
            })(e),
          i = n.major.enabled
            ? (function (e) {
                var t,
                  n,
                  r = [];
                for (t = 0, n = e.length; t < n; t++) e[t].major && r.push(t);
                return r;
              })(t)
            : [],
          a = i.length,
          o = i[0],
          s = i[a - 1],
          l = [];
        if (a > r)
          return (
            (function (e, t, n, r) {
              var i,
                a = 0,
                o = n[0];
              for (r = Math.ceil(r), i = 0; i < e.length; i++)
                i === o && (t.push(e[i]), (o = n[++a * r]));
            })(t, l, i, a / r),
            l
          );
        var u = (function (e, t, n) {
          var r = (function (e) {
              var t,
                n,
                r = e.length;
              if (r < 2) return !1;
              for (n = e[0], t = 1; t < r; ++t)
                if (e[t] - e[t - 1] !== n) return !1;
              return n;
            })(e),
            i = t.length / n;
          if (!r) return Math.max(i, 1);
          for (
            var a = (function (e) {
                var t,
                  n = [],
                  r = Math.sqrt(e);
                for (t = 1; t < r; t++)
                  e % t === 0 && (n.push(t), n.push(e / t));
                return (
                  r === (0 | r) && n.push(r),
                  n
                    .sort(function (e, t) {
                      return e - t;
                    })
                    .pop(),
                  n
                );
              })(r),
              o = 0,
              s = a.length - 1;
            o < s;
            o++
          ) {
            var l = a[o];
            if (l > i) return l;
          }
          return Math.max(i, 1);
        })(i, t, r);
        if (a > 0) {
          var c,
            f,
            h = a > 1 ? Math.round((s - o) / (a - 1)) : null;
          for (Hr(t, l, u, B(h) ? 0 : o - h, o), c = 0, f = a - 1; c < f; c++)
            Hr(t, l, u, i[c], i[c + 1]);
          return Hr(t, l, u, s, B(h) ? t.length : s + h), l;
        }
        return Hr(t, l, u), l;
      }
      function Hr(e, t, n, r, i) {
        var a,
          o,
          s,
          l = $(r, 0),
          u = Math.min($(i, e.length), e.length),
          c = 0;
        for (
          n = Math.ceil(n), i && (n = (a = i - r) / Math.floor(a / n)), s = l;
          s < 0;

        )
          c++, (s = Math.round(l + c * n));
        for (o = Math.max(l, 0); o < u; o++)
          o === s && (t.push(e[o]), c++, (s = Math.round(l + c * n)));
      }
      zt.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: function (e, t) {
            return t.lineWidth;
          },
          tickColor: function (e, t) {
            return t.color;
          },
          offset: !1,
          borderDash: [],
          borderDashOffset: 0,
          borderWidth: 1,
        },
        title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: "",
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: Vr.formatters.values,
          minor: {},
          major: {},
          align: "center",
          crossAlign: "near",
          showLabelBackdrop: !1,
          backdropColor: "rgba(255, 255, 255, 0.75)",
          backdropPadding: 2,
        },
      }),
        zt.route("scale.ticks", "color", "", "color"),
        zt.route("scale.grid", "color", "", "borderColor"),
        zt.route("scale.grid", "borderColor", "", "borderColor"),
        zt.route("scale.title", "color", "", "color"),
        zt.describe("scale", {
          _fallback: !1,
          _scriptable: function (e) {
            return (
              !e.startsWith("before") &&
              !e.startsWith("after") &&
              "callback" !== e &&
              "parser" !== e
            );
          },
          _indexable: function (e) {
            return "borderDash" !== e && "tickBorderDash" !== e;
          },
        }),
        zt.describe("scales", { _fallback: "scale" }),
        zt.describe("scale.ticks", {
          _scriptable: function (e) {
            return "backdropPadding" !== e && "callback" !== e;
          },
          _indexable: function (e) {
            return "backdropPadding" !== e;
          },
        });
      var Ur = function (e, t, n) {
        return "top" === t || "left" === t ? e[t] + n : e[t] - n;
      };
      function $r(e, t) {
        for (var n = [], r = e.length / t, i = e.length, a = 0; a < i; a += r)
          n.push(e[Math.floor(a)]);
        return n;
      }
      function Yr(e, t, n) {
        var r,
          i = e.ticks.length,
          a = Math.min(t, i - 1),
          o = e._startPixel,
          s = e._endPixel,
          l = 1e-6,
          u = e.getPixelForTick(a);
        if (
          !(
            n &&
            ((r =
              1 === i
                ? Math.max(u - o, s - u)
                : 0 === t
                ? (e.getPixelForTick(1) - u) / 2
                : (u - e.getPixelForTick(a - 1)) / 2),
            (u += a < t ? r : -r) < o - l || u > s + l)
          )
        )
          return u;
      }
      function Qr(e) {
        return e.drawTicks ? e.tickLength : 0;
      }
      function qr(e, t) {
        if (!e.display) return 0;
        var n = on(e.font, t),
          r = an(e.padding);
        return (V(e.text) ? e.text.length : 1) * n.lineHeight + r.height;
      }
      function Kr(e, t, n) {
        var r = Be(e);
        return (
          ((n && "right" !== t) || (!n && "right" === t)) &&
            (r = (function (e) {
              return "left" === e ? "right" : "right" === e ? "left" : e;
            })(r)),
          r
        );
      }
      var Xr = (function (e) {
          O(n, e);
          var t = D(n);
          function n(e) {
            var r;
            return (
              j(this, n),
              ((r = t.call(this)).id = e.id),
              (r.type = e.type),
              (r.options = void 0),
              (r.ctx = e.ctx),
              (r.chart = e.chart),
              (r.top = void 0),
              (r.bottom = void 0),
              (r.left = void 0),
              (r.right = void 0),
              (r.width = void 0),
              (r.height = void 0),
              (r._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
              (r.maxWidth = void 0),
              (r.maxHeight = void 0),
              (r.paddingTop = void 0),
              (r.paddingBottom = void 0),
              (r.paddingLeft = void 0),
              (r.paddingRight = void 0),
              (r.axis = void 0),
              (r.labelRotation = void 0),
              (r.min = void 0),
              (r.max = void 0),
              (r._range = void 0),
              (r.ticks = []),
              (r._gridLineItems = null),
              (r._labelItems = null),
              (r._labelSizes = null),
              (r._length = 0),
              (r._maxLength = 0),
              (r._longestTextCache = {}),
              (r._startPixel = void 0),
              (r._endPixel = void 0),
              (r._reversePixels = !1),
              (r._userMax = void 0),
              (r._userMin = void 0),
              (r._suggestedMax = void 0),
              (r._suggestedMin = void 0),
              (r._ticksLength = 0),
              (r._borderValue = 0),
              (r._cache = {}),
              (r._dataLimitsCached = !1),
              (r.$context = void 0),
              r
            );
          }
          return (
            R(n, [
              {
                key: "init",
                value: function (e) {
                  (this.options = e.setContext(this.getContext())),
                    (this.axis = e.axis),
                    (this._userMin = this.parse(e.min)),
                    (this._userMax = this.parse(e.max)),
                    (this._suggestedMin = this.parse(e.suggestedMin)),
                    (this._suggestedMax = this.parse(e.suggestedMax));
                },
              },
              {
                key: "parse",
                value: function (e, t) {
                  return e;
                },
              },
              {
                key: "getUserBounds",
                value: function () {
                  var e = this._userMin,
                    t = this._userMax,
                    n = this._suggestedMin,
                    r = this._suggestedMax;
                  return (
                    (e = U(e, Number.POSITIVE_INFINITY)),
                    (t = U(t, Number.NEGATIVE_INFINITY)),
                    (n = U(n, Number.POSITIVE_INFINITY)),
                    (r = U(r, Number.NEGATIVE_INFINITY)),
                    {
                      min: U(e, n),
                      max: U(t, r),
                      minDefined: H(e),
                      maxDefined: H(t),
                    }
                  );
                },
              },
              {
                key: "getMinMax",
                value: function (e) {
                  var t,
                    n = this.getUserBounds(),
                    r = n.min,
                    i = n.max,
                    a = n.minDefined,
                    o = n.maxDefined;
                  if (a && o) return { min: r, max: i };
                  for (
                    var s = this.getMatchingVisibleMetas(), l = 0, u = s.length;
                    l < u;
                    ++l
                  )
                    (t = s[l].controller.getMinMax(this, e)),
                      a || (r = Math.min(r, t.min)),
                      o || (i = Math.max(i, t.max));
                  return {
                    min: U(
                      (r = o && r > i ? i : r),
                      U((i = a && r > i ? r : i), r)
                    ),
                    max: U(i, U(r, i)),
                  };
                },
              },
              {
                key: "getPadding",
                value: function () {
                  return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0,
                  };
                },
              },
              {
                key: "getTicks",
                value: function () {
                  return this.ticks;
                },
              },
              {
                key: "getLabels",
                value: function () {
                  var e = this.chart.data;
                  return (
                    this.options.labels ||
                    (this.isHorizontal() ? e.xLabels : e.yLabels) ||
                    e.labels ||
                    []
                  );
                },
              },
              {
                key: "beforeLayout",
                value: function () {
                  (this._cache = {}), (this._dataLimitsCached = !1);
                },
              },
              {
                key: "beforeUpdate",
                value: function () {
                  Q(this.options.beforeUpdate, [this]);
                },
              },
              {
                key: "update",
                value: function (e, t, n) {
                  var r = this.options,
                    i = r.beginAtZero,
                    a = r.grace,
                    o = r.ticks,
                    s = o.sampleSize;
                  this.beforeUpdate(),
                    (this.maxWidth = e),
                    (this.maxHeight = t),
                    (this._margins = n =
                      Object.assign(
                        { left: 0, right: 0, top: 0, bottom: 0 },
                        n
                      )),
                    (this.ticks = null),
                    (this._labelSizes = null),
                    (this._gridLineItems = null),
                    (this._labelItems = null),
                    this.beforeSetDimensions(),
                    this.setDimensions(),
                    this.afterSetDimensions(),
                    (this._maxLength = this.isHorizontal()
                      ? this.width + n.left + n.right
                      : this.height + n.top + n.bottom),
                    this._dataLimitsCached ||
                      (this.beforeDataLimits(),
                      this.determineDataLimits(),
                      this.afterDataLimits(),
                      (this._range = (function (e, t, n) {
                        var r = e.min,
                          i = e.max,
                          a = Y(t, (i - r) / 2),
                          o = function (e, t) {
                            return n && 0 === e ? 0 : e + t;
                          };
                        return { min: o(r, -Math.abs(a)), max: o(i, a) };
                      })(this, a, i)),
                      (this._dataLimitsCached = !0)),
                    this.beforeBuildTicks(),
                    (this.ticks = this.buildTicks() || []),
                    this.afterBuildTicks();
                  var l = s < this.ticks.length;
                  this._convertTicksToLabels(
                    l ? $r(this.ticks, s) : this.ticks
                  ),
                    this.configure(),
                    this.beforeCalculateLabelRotation(),
                    this.calculateLabelRotation(),
                    this.afterCalculateLabelRotation(),
                    o.display &&
                      (o.autoSkip || "auto" === o.source) &&
                      ((this.ticks = Wr(this, this.ticks)),
                      (this._labelSizes = null),
                      this.afterAutoSkip()),
                    l && this._convertTicksToLabels(this.ticks),
                    this.beforeFit(),
                    this.fit(),
                    this.afterFit(),
                    this.afterUpdate();
                },
              },
              {
                key: "configure",
                value: function () {
                  var e,
                    t,
                    n = this.options.reverse;
                  this.isHorizontal()
                    ? ((e = this.left), (t = this.right))
                    : ((e = this.top), (t = this.bottom), (n = !n)),
                    (this._startPixel = e),
                    (this._endPixel = t),
                    (this._reversePixels = n),
                    (this._length = t - e),
                    (this._alignToPixels = this.options.alignToPixels);
                },
              },
              {
                key: "afterUpdate",
                value: function () {
                  Q(this.options.afterUpdate, [this]);
                },
              },
              {
                key: "beforeSetDimensions",
                value: function () {
                  Q(this.options.beforeSetDimensions, [this]);
                },
              },
              {
                key: "setDimensions",
                value: function () {
                  this.isHorizontal()
                    ? ((this.width = this.maxWidth),
                      (this.left = 0),
                      (this.right = this.width))
                    : ((this.height = this.maxHeight),
                      (this.top = 0),
                      (this.bottom = this.height)),
                    (this.paddingLeft = 0),
                    (this.paddingTop = 0),
                    (this.paddingRight = 0),
                    (this.paddingBottom = 0);
                },
              },
              {
                key: "afterSetDimensions",
                value: function () {
                  Q(this.options.afterSetDimensions, [this]);
                },
              },
              {
                key: "_callHooks",
                value: function (e) {
                  this.chart.notifyPlugins(e, this.getContext()),
                    Q(this.options[e], [this]);
                },
              },
              {
                key: "beforeDataLimits",
                value: function () {
                  this._callHooks("beforeDataLimits");
                },
              },
              { key: "determineDataLimits", value: function () {} },
              {
                key: "afterDataLimits",
                value: function () {
                  this._callHooks("afterDataLimits");
                },
              },
              {
                key: "beforeBuildTicks",
                value: function () {
                  this._callHooks("beforeBuildTicks");
                },
              },
              {
                key: "buildTicks",
                value: function () {
                  return [];
                },
              },
              {
                key: "afterBuildTicks",
                value: function () {
                  this._callHooks("afterBuildTicks");
                },
              },
              {
                key: "beforeTickToLabelConversion",
                value: function () {
                  Q(this.options.beforeTickToLabelConversion, [this]);
                },
              },
              {
                key: "generateTickLabels",
                value: function (e) {
                  var t,
                    n,
                    r,
                    i = this.options.ticks;
                  for (t = 0, n = e.length; t < n; t++)
                    (r = e[t]).label = Q(i.callback, [r.value, t, e], this);
                },
              },
              {
                key: "afterTickToLabelConversion",
                value: function () {
                  Q(this.options.afterTickToLabelConversion, [this]);
                },
              },
              {
                key: "beforeCalculateLabelRotation",
                value: function () {
                  Q(this.options.beforeCalculateLabelRotation, [this]);
                },
              },
              {
                key: "calculateLabelRotation",
                value: function () {
                  var e,
                    t,
                    n,
                    r = this.options,
                    i = r.ticks,
                    a = this.ticks.length,
                    o = i.minRotation || 0,
                    s = i.maxRotation,
                    l = o;
                  if (
                    !this._isVisible() ||
                    !i.display ||
                    o >= s ||
                    a <= 1 ||
                    !this.isHorizontal()
                  )
                    this.labelRotation = o;
                  else {
                    var u = this._getLabelSizes(),
                      c = u.widest.width,
                      f = u.highest.height,
                      h = Te(this.chart.width - c, 0, this.maxWidth);
                    c + 6 > (e = r.offset ? this.maxWidth / a : h / (a - 1)) &&
                      ((e = h / (a - (r.offset ? 0.5 : 1))),
                      (t =
                        this.maxHeight -
                        Qr(r.grid) -
                        i.padding -
                        qr(r.title, this.chart.options.font)),
                      (n = Math.sqrt(c * c + f * f)),
                      (l = _e(
                        Math.min(
                          Math.asin(Te((u.highest.height + 6) / e, -1, 1)),
                          Math.asin(Te(t / n, -1, 1)) -
                            Math.asin(Te(f / n, -1, 1))
                        )
                      )),
                      (l = Math.max(o, Math.min(s, l)))),
                      (this.labelRotation = l);
                  }
                },
              },
              {
                key: "afterCalculateLabelRotation",
                value: function () {
                  Q(this.options.afterCalculateLabelRotation, [this]);
                },
              },
              { key: "afterAutoSkip", value: function () {} },
              {
                key: "beforeFit",
                value: function () {
                  Q(this.options.beforeFit, [this]);
                },
              },
              {
                key: "fit",
                value: function () {
                  var e = { width: 0, height: 0 },
                    t = this.chart,
                    n = this.options,
                    r = n.ticks,
                    i = n.title,
                    a = n.grid,
                    o = this._isVisible(),
                    s = this.isHorizontal();
                  if (o) {
                    var l = qr(i, t.options.font);
                    if (
                      (s
                        ? ((e.width = this.maxWidth), (e.height = Qr(a) + l))
                        : ((e.height = this.maxHeight), (e.width = Qr(a) + l)),
                      r.display && this.ticks.length)
                    ) {
                      var u = this._getLabelSizes(),
                        c = u.first,
                        f = u.last,
                        h = u.widest,
                        d = u.highest,
                        p = 2 * r.padding,
                        v = we(this.labelRotation),
                        g = Math.cos(v),
                        m = Math.sin(v);
                      if (s) {
                        var y = r.mirror ? 0 : m * h.width + g * d.height;
                        e.height = Math.min(this.maxHeight, e.height + y + p);
                      } else {
                        var b = r.mirror ? 0 : g * h.width + m * d.height;
                        e.width = Math.min(this.maxWidth, e.width + b + p);
                      }
                      this._calculatePadding(c, f, m, g);
                    }
                  }
                  this._handleMargins(),
                    s
                      ? ((this.width = this._length =
                          t.width - this._margins.left - this._margins.right),
                        (this.height = e.height))
                      : ((this.width = e.width),
                        (this.height = this._length =
                          t.height - this._margins.top - this._margins.bottom));
                },
              },
              {
                key: "_calculatePadding",
                value: function (e, t, n, r) {
                  var i = this.options,
                    a = i.ticks,
                    o = a.align,
                    s = a.padding,
                    l = i.position,
                    u = 0 !== this.labelRotation,
                    c = "top" !== l && "x" === this.axis;
                  if (this.isHorizontal()) {
                    var f = this.getPixelForTick(0) - this.left,
                      h =
                        this.right -
                        this.getPixelForTick(this.ticks.length - 1),
                      d = 0,
                      p = 0;
                    u
                      ? c
                        ? ((d = r * e.width), (p = n * t.height))
                        : ((d = n * e.height), (p = r * t.width))
                      : "start" === o
                      ? (p = t.width)
                      : "end" === o
                      ? (d = e.width)
                      : "inner" !== o && ((d = e.width / 2), (p = t.width / 2)),
                      (this.paddingLeft = Math.max(
                        ((d - f + s) * this.width) / (this.width - f),
                        0
                      )),
                      (this.paddingRight = Math.max(
                        ((p - h + s) * this.width) / (this.width - h),
                        0
                      ));
                  } else {
                    var v = t.height / 2,
                      g = e.height / 2;
                    "start" === o
                      ? ((v = 0), (g = e.height))
                      : "end" === o && ((v = t.height), (g = 0)),
                      (this.paddingTop = v + s),
                      (this.paddingBottom = g + s);
                  }
                },
              },
              {
                key: "_handleMargins",
                value: function () {
                  this._margins &&
                    ((this._margins.left = Math.max(
                      this.paddingLeft,
                      this._margins.left
                    )),
                    (this._margins.top = Math.max(
                      this.paddingTop,
                      this._margins.top
                    )),
                    (this._margins.right = Math.max(
                      this.paddingRight,
                      this._margins.right
                    )),
                    (this._margins.bottom = Math.max(
                      this.paddingBottom,
                      this._margins.bottom
                    )));
                },
              },
              {
                key: "afterFit",
                value: function () {
                  Q(this.options.afterFit, [this]);
                },
              },
              {
                key: "isHorizontal",
                value: function () {
                  var e = this.options,
                    t = e.axis,
                    n = e.position;
                  return "top" === n || "bottom" === n || "x" === t;
                },
              },
              {
                key: "isFullSize",
                value: function () {
                  return this.options.fullSize;
                },
              },
              {
                key: "_convertTicksToLabels",
                value: function (e) {
                  var t, n;
                  for (
                    this.beforeTickToLabelConversion(),
                      this.generateTickLabels(e),
                      t = 0,
                      n = e.length;
                    t < n;
                    t++
                  )
                    B(e[t].label) && (e.splice(t, 1), n--, t--);
                  this.afterTickToLabelConversion();
                },
              },
              {
                key: "_getLabelSizes",
                value: function () {
                  var e = this._labelSizes;
                  if (!e) {
                    var t = this.options.ticks.sampleSize,
                      n = this.ticks;
                    t < n.length && (n = $r(n, t)),
                      (this._labelSizes = e =
                        this._computeLabelSizes(n, n.length));
                  }
                  return e;
                },
              },
              {
                key: "_computeLabelSizes",
                value: function (e, t) {
                  var n,
                    r,
                    i,
                    a,
                    o,
                    s,
                    l,
                    u,
                    c,
                    f,
                    h,
                    d = this.ctx,
                    p = this._longestTextCache,
                    v = [],
                    g = [],
                    m = 0,
                    y = 0;
                  for (n = 0; n < t; ++n) {
                    if (
                      ((a = e[n].label),
                      (o = this._resolveTickFontOptions(n)),
                      (d.font = s = o.string),
                      (l = p[s] = p[s] || { data: {}, gc: [] }),
                      (u = o.lineHeight),
                      (c = f = 0),
                      B(a) || V(a))
                    ) {
                      if (V(a))
                        for (r = 0, i = a.length; r < i; ++r)
                          B((h = a[r])) ||
                            V(h) ||
                            ((c = Rt(d, l.data, l.gc, c, h)), (f += u));
                    } else (c = Rt(d, l.data, l.gc, c, a)), (f = u);
                    v.push(c),
                      g.push(f),
                      (m = Math.max(c, m)),
                      (y = Math.max(f, y));
                  }
                  !(function (e, t) {
                    q(e, function (e) {
                      var n,
                        r = e.gc,
                        i = r.length / 2;
                      if (i > t) {
                        for (n = 0; n < i; ++n) delete e.data[r[n]];
                        r.splice(0, i);
                      }
                    });
                  })(p, t);
                  var b = v.indexOf(m),
                    x = g.indexOf(y),
                    k = function (e) {
                      return { width: v[e] || 0, height: g[e] || 0 };
                    };
                  return {
                    first: k(0),
                    last: k(t - 1),
                    widest: k(b),
                    highest: k(x),
                    widths: v,
                    heights: g,
                  };
                },
              },
              {
                key: "getLabelForValue",
                value: function (e) {
                  return e;
                },
              },
              {
                key: "getPixelForValue",
                value: function (e, t) {
                  return NaN;
                },
              },
              { key: "getValueForPixel", value: function (e) {} },
              {
                key: "getPixelForTick",
                value: function (e) {
                  var t = this.ticks;
                  return e < 0 || e > t.length - 1
                    ? null
                    : this.getPixelForValue(t[e].value);
                },
              },
              {
                key: "getPixelForDecimal",
                value: function (e) {
                  this._reversePixels && (e = 1 - e);
                  var t = this._startPixel + e * this._length;
                  return Te(
                    this._alignToPixels ? Ft(this.chart, t, 0) : t,
                    -32768,
                    32767
                  );
                },
              },
              {
                key: "getDecimalForPixel",
                value: function (e) {
                  var t = (e - this._startPixel) / this._length;
                  return this._reversePixels ? 1 - t : t;
                },
              },
              {
                key: "getBasePixel",
                value: function () {
                  return this.getPixelForValue(this.getBaseValue());
                },
              },
              {
                key: "getBaseValue",
                value: function () {
                  var e = this.min,
                    t = this.max;
                  return e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0;
                },
              },
              {
                key: "getContext",
                value: function (e) {
                  var t = this.ticks || [];
                  if (e >= 0 && e < t.length) {
                    var n = t[e];
                    return (
                      n.$context ||
                      (n.$context = (function (e, t, n) {
                        return ln(e, { tick: n, index: t, type: "tick" });
                      })(this.getContext(), e, n))
                    );
                  }
                  return (
                    this.$context ||
                    (this.$context = ln(this.chart.getContext(), {
                      scale: this,
                      type: "scale",
                    }))
                  );
                },
              },
              {
                key: "_tickSize",
                value: function () {
                  var e = this.options.ticks,
                    t = we(this.labelRotation),
                    n = Math.abs(Math.cos(t)),
                    r = Math.abs(Math.sin(t)),
                    i = this._getLabelSizes(),
                    a = e.autoSkipPadding || 0,
                    o = i ? i.widest.width + a : 0,
                    s = i ? i.highest.height + a : 0;
                  return this.isHorizontal()
                    ? s * n > o * r
                      ? o / n
                      : s / r
                    : s * r < o * n
                    ? s / n
                    : o / r;
                },
              },
              {
                key: "_isVisible",
                value: function () {
                  var e = this.options.display;
                  return "auto" !== e
                    ? !!e
                    : this.getMatchingVisibleMetas().length > 0;
                },
              },
              {
                key: "_computeGridLineItems",
                value: function (e) {
                  var t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    s,
                    l,
                    u,
                    c,
                    f,
                    h,
                    d = this.axis,
                    p = this.chart,
                    v = this.options,
                    g = v.grid,
                    m = v.position,
                    y = g.offset,
                    b = this.isHorizontal(),
                    x = this.ticks.length + (y ? 1 : 0),
                    k = Qr(g),
                    w = [],
                    _ = g.setContext(this.getContext()),
                    S = _.drawBorder ? _.borderWidth : 0,
                    M = S / 2,
                    E = function (e) {
                      return Ft(p, e, S);
                    };
                  if ("top" === m)
                    (t = E(this.bottom)),
                      (o = this.bottom - k),
                      (l = t - M),
                      (c = E(e.top) + M),
                      (h = e.bottom);
                  else if ("bottom" === m)
                    (t = E(this.top)),
                      (c = e.top),
                      (h = E(e.bottom) - M),
                      (o = t + M),
                      (l = this.top + k);
                  else if ("left" === m)
                    (t = E(this.right)),
                      (a = this.right - k),
                      (s = t - M),
                      (u = E(e.left) + M),
                      (f = e.right);
                  else if ("right" === m)
                    (t = E(this.left)),
                      (u = e.left),
                      (f = E(e.right) - M),
                      (a = t + M),
                      (s = this.left + k);
                  else if ("x" === d) {
                    if ("center" === m) t = E((e.top + e.bottom) / 2 + 0.5);
                    else if (W(m)) {
                      var P = Object.keys(m)[0],
                        C = m[P];
                      t = E(this.chart.scales[P].getPixelForValue(C));
                    }
                    (c = e.top), (h = e.bottom), (l = (o = t + M) + k);
                  } else if ("y" === d) {
                    if ("center" === m) t = E((e.left + e.right) / 2);
                    else if (W(m)) {
                      var O = Object.keys(m)[0],
                        T = m[O];
                      t = E(this.chart.scales[O].getPixelForValue(T));
                    }
                    (s = (a = t - M) - k), (u = e.left), (f = e.right);
                  }
                  var L = $(v.ticks.maxTicksLimit, x),
                    I = Math.max(1, Math.ceil(x / L));
                  for (n = 0; n < x; n += I) {
                    var D = g.setContext(this.getContext(n)),
                      N = D.lineWidth,
                      j = D.color,
                      z = D.borderDash || [],
                      R = D.borderDashOffset,
                      A = D.tickWidth,
                      F = D.tickColor,
                      B = D.tickBorderDash || [],
                      V = D.tickBorderDashOffset;
                    void 0 !== (r = Yr(this, n, y)) &&
                      ((i = Ft(p, r, N)),
                      b ? (a = s = u = f = i) : (o = l = c = h = i),
                      w.push({
                        tx1: a,
                        ty1: o,
                        tx2: s,
                        ty2: l,
                        x1: u,
                        y1: c,
                        x2: f,
                        y2: h,
                        width: N,
                        color: j,
                        borderDash: z,
                        borderDashOffset: R,
                        tickWidth: A,
                        tickColor: F,
                        tickBorderDash: B,
                        tickBorderDashOffset: V,
                      }));
                  }
                  return (this._ticksLength = x), (this._borderValue = t), w;
                },
              },
              {
                key: "_computeLabelItems",
                value: function (e) {
                  var t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    s,
                    l,
                    u,
                    c,
                    f,
                    h = this.axis,
                    d = this.options,
                    p = d.position,
                    v = d.ticks,
                    g = this.isHorizontal(),
                    m = this.ticks,
                    y = v.align,
                    b = v.crossAlign,
                    x = v.padding,
                    k = v.mirror,
                    w = Qr(d.grid),
                    _ = w + x,
                    S = k ? -x : _,
                    M = -we(this.labelRotation),
                    E = [],
                    P = "middle";
                  if ("top" === p)
                    (a = this.bottom - S), (o = this._getXAxisLabelAlignment());
                  else if ("bottom" === p)
                    (a = this.top + S), (o = this._getXAxisLabelAlignment());
                  else if ("left" === p) {
                    var C = this._getYAxisLabelAlignment(w);
                    (o = C.textAlign), (i = C.x);
                  } else if ("right" === p) {
                    var O = this._getYAxisLabelAlignment(w);
                    (o = O.textAlign), (i = O.x);
                  } else if ("x" === h) {
                    if ("center" === p) a = (e.top + e.bottom) / 2 + _;
                    else if (W(p)) {
                      var T = Object.keys(p)[0],
                        L = p[T];
                      a = this.chart.scales[T].getPixelForValue(L) + _;
                    }
                    o = this._getXAxisLabelAlignment();
                  } else if ("y" === h) {
                    if ("center" === p) i = (e.left + e.right) / 2 - _;
                    else if (W(p)) {
                      var I = Object.keys(p)[0],
                        D = p[I];
                      i = this.chart.scales[I].getPixelForValue(D);
                    }
                    o = this._getYAxisLabelAlignment(w).textAlign;
                  }
                  "y" === h &&
                    ("start" === y
                      ? (P = "top")
                      : "end" === y && (P = "bottom"));
                  var N = this._getLabelSizes();
                  for (t = 0, n = m.length; t < n; ++t) {
                    r = m[t].label;
                    var j = v.setContext(this.getContext(t));
                    (s = this.getPixelForTick(t) + v.labelOffset),
                      (u = (l = this._resolveTickFontOptions(t)).lineHeight);
                    var z = (c = V(r) ? r.length : 1) / 2,
                      R = j.color,
                      A = j.textStrokeColor,
                      F = j.textStrokeWidth,
                      B = o;
                    g
                      ? ((i = s),
                        "inner" === o &&
                          (B =
                            t === n - 1
                              ? this.options.reverse
                                ? "left"
                                : "right"
                              : 0 === t
                              ? this.options.reverse
                                ? "right"
                                : "left"
                              : "center"),
                        (f =
                          "top" === p
                            ? "near" === b || 0 !== M
                              ? -c * u + u / 2
                              : "center" === b
                              ? -N.highest.height / 2 - z * u + u
                              : -N.highest.height + u / 2
                            : "near" === b || 0 !== M
                            ? u / 2
                            : "center" === b
                            ? N.highest.height / 2 - z * u
                            : N.highest.height - c * u),
                        k && (f *= -1))
                      : ((a = s), (f = ((1 - c) * u) / 2));
                    var H = void 0;
                    if (j.showLabelBackdrop) {
                      var U = an(j.backdropPadding),
                        $ = N.heights[t],
                        Y = N.widths[t],
                        Q = a + f - U.top,
                        q = i - U.left;
                      switch (P) {
                        case "middle":
                          Q -= $ / 2;
                          break;
                        case "bottom":
                          Q -= $;
                      }
                      switch (o) {
                        case "center":
                          q -= Y / 2;
                          break;
                        case "right":
                          q -= Y;
                      }
                      H = {
                        left: q,
                        top: Q,
                        width: Y + U.width,
                        height: $ + U.height,
                        color: j.backdropColor,
                      };
                    }
                    E.push({
                      rotation: M,
                      label: r,
                      font: l,
                      color: R,
                      strokeColor: A,
                      strokeWidth: F,
                      textOffset: f,
                      textAlign: B,
                      textBaseline: P,
                      translation: [i, a],
                      backdrop: H,
                    });
                  }
                  return E;
                },
              },
              {
                key: "_getXAxisLabelAlignment",
                value: function () {
                  var e = this.options,
                    t = e.position,
                    n = e.ticks;
                  if (-we(this.labelRotation))
                    return "top" === t ? "left" : "right";
                  var r = "center";
                  return (
                    "start" === n.align
                      ? (r = "left")
                      : "end" === n.align
                      ? (r = "right")
                      : "inner" === n.align && (r = "inner"),
                    r
                  );
                },
              },
              {
                key: "_getYAxisLabelAlignment",
                value: function (e) {
                  var t,
                    n,
                    r = this.options,
                    i = r.position,
                    a = r.ticks,
                    o = a.crossAlign,
                    s = a.mirror,
                    l = a.padding,
                    u = e + l,
                    c = this._getLabelSizes().widest.width;
                  return (
                    "left" === i
                      ? s
                        ? ((n = this.right + l),
                          "near" === o
                            ? (t = "left")
                            : "center" === o
                            ? ((t = "center"), (n += c / 2))
                            : ((t = "right"), (n += c)))
                        : ((n = this.right - u),
                          "near" === o
                            ? (t = "right")
                            : "center" === o
                            ? ((t = "center"), (n -= c / 2))
                            : ((t = "left"), (n = this.left)))
                      : "right" === i
                      ? s
                        ? ((n = this.left + l),
                          "near" === o
                            ? (t = "right")
                            : "center" === o
                            ? ((t = "center"), (n -= c / 2))
                            : ((t = "left"), (n -= c)))
                        : ((n = this.left + u),
                          "near" === o
                            ? (t = "left")
                            : "center" === o
                            ? ((t = "center"), (n += c / 2))
                            : ((t = "right"), (n = this.right)))
                      : (t = "right"),
                    { textAlign: t, x: n }
                  );
                },
              },
              {
                key: "_computeLabelArea",
                value: function () {
                  if (!this.options.ticks.mirror) {
                    var e = this.chart,
                      t = this.options.position;
                    return "left" === t || "right" === t
                      ? {
                          top: 0,
                          left: this.left,
                          bottom: e.height,
                          right: this.right,
                        }
                      : "top" === t || "bottom" === t
                      ? {
                          top: this.top,
                          left: 0,
                          bottom: this.bottom,
                          right: e.width,
                        }
                      : void 0;
                  }
                },
              },
              {
                key: "drawBackground",
                value: function () {
                  var e = this.ctx,
                    t = this.options.backgroundColor,
                    n = this.left,
                    r = this.top,
                    i = this.width,
                    a = this.height;
                  t &&
                    (e.save(),
                    (e.fillStyle = t),
                    e.fillRect(n, r, i, a),
                    e.restore());
                },
              },
              {
                key: "getLineWidthForValue",
                value: function (e) {
                  var t = this.options.grid;
                  if (!this._isVisible() || !t.display) return 0;
                  var n = this.ticks.findIndex(function (t) {
                    return t.value === e;
                  });
                  return n >= 0
                    ? t.setContext(this.getContext(n)).lineWidth
                    : 0;
                },
              },
              {
                key: "drawGrid",
                value: function (e) {
                  var t,
                    n,
                    r = this.options.grid,
                    i = this.ctx,
                    a =
                      this._gridLineItems ||
                      (this._gridLineItems = this._computeGridLineItems(e)),
                    o = function (e, t, n) {
                      n.width &&
                        n.color &&
                        (i.save(),
                        (i.lineWidth = n.width),
                        (i.strokeStyle = n.color),
                        i.setLineDash(n.borderDash || []),
                        (i.lineDashOffset = n.borderDashOffset),
                        i.beginPath(),
                        i.moveTo(e.x, e.y),
                        i.lineTo(t.x, t.y),
                        i.stroke(),
                        i.restore());
                    };
                  if (r.display)
                    for (t = 0, n = a.length; t < n; ++t) {
                      var s = a[t];
                      r.drawOnChartArea &&
                        o({ x: s.x1, y: s.y1 }, { x: s.x2, y: s.y2 }, s),
                        r.drawTicks &&
                          o(
                            { x: s.tx1, y: s.ty1 },
                            { x: s.tx2, y: s.ty2 },
                            {
                              color: s.tickColor,
                              width: s.tickWidth,
                              borderDash: s.tickBorderDash,
                              borderDashOffset: s.tickBorderDashOffset,
                            }
                          );
                    }
                },
              },
              {
                key: "drawBorder",
                value: function () {
                  var e = this.chart,
                    t = this.ctx,
                    n = this.options.grid,
                    r = n.setContext(this.getContext()),
                    i = n.drawBorder ? r.borderWidth : 0;
                  if (i) {
                    var a,
                      o,
                      s,
                      l,
                      u = n.setContext(this.getContext(0)).lineWidth,
                      c = this._borderValue;
                    this.isHorizontal()
                      ? ((a = Ft(e, this.left, i) - i / 2),
                        (o = Ft(e, this.right, u) + u / 2),
                        (s = l = c))
                      : ((s = Ft(e, this.top, i) - i / 2),
                        (l = Ft(e, this.bottom, u) + u / 2),
                        (a = o = c)),
                      t.save(),
                      (t.lineWidth = r.borderWidth),
                      (t.strokeStyle = r.borderColor),
                      t.beginPath(),
                      t.moveTo(a, s),
                      t.lineTo(o, l),
                      t.stroke(),
                      t.restore();
                  }
                },
              },
              {
                key: "drawLabels",
                value: function (e) {
                  if (this.options.ticks.display) {
                    var t = this.ctx,
                      n = this._computeLabelArea();
                    n && Ut(t, n);
                    var r,
                      i,
                      a =
                        this._labelItems ||
                        (this._labelItems = this._computeLabelItems(e));
                    for (r = 0, i = a.length; r < i; ++r) {
                      var o = a[r],
                        s = o.font,
                        l = o.label;
                      o.backdrop &&
                        ((t.fillStyle = o.backdrop.color),
                        t.fillRect(
                          o.backdrop.left,
                          o.backdrop.top,
                          o.backdrop.width,
                          o.backdrop.height
                        )),
                        qt(t, l, 0, o.textOffset, s, o);
                    }
                    n && $t(t);
                  }
                },
              },
              {
                key: "drawTitle",
                value: function () {
                  var e = this.ctx,
                    t = this.options,
                    n = t.position,
                    r = t.title,
                    i = t.reverse;
                  if (r.display) {
                    var a = on(r.font),
                      o = an(r.padding),
                      s = r.align,
                      l = a.lineHeight / 2;
                    "bottom" === n || "center" === n || W(n)
                      ? ((l += o.bottom),
                        V(r.text) && (l += a.lineHeight * (r.text.length - 1)))
                      : (l += o.top);
                    var u = (function (e, t, n, r) {
                        var i,
                          a,
                          o,
                          s = e.top,
                          l = e.left,
                          u = e.bottom,
                          c = e.right,
                          f = e.chart,
                          h = f.chartArea,
                          d = f.scales,
                          p = 0,
                          v = u - s,
                          g = c - l;
                        if (e.isHorizontal()) {
                          if (((a = Ve(r, l, c)), W(n))) {
                            var m = Object.keys(n)[0],
                              y = n[m];
                            o = d[m].getPixelForValue(y) + v - t;
                          } else
                            o =
                              "center" === n
                                ? (h.bottom + h.top) / 2 + v - t
                                : Ur(e, n, t);
                          i = c - l;
                        } else {
                          if (W(n)) {
                            var b = Object.keys(n)[0],
                              x = n[b];
                            a = d[b].getPixelForValue(x) - g + t;
                          } else
                            a =
                              "center" === n
                                ? (h.left + h.right) / 2 - g + t
                                : Ur(e, n, t);
                          (o = Ve(r, u, s)), (p = "left" === n ? -de : de);
                        }
                        return {
                          titleX: a,
                          titleY: o,
                          maxWidth: i,
                          rotation: p,
                        };
                      })(this, l, n, s),
                      c = u.titleX,
                      f = u.titleY,
                      h = u.maxWidth,
                      d = u.rotation;
                    qt(e, r.text, 0, 0, a, {
                      color: r.color,
                      maxWidth: h,
                      rotation: d,
                      textAlign: Kr(s, n, i),
                      textBaseline: "middle",
                      translation: [c, f],
                    });
                  }
                },
              },
              {
                key: "draw",
                value: function (e) {
                  this._isVisible() &&
                    (this.drawBackground(),
                    this.drawGrid(e),
                    this.drawBorder(),
                    this.drawTitle(),
                    this.drawLabels(e));
                },
              },
              {
                key: "_layers",
                value: function () {
                  var e = this,
                    t = this.options,
                    r = (t.ticks && t.ticks.z) || 0,
                    i = $(t.grid && t.grid.z, -1);
                  return this._isVisible() && this.draw === n.prototype.draw
                    ? [
                        {
                          z: i,
                          draw: function (t) {
                            e.drawBackground(), e.drawGrid(t), e.drawTitle();
                          },
                        },
                        {
                          z: i + 1,
                          draw: function () {
                            e.drawBorder();
                          },
                        },
                        {
                          z: r,
                          draw: function (t) {
                            e.drawLabels(t);
                          },
                        },
                      ]
                    : [
                        {
                          z: r,
                          draw: function (t) {
                            e.draw(t);
                          },
                        },
                      ];
                },
              },
              {
                key: "getMatchingVisibleMetas",
                value: function (e) {
                  var t,
                    n,
                    r = this.chart.getSortedVisibleDatasetMetas(),
                    i = this.axis + "AxisID",
                    a = [];
                  for (t = 0, n = r.length; t < n; ++t) {
                    var o = r[t];
                    o[i] !== this.id || (e && o.type !== e) || a.push(o);
                  }
                  return a;
                },
              },
              {
                key: "_resolveTickFontOptions",
                value: function (e) {
                  return on(
                    this.options.ticks.setContext(this.getContext(e)).font
                  );
                },
              },
              {
                key: "_maxDigits",
                value: function () {
                  var e = this._resolveTickFontOptions(0).lineHeight;
                  return (this.isHorizontal() ? this.width : this.height) / e;
                },
              },
            ]),
            n
          );
        })(Fr),
        Gr = (function () {
          function e(t, n, r) {
            j(this, e),
              (this.type = t),
              (this.scope = n),
              (this.override = r),
              (this.items = Object.create(null));
          }
          return (
            R(e, [
              {
                key: "isForType",
                value: function (e) {
                  return Object.prototype.isPrototypeOf.call(
                    this.type.prototype,
                    e.prototype
                  );
                },
              },
              {
                key: "register",
                value: function (e) {
                  var t,
                    n = Object.getPrototypeOf(e);
                  (function (e) {
                    return "id" in e && "defaults" in e;
                  })(n) && (t = this.register(n));
                  var r = this.items,
                    i = e.id,
                    a = this.scope + "." + i;
                  if (!i) throw new Error("class does not have id: " + e);
                  return (
                    i in r ||
                      ((r[i] = e),
                      (function (e, t, n) {
                        var r = Z(Object.create(null), [
                          n ? zt.get(n) : {},
                          zt.get(t),
                          e.defaults,
                        ]);
                        zt.set(t, r),
                          e.defaultRoutes &&
                            (function (e, t) {
                              Object.keys(t).forEach(function (n) {
                                var r = n.split("."),
                                  i = r.pop(),
                                  a = [e].concat(r).join("."),
                                  o = t[n].split("."),
                                  s = o.pop(),
                                  l = o.join(".");
                                zt.route(a, i, l, s);
                              });
                            })(t, e.defaultRoutes);
                        e.descriptors && zt.describe(t, e.descriptors);
                      })(e, a, t),
                      this.override && zt.override(e.id, e.overrides)),
                    a
                  );
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this.items[e];
                },
              },
              {
                key: "unregister",
                value: function (e) {
                  var t = this.items,
                    n = e.id,
                    r = this.scope;
                  n in t && delete t[n],
                    r &&
                      n in zt[r] &&
                      (delete zt[r][n], this.override && delete Lt[n]);
                },
              },
            ]),
            e
          );
        })();
      var Jr = (function () {
          function e() {
            j(this, e),
              (this.controllers = new Gr(_r, "datasets", !0)),
              (this.elements = new Gr(Fr, "elements")),
              (this.plugins = new Gr(Object, "plugins")),
              (this.scales = new Gr(Xr, "scales")),
              (this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements,
              ]);
          }
          return (
            R(e, [
              {
                key: "add",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("register", t);
                },
              },
              {
                key: "remove",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("unregister", t);
                },
              },
              {
                key: "addControllers",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("register", t, this.controllers);
                },
              },
              {
                key: "addElements",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("register", t, this.elements);
                },
              },
              {
                key: "addPlugins",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("register", t, this.plugins);
                },
              },
              {
                key: "addScales",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("register", t, this.scales);
                },
              },
              {
                key: "getController",
                value: function (e) {
                  return this._get(e, this.controllers, "controller");
                },
              },
              {
                key: "getElement",
                value: function (e) {
                  return this._get(e, this.elements, "element");
                },
              },
              {
                key: "getPlugin",
                value: function (e) {
                  return this._get(e, this.plugins, "plugin");
                },
              },
              {
                key: "getScale",
                value: function (e) {
                  return this._get(e, this.scales, "scale");
                },
              },
              {
                key: "removeControllers",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("unregister", t, this.controllers);
                },
              },
              {
                key: "removeElements",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("unregister", t, this.elements);
                },
              },
              {
                key: "removePlugins",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("unregister", t, this.plugins);
                },
              },
              {
                key: "removeScales",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._each("unregister", t, this.scales);
                },
              },
              {
                key: "_each",
                value: function (e, t, n) {
                  var r = this;
                  x(t).forEach(function (t) {
                    var i = n || r._getRegistryForType(t);
                    n || i.isForType(t) || (i === r.plugins && t.id)
                      ? r._exec(e, i, t)
                      : q(t, function (t) {
                          var i = n || r._getRegistryForType(t);
                          r._exec(e, i, t);
                        });
                  });
                },
              },
              {
                key: "_exec",
                value: function (e, t, n) {
                  var r = ie(e);
                  Q(n["before" + r], [], n), t[e](n), Q(n["after" + r], [], n);
                },
              },
              {
                key: "_getRegistryForType",
                value: function (e) {
                  for (var t = 0; t < this._typedRegistries.length; t++) {
                    var n = this._typedRegistries[t];
                    if (n.isForType(e)) return n;
                  }
                  return this.plugins;
                },
              },
              {
                key: "_get",
                value: function (e, t, n) {
                  var r = t.get(e);
                  if (void 0 === r)
                    throw new Error(
                      '"' + e + '" is not a registered ' + n + "."
                    );
                  return r;
                },
              },
            ]),
            e
          );
        })(),
        Zr = new Jr(),
        ei = (function (e) {
          O(n, e);
          var t = D(n);
          function n() {
            return j(this, n), t.apply(this, arguments);
          }
          return (
            R(n, [
              {
                key: "update",
                value: function (e) {
                  var t = this._cachedMeta,
                    n = t.data,
                    r = void 0 === n ? [] : n,
                    i = this.chart._animationsDisabled,
                    a = We(t, r, i),
                    o = a.start,
                    s = a.count;
                  if (
                    ((this._drawStart = o),
                    (this._drawCount = s),
                    He(t) && ((o = 0), (s = r.length)),
                    this.options.showLine)
                  ) {
                    var l = t.dataset,
                      u = t._dataset;
                    (l._chart = this.chart),
                      (l._datasetIndex = this.index),
                      (l._decimated = !!u._decimated),
                      (l.points = r);
                    var c = this.resolveDatasetElementOptions(e);
                    (c.segment = this.options.segment),
                      this.updateElement(
                        l,
                        void 0,
                        { animated: !i, options: c },
                        e
                      );
                  }
                  this.updateElements(r, o, s, e);
                },
              },
              {
                key: "addElements",
                value: function () {
                  var e = this.options.showLine;
                  !this.datasetElementType &&
                    e &&
                    (this.datasetElementType = Zr.getElement("line")),
                    P(M(n.prototype), "addElements", this).call(this);
                },
              },
              {
                key: "updateElements",
                value: function (e, t, n, r) {
                  for (
                    var i = "reset" === r,
                      a = this._cachedMeta,
                      o = a.iScale,
                      s = a.vScale,
                      l = a._stacked,
                      u = a._dataset,
                      c = this.resolveDataElementOptions(t, r),
                      f = this.getSharedOptions(c),
                      h = this.includeOptions(r, f),
                      d = o.axis,
                      p = s.axis,
                      v = this.options,
                      g = v.spanGaps,
                      m = v.segment,
                      y = be(g) ? g : Number.POSITIVE_INFINITY,
                      b = this.chart._animationsDisabled || i || "none" === r,
                      x = t > 0 && this.getParsed(t - 1),
                      k = t;
                    k < t + n;
                    ++k
                  ) {
                    var w = e[k],
                      _ = this.getParsed(k),
                      S = b ? w : {},
                      M = B(_[p]),
                      E = (S[d] = o.getPixelForValue(_[d], k)),
                      P = (S[p] =
                        i || M
                          ? s.getBasePixel()
                          : s.getPixelForValue(
                              l ? this.applyStack(s, _, l) : _[p],
                              k
                            ));
                    (S.skip = isNaN(E) || isNaN(P) || M),
                      (S.stop = k > 0 && Math.abs(_[d] - x[d]) > y),
                      m && ((S.parsed = _), (S.raw = u.data[k])),
                      h &&
                        (S.options =
                          f ||
                          this.resolveDataElementOptions(
                            k,
                            w.active ? "active" : r
                          )),
                      b || this.updateElement(w, k, S, r),
                      (x = _);
                  }
                  this.updateSharedOptions(f, r, c);
                },
              },
              {
                key: "getMaxOverflow",
                value: function () {
                  var e = this._cachedMeta,
                    t = e.data || [];
                  if (!this.options.showLine) {
                    for (var n = 0, r = t.length - 1; r >= 0; --r)
                      n = Math.max(
                        n,
                        t[r].size(this.resolveDataElementOptions(r)) / 2
                      );
                    return n > 0 && n;
                  }
                  var i = e.dataset,
                    a = (i.options && i.options.borderWidth) || 0;
                  if (!t.length) return a;
                  var o = t[0].size(this.resolveDataElementOptions(0)),
                    s = t[t.length - 1].size(
                      this.resolveDataElementOptions(t.length - 1)
                    );
                  return Math.max(a, o, s) / 2;
                },
              },
            ]),
            n
          );
        })(_r);
      (ei.id = "scatter"),
        (ei.defaults = {
          datasetElementType: !1,
          dataElementType: "point",
          showLine: !1,
          fill: !1,
        }),
        (ei.overrides = {
          interaction: { mode: "point" },
          plugins: {
            tooltip: {
              callbacks: {
                title: function () {
                  return "";
                },
                label: function (e) {
                  return "(" + e.label + ", " + e.formattedValue + ")";
                },
              },
            },
          },
          scales: { x: { type: "linear" }, y: { type: "linear" } },
        });
      var ti = Object.freeze({
        __proto__: null,
        BarController: Ir,
        BubbleController: Dr,
        DoughnutController: Nr,
        LineController: jr,
        PolarAreaController: zr,
        PieController: Rr,
        RadarController: Ar,
        ScatterController: ei,
      });
      function ni() {
        throw new Error(
          "This method is not implemented: Check that a complete date adapter is provided."
        );
      }
      var ri = (function () {
        function e(t) {
          j(this, e), (this.options = t || {});
        }
        return (
          R(e, [
            { key: "init", value: function (e) {} },
            {
              key: "formats",
              value: function () {
                return ni();
              },
            },
            {
              key: "parse",
              value: function (e, t) {
                return ni();
              },
            },
            {
              key: "format",
              value: function (e, t) {
                return ni();
              },
            },
            {
              key: "add",
              value: function (e, t, n) {
                return ni();
              },
            },
            {
              key: "diff",
              value: function (e, t, n) {
                return ni();
              },
            },
            {
              key: "startOf",
              value: function (e, t, n) {
                return ni();
              },
            },
            {
              key: "endOf",
              value: function (e, t) {
                return ni();
              },
            },
          ]),
          e
        );
      })();
      ri.override = function (e) {
        Object.assign(ri.prototype, e);
      };
      var ii = { _date: ri };
      function ai(e, t, n, r) {
        var i = e.controller,
          a = e.data,
          o = e._sorted,
          s = i._cachedMeta.iScale;
        if (s && t === s.axis && "r" !== t && o && a.length) {
          var l = s._reversePixels ? Ne : De;
          if (!r) return l(a, t, n);
          if (i._sharedOptions) {
            var u = a[0],
              c = "function" === typeof u.getRange && u.getRange(t);
            if (c) {
              var f = l(a, t, n - c),
                h = l(a, t, n + c);
              return { lo: f.lo, hi: h.hi };
            }
          }
        }
        return { lo: 0, hi: a.length - 1 };
      }
      function oi(e, t, n, r, i) {
        for (
          var a = e.getSortedVisibleDatasetMetas(),
            o = n[t],
            s = 0,
            l = a.length;
          s < l;
          ++s
        )
          for (
            var u = a[s],
              c = u.index,
              f = u.data,
              h = ai(a[s], t, o, i),
              d = h.lo,
              p = h.hi,
              v = d;
            v <= p;
            ++v
          ) {
            var g = f[v];
            g.skip || r(g, c, v);
          }
      }
      function si(e, t, n, r, i) {
        var a = [];
        if (!i && !e.isPointInArea(t)) return a;
        return (
          oi(
            e,
            n,
            t,
            function (n, o, s) {
              (i || Ht(n, e.chartArea, 0)) &&
                n.inRange(t.x, t.y, r) &&
                a.push({ element: n, datasetIndex: o, index: s });
            },
            !0
          ),
          a
        );
      }
      function li(e, t, n, r, i, a) {
        var o = [],
          s = (function (e) {
            var t = -1 !== e.indexOf("x"),
              n = -1 !== e.indexOf("y");
            return function (e, r) {
              var i = t ? Math.abs(e.x - r.x) : 0,
                a = n ? Math.abs(e.y - r.y) : 0;
              return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2));
            };
          })(n),
          l = Number.POSITIVE_INFINITY;
        return (
          oi(e, n, t, function (n, u, c) {
            var f = n.inRange(t.x, t.y, i);
            if (!r || f) {
              var h = n.getCenterPoint(i);
              if (!!a || e.isPointInArea(h) || f) {
                var d = s(t, h);
                d < l
                  ? ((o = [{ element: n, datasetIndex: u, index: c }]), (l = d))
                  : d === l &&
                    o.push({ element: n, datasetIndex: u, index: c });
              }
            }
          }),
          o
        );
      }
      function ui(e, t, n, r, i, a) {
        return a || e.isPointInArea(t)
          ? "r" !== n || r
            ? li(e, t, n, r, i, a)
            : (function (e, t, n, r) {
                var i = [];
                return (
                  oi(e, n, t, function (e, n, a) {
                    var o = e.getProps(["startAngle", "endAngle"], r),
                      s = o.startAngle,
                      l = o.endAngle;
                    Oe(Me(e, { x: t.x, y: t.y }).angle, s, l) &&
                      i.push({ element: e, datasetIndex: n, index: a });
                  }),
                  i
                );
              })(e, t, n, i)
          : [];
      }
      function ci(e, t, n, r, i) {
        var a = [],
          o = "x" === n ? "inXRange" : "inYRange",
          s = !1;
        return (
          oi(e, n, t, function (e, r, l) {
            e[o](t[n], i) &&
              (a.push({ element: e, datasetIndex: r, index: l }),
              (s = s || e.inRange(t.x, t.y, i)));
          }),
          r && !s ? [] : a
        );
      }
      var fi = {
          evaluateInteractionItems: oi,
          modes: {
            index: function (e, t, n, r) {
              var i = An(t, e),
                a = n.axis || "x",
                o = n.includeInvisible || !1,
                s = n.intersect ? si(e, i, a, r, o) : ui(e, i, a, !1, r, o),
                l = [];
              return s.length
                ? (e.getSortedVisibleDatasetMetas().forEach(function (e) {
                    var t = s[0].index,
                      n = e.data[t];
                    n &&
                      !n.skip &&
                      l.push({ element: n, datasetIndex: e.index, index: t });
                  }),
                  l)
                : [];
            },
            dataset: function (e, t, n, r) {
              var i = An(t, e),
                a = n.axis || "xy",
                o = n.includeInvisible || !1,
                s = n.intersect ? si(e, i, a, r, o) : ui(e, i, a, !1, r, o);
              if (s.length > 0) {
                var l = s[0].datasetIndex,
                  u = e.getDatasetMeta(l).data;
                s = [];
                for (var c = 0; c < u.length; ++c)
                  s.push({ element: u[c], datasetIndex: l, index: c });
              }
              return s;
            },
            point: function (e, t, n, r) {
              return si(
                e,
                An(t, e),
                n.axis || "xy",
                r,
                n.includeInvisible || !1
              );
            },
            nearest: function (e, t, n, r) {
              var i = An(t, e),
                a = n.axis || "xy",
                o = n.includeInvisible || !1;
              return ui(e, i, a, n.intersect, r, o);
            },
            x: function (e, t, n, r) {
              return ci(e, An(t, e), "x", n.intersect, r);
            },
            y: function (e, t, n, r) {
              return ci(e, An(t, e), "y", n.intersect, r);
            },
          },
        },
        hi = ["left", "top", "right", "bottom"];
      function di(e, t) {
        return e.filter(function (e) {
          return e.pos === t;
        });
      }
      function pi(e, t) {
        return e.filter(function (e) {
          return -1 === hi.indexOf(e.pos) && e.box.axis === t;
        });
      }
      function vi(e, t) {
        return e.sort(function (e, n) {
          var r = t ? n : e,
            i = t ? e : n;
          return r.weight === i.weight
            ? r.index - i.index
            : r.weight - i.weight;
        });
      }
      function gi(e, t) {
        var n,
          r,
          i,
          a = (function (e) {
            var t,
              n = {},
              r = N(e);
            try {
              for (r.s(); !(t = r.n()).done; ) {
                var i = t.value,
                  a = i.stack,
                  o = i.pos,
                  s = i.stackWeight;
                if (a && hi.includes(o)) {
                  var l =
                    n[a] ||
                    (n[a] = { count: 0, placed: 0, weight: 0, size: 0 });
                  l.count++, (l.weight += s);
                }
              }
            } catch (u) {
              r.e(u);
            } finally {
              r.f();
            }
            return n;
          })(e),
          o = t.vBoxMaxWidth,
          s = t.hBoxMaxHeight;
        for (n = 0, r = e.length; n < r; ++n) {
          var l = (i = e[n]).box.fullSize,
            u = a[i.stack],
            c = u && i.stackWeight / u.weight;
          i.horizontal
            ? ((i.width = c ? c * o : l && t.availableWidth), (i.height = s))
            : ((i.width = o), (i.height = c ? c * s : l && t.availableHeight));
        }
        return a;
      }
      function mi(e, t, n, r) {
        return Math.max(e[n], t[n]) + Math.max(e[r], t[r]);
      }
      function yi(e, t) {
        (e.top = Math.max(e.top, t.top)),
          (e.left = Math.max(e.left, t.left)),
          (e.bottom = Math.max(e.bottom, t.bottom)),
          (e.right = Math.max(e.right, t.right));
      }
      function bi(e, t, n, r) {
        var i = n.pos,
          a = n.box,
          o = e.maxPadding;
        if (!W(i)) {
          n.size && (e[i] -= n.size);
          var s = r[n.stack] || { size: 0, count: 1 };
          (s.size = Math.max(s.size, n.horizontal ? a.height : a.width)),
            (n.size = s.size / s.count),
            (e[i] += n.size);
        }
        a.getPadding && yi(o, a.getPadding());
        var l = Math.max(0, t.outerWidth - mi(o, e, "left", "right")),
          u = Math.max(0, t.outerHeight - mi(o, e, "top", "bottom")),
          c = l !== e.w,
          f = u !== e.h;
        return (
          (e.w = l),
          (e.h = u),
          n.horizontal ? { same: c, other: f } : { same: f, other: c }
        );
      }
      function xi(e, t) {
        var n = t.maxPadding;
        function r(e) {
          var r = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            e.forEach(function (e) {
              r[e] = Math.max(t[e], n[e]);
            }),
            r
          );
        }
        return r(e ? ["left", "right"] : ["top", "bottom"]);
      }
      function ki(e, t, n, r) {
        var i,
          a,
          o,
          s,
          l,
          u,
          c = [];
        for (i = 0, a = e.length, l = 0; i < a; ++i) {
          (s = (o = e[i]).box).update(
            o.width || t.w,
            o.height || t.h,
            xi(o.horizontal, t)
          );
          var f = bi(t, n, o, r),
            h = f.same,
            d = f.other;
          (l |= h && c.length), (u = u || d), s.fullSize || c.push(o);
        }
        return (l && ki(c, t, n, r)) || u;
      }
      function wi(e, t, n, r, i) {
        (e.top = n),
          (e.left = t),
          (e.right = t + r),
          (e.bottom = n + i),
          (e.width = r),
          (e.height = i);
      }
      function _i(e, t, n, r) {
        var i,
          a = n.padding,
          o = t.x,
          s = t.y,
          l = N(e);
        try {
          for (l.s(); !(i = l.n()).done; ) {
            var u = i.value,
              c = u.box,
              f = r[u.stack] || { count: 1, placed: 0, weight: 1 },
              h = u.stackWeight / f.weight || 1;
            if (u.horizontal) {
              var d = t.w * h,
                p = f.size || c.height;
              ae(f.start) && (s = f.start),
                c.fullSize
                  ? wi(c, a.left, s, n.outerWidth - a.right - a.left, p)
                  : wi(c, t.left + f.placed, s, d, p),
                (f.start = s),
                (f.placed += d),
                (s = c.bottom);
            } else {
              var v = t.h * h,
                g = f.size || c.width;
              ae(f.start) && (o = f.start),
                c.fullSize
                  ? wi(c, o, a.top, g, n.outerHeight - a.bottom - a.top)
                  : wi(c, o, t.top + f.placed, g, v),
                (f.start = o),
                (f.placed += v),
                (o = c.right);
            }
          }
        } catch (m) {
          l.e(m);
        } finally {
          l.f();
        }
        (t.x = o), (t.y = s);
      }
      zt.set("layout", {
        autoPadding: !0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
      });
      var Si = function (e, t) {
          e.boxes || (e.boxes = []),
            (t.fullSize = t.fullSize || !1),
            (t.position = t.position || "top"),
            (t.weight = t.weight || 0),
            (t._layers =
              t._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw: function (e) {
                      t.draw(e);
                    },
                  },
                ];
              }),
            e.boxes.push(t);
        },
        Mi = function (e, t) {
          var n = e.boxes ? e.boxes.indexOf(t) : -1;
          -1 !== n && e.boxes.splice(n, 1);
        },
        Ei = function (e, t, n) {
          (t.fullSize = n.fullSize),
            (t.position = n.position),
            (t.weight = n.weight);
        },
        Pi = function (e, t, n, r) {
          if (e) {
            var i = an(e.options.layout.padding),
              a = Math.max(t - i.width, 0),
              o = Math.max(n - i.height, 0),
              s = (function (e) {
                var t = (function (e) {
                    var t,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s = [];
                    for (t = 0, n = (e || []).length; t < n; ++t) {
                      var l = (r = e[t]);
                      i = l.position;
                      var u = l.options;
                      a = u.stack;
                      var c = u.stackWeight;
                      (o = void 0 === c ? 1 : c),
                        s.push({
                          index: t,
                          box: r,
                          pos: i,
                          horizontal: r.isHorizontal(),
                          weight: r.weight,
                          stack: a && i + a,
                          stackWeight: o,
                        });
                    }
                    return s;
                  })(e),
                  n = vi(
                    t.filter(function (e) {
                      return e.box.fullSize;
                    }),
                    !0
                  ),
                  r = vi(di(t, "left"), !0),
                  i = vi(di(t, "right")),
                  a = vi(di(t, "top"), !0),
                  o = vi(di(t, "bottom")),
                  s = pi(t, "x"),
                  l = pi(t, "y");
                return {
                  fullSize: n,
                  leftAndTop: r.concat(a),
                  rightAndBottom: i.concat(l).concat(o).concat(s),
                  chartArea: di(t, "chartArea"),
                  vertical: r.concat(i).concat(l),
                  horizontal: a.concat(o).concat(s),
                };
              })(e.boxes),
              l = s.vertical,
              u = s.horizontal;
            q(e.boxes, function (e) {
              "function" === typeof e.beforeLayout && e.beforeLayout();
            });
            var c =
                l.reduce(function (e, t) {
                  return t.box.options && !1 === t.box.options.display
                    ? e
                    : e + 1;
                }, 0) || 1,
              f = Object.freeze({
                outerWidth: t,
                outerHeight: n,
                padding: i,
                availableWidth: a,
                availableHeight: o,
                vBoxMaxWidth: a / 2 / c,
                hBoxMaxHeight: o / 2,
              }),
              h = Object.assign({}, i);
            yi(h, an(r));
            var d = Object.assign(
                { maxPadding: h, w: a, h: o, x: i.left, y: i.top },
                i
              ),
              p = gi(l.concat(u), f);
            ki(s.fullSize, d, f, p),
              ki(l, d, f, p),
              ki(u, d, f, p) && ki(l, d, f, p),
              (function (e) {
                var t = e.maxPadding;
                function n(n) {
                  var r = Math.max(t[n] - e[n], 0);
                  return (e[n] += r), r;
                }
                (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
              })(d),
              _i(s.leftAndTop, d, f, p),
              (d.x += d.w),
              (d.y += d.h),
              _i(s.rightAndBottom, d, f, p),
              (e.chartArea = {
                left: d.left,
                top: d.top,
                right: d.left + d.w,
                bottom: d.top + d.h,
                height: d.h,
                width: d.w,
              }),
              q(s.chartArea, function (t) {
                var n = t.box;
                Object.assign(n, e.chartArea),
                  n.update(d.w, d.h, { left: 0, top: 0, right: 0, bottom: 0 });
              });
          }
        },
        Ci = (function () {
          function e() {
            j(this, e);
          }
          return (
            R(e, [
              { key: "acquireContext", value: function (e, t) {} },
              {
                key: "releaseContext",
                value: function (e) {
                  return !1;
                },
              },
              { key: "addEventListener", value: function (e, t, n) {} },
              { key: "removeEventListener", value: function (e, t, n) {} },
              {
                key: "getDevicePixelRatio",
                value: function () {
                  return 1;
                },
              },
              {
                key: "getMaximumSize",
                value: function (e, t, n, r) {
                  return (
                    (t = Math.max(0, t || e.width)),
                    (n = n || e.height),
                    { width: t, height: Math.max(0, r ? Math.floor(t / r) : n) }
                  );
                },
              },
              {
                key: "isAttached",
                value: function (e) {
                  return !0;
                },
              },
              { key: "updateConfig", value: function (e) {} },
            ]),
            e
          );
        })(),
        Oi = (function (e) {
          O(n, e);
          var t = D(n);
          function n() {
            return j(this, n), t.apply(this, arguments);
          }
          return (
            R(n, [
              {
                key: "acquireContext",
                value: function (e) {
                  return (e && e.getContext && e.getContext("2d")) || null;
                },
              },
              {
                key: "updateConfig",
                value: function (e) {
                  e.options.animation = !1;
                },
              },
            ]),
            n
          );
        })(Ci),
        Ti = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        },
        Li = function (e) {
          return null === e || "" === e;
        };
      var Ii = !!Wn && { passive: !0 };
      function Di(e, t, n) {
        e.canvas.removeEventListener(t, n, Ii);
      }
      function Ni(e, t) {
        var n,
          r = N(e);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            if (i === t || i.contains(t)) return !0;
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
      }
      function ji(e, t, n) {
        var r = e.canvas,
          i = new MutationObserver(function (e) {
            var t,
              i = !1,
              a = N(e);
            try {
              for (a.s(); !(t = a.n()).done; ) {
                var o = t.value;
                i = (i = i || Ni(o.addedNodes, r)) && !Ni(o.removedNodes, r);
              }
            } catch (s) {
              a.e(s);
            } finally {
              a.f();
            }
            i && n();
          });
        return i.observe(document, { childList: !0, subtree: !0 }), i;
      }
      function zi(e, t, n) {
        var r = e.canvas,
          i = new MutationObserver(function (e) {
            var t,
              i = !1,
              a = N(e);
            try {
              for (a.s(); !(t = a.n()).done; ) {
                var o = t.value;
                i = (i = i || Ni(o.removedNodes, r)) && !Ni(o.addedNodes, r);
              }
            } catch (s) {
              a.e(s);
            } finally {
              a.f();
            }
            i && n();
          });
        return i.observe(document, { childList: !0, subtree: !0 }), i;
      }
      var Ri = new Map(),
        Ai = 0;
      function Fi() {
        var e = window.devicePixelRatio;
        e !== Ai &&
          ((Ai = e),
          Ri.forEach(function (t, n) {
            n.currentDevicePixelRatio !== e && t();
          }));
      }
      function Bi(e, t, n) {
        var r = e.canvas,
          i = r && Dn(r);
        if (i) {
          var a = Fe(function (e, t) {
              var r = i.clientWidth;
              n(e, t), r < i.clientWidth && n();
            }, window),
            o = new ResizeObserver(function (e) {
              var t = e[0],
                n = t.contentRect.width,
                r = t.contentRect.height;
              (0 === n && 0 === r) || a(n, r);
            });
          return (
            o.observe(i),
            (function (e, t) {
              Ri.size || window.addEventListener("resize", Fi), Ri.set(e, t);
            })(e, a),
            o
          );
        }
      }
      function Vi(e, t, n) {
        n && n.disconnect(),
          "resize" === t &&
            (function (e) {
              Ri.delete(e), Ri.size || window.removeEventListener("resize", Fi);
            })(e);
      }
      function Wi(e, t, n) {
        var r = e.canvas,
          i = Fe(
            function (t) {
              null !== e.ctx &&
                n(
                  (function (e, t) {
                    var n = Ti[e.type] || e.type,
                      r = An(e, t),
                      i = r.x,
                      a = r.y;
                    return {
                      type: n,
                      chart: t,
                      native: e,
                      x: void 0 !== i ? i : null,
                      y: void 0 !== a ? a : null,
                    };
                  })(t, e)
                );
            },
            e,
            function (e) {
              var t = e[0];
              return [t, t.offsetX, t.offsetY];
            }
          );
        return (
          (function (e, t, n) {
            e.addEventListener(t, n, Ii);
          })(r, t, i),
          i
        );
      }
      var Hi = (function (e) {
        O(n, e);
        var t = D(n);
        function n() {
          return j(this, n), t.apply(this, arguments);
        }
        return (
          R(n, [
            {
              key: "acquireContext",
              value: function (e, t) {
                var n = e && e.getContext && e.getContext("2d");
                return n && n.canvas === e
                  ? ((function (e, t) {
                      var n = e.style,
                        r = e.getAttribute("height"),
                        i = e.getAttribute("width");
                      if (
                        ((e.$chartjs = {
                          initial: {
                            height: r,
                            width: i,
                            style: {
                              display: n.display,
                              height: n.height,
                              width: n.width,
                            },
                          },
                        }),
                        (n.display = n.display || "block"),
                        (n.boxSizing = n.boxSizing || "border-box"),
                        Li(i))
                      ) {
                        var a = Hn(e, "width");
                        void 0 !== a && (e.width = a);
                      }
                      if (Li(r))
                        if ("" === e.style.height)
                          e.height = e.width / (t || 2);
                        else {
                          var o = Hn(e, "height");
                          void 0 !== o && (e.height = o);
                        }
                    })(e, t),
                    n)
                  : null;
              },
            },
            {
              key: "releaseContext",
              value: function (e) {
                var t = e.canvas;
                if (!t.$chartjs) return !1;
                var n = t.$chartjs.initial;
                ["height", "width"].forEach(function (e) {
                  var r = n[e];
                  B(r) ? t.removeAttribute(e) : t.setAttribute(e, r);
                });
                var r = n.style || {};
                return (
                  Object.keys(r).forEach(function (e) {
                    t.style[e] = r[e];
                  }),
                  (t.width = t.width),
                  delete t.$chartjs,
                  !0
                );
              },
            },
            {
              key: "addEventListener",
              value: function (e, t, n) {
                this.removeEventListener(e, t);
                var r = e.$proxies || (e.$proxies = {}),
                  i = { attach: ji, detach: zi, resize: Bi }[t] || Wi;
                r[t] = i(e, t, n);
              },
            },
            {
              key: "removeEventListener",
              value: function (e, t) {
                var n = e.$proxies || (e.$proxies = {}),
                  r = n[t];
                r &&
                  (({ attach: Vi, detach: Vi, resize: Vi }[t] || Di)(e, t, r),
                  (n[t] = void 0));
              },
            },
            {
              key: "getDevicePixelRatio",
              value: function () {
                return window.devicePixelRatio;
              },
            },
            {
              key: "getMaximumSize",
              value: function (e, t, n, r) {
                return Bn(e, t, n, r);
              },
            },
            {
              key: "isAttached",
              value: function (e) {
                var t = Dn(e);
                return !(!t || !t.isConnected);
              },
            },
          ]),
          n
        );
      })(Ci);
      var Ui = (function () {
        function e() {
          j(this, e), (this._init = []);
        }
        return (
          R(e, [
            {
              key: "notify",
              value: function (e, t, n, r) {
                "beforeInit" === t &&
                  ((this._init = this._createDescriptors(e, !0)),
                  this._notify(this._init, e, "install"));
                var i = r
                    ? this._descriptors(e).filter(r)
                    : this._descriptors(e),
                  a = this._notify(i, e, t, n);
                return (
                  "afterDestroy" === t &&
                    (this._notify(i, e, "stop"),
                    this._notify(this._init, e, "uninstall")),
                  a
                );
              },
            },
            {
              key: "_notify",
              value: function (e, t, n, r) {
                r = r || {};
                var i,
                  a = N(e);
                try {
                  for (a.s(); !(i = a.n()).done; ) {
                    var o = i.value,
                      s = o.plugin;
                    if (!1 === Q(s[n], [t, r, o.options], s) && r.cancelable)
                      return !1;
                  }
                } catch (l) {
                  a.e(l);
                } finally {
                  a.f();
                }
                return !0;
              },
            },
            {
              key: "invalidate",
              value: function () {
                B(this._cache) ||
                  ((this._oldCache = this._cache), (this._cache = void 0));
              },
            },
            {
              key: "_descriptors",
              value: function (e) {
                if (this._cache) return this._cache;
                var t = (this._cache = this._createDescriptors(e));
                return this._notifyStateChanges(e), t;
              },
            },
            {
              key: "_createDescriptors",
              value: function (e, t) {
                var n = e && e.config,
                  r = $(n.options && n.options.plugins, {}),
                  i = (function (e) {
                    for (
                      var t = {},
                        n = [],
                        r = Object.keys(Zr.plugins.items),
                        i = 0;
                      i < r.length;
                      i++
                    )
                      n.push(Zr.getPlugin(r[i]));
                    for (var a = e.plugins || [], o = 0; o < a.length; o++) {
                      var s = a[o];
                      -1 === n.indexOf(s) && (n.push(s), (t[s.id] = !0));
                    }
                    return { plugins: n, localIds: t };
                  })(n);
                return !1 !== r || t
                  ? (function (e, t, n, r) {
                      var i,
                        a = t.plugins,
                        o = t.localIds,
                        s = [],
                        l = e.getContext(),
                        u = N(a);
                      try {
                        for (u.s(); !(i = u.n()).done; ) {
                          var c = i.value,
                            f = c.id,
                            h = $i(n[f], r);
                          null !== h &&
                            s.push({
                              plugin: c,
                              options: Yi(
                                e.config,
                                { plugin: c, local: o[f] },
                                h,
                                l
                              ),
                            });
                        }
                      } catch (d) {
                        u.e(d);
                      } finally {
                        u.f();
                      }
                      return s;
                    })(e, i, r, t)
                  : [];
              },
            },
            {
              key: "_notifyStateChanges",
              value: function (e) {
                var t = this._oldCache || [],
                  n = this._cache,
                  r = function (e, t) {
                    return e.filter(function (e) {
                      return !t.some(function (t) {
                        return e.plugin.id === t.plugin.id;
                      });
                    });
                  };
                this._notify(r(t, n), e, "stop"),
                  this._notify(r(n, t), e, "start");
              },
            },
          ]),
          e
        );
      })();
      function $i(e, t) {
        return t || !1 !== e ? (!0 === e ? {} : e) : null;
      }
      function Yi(e, t, n, r) {
        var i = t.plugin,
          a = t.local,
          o = e.pluginScopeKeys(i),
          s = e.getOptionScopes(n, o);
        return (
          a && i.defaults && s.push(i.defaults),
          e.createResolver(s, r, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0,
          })
        );
      }
      function Qi(e, t) {
        var n = zt.datasets[e] || {};
        return (
          ((t.datasets || {})[e] || {}).indexAxis ||
          t.indexAxis ||
          n.indexAxis ||
          "x"
        );
      }
      function qi(e, t) {
        return "x" === e || "y" === e
          ? e
          : t.axis ||
              ("top" === (n = t.position) || "bottom" === n
                ? "x"
                : "left" === n || "right" === n
                ? "y"
                : void 0) ||
              e.charAt(0).toLowerCase();
        var n;
      }
      function Ki(e) {
        var t = e.options || (e.options = {});
        (t.plugins = $(t.plugins, {})),
          (t.scales = (function (e, t) {
            var n = Lt[e.type] || { scales: {} },
              r = t.scales || {},
              i = Qi(e.type, t),
              a = Object.create(null),
              o = Object.create(null);
            return (
              Object.keys(r).forEach(function (e) {
                var t = r[e];
                if (!W(t))
                  return console.error(
                    "Invalid scale configuration for scale: ".concat(e)
                  );
                if (t._proxy)
                  return console.warn(
                    "Ignoring resolver passed as options for scale: ".concat(e)
                  );
                var s = qi(e, t),
                  l = (function (e, t) {
                    return e === t ? "_index_" : "_value_";
                  })(s, i),
                  u = n.scales || {};
                (a[s] = a[s] || e),
                  (o[e] = ee(Object.create(null), [
                    { axis: s },
                    t,
                    u[s],
                    u[l],
                  ]));
              }),
              e.data.datasets.forEach(function (n) {
                var i = n.type || e.type,
                  s = n.indexAxis || Qi(i, t),
                  l = (Lt[i] || {}).scales || {};
                Object.keys(l).forEach(function (e) {
                  var t = (function (e, t) {
                      var n = e;
                      return (
                        "_index_" === e
                          ? (n = t)
                          : "_value_" === e && (n = "x" === t ? "y" : "x"),
                        n
                      );
                    })(e, s),
                    i = n[t + "AxisID"] || a[t] || t;
                  (o[i] = o[i] || Object.create(null)),
                    ee(o[i], [{ axis: t }, r[i], l[e]]);
                });
              }),
              Object.keys(o).forEach(function (e) {
                var t = o[e];
                ee(t, [zt.scales[t.type], zt.scale]);
              }),
              o
            );
          })(e, t));
      }
      function Xi(e) {
        return (
          ((e = e || {}).datasets = e.datasets || []),
          (e.labels = e.labels || []),
          e
        );
      }
      var Gi = new Map(),
        Ji = new Set();
      function Zi(e, t) {
        var n = Gi.get(e);
        return n || ((n = t()), Gi.set(e, n), Ji.add(n)), n;
      }
      var ea = function (e, t, n) {
          var r = re(t, n);
          void 0 !== r && e.add(r);
        },
        ta = (function () {
          function e(t) {
            j(this, e),
              (this._config = (function (e) {
                return ((e = e || {}).data = Xi(e.data)), Ki(e), e;
              })(t)),
              (this._scopeCache = new Map()),
              (this._resolverCache = new Map());
          }
          return (
            R(e, [
              {
                key: "platform",
                get: function () {
                  return this._config.platform;
                },
              },
              {
                key: "type",
                get: function () {
                  return this._config.type;
                },
                set: function (e) {
                  this._config.type = e;
                },
              },
              {
                key: "data",
                get: function () {
                  return this._config.data;
                },
                set: function (e) {
                  this._config.data = Xi(e);
                },
              },
              {
                key: "options",
                get: function () {
                  return this._config.options;
                },
                set: function (e) {
                  this._config.options = e;
                },
              },
              {
                key: "plugins",
                get: function () {
                  return this._config.plugins;
                },
              },
              {
                key: "update",
                value: function () {
                  var e = this._config;
                  this.clearCache(), Ki(e);
                },
              },
              {
                key: "clearCache",
                value: function () {
                  this._scopeCache.clear(), this._resolverCache.clear();
                },
              },
              {
                key: "datasetScopeKeys",
                value: function (e) {
                  return Zi(e, function () {
                    return [["datasets.".concat(e), ""]];
                  });
                },
              },
              {
                key: "datasetAnimationScopeKeys",
                value: function (e, t) {
                  return Zi(
                    "".concat(e, ".transition.").concat(t),
                    function () {
                      return [
                        [
                          "datasets.".concat(e, ".transitions.").concat(t),
                          "transitions.".concat(t),
                        ],
                        ["datasets.".concat(e), ""],
                      ];
                    }
                  );
                },
              },
              {
                key: "datasetElementScopeKeys",
                value: function (e, t) {
                  return Zi("".concat(e, "-").concat(t), function () {
                    return [
                      [
                        "datasets.".concat(e, ".elements.").concat(t),
                        "datasets.".concat(e),
                        "elements.".concat(t),
                        "",
                      ],
                    ];
                  });
                },
              },
              {
                key: "pluginScopeKeys",
                value: function (e) {
                  var t = e.id,
                    n = this.type;
                  return Zi("".concat(n, "-plugin-").concat(t), function () {
                    return [
                      ["plugins.".concat(t)].concat(
                        x(e.additionalOptionScopes || [])
                      ),
                    ];
                  });
                },
              },
              {
                key: "_cachedScopes",
                value: function (e, t) {
                  var n = this._scopeCache,
                    r = n.get(e);
                  return (r && !t) || ((r = new Map()), n.set(e, r)), r;
                },
              },
              {
                key: "getOptionScopes",
                value: function (e, t, n) {
                  var r = this.options,
                    i = this.type,
                    a = this._cachedScopes(e, n),
                    o = a.get(t);
                  if (o) return o;
                  var s = new Set();
                  t.forEach(function (t) {
                    e &&
                      (s.add(e),
                      t.forEach(function (t) {
                        return ea(s, e, t);
                      })),
                      t.forEach(function (e) {
                        return ea(s, r, e);
                      }),
                      t.forEach(function (e) {
                        return ea(s, Lt[i] || {}, e);
                      }),
                      t.forEach(function (e) {
                        return ea(s, zt, e);
                      }),
                      t.forEach(function (e) {
                        return ea(s, It, e);
                      });
                  });
                  var l = Array.from(s);
                  return (
                    0 === l.length && l.push(Object.create(null)),
                    Ji.has(t) && a.set(t, l),
                    l
                  );
                },
              },
              {
                key: "chartOptionScopes",
                value: function () {
                  var e = this.options,
                    t = this.type;
                  return [
                    e,
                    Lt[t] || {},
                    zt.datasets[t] || {},
                    { type: t },
                    zt,
                    It,
                  ];
                },
              },
              {
                key: "resolveNamedOptions",
                value: function (e, t, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [""],
                    i = { $shared: !0 },
                    a = na(this._resolverCache, e, r),
                    o = a.resolver,
                    s = a.subPrefixes,
                    l = o;
                  if (ia(o, t)) {
                    (i.$shared = !1), (n = oe(n) ? n() : n);
                    var u = this.createResolver(e, n, s);
                    l = cn(o, n, u);
                  }
                  var c,
                    f = N(t);
                  try {
                    for (f.s(); !(c = f.n()).done; ) {
                      var h = c.value;
                      i[h] = l[h];
                    }
                  } catch (d) {
                    f.e(d);
                  } finally {
                    f.f();
                  }
                  return i;
                },
              },
              {
                key: "createResolver",
                value: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [""],
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = na(this._resolverCache, e, n),
                    a = i.resolver;
                  return W(t) ? cn(a, t, void 0, r) : a;
                },
              },
            ]),
            e
          );
        })();
      function na(e, t, n) {
        var r = e.get(t);
        r || ((r = new Map()), e.set(t, r));
        var i = n.join(),
          a = r.get(i);
        a ||
          ((a = {
            resolver: un(t, n),
            subPrefixes: n.filter(function (e) {
              return !e.toLowerCase().includes("hover");
            }),
          }),
          r.set(i, a));
        return a;
      }
      var ra = function (e) {
        return (
          W(e) &&
          Object.getOwnPropertyNames(e).reduce(function (t, n) {
            return t || oe(e[n]);
          }, !1)
        );
      };
      function ia(e, t) {
        var n,
          r = fn(e),
          i = r.isScriptable,
          a = r.isIndexable,
          o = N(t);
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var s = n.value,
              l = i(s),
              u = a(s),
              c = (u || l) && e[s];
            if ((l && (oe(c) || ra(c))) || (u && V(c))) return !0;
          }
        } catch (f) {
          o.e(f);
        } finally {
          o.f();
        }
        return !1;
      }
      var aa = ["top", "bottom", "left", "right", "chartArea"];
      function oa(e, t) {
        return (
          "top" === e || "bottom" === e || (-1 === aa.indexOf(e) && "x" === t)
        );
      }
      function sa(e, t) {
        return function (n, r) {
          return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e];
        };
      }
      function la(e) {
        var t = e.chart,
          n = t.options.animation;
        t.notifyPlugins("afterRender"), Q(n && n.onComplete, [e], t);
      }
      function ua(e) {
        var t = e.chart,
          n = t.options.animation;
        Q(n && n.onProgress, [e], t);
      }
      function ca(e) {
        return (
          In() && "string" === typeof e
            ? (e = document.getElementById(e))
            : e && e.length && (e = e[0]),
          e && e.canvas && (e = e.canvas),
          e
        );
      }
      var fa = {},
        ha = function (e) {
          var t = ca(e);
          return Object.values(fa)
            .filter(function (e) {
              return e.canvas === t;
            })
            .pop();
        };
      function da(e, t, n) {
        for (var r = 0, i = Object.keys(e); r < i.length; r++) {
          var a = i[r],
            o = +a;
          if (o >= t) {
            var s = e[a];
            delete e[a], (n > 0 || o > t) && (e[o + n] = s);
          }
        }
      }
      var pa = (function () {
          function e(t, n) {
            var r = this;
            j(this, e);
            var i = (this.config = new ta(n)),
              a = ca(t),
              o = ha(a);
            if (o)
              throw new Error(
                "Canvas is already in use. Chart with ID '" +
                  o.id +
                  "' must be destroyed before the canvas with ID '" +
                  o.canvas.id +
                  "' can be reused."
              );
            var s = i.createResolver(i.chartOptionScopes(), this.getContext());
            (this.platform = new (i.platform ||
              (function (e) {
                return !In() ||
                  ("undefined" !== typeof OffscreenCanvas &&
                    e instanceof OffscreenCanvas)
                  ? Oi
                  : Hi;
              })(a))()),
              this.platform.updateConfig(i);
            var l = this.platform.acquireContext(a, s.aspectRatio),
              u = l && l.canvas,
              c = u && u.height,
              f = u && u.width;
            (this.id = F()),
              (this.ctx = l),
              (this.canvas = u),
              (this.width = f),
              (this.height = c),
              (this._options = s),
              (this._aspectRatio = this.aspectRatio),
              (this._layers = []),
              (this._metasets = []),
              (this._stacks = void 0),
              (this.boxes = []),
              (this.currentDevicePixelRatio = void 0),
              (this.chartArea = void 0),
              (this._active = []),
              (this._lastEvent = void 0),
              (this._listeners = {}),
              (this._responsiveListeners = void 0),
              (this._sortedMetasets = []),
              (this.scales = {}),
              (this._plugins = new Ui()),
              (this.$proxies = {}),
              (this._hiddenIndices = {}),
              (this.attached = !1),
              (this._animationsDisabled = void 0),
              (this.$context = void 0),
              (this._doResize = (function (e, t) {
                var n;
                return function () {
                  for (
                    var r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a];
                  return (
                    t
                      ? (clearTimeout(n), (n = setTimeout(e, t, i)))
                      : e.apply(this, i),
                    t
                  );
                };
              })(function (e) {
                return r.update(e);
              }, s.resizeDelay || 0)),
              (this._dataChanges = []),
              (fa[this.id] = this),
              l && u
                ? (or.listen(this, "complete", la),
                  or.listen(this, "progress", ua),
                  this._initialize(),
                  this.attached && this.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item"
                  );
          }
          return (
            R(e, [
              {
                key: "aspectRatio",
                get: function () {
                  var e = this.options,
                    t = e.aspectRatio,
                    n = e.maintainAspectRatio,
                    r = this.width,
                    i = this.height,
                    a = this._aspectRatio;
                  return B(t) ? (n && a ? a : i ? r / i : null) : t;
                },
              },
              {
                key: "data",
                get: function () {
                  return this.config.data;
                },
                set: function (e) {
                  this.config.data = e;
                },
              },
              {
                key: "options",
                get: function () {
                  return this._options;
                },
                set: function (e) {
                  this.config.options = e;
                },
              },
              {
                key: "_initialize",
                value: function () {
                  return (
                    this.notifyPlugins("beforeInit"),
                    this.options.responsive
                      ? this.resize()
                      : Vn(this, this.options.devicePixelRatio),
                    this.bindEvents(),
                    this.notifyPlugins("afterInit"),
                    this
                  );
                },
              },
              {
                key: "clear",
                value: function () {
                  return Bt(this.canvas, this.ctx), this;
                },
              },
              {
                key: "stop",
                value: function () {
                  return or.stop(this), this;
                },
              },
              {
                key: "resize",
                value: function (e, t) {
                  or.running(this)
                    ? (this._resizeBeforeDraw = { width: e, height: t })
                    : this._resize(e, t);
                },
              },
              {
                key: "_resize",
                value: function (e, t) {
                  var n = this.options,
                    r = this.canvas,
                    i = n.maintainAspectRatio && this.aspectRatio,
                    a = this.platform.getMaximumSize(r, e, t, i),
                    o =
                      n.devicePixelRatio || this.platform.getDevicePixelRatio(),
                    s = this.width ? "resize" : "attach";
                  (this.width = a.width),
                    (this.height = a.height),
                    (this._aspectRatio = this.aspectRatio),
                    Vn(this, o, !0) &&
                      (this.notifyPlugins("resize", { size: a }),
                      Q(n.onResize, [this, a], this),
                      this.attached && this._doResize(s) && this.render());
                },
              },
              {
                key: "ensureScalesHaveIDs",
                value: function () {
                  q(this.options.scales || {}, function (e, t) {
                    e.id = t;
                  });
                },
              },
              {
                key: "buildOrUpdateScales",
                value: function () {
                  var e = this,
                    t = this.options,
                    n = t.scales,
                    r = this.scales,
                    i = Object.keys(r).reduce(function (e, t) {
                      return (e[t] = !1), e;
                    }, {}),
                    a = [];
                  n &&
                    (a = a.concat(
                      Object.keys(n).map(function (e) {
                        var t = n[e],
                          r = qi(e, t),
                          i = "r" === r,
                          a = "x" === r;
                        return {
                          options: t,
                          dposition: i ? "chartArea" : a ? "bottom" : "left",
                          dtype: i ? "radialLinear" : a ? "category" : "linear",
                        };
                      })
                    )),
                    q(a, function (n) {
                      var a = n.options,
                        o = a.id,
                        s = qi(o, a),
                        l = $(a.type, n.dtype);
                      (void 0 !== a.position &&
                        oa(a.position, s) === oa(n.dposition)) ||
                        (a.position = n.dposition),
                        (i[o] = !0);
                      var u = null;
                      o in r && r[o].type === l
                        ? (u = r[o])
                        : ((u = new (Zr.getScale(l))({
                            id: o,
                            type: l,
                            ctx: e.ctx,
                            chart: e,
                          })),
                          (r[u.id] = u));
                      u.init(a, t);
                    }),
                    q(i, function (e, t) {
                      e || delete r[t];
                    }),
                    q(r, function (t) {
                      Ei(e, t, t.options), Si(e, t);
                    });
                },
              },
              {
                key: "_updateMetasets",
                value: function () {
                  var e = this._metasets,
                    t = this.data.datasets.length,
                    n = e.length;
                  if (
                    (e.sort(function (e, t) {
                      return e.index - t.index;
                    }),
                    n > t)
                  ) {
                    for (var r = t; r < n; ++r) this._destroyDatasetMeta(r);
                    e.splice(t, n - t);
                  }
                  this._sortedMetasets = e.slice(0).sort(sa("order", "index"));
                },
              },
              {
                key: "_removeUnreferencedMetasets",
                value: function () {
                  var e = this,
                    t = this._metasets,
                    n = this.data.datasets;
                  t.length > n.length && delete this._stacks,
                    t.forEach(function (t, r) {
                      0 ===
                        n.filter(function (e) {
                          return e === t._dataset;
                        }).length && e._destroyDatasetMeta(r);
                    });
                },
              },
              {
                key: "buildOrUpdateControllers",
                value: function () {
                  var e,
                    t,
                    n = [],
                    r = this.data.datasets;
                  for (
                    this._removeUnreferencedMetasets(), e = 0, t = r.length;
                    e < t;
                    e++
                  ) {
                    var i = r[e],
                      a = this.getDatasetMeta(e),
                      o = i.type || this.config.type;
                    if (
                      (a.type &&
                        a.type !== o &&
                        (this._destroyDatasetMeta(e),
                        (a = this.getDatasetMeta(e))),
                      (a.type = o),
                      (a.indexAxis = i.indexAxis || Qi(o, this.options)),
                      (a.order = i.order || 0),
                      (a.index = e),
                      (a.label = "" + i.label),
                      (a.visible = this.isDatasetVisible(e)),
                      a.controller)
                    )
                      a.controller.updateIndex(e), a.controller.linkScales();
                    else {
                      var s = Zr.getController(o),
                        l = zt.datasets[o],
                        u = l.datasetElementType,
                        c = l.dataElementType;
                      Object.assign(s.prototype, {
                        dataElementType: Zr.getElement(c),
                        datasetElementType: u && Zr.getElement(u),
                      }),
                        (a.controller = new s(this, e)),
                        n.push(a.controller);
                    }
                  }
                  return this._updateMetasets(), n;
                },
              },
              {
                key: "_resetElements",
                value: function () {
                  var e = this;
                  q(
                    this.data.datasets,
                    function (t, n) {
                      e.getDatasetMeta(n).controller.reset();
                    },
                    this
                  );
                },
              },
              {
                key: "reset",
                value: function () {
                  this._resetElements(), this.notifyPlugins("reset");
                },
              },
              {
                key: "update",
                value: function (e) {
                  var t = this.config;
                  t.update();
                  var n = (this._options = t.createResolver(
                      t.chartOptionScopes(),
                      this.getContext()
                    )),
                    r = (this._animationsDisabled = !n.animation);
                  if (
                    (this._updateScales(),
                    this._checkEventBindings(),
                    this._updateHiddenIndices(),
                    this._plugins.invalidate(),
                    !1 !==
                      this.notifyPlugins("beforeUpdate", {
                        mode: e,
                        cancelable: !0,
                      }))
                  ) {
                    var i = this.buildOrUpdateControllers();
                    this.notifyPlugins("beforeElementsUpdate");
                    for (
                      var a = 0, o = 0, s = this.data.datasets.length;
                      o < s;
                      o++
                    ) {
                      var l = this.getDatasetMeta(o).controller,
                        u = !r && -1 === i.indexOf(l);
                      l.buildOrUpdateElements(u),
                        (a = Math.max(+l.getMaxOverflow(), a));
                    }
                    (a = this._minPadding = n.layout.autoPadding ? a : 0),
                      this._updateLayout(a),
                      r ||
                        q(i, function (e) {
                          e.reset();
                        }),
                      this._updateDatasets(e),
                      this.notifyPlugins("afterUpdate", { mode: e }),
                      this._layers.sort(sa("z", "_idx"));
                    var c = this._active,
                      f = this._lastEvent;
                    f
                      ? this._eventHandler(f, !0)
                      : c.length && this._updateHoverStyles(c, c, !0),
                      this.render();
                  }
                },
              },
              {
                key: "_updateScales",
                value: function () {
                  var e = this;
                  q(this.scales, function (t) {
                    Mi(e, t);
                  }),
                    this.ensureScalesHaveIDs(),
                    this.buildOrUpdateScales();
                },
              },
              {
                key: "_checkEventBindings",
                value: function () {
                  var e = this.options,
                    t = new Set(Object.keys(this._listeners)),
                    n = new Set(e.events);
                  (se(t, n) && !!this._responsiveListeners === e.responsive) ||
                    (this.unbindEvents(), this.bindEvents());
                },
              },
              {
                key: "_updateHiddenIndices",
                value: function () {
                  var e,
                    t = this._hiddenIndices,
                    n = N(this._getUniformDataChanges() || []);
                  try {
                    for (n.s(); !(e = n.n()).done; ) {
                      var r = e.value,
                        i = r.method,
                        a = r.start,
                        o = r.count;
                      da(t, a, "_removeElements" === i ? -o : o);
                    }
                  } catch (s) {
                    n.e(s);
                  } finally {
                    n.f();
                  }
                },
              },
              {
                key: "_getUniformDataChanges",
                value: function () {
                  var e = this._dataChanges;
                  if (e && e.length) {
                    this._dataChanges = [];
                    for (
                      var t = this.data.datasets.length,
                        n = function (t) {
                          return new Set(
                            e
                              .filter(function (e) {
                                return e[0] === t;
                              })
                              .map(function (e, t) {
                                return t + "," + e.splice(1).join(",");
                              })
                          );
                        },
                        r = n(0),
                        i = 1;
                      i < t;
                      i++
                    )
                      if (!se(r, n(i))) return;
                    return Array.from(r)
                      .map(function (e) {
                        return e.split(",");
                      })
                      .map(function (e) {
                        return { method: e[1], start: +e[2], count: +e[3] };
                      });
                  }
                },
              },
              {
                key: "_updateLayout",
                value: function (e) {
                  var t = this;
                  if (
                    !1 !==
                    this.notifyPlugins("beforeLayout", { cancelable: !0 })
                  ) {
                    Pi(this, this.width, this.height, e);
                    var n = this.chartArea,
                      r = n.width <= 0 || n.height <= 0;
                    (this._layers = []),
                      q(
                        this.boxes,
                        function (e) {
                          var n;
                          (r && "chartArea" === e.position) ||
                            (e.configure && e.configure(),
                            (n = t._layers).push.apply(n, x(e._layers())));
                        },
                        this
                      ),
                      this._layers.forEach(function (e, t) {
                        e._idx = t;
                      }),
                      this.notifyPlugins("afterLayout");
                  }
                },
              },
              {
                key: "_updateDatasets",
                value: function (e) {
                  if (
                    !1 !==
                    this.notifyPlugins("beforeDatasetsUpdate", {
                      mode: e,
                      cancelable: !0,
                    })
                  ) {
                    for (var t = 0, n = this.data.datasets.length; t < n; ++t)
                      this.getDatasetMeta(t).controller.configure();
                    for (var r = 0, i = this.data.datasets.length; r < i; ++r)
                      this._updateDataset(
                        r,
                        oe(e) ? e({ datasetIndex: r }) : e
                      );
                    this.notifyPlugins("afterDatasetsUpdate", { mode: e });
                  }
                },
              },
              {
                key: "_updateDataset",
                value: function (e, t) {
                  var n = this.getDatasetMeta(e),
                    r = { meta: n, index: e, mode: t, cancelable: !0 };
                  !1 !== this.notifyPlugins("beforeDatasetUpdate", r) &&
                    (n.controller._update(t),
                    (r.cancelable = !1),
                    this.notifyPlugins("afterDatasetUpdate", r));
                },
              },
              {
                key: "render",
                value: function () {
                  !1 !==
                    this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
                    (or.has(this)
                      ? this.attached && !or.running(this) && or.start(this)
                      : (this.draw(), la({ chart: this })));
                },
              },
              {
                key: "draw",
                value: function () {
                  var e;
                  if (this._resizeBeforeDraw) {
                    var t = this._resizeBeforeDraw,
                      n = t.width,
                      r = t.height;
                    this._resize(n, r), (this._resizeBeforeDraw = null);
                  }
                  if (
                    (this.clear(),
                    !(this.width <= 0 || this.height <= 0) &&
                      !1 !==
                        this.notifyPlugins("beforeDraw", { cancelable: !0 }))
                  ) {
                    var i = this._layers;
                    for (e = 0; e < i.length && i[e].z <= 0; ++e)
                      i[e].draw(this.chartArea);
                    for (this._drawDatasets(); e < i.length; ++e)
                      i[e].draw(this.chartArea);
                    this.notifyPlugins("afterDraw");
                  }
                },
              },
              {
                key: "_getSortedDatasetMetas",
                value: function (e) {
                  var t,
                    n,
                    r = this._sortedMetasets,
                    i = [];
                  for (t = 0, n = r.length; t < n; ++t) {
                    var a = r[t];
                    (e && !a.visible) || i.push(a);
                  }
                  return i;
                },
              },
              {
                key: "getSortedVisibleDatasetMetas",
                value: function () {
                  return this._getSortedDatasetMetas(!0);
                },
              },
              {
                key: "_drawDatasets",
                value: function () {
                  if (
                    !1 !==
                    this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
                  ) {
                    for (
                      var e = this.getSortedVisibleDatasetMetas(),
                        t = e.length - 1;
                      t >= 0;
                      --t
                    )
                      this._drawDataset(e[t]);
                    this.notifyPlugins("afterDatasetsDraw");
                  }
                },
              },
              {
                key: "_drawDataset",
                value: function (e) {
                  var t = this.ctx,
                    n = e._clip,
                    r = !n.disabled,
                    i = this.chartArea,
                    a = { meta: e, index: e.index, cancelable: !0 };
                  !1 !== this.notifyPlugins("beforeDatasetDraw", a) &&
                    (r &&
                      Ut(t, {
                        left: !1 === n.left ? 0 : i.left - n.left,
                        right: !1 === n.right ? this.width : i.right + n.right,
                        top: !1 === n.top ? 0 : i.top - n.top,
                        bottom:
                          !1 === n.bottom ? this.height : i.bottom + n.bottom,
                      }),
                    e.controller.draw(),
                    r && $t(t),
                    (a.cancelable = !1),
                    this.notifyPlugins("afterDatasetDraw", a));
                },
              },
              {
                key: "isPointInArea",
                value: function (e) {
                  return Ht(e, this.chartArea, this._minPadding);
                },
              },
              {
                key: "getElementsAtEventForMode",
                value: function (e, t, n, r) {
                  var i = fi.modes[t];
                  return "function" === typeof i ? i(this, e, n, r) : [];
                },
              },
              {
                key: "getDatasetMeta",
                value: function (e) {
                  var t = this.data.datasets[e],
                    n = this._metasets,
                    r = n
                      .filter(function (e) {
                        return e && e._dataset === t;
                      })
                      .pop();
                  return (
                    r ||
                      ((r = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: (t && t.order) || 0,
                        index: e,
                        _dataset: t,
                        _parsed: [],
                        _sorted: !1,
                      }),
                      n.push(r)),
                    r
                  );
                },
              },
              {
                key: "getContext",
                value: function () {
                  return (
                    this.$context ||
                    (this.$context = ln(null, { chart: this, type: "chart" }))
                  );
                },
              },
              {
                key: "getVisibleDatasetCount",
                value: function () {
                  return this.getSortedVisibleDatasetMetas().length;
                },
              },
              {
                key: "isDatasetVisible",
                value: function (e) {
                  var t = this.data.datasets[e];
                  if (!t) return !1;
                  var n = this.getDatasetMeta(e);
                  return "boolean" === typeof n.hidden ? !n.hidden : !t.hidden;
                },
              },
              {
                key: "setDatasetVisibility",
                value: function (e, t) {
                  this.getDatasetMeta(e).hidden = !t;
                },
              },
              {
                key: "toggleDataVisibility",
                value: function (e) {
                  this._hiddenIndices[e] = !this._hiddenIndices[e];
                },
              },
              {
                key: "getDataVisibility",
                value: function (e) {
                  return !this._hiddenIndices[e];
                },
              },
              {
                key: "_updateVisibility",
                value: function (e, t, n) {
                  var r = n ? "show" : "hide",
                    i = this.getDatasetMeta(e),
                    a = i.controller._resolveAnimations(void 0, r);
                  ae(t)
                    ? ((i.data[t].hidden = !n), this.update())
                    : (this.setDatasetVisibility(e, n),
                      a.update(i, { visible: n }),
                      this.update(function (t) {
                        return t.datasetIndex === e ? r : void 0;
                      }));
                },
              },
              {
                key: "hide",
                value: function (e, t) {
                  this._updateVisibility(e, t, !1);
                },
              },
              {
                key: "show",
                value: function (e, t) {
                  this._updateVisibility(e, t, !0);
                },
              },
              {
                key: "_destroyDatasetMeta",
                value: function (e) {
                  var t = this._metasets[e];
                  t && t.controller && t.controller._destroy(),
                    delete this._metasets[e];
                },
              },
              {
                key: "_stop",
                value: function () {
                  var e, t;
                  for (
                    this.stop(),
                      or.remove(this),
                      e = 0,
                      t = this.data.datasets.length;
                    e < t;
                    ++e
                  )
                    this._destroyDatasetMeta(e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.notifyPlugins("beforeDestroy");
                  var e = this.canvas,
                    t = this.ctx;
                  this._stop(),
                    this.config.clearCache(),
                    e &&
                      (this.unbindEvents(),
                      Bt(e, t),
                      this.platform.releaseContext(t),
                      (this.canvas = null),
                      (this.ctx = null)),
                    this.notifyPlugins("destroy"),
                    delete fa[this.id],
                    this.notifyPlugins("afterDestroy");
                },
              },
              {
                key: "toBase64Image",
                value: function () {
                  var e;
                  return (e = this.canvas).toDataURL.apply(e, arguments);
                },
              },
              {
                key: "bindEvents",
                value: function () {
                  this.bindUserEvents(),
                    this.options.responsive
                      ? this.bindResponsiveEvents()
                      : (this.attached = !0);
                },
              },
              {
                key: "bindUserEvents",
                value: function () {
                  var e = this,
                    t = this._listeners,
                    n = this.platform,
                    r = function (t, n, r) {
                      (t.offsetX = n), (t.offsetY = r), e._eventHandler(t);
                    };
                  q(this.options.events, function (i) {
                    return (function (r, i) {
                      n.addEventListener(e, r, i), (t[r] = i);
                    })(i, r);
                  });
                },
              },
              {
                key: "bindResponsiveEvents",
                value: function () {
                  var e = this;
                  this._responsiveListeners || (this._responsiveListeners = {});
                  var t,
                    n = this._responsiveListeners,
                    r = this.platform,
                    i = function (t, i) {
                      r.addEventListener(e, t, i), (n[t] = i);
                    },
                    a = function (t, i) {
                      n[t] && (r.removeEventListener(e, t, i), delete n[t]);
                    },
                    o = function (t, n) {
                      e.canvas && e.resize(t, n);
                    },
                    s = function n() {
                      a("attach", n),
                        (e.attached = !0),
                        e.resize(),
                        i("resize", o),
                        i("detach", t);
                    };
                  (t = function () {
                    (e.attached = !1),
                      a("resize", o),
                      e._stop(),
                      e._resize(0, 0),
                      i("attach", s);
                  }),
                    r.isAttached(this.canvas) ? s() : t();
                },
              },
              {
                key: "unbindEvents",
                value: function () {
                  var e = this;
                  q(this._listeners, function (t, n) {
                    e.platform.removeEventListener(e, n, t);
                  }),
                    (this._listeners = {}),
                    q(this._responsiveListeners, function (t, n) {
                      e.platform.removeEventListener(e, n, t);
                    }),
                    (this._responsiveListeners = void 0);
                },
              },
              {
                key: "updateHoverStyle",
                value: function (e, t, n) {
                  var r,
                    i,
                    a,
                    o = n ? "set" : "remove";
                  for (
                    "dataset" === t &&
                      this.getDatasetMeta(e[0].datasetIndex).controller[
                        "_" + o + "DatasetHoverStyle"
                      ](),
                      i = 0,
                      a = e.length;
                    i < a;
                    ++i
                  ) {
                    var s =
                      (r = e[i]) &&
                      this.getDatasetMeta(r.datasetIndex).controller;
                    s &&
                      s[o + "HoverStyle"](r.element, r.datasetIndex, r.index);
                  }
                },
              },
              {
                key: "getActiveElements",
                value: function () {
                  return this._active || [];
                },
              },
              {
                key: "setActiveElements",
                value: function (e) {
                  var t = this,
                    n = this._active || [],
                    r = e.map(function (e) {
                      var n = e.datasetIndex,
                        r = e.index,
                        i = t.getDatasetMeta(n);
                      if (!i) throw new Error("No dataset found at index " + n);
                      return { datasetIndex: n, element: i.data[r], index: r };
                    });
                  !K(r, n) &&
                    ((this._active = r),
                    (this._lastEvent = null),
                    this._updateHoverStyles(r, n));
                },
              },
              {
                key: "notifyPlugins",
                value: function (e, t, n) {
                  return this._plugins.notify(this, e, t, n);
                },
              },
              {
                key: "_updateHoverStyles",
                value: function (e, t, n) {
                  var r = this.options.hover,
                    i = function (e, t) {
                      return e.filter(function (e) {
                        return !t.some(function (t) {
                          return (
                            e.datasetIndex === t.datasetIndex &&
                            e.index === t.index
                          );
                        });
                      });
                    },
                    a = i(t, e),
                    o = n ? e : i(e, t);
                  a.length && this.updateHoverStyle(a, r.mode, !1),
                    o.length && r.mode && this.updateHoverStyle(o, r.mode, !0);
                },
              },
              {
                key: "_eventHandler",
                value: function (e, t) {
                  var n = this,
                    r = {
                      event: e,
                      replay: t,
                      cancelable: !0,
                      inChartArea: this.isPointInArea(e),
                    },
                    i = function (t) {
                      return (t.options.events || n.options.events).includes(
                        e.native.type
                      );
                    };
                  if (!1 !== this.notifyPlugins("beforeEvent", r, i)) {
                    var a = this._handleEvent(e, t, r.inChartArea);
                    return (
                      (r.cancelable = !1),
                      this.notifyPlugins("afterEvent", r, i),
                      (a || r.changed) && this.render(),
                      this
                    );
                  }
                },
              },
              {
                key: "_handleEvent",
                value: function (e, t, n) {
                  var r = this._active,
                    i = void 0 === r ? [] : r,
                    a = this.options,
                    o = t,
                    s = this._getActiveElements(e, i, n, o),
                    l = (function (e) {
                      return (
                        "mouseup" === e.type ||
                        "click" === e.type ||
                        "contextmenu" === e.type
                      );
                    })(e),
                    u = (function (e, t, n, r) {
                      return n && "mouseout" !== e.type ? (r ? t : e) : null;
                    })(e, this._lastEvent, n, l);
                  n &&
                    ((this._lastEvent = null),
                    Q(a.onHover, [e, s, this], this),
                    l && Q(a.onClick, [e, s, this], this));
                  var c = !K(s, i);
                  return (
                    (c || t) &&
                      ((this._active = s), this._updateHoverStyles(s, i, t)),
                    (this._lastEvent = u),
                    c
                  );
                },
              },
              {
                key: "_getActiveElements",
                value: function (e, t, n, r) {
                  if ("mouseout" === e.type) return [];
                  if (!n) return t;
                  var i = this.options.hover;
                  return this.getElementsAtEventForMode(e, i.mode, i, r);
                },
              },
            ]),
            e
          );
        })(),
        va = function () {
          return q(pa.instances, function (e) {
            return e._plugins.invalidate();
          });
        },
        ga = !0;
      function ma(e, t, n) {
        var r = t.startAngle,
          i = t.pixelMargin,
          a = t.x,
          o = t.y,
          s = t.outerRadius,
          l = t.innerRadius,
          u = i / s;
        e.beginPath(),
          e.arc(a, o, s, r - u, n + u),
          l > i
            ? ((u = i / l), e.arc(a, o, l, n + u, r - u, !0))
            : e.arc(a, o, i, n + de, r - de),
          e.closePath(),
          e.clip();
      }
      function ya(e, t, n, r) {
        var i = tn(e.options.borderRadius, [
            "outerStart",
            "outerEnd",
            "innerStart",
            "innerEnd",
          ]),
          a = (n - t) / 2,
          o = Math.min(a, (r * t) / 2),
          s = function (e) {
            var t = ((n - Math.min(a, e)) * r) / 2;
            return Te(e, 0, Math.min(a, t));
          };
        return {
          outerStart: s(i.outerStart),
          outerEnd: s(i.outerEnd),
          innerStart: Te(i.innerStart, 0, o),
          innerEnd: Te(i.innerEnd, 0, o),
        };
      }
      function ba(e, t, n, r) {
        return { x: n + e * Math.cos(t), y: r + e * Math.sin(t) };
      }
      function xa(e, t, n, r, i, a) {
        var o = t.x,
          s = t.y,
          l = t.startAngle,
          u = t.pixelMargin,
          c = t.innerRadius,
          f = Math.max(t.outerRadius + r + n - u, 0),
          h = c > 0 ? c + r + n + u : 0,
          d = 0,
          p = i - l;
        if (r) {
          var v = ((c > 0 ? c - r : 0) + (f > 0 ? f - r : 0)) / 2;
          d = (p - (0 !== v ? (p * v) / (v + r) : p)) / 2;
        }
        var g = (p - Math.max(0.001, p * f - n / le) / f) / 2,
          m = l + g + d,
          y = i - g - d,
          b = ya(t, h, f, y - m),
          x = b.outerStart,
          k = b.outerEnd,
          w = b.innerStart,
          _ = b.innerEnd,
          S = f - x,
          M = f - k,
          E = m + x / S,
          P = y - k / M,
          C = h + w,
          O = h + _,
          T = m + w / C,
          L = y - _ / O;
        if ((e.beginPath(), a)) {
          if ((e.arc(o, s, f, E, P), k > 0)) {
            var I = ba(M, P, o, s);
            e.arc(I.x, I.y, k, P, y + de);
          }
          var D = ba(O, y, o, s);
          if ((e.lineTo(D.x, D.y), _ > 0)) {
            var N = ba(O, L, o, s);
            e.arc(N.x, N.y, _, y + de, L + Math.PI);
          }
          if ((e.arc(o, s, h, y - _ / h, m + w / h, !0), w > 0)) {
            var j = ba(C, T, o, s);
            e.arc(j.x, j.y, w, T + Math.PI, m - de);
          }
          var z = ba(S, m, o, s);
          if ((e.lineTo(z.x, z.y), x > 0)) {
            var R = ba(S, E, o, s);
            e.arc(R.x, R.y, x, m - de, E);
          }
        } else {
          e.moveTo(o, s);
          var A = Math.cos(E) * f + o,
            F = Math.sin(E) * f + s;
          e.lineTo(A, F);
          var B = Math.cos(P) * f + o,
            V = Math.sin(P) * f + s;
          e.lineTo(B, V);
        }
        e.closePath();
      }
      function ka(e, t, n, r, i, a) {
        var o = t.options,
          s = o.borderWidth,
          l = o.borderJoinStyle,
          u = "inner" === o.borderAlign;
        s &&
          (u
            ? ((e.lineWidth = 2 * s), (e.lineJoin = l || "round"))
            : ((e.lineWidth = s), (e.lineJoin = l || "bevel")),
          t.fullCircles &&
            (function (e, t, n) {
              var r,
                i = t.x,
                a = t.y,
                o = t.startAngle,
                s = t.pixelMargin,
                l = t.fullCircles,
                u = Math.max(t.outerRadius - s, 0),
                c = t.innerRadius + s;
              for (
                n && ma(e, t, o + ue),
                  e.beginPath(),
                  e.arc(i, a, c, o + ue, o, !0),
                  r = 0;
                r < l;
                ++r
              )
                e.stroke();
              for (e.beginPath(), e.arc(i, a, u, o, o + ue), r = 0; r < l; ++r)
                e.stroke();
            })(e, t, u),
          u && ma(e, t, i),
          xa(e, t, n, r, i, a),
          e.stroke());
      }
      Object.defineProperties(pa, {
        defaults: { enumerable: ga, value: zt },
        instances: { enumerable: ga, value: fa },
        overrides: { enumerable: ga, value: Lt },
        registry: { enumerable: ga, value: Zr },
        version: { enumerable: ga, value: "3.9.1" },
        getChart: { enumerable: ga, value: ha },
        register: {
          enumerable: ga,
          value: function () {
            Zr.add.apply(Zr, arguments), va();
          },
        },
        unregister: {
          enumerable: ga,
          value: function () {
            Zr.remove.apply(Zr, arguments), va();
          },
        },
      });
      var wa = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e) {
          var r;
          return (
            j(this, n),
            ((r = t.call(this)).options = void 0),
            (r.circumference = void 0),
            (r.startAngle = void 0),
            (r.endAngle = void 0),
            (r.innerRadius = void 0),
            (r.outerRadius = void 0),
            (r.pixelMargin = 0),
            (r.fullCircles = 0),
            e && Object.assign(S(r), e),
            r
          );
        }
        return (
          R(n, [
            {
              key: "inRange",
              value: function (e, t, n) {
                var r = Me(this.getProps(["x", "y"], n), { x: e, y: t }),
                  i = r.angle,
                  a = r.distance,
                  o = this.getProps(
                    [
                      "startAngle",
                      "endAngle",
                      "innerRadius",
                      "outerRadius",
                      "circumference",
                    ],
                    n
                  ),
                  s = o.startAngle,
                  l = o.endAngle,
                  u = o.innerRadius,
                  c = o.outerRadius,
                  f = o.circumference,
                  h = this.options.spacing / 2,
                  d = $(f, l - s) >= ue || Oe(i, s, l),
                  p = Le(a, u + h, c + h);
                return d && p;
              },
            },
            {
              key: "getCenterPoint",
              value: function (e) {
                var t = this.getProps(
                    [
                      "x",
                      "y",
                      "startAngle",
                      "endAngle",
                      "innerRadius",
                      "outerRadius",
                      "circumference",
                    ],
                    e
                  ),
                  n = t.x,
                  r = t.y,
                  i = t.startAngle,
                  a = t.endAngle,
                  o = t.innerRadius,
                  s = t.outerRadius,
                  l = this.options,
                  u = l.offset,
                  c = (i + a) / 2,
                  f = (o + s + l.spacing + u) / 2;
                return { x: n + Math.cos(c) * f, y: r + Math.sin(c) * f };
              },
            },
            {
              key: "tooltipPosition",
              value: function (e) {
                return this.getCenterPoint(e);
              },
            },
            {
              key: "draw",
              value: function (e) {
                var t = this.options,
                  n = this.circumference,
                  r = (t.offset || 0) / 2,
                  i = (t.spacing || 0) / 2,
                  a = t.circular;
                if (
                  ((this.pixelMargin = "inner" === t.borderAlign ? 0.33 : 0),
                  (this.fullCircles = n > ue ? Math.floor(n / ue) : 0),
                  !(0 === n || this.innerRadius < 0 || this.outerRadius < 0))
                ) {
                  e.save();
                  var o = 0;
                  if (r) {
                    o = r / 2;
                    var s = (this.startAngle + this.endAngle) / 2;
                    e.translate(Math.cos(s) * o, Math.sin(s) * o),
                      this.circumference >= le && (o = r);
                  }
                  (e.fillStyle = t.backgroundColor),
                    (e.strokeStyle = t.borderColor);
                  var l = (function (e, t, n, r, i) {
                    var a = t.fullCircles,
                      o = t.startAngle,
                      s = t.circumference,
                      l = t.endAngle;
                    if (a) {
                      xa(e, t, n, r, o + ue, i);
                      for (var u = 0; u < a; ++u) e.fill();
                      isNaN(s) ||
                        ((l = o + (s % ue)), s % ue === 0 && (l += ue));
                    }
                    return xa(e, t, n, r, l, i), e.fill(), l;
                  })(e, this, o, i, a);
                  ka(e, this, o, i, l, a), e.restore();
                }
              },
            },
          ]),
          n
        );
      })(Fr);
      function _a(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t;
        (e.lineCap = $(n.borderCapStyle, t.borderCapStyle)),
          e.setLineDash($(n.borderDash, t.borderDash)),
          (e.lineDashOffset = $(n.borderDashOffset, t.borderDashOffset)),
          (e.lineJoin = $(n.borderJoinStyle, t.borderJoinStyle)),
          (e.lineWidth = $(n.borderWidth, t.borderWidth)),
          (e.strokeStyle = $(n.borderColor, t.borderColor));
      }
      function Sa(e, t, n) {
        e.lineTo(n.x, n.y);
      }
      function Ma(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = e.length,
          i = n.start,
          a = void 0 === i ? 0 : i,
          o = n.end,
          s = void 0 === o ? r - 1 : o,
          l = t.start,
          u = t.end,
          c = Math.max(a, l),
          f = Math.min(s, u),
          h = (a < l && s < l) || (a > u && s > u);
        return {
          count: r,
          start: c,
          loop: t.loop,
          ilen: f < c && !h ? r + f - c : f - c,
        };
      }
      function Ea(e, t, n, r) {
        var i,
          a,
          o,
          s = t.points,
          l = t.options,
          u = Ma(s, n, r),
          c = u.count,
          f = u.start,
          h = u.loop,
          d = u.ilen,
          p = (function (e) {
            return e.stepped
              ? Yt
              : e.tension || "monotone" === e.cubicInterpolationMode
              ? Qt
              : Sa;
          })(l),
          v = r || {},
          g = v.move,
          m = void 0 === g || g,
          y = v.reverse;
        for (i = 0; i <= d; ++i)
          (a = s[(f + (y ? d - i : i)) % c]).skip ||
            (m ? (e.moveTo(a.x, a.y), (m = !1)) : p(e, o, a, y, l.stepped),
            (o = a));
        return h && p(e, o, (a = s[(f + (y ? d : 0)) % c]), y, l.stepped), !!h;
      }
      function Pa(e, t, n, r) {
        var i,
          a,
          o,
          s,
          l,
          u,
          c = t.points,
          f = Ma(c, n, r),
          h = f.count,
          d = f.start,
          p = f.ilen,
          v = r || {},
          g = v.move,
          m = void 0 === g || g,
          y = v.reverse,
          b = 0,
          x = 0,
          k = function (e) {
            return (d + (y ? p - e : e)) % h;
          },
          w = function () {
            s !== l && (e.lineTo(b, l), e.lineTo(b, s), e.lineTo(b, u));
          };
        for (m && ((a = c[k(0)]), e.moveTo(a.x, a.y)), i = 0; i <= p; ++i)
          if (!(a = c[k(i)]).skip) {
            var _ = a.x,
              S = a.y,
              M = 0 | _;
            M === o
              ? (S < s ? (s = S) : S > l && (l = S), (b = (x * b + _) / ++x))
              : (w(), e.lineTo(_, S), (o = M), (x = 0), (s = l = S)),
              (u = S);
          }
        w();
      }
      function Ca(e) {
        var t = e.options,
          n = t.borderDash && t.borderDash.length;
        return !e._decimated &&
          !e._loop &&
          !t.tension &&
          "monotone" !== t.cubicInterpolationMode &&
          !t.stepped &&
          !n
          ? Pa
          : Ea;
      }
      (wa.id = "arc"),
        (wa.defaults = {
          borderAlign: "center",
          borderColor: "#fff",
          borderJoinStyle: void 0,
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          spacing: 0,
          angle: void 0,
          circular: !0,
        }),
        (wa.defaultRoutes = { backgroundColor: "backgroundColor" });
      var Oa = "function" === typeof Path2D;
      function Ta(e, t, n, r) {
        Oa && !t.options.segment
          ? (function (e, t, n, r) {
              var i = t._path;
              i ||
                ((i = t._path = new Path2D()),
                t.path(i, n, r) && i.closePath()),
                _a(e, t.options),
                e.stroke(i);
            })(e, t, n, r)
          : (function (e, t, n, r) {
              var i,
                a = t.segments,
                o = t.options,
                s = Ca(t),
                l = N(a);
              try {
                for (l.s(); !(i = l.n()).done; ) {
                  var u = i.value;
                  _a(e, o, u.style),
                    e.beginPath(),
                    s(e, t, u, { start: n, end: n + r - 1 }) && e.closePath(),
                    e.stroke();
                }
              } catch (c) {
                l.e(c);
              } finally {
                l.f();
              }
            })(e, t, n, r);
      }
      var La = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e) {
          var r;
          return (
            j(this, n),
            ((r = t.call(this)).animated = !0),
            (r.options = void 0),
            (r._chart = void 0),
            (r._loop = void 0),
            (r._fullLoop = void 0),
            (r._path = void 0),
            (r._points = void 0),
            (r._segments = void 0),
            (r._decimated = !1),
            (r._pointsUpdated = !1),
            (r._datasetIndex = void 0),
            e && Object.assign(S(r), e),
            r
          );
        }
        return (
          R(n, [
            {
              key: "updateControlPoints",
              value: function (e, t) {
                var n = this.options;
                if (
                  (n.tension || "monotone" === n.cubicInterpolationMode) &&
                  !n.stepped &&
                  !this._pointsUpdated
                ) {
                  var r = n.spanGaps ? this._loop : this._fullLoop;
                  Ln(this._points, n, e, r, t), (this._pointsUpdated = !0);
                }
              },
            },
            {
              key: "points",
              get: function () {
                return this._points;
              },
              set: function (e) {
                (this._points = e),
                  delete this._segments,
                  delete this._path,
                  (this._pointsUpdated = !1);
              },
            },
            {
              key: "segments",
              get: function () {
                return (
                  this._segments ||
                  (this._segments = (function (e, t) {
                    var n = e.points,
                      r = e.options.spanGaps,
                      i = n.length;
                    if (!i) return [];
                    var a = !!e._loop,
                      o = (function (e, t, n, r) {
                        var i = 0,
                          a = t - 1;
                        if (n && !r) for (; i < t && !e[i].skip; ) i++;
                        for (; i < t && e[i].skip; ) i++;
                        for (i %= t, n && (a += i); a > i && e[a % t].skip; )
                          a--;
                        return { start: i, end: (a %= t) };
                      })(n, i, a, r),
                      s = o.start,
                      l = o.end;
                    return nr(
                      e,
                      !0 === r
                        ? [{ start: s, end: l, loop: a }]
                        : (function (e, t, n, r) {
                            var i,
                              a = e.length,
                              o = [],
                              s = t,
                              l = e[t];
                            for (i = t + 1; i <= n; ++i) {
                              var u = e[i % a];
                              u.skip || u.stop
                                ? l.skip ||
                                  ((r = !1),
                                  o.push({
                                    start: t % a,
                                    end: (i - 1) % a,
                                    loop: r,
                                  }),
                                  (t = s = u.stop ? i : null))
                                : ((s = i), l.skip && (t = i)),
                                (l = u);
                            }
                            return (
                              null !== s &&
                                o.push({ start: t % a, end: s % a, loop: r }),
                              o
                            );
                          })(
                            n,
                            s,
                            l < s ? l + i : l,
                            !!e._fullLoop && 0 === s && l === i - 1
                          ),
                      n,
                      t
                    );
                  })(this, this.options.segment))
                );
              },
            },
            {
              key: "first",
              value: function () {
                var e = this.segments,
                  t = this.points;
                return e.length && t[e[0].start];
              },
            },
            {
              key: "last",
              value: function () {
                var e = this.segments,
                  t = this.points,
                  n = e.length;
                return n && t[e[n - 1].end];
              },
            },
            {
              key: "interpolate",
              value: function (e, t) {
                var n = this.options,
                  r = e[t],
                  i = this.points,
                  a = tr(this, { property: t, start: r, end: r });
                if (a.length) {
                  var o,
                    s,
                    l = [],
                    u = (function (e) {
                      return e.stepped
                        ? $n
                        : e.tension || "monotone" === e.cubicInterpolationMode
                        ? Yn
                        : Un;
                    })(n);
                  for (o = 0, s = a.length; o < s; ++o) {
                    var c = a[o],
                      f = c.start,
                      h = c.end,
                      d = i[f],
                      p = i[h];
                    if (d !== p) {
                      var v = u(
                        d,
                        p,
                        Math.abs((r - d[t]) / (p[t] - d[t])),
                        n.stepped
                      );
                      (v[t] = e[t]), l.push(v);
                    } else l.push(d);
                  }
                  return 1 === l.length ? l[0] : l;
                }
              },
            },
            {
              key: "pathSegment",
              value: function (e, t, n) {
                return Ca(this)(e, this, t, n);
              },
            },
            {
              key: "path",
              value: function (e, t, n) {
                var r = this.segments,
                  i = Ca(this),
                  a = this._loop;
                (t = t || 0), (n = n || this.points.length - t);
                var o,
                  s = N(r);
                try {
                  for (s.s(); !(o = s.n()).done; ) {
                    a &= i(e, this, o.value, { start: t, end: t + n - 1 });
                  }
                } catch (l) {
                  s.e(l);
                } finally {
                  s.f();
                }
                return !!a;
              },
            },
            {
              key: "draw",
              value: function (e, t, n, r) {
                var i = this.options || {};
                (this.points || []).length &&
                  i.borderWidth &&
                  (e.save(), Ta(e, this, n, r), e.restore()),
                  this.animated &&
                    ((this._pointsUpdated = !1), (this._path = void 0));
              },
            },
          ]),
          n
        );
      })(Fr);
      function Ia(e, t, n, r) {
        var i = e.options,
          a = e.getProps([n], r)[n];
        return Math.abs(t - a) < i.radius + i.hitRadius;
      }
      (La.id = "line"),
        (La.defaults = {
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: "default",
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        }),
        (La.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        }),
        (La.descriptors = {
          _scriptable: !0,
          _indexable: function (e) {
            return "borderDash" !== e && "fill" !== e;
          },
        });
      var Da = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e) {
          var r;
          return (
            j(this, n),
            ((r = t.call(this)).options = void 0),
            (r.parsed = void 0),
            (r.skip = void 0),
            (r.stop = void 0),
            e && Object.assign(S(r), e),
            r
          );
        }
        return (
          R(n, [
            {
              key: "inRange",
              value: function (e, t, n) {
                var r = this.options,
                  i = this.getProps(["x", "y"], n),
                  a = i.x,
                  o = i.y;
                return (
                  Math.pow(e - a, 2) + Math.pow(t - o, 2) <
                  Math.pow(r.hitRadius + r.radius, 2)
                );
              },
            },
            {
              key: "inXRange",
              value: function (e, t) {
                return Ia(this, e, "x", t);
              },
            },
            {
              key: "inYRange",
              value: function (e, t) {
                return Ia(this, e, "y", t);
              },
            },
            {
              key: "getCenterPoint",
              value: function (e) {
                var t = this.getProps(["x", "y"], e);
                return { x: t.x, y: t.y };
              },
            },
            {
              key: "size",
              value: function (e) {
                var t = (e = e || this.options || {}).radius || 0;
                return (
                  2 *
                  ((t = Math.max(t, (t && e.hoverRadius) || 0)) +
                    ((t && e.borderWidth) || 0))
                );
              },
            },
            {
              key: "draw",
              value: function (e, t) {
                var n = this.options;
                this.skip ||
                  n.radius < 0.1 ||
                  !Ht(this, t, this.size(n) / 2) ||
                  ((e.strokeStyle = n.borderColor),
                  (e.lineWidth = n.borderWidth),
                  (e.fillStyle = n.backgroundColor),
                  Vt(e, n, this.x, this.y));
              },
            },
            {
              key: "getRange",
              value: function () {
                var e = this.options || {};
                return e.radius + e.hitRadius;
              },
            },
          ]),
          n
        );
      })(Fr);
      function Na(e, t) {
        var n,
          r,
          i,
          a,
          o,
          s = e.getProps(["x", "y", "base", "width", "height"], t),
          l = s.x,
          u = s.y,
          c = s.base,
          f = s.width,
          h = s.height;
        return (
          e.horizontal
            ? ((o = h / 2),
              (n = Math.min(l, c)),
              (r = Math.max(l, c)),
              (i = u - o),
              (a = u + o))
            : ((n = l - (o = f / 2)),
              (r = l + o),
              (i = Math.min(u, c)),
              (a = Math.max(u, c))),
          { left: n, top: i, right: r, bottom: a }
        );
      }
      function ja(e, t, n, r) {
        return e ? 0 : Te(t, n, r);
      }
      function za(e) {
        var t = Na(e),
          n = t.right - t.left,
          r = t.bottom - t.top,
          i = (function (e, t, n) {
            var r = e.options.borderWidth,
              i = e.borderSkipped,
              a = nn(r);
            return {
              t: ja(i.top, a.top, 0, n),
              r: ja(i.right, a.right, 0, t),
              b: ja(i.bottom, a.bottom, 0, n),
              l: ja(i.left, a.left, 0, t),
            };
          })(e, n / 2, r / 2),
          a = (function (e, t, n) {
            var r = e.getProps(["enableBorderRadius"]).enableBorderRadius,
              i = e.options.borderRadius,
              a = rn(i),
              o = Math.min(t, n),
              s = e.borderSkipped,
              l = r || W(i);
            return {
              topLeft: ja(!l || s.top || s.left, a.topLeft, 0, o),
              topRight: ja(!l || s.top || s.right, a.topRight, 0, o),
              bottomLeft: ja(!l || s.bottom || s.left, a.bottomLeft, 0, o),
              bottomRight: ja(!l || s.bottom || s.right, a.bottomRight, 0, o),
            };
          })(e, n / 2, r / 2);
        return {
          outer: { x: t.left, y: t.top, w: n, h: r, radius: a },
          inner: {
            x: t.left + i.l,
            y: t.top + i.t,
            w: n - i.l - i.r,
            h: r - i.t - i.b,
            radius: {
              topLeft: Math.max(0, a.topLeft - Math.max(i.t, i.l)),
              topRight: Math.max(0, a.topRight - Math.max(i.t, i.r)),
              bottomLeft: Math.max(0, a.bottomLeft - Math.max(i.b, i.l)),
              bottomRight: Math.max(0, a.bottomRight - Math.max(i.b, i.r)),
            },
          },
        };
      }
      function Ra(e, t, n, r) {
        var i = null === t,
          a = null === n,
          o = e && !(i && a) && Na(e, r);
        return (
          o && (i || Le(t, o.left, o.right)) && (a || Le(n, o.top, o.bottom))
        );
      }
      function Aa(e, t) {
        e.rect(t.x, t.y, t.w, t.h);
      }
      function Fa(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = e.x !== n.x ? -t : 0,
          i = e.y !== n.y ? -t : 0,
          a = (e.x + e.w !== n.x + n.w ? t : 0) - r,
          o = (e.y + e.h !== n.y + n.h ? t : 0) - i;
        return {
          x: e.x + r,
          y: e.y + i,
          w: e.w + a,
          h: e.h + o,
          radius: e.radius,
        };
      }
      (Da.id = "point"),
        (Da.defaults = {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: "circle",
          radius: 3,
          rotation: 0,
        }),
        (Da.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        });
      var Ba = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e) {
          var r;
          return (
            j(this, n),
            ((r = t.call(this)).options = void 0),
            (r.horizontal = void 0),
            (r.base = void 0),
            (r.width = void 0),
            (r.height = void 0),
            (r.inflateAmount = void 0),
            e && Object.assign(S(r), e),
            r
          );
        }
        return (
          R(n, [
            {
              key: "draw",
              value: function (e) {
                var t,
                  n = this.inflateAmount,
                  r = this.options,
                  i = r.borderColor,
                  a = r.backgroundColor,
                  o = za(this),
                  s = o.inner,
                  l = o.outer,
                  u =
                    (t = l.radius).topLeft ||
                    t.topRight ||
                    t.bottomLeft ||
                    t.bottomRight
                      ? Gt
                      : Aa;
                e.save(),
                  (l.w === s.w && l.h === s.h) ||
                    (e.beginPath(),
                    u(e, Fa(l, n, s)),
                    e.clip(),
                    u(e, Fa(s, -n, l)),
                    (e.fillStyle = i),
                    e.fill("evenodd")),
                  e.beginPath(),
                  u(e, Fa(s, n)),
                  (e.fillStyle = a),
                  e.fill(),
                  e.restore();
              },
            },
            {
              key: "inRange",
              value: function (e, t, n) {
                return Ra(this, e, t, n);
              },
            },
            {
              key: "inXRange",
              value: function (e, t) {
                return Ra(this, e, null, t);
              },
            },
            {
              key: "inYRange",
              value: function (e, t) {
                return Ra(this, null, e, t);
              },
            },
            {
              key: "getCenterPoint",
              value: function (e) {
                var t = this.getProps(["x", "y", "base", "horizontal"], e),
                  n = t.x,
                  r = t.y,
                  i = t.base,
                  a = t.horizontal;
                return { x: a ? (n + i) / 2 : n, y: a ? r : (r + i) / 2 };
              },
            },
            {
              key: "getRange",
              value: function (e) {
                return "x" === e ? this.width / 2 : this.height / 2;
              },
            },
          ]),
          n
        );
      })(Fr);
      (Ba.id = "bar"),
        (Ba.defaults = {
          borderSkipped: "start",
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: "auto",
          pointStyle: void 0,
        }),
        (Ba.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        });
      var Va = Object.freeze({
        __proto__: null,
        ArcElement: wa,
        LineElement: La,
        PointElement: Da,
        BarElement: Ba,
      });
      function Wa(e) {
        if (e._decimated) {
          var t = e._data;
          delete e._decimated,
            delete e._data,
            Object.defineProperty(e, "data", { value: t });
        }
      }
      function Ha(e) {
        e.data.datasets.forEach(function (e) {
          Wa(e);
        });
      }
      var Ua = {
        id: "decimation",
        defaults: { algorithm: "min-max", enabled: !1 },
        beforeElementsUpdate: function (e, t, n) {
          if (n.enabled) {
            var r = e.width;
            e.data.datasets.forEach(function (t, i) {
              var a = t._data,
                o = t.indexAxis,
                s = e.getDatasetMeta(i),
                l = a || t.data;
              if (
                "y" !== sn([o, e.options.indexAxis]) &&
                s.controller.supportsDecimation
              ) {
                var u = e.scales[s.xAxisID];
                if (
                  ("linear" === u.type || "time" === u.type) &&
                  !e.options.parsing
                ) {
                  var c = (function (e, t) {
                      var n = t.length,
                        r = 0,
                        i = e.iScale,
                        a = i.getUserBounds(),
                        o = a.min,
                        s = a.max,
                        l = a.minDefined,
                        u = a.maxDefined;
                      return (
                        l && (r = Te(De(t, i.axis, o).lo, 0, n - 1)),
                        {
                          start: r,
                          count: u
                            ? Te(De(t, i.axis, s).hi + 1, r, n) - r
                            : n - r,
                        }
                      );
                    })(s, l),
                    f = c.start,
                    h = c.count;
                  if (h <= (n.threshold || 4 * r)) Wa(t);
                  else {
                    var d;
                    switch (
                      (B(a) &&
                        ((t._data = l),
                        delete t.data,
                        Object.defineProperty(t, "data", {
                          configurable: !0,
                          enumerable: !0,
                          get: function () {
                            return this._decimated;
                          },
                          set: function (e) {
                            this._data = e;
                          },
                        })),
                      n.algorithm)
                    ) {
                      case "lttb":
                        d = (function (e, t, n, r, i) {
                          var a = i.samples || r;
                          if (a >= n) return e.slice(t, t + n);
                          var o,
                            s,
                            l,
                            u,
                            c,
                            f = [],
                            h = (n - 2) / (a - 2),
                            d = 0,
                            p = t + n - 1,
                            v = t;
                          for (f[d++] = e[v], o = 0; o < a - 2; o++) {
                            var g = 0,
                              m = 0,
                              y = void 0,
                              b = Math.floor((o + 1) * h) + 1 + t,
                              x = Math.min(Math.floor((o + 2) * h) + 1, n) + t,
                              k = x - b;
                            for (y = b; y < x; y++)
                              (g += e[y].x), (m += e[y].y);
                            (g /= k), (m /= k);
                            var w = Math.floor(o * h) + 1 + t,
                              _ = Math.min(Math.floor((o + 1) * h) + 1, n) + t,
                              S = e[v],
                              M = S.x,
                              E = S.y;
                            for (l = u = -1, y = w; y < _; y++)
                              (u =
                                0.5 *
                                Math.abs(
                                  (M - g) * (e[y].y - E) -
                                    (M - e[y].x) * (m - E)
                                )) > l && ((l = u), (s = e[y]), (c = y));
                            (f[d++] = s), (v = c);
                          }
                          return (f[d++] = e[p]), f;
                        })(l, f, h, r, n);
                        break;
                      case "min-max":
                        d = (function (e, t, n, r) {
                          var i,
                            a,
                            o,
                            s,
                            l,
                            u,
                            c,
                            f,
                            h,
                            d,
                            p = 0,
                            v = 0,
                            g = [],
                            m = t + n - 1,
                            y = e[t].x,
                            b = e[m].x - y;
                          for (i = t; i < t + n; ++i) {
                            (o = (((a = e[i]).x - y) / b) * r), (s = a.y);
                            var x = 0 | o;
                            if (x === l)
                              s < h
                                ? ((h = s), (u = i))
                                : s > d && ((d = s), (c = i)),
                                (p = (v * p + a.x) / ++v);
                            else {
                              var k = i - 1;
                              if (!B(u) && !B(c)) {
                                var w = Math.min(u, c),
                                  S = Math.max(u, c);
                                w !== f &&
                                  w !== k &&
                                  g.push(_(_({}, e[w]), {}, { x: p })),
                                  S !== f &&
                                    S !== k &&
                                    g.push(_(_({}, e[S]), {}, { x: p }));
                              }
                              i > 0 && k !== f && g.push(e[k]),
                                g.push(a),
                                (l = x),
                                (v = 0),
                                (h = d = s),
                                (u = c = f = i);
                            }
                          }
                          return g;
                        })(l, f, h, r);
                        break;
                      default:
                        throw new Error(
                          "Unsupported decimation algorithm '".concat(
                            n.algorithm,
                            "'"
                          )
                        );
                    }
                    t._decimated = d;
                  }
                }
              }
            });
          } else Ha(e);
        },
        destroy: function (e) {
          Ha(e);
        },
      };
      function $a(e, t, n, r) {
        if (!r) {
          var i = t[e],
            a = n[e];
          return (
            "angle" === e && ((i = Ce(i)), (a = Ce(a))),
            { property: e, start: i, end: a }
          );
        }
      }
      function Ya(e, t, n) {
        for (; t > e; t--) {
          var r = n[t];
          if (!isNaN(r.x) && !isNaN(r.y)) break;
        }
        return t;
      }
      function Qa(e, t, n, r) {
        return e && t ? r(e[n], t[n]) : e ? e[n] : t ? t[n] : 0;
      }
      function qa(e, t) {
        var n = [],
          r = !1;
        return (
          V(e)
            ? ((r = !0), (n = e))
            : (n = (function (e, t) {
                var n = e || {},
                  r = n.x,
                  i = void 0 === r ? null : r,
                  a = n.y,
                  o = void 0 === a ? null : a,
                  s = t.points,
                  l = [];
                return (
                  t.segments.forEach(function (e) {
                    var t = e.start,
                      n = e.end;
                    n = Ya(t, n, s);
                    var r = s[t],
                      a = s[n];
                    null !== o
                      ? (l.push({ x: r.x, y: o }), l.push({ x: a.x, y: o }))
                      : null !== i &&
                        (l.push({ x: i, y: r.y }), l.push({ x: i, y: a.y }));
                  }),
                  l
                );
              })(e, t)),
          n.length
            ? new La({
                points: n,
                options: { tension: 0 },
                _loop: r,
                _fullLoop: r,
              })
            : null
        );
      }
      function Ka(e) {
        return e && !1 !== e.fill;
      }
      function Xa(e, t, n) {
        var r,
          i = e[t].fill,
          a = [t];
        if (!n) return i;
        for (; !1 !== i && -1 === a.indexOf(i); ) {
          if (!H(i)) return i;
          if (!(r = e[i])) return !1;
          if (r.visible) return i;
          a.push(i), (i = r.fill);
        }
        return !1;
      }
      function Ga(e, t, n) {
        var r = (function (e) {
          var t = e.options,
            n = t.fill,
            r = $(n && n.target, n);
          void 0 === r && (r = !!t.backgroundColor);
          if (!1 === r || null === r) return !1;
          if (!0 === r) return "origin";
          return r;
        })(e);
        if (W(r)) return !isNaN(r.value) && r;
        var i = parseFloat(r);
        return H(i) && Math.floor(i) === i
          ? (function (e, t, n, r) {
              ("-" !== e && "+" !== e) || (n = t + n);
              if (n === t || n < 0 || n >= r) return !1;
              return n;
            })(r[0], t, i, n)
          : ["origin", "start", "end", "stack", "shape"].indexOf(r) >= 0 && r;
      }
      function Ja(e, t, n) {
        for (var r = [], i = 0; i < n.length; i++) {
          var a = Za(n[i], t, "x"),
            o = a.first,
            s = a.last,
            l = a.point;
          if (!(!l || (o && s)))
            if (o) r.unshift(l);
            else if ((e.push(l), !s)) break;
        }
        e.push.apply(e, r);
      }
      function Za(e, t, n) {
        var r = e.interpolate(t, n);
        if (!r) return {};
        for (
          var i = r[n], a = e.segments, o = e.points, s = !1, l = !1, u = 0;
          u < a.length;
          u++
        ) {
          var c = a[u],
            f = o[c.start][n],
            h = o[c.end][n];
          if (Le(i, f, h)) {
            (s = i === f), (l = i === h);
            break;
          }
        }
        return { first: s, last: l, point: r };
      }
      var eo = (function () {
        function e(t) {
          j(this, e), (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
        }
        return (
          R(e, [
            {
              key: "pathSegment",
              value: function (e, t, n) {
                var r = this.x,
                  i = this.y,
                  a = this.radius;
                return (
                  (t = t || { start: 0, end: ue }),
                  e.arc(r, i, a, t.end, t.start, !0),
                  !n.bounds
                );
              },
            },
            {
              key: "interpolate",
              value: function (e) {
                var t = this.x,
                  n = this.y,
                  r = this.radius,
                  i = e.angle;
                return {
                  x: t + Math.cos(i) * r,
                  y: n + Math.sin(i) * r,
                  angle: i,
                };
              },
            },
          ]),
          e
        );
      })();
      function to(e) {
        var t = e.chart,
          n = e.fill,
          r = e.line;
        if (H(n))
          return (function (e, t) {
            var n = e.getDatasetMeta(t);
            return n && e.isDatasetVisible(t) ? n.dataset : null;
          })(t, n);
        if ("stack" === n)
          return (function (e) {
            var t = e.scale,
              n = e.index,
              r = e.line,
              i = [],
              a = r.segments,
              o = r.points,
              s = (function (e, t) {
                for (
                  var n = [], r = e.getMatchingVisibleMetas("line"), i = 0;
                  i < r.length;
                  i++
                ) {
                  var a = r[i];
                  if (a.index === t) break;
                  a.hidden || n.unshift(a.dataset);
                }
                return n;
              })(t, n);
            s.push(qa({ x: null, y: t.bottom }, r));
            for (var l = 0; l < a.length; l++)
              for (var u = a[l], c = u.start; c <= u.end; c++) Ja(i, o[c], s);
            return new La({ points: i, options: {} });
          })(e);
        if ("shape" === n) return !0;
        var i = (function (e) {
          if ((e.scale || {}).getPointPositionForValue)
            return (function (e) {
              var t = e.scale,
                n = e.fill,
                r = t.options,
                i = t.getLabels().length,
                a = r.reverse ? t.max : t.min,
                o = (function (e, t, n) {
                  return "start" === e
                    ? n
                    : "end" === e
                    ? t.options.reverse
                      ? t.min
                      : t.max
                    : W(e)
                    ? e.value
                    : t.getBaseValue();
                })(n, t, a),
                s = [];
              if (r.grid.circular) {
                var l = t.getPointPositionForValue(0, a);
                return new eo({
                  x: l.x,
                  y: l.y,
                  radius: t.getDistanceFromCenterForValue(o),
                });
              }
              for (var u = 0; u < i; ++u)
                s.push(t.getPointPositionForValue(u, o));
              return s;
            })(e);
          return (function (e) {
            var t = e.scale,
              n = void 0 === t ? {} : t,
              r = (function (e, t) {
                var n = null;
                return (
                  "start" === e
                    ? (n = t.bottom)
                    : "end" === e
                    ? (n = t.top)
                    : W(e)
                    ? (n = t.getPixelForValue(e.value))
                    : t.getBasePixel && (n = t.getBasePixel()),
                  n
                );
              })(e.fill, n);
            if (H(r)) {
              var i = n.isHorizontal();
              return { x: i ? r : null, y: i ? null : r };
            }
            return null;
          })(e);
        })(e);
        return i instanceof eo ? i : qa(i, r);
      }
      function no(e, t, n) {
        var r = to(t),
          i = t.line,
          a = t.scale,
          o = t.axis,
          s = i.options,
          l = s.fill,
          u = s.backgroundColor,
          c = l || {},
          f = c.above,
          h = void 0 === f ? u : f,
          d = c.below,
          p = void 0 === d ? u : d;
        r &&
          i.points.length &&
          (Ut(e, n),
          (function (e, t) {
            var n = t.line,
              r = t.target,
              i = t.above,
              a = t.below,
              o = t.area,
              s = t.scale,
              l = n._loop ? "angle" : t.axis;
            e.save(),
              "x" === l &&
                a !== i &&
                (ro(e, r, o.top),
                io(e, { line: n, target: r, color: i, scale: s, property: l }),
                e.restore(),
                e.save(),
                ro(e, r, o.bottom));
            io(e, { line: n, target: r, color: a, scale: s, property: l }),
              e.restore();
          })(e, {
            line: i,
            target: r,
            above: h,
            below: p,
            area: n,
            scale: a,
            axis: o,
          }),
          $t(e));
      }
      function ro(e, t, n) {
        var r = t.segments,
          i = t.points,
          a = !0,
          o = !1;
        e.beginPath();
        var s,
          l = N(r);
        try {
          for (l.s(); !(s = l.n()).done; ) {
            var u = s.value,
              c = u.start,
              f = u.end,
              h = i[c],
              d = i[Ya(c, f, i)];
            a
              ? (e.moveTo(h.x, h.y), (a = !1))
              : (e.lineTo(h.x, n), e.lineTo(h.x, h.y)),
              (o = !!t.pathSegment(e, u, { move: o }))
                ? e.closePath()
                : e.lineTo(d.x, n);
          }
        } catch (p) {
          l.e(p);
        } finally {
          l.f();
        }
        e.lineTo(t.first().x, n), e.closePath(), e.clip();
      }
      function io(e, t) {
        var n,
          r = t.line,
          i = t.target,
          a = t.property,
          o = t.color,
          s = t.scale,
          l = (function (e, t, n) {
            var r,
              i = e.segments,
              a = e.points,
              o = t.points,
              s = [],
              l = N(i);
            try {
              for (l.s(); !(r = l.n()).done; ) {
                var u = r.value,
                  c = u.start,
                  f = u.end;
                f = Ya(c, f, a);
                var h = $a(n, a[c], a[f], u.loop);
                if (t.segments) {
                  var d,
                    p = N(tr(t, h));
                  try {
                    for (p.s(); !(d = p.n()).done; ) {
                      var v,
                        g = d.value,
                        m = $a(n, o[g.start], o[g.end], g.loop),
                        y = N(er(u, a, m));
                      try {
                        for (y.s(); !(v = y.n()).done; ) {
                          var b = v.value;
                          s.push({
                            source: b,
                            target: g,
                            start: k({}, n, Qa(h, m, "start", Math.max)),
                            end: k({}, n, Qa(h, m, "end", Math.min)),
                          });
                        }
                      } catch (x) {
                        y.e(x);
                      } finally {
                        y.f();
                      }
                    }
                  } catch (x) {
                    p.e(x);
                  } finally {
                    p.f();
                  }
                } else s.push({ source: u, target: h, start: a[c], end: a[f] });
              }
            } catch (x) {
              l.e(x);
            } finally {
              l.f();
            }
            return s;
          })(r, i, a),
          u = N(l);
        try {
          for (u.s(); !(n = u.n()).done; ) {
            var c = n.value,
              f = c.source,
              h = c.target,
              d = c.start,
              p = c.end,
              v = f.style,
              g = (v = void 0 === v ? {} : v).backgroundColor,
              m = void 0 === g ? o : g,
              y = !0 !== i;
            e.save(),
              (e.fillStyle = m),
              ao(e, s, y && $a(a, d, p)),
              e.beginPath();
            var b = !!r.pathSegment(e, f),
              x = void 0;
            if (y) {
              b ? e.closePath() : oo(e, i, p, a);
              var w = !!i.pathSegment(e, h, { move: b, reverse: !0 });
              (x = b && w) || oo(e, i, d, a);
            }
            e.closePath(), e.fill(x ? "evenodd" : "nonzero"), e.restore();
          }
        } catch (_) {
          u.e(_);
        } finally {
          u.f();
        }
      }
      function ao(e, t, n) {
        var r = t.chart.chartArea,
          i = r.top,
          a = r.bottom,
          o = n || {},
          s = o.property,
          l = o.start,
          u = o.end;
        "x" === s && (e.beginPath(), e.rect(l, i, u - l, a - i), e.clip());
      }
      function oo(e, t, n, r) {
        var i = t.interpolate(n, r);
        i && e.lineTo(i.x, i.y);
      }
      var so = {
          id: "filler",
          afterDatasetsUpdate: function (e, t, n) {
            var r,
              i,
              a,
              o,
              s = (e.data.datasets || []).length,
              l = [];
            for (i = 0; i < s; ++i)
              (o = null),
                (a = (r = e.getDatasetMeta(i)).dataset) &&
                  a.options &&
                  a instanceof La &&
                  (o = {
                    visible: e.isDatasetVisible(i),
                    index: i,
                    fill: Ga(a, i, s),
                    chart: e,
                    axis: r.controller.options.indexAxis,
                    scale: r.vScale,
                    line: a,
                  }),
                (r.$filler = o),
                l.push(o);
            for (i = 0; i < s; ++i)
              (o = l[i]) && !1 !== o.fill && (o.fill = Xa(l, i, n.propagate));
          },
          beforeDraw: function (e, t, n) {
            for (
              var r = "beforeDraw" === n.drawTime,
                i = e.getSortedVisibleDatasetMetas(),
                a = e.chartArea,
                o = i.length - 1;
              o >= 0;
              --o
            ) {
              var s = i[o].$filler;
              s &&
                (s.line.updateControlPoints(a, s.axis),
                r && s.fill && no(e.ctx, s, a));
            }
          },
          beforeDatasetsDraw: function (e, t, n) {
            if ("beforeDatasetsDraw" === n.drawTime)
              for (
                var r = e.getSortedVisibleDatasetMetas(), i = r.length - 1;
                i >= 0;
                --i
              ) {
                var a = r[i].$filler;
                Ka(a) && no(e.ctx, a, e.chartArea);
              }
          },
          beforeDatasetDraw: function (e, t, n) {
            var r = t.meta.$filler;
            Ka(r) &&
              "beforeDatasetDraw" === n.drawTime &&
              no(e.ctx, r, e.chartArea);
          },
          defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
        },
        lo = function (e, t) {
          var n = e.boxHeight,
            r = void 0 === n ? t : n,
            i = e.boxWidth,
            a = void 0 === i ? t : i;
          return (
            e.usePointStyle &&
              ((r = Math.min(r, t)), (a = e.pointStyleWidth || Math.min(a, t))),
            { boxWidth: a, boxHeight: r, itemHeight: Math.max(t, r) }
          );
        },
        uo = (function (e) {
          O(n, e);
          var t = D(n);
          function n(e) {
            var r;
            return (
              j(this, n),
              ((r = t.call(this))._added = !1),
              (r.legendHitBoxes = []),
              (r._hoveredItem = null),
              (r.doughnutMode = !1),
              (r.chart = e.chart),
              (r.options = e.options),
              (r.ctx = e.ctx),
              (r.legendItems = void 0),
              (r.columnSizes = void 0),
              (r.lineWidths = void 0),
              (r.maxHeight = void 0),
              (r.maxWidth = void 0),
              (r.top = void 0),
              (r.bottom = void 0),
              (r.left = void 0),
              (r.right = void 0),
              (r.height = void 0),
              (r.width = void 0),
              (r._margins = void 0),
              (r.position = void 0),
              (r.weight = void 0),
              (r.fullSize = void 0),
              r
            );
          }
          return (
            R(n, [
              {
                key: "update",
                value: function (e, t, n) {
                  (this.maxWidth = e),
                    (this.maxHeight = t),
                    (this._margins = n),
                    this.setDimensions(),
                    this.buildLabels(),
                    this.fit();
                },
              },
              {
                key: "setDimensions",
                value: function () {
                  this.isHorizontal()
                    ? ((this.width = this.maxWidth),
                      (this.left = this._margins.left),
                      (this.right = this.width))
                    : ((this.height = this.maxHeight),
                      (this.top = this._margins.top),
                      (this.bottom = this.height));
                },
              },
              {
                key: "buildLabels",
                value: function () {
                  var e = this,
                    t = this.options.labels || {},
                    n = Q(t.generateLabels, [this.chart], this) || [];
                  t.filter &&
                    (n = n.filter(function (n) {
                      return t.filter(n, e.chart.data);
                    })),
                    t.sort &&
                      (n = n.sort(function (n, r) {
                        return t.sort(n, r, e.chart.data);
                      })),
                    this.options.reverse && n.reverse(),
                    (this.legendItems = n);
                },
              },
              {
                key: "fit",
                value: function () {
                  var e = this.options,
                    t = this.ctx;
                  if (e.display) {
                    var n,
                      r,
                      i = e.labels,
                      a = on(i.font),
                      o = a.size,
                      s = this._computeTitleHeight(),
                      l = lo(i, o),
                      u = l.boxWidth,
                      c = l.itemHeight;
                    (t.font = a.string),
                      this.isHorizontal()
                        ? ((n = this.maxWidth),
                          (r = this._fitRows(s, o, u, c) + 10))
                        : ((r = this.maxHeight),
                          (n = this._fitCols(s, o, u, c) + 10)),
                      (this.width = Math.min(n, e.maxWidth || this.maxWidth)),
                      (this.height = Math.min(
                        r,
                        e.maxHeight || this.maxHeight
                      ));
                  } else this.width = this.height = 0;
                },
              },
              {
                key: "_fitRows",
                value: function (e, t, n, r) {
                  var i = this.ctx,
                    a = this.maxWidth,
                    o = this.options.labels.padding,
                    s = (this.legendHitBoxes = []),
                    l = (this.lineWidths = [0]),
                    u = r + o,
                    c = e;
                  (i.textAlign = "left"), (i.textBaseline = "middle");
                  var f = -1,
                    h = -u;
                  return (
                    this.legendItems.forEach(function (e, d) {
                      var p = n + t / 2 + i.measureText(e.text).width;
                      (0 === d || l[l.length - 1] + p + 2 * o > a) &&
                        ((c += u),
                        (l[l.length - (d > 0 ? 0 : 1)] = 0),
                        (h += u),
                        f++),
                        (s[d] = {
                          left: 0,
                          top: h,
                          row: f,
                          width: p,
                          height: r,
                        }),
                        (l[l.length - 1] += p + o);
                    }),
                    c
                  );
                },
              },
              {
                key: "_fitCols",
                value: function (e, t, n, r) {
                  var i = this.ctx,
                    a = this.maxHeight,
                    o = this.options.labels.padding,
                    s = (this.legendHitBoxes = []),
                    l = (this.columnSizes = []),
                    u = a - e,
                    c = o,
                    f = 0,
                    h = 0,
                    d = 0,
                    p = 0;
                  return (
                    this.legendItems.forEach(function (e, a) {
                      var v = n + t / 2 + i.measureText(e.text).width;
                      a > 0 &&
                        h + r + 2 * o > u &&
                        ((c += f + o),
                        l.push({ width: f, height: h }),
                        (d += f + o),
                        p++,
                        (f = h = 0)),
                        (s[a] = {
                          left: d,
                          top: h,
                          col: p,
                          width: v,
                          height: r,
                        }),
                        (f = Math.max(f, v)),
                        (h += r + o);
                    }),
                    (c += f),
                    l.push({ width: f, height: h }),
                    c
                  );
                },
              },
              {
                key: "adjustHitBoxes",
                value: function () {
                  if (this.options.display) {
                    var e = this._computeTitleHeight(),
                      t = this.legendHitBoxes,
                      n = this.options,
                      r = n.align,
                      i = n.labels.padding,
                      a = Kn(n.rtl, this.left, this.width);
                    if (this.isHorizontal()) {
                      var o,
                        s = 0,
                        l = Ve(
                          r,
                          this.left + i,
                          this.right - this.lineWidths[s]
                        ),
                        u = N(t);
                      try {
                        for (u.s(); !(o = u.n()).done; ) {
                          var c = o.value;
                          s !== c.row &&
                            ((s = c.row),
                            (l = Ve(
                              r,
                              this.left + i,
                              this.right - this.lineWidths[s]
                            ))),
                            (c.top += this.top + e + i),
                            (c.left = a.leftForLtr(a.x(l), c.width)),
                            (l += c.width + i);
                        }
                      } catch (g) {
                        u.e(g);
                      } finally {
                        u.f();
                      }
                    } else {
                      var f,
                        h = 0,
                        d = Ve(
                          r,
                          this.top + e + i,
                          this.bottom - this.columnSizes[h].height
                        ),
                        p = N(t);
                      try {
                        for (p.s(); !(f = p.n()).done; ) {
                          var v = f.value;
                          v.col !== h &&
                            ((h = v.col),
                            (d = Ve(
                              r,
                              this.top + e + i,
                              this.bottom - this.columnSizes[h].height
                            ))),
                            (v.top = d),
                            (v.left += this.left + i),
                            (v.left = a.leftForLtr(a.x(v.left), v.width)),
                            (d += v.height + i);
                        }
                      } catch (g) {
                        p.e(g);
                      } finally {
                        p.f();
                      }
                    }
                  }
                },
              },
              {
                key: "isHorizontal",
                value: function () {
                  return (
                    "top" === this.options.position ||
                    "bottom" === this.options.position
                  );
                },
              },
              {
                key: "draw",
                value: function () {
                  if (this.options.display) {
                    var e = this.ctx;
                    Ut(e, this), this._draw(), $t(e);
                  }
                },
              },
              {
                key: "_draw",
                value: function () {
                  var e,
                    t = this,
                    n = this.options,
                    r = this.columnSizes,
                    i = this.lineWidths,
                    a = this.ctx,
                    o = n.align,
                    s = n.labels,
                    l = zt.color,
                    u = Kn(n.rtl, this.left, this.width),
                    c = on(s.font),
                    f = s.color,
                    h = s.padding,
                    d = c.size,
                    p = d / 2;
                  this.drawTitle(),
                    (a.textAlign = u.textAlign("left")),
                    (a.textBaseline = "middle"),
                    (a.lineWidth = 0.5),
                    (a.font = c.string);
                  var v = lo(s, d),
                    g = v.boxWidth,
                    m = v.boxHeight,
                    y = v.itemHeight,
                    b = this.isHorizontal(),
                    x = this._computeTitleHeight();
                  (e = b
                    ? {
                        x: Ve(o, this.left + h, this.right - i[0]),
                        y: this.top + h + x,
                        line: 0,
                      }
                    : {
                        x: this.left + h,
                        y: Ve(o, this.top + x + h, this.bottom - r[0].height),
                        line: 0,
                      }),
                    Xn(this.ctx, n.textDirection);
                  var k = y + h;
                  this.legendItems.forEach(function (v, w) {
                    (a.strokeStyle = v.fontColor || f),
                      (a.fillStyle = v.fontColor || f);
                    var _ = a.measureText(v.text).width,
                      S = u.textAlign(
                        v.textAlign || (v.textAlign = s.textAlign)
                      ),
                      M = g + p + _,
                      E = e.x,
                      P = e.y;
                    u.setWidth(t.width),
                      b
                        ? w > 0 &&
                          E + M + h > t.right &&
                          ((P = e.y += k),
                          e.line++,
                          (E = e.x = Ve(o, t.left + h, t.right - i[e.line])))
                        : w > 0 &&
                          P + k > t.bottom &&
                          ((E = e.x = E + r[e.line].width + h),
                          e.line++,
                          (P = e.y =
                            Ve(o, t.top + x + h, t.bottom - r[e.line].height))),
                      (function (e, t, n) {
                        if (!(isNaN(g) || g <= 0 || isNaN(m) || m < 0)) {
                          a.save();
                          var r = $(n.lineWidth, 1);
                          if (
                            ((a.fillStyle = $(n.fillStyle, l)),
                            (a.lineCap = $(n.lineCap, "butt")),
                            (a.lineDashOffset = $(n.lineDashOffset, 0)),
                            (a.lineJoin = $(n.lineJoin, "miter")),
                            (a.lineWidth = r),
                            (a.strokeStyle = $(n.strokeStyle, l)),
                            a.setLineDash($(n.lineDash, [])),
                            s.usePointStyle)
                          ) {
                            var i = {
                                radius: (m * Math.SQRT2) / 2,
                                pointStyle: n.pointStyle,
                                rotation: n.rotation,
                                borderWidth: r,
                              },
                              o = u.xPlus(e, g / 2);
                            Wt(a, i, o, t + p, s.pointStyleWidth && g);
                          } else {
                            var c = t + Math.max((d - m) / 2, 0),
                              f = u.leftForLtr(e, g),
                              h = rn(n.borderRadius);
                            a.beginPath(),
                              Object.values(h).some(function (e) {
                                return 0 !== e;
                              })
                                ? Gt(a, { x: f, y: c, w: g, h: m, radius: h })
                                : a.rect(f, c, g, m),
                              a.fill(),
                              0 !== r && a.stroke();
                          }
                          a.restore();
                        }
                      })(u.x(E), P, v),
                      (E = (function (e, t, n, r) {
                        return e === (r ? "left" : "right")
                          ? n
                          : "center" === e
                          ? (t + n) / 2
                          : t;
                      })(S, E + g + p, b ? E + M : t.right, n.rtl)),
                      (function (e, t, n) {
                        qt(a, n.text, e, t + y / 2, c, {
                          strikethrough: n.hidden,
                          textAlign: u.textAlign(n.textAlign),
                        });
                      })(u.x(E), P, v),
                      b ? (e.x += M + h) : (e.y += k);
                  }),
                    Gn(this.ctx, n.textDirection);
                },
              },
              {
                key: "drawTitle",
                value: function () {
                  var e = this.options,
                    t = e.title,
                    n = on(t.font),
                    r = an(t.padding);
                  if (t.display) {
                    var i,
                      a = Kn(e.rtl, this.left, this.width),
                      o = this.ctx,
                      s = t.position,
                      l = n.size / 2,
                      u = r.top + l,
                      c = this.left,
                      f = this.width;
                    if (this.isHorizontal())
                      (f = Math.max.apply(Math, x(this.lineWidths))),
                        (i = this.top + u),
                        (c = Ve(e.align, c, this.right - f));
                    else {
                      var h = this.columnSizes.reduce(function (e, t) {
                        return Math.max(e, t.height);
                      }, 0);
                      i =
                        u +
                        Ve(
                          e.align,
                          this.top,
                          this.bottom -
                            h -
                            e.labels.padding -
                            this._computeTitleHeight()
                        );
                    }
                    var d = Ve(s, c, c + f);
                    (o.textAlign = a.textAlign(Be(s))),
                      (o.textBaseline = "middle"),
                      (o.strokeStyle = t.color),
                      (o.fillStyle = t.color),
                      (o.font = n.string),
                      qt(o, t.text, d, i, n);
                  }
                },
              },
              {
                key: "_computeTitleHeight",
                value: function () {
                  var e = this.options.title,
                    t = on(e.font),
                    n = an(e.padding);
                  return e.display ? t.lineHeight + n.height : 0;
                },
              },
              {
                key: "_getLegendItemAt",
                value: function (e, t) {
                  var n, r, i;
                  if (
                    Le(e, this.left, this.right) &&
                    Le(t, this.top, this.bottom)
                  )
                    for (i = this.legendHitBoxes, n = 0; n < i.length; ++n)
                      if (
                        Le(e, (r = i[n]).left, r.left + r.width) &&
                        Le(t, r.top, r.top + r.height)
                      )
                        return this.legendItems[n];
                  return null;
                },
              },
              {
                key: "handleEvent",
                value: function (e) {
                  var t = this.options;
                  if (
                    (function (e, t) {
                      if (
                        ("mousemove" === e || "mouseout" === e) &&
                        (t.onHover || t.onLeave)
                      )
                        return !0;
                      if (t.onClick && ("click" === e || "mouseup" === e))
                        return !0;
                      return !1;
                    })(e.type, t)
                  ) {
                    var n,
                      r,
                      i = this._getLegendItemAt(e.x, e.y);
                    if ("mousemove" === e.type || "mouseout" === e.type) {
                      var a = this._hoveredItem,
                        o =
                          ((r = i),
                          null !== (n = a) &&
                            null !== r &&
                            n.datasetIndex === r.datasetIndex &&
                            n.index === r.index);
                      a && !o && Q(t.onLeave, [e, a, this], this),
                        (this._hoveredItem = i),
                        i && !o && Q(t.onHover, [e, i, this], this);
                    } else i && Q(t.onClick, [e, i, this], this);
                  }
                },
              },
            ]),
            n
          );
        })(Fr);
      var co = {
          id: "legend",
          _element: uo,
          start: function (e, t, n) {
            var r = (e.legend = new uo({ ctx: e.ctx, options: n, chart: e }));
            Ei(e, r, n), Si(e, r);
          },
          stop: function (e) {
            Mi(e, e.legend), delete e.legend;
          },
          beforeUpdate: function (e, t, n) {
            var r = e.legend;
            Ei(e, r, n), (r.options = n);
          },
          afterUpdate: function (e) {
            var t = e.legend;
            t.buildLabels(), t.adjustHitBoxes();
          },
          afterEvent: function (e, t) {
            t.replay || e.legend.handleEvent(t.event);
          },
          defaults: {
            display: !0,
            position: "top",
            align: "center",
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function (e, t, n) {
              var r = t.datasetIndex,
                i = n.chart;
              i.isDatasetVisible(r)
                ? (i.hide(r), (t.hidden = !0))
                : (i.show(r), (t.hidden = !1));
            },
            onHover: null,
            onLeave: null,
            labels: {
              color: function (e) {
                return e.chart.options.color;
              },
              boxWidth: 40,
              padding: 10,
              generateLabels: function (e) {
                var t = e.data.datasets,
                  n = e.legend.options.labels,
                  r = n.usePointStyle,
                  i = n.pointStyle,
                  a = n.textAlign,
                  o = n.color;
                return e._getSortedDatasetMetas().map(function (e) {
                  var n = e.controller.getStyle(r ? 0 : void 0),
                    s = an(n.borderWidth);
                  return {
                    text: t[e.index].label,
                    fillStyle: n.backgroundColor,
                    fontColor: o,
                    hidden: !e.visible,
                    lineCap: n.borderCapStyle,
                    lineDash: n.borderDash,
                    lineDashOffset: n.borderDashOffset,
                    lineJoin: n.borderJoinStyle,
                    lineWidth: (s.width + s.height) / 4,
                    strokeStyle: n.borderColor,
                    pointStyle: i || n.pointStyle,
                    rotation: n.rotation,
                    textAlign: a || n.textAlign,
                    borderRadius: 0,
                    datasetIndex: e.index,
                  };
                }, this);
              },
            },
            title: {
              color: function (e) {
                return e.chart.options.color;
              },
              display: !1,
              position: "center",
              text: "",
            },
          },
          descriptors: {
            _scriptable: function (e) {
              return !e.startsWith("on");
            },
            labels: {
              _scriptable: function (e) {
                return !["generateLabels", "filter", "sort"].includes(e);
              },
            },
          },
        },
        fo = (function (e) {
          O(n, e);
          var t = D(n);
          function n(e) {
            var r;
            return (
              j(this, n),
              ((r = t.call(this)).chart = e.chart),
              (r.options = e.options),
              (r.ctx = e.ctx),
              (r._padding = void 0),
              (r.top = void 0),
              (r.bottom = void 0),
              (r.left = void 0),
              (r.right = void 0),
              (r.width = void 0),
              (r.height = void 0),
              (r.position = void 0),
              (r.weight = void 0),
              (r.fullSize = void 0),
              r
            );
          }
          return (
            R(n, [
              {
                key: "update",
                value: function (e, t) {
                  var n = this.options;
                  if (((this.left = 0), (this.top = 0), n.display)) {
                    (this.width = this.right = e),
                      (this.height = this.bottom = t);
                    var r = V(n.text) ? n.text.length : 1;
                    this._padding = an(n.padding);
                    var i = r * on(n.font).lineHeight + this._padding.height;
                    this.isHorizontal() ? (this.height = i) : (this.width = i);
                  } else
                    this.width = this.height = this.right = this.bottom = 0;
                },
              },
              {
                key: "isHorizontal",
                value: function () {
                  var e = this.options.position;
                  return "top" === e || "bottom" === e;
                },
              },
              {
                key: "_drawArgs",
                value: function (e) {
                  var t,
                    n,
                    r,
                    i = this.top,
                    a = this.left,
                    o = this.bottom,
                    s = this.right,
                    l = this.options,
                    u = l.align,
                    c = 0;
                  return (
                    this.isHorizontal()
                      ? ((n = Ve(u, a, s)), (r = i + e), (t = s - a))
                      : ("left" === l.position
                          ? ((n = a + e), (r = Ve(u, o, i)), (c = -0.5 * le))
                          : ((n = s - e), (r = Ve(u, i, o)), (c = 0.5 * le)),
                        (t = o - i)),
                    { titleX: n, titleY: r, maxWidth: t, rotation: c }
                  );
                },
              },
              {
                key: "draw",
                value: function () {
                  var e = this.ctx,
                    t = this.options;
                  if (t.display) {
                    var n = on(t.font),
                      r = n.lineHeight / 2 + this._padding.top,
                      i = this._drawArgs(r),
                      a = i.titleX,
                      o = i.titleY,
                      s = i.maxWidth,
                      l = i.rotation;
                    qt(e, t.text, 0, 0, n, {
                      color: t.color,
                      maxWidth: s,
                      rotation: l,
                      textAlign: Be(t.align),
                      textBaseline: "middle",
                      translation: [a, o],
                    });
                  }
                },
              },
            ]),
            n
          );
        })(Fr);
      var ho = {
          id: "title",
          _element: fo,
          start: function (e, t, n) {
            !(function (e, t) {
              var n = new fo({ ctx: e.ctx, options: t, chart: e });
              Ei(e, n, t), Si(e, n), (e.titleBlock = n);
            })(e, n);
          },
          stop: function (e) {
            var t = e.titleBlock;
            Mi(e, t), delete e.titleBlock;
          },
          beforeUpdate: function (e, t, n) {
            var r = e.titleBlock;
            Ei(e, r, n), (r.options = n);
          },
          defaults: {
            align: "center",
            display: !1,
            font: { weight: "bold" },
            fullSize: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3,
          },
          defaultRoutes: { color: "color" },
          descriptors: { _scriptable: !0, _indexable: !1 },
        },
        po = new WeakMap(),
        vo = {
          id: "subtitle",
          start: function (e, t, n) {
            var r = new fo({ ctx: e.ctx, options: n, chart: e });
            Ei(e, r, n), Si(e, r), po.set(e, r);
          },
          stop: function (e) {
            Mi(e, po.get(e)), po.delete(e);
          },
          beforeUpdate: function (e, t, n) {
            var r = po.get(e);
            Ei(e, r, n), (r.options = n);
          },
          defaults: {
            align: "center",
            display: !1,
            font: { weight: "normal" },
            fullSize: !0,
            padding: 0,
            position: "top",
            text: "",
            weight: 1500,
          },
          defaultRoutes: { color: "color" },
          descriptors: { _scriptable: !0, _indexable: !1 },
        },
        go = {
          average: function (e) {
            if (!e.length) return !1;
            var t,
              n,
              r = 0,
              i = 0,
              a = 0;
            for (t = 0, n = e.length; t < n; ++t) {
              var o = e[t].element;
              if (o && o.hasValue()) {
                var s = o.tooltipPosition();
                (r += s.x), (i += s.y), ++a;
              }
            }
            return { x: r / a, y: i / a };
          },
          nearest: function (e, t) {
            if (!e.length) return !1;
            var n,
              r,
              i,
              a = t.x,
              o = t.y,
              s = Number.POSITIVE_INFINITY;
            for (n = 0, r = e.length; n < r; ++n) {
              var l = e[n].element;
              if (l && l.hasValue()) {
                var u = Ee(t, l.getCenterPoint());
                u < s && ((s = u), (i = l));
              }
            }
            if (i) {
              var c = i.tooltipPosition();
              (a = c.x), (o = c.y);
            }
            return { x: a, y: o };
          },
        };
      function mo(e, t) {
        return t && (V(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
      }
      function yo(e) {
        return ("string" === typeof e || e instanceof String) &&
          e.indexOf("\n") > -1
          ? e.split("\n")
          : e;
      }
      function bo(e, t) {
        var n = t.element,
          r = t.datasetIndex,
          i = t.index,
          a = e.getDatasetMeta(r).controller,
          o = a.getLabelAndValue(i),
          s = o.label,
          l = o.value;
        return {
          chart: e,
          label: s,
          parsed: a.getParsed(i),
          raw: e.data.datasets[r].data[i],
          formattedValue: l,
          dataset: a.getDataset(),
          dataIndex: i,
          datasetIndex: r,
          element: n,
        };
      }
      function xo(e, t) {
        var n = e.chart.ctx,
          r = e.body,
          i = e.footer,
          a = e.title,
          o = t.boxWidth,
          s = t.boxHeight,
          l = on(t.bodyFont),
          u = on(t.titleFont),
          c = on(t.footerFont),
          f = a.length,
          h = i.length,
          d = r.length,
          p = an(t.padding),
          v = p.height,
          g = 0,
          m = r.reduce(function (e, t) {
            return e + t.before.length + t.lines.length + t.after.length;
          }, 0);
        ((m += e.beforeBody.length + e.afterBody.length),
        f &&
          (v +=
            f * u.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom),
        m) &&
          (v +=
            d * (t.displayColors ? Math.max(s, l.lineHeight) : l.lineHeight) +
            (m - d) * l.lineHeight +
            (m - 1) * t.bodySpacing);
        h &&
          (v +=
            t.footerMarginTop + h * c.lineHeight + (h - 1) * t.footerSpacing);
        var y = 0,
          b = function (e) {
            g = Math.max(g, n.measureText(e).width + y);
          };
        return (
          n.save(),
          (n.font = u.string),
          q(e.title, b),
          (n.font = l.string),
          q(e.beforeBody.concat(e.afterBody), b),
          (y = t.displayColors ? o + 2 + t.boxPadding : 0),
          q(r, function (e) {
            q(e.before, b), q(e.lines, b), q(e.after, b);
          }),
          (y = 0),
          (n.font = c.string),
          q(e.footer, b),
          n.restore(),
          { width: (g += p.width), height: v }
        );
      }
      function ko(e, t, n, r) {
        var i = n.x,
          a = n.width,
          o = e.width,
          s = e.chartArea,
          l = s.left,
          u = s.right,
          c = "center";
        return (
          "center" === r
            ? (c = i <= (l + u) / 2 ? "left" : "right")
            : i <= a / 2
            ? (c = "left")
            : i >= o - a / 2 && (c = "right"),
          (function (e, t, n, r) {
            var i = r.x,
              a = r.width,
              o = n.caretSize + n.caretPadding;
            return (
              ("left" === e && i + a + o > t.width) ||
              ("right" === e && i - a - o < 0) ||
              void 0
            );
          })(c, e, t, n) && (c = "center"),
          c
        );
      }
      function wo(e, t, n) {
        var r =
          n.yAlign ||
          t.yAlign ||
          (function (e, t) {
            var n = t.y,
              r = t.height;
            return n < r / 2
              ? "top"
              : n > e.height - r / 2
              ? "bottom"
              : "center";
          })(e, n);
        return { xAlign: n.xAlign || t.xAlign || ko(e, t, n, r), yAlign: r };
      }
      function _o(e, t, n, r) {
        var i = e.caretSize,
          a = e.caretPadding,
          o = e.cornerRadius,
          s = n.xAlign,
          l = n.yAlign,
          u = i + a,
          c = rn(o),
          f = c.topLeft,
          h = c.topRight,
          d = c.bottomLeft,
          p = c.bottomRight,
          v = (function (e, t) {
            var n = e.x,
              r = e.width;
            return "right" === t ? (n -= r) : "center" === t && (n -= r / 2), n;
          })(t, s),
          g = (function (e, t, n) {
            var r = e.y,
              i = e.height;
            return (
              "top" === t ? (r += n) : (r -= "bottom" === t ? i + n : i / 2), r
            );
          })(t, l, u);
        return (
          "center" === l
            ? "left" === s
              ? (v += u)
              : "right" === s && (v -= u)
            : "left" === s
            ? (v -= Math.max(f, d) + i)
            : "right" === s && (v += Math.max(h, p) + i),
          { x: Te(v, 0, r.width - t.width), y: Te(g, 0, r.height - t.height) }
        );
      }
      function So(e, t, n) {
        var r = an(n.padding);
        return "center" === t
          ? e.x + e.width / 2
          : "right" === t
          ? e.x + e.width - r.right
          : e.x + r.left;
      }
      function Mo(e) {
        return mo([], yo(e));
      }
      function Eo(e, t) {
        var n =
          t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
        return n ? e.override(n) : e;
      }
      var Po = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e) {
          var r;
          return (
            j(this, n),
            ((r = t.call(this)).opacity = 0),
            (r._active = []),
            (r._eventPosition = void 0),
            (r._size = void 0),
            (r._cachedAnimations = void 0),
            (r._tooltipItems = []),
            (r.$animations = void 0),
            (r.$context = void 0),
            (r.chart = e.chart || e._chart),
            (r._chart = r.chart),
            (r.options = e.options),
            (r.dataPoints = void 0),
            (r.title = void 0),
            (r.beforeBody = void 0),
            (r.body = void 0),
            (r.afterBody = void 0),
            (r.footer = void 0),
            (r.xAlign = void 0),
            (r.yAlign = void 0),
            (r.x = void 0),
            (r.y = void 0),
            (r.height = void 0),
            (r.width = void 0),
            (r.caretX = void 0),
            (r.caretY = void 0),
            (r.labelColors = void 0),
            (r.labelPointStyles = void 0),
            (r.labelTextColors = void 0),
            r
          );
        }
        return (
          R(n, [
            {
              key: "initialize",
              value: function (e) {
                (this.options = e),
                  (this._cachedAnimations = void 0),
                  (this.$context = void 0);
              },
            },
            {
              key: "_resolveAnimations",
              value: function () {
                var e = this._cachedAnimations;
                if (e) return e;
                var t = this.chart,
                  n = this.options.setContext(this.getContext()),
                  r = n.enabled && t.options.animation && n.animations,
                  i = new fr(this.chart, r);
                return (
                  r._cacheable && (this._cachedAnimations = Object.freeze(i)), i
                );
              },
            },
            {
              key: "getContext",
              value: function () {
                return (
                  this.$context ||
                  (this.$context =
                    ((e = this.chart.getContext()),
                    (t = this),
                    (n = this._tooltipItems),
                    ln(e, { tooltip: t, tooltipItems: n, type: "tooltip" })))
                );
                var e, t, n;
              },
            },
            {
              key: "getTitle",
              value: function (e, t) {
                var n = t.callbacks,
                  r = n.beforeTitle.apply(this, [e]),
                  i = n.title.apply(this, [e]),
                  a = n.afterTitle.apply(this, [e]),
                  o = [];
                return (
                  (o = mo(o, yo(r))), (o = mo(o, yo(i))), (o = mo(o, yo(a)))
                );
              },
            },
            {
              key: "getBeforeBody",
              value: function (e, t) {
                return Mo(t.callbacks.beforeBody.apply(this, [e]));
              },
            },
            {
              key: "getBody",
              value: function (e, t) {
                var n = this,
                  r = t.callbacks,
                  i = [];
                return (
                  q(e, function (e) {
                    var t = { before: [], lines: [], after: [] },
                      a = Eo(r, e);
                    mo(t.before, yo(a.beforeLabel.call(n, e))),
                      mo(t.lines, a.label.call(n, e)),
                      mo(t.after, yo(a.afterLabel.call(n, e))),
                      i.push(t);
                  }),
                  i
                );
              },
            },
            {
              key: "getAfterBody",
              value: function (e, t) {
                return Mo(t.callbacks.afterBody.apply(this, [e]));
              },
            },
            {
              key: "getFooter",
              value: function (e, t) {
                var n = t.callbacks,
                  r = n.beforeFooter.apply(this, [e]),
                  i = n.footer.apply(this, [e]),
                  a = n.afterFooter.apply(this, [e]),
                  o = [];
                return (
                  (o = mo(o, yo(r))), (o = mo(o, yo(i))), (o = mo(o, yo(a)))
                );
              },
            },
            {
              key: "_createItems",
              value: function (e) {
                var t,
                  n,
                  r = this,
                  i = this._active,
                  a = this.chart.data,
                  o = [],
                  s = [],
                  l = [],
                  u = [];
                for (t = 0, n = i.length; t < n; ++t)
                  u.push(bo(this.chart, i[t]));
                return (
                  e.filter &&
                    (u = u.filter(function (t, n, r) {
                      return e.filter(t, n, r, a);
                    })),
                  e.itemSort &&
                    (u = u.sort(function (t, n) {
                      return e.itemSort(t, n, a);
                    })),
                  q(u, function (t) {
                    var n = Eo(e.callbacks, t);
                    o.push(n.labelColor.call(r, t)),
                      s.push(n.labelPointStyle.call(r, t)),
                      l.push(n.labelTextColor.call(r, t));
                  }),
                  (this.labelColors = o),
                  (this.labelPointStyles = s),
                  (this.labelTextColors = l),
                  (this.dataPoints = u),
                  u
                );
              },
            },
            {
              key: "update",
              value: function (e, t) {
                var n,
                  r = this.options.setContext(this.getContext()),
                  i = this._active,
                  a = [];
                if (i.length) {
                  var o = go[r.position].call(this, i, this._eventPosition);
                  (a = this._createItems(r)),
                    (this.title = this.getTitle(a, r)),
                    (this.beforeBody = this.getBeforeBody(a, r)),
                    (this.body = this.getBody(a, r)),
                    (this.afterBody = this.getAfterBody(a, r)),
                    (this.footer = this.getFooter(a, r));
                  var s = (this._size = xo(this, r)),
                    l = Object.assign({}, o, s),
                    u = wo(this.chart, r, l),
                    c = _o(r, l, u, this.chart);
                  (this.xAlign = u.xAlign),
                    (this.yAlign = u.yAlign),
                    (n = {
                      opacity: 1,
                      x: c.x,
                      y: c.y,
                      width: s.width,
                      height: s.height,
                      caretX: o.x,
                      caretY: o.y,
                    });
                } else 0 !== this.opacity && (n = { opacity: 0 });
                (this._tooltipItems = a),
                  (this.$context = void 0),
                  n && this._resolveAnimations().update(this, n),
                  e &&
                    r.external &&
                    r.external.call(this, {
                      chart: this.chart,
                      tooltip: this,
                      replay: t,
                    });
              },
            },
            {
              key: "drawCaret",
              value: function (e, t, n, r) {
                var i = this.getCaretPosition(e, n, r);
                t.lineTo(i.x1, i.y1),
                  t.lineTo(i.x2, i.y2),
                  t.lineTo(i.x3, i.y3);
              },
            },
            {
              key: "getCaretPosition",
              value: function (e, t, n) {
                var r,
                  i,
                  a,
                  o,
                  s,
                  l,
                  u = this.xAlign,
                  c = this.yAlign,
                  f = n.caretSize,
                  h = rn(n.cornerRadius),
                  d = h.topLeft,
                  p = h.topRight,
                  v = h.bottomLeft,
                  g = h.bottomRight,
                  m = e.x,
                  y = e.y,
                  b = t.width,
                  x = t.height;
                return (
                  "center" === c
                    ? ((s = y + x / 2),
                      "left" === u
                        ? ((i = (r = m) - f), (o = s + f), (l = s - f))
                        : ((i = (r = m + b) + f), (o = s - f), (l = s + f)),
                      (a = r))
                    : ((i =
                        "left" === u
                          ? m + Math.max(d, v) + f
                          : "right" === u
                          ? m + b - Math.max(p, g) - f
                          : this.caretX),
                      "top" === c
                        ? ((s = (o = y) - f), (r = i - f), (a = i + f))
                        : ((s = (o = y + x) + f), (r = i + f), (a = i - f)),
                      (l = o)),
                  { x1: r, x2: i, x3: a, y1: o, y2: s, y3: l }
                );
              },
            },
            {
              key: "drawTitle",
              value: function (e, t, n) {
                var r,
                  i,
                  a,
                  o = this.title,
                  s = o.length;
                if (s) {
                  var l = Kn(n.rtl, this.x, this.width);
                  for (
                    e.x = So(this, n.titleAlign, n),
                      t.textAlign = l.textAlign(n.titleAlign),
                      t.textBaseline = "middle",
                      r = on(n.titleFont),
                      i = n.titleSpacing,
                      t.fillStyle = n.titleColor,
                      t.font = r.string,
                      a = 0;
                    a < s;
                    ++a
                  )
                    t.fillText(o[a], l.x(e.x), e.y + r.lineHeight / 2),
                      (e.y += r.lineHeight + i),
                      a + 1 === s && (e.y += n.titleMarginBottom - i);
                }
              },
            },
            {
              key: "_drawColorBox",
              value: function (e, t, n, r, i) {
                var a = this.labelColors[n],
                  o = this.labelPointStyles[n],
                  s = i.boxHeight,
                  l = i.boxWidth,
                  u = i.boxPadding,
                  c = on(i.bodyFont),
                  f = So(this, "left", i),
                  h = r.x(f),
                  d = s < c.lineHeight ? (c.lineHeight - s) / 2 : 0,
                  p = t.y + d;
                if (i.usePointStyle) {
                  var v = {
                      radius: Math.min(l, s) / 2,
                      pointStyle: o.pointStyle,
                      rotation: o.rotation,
                      borderWidth: 1,
                    },
                    g = r.leftForLtr(h, l) + l / 2,
                    m = p + s / 2;
                  (e.strokeStyle = i.multiKeyBackground),
                    (e.fillStyle = i.multiKeyBackground),
                    Vt(e, v, g, m),
                    (e.strokeStyle = a.borderColor),
                    (e.fillStyle = a.backgroundColor),
                    Vt(e, v, g, m);
                } else {
                  (e.lineWidth = W(a.borderWidth)
                    ? Math.max.apply(Math, x(Object.values(a.borderWidth)))
                    : a.borderWidth || 1),
                    (e.strokeStyle = a.borderColor),
                    e.setLineDash(a.borderDash || []),
                    (e.lineDashOffset = a.borderDashOffset || 0);
                  var y = r.leftForLtr(h, l - u),
                    b = r.leftForLtr(r.xPlus(h, 1), l - u - 2),
                    k = rn(a.borderRadius);
                  Object.values(k).some(function (e) {
                    return 0 !== e;
                  })
                    ? (e.beginPath(),
                      (e.fillStyle = i.multiKeyBackground),
                      Gt(e, { x: y, y: p, w: l, h: s, radius: k }),
                      e.fill(),
                      e.stroke(),
                      (e.fillStyle = a.backgroundColor),
                      e.beginPath(),
                      Gt(e, { x: b, y: p + 1, w: l - 2, h: s - 2, radius: k }),
                      e.fill())
                    : ((e.fillStyle = i.multiKeyBackground),
                      e.fillRect(y, p, l, s),
                      e.strokeRect(y, p, l, s),
                      (e.fillStyle = a.backgroundColor),
                      e.fillRect(b, p + 1, l - 2, s - 2));
                }
                e.fillStyle = this.labelTextColors[n];
              },
            },
            {
              key: "drawBody",
              value: function (e, t, n) {
                var r,
                  i,
                  a,
                  o,
                  s,
                  l,
                  u,
                  c = this.body,
                  f = n.bodySpacing,
                  h = n.bodyAlign,
                  d = n.displayColors,
                  p = n.boxHeight,
                  v = n.boxWidth,
                  g = n.boxPadding,
                  m = on(n.bodyFont),
                  y = m.lineHeight,
                  b = 0,
                  x = Kn(n.rtl, this.x, this.width),
                  k = function (n) {
                    t.fillText(n, x.x(e.x + b), e.y + y / 2), (e.y += y + f);
                  },
                  w = x.textAlign(h);
                for (
                  t.textAlign = h,
                    t.textBaseline = "middle",
                    t.font = m.string,
                    e.x = So(this, w, n),
                    t.fillStyle = n.bodyColor,
                    q(this.beforeBody, k),
                    b =
                      d && "right" !== w
                        ? "center" === h
                          ? v / 2 + g
                          : v + 2 + g
                        : 0,
                    o = 0,
                    l = c.length;
                  o < l;
                  ++o
                ) {
                  for (
                    r = c[o],
                      i = this.labelTextColors[o],
                      t.fillStyle = i,
                      q(r.before, k),
                      a = r.lines,
                      d &&
                        a.length &&
                        (this._drawColorBox(t, e, o, x, n),
                        (y = Math.max(m.lineHeight, p))),
                      s = 0,
                      u = a.length;
                    s < u;
                    ++s
                  )
                    k(a[s]), (y = m.lineHeight);
                  q(r.after, k);
                }
                (b = 0), (y = m.lineHeight), q(this.afterBody, k), (e.y -= f);
              },
            },
            {
              key: "drawFooter",
              value: function (e, t, n) {
                var r,
                  i,
                  a = this.footer,
                  o = a.length;
                if (o) {
                  var s = Kn(n.rtl, this.x, this.width);
                  for (
                    e.x = So(this, n.footerAlign, n),
                      e.y += n.footerMarginTop,
                      t.textAlign = s.textAlign(n.footerAlign),
                      t.textBaseline = "middle",
                      r = on(n.footerFont),
                      t.fillStyle = n.footerColor,
                      t.font = r.string,
                      i = 0;
                    i < o;
                    ++i
                  )
                    t.fillText(a[i], s.x(e.x), e.y + r.lineHeight / 2),
                      (e.y += r.lineHeight + n.footerSpacing);
                }
              },
            },
            {
              key: "drawBackground",
              value: function (e, t, n, r) {
                var i = this.xAlign,
                  a = this.yAlign,
                  o = e.x,
                  s = e.y,
                  l = n.width,
                  u = n.height,
                  c = rn(r.cornerRadius),
                  f = c.topLeft,
                  h = c.topRight,
                  d = c.bottomLeft,
                  p = c.bottomRight;
                (t.fillStyle = r.backgroundColor),
                  (t.strokeStyle = r.borderColor),
                  (t.lineWidth = r.borderWidth),
                  t.beginPath(),
                  t.moveTo(o + f, s),
                  "top" === a && this.drawCaret(e, t, n, r),
                  t.lineTo(o + l - h, s),
                  t.quadraticCurveTo(o + l, s, o + l, s + h),
                  "center" === a && "right" === i && this.drawCaret(e, t, n, r),
                  t.lineTo(o + l, s + u - p),
                  t.quadraticCurveTo(o + l, s + u, o + l - p, s + u),
                  "bottom" === a && this.drawCaret(e, t, n, r),
                  t.lineTo(o + d, s + u),
                  t.quadraticCurveTo(o, s + u, o, s + u - d),
                  "center" === a && "left" === i && this.drawCaret(e, t, n, r),
                  t.lineTo(o, s + f),
                  t.quadraticCurveTo(o, s, o + f, s),
                  t.closePath(),
                  t.fill(),
                  r.borderWidth > 0 && t.stroke();
              },
            },
            {
              key: "_updateAnimationTarget",
              value: function (e) {
                var t = this.chart,
                  n = this.$animations,
                  r = n && n.x,
                  i = n && n.y;
                if (r || i) {
                  var a = go[e.position].call(
                    this,
                    this._active,
                    this._eventPosition
                  );
                  if (!a) return;
                  var o = (this._size = xo(this, e)),
                    s = Object.assign({}, a, this._size),
                    l = wo(t, e, s),
                    u = _o(e, s, l, t);
                  (r._to === u.x && i._to === u.y) ||
                    ((this.xAlign = l.xAlign),
                    (this.yAlign = l.yAlign),
                    (this.width = o.width),
                    (this.height = o.height),
                    (this.caretX = a.x),
                    (this.caretY = a.y),
                    this._resolveAnimations().update(this, u));
                }
              },
            },
            {
              key: "_willRender",
              value: function () {
                return !!this.opacity;
              },
            },
            {
              key: "draw",
              value: function (e) {
                var t = this.options.setContext(this.getContext()),
                  n = this.opacity;
                if (n) {
                  this._updateAnimationTarget(t);
                  var r = { width: this.width, height: this.height },
                    i = { x: this.x, y: this.y };
                  n = Math.abs(n) < 0.001 ? 0 : n;
                  var a = an(t.padding),
                    o =
                      this.title.length ||
                      this.beforeBody.length ||
                      this.body.length ||
                      this.afterBody.length ||
                      this.footer.length;
                  t.enabled &&
                    o &&
                    (e.save(),
                    (e.globalAlpha = n),
                    this.drawBackground(i, e, r, t),
                    Xn(e, t.textDirection),
                    (i.y += a.top),
                    this.drawTitle(i, e, t),
                    this.drawBody(i, e, t),
                    this.drawFooter(i, e, t),
                    Gn(e, t.textDirection),
                    e.restore());
                }
              },
            },
            {
              key: "getActiveElements",
              value: function () {
                return this._active || [];
              },
            },
            {
              key: "setActiveElements",
              value: function (e, t) {
                var n = this,
                  r = this._active,
                  i = e.map(function (e) {
                    var t = e.datasetIndex,
                      r = e.index,
                      i = n.chart.getDatasetMeta(t);
                    if (!i)
                      throw new Error("Cannot find a dataset at index " + t);
                    return { datasetIndex: t, element: i.data[r], index: r };
                  }),
                  a = !K(r, i),
                  o = this._positionChanged(i, t);
                (a || o) &&
                  ((this._active = i),
                  (this._eventPosition = t),
                  (this._ignoreReplayEvents = !0),
                  this.update(!0));
              },
            },
            {
              key: "handleEvent",
              value: function (e, t) {
                var n =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2];
                if (t && this._ignoreReplayEvents) return !1;
                this._ignoreReplayEvents = !1;
                var r = this.options,
                  i = this._active || [],
                  a = this._getActiveElements(e, i, t, n),
                  o = this._positionChanged(a, e),
                  s = t || !K(a, i) || o;
                return (
                  s &&
                    ((this._active = a),
                    (r.enabled || r.external) &&
                      ((this._eventPosition = { x: e.x, y: e.y }),
                      this.update(!0, t))),
                  s
                );
              },
            },
            {
              key: "_getActiveElements",
              value: function (e, t, n, r) {
                var i = this.options;
                if ("mouseout" === e.type) return [];
                if (!r) return t;
                var a = this.chart.getElementsAtEventForMode(e, i.mode, i, n);
                return i.reverse && a.reverse(), a;
              },
            },
            {
              key: "_positionChanged",
              value: function (e, t) {
                var n = this.caretX,
                  r = this.caretY,
                  i = this.options,
                  a = go[i.position].call(this, e, t);
                return !1 !== a && (n !== a.x || r !== a.y);
              },
            },
          ]),
          n
        );
      })(Fr);
      Po.positioners = go;
      var Co = {
          id: "tooltip",
          _element: Po,
          positioners: go,
          afterInit: function (e, t, n) {
            n && (e.tooltip = new Po({ chart: e, options: n }));
          },
          beforeUpdate: function (e, t, n) {
            e.tooltip && e.tooltip.initialize(n);
          },
          reset: function (e, t, n) {
            e.tooltip && e.tooltip.initialize(n);
          },
          afterDraw: function (e) {
            var t = e.tooltip;
            if (t && t._willRender()) {
              var n = { tooltip: t };
              if (!1 === e.notifyPlugins("beforeTooltipDraw", n)) return;
              t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
            }
          },
          afterEvent: function (e, t) {
            if (e.tooltip) {
              var n = t.replay;
              e.tooltip.handleEvent(t.event, n, t.inChartArea) &&
                (t.changed = !0);
            }
          },
          defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: { weight: "bold" },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: "bold" },
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: function (e, t) {
              return t.bodyFont.size;
            },
            boxWidth: function (e, t) {
              return t.bodyFont.size;
            },
            multiKeyBackground: "#fff",
            displayColors: !0,
            boxPadding: 0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: { duration: 400, easing: "easeOutQuart" },
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "width", "height", "caretX", "caretY"],
              },
              opacity: { easing: "linear", duration: 200 },
            },
            callbacks: {
              beforeTitle: A,
              title: function (e) {
                if (e.length > 0) {
                  var t = e[0],
                    n = t.chart.data.labels,
                    r = n ? n.length : 0;
                  if (this && this.options && "dataset" === this.options.mode)
                    return t.dataset.label || "";
                  if (t.label) return t.label;
                  if (r > 0 && t.dataIndex < r) return n[t.dataIndex];
                }
                return "";
              },
              afterTitle: A,
              beforeBody: A,
              beforeLabel: A,
              label: function (e) {
                if (this && this.options && "dataset" === this.options.mode)
                  return e.label + ": " + e.formattedValue || e.formattedValue;
                var t = e.dataset.label || "";
                t && (t += ": ");
                var n = e.formattedValue;
                return B(n) || (t += n), t;
              },
              labelColor: function (e) {
                var t = e.chart
                  .getDatasetMeta(e.datasetIndex)
                  .controller.getStyle(e.dataIndex);
                return {
                  borderColor: t.borderColor,
                  backgroundColor: t.backgroundColor,
                  borderWidth: t.borderWidth,
                  borderDash: t.borderDash,
                  borderDashOffset: t.borderDashOffset,
                  borderRadius: 0,
                };
              },
              labelTextColor: function () {
                return this.options.bodyColor;
              },
              labelPointStyle: function (e) {
                var t = e.chart
                  .getDatasetMeta(e.datasetIndex)
                  .controller.getStyle(e.dataIndex);
                return { pointStyle: t.pointStyle, rotation: t.rotation };
              },
              afterLabel: A,
              afterBody: A,
              beforeFooter: A,
              footer: A,
              afterFooter: A,
            },
          },
          defaultRoutes: {
            bodyFont: "font",
            footerFont: "font",
            titleFont: "font",
          },
          descriptors: {
            _scriptable: function (e) {
              return "filter" !== e && "itemSort" !== e && "external" !== e;
            },
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: "animation" },
          },
          additionalOptionScopes: ["interaction"],
        },
        Oo = Object.freeze({
          __proto__: null,
          Decimation: Ua,
          Filler: so,
          Legend: co,
          SubTitle: vo,
          Title: ho,
          Tooltip: Co,
        });
      function To(e, t, n, r) {
        var i = e.indexOf(t);
        return -1 === i
          ? (function (e, t, n, r) {
              return (
                "string" === typeof t
                  ? ((n = e.push(t) - 1), r.unshift({ index: n, label: t }))
                  : isNaN(t) && (n = null),
                n
              );
            })(e, t, n, r)
          : i !== e.lastIndexOf(t)
          ? n
          : i;
      }
      var Lo = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e) {
          var r;
          return (
            j(this, n),
            ((r = t.call(this, e))._startValue = void 0),
            (r._valueRange = 0),
            (r._addedLabels = []),
            r
          );
        }
        return (
          R(n, [
            {
              key: "init",
              value: function (e) {
                var t = this._addedLabels;
                if (t.length) {
                  var r,
                    i = this.getLabels(),
                    a = N(t);
                  try {
                    for (a.s(); !(r = a.n()).done; ) {
                      var o = r.value,
                        s = o.index,
                        l = o.label;
                      i[s] === l && i.splice(s, 1);
                    }
                  } catch (u) {
                    a.e(u);
                  } finally {
                    a.f();
                  }
                  this._addedLabels = [];
                }
                P(M(n.prototype), "init", this).call(this, e);
              },
            },
            {
              key: "parse",
              value: function (e, t) {
                if (B(e)) return null;
                var n = this.getLabels();
                return (function (e, t) {
                  return null === e ? null : Te(Math.round(e), 0, t);
                })(
                  (t =
                    isFinite(t) && n[t] === e
                      ? t
                      : To(n, e, $(t, e), this._addedLabels)),
                  n.length - 1
                );
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var e = this.getUserBounds(),
                  t = e.minDefined,
                  n = e.maxDefined,
                  r = this.getMinMax(!0),
                  i = r.min,
                  a = r.max;
                "ticks" === this.options.bounds &&
                  (t || (i = 0), n || (a = this.getLabels().length - 1)),
                  (this.min = i),
                  (this.max = a);
              },
            },
            {
              key: "buildTicks",
              value: function () {
                var e = this.min,
                  t = this.max,
                  n = this.options.offset,
                  r = [],
                  i = this.getLabels();
                (i = 0 === e && t === i.length - 1 ? i : i.slice(e, t + 1)),
                  (this._valueRange = Math.max(i.length - (n ? 0 : 1), 1)),
                  (this._startValue = this.min - (n ? 0.5 : 0));
                for (var a = e; a <= t; a++) r.push({ value: a });
                return r;
              },
            },
            {
              key: "getLabelForValue",
              value: function (e) {
                var t = this.getLabels();
                return e >= 0 && e < t.length ? t[e] : e;
              },
            },
            {
              key: "configure",
              value: function () {
                P(M(n.prototype), "configure", this).call(this),
                  this.isHorizontal() ||
                    (this._reversePixels = !this._reversePixels);
              },
            },
            {
              key: "getPixelForValue",
              value: function (e) {
                return (
                  "number" !== typeof e && (e = this.parse(e)),
                  null === e
                    ? NaN
                    : this.getPixelForDecimal(
                        (e - this._startValue) / this._valueRange
                      )
                );
              },
            },
            {
              key: "getPixelForTick",
              value: function (e) {
                var t = this.ticks;
                return e < 0 || e > t.length - 1
                  ? null
                  : this.getPixelForValue(t[e].value);
              },
            },
            {
              key: "getValueForPixel",
              value: function (e) {
                return Math.round(
                  this._startValue +
                    this.getDecimalForPixel(e) * this._valueRange
                );
              },
            },
            {
              key: "getBasePixel",
              value: function () {
                return this.bottom;
              },
            },
          ]),
          n
        );
      })(Xr);
      function Io(e, t) {
        var n,
          r,
          i,
          a,
          o = [],
          s = e.bounds,
          l = e.step,
          u = e.min,
          c = e.max,
          f = e.precision,
          h = e.count,
          d = e.maxTicks,
          p = e.maxDigits,
          v = e.includeBounds,
          g = l || 1,
          m = d - 1,
          y = t.min,
          b = t.max,
          x = !B(u),
          k = !B(c),
          w = !B(h),
          _ = (b - y) / (p + 1),
          S = ye((b - y) / m / g) * g;
        if (S < 1e-14 && !x && !k) return [{ value: y }, { value: b }];
        (a = Math.ceil(b / S) - Math.floor(y / S)) > m &&
          (S = ye((a * S) / m / g) * g),
          B(f) || ((n = Math.pow(10, f)), (S = Math.ceil(S * n) / n)),
          "ticks" === s
            ? ((r = Math.floor(y / S) * S), (i = Math.ceil(b / S) * S))
            : ((r = y), (i = b)),
          x &&
          k &&
          l &&
          (function (e, t) {
            var n = Math.round(e);
            return n - t <= e && n + t >= e;
          })((c - u) / l, S / 1e3)
            ? ((S = (c - u) / (a = Math.round(Math.min((c - u) / S, d)))),
              (r = u),
              (i = c))
            : w
            ? (S = ((i = k ? c : i) - (r = x ? u : r)) / (a = h - 1))
            : (a = xe((a = (i - r) / S), Math.round(a), S / 1e3)
                ? Math.round(a)
                : Math.ceil(a));
        var M = Math.max(Se(S), Se(r));
        (n = Math.pow(10, B(f) ? M : f)),
          (r = Math.round(r * n) / n),
          (i = Math.round(i * n) / n);
        var E = 0;
        for (
          x &&
          (v && r !== u
            ? (o.push({ value: u }),
              r < u && E++,
              xe(Math.round((r + E * S) * n) / n, u, Do(u, _, e)) && E++)
            : r < u && E++);
          E < a;
          ++E
        )
          o.push({ value: Math.round((r + E * S) * n) / n });
        return (
          k && v && i !== c
            ? o.length && xe(o[o.length - 1].value, c, Do(c, _, e))
              ? (o[o.length - 1].value = c)
              : o.push({ value: c })
            : (k && i !== c) || o.push({ value: i }),
          o
        );
      }
      function Do(e, t, n) {
        var r = n.horizontal,
          i = we(n.minRotation),
          a = (r ? Math.sin(i) : Math.cos(i)) || 0.001,
          o = 0.75 * t * ("" + e).length;
        return Math.min(t / a, o);
      }
      (Lo.id = "category"),
        (Lo.defaults = { ticks: { callback: Lo.prototype.getLabelForValue } });
      var No = (function (e) {
          O(n, e);
          var t = D(n);
          function n(e) {
            var r;
            return (
              j(this, n),
              ((r = t.call(this, e)).start = void 0),
              (r.end = void 0),
              (r._startValue = void 0),
              (r._endValue = void 0),
              (r._valueRange = 0),
              r
            );
          }
          return (
            R(n, [
              {
                key: "parse",
                value: function (e, t) {
                  return B(e) ||
                    (("number" === typeof e || e instanceof Number) &&
                      !isFinite(+e))
                    ? null
                    : +e;
                },
              },
              {
                key: "handleTickRangeOptions",
                value: function () {
                  var e = this.options.beginAtZero,
                    t = this.getUserBounds(),
                    n = t.minDefined,
                    r = t.maxDefined,
                    i = this.min,
                    a = this.max,
                    o = function (e) {
                      return (i = n ? i : e);
                    },
                    s = function (e) {
                      return (a = r ? a : e);
                    };
                  if (e) {
                    var l = me(i),
                      u = me(a);
                    l < 0 && u < 0 ? s(0) : l > 0 && u > 0 && o(0);
                  }
                  if (i === a) {
                    var c = 1;
                    (a >= Number.MAX_SAFE_INTEGER ||
                      i <= Number.MIN_SAFE_INTEGER) &&
                      (c = Math.abs(0.05 * a)),
                      s(a + c),
                      e || o(i - c);
                  }
                  (this.min = i), (this.max = a);
                },
              },
              {
                key: "getTickLimit",
                value: function () {
                  var e,
                    t = this.options.ticks,
                    n = t.maxTicksLimit,
                    r = t.stepSize;
                  return (
                    r
                      ? (e =
                          Math.ceil(this.max / r) -
                          Math.floor(this.min / r) +
                          1) > 1e3 &&
                        (console.warn(
                          "scales."
                            .concat(this.id, ".ticks.stepSize: ")
                            .concat(r, " would result generating up to ")
                            .concat(e, " ticks. Limiting to 1000.")
                        ),
                        (e = 1e3))
                      : ((e = this.computeTickLimit()), (n = n || 11)),
                    n && (e = Math.min(n, e)),
                    e
                  );
                },
              },
              {
                key: "computeTickLimit",
                value: function () {
                  return Number.POSITIVE_INFINITY;
                },
              },
              {
                key: "buildTicks",
                value: function () {
                  var e = this.options,
                    t = e.ticks,
                    n = this.getTickLimit(),
                    r = Io(
                      {
                        maxTicks: (n = Math.max(2, n)),
                        bounds: e.bounds,
                        min: e.min,
                        max: e.max,
                        precision: t.precision,
                        step: t.stepSize,
                        count: t.count,
                        maxDigits: this._maxDigits(),
                        horizontal: this.isHorizontal(),
                        minRotation: t.minRotation || 0,
                        includeBounds: !1 !== t.includeBounds,
                      },
                      this._range || this
                    );
                  return (
                    "ticks" === e.bounds && ke(r, this, "value"),
                    e.reverse
                      ? (r.reverse(),
                        (this.start = this.max),
                        (this.end = this.min))
                      : ((this.start = this.min), (this.end = this.max)),
                    r
                  );
                },
              },
              {
                key: "configure",
                value: function () {
                  var e = this.ticks,
                    t = this.min,
                    r = this.max;
                  if (
                    (P(M(n.prototype), "configure", this).call(this),
                    this.options.offset && e.length)
                  ) {
                    var i = (r - t) / Math.max(e.length - 1, 1) / 2;
                    (t -= i), (r += i);
                  }
                  (this._startValue = t),
                    (this._endValue = r),
                    (this._valueRange = r - t);
                },
              },
              {
                key: "getLabelForValue",
                value: function (e) {
                  return qn(
                    e,
                    this.chart.options.locale,
                    this.options.ticks.format
                  );
                },
              },
            ]),
            n
          );
        })(Xr),
        jo = (function (e) {
          O(n, e);
          var t = D(n);
          function n() {
            return j(this, n), t.apply(this, arguments);
          }
          return (
            R(n, [
              {
                key: "determineDataLimits",
                value: function () {
                  var e = this.getMinMax(!0),
                    t = e.min,
                    n = e.max;
                  (this.min = H(t) ? t : 0),
                    (this.max = H(n) ? n : 1),
                    this.handleTickRangeOptions();
                },
              },
              {
                key: "computeTickLimit",
                value: function () {
                  var e = this.isHorizontal(),
                    t = e ? this.width : this.height,
                    n = we(this.options.ticks.minRotation),
                    r = (e ? Math.sin(n) : Math.cos(n)) || 0.001,
                    i = this._resolveTickFontOptions(0);
                  return Math.ceil(t / Math.min(40, i.lineHeight / r));
                },
              },
              {
                key: "getPixelForValue",
                value: function (e) {
                  return null === e
                    ? NaN
                    : this.getPixelForDecimal(
                        (e - this._startValue) / this._valueRange
                      );
                },
              },
              {
                key: "getValueForPixel",
                value: function (e) {
                  return (
                    this._startValue +
                    this.getDecimalForPixel(e) * this._valueRange
                  );
                },
              },
            ]),
            n
          );
        })(No);
      function zo(e) {
        return 1 === e / Math.pow(10, Math.floor(ge(e)));
      }
      (jo.id = "linear"),
        (jo.defaults = { ticks: { callback: Vr.formatters.numeric } });
      var Ro = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e) {
          var r;
          return (
            j(this, n),
            ((r = t.call(this, e)).start = void 0),
            (r.end = void 0),
            (r._startValue = void 0),
            (r._valueRange = 0),
            r
          );
        }
        return (
          R(n, [
            {
              key: "parse",
              value: function (e, t) {
                var n = No.prototype.parse.apply(this, [e, t]);
                if (0 !== n) return H(n) && n > 0 ? n : null;
                this._zero = !0;
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var e = this.getMinMax(!0),
                  t = e.min,
                  n = e.max;
                (this.min = H(t) ? Math.max(0, t) : null),
                  (this.max = H(n) ? Math.max(0, n) : null),
                  this.options.beginAtZero && (this._zero = !0),
                  this.handleTickRangeOptions();
              },
            },
            {
              key: "handleTickRangeOptions",
              value: function () {
                var e = this.getUserBounds(),
                  t = e.minDefined,
                  n = e.maxDefined,
                  r = this.min,
                  i = this.max,
                  a = function (e) {
                    return (r = t ? r : e);
                  },
                  o = function (e) {
                    return (i = n ? i : e);
                  },
                  s = function (e, t) {
                    return Math.pow(10, Math.floor(ge(e)) + t);
                  };
                r === i && (r <= 0 ? (a(1), o(10)) : (a(s(r, -1)), o(s(i, 1)))),
                  r <= 0 && a(s(i, -1)),
                  i <= 0 && o(s(r, 1)),
                  this._zero &&
                    this.min !== this._suggestedMin &&
                    r === s(this.min, 0) &&
                    a(s(r, -1)),
                  (this.min = r),
                  (this.max = i);
              },
            },
            {
              key: "buildTicks",
              value: function () {
                var e = this.options,
                  t = (function (e, t) {
                    var n = Math.floor(ge(t.max)),
                      r = Math.ceil(t.max / Math.pow(10, n)),
                      i = [],
                      a = U(e.min, Math.pow(10, Math.floor(ge(t.min)))),
                      o = Math.floor(ge(a)),
                      s = Math.floor(a / Math.pow(10, o)),
                      l = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
                    do {
                      i.push({ value: a, major: zo(a) }),
                        10 === ++s && ((s = 1), (l = ++o >= 0 ? 1 : l)),
                        (a = Math.round(s * Math.pow(10, o) * l) / l);
                    } while (o < n || (o === n && s < r));
                    var u = U(e.max, a);
                    return i.push({ value: u, major: zo(a) }), i;
                  })({ min: this._userMin, max: this._userMax }, this);
                return (
                  "ticks" === e.bounds && ke(t, this, "value"),
                  e.reverse
                    ? (t.reverse(),
                      (this.start = this.max),
                      (this.end = this.min))
                    : ((this.start = this.min), (this.end = this.max)),
                  t
                );
              },
            },
            {
              key: "getLabelForValue",
              value: function (e) {
                return void 0 === e
                  ? "0"
                  : qn(e, this.chart.options.locale, this.options.ticks.format);
              },
            },
            {
              key: "configure",
              value: function () {
                var e = this.min;
                P(M(n.prototype), "configure", this).call(this),
                  (this._startValue = ge(e)),
                  (this._valueRange = ge(this.max) - ge(e));
              },
            },
            {
              key: "getPixelForValue",
              value: function (e) {
                return (
                  (void 0 !== e && 0 !== e) || (e = this.min),
                  null === e || isNaN(e)
                    ? NaN
                    : this.getPixelForDecimal(
                        e === this.min
                          ? 0
                          : (ge(e) - this._startValue) / this._valueRange
                      )
                );
              },
            },
            {
              key: "getValueForPixel",
              value: function (e) {
                var t = this.getDecimalForPixel(e);
                return Math.pow(10, this._startValue + t * this._valueRange);
              },
            },
          ]),
          n
        );
      })(Xr);
      function Ao(e) {
        var t = e.ticks;
        if (t.display && e.display) {
          var n = an(t.backdropPadding);
          return $(t.font && t.font.size, zt.font.size) + n.height;
        }
        return 0;
      }
      function Fo(e, t, n, r, i) {
        return e === r || e === i
          ? { start: t - n / 2, end: t + n / 2 }
          : e < r || e > i
          ? { start: t - n, end: t }
          : { start: t, end: t + n };
      }
      function Bo(e) {
        for (
          var t,
            n,
            r,
            i = {
              l: e.left + e._padding.left,
              r: e.right - e._padding.right,
              t: e.top + e._padding.top,
              b: e.bottom - e._padding.bottom,
            },
            a = Object.assign({}, i),
            o = [],
            s = [],
            l = e._pointLabels.length,
            u = e.options.pointLabels,
            c = u.centerPointLabels ? le / l : 0,
            f = 0;
          f < l;
          f++
        ) {
          var h = u.setContext(e.getPointLabelContext(f));
          s[f] = h.padding;
          var d = e.getPointPosition(f, e.drawingArea + s[f], c),
            p = on(h.font),
            v =
              ((t = e.ctx),
              (n = p),
              (r = V((r = e._pointLabels[f])) ? r : [r]),
              { w: At(t, n.string, r), h: r.length * n.lineHeight });
          o[f] = v;
          var g = Ce(e.getIndexAngle(f) + c),
            m = Math.round(_e(g));
          Vo(a, i, g, Fo(m, d.x, v.w, 0, 180), Fo(m, d.y, v.h, 90, 270));
        }
        e.setCenterPoint(i.l - a.l, a.r - i.r, i.t - a.t, a.b - i.b),
          (e._pointLabelItems = (function (e, t, n) {
            for (
              var r = [],
                i = e._pointLabels.length,
                a = e.options,
                o = Ao(a) / 2,
                s = e.drawingArea,
                l = a.pointLabels.centerPointLabels ? le / i : 0,
                u = 0;
              u < i;
              u++
            ) {
              var c = e.getPointPosition(u, s + o + n[u], l),
                f = Math.round(_e(Ce(c.angle + de))),
                h = t[u],
                d = Uo(c.y, h.h, f),
                p = Wo(f),
                v = Ho(c.x, h.w, p);
              r.push({
                x: c.x,
                y: d,
                textAlign: p,
                left: v,
                top: d,
                right: v + h.w,
                bottom: d + h.h,
              });
            }
            return r;
          })(e, o, s));
      }
      function Vo(e, t, n, r, i) {
        var a = Math.abs(Math.sin(n)),
          o = Math.abs(Math.cos(n)),
          s = 0,
          l = 0;
        r.start < t.l
          ? ((s = (t.l - r.start) / a), (e.l = Math.min(e.l, t.l - s)))
          : r.end > t.r &&
            ((s = (r.end - t.r) / a), (e.r = Math.max(e.r, t.r + s))),
          i.start < t.t
            ? ((l = (t.t - i.start) / o), (e.t = Math.min(e.t, t.t - l)))
            : i.end > t.b &&
              ((l = (i.end - t.b) / o), (e.b = Math.max(e.b, t.b + l)));
      }
      function Wo(e) {
        return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right";
      }
      function Ho(e, t, n) {
        return "right" === n ? (e -= t) : "center" === n && (e -= t / 2), e;
      }
      function Uo(e, t, n) {
        return (
          90 === n || 270 === n
            ? (e -= t / 2)
            : (n > 270 || n < 90) && (e -= t),
          e
        );
      }
      function $o(e, t, n, r) {
        var i = e.ctx;
        if (n) i.arc(e.xCenter, e.yCenter, t, 0, ue);
        else {
          var a = e.getPointPosition(0, t);
          i.moveTo(a.x, a.y);
          for (var o = 1; o < r; o++)
            (a = e.getPointPosition(o, t)), i.lineTo(a.x, a.y);
        }
      }
      (Ro.id = "logarithmic"),
        (Ro.defaults = {
          ticks: {
            callback: Vr.formatters.logarithmic,
            major: { enabled: !0 },
          },
        });
      var Yo = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e) {
          var r;
          return (
            j(this, n),
            ((r = t.call(this, e)).xCenter = void 0),
            (r.yCenter = void 0),
            (r.drawingArea = void 0),
            (r._pointLabels = []),
            (r._pointLabelItems = []),
            r
          );
        }
        return (
          R(n, [
            {
              key: "setDimensions",
              value: function () {
                var e = (this._padding = an(Ao(this.options) / 2)),
                  t = (this.width = this.maxWidth - e.width),
                  n = (this.height = this.maxHeight - e.height);
                (this.xCenter = Math.floor(this.left + t / 2 + e.left)),
                  (this.yCenter = Math.floor(this.top + n / 2 + e.top)),
                  (this.drawingArea = Math.floor(Math.min(t, n) / 2));
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var e = this.getMinMax(!1),
                  t = e.min,
                  n = e.max;
                (this.min = H(t) && !isNaN(t) ? t : 0),
                  (this.max = H(n) && !isNaN(n) ? n : 0),
                  this.handleTickRangeOptions();
              },
            },
            {
              key: "computeTickLimit",
              value: function () {
                return Math.ceil(this.drawingArea / Ao(this.options));
              },
            },
            {
              key: "generateTickLabels",
              value: function (e) {
                var t = this;
                No.prototype.generateTickLabels.call(this, e),
                  (this._pointLabels = this.getLabels()
                    .map(function (e, n) {
                      var r = Q(t.options.pointLabels.callback, [e, n], t);
                      return r || 0 === r ? r : "";
                    })
                    .filter(function (e, n) {
                      return t.chart.getDataVisibility(n);
                    }));
              },
            },
            {
              key: "fit",
              value: function () {
                var e = this.options;
                e.display && e.pointLabels.display
                  ? Bo(this)
                  : this.setCenterPoint(0, 0, 0, 0);
              },
            },
            {
              key: "setCenterPoint",
              value: function (e, t, n, r) {
                (this.xCenter += Math.floor((e - t) / 2)),
                  (this.yCenter += Math.floor((n - r) / 2)),
                  (this.drawingArea -= Math.min(
                    this.drawingArea / 2,
                    Math.max(e, t, n, r)
                  ));
              },
            },
            {
              key: "getIndexAngle",
              value: function (e) {
                return Ce(
                  e * (ue / (this._pointLabels.length || 1)) +
                    we(this.options.startAngle || 0)
                );
              },
            },
            {
              key: "getDistanceFromCenterForValue",
              value: function (e) {
                if (B(e)) return NaN;
                var t = this.drawingArea / (this.max - this.min);
                return this.options.reverse
                  ? (this.max - e) * t
                  : (e - this.min) * t;
              },
            },
            {
              key: "getValueForDistanceFromCenter",
              value: function (e) {
                if (B(e)) return NaN;
                var t = e / (this.drawingArea / (this.max - this.min));
                return this.options.reverse ? this.max - t : this.min + t;
              },
            },
            {
              key: "getPointLabelContext",
              value: function (e) {
                var t = this._pointLabels || [];
                if (e >= 0 && e < t.length) {
                  var n = t[e];
                  return (function (e, t, n) {
                    return ln(e, { label: n, index: t, type: "pointLabel" });
                  })(this.getContext(), e, n);
                }
              },
            },
            {
              key: "getPointPosition",
              value: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  r = this.getIndexAngle(e) - de + n;
                return {
                  x: Math.cos(r) * t + this.xCenter,
                  y: Math.sin(r) * t + this.yCenter,
                  angle: r,
                };
              },
            },
            {
              key: "getPointPositionForValue",
              value: function (e, t) {
                return this.getPointPosition(
                  e,
                  this.getDistanceFromCenterForValue(t)
                );
              },
            },
            {
              key: "getBasePosition",
              value: function (e) {
                return this.getPointPositionForValue(
                  e || 0,
                  this.getBaseValue()
                );
              },
            },
            {
              key: "getPointLabelPosition",
              value: function (e) {
                var t = this._pointLabelItems[e];
                return {
                  left: t.left,
                  top: t.top,
                  right: t.right,
                  bottom: t.bottom,
                };
              },
            },
            {
              key: "drawBackground",
              value: function () {
                var e = this.options,
                  t = e.backgroundColor,
                  n = e.grid.circular;
                if (t) {
                  var r = this.ctx;
                  r.save(),
                    r.beginPath(),
                    $o(
                      this,
                      this.getDistanceFromCenterForValue(this._endValue),
                      n,
                      this._pointLabels.length
                    ),
                    r.closePath(),
                    (r.fillStyle = t),
                    r.fill(),
                    r.restore();
                }
              },
            },
            {
              key: "drawGrid",
              value: function () {
                var e,
                  t,
                  n,
                  r = this,
                  i = this.ctx,
                  a = this.options,
                  o = a.angleLines,
                  s = a.grid,
                  l = this._pointLabels.length;
                if (
                  (a.pointLabels.display &&
                    (function (e, t) {
                      for (
                        var n = e.ctx, r = e.options.pointLabels, i = t - 1;
                        i >= 0;
                        i--
                      ) {
                        var a = r.setContext(e.getPointLabelContext(i)),
                          o = on(a.font),
                          s = e._pointLabelItems[i],
                          l = s.x,
                          u = s.y,
                          c = s.textAlign,
                          f = s.left,
                          h = s.top,
                          d = s.right,
                          p = s.bottom,
                          v = a.backdropColor;
                        if (!B(v)) {
                          var g = rn(a.borderRadius),
                            m = an(a.backdropPadding);
                          n.fillStyle = v;
                          var y = f - m.left,
                            b = h - m.top,
                            x = d - f + m.width,
                            k = p - h + m.height;
                          Object.values(g).some(function (e) {
                            return 0 !== e;
                          })
                            ? (n.beginPath(),
                              Gt(n, { x: y, y: b, w: x, h: k, radius: g }),
                              n.fill())
                            : n.fillRect(y, b, x, k);
                        }
                        qt(n, e._pointLabels[i], l, u + o.lineHeight / 2, o, {
                          color: a.color,
                          textAlign: c,
                          textBaseline: "middle",
                        });
                      }
                    })(this, l),
                  s.display &&
                    this.ticks.forEach(function (e, n) {
                      if (0 !== n) {
                        t = r.getDistanceFromCenterForValue(e.value);
                        var i = s.setContext(r.getContext(n - 1));
                        !(function (e, t, n, r) {
                          var i = e.ctx,
                            a = t.circular,
                            o = t.color,
                            s = t.lineWidth;
                          (!a && !r) ||
                            !o ||
                            !s ||
                            n < 0 ||
                            (i.save(),
                            (i.strokeStyle = o),
                            (i.lineWidth = s),
                            i.setLineDash(t.borderDash),
                            (i.lineDashOffset = t.borderDashOffset),
                            i.beginPath(),
                            $o(e, n, a, r),
                            i.closePath(),
                            i.stroke(),
                            i.restore());
                        })(r, i, t, l);
                      }
                    }),
                  o.display)
                ) {
                  for (i.save(), e = l - 1; e >= 0; e--) {
                    var u = o.setContext(this.getPointLabelContext(e)),
                      c = u.color,
                      f = u.lineWidth;
                    f &&
                      c &&
                      ((i.lineWidth = f),
                      (i.strokeStyle = c),
                      i.setLineDash(u.borderDash),
                      (i.lineDashOffset = u.borderDashOffset),
                      (t = this.getDistanceFromCenterForValue(
                        a.ticks.reverse ? this.min : this.max
                      )),
                      (n = this.getPointPosition(e, t)),
                      i.beginPath(),
                      i.moveTo(this.xCenter, this.yCenter),
                      i.lineTo(n.x, n.y),
                      i.stroke());
                  }
                  i.restore();
                }
              },
            },
            { key: "drawBorder", value: function () {} },
            {
              key: "drawLabels",
              value: function () {
                var e = this,
                  t = this.ctx,
                  n = this.options,
                  r = n.ticks;
                if (r.display) {
                  var i,
                    a,
                    o = this.getIndexAngle(0);
                  t.save(),
                    t.translate(this.xCenter, this.yCenter),
                    t.rotate(o),
                    (t.textAlign = "center"),
                    (t.textBaseline = "middle"),
                    this.ticks.forEach(function (o, s) {
                      if (0 !== s || n.reverse) {
                        var l = r.setContext(e.getContext(s)),
                          u = on(l.font);
                        if (
                          ((i = e.getDistanceFromCenterForValue(
                            e.ticks[s].value
                          )),
                          l.showLabelBackdrop)
                        ) {
                          (t.font = u.string),
                            (a = t.measureText(o.label).width),
                            (t.fillStyle = l.backdropColor);
                          var c = an(l.backdropPadding);
                          t.fillRect(
                            -a / 2 - c.left,
                            -i - u.size / 2 - c.top,
                            a + c.width,
                            u.size + c.height
                          );
                        }
                        qt(t, o.label, 0, -i, u, { color: l.color });
                      }
                    }),
                    t.restore();
                }
              },
            },
            { key: "drawTitle", value: function () {} },
          ]),
          n
        );
      })(No);
      (Yo.id = "radialLinear"),
        (Yo.defaults = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: Vr.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: function (e) {
              return e;
            },
            padding: 5,
            centerPointLabels: !1,
          },
        }),
        (Yo.defaultRoutes = {
          "angleLines.color": "borderColor",
          "pointLabels.color": "color",
          "ticks.color": "color",
        }),
        (Yo.descriptors = { angleLines: { _fallback: "grid" } });
      var Qo = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        qo = Object.keys(Qo);
      function Ko(e, t) {
        return e - t;
      }
      function Xo(e, t) {
        if (B(t)) return null;
        var n = e._adapter,
          r = e._parseOpts,
          i = r.parser,
          a = r.round,
          o = r.isoWeekday,
          s = t;
        return (
          "function" === typeof i && (s = i(s)),
          H(s) || (s = "string" === typeof i ? n.parse(s, i) : n.parse(s)),
          null === s
            ? null
            : (a &&
                (s =
                  "week" !== a || (!be(o) && !0 !== o)
                    ? n.startOf(s, a)
                    : n.startOf(s, "isoWeek", o)),
              +s)
        );
      }
      function Go(e, t, n, r) {
        for (var i = qo.length, a = qo.indexOf(e); a < i - 1; ++a) {
          var o = Qo[qo[a]],
            s = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
          if (o.common && Math.ceil((n - t) / (s * o.size)) <= r) return qo[a];
        }
        return qo[i - 1];
      }
      function Jo(e, t, n) {
        if (n) {
          if (n.length) {
            var r = Ie(n, t),
              i = r.lo,
              a = r.hi;
            e[n[i] >= t ? n[i] : n[a]] = !0;
          }
        } else e[t] = !0;
      }
      function Zo(e, t, n) {
        var r,
          i,
          a = [],
          o = {},
          s = t.length;
        for (r = 0; r < s; ++r)
          (o[(i = t[r])] = r), a.push({ value: i, major: !1 });
        return 0 !== s && n
          ? (function (e, t, n, r) {
              var i,
                a,
                o = e._adapter,
                s = +o.startOf(t[0].value, r),
                l = t[t.length - 1].value;
              for (i = s; i <= l; i = +o.add(i, 1, r))
                (a = n[i]) >= 0 && (t[a].major = !0);
              return t;
            })(e, a, o, n)
          : a;
      }
      var es = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e) {
          var r;
          return (
            j(this, n),
            ((r = t.call(this, e))._cache = { data: [], labels: [], all: [] }),
            (r._unit = "day"),
            (r._majorUnit = void 0),
            (r._offsets = {}),
            (r._normalized = !1),
            (r._parseOpts = void 0),
            r
          );
        }
        return (
          R(n, [
            {
              key: "init",
              value: function (e, t) {
                var r = e.time || (e.time = {}),
                  i = (this._adapter = new ii._date(e.adapters.date));
                i.init(t),
                  ee(r.displayFormats, i.formats()),
                  (this._parseOpts = {
                    parser: r.parser,
                    round: r.round,
                    isoWeekday: r.isoWeekday,
                  }),
                  P(M(n.prototype), "init", this).call(this, e),
                  (this._normalized = t.normalized);
              },
            },
            {
              key: "parse",
              value: function (e, t) {
                return void 0 === e ? null : Xo(this, e);
              },
            },
            {
              key: "beforeLayout",
              value: function () {
                P(M(n.prototype), "beforeLayout", this).call(this),
                  (this._cache = { data: [], labels: [], all: [] });
              },
            },
            {
              key: "determineDataLimits",
              value: function () {
                var e = this.options,
                  t = this._adapter,
                  n = e.time.unit || "day",
                  r = this.getUserBounds(),
                  i = r.min,
                  a = r.max,
                  o = r.minDefined,
                  s = r.maxDefined;
                function l(e) {
                  o || isNaN(e.min) || (i = Math.min(i, e.min)),
                    s || isNaN(e.max) || (a = Math.max(a, e.max));
                }
                (o && s) ||
                  (l(this._getLabelBounds()),
                  ("ticks" === e.bounds && "labels" === e.ticks.source) ||
                    l(this.getMinMax(!1))),
                  (i = H(i) && !isNaN(i) ? i : +t.startOf(Date.now(), n)),
                  (a = H(a) && !isNaN(a) ? a : +t.endOf(Date.now(), n) + 1),
                  (this.min = Math.min(i, a - 1)),
                  (this.max = Math.max(i + 1, a));
              },
            },
            {
              key: "_getLabelBounds",
              value: function () {
                var e = this.getLabelTimestamps(),
                  t = Number.POSITIVE_INFINITY,
                  n = Number.NEGATIVE_INFINITY;
                return (
                  e.length && ((t = e[0]), (n = e[e.length - 1])),
                  { min: t, max: n }
                );
              },
            },
            {
              key: "buildTicks",
              value: function () {
                var e = this.options,
                  t = e.time,
                  n = e.ticks,
                  r =
                    "labels" === n.source
                      ? this.getLabelTimestamps()
                      : this._generate();
                "ticks" === e.bounds &&
                  r.length &&
                  ((this.min = this._userMin || r[0]),
                  (this.max = this._userMax || r[r.length - 1]));
                var i = this.min,
                  a = (function (e, t, n) {
                    for (var r = 0, i = e.length; r < i && e[r] < t; ) r++;
                    for (; i > r && e[i - 1] > n; ) i--;
                    return r > 0 || i < e.length ? e.slice(r, i) : e;
                  })(r, i, this.max);
                return (
                  (this._unit =
                    t.unit ||
                    (n.autoSkip
                      ? Go(
                          t.minUnit,
                          this.min,
                          this.max,
                          this._getLabelCapacity(i)
                        )
                      : (function (e, t, n, r, i) {
                          for (var a = qo.length - 1; a >= qo.indexOf(n); a--) {
                            var o = qo[a];
                            if (
                              Qo[o].common &&
                              e._adapter.diff(i, r, o) >= t - 1
                            )
                              return o;
                          }
                          return qo[n ? qo.indexOf(n) : 0];
                        })(this, a.length, t.minUnit, this.min, this.max))),
                  (this._majorUnit =
                    n.major.enabled && "year" !== this._unit
                      ? (function (e) {
                          for (
                            var t = qo.indexOf(e) + 1, n = qo.length;
                            t < n;
                            ++t
                          )
                            if (Qo[qo[t]].common) return qo[t];
                        })(this._unit)
                      : void 0),
                  this.initOffsets(r),
                  e.reverse && a.reverse(),
                  Zo(this, a, this._majorUnit)
                );
              },
            },
            {
              key: "afterAutoSkip",
              value: function () {
                this.options.offsetAfterAutoskip &&
                  this.initOffsets(
                    this.ticks.map(function (e) {
                      return +e.value;
                    })
                  );
              },
            },
            {
              key: "initOffsets",
              value: function (e) {
                var t,
                  n,
                  r = 0,
                  i = 0;
                this.options.offset &&
                  e.length &&
                  ((t = this.getDecimalForValue(e[0])),
                  (r =
                    1 === e.length
                      ? 1 - t
                      : (this.getDecimalForValue(e[1]) - t) / 2),
                  (n = this.getDecimalForValue(e[e.length - 1])),
                  (i =
                    1 === e.length
                      ? n
                      : (n - this.getDecimalForValue(e[e.length - 2])) / 2));
                var a = e.length < 3 ? 0.5 : 0.25;
                (r = Te(r, 0, a)),
                  (i = Te(i, 0, a)),
                  (this._offsets = {
                    start: r,
                    end: i,
                    factor: 1 / (r + 1 + i),
                  });
              },
            },
            {
              key: "_generate",
              value: function () {
                var e,
                  t,
                  n = this._adapter,
                  r = this.min,
                  i = this.max,
                  a = this.options,
                  o = a.time,
                  s = o.unit || Go(o.minUnit, r, i, this._getLabelCapacity(r)),
                  l = $(o.stepSize, 1),
                  u = "week" === s && o.isoWeekday,
                  c = be(u) || !0 === u,
                  f = {},
                  h = r;
                if (
                  (c && (h = +n.startOf(h, "isoWeek", u)),
                  (h = +n.startOf(h, c ? "day" : s)),
                  n.diff(i, r, s) > 1e5 * l)
                )
                  throw new Error(
                    r +
                      " and " +
                      i +
                      " are too far apart with stepSize of " +
                      l +
                      " " +
                      s
                  );
                var d = "data" === a.ticks.source && this.getDataTimestamps();
                for (e = h, t = 0; e < i; e = +n.add(e, l, s), t++) Jo(f, e, d);
                return (
                  (e !== i && "ticks" !== a.bounds && 1 !== t) || Jo(f, e, d),
                  Object.keys(f)
                    .sort(function (e, t) {
                      return e - t;
                    })
                    .map(function (e) {
                      return +e;
                    })
                );
              },
            },
            {
              key: "getLabelForValue",
              value: function (e) {
                var t = this._adapter,
                  n = this.options.time;
                return n.tooltipFormat
                  ? t.format(e, n.tooltipFormat)
                  : t.format(e, n.displayFormats.datetime);
              },
            },
            {
              key: "_tickFormatFunction",
              value: function (e, t, n, r) {
                var i = this.options,
                  a = i.time.displayFormats,
                  o = this._unit,
                  s = this._majorUnit,
                  l = o && a[o],
                  u = s && a[s],
                  c = n[t],
                  f = s && u && c && c.major,
                  h = this._adapter.format(e, r || (f ? u : l)),
                  d = i.ticks.callback;
                return d ? Q(d, [h, t, n], this) : h;
              },
            },
            {
              key: "generateTickLabels",
              value: function (e) {
                var t, n, r;
                for (t = 0, n = e.length; t < n; ++t)
                  (r = e[t]).label = this._tickFormatFunction(r.value, t, e);
              },
            },
            {
              key: "getDecimalForValue",
              value: function (e) {
                return null === e
                  ? NaN
                  : (e - this.min) / (this.max - this.min);
              },
            },
            {
              key: "getPixelForValue",
              value: function (e) {
                var t = this._offsets,
                  n = this.getDecimalForValue(e);
                return this.getPixelForDecimal((t.start + n) * t.factor);
              },
            },
            {
              key: "getValueForPixel",
              value: function (e) {
                var t = this._offsets,
                  n = this.getDecimalForPixel(e) / t.factor - t.end;
                return this.min + n * (this.max - this.min);
              },
            },
            {
              key: "_getLabelSize",
              value: function (e) {
                var t = this.options.ticks,
                  n = this.ctx.measureText(e).width,
                  r = we(this.isHorizontal() ? t.maxRotation : t.minRotation),
                  i = Math.cos(r),
                  a = Math.sin(r),
                  o = this._resolveTickFontOptions(0).size;
                return { w: n * i + o * a, h: n * a + o * i };
              },
            },
            {
              key: "_getLabelCapacity",
              value: function (e) {
                var t = this.options.time,
                  n = t.displayFormats,
                  r = n[t.unit] || n.millisecond,
                  i = this._tickFormatFunction(
                    e,
                    0,
                    Zo(this, [e], this._majorUnit),
                    r
                  ),
                  a = this._getLabelSize(i),
                  o =
                    Math.floor(
                      this.isHorizontal() ? this.width / a.w : this.height / a.h
                    ) - 1;
                return o > 0 ? o : 1;
              },
            },
            {
              key: "getDataTimestamps",
              value: function () {
                var e,
                  t,
                  n = this._cache.data || [];
                if (n.length) return n;
                var r = this.getMatchingVisibleMetas();
                if (this._normalized && r.length)
                  return (this._cache.data =
                    r[0].controller.getAllParsedValues(this));
                for (e = 0, t = r.length; e < t; ++e)
                  n = n.concat(r[e].controller.getAllParsedValues(this));
                return (this._cache.data = this.normalize(n));
              },
            },
            {
              key: "getLabelTimestamps",
              value: function () {
                var e,
                  t,
                  n = this._cache.labels || [];
                if (n.length) return n;
                var r = this.getLabels();
                for (e = 0, t = r.length; e < t; ++e) n.push(Xo(this, r[e]));
                return (this._cache.labels = this._normalized
                  ? n
                  : this.normalize(n));
              },
            },
            {
              key: "normalize",
              value: function (e) {
                return Re(e.sort(Ko));
              },
            },
          ]),
          n
        );
      })(Xr);
      function ts(e, t, n) {
        var r,
          i,
          a,
          o,
          s = 0,
          l = e.length - 1;
        if (n) {
          if (t >= e[s].pos && t <= e[l].pos) {
            var u = De(e, "pos", t);
            (s = u.lo), (l = u.hi);
          }
          var c = e[s];
          (r = c.pos), (a = c.time);
          var f = e[l];
          (i = f.pos), (o = f.time);
        } else {
          if (t >= e[s].time && t <= e[l].time) {
            var h = De(e, "time", t);
            (s = h.lo), (l = h.hi);
          }
          var d = e[s];
          (r = d.time), (a = d.pos);
          var p = e[l];
          (i = p.time), (o = p.pos);
        }
        var v = i - r;
        return v ? a + ((o - a) * (t - r)) / v : a;
      }
      (es.id = "time"),
        (es.defaults = {
          bounds: "data",
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {},
          },
          ticks: { source: "auto", major: { enabled: !1 } },
        });
      var ns = (function (e) {
        O(n, e);
        var t = D(n);
        function n(e) {
          var r;
          return (
            j(this, n),
            ((r = t.call(this, e))._table = []),
            (r._minPos = void 0),
            (r._tableRange = void 0),
            r
          );
        }
        return (
          R(n, [
            {
              key: "initOffsets",
              value: function () {
                var e = this._getTimestampsForTable(),
                  t = (this._table = this.buildLookupTable(e));
                (this._minPos = ts(t, this.min)),
                  (this._tableRange = ts(t, this.max) - this._minPos),
                  P(M(n.prototype), "initOffsets", this).call(this, e);
              },
            },
            {
              key: "buildLookupTable",
              value: function (e) {
                var t,
                  n,
                  r,
                  i,
                  a,
                  o = this.min,
                  s = this.max,
                  l = [],
                  u = [];
                for (t = 0, n = e.length; t < n; ++t)
                  (i = e[t]) >= o && i <= s && l.push(i);
                if (l.length < 2)
                  return [
                    { time: o, pos: 0 },
                    { time: s, pos: 1 },
                  ];
                for (t = 0, n = l.length; t < n; ++t)
                  (a = l[t + 1]),
                    (r = l[t - 1]),
                    (i = l[t]),
                    Math.round((a + r) / 2) !== i &&
                      u.push({ time: i, pos: t / (n - 1) });
                return u;
              },
            },
            {
              key: "_getTimestampsForTable",
              value: function () {
                var e = this._cache.all || [];
                if (e.length) return e;
                var t = this.getDataTimestamps(),
                  n = this.getLabelTimestamps();
                return (
                  (e =
                    t.length && n.length
                      ? this.normalize(t.concat(n))
                      : t.length
                      ? t
                      : n),
                  (e = this._cache.all = e)
                );
              },
            },
            {
              key: "getDecimalForValue",
              value: function (e) {
                return (ts(this._table, e) - this._minPos) / this._tableRange;
              },
            },
            {
              key: "getValueForPixel",
              value: function (e) {
                var t = this._offsets,
                  n = this.getDecimalForPixel(e) / t.factor - t.end;
                return ts(this._table, n * this._tableRange + this._minPos, !0);
              },
            },
          ]),
          n
        );
      })(es);
      (ns.id = "timeseries"), (ns.defaults = es.defaults);
      var rs = [
        ti,
        Va,
        Oo,
        Object.freeze({
          __proto__: null,
          CategoryScale: Lo,
          LinearScale: jo,
          LogarithmicScale: Ro,
          RadialLinearScale: Yo,
          TimeScale: es,
          TimeSeriesScale: ns,
        }),
      ];
      pa.register.apply(pa, x(rs));
      var is = n(184),
        as = function (t) {
          var n = t.CreateNewWordSet,
            r = t.ShowHighScorePopup,
            i = t.restartTyping,
            a = t.speed,
            s = t.accuracy,
            l = t.setTypingWords,
            u = t.score,
            c = t.characters,
            f = t.rawSpeed,
            h = t.seconds,
            d = function () {
              document.getElementById("resultsWindow").classList.add("hidden");
            },
            v = function (e) {
              "r" == e.key && (i(), d()),
                "n" == e.key && (d(), l([]), n(), i());
            },
            y = o((0, e.useState)(0), 2),
            x = y[0],
            k = y[1];
          return (
            (0, e.useEffect)(function () {
              for (
                var e = JSON.parse(localStorage.getItem("aSpeed")),
                  t = 0,
                  n = 0;
                n < e.length;
                n++
              )
                t += e[n];
              var r = Math.round(t / e.length);
              if (
                (k(r),
                !document
                  .getElementById("resultsWindow")
                  .classList.contains("hidden"))
              )
                return (
                  document.addEventListener("keydown", v),
                  function () {
                    return document.removeEventListener("keydown", v);
                  }
                );
            }),
            (0, is.jsxs)("div", {
              id: "resultsWindow",
              className: " z-[120] hidden",
              children: [
                (function () {
                  if (r)
                    return (0, is.jsx)("div", {
                      id: "highScoreWindow",
                      className: " z-[120] absolute ",
                      children: (0, is.jsx)(b(), {
                        width: window.innerWidth,
                        height: window.innerHeight,
                        colors: [
                          "#FF6920",
                          "#DC4987",
                          "#6236B2",
                          "#F3BB0A",
                          "#3F52FC",
                        ],
                      }),
                    });
                })(),
                (0, is.jsx)("button", {
                  onClick: function () {
                    d(), l([]), n(), i();
                  },
                  className:
                    "w-screen h-screen bg-black z-[100] opacity-70 absolute",
                }),
                (0, is.jsxs)("div", {
                  className:
                    "absolute left-1/2 top-[50%]  -translate-x-1/2 -translate-y-1/2 h-fit w-[70%] z-[110] bg-c2 p-10 pb-4 rounded-xl fade-inr",
                  children: [
                    (0, is.jsx)("div", {
                      className: "flex flex-row gap-10",
                      children: (0, is.jsxs)("div", {
                        className: "flex flex-col gap-10",
                        children: [
                          (0, is.jsxs)("div", {
                            className: "flex flex-col justify-between ",
                            children: [
                              (0, is.jsx)("h1", {
                                className:
                                  "text-2xl font-bold text-white font-f1",
                                children: "Score",
                              }),
                              (0, is.jsx)("h1", {
                                className:
                                  "font-bold text-7xl text-c1 font-f1 whitespace-nowrap",
                                children: u,
                              }),
                              (function () {
                                if ("score" == r)
                                  return (0, is.jsx)("h1", {
                                    className:
                                      "absolute p-1 text-sm font-bold font-f1 text-white rounded-lg left-[120px] bg-c1",
                                    children: "High Score",
                                  });
                              })(),
                            ],
                          }),
                          (0, is.jsxs)("div", {
                            className: "flex flex-col justify-between ",
                            children: [
                              (0, is.jsx)("h1", {
                                className:
                                  "text-2xl font-bold text-white font-f1",
                                children: "Wpm",
                              }),
                              (0, is.jsx)("h1", {
                                className:
                                  "font-bold text-7xl text-c1 font-f1 whitespace-nowrap",
                                children: a,
                              }),
                              (function () {
                                if ("speed" == r)
                                  return (0, is.jsx)("h1", {
                                    className:
                                      "absolute p-1 text-sm font-bold text-white rounded-lg font-f1 left-[120px] bg-c1",
                                    children: "High Speed",
                                  });
                              })(),
                            ],
                          }),
                          (0, is.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, is.jsx)("h1", {
                                className:
                                  "text-xl font-bold text-white font-f1",
                                children: "Accuracy",
                              }),
                              (0, is.jsx)("h1", {
                                className: "text-5xl font-bold text-c1 font-f1",
                                children: s + "%",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, is.jsxs)("div", {
                      className:
                        "flex flex-row justify-between w-full gap-16 mt-6",
                      children: [
                        (0, is.jsxs)("div", {
                          className: "flex flex-col ",
                          children: [
                            (0, is.jsx)("h1", {
                              className:
                                "text-base font-bold text-white font-f1 whitespace-nowrap",
                              children: "raw",
                            }),
                            (0, is.jsx)("h1", {
                              className: "text-4xl font-bold text-c1 font-f1",
                              children: f,
                            }),
                          ],
                        }),
                        (0, is.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, is.jsx)("h1", {
                              className:
                                "text-base font-bold text-white font-f1",
                              children: "characters",
                            }),
                            (0, is.jsx)("h1", {
                              className: "text-4xl font-bold text-c1 font-f1",
                              children: c,
                            }),
                          ],
                        }),
                        (0, is.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, is.jsx)("h1", {
                              className:
                                "text-base font-bold text-white font-f1",
                              children: "speed pr",
                            }),
                            (0, is.jsx)("h1", {
                              className: "text-4xl font-bold text-c1 font-f1",
                              children: localStorage.getItem("hSpeed"),
                            }),
                          ],
                        }),
                        (0, is.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, is.jsx)("h1", {
                              className:
                                "text-base font-bold text-white font-f1",
                              children: "average speed",
                            }),
                            (0, is.jsx)("h1", {
                              className: "text-4xl font-bold text-c1 font-f1",
                              children: x,
                            }),
                          ],
                        }),
                        (0, is.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, is.jsx)("h1", {
                              className:
                                "text-base font-bold text-white font-f1",
                              children: "time",
                            }),
                            (0, is.jsx)("h1", {
                              className: "text-4xl font-bold text-c1 font-f1",
                              children: h + "s",
                            }),
                            (0, is.jsx)("h1", {
                              className: "text-sm font-bold text-c8 font-f1",
                              children: "00:00:44 session",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, is.jsxs)("div", {
                      className: "flex flex-row gap-6 mx-auto mt-4 w-fit ",
                      children: [
                        (0, is.jsxs)("button", {
                          onClick: function () {
                            i(),
                              d(),
                              document
                                .getElementById("settings")
                                .classList.remove("hidden"),
                              document
                                .getElementById("settings")
                                .classList.add("slide-in-bottom"),
                              document
                                .getElementById("typingScreen")
                                .classList.add("slide-out-top"),
                              document
                                .getElementById("typingScreen")
                                .classList.remove("slide-in-top");
                          },
                          className:
                            "flex flex-row items-center gap-3 p-2 pr-3 text-2xl font-bold text-white font-f1 bg-c6 rounded-xl",
                          children: [
                            (0, is.jsx)(p, {
                              className: "w-10 h-10 fill-white",
                            }),
                            "Settings",
                          ],
                        }),
                        (0, is.jsxs)("button", {
                          onClick: function () {
                            i(), d();
                          },
                          className:
                            "flex flex-row items-center gap-3 p-2 pr-3 text-2xl font-bold text-white font-f1 bg-c5 rounded-xl",
                          children: [
                            (0, is.jsx)(g, {
                              className: "w-10 h-10 fill-white",
                            }),
                            "Repeat",
                          ],
                        }),
                        (0, is.jsxs)("button", {
                          onClick: function () {
                            d(), l([]), n(), i();
                          },
                          className:
                            "flex flex-row items-center gap-3 p-2 pl-4 text-2xl font-bold text-white font-f1 bg-c1 rounded-xl",
                          children: [
                            "Next",
                            (0, is.jsx)(m, {
                              className: "w-10 h-10 fill-white",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, is.jsxs)("div", {
                      className:
                        "flex flex-row justify-between gap-4 mx-auto mt-3 w-fit",
                      children: [
                        (0, is.jsxs)("div", {
                          className: "flex flex-row items-center gap-2",
                          children: [
                            (0, is.jsx)("div", {
                              className: "p-1 py-0 rounded-md bg-c8 text-c2",
                              children: "R",
                            }),
                            (0, is.jsx)("div", {
                              className: "rounded-md text-c8",
                              children: "- Repeat",
                            }),
                          ],
                        }),
                        (0, is.jsxs)("div", {
                          className: "flex flex-row items-center gap-2",
                          children: [
                            (0, is.jsx)("div", {
                              className: "p-1 py-0 rounded-md bg-c8 text-c2",
                              children: "N",
                            }),
                            (0, is.jsx)("div", {
                              className: "rounded-md text-c8",
                              children: "- Next Set",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      function os(e) {
        return h({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: {},
              child: [
                { tag: "path", attr: { fill: "none", d: "M0 0H24V24H0z" } },
                {
                  tag: "path",
                  attr: {
                    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3.833 3.337c.237-.166.559-.138.763.067.204.204.23.526.063.76-2.18 3.046-3.38 4.678-3.598 4.897-.586.585-1.536.585-2.122 0-.585-.586-.585-1.536 0-2.122.374-.373 2.005-1.574 4.894-3.602zM17.5 11c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-11 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm2.318-3.596c.39.39.39 1.023 0 1.414-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0zM12 5.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z",
                  },
                },
              ],
            },
          ],
        })(e);
      }
      var ss = function (t) {
          var n = t.speed,
            r = t.incorrectCharacters,
            i = t.characters,
            a = t.setAccuracyMain,
            s = t.pacerSpeed,
            l = o((0, e.useState)("--"), 2),
            u = l[0],
            c = l[1];
          return (
            (0, e.useEffect)(function () {
              a(u), 0 != i && c(Math.round(((i - r) / i) * 100));
            }),
            (0, is.jsx)(is.Fragment, {
              children: (0, is.jsxs)("div", {
                className: "flex flex-col justify-between ",
                children: [
                  (0, is.jsxs)("div", {
                    className:
                      "flex flex-row justify-between gap-10 p-4 mx-auto mt-6 rounded-lg bg-c3 h-fit w-fit",
                    children: [
                      (0, is.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                          (0, is.jsx)("h1", {
                            className: "text-lg text-white opacity-60 font-f1",
                            children: "Speed",
                          }),
                          (0, is.jsx)("h1", {
                            className: "text-lg font-bold text-white font-f1",
                            children: n,
                          }),
                        ],
                      }),
                      (0, is.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                          (0, is.jsx)("h1", {
                            className: "text-lg text-white opacity-60 font-f1",
                            children: "Accuracy",
                          }),
                          (0, is.jsx)("h1", {
                            className: "text-lg font-bold text-white font-f1",
                            children: u + "%",
                          }),
                        ],
                      }),
                      (0, is.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                          (0, is.jsx)("h1", {
                            className: "text-lg text-white opacity-60 font-f1",
                            children: "High Score",
                          }),
                          (0, is.jsx)("h1", {
                            className: "text-lg font-bold text-white font-fq",
                            children: localStorage.getItem("hScore"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, is.jsxs)("div", {
                    onClick: function () {
                      document
                        .getElementById("pacerMenu")
                        .classList.remove("hidden");
                    },
                    className:
                      "relative flex flex-row items-center gap-2 mx-auto mt-3 cursor-pointer w-fit text-c8 fill-c8 hover:text-white ",
                    children: [
                      (0, is.jsx)(os, { className: "w-8 h-8" }),
                      (0, is.jsx)("h1", {
                        className: "text-xl font-f1",
                        children:
                          "pacerOff" == localStorage.getItem("pacerType")
                            ? "Pacer off"
                            : "Pacer : " + s + " wpm",
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        ls = function (e) {
          var t = e.typingWords;
          return void 0 !== t
            ? (0, is.jsx)("div", {
                id: "textContainer",
                className:
                  "relative flex-col items-center w-fit p-0 overflow-hidden h-fit max-h-[120px]  my-6  mx-auto ",
                children: (0, is.jsx)("div", {
                  id: "textArea",
                  className:
                    "relative flex flex-col justify-start mx-auto h-fit pb-[40px]",
                  children: Object.values(t).map(function (e, t) {
                    return (0, is.jsxs)(
                      "div",
                      {
                        id: "Line" + t,
                        className:
                          "flex flex-row w-fit h-[40px] relative text-focus-in",
                        children: [
                          (0, is.jsx)("div", {
                            id: "Pacer" + t,
                            className:
                              "w-[4px] h-[90%] bg-c8 absolute slide pacerLine z-[80] hidden ",
                          }),
                          (0, is.jsx)("div", {
                            id: "Selector" + t,
                            className:
                              "w-[4px] h-[90%] bg-c1 absolute  smoothSlow z-[80] hidden selector ",
                          }),
                          e.map(function (n, r) {
                            for (var i = [], a = 0; a < n.length; a++)
                              i.push(n[a]);
                            return (
                              r <= e.length - 1 && i.push("&nbsp;"),
                              (0, is.jsx)(
                                "div",
                                {
                                  className:
                                    "flex flex-row w-fit fade-in h-fit ",
                                  children: i.map(function (e, i) {
                                    return "&nbsp;" === e
                                      ? (0, is.jsx)(
                                          "div",
                                          {
                                            id:
                                              "line" +
                                              t +
                                              "word" +
                                              r +
                                              "letter" +
                                              i.toString(),
                                            className:
                                              "mx-[1px] text-2xl  font-bold box-border border-l-[3px] border-c2 word  text-white  w-[20px]",
                                            children: "\xa0\xa0\xa0",
                                          },
                                          i + n
                                        )
                                      : (0, is.jsx)(
                                          "div",
                                          {
                                            id:
                                              "line" +
                                              t +
                                              "word" +
                                              r +
                                              "letter" +
                                              i.toString(),
                                            className:
                                              "mx-[1px] text-2xl font-f1 box-border border-[3px] border-c2 word  text-c8  ",
                                            children: e,
                                          },
                                          i + n
                                        );
                                  }),
                                },
                                r + n
                              )
                            );
                          }),
                        ],
                      },
                      t
                    );
                  }),
                }),
              })
            : (0, is.jsx)(is.Fragment, {});
        },
        us = JSON.parse(
          '["a","able","about","absolute","accept","account","achieve","across","act","active","actual","add","address","admit","advertise","affect","afford","after","afternoon","again","against","age","agent","ago","agree","air","all","allow","almost","along","already","alright","also","although","always","america","amount","and","another","answer","any","apart","apparent","appear","apply","appoint","approach","appropriate","area","argue","arm","around","arrange","art","as","ask","associate","assume","at","attend","authority","available","aware","away","awful","baby","back","bad","bag","balance","ball","bank","bar","base","basis","be","bear","beat","beauty","because","become","bed","before","begin","behind","believe","benefit","best","bet","between","big","bill","birth","bit","black","bloke","blood","blow","blue","board","boat","body","book","both","bother","bottle","bottom","box","boy","break","brief","brilliant","bring","britain","brother","budget","build","bus","business","busy","but","buy","by","cake","call","can","car","card","care","carry","case","cat","catch","cause","cent","centre","certain","chair","chairman","chance","change","chap","character","charge","cheap","check","child","choice","choose","Christ","Christmas","church","city","claim","class","clean","clear","client","clock","close","closes","clothe","club","coffee","cold","colleague","collect","college","colour","come","comment","commit","committee","common","community","company","compare","complete","compute","concern","condition","confer","consider","consult","contact","continue","contract","control","converse","cook","copy","corner","correct","cost","could","council","count","country","county","couple","course","court","cover","create","cross","cup","current","cut","dad","danger","date","day","dead","deal","dear","debate","decide","decision","deep","definite","degree","department","depend","describe","design","detail","develop","die","difference","difficult","dinner","direct","discuss","district","divide","do","doctor","document","dog","door","double","doubt","down","draw","dress","drink","drive","drop","dry","due","during","each","early","east","easy","eat","economy","educate","effect","egg","eight","either","elect","electric","eleven","else","employ","encourage","end","engine","english","enjoy","enough","enter","environment","equal","especial","europe","even","evening","ever","every","evidence","exact","example","except","excuse","exercise","exist","expect","expense","experience","explain","express","extra","eye","face","fact","fair","fall","family","far","farm","fast","father","favour","feed","feel","few","field","fight","figure","file","fill","film","final","finance","find","fine","finish","fire","first","fish","fit","five","flat","floor","fly","follow","food","foot","for","force","forget","form","fortune","forward","four","france","free","friday","friend","from","front","full","fun","function","fund","further","future","game","garden","gas","general","germany","get","girl","give","glass","go","god","good","goodbye","govern","grand","grant","great","green","ground","group","grow","guess","guy","hair","half","hall","hand","hang","happen","happy","hard","hate","have","he","head","health","hear","heart","heat","heavy","hell","help","here","high","history","hit","hold","holiday","home","honest","hope","horse","hospital","hot","hour","house","how","however","hullo","hundred","husband","idea","identify","if","imagine","important","improve","in","include","income","increase","indeed","individual","industry","inform","inside","instead","insure","interest","into","introduce","invest","involve","issue","it","item","jesus","job","join","judge","jump","just","keep","key","kid","kill","kind","king","kitchen","knock","know","labour","lad","lady","land","language","large","last","late","laugh","law","lay","lead","learn","leave","left","leg","less","let","letter","level","lie","life","light","like","likely","limit","line","link","list","listen","little","live","load","local","lock","london","long","look","lord","lose","lot","love","low","luck","lunch","machine","main","major","make","man","manage","many","mark","market","marry","match","matter","may","maybe","mean","meaning","measure","meet","member","mention","middle","might","mile","milk","million","mind","minister","minus","minute","miss","mister","moment","monday","money","month","more","morning","most","mother","motion","move","mrs","much","music","must","name","nation","nature","near","necessary","need","never","new","news","next","nice","night","nine","no","non","none","normal","north","not","note","notice","now","number","obvious","occasion","odd","of","off","offer","office","often","okay","old","on","once","one","only","open","operate","opportunity","oppose","or","order","organize","original","other","otherwise","ought","out","over","own","pack","page","paint","pair","paper","paragraph","pardon","parent","park","part","particular","party","pass","past","pay","pence","pension","people","per","percent","perfect","perhaps","period","person","photograph","pick","picture","piece","place","plan","play","please","plus","point","police","policy","politic","poor","position","positive","possible","post","pound","power","practise","prepare","present","press","pressure","presume","pretty","previous","price","print","private","probable","problem","proceed","process","produce","product","programme","project","proper","propose","protect","provide","public","pull","purpose","push","put","quality","quarter","question","quick","quid","quiet","quite","radio","rail","raise","range","rate","rather","read","ready","real","realise","really","reason","receive","recent","reckon","recognize","recommend","record","red","reduce","refer","regard","region","relation","remember","report","represent","require","research","resource","respect","responsible","rest","result","return","rid","right","ring","rise","road","role","roll","room","round","rule","run","safe","sale","same","saturday","save","say","scheme","school","science","score","scotland","seat","second","secretary","section","secure","see","seem","self","sell","send","sense","separate","serious","serve","service","set","settle","seven","sex","shall","share","she","sheet","shoe","shoot","shop","short","should","show","shut","sick","side","sign","similar","simple","since","sing","single","sir","sister","sit","site","situate","six","size","sleep","slight","slow","small","smoke","so","social","society","some","son","soon","sorry","sort","sound","south","space","speak","special","specific","speed","spell","spend","square","staff","stage","stairs","stand","standard","start","state","station","stay","step","stick","still","stop","story","straight","strategy","street","strike","strong","structure","student","study","stuff","stupid","subject","succeed","such","sudden","suggest","suit","summer","sun","sunday","supply","support","suppose","sure","surprise","switch","system","table","take","talk","tape","tax","tea","teach","team","telephone","television","tell","ten","tend","term","terrible","test","than","thank","the","then","there","therefore","they","thing","think","thirteen","thirty","this","thou","though","thousand","three","through","throw","thursday","tie","time","to","today","together","tomorrow","tonight","too","top","total","touch","toward","town","trade","traffic","train","transport","travel","treat","tree","trouble","true","trust","try","tuesday","turn","twelve","twenty","two","type","under","understand","union","unit","unite","university","unless","until","up","upon","use","usual","value","various","very","video","view","village","visit","vote","wage","wait","walk","wall","want","war","warm","wash","waste","watch","water","way","we","wear","wednesday","wee","week","weigh","welcome","well","west","what","when","where","whether","which","while","white","who","whole","why","wide","wife","will","win","wind","window","wish","with","within","without","woman","wonder","wood","word","work","world","worry","worse","worth","would","write","wrong","year","yes","yesterday","yet","you","young"]'
        ),
        cs = function (t) {
          var n = t.start,
            r = t.seconds,
            i = t.setSeconds,
            a = t.setSpeed,
            s = t.characters,
            l = t.correctCharacters,
            u = t.setRawSpeed,
            c = o((0, e.useState)(!1), 2),
            f = c[0],
            h = c[1],
            d = o((0, e.useState)(0), 2),
            p = d[0],
            v = d[1],
            g = o((0, e.useState)(0), 2),
            m = g[0],
            y = g[1];
          return (
            (0, e.useEffect)(
              function () {
                !(function () {
                  var e = Math.round(l / 5),
                    t = Math.round(s / 5);
                  0 != r &&
                    0 != s &&
                    (v(Math.round((60 / r) * e)), y(Math.round((60 / r) * t)));
                })(),
                  a(0 == p ? "--" : p),
                  u(0 == m ? "--" : m),
                  h(!!n);
                var e = null;
                return (
                  f
                    ? (e = setInterval(function () {
                        i(function (e) {
                          return e + 1;
                        }),
                          1 == r &&
                            (localStorage.setItem(
                              "speedMap",
                              JSON.stringify([])
                            ),
                            localStorage.setItem(
                              "speedMapRaw",
                              JSON.stringify([])
                            ));
                        var e = JSON.parse(localStorage.getItem("speedMap"));
                        e.push(l),
                          localStorage.setItem("speedMap", JSON.stringify(e));
                        var t = JSON.parse(localStorage.getItem("speedMapRaw"));
                        t.push(s),
                          localStorage.setItem(
                            "speedMapRaw",
                            JSON.stringify(t)
                          );
                      }, 1e3))
                    : f || 0 === r || clearInterval(e),
                  function () {
                    return clearInterval(e);
                  }
                );
              },
              [f, r, n, p]
            ),
            (0, is.jsx)(is.Fragment, {})
          );
        },
        fs = function () {
          var t = function (e) {
              var t = String.fromCharCode(e.keyCode);
              "CapsLock" == e.key &&
                document.getElementById("caps").classList.add("hit"),
                " " === t && (t = "space");
              var n = document.getElementById(t);
              n &&
                (n.classList.add("hit"),
                n.addEventListener("animationend", function () {
                  n.classList.remove("hit");
                }));
            },
            n = function (e) {
              "CapsLock" == e.key &&
                document.getElementById("caps").classList.remove("hit");
            };
          return (
            (0, e.useEffect)(
              function () {
                "keyboardAnimationTrue" ==
                localStorage.getItem("keyboardAnimation")
                  ? (document.addEventListener("keydown", t),
                    document.addEventListener("keyup", n))
                  : (document.removeEventListener("keydown", t),
                    document.removeEventListener("keyup", n));
              },
              [localStorage.getItem("keyboardAnimation")]
            ),
            (0, is.jsxs)("div", {
              className: "mx-auto keyboard w-fit",
              children: [
                (0, is.jsxs)("ul", {
                  className: "row row-0",
                  children: [
                    (0, is.jsx)("li", { id: "esc", children: "ESC" }),
                    (0, is.jsx)("li", { id: "1", children: "1" }),
                    (0, is.jsx)("li", { id: "2", children: "2" }),
                    (0, is.jsx)("li", { id: "3", children: "3" }),
                    (0, is.jsx)("li", { id: "4", children: "4" }),
                    (0, is.jsx)("li", { id: "5", children: "5" }),
                    (0, is.jsx)("li", { id: "6", children: "6" }),
                    (0, is.jsx)("li", { id: "7", children: "7" }),
                    (0, is.jsx)("li", { id: "8", children: "8" }),
                    (0, is.jsx)("li", { id: "9", children: "9" }),
                    (0, is.jsx)("li", { id: "10", children: "0" }),
                    (0, is.jsx)("li", { children: "-" }),
                    (0, is.jsx)("li", { children: "+" }),
                    (0, is.jsx)("li", { id: "back", children: "BACK" }),
                  ],
                }),
                (0, is.jsxs)("ul", {
                  className: "row row-1",
                  children: [
                    (0, is.jsx)("li", { id: "tab", children: "TAB" }),
                    (0, is.jsx)("li", { id: "Q", children: "Q" }),
                    (0, is.jsx)("li", { id: "W", children: "W" }),
                    (0, is.jsx)("li", { id: "E", children: "E" }),
                    (0, is.jsx)("li", { id: "R", children: "R" }),
                    (0, is.jsx)("li", { id: "T", children: "T" }),
                    (0, is.jsx)("li", { id: "Y", children: "Y" }),
                    (0, is.jsx)("li", { id: "U", children: "U" }),
                    (0, is.jsx)("li", { id: "I", children: "I" }),
                    (0, is.jsx)("li", { id: "O", children: "O" }),
                    (0, is.jsx)("li", { id: "P", children: "P" }),
                    (0, is.jsx)("li", { children: "[" }),
                    (0, is.jsx)("li", { children: "]" }),
                    (0, is.jsx)("li", { children: "\\" }),
                  ],
                }),
                (0, is.jsxs)("ul", {
                  className: "row row-2",
                  children: [
                    (0, is.jsx)("li", { id: "caps", children: "CAPS" }),
                    (0, is.jsx)("li", { id: "A", children: "A" }),
                    (0, is.jsx)("li", { id: "S", children: "S" }),
                    (0, is.jsx)("li", { id: "D", children: "D" }),
                    (0, is.jsx)("li", { id: "F", children: "F" }),
                    (0, is.jsx)("li", { id: "G", children: "G" }),
                    (0, is.jsx)("li", { id: "H", children: "H" }),
                    (0, is.jsx)("li", { id: "J", children: "J" }),
                    (0, is.jsx)("li", { id: "K", children: "K" }),
                    (0, is.jsx)("li", { id: "L", children: "L" }),
                    (0, is.jsx)("li", { children: ":" }),
                    (0, is.jsx)("li", { children: "''" }),
                    (0, is.jsx)("li", { id: "enter", children: "ENTER" }),
                  ],
                }),
                (0, is.jsxs)("ul", {
                  className: "row row-3",
                  children: [
                    (0, is.jsx)("li", { id: "left-shift", children: "SHIFT" }),
                    (0, is.jsx)("li", { id: "Z", children: "Z" }),
                    (0, is.jsx)("li", { id: "X", children: "X" }),
                    (0, is.jsx)("li", { id: "C", children: "C" }),
                    (0, is.jsx)("li", { id: "V", children: "V" }),
                    (0, is.jsx)("li", { id: "B", children: "B" }),
                    (0, is.jsx)("li", { id: "N", children: "N" }),
                    (0, is.jsx)("li", { id: "M", children: "M" }),
                    (0, is.jsx)("li", { children: "," }),
                    (0, is.jsx)("li", { children: "." }),
                    (0, is.jsx)("li", { children: ";" }),
                    (0, is.jsx)("li", { id: "right-shift", children: "SHIFT" }),
                  ],
                }),
                (0, is.jsx)("ul", {
                  className: "row row-3",
                  children: (0, is.jsx)("li", {
                    className: "w-[60%] mx-auto",
                    id: "space",
                    children: " ",
                  }),
                }),
              ],
            })
          );
        };
      var hs =
        n.p + "static/media/bottomRight2.347357094ca368a4e634586e3fa2485f.svg";
      var ds =
        n.p + "static/media/bottomLeft.bc18c38a86920ba56829092c93198e70.svg";
      var ps = n.p + "static/media/score.8e8bb20945686e8f14eec9046ce457ed.svg",
        vs = function (t) {
          var n = t.score,
            r = o((0, e.useState)(0), 2),
            i = r[0],
            a = r[1];
          function s(e, t, n) {
            e <= t &&
              ((n.innerHTML = e),
              setTimeout(function () {
                s(e + 1, t, n);
              }, 20));
          }
          return (
            (0, e.useEffect)(function () {
              n != i &&
                (n > i
                  ? s(i, n, document.getElementById("scoreElement"))
                  : (document.getElementById("scoreElement").innerHTML = n)),
                a(n);
            }),
            (0, is.jsxs)("div", {
              className:
                "relative z-50 flex flex-row w-[400px]  -translate-x-1/2  h-[100px]  left-1/2  mb-10",
              children: [
                (0, is.jsx)("img", {
                  src: ps,
                  className: "absolute top-0 left-0 w-full h-full",
                  alt: "",
                }),
                (0, is.jsxs)("div", {
                  className:
                    "relative flex flex-row items-center -translate-x-1/2 top-4 w-fit left-1/2 h-fit",
                  children: [
                    (0, is.jsx)("div", {
                      className:
                        "w-10 h-10 mr-6 rotate-45 bg-yellow-400 rounded-lg shadow-md",
                    }),
                    (0, is.jsx)("h1", {
                      id: "scoreElement",
                      className: "text-5xl font-bold text-white font-f1 ",
                      children: "--",
                    }),
                  ],
                }),
              ],
            })
          );
        },
        gs = function (t) {
          var n = t.pacerLine,
            r = t.setPacerLine,
            i = t.setStartPacer,
            a = t.typingWords,
            o = t.pacerSpeed,
            s = t.startPacer,
            l = function () {
              document.getElementById("Pacer" + n).classList.add("hidden"),
                n + 1 > Object.keys(a).length - 1 ? (i(!1), r(0)) : r(n + 1);
            };
          return (
            (0, e.useEffect)(
              function () {
                if (s && void 0 != o) {
                  var e = document.getElementById("Pacer" + n);
                  return (
                    (e.style.animationDuration =
                      (function () {
                        for (var e = 0, t = 0; t < a[n].length; t++)
                          e = e + a[n][t].length + 1;
                        return e / 5 / (o / 60);
                      })() + "s"),
                    e.classList.remove("hidden"),
                    e.addEventListener("animationend", l),
                    function () {
                      return e.removeEventListener("animationend", l);
                    }
                  );
                }
              },
              [s, n]
            ),
            (0, is.jsx)(is.Fragment, {})
          );
        };
      function ms(e) {
        return h({
          tag: "svg",
          attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M18.2 13.3l-6.2-6.3-6.2 6.3c-.2.2-.3.5-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7z",
              },
            },
          ],
        })(e);
      }
      var ys = function (t) {
          var n = t.speedResult,
            r = t.setPacerSpeed,
            i = t.restartTyping,
            a = o(
              (0, e.useState)(
                parseInt(localStorage.getItem("customPacerSpeed"))
              ),
              2
            ),
            s = a[0],
            l = a[1];
          (0, e.useEffect)(function () {
            for (
              var e = document.getElementsByClassName("pacerMenuItem"), t = 0;
              t < e.length;
              t++
            )
              e[t].id == localStorage.getItem("pacerType") &&
                e[t].classList.add("pacerSelected");
          });
          var u = function (e) {
              l(s + e),
                r(s + e),
                localStorage.setItem("customPacerSpeed", s + e);
            },
            c = function (e) {
              for (
                var t = document.getElementsByClassName("pacerMenuItem"), n = 0;
                n < t.length;
                n++
              )
                t[n].classList.remove("pacerSelected");
              document.getElementById(e).classList.add("pacerSelected"),
                localStorage.setItem("pacerType", e);
            };
          return (0, is.jsxs)("div", {
            id: "pacerMenu",
            className: "absolute top-0 w-screen h-screen z-[110] hidden",
            children: [
              (0, is.jsx)("button", {
                className:
                  "absolute w-screen h-screen bg-black opacity-[60%] z-[100] ",
                onClick: function () {
                  document.getElementById("pacerMenu").classList.add("hidden"),
                    i();
                },
              }),
              (0, is.jsxs)("div", {
                className:
                  "absolute top-1/2 py-4 flex flex-col items-start gap-1 z-[110]  w-[500px] left-1/2  -translate-y-1/2 -translate-x-1/2 rounded-lg bg-c2 overflow-hidden ",
                children: [
                  (0, is.jsx)("button", {
                    onClick: function () {
                      c("pacerOff"), r("--");
                    },
                    id: "pacerOff",
                    className:
                      "w-full p-2 pl-10 text-xl font-bold text-left text-c8 hover:text-c1 font-f1 pacerMenuItem",
                    children: "Off",
                  }),
                  (0, is.jsxs)("button", {
                    onClick: function () {
                      c("pacerCustom"), r(s);
                    },
                    id: "pacerCustom",
                    className:
                      "flex flex-row justify-between w-full p-2 pl-10 text-xl font-bold text-left text-c8 hover:text-c1 font-f1 pacerMenuItem",
                    children: [
                      "Custom Speed",
                      (0, is.jsxs)("div", {
                        className:
                          "flex flex-row items-center gap-2 mr-10 w-fit",
                        children: [
                          (0, is.jsx)(ms, {
                            onClick: function () {
                              u(-5);
                            },
                            className: "w-6 h-6 rotate-180 hover:fill-white ",
                          }),
                          (0, is.jsx)("h1", {
                            className: "text-xl  min-w-[40px] text-center",
                            children: s,
                          }),
                          (0, is.jsx)(ms, {
                            onClick: function () {
                              u(5);
                            },
                            className: "w-6 h-6 hover:fill-white ",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, is.jsx)("button", {
                    onClick: function () {
                      c("pacerPrev"), r(n);
                    },
                    id: "pacerPrev",
                    className:
                      "w-full p-2 pl-10 text-xl font-bold text-left text-c8 hover:text-c1 font-f1 pacerMenuItem",
                    children: "Previous Speed",
                  }),
                  (0, is.jsx)("button", {
                    onClick: function () {
                      c("pacerHigh"), r(localStorage.getItem("hSpeed"));
                    },
                    id: "pacerHigh",
                    className:
                      "w-full p-2 pl-10 text-xl font-bold text-left text-c8 hover:text-c1 font-f1 pacerMenuItem",
                    children: "High Speed",
                  }),
                ],
              }),
            ],
          });
        },
        bs = n.p + "static/media/wizard.a16e044434c84b3bef2c.png";
      function xs(e) {
        return h({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm13 .25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25zM2.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 8.75v-.5A.25.25 0 0 0 2.75 8h-.5zM4 8.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 5 8.75v-.5A.25.25 0 0 0 4.75 8h-.5a.25.25 0 0 0-.25.25zM6.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 7 8.75v-.5A.25.25 0 0 0 6.75 8h-.5zM8 8.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 9 8.75v-.5A.25.25 0 0 0 8.75 8h-.5a.25.25 0 0 0-.25.25zM13.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zm-3-2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-1.5zm.75 2.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25zM11.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zM9 6.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5A.25.25 0 0 0 9.75 6h-.5a.25.25 0 0 0-.25.25zM7.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 8 6.75v-.5A.25.25 0 0 0 7.75 6h-.5zM5 6.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 6 6.75v-.5A.25.25 0 0 0 5.75 6h-.5a.25.25 0 0 0-.25.25zM2.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5A.25.25 0 0 0 4 6.75v-.5A.25.25 0 0 0 3.75 6h-1.5zM2 10.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25zM4.25 10a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-5.5z",
              },
            },
          ],
        })(e);
      }
      function ks(e) {
        return h({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
              },
            },
          ],
        })(e);
      }
      var ws = function (e) {
          var t = e.restartTyping;
          return (0, is.jsxs)("div", {
            id: "menu",
            className: "relative flex flex-row items-center gap-10 w-fit ",
            children: [
              (0, is.jsx)("button", {
                onClick: function () {
                  document
                    .getElementById("settings")
                    .classList.remove("slide-in-bottom"),
                    document
                      .getElementById("settings")
                      .classList.add("slide-out-bottom"),
                    document
                      .getElementById("typingScreen")
                      .classList.remove("slide-out-top"),
                    document
                      .getElementById("typingScreen")
                      .classList.add("slide-in-top");
                },
                children: (0, is.jsx)(xs, {
                  className: "w-8 h-8 fill-c8 hover:fill-white",
                }),
              }),
              (0, is.jsx)("button", {
                onClick: function () {
                  document
                    .getElementById("settings")
                    .classList.remove("hidden"),
                    document
                      .getElementById("settings")
                      .classList.add("slide-in-bottom"),
                    document
                      .getElementById("typingScreen")
                      .classList.add("slide-out-top"),
                    document
                      .getElementById("typingScreen")
                      .classList.remove("slide-in-top"),
                    t();
                },
                children: (0, is.jsx)(p, {
                  className: "w-8 h-8 fill-c8 hover:fill-white",
                }),
              }),
            ],
          });
        },
        _s = function (e) {
          var t = e.restartTyping;
          return (0, is.jsxs)("div", {
            className: "flex flex-row justify-between h-20 p-5 bg-c3",
            children: [
              (0, is.jsxs)("button", {
                onClick: function () {
                  document
                    .getElementById("settings")
                    .classList.remove("slide-in-bottom"),
                    document
                      .getElementById("settings")
                      .classList.add("slide-out-bottom"),
                    document
                      .getElementById("typingScreen")
                      .classList.remove("slide-out-top"),
                    document
                      .getElementById("typingScreen")
                      .classList.add("slide-in-top");
                },
                className: "flex flex-row items-center gap-3 w-fit",
                children: [
                  (0, is.jsx)("img", { src: bs, className: "w-12 h-12" }),
                  (0, is.jsx)("h1", {
                    className: "text-2xl font-bold text-c1 font-f1",
                    children: "Typing Wizard",
                  }),
                ],
              }),
              (0, is.jsx)(ws, { restartTyping: t }),
            ],
          });
        };
      function Ss(e) {
        return h({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z",
              },
            },
          ],
        })(e);
      }
      function Ms(e) {
        return h({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",
              },
            },
          ],
        })(e);
      }
      var Es = function () {
          return (0, is.jsxs)("div", {
            className:
              "absolute bottom-0 flex flex-row items-center h-10 gap-6 -translate-x-1/2 w-fit left-1/2 ",
            children: [
              (0, is.jsxs)("a", {
                href: "https://github.com/holtonpk/typingGame",
                target: "_blank",
                className:
                  "flex flex-row items-center gap-2 text-[12px] font-f1 text-c8 fill-c8 hover:fill-white hover:text-white",
                children: [
                  (0, is.jsx)(Ss, { className: "w-4 h-4 " }),
                  "GitHub",
                ],
              }),
              (0, is.jsxs)("div", {
                className:
                  "flex flex-row items-center gap-2 text-[12px] font-f1 text-c8 fill-c8 hover:fill-white hover:text-white",
                children: [
                  (0, is.jsx)(v, { className: "w-4 h-4 " }),
                  "Contact",
                ],
              }),
              (0, is.jsxs)("div", {
                className:
                  "flex flex-row items-center gap-2 text-[12px] font-f1 text-c8 fill-c8 hover:fill-white hover:text-white",
                children: [
                  (0, is.jsx)(Ms, { className: "w-4 h-4" }),
                  "Privacy",
                ],
              }),
              (0, is.jsxs)("div", {
                className:
                  "flex flex-row items-center gap-2 text-[12px] font-f1 text-c8 fill-c8 hover:fill-white hover:text-white",
                children: [
                  (0, is.jsx)(ks, { className: "w-4 h-4" }),
                  "Twitter",
                ],
              }),
            ],
          });
        },
        Ps = function (e) {
          var t = e.restartTyping,
            n = e.title,
            r = e.description,
            i = e.group,
            a = e.options;
          return (0, is.jsxs)("div", {
            className:
              "grid items-center justify-between w-full grid-cols-2 z-60 ",
            children: [
              (0, is.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, is.jsx)("h1", {
                    className: "z-40 text-2xl text-white w-fit font-f1",
                    children: n,
                  }),
                  (0, is.jsx)("h1", {
                    className:
                      "z-40 mb-2 text-lg text-white opacity-50 w-fit font-f1",
                    children: r,
                  }),
                ],
              }),
              (0, is.jsx)("div", {
                className: "flex flex-row gap-10 w-fit ",
                children: a.map(function (e) {
                  return (0, is.jsx)(
                    "button",
                    {
                      onClick: function () {
                        localStorage.setItem(i, e.id),
                          (function (e, t) {
                            for (
                              var n = document.getElementsByClassName(e), r = 0;
                              r < n.length;
                              r++
                            )
                              n[r].classList.remove("buttonSelected");
                            document
                              .getElementById(t)
                              .classList.add("buttonSelected");
                          })(i, e.id),
                          t();
                      },
                      id: e.id,
                      className:
                        "w-40 p-3 text-xl font-bold text-white rounded-lg font-f1 p-w bg-c3 hover:bg-c1  " +
                        i,
                      children: e.text,
                    },
                    e.id
                  );
                }),
              }),
            ],
          });
        },
        Cs = function (t) {
          var n = t.CreateNewWordSet,
            r = t.restartTyping,
            i = o((0, e.useState)(localStorage.getItem("maxCharacters")), 2),
            a = i[0],
            s = i[1],
            l = o((0, e.useState)(!1), 2),
            u = l[0],
            c = l[1];
          return (
            (0, e.useEffect)(function () {
              u ||
                ((document.getElementById("totalCharacterSlider").value =
                  localStorage.getItem("maxCharacters")),
                document
                  .getElementById(localStorage.getItem("cursorType"))
                  .classList.add("buttonSelected"),
                document
                  .getElementById(localStorage.getItem("showKeyboard"))
                  .classList.add("buttonSelected"),
                document
                  .getElementById(localStorage.getItem("showResults"))
                  .classList.add("buttonSelected"),
                document
                  .getElementById(localStorage.getItem("keyboardAnimation"))
                  .classList.add("buttonSelected"),
                c(!0));
              var e = document.getElementById("totalCharacterSlider");
              (document.getElementById("sliderOutput").innerHTML = e.value),
                (e.oninput = function () {
                  s(this.value);
                });
            }),
            (0, is.jsxs)("div", {
              id: "settings",
              className:
                "absolute left-1/2 hidden -translate-x-1/2 min-h-screen w-[50%]  overflow-hidden bg-c2  z-[80] mx-auto slide-in-bottom  ",
              children: [
                (0, is.jsx)("div", {
                  id: "scoreNotification",
                  className:
                    " hidden absolute z-[80] bg-c7 shadow-xl top-[98%] left-1/2  -translate-x-1/2 -translate-y-full h-fit p-3 w-[30%] text-white rounded-xl text-center text-2xl slide-in-bottom ",
                  children: "high score has been reset",
                }),
                (0, is.jsx)("button", {
                  onClick: function () {
                    localStorage.setItem("maxCharacters", a),
                      r(),
                      n(),
                      document
                        .getElementById("settings")
                        .classList.remove("slide-in-bottom"),
                      document
                        .getElementById("settings")
                        .classList.add("slide-out-bottom"),
                      document
                        .getElementById("typingScreen")
                        .classList.remove("slide-out-top"),
                      document
                        .getElementById("typingScreen")
                        .classList.add("slide-in-top");
                  },
                  to: "/",
                  className: "absolute z-50 top-10 left-20",
                }),
                (0, is.jsx)("div", {
                  className: "relative ",
                  children: (0, is.jsxs)("div", {
                    className: "z-40 flex flex-col h-full px-10 mx-auto ",
                    children: [
                      (0, is.jsxs)("div", {
                        className: "z-40 flex flex-col w-full gap-10 mt-10",
                        children: [
                          (0, is.jsx)(Ps, {
                            restartTyping: r,
                            title: "Cursor",
                            description: "Select the cursor you want",
                            group: "cursorType",
                            options: [
                              { id: "horizontalSelector", text: "Horizontal" },
                              { id: "verticalSelector", text: "Vertical" },
                            ],
                          }),
                          (0, is.jsx)(Ps, {
                            restartTyping: r,
                            title: "Keyboard",
                            description: "Show Helper Keyboard",
                            group: "showKeyboard",
                            options: [
                              { id: "showKeyboardTrue", text: "Show" },
                              { id: "showKeyboardFalse", text: "Hide" },
                            ],
                          }),
                          (0, is.jsx)(Ps, {
                            restartTyping: r,
                            title: "Show Results",
                            description: "Show Helper Keyboard",
                            group: "showResults",
                            options: [
                              { id: "showResultsTrue", text: "On" },
                              { id: "showResultsFalse", text: "Off" },
                            ],
                          }),
                          (0, is.jsx)(Ps, {
                            restartTyping: r,
                            title: "Keyboard Animation",
                            description: "Show Helper Keyboard",
                            group: "keyboardAnimation",
                            options: [
                              { id: "keyboardAnimationTrue", text: "On" },
                              { id: "keyboardAnimationFalse", text: "Off" },
                            ],
                          }),
                        ],
                      }),
                      (0, is.jsxs)("div", {
                        className:
                          "sliderContainer z-[90] relative mt-8 float-left  grid grid-cols-2 items-center",
                        children: [
                          (0, is.jsxs)("h2", {
                            className: "text-2xl text-white ",
                            children: [
                              "Total Characters:",
                              (0, is.jsx)("span", {
                                className: "ml-2 font-bold text-c1",
                                id: "sliderOutput",
                              }),
                            ],
                          }),
                          (0, is.jsx)("input", {
                            type: "range",
                            min: "5",
                            max: "500",
                            className: "slider",
                            id: "totalCharacterSlider",
                            step: "5",
                          }),
                        ],
                      }),
                      (0, is.jsxs)("div", {
                        className: "z-40 flex flex-row gap-4 mt-16",
                        children: [
                          (0, is.jsx)("button", {
                            onClick: function () {
                              localStorage.setItem(
                                "cursorType",
                                "verticalSelector"
                              ),
                                localStorage.setItem(
                                  "showKeyboard",
                                  "showKeyboardTrue"
                                ),
                                localStorage.setItem(
                                  "showResults",
                                  "showResultsTrue"
                                ),
                                localStorage.setItem(
                                  "keyboardAnimation",
                                  "keyboardAnimationTrue"
                                ),
                                s(100);
                              for (
                                var e =
                                    document.getElementsByClassName(
                                      "settingButton"
                                    ),
                                  t = 1;
                                t < e.length;
                                t++
                              )
                                e[t].classList.remove("buttonSelected");
                              document
                                .getElementById(
                                  localStorage.getItem("cursorType")
                                )
                                .classList.add("buttonSelected"),
                                document
                                  .getElementById(
                                    localStorage.getItem("showKeyboard")
                                  )
                                  .classList.add("buttonSelected"),
                                document
                                  .getElementById(
                                    localStorage.getItem("showResults")
                                  )
                                  .classList.add("buttonSelected"),
                                document
                                  .getElementById(
                                    localStorage.getItem("keyboardAnimation")
                                  )
                                  .classList.add("buttonSelected"),
                                localStorage.setItem("maxCharacters", 100),
                                c(!1),
                                r(),
                                n();
                            },
                            className:
                              "p-3 text-xl font-bold text-white bg-c5 font-f1 rounded-xl hover:opacity-50",
                            children: "Reset to Default",
                          }),
                          (0, is.jsx)("button", {
                            onClick: function () {
                              localStorage.setItem("hScore", 0),
                                document
                                  .getElementById("scoreNotification")
                                  .classList.remove("hidden"),
                                setTimeout(function () {
                                  document
                                    .getElementById("scoreNotification")
                                    .classList.add("hidden");
                                }, 3e3);
                            },
                            className:
                              "p-3 text-xl font-bold text-white bg-c6 font-f1 rounded-xl hover:opacity-50",
                            children: "Reset High Score",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
      var Os,
        Ts = function () {
          var t = o((0, e.useState)(0), 2),
            n = t[0],
            r = t[1],
            i = o((0, e.useState)(0), 2),
            a = i[0],
            s = i[1],
            l = o((0, e.useState)(0), 2),
            u = l[0],
            c = l[1],
            f = o((0, e.useState)(0), 2),
            h = f[0],
            d = f[1],
            p = o((0, e.useState)(0), 2),
            v = p[0],
            g = p[1],
            m = o((0, e.useState)(0), 2),
            y = m[0],
            b = m[1],
            x = o((0, e.useState)(0), 2),
            k = x[0],
            w = x[1],
            _ = o((0, e.useState)(0), 2),
            S = _[0],
            M = _[1],
            E = o((0, e.useState)(0), 2),
            P = E[0],
            C = E[1],
            O = o((0, e.useState)(0), 2),
            T = O[0],
            L = O[1],
            I = o((0, e.useState)(!1), 2),
            D = I[0],
            N = I[1],
            j = o((0, e.useState)("--"), 2),
            z = j[0],
            R = j[1],
            A = o((0, e.useState)("--"), 2),
            F = A[0],
            B = A[1],
            V = o((0, e.useState)("--"), 2),
            W = V[0],
            H = V[1],
            U = o((0, e.useState)(!1), 2),
            $ = U[0],
            Y = U[1],
            Q = o((0, e.useState)("--"), 2),
            q = Q[0],
            K = Q[1],
            X = o((0, e.useState)("--"), 2),
            G = X[0],
            J = X[1],
            Z = o((0, e.useState)(void 0), 2),
            ee = Z[0],
            te = Z[1],
            ne = o((0, e.useState)(void 0), 2),
            re = ne[0],
            ie = ne[1],
            ae = o((0, e.useState)(100), 2),
            oe = ae[0],
            se = (ae[1], o((0, e.useState)(6), 2)),
            le = se[0],
            ue = (se[1], o((0, e.useState)(38), 2)),
            ce = ue[0],
            fe = (ue[1], o((0, e.useState)(void 0), 2)),
            he = fe[0],
            de = fe[1],
            pe = o((0, e.useState)(!1), 2),
            ve = pe[0],
            ge = pe[1],
            me = o((0, e.useState)(0), 2),
            ye = me[0],
            be = me[1],
            xe = (0, e.useRef)(!1),
            ke = (0, e.useRef)(!1),
            we = {};
          localStorage.length < 11 &&
            (localStorage.setItem("speedMapRaw", "[]"),
            localStorage.setItem("speedMap", "[]"),
            localStorage.setItem("aSpeed", "[]"),
            localStorage.setItem("hSpeed", "0"),
            localStorage.setItem("maxCharacters", 100),
            localStorage.setItem("cursorType", "horizontalSelector"),
            localStorage.setItem("showKeyboard", "showKeyboardTrue"),
            localStorage.setItem("showResults", "showResultsTrue"),
            localStorage.setItem("keyboardAnimation", "keyboardAnimationTrue"),
            localStorage.setItem("customPacerSpeed", "50"),
            localStorage.setItem("pacerType", "pacerOff"));
          var _e = function (e) {
              if (e) {
                var t = 0;
                we[t] = [];
                for (var n = 0, r = 0, i = 0; i < us.length; i++) {
                  var a = Math.floor(Math.random() * us.length);
                  us[a].length <= le &&
                    (n + us[a].length >= ce && ((we[(t += 1)] = []), (n = 0)),
                    we[t].push(us[a]),
                    (r += us[a].length),
                    (n += us[a].length)),
                    r >= localStorage.getItem("maxCharacters") &&
                      (i = us.length);
                }
              }
            },
            Se = function (e) {
              var t = u,
                i = n,
                o = a;
              if ("Backspace" == e.key) {
                if (a - 1 < 0)
                  if (n - 1 < 0) {
                    if (u - 1 < 0) return;
                    c(u - 1),
                      (t = u - 1),
                      r(re[u - 1].length - 1),
                      (i = re[u - 1].length - 1),
                      s(re[u - 1][re[u - 1].length - 1].length),
                      (o = re[u - 1][re[u - 1].length - 1].length),
                      u - 1 != 0 && Oe(-40);
                  } else
                    r(n - 1),
                      (i = n - 1),
                      s(re[u][n - 1].length),
                      (o = re[u][n - 1].length);
                else s(a - 1), (o = a - 1);
                w(k - 1), Ee(t, i, o);
              } else
                a + 1 == re[u][n].length + 1
                  ? n + 1 == re[u].length
                    ? (c(u + 1),
                      (t = u + 1),
                      r(0),
                      (i = 0),
                      s(0),
                      (o = 0),
                      document
                        .getElementById("Selector" + u)
                        .classList.add("hidden"),
                      document
                        .getElementById("Selector" + (u + 1))
                        .classList.remove("hidden"),
                      u + 1 >= 2 && u + 1 < Object.keys(re).length && Oe(40))
                    : (r(n + 1), (i = n + 1), s(0), (o = 0))
                  : (s(a + 1), (o = a + 1)),
                  Me(re[u][n][a], e.key);
              (ke.current = !1), w(k + 1), Pe(t, i, o);
            },
            Me = function (e, t) {
              var r = document.getElementById(
                "line" + u + "word" + n + "letter" + a
              );
              void 0 == e && " " == t
                ? (t = void 0)
                : e == t
                ? (r.classList.add("correct"), d(h + 10), M(S + 1))
                : (r.classList.add("incorrect"), C(P + 1), L(T + 1));
            },
            Ee = function (e, t, n) {
              var r = document.getElementById(
                "line" + e + "word" + t + "letter" + n
              );
              r.classList.remove("correct"), r.classList.remove("incorrect");
            },
            Pe = function (e, t, n) {
              var r = document.getElementById(
                "line" + e + "word" + t + "letter" + n
              ).offsetLeft;
              document.getElementById("Selector" + u).style.left = r + "px";
            };
          (0, e.useEffect)(
            function () {
              if (
                ((function () {
                  var e = new Date(parseInt(localStorage.getItem("timeStamp"))),
                    t =
                      e.getFullYear() +
                      "/" +
                      (e.getMonth() + 1) +
                      "/" +
                      e.getDate(),
                    n = Date.now(),
                    r = new Date(n);
                  r.getFullYear() +
                    "/" +
                    (r.getMonth() + 1) +
                    "/" +
                    r.getDate() !==
                    t && localStorage.setItem("timeStamp", n);
                })(),
                void 0 == he && Ce(),
                0 == u &&
                  0 == a &&
                  0 == n &&
                  void 0 != re &&
                  document
                    .getElementById("Selector" + u)
                    .classList.remove("hidden"),
                xe.current || ((xe.current = !0), _e(!0), ie(we)),
                0 != n ||
                  1 != a ||
                  0 != u ||
                  D ||
                  (N(!0), "--" != he && ge(!0)),
                void 0 != re)
              )
                if (
                  u == Object.keys(re).length - 1 &&
                  n == re[u].length - 1 &&
                  a == re[u][n].length
                ) {
                  N(!1),
                    te(W),
                    K(z),
                    J(F),
                    b(v),
                    h > localStorage.getItem("hScore") &&
                      (localStorage.setItem("hScore", h), Y("score"));
                  var e = JSON.parse(localStorage.getItem("aSpeed"));
                  e.push(z),
                    localStorage.setItem("aSpeed", JSON.stringify(e)),
                    z > localStorage.getItem("hSpeed") &&
                      (localStorage.setItem("hSpeed", z), Y("speed")),
                    "showResultsTrue" == localStorage.getItem("showResults")
                      ? document
                          .getElementById("resultsWindow")
                          .classList.remove("hidden")
                      : (ie([]), Te(), Le());
                } else if (!ke.current && void 0 != re)
                  return (
                    (ke.current = !0),
                    document.addEventListener("keydown", Se),
                    function () {
                      return document.removeEventListener("keydown", Se);
                    }
                  );
            },
            [a, re, xe, u, n, oe, localStorage.getItem("showKeyboard")]
          );
          var Ce = function () {
              var e = localStorage.getItem("pacerType");
              "pacerOff" == e && de("--"),
                "pacerCustom" == e &&
                  de(localStorage.getItem("customPacerSpeed")),
                "pacerPrev" == e && de(q),
                "pacerHigh" == e && de(q);
            },
            Oe = function (e) {
              var t = document.getElementById("textContainer");
              t.scrollTop = t.scrollTop + e;
            },
            Te = function () {
              _e(!0), ie(we);
            },
            Le = function () {
              Ce(),
                ge(!1),
                be(0),
                Pe(0, 0, 0),
                d(0),
                Y(!1),
                w(0),
                M(0),
                C(0),
                L(0),
                g(0),
                N(!1),
                c(0),
                r(0),
                s(0),
                (ke.current = !1),
                (document.getElementById("textContainer").scrollTop = 0);
              for (
                var e = document.getElementsByClassName("word"), t = 0;
                t < e.length;
                t++
              )
                e[t].classList.remove("correct"),
                  e[t].classList.remove("incorrect");
              for (
                var n = document.getElementsByClassName("selector"), i = 0;
                i < n.length;
                i++
              )
                n[i].classList.add("hidden");
              for (
                var a = document.getElementsByClassName("pacerLine"), o = 0;
                o < a.length;
                o++
              )
                a[o].classList.add("hidden");
              for (
                var l = document.getElementsByClassName("pacerTrack"), u = 0;
                u < l.length;
                u++
              )
                l[u].style.width = "100%";
              document.getElementById("Selector0").classList.remove("hidden"),
                (ke.current = !1);
            };
          return (0, is.jsxs)("div", {
            className: "relative min-h-screen overflow-hidden bg-c2 ",
            children: [
              (0, is.jsx)(as, {
                CreateNewWordSet: Te,
                ShowHighScorePopup: $,
                restartTyping: Le,
                speed: q,
                accuracy: ee,
                setTypingWords: ie,
                score: h,
                characters: k,
                rawSpeed: G,
                seconds: y,
              }),
              (0, is.jsx)(_s, { restartTyping: Le }),
              (0, is.jsx)(ys, {
                speedResult: q,
                setPacerSpeed: de,
                restartTyping: Le,
              }),
              (0, is.jsx)(Cs, { CreateNewWordSet: Te, restartTyping: Le }),
              (0, is.jsx)(gs, {
                pacerLine: ye,
                setPacerLine: be,
                setStartPacer: ge,
                typingWords: re,
                pacerSpeed: he,
                startPacer: ve,
              }),
              (0, is.jsx)(cs, {
                start: D,
                seconds: v,
                setSeconds: g,
                setSpeed: R,
                characters: k,
                correctCharacters: S,
                setRawSpeed: B,
              }),
              (0, is.jsxs)("div", {
                id: "typingScreen",
                children: [
                  (0, is.jsx)(vs, { score: h }),
                  (0, is.jsxs)("div", {
                    className:
                      "relative w-[70%]  left-1/2 -translate-x-1/2 -top-6",
                    children: [
                      (0, is.jsx)(ls, { typingWords: re }),
                      (function () {
                        if (
                          "showKeyboardTrue" ==
                          localStorage.getItem("showKeyboard")
                        )
                          return (0, is.jsx)(fs, {});
                      })(),
                      (0, is.jsx)(ss, {
                        speed: z,
                        incorrectCharacters: P,
                        characters: k,
                        setAccuracyMain: H,
                        pacerSpeed: he,
                      }),
                    ],
                  }),
                ],
              }),
              (0, is.jsx)(Es, {}),
              (0, is.jsx)("img", {
                src: hs,
                className:
                  "absolute -translate-x-full -translate-y-full left-full top-full w-[20%] z-[90]",
                alt: "",
              }),
              (0, is.jsx)("img", {
                src: ds,
                className:
                  "absolute left-0 -translate-y-full top-full w-[30%] z-[90]",
                alt: "",
              }),
            ],
          });
        };
      function Ls(e, t, n) {
        return (
          (Ls = T()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new (Function.bind.apply(e, r))();
                return n && C(i, n.prototype), i;
              }),
          Ls.apply(null, arguments)
        );
      }
      function Is(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (Is = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return Ls(e, arguments, M(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              C(r, e)
            );
          }),
          Is(e)
        );
      }
      function Ds() {
        return (
          (Ds = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ds.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(Os || (Os = {}));
      var Ns,
        js = "popstate";
      function zs(e) {
        return { usr: e.state, key: e.key };
      }
      function Rs(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          Ds(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? Fs(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function As(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          i = void 0 === r ? "" : r,
          a = e.hash,
          o = void 0 === a ? "" : a;
        return (
          i && "?" !== i && (n += "?" === i.charAt(0) ? i : "?" + i),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function Fs(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function Bs(e, t, n, r) {
        void 0 === r && (r = {});
        var i = r,
          a = i.window,
          o = void 0 === a ? document.defaultView : a,
          s = i.v5Compat,
          l = void 0 !== s && s,
          u = o.history,
          c = Os.Pop,
          f = null;
        function h() {
          (c = Os.Pop), f && f({ action: c, location: d.location });
        }
        var d = {
          get action() {
            return c;
          },
          get location() {
            return e(o, u);
          },
          listen: function (e) {
            if (f)
              throw new Error("A history only accepts one active listener");
            return (
              o.addEventListener(js, h),
              (f = e),
              function () {
                o.removeEventListener(js, h), (f = null);
              }
            );
          },
          createHref: function (e) {
            return t(o, e);
          },
          push: function (e, t) {
            c = Os.Push;
            var r = Rs(d.location, e, t);
            n && n(r, e);
            var i = zs(r),
              a = d.createHref(r);
            try {
              u.pushState(i, "", a);
            } catch (s) {
              o.location.assign(a);
            }
            l && f && f({ action: c, location: r });
          },
          replace: function (e, t) {
            c = Os.Replace;
            var r = Rs(d.location, e, t);
            n && n(r, e);
            var i = zs(r),
              a = d.createHref(r);
            u.replaceState(i, "", a), l && f && f({ action: c, location: r });
          },
          go: function (e) {
            return u.go(e);
          },
        };
        return d;
      }
      function Vs(e, t, n) {
        void 0 === n && (n = "/");
        var r = qs(("string" === typeof t ? Fs(t) : t).pathname || "/", n);
        if (null == r) return null;
        var i = Ws(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(i);
        for (var a = null, o = 0; null == a && o < i.length; ++o)
          a = Ys(i[o], r);
        return a;
      }
      function Ws(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, i) {
            var a = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: i,
              route: e,
            };
            a.relativePath.startsWith("/") &&
              (Ks(
                a.relativePath.startsWith(r),
                'Absolute route path "' +
                  a.relativePath +
                  '" nested under path "' +
                  r +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (a.relativePath = a.relativePath.slice(r.length)));
            var o = Gs([r, a.relativePath]),
              s = n.concat(a);
            e.children &&
              e.children.length > 0 &&
              (Ks(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' +
                  o +
                  '".'
              ),
              Ws(e.children, t, s, o)),
              (null != e.path || e.index) &&
                t.push({ path: o, score: $s(o, e.index), routesMeta: s });
          }),
          t
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(Ns || (Ns = {}));
      var Hs = /^:\w+$/,
        Us = function (e) {
          return "*" === e;
        };
      function $s(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(Us) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !Us(e);
            })
            .reduce(function (e, t) {
              return e + (Hs.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function Ys(e, t) {
        for (
          var n = e.routesMeta, r = {}, i = "/", a = [], o = 0;
          o < n.length;
          ++o
        ) {
          var s = n[o],
            l = o === n.length - 1,
            u = "/" === i ? t : t.slice(i.length) || "/",
            c = Qs(
              { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
              u
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = s.route;
          a.push({
            params: r,
            pathname: Gs([i, c.pathname]),
            pathnameBase: Js(Gs([i, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (i = Gs([i, c.pathnameBase]));
        }
        return a;
      }
      function Qs(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            Xs(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              i =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (i += "\\/*$")
              : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))");
            return [new RegExp(i, t ? void 0 : "i"), r];
          })(e.path, e.caseSensitive, e.end),
          r = o(n, 2),
          i = r[0],
          a = r[1],
          s = t.match(i);
        if (!s) return null;
        var l = s[0],
          u = l.replace(/(.)\/+$/, "$1"),
          c = s.slice(1),
          f = a.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              u = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    Xs(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(c[n] || "", t)),
              e
            );
          }, {});
        return { params: f, pathname: l, pathnameBase: u, pattern: e };
      }
      function qs(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function Ks(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function Xs(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      var Gs = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        Js = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        Zs = (function (e) {
          O(n, e);
          var t = D(n);
          function n() {
            return j(this, n), t.apply(this, arguments);
          }
          return R(n);
        })(Is(Error));
      var el = R(function e(t, n, r) {
        j(this, e),
          (this.status = t),
          (this.statusText = n || ""),
          (this.data = r);
      });
      function tl(e) {
        return e instanceof el;
      }
      function nl() {
        return (
          (nl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          nl.apply(this, arguments)
        );
      }
      var rl =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        il = e.useState,
        al = e.useEffect,
        ol = e.useLayoutEffect,
        sl = e.useDebugValue;
      function ll(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !rl(n, r);
        } catch (i) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        t.useSyncExternalStore;
      var ul = e.createContext(null);
      var cl = e.createContext(null);
      var fl = e.createContext(null);
      var hl = e.createContext(null);
      var dl = e.createContext(null);
      var pl = e.createContext(null);
      var vl = e.createContext({ outlet: null, matches: [] });
      var gl = e.createContext(null);
      function ml() {
        return null != e.useContext(pl);
      }
      function yl() {
        return ml() || Ks(!1), e.useContext(pl).location;
      }
      function bl() {
        var t = (function () {
            var t,
              n = e.useContext(gl),
              r = Ml(kl.UseRouteError),
              i = e.useContext(vl),
              a = i.matches[i.matches.length - 1];
            if (n) return n;
            return (
              i || Ks(!1),
              !a.route.id && Ks(!1),
              null == (t = r.errors) ? void 0 : t[a.route.id]
            );
          })(),
          n = tl(t)
            ? t.status + " " + t.statusText
            : t instanceof Error
            ? t.message
            : JSON.stringify(t),
          r = t instanceof Error ? t.stack : null,
          i = "rgba(200,200,200, 0.5)",
          a = { padding: "0.5rem", backgroundColor: i },
          o = { padding: "2px 4px", backgroundColor: i };
        return e.createElement(
          e.Fragment,
          null,
          e.createElement("h2", null, "Unhandled Thrown Error!"),
          e.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? e.createElement("pre", { style: a }, r) : null,
          e.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          e.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            e.createElement("code", { style: o }, "errorElement"),
            " props on\xa0",
            e.createElement("code", { style: o }, "<Route>")
          )
        );
      }
      var xl,
        kl,
        wl = (function (t) {
          O(r, t);
          var n = D(r);
          function r(e) {
            var t;
            return (
              j(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            R(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? e.createElement(gl.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(e.Component);
      function _l(t) {
        var n = t.routeContext,
          r = t.match,
          i = t.children,
          a = e.useContext(ul);
        return (
          a &&
            r.route.errorElement &&
            (a._deepestRenderedBoundaryId = r.route.id),
          e.createElement(vl.Provider, { value: n }, i)
        );
      }
      function Sl(t, n, r) {
        if ((void 0 === n && (n = []), null == t)) {
          if (null == r || !r.errors) return null;
          t = r.matches;
        }
        var i = t,
          a = null == r ? void 0 : r.errors;
        if (null != a) {
          var o = i.findIndex(function (e) {
            return e.route.id && (null == a ? void 0 : a[e.route.id]);
          });
          o >= 0 || Ks(!1), (i = i.slice(0, Math.min(i.length, o + 1)));
        }
        return i.reduceRight(function (t, o, s) {
          var l = o.route.id ? (null == a ? void 0 : a[o.route.id]) : null,
            u = r ? o.route.errorElement || e.createElement(bl, null) : null,
            c = function () {
              return e.createElement(
                _l,
                {
                  match: o,
                  routeContext: {
                    outlet: t,
                    matches: n.concat(i.slice(0, s + 1)),
                  },
                },
                l ? u : void 0 !== o.route.element ? o.route.element : t
              );
            };
          return r && (o.route.errorElement || 0 === s)
            ? e.createElement(wl, {
                location: r.location,
                component: u,
                error: l,
                children: c(),
              })
            : c();
        }, null);
      }
      function Ml(t) {
        var n = e.useContext(fl);
        return n || Ks(!1), n;
      }
      !(function (e) {
        e.UseRevalidator = "useRevalidator";
      })(xl || (xl = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(kl || (kl = {}));
      var El;
      function Pl(e) {
        Ks(!1);
      }
      function Cl(t) {
        var n = t.basename,
          r = void 0 === n ? "/" : n,
          i = t.children,
          a = void 0 === i ? null : i,
          o = t.location,
          s = t.navigationType,
          l = void 0 === s ? Os.Pop : s,
          u = t.navigator,
          c = t.static,
          f = void 0 !== c && c;
        ml() && Ks(!1);
        var h = r.replace(/^\/*/, "/"),
          d = e.useMemo(
            function () {
              return { basename: h, navigator: u, static: f };
            },
            [h, u, f]
          );
        "string" === typeof o && (o = Fs(o));
        var p = o,
          v = p.pathname,
          g = void 0 === v ? "/" : v,
          m = p.search,
          y = void 0 === m ? "" : m,
          b = p.hash,
          x = void 0 === b ? "" : b,
          k = p.state,
          w = void 0 === k ? null : k,
          _ = p.key,
          S = void 0 === _ ? "default" : _,
          M = e.useMemo(
            function () {
              var e = qs(g, h);
              return null == e
                ? null
                : { pathname: e, search: y, hash: x, state: w, key: S };
            },
            [h, g, y, x, w, S]
          );
        return null == M
          ? null
          : e.createElement(
              dl.Provider,
              { value: d },
              e.createElement(pl.Provider, {
                children: a,
                value: { location: M, navigationType: l },
              })
            );
      }
      function Ol(t) {
        var n = t.children,
          r = t.location,
          i = e.useContext(cl);
        return (function (t, n) {
          ml() || Ks(!1);
          var r,
            i = e.useContext(fl),
            a = e.useContext(vl).matches,
            o = a[a.length - 1],
            s = o ? o.params : {},
            l = (o && o.pathname, o ? o.pathnameBase : "/"),
            u = (o && o.route, yl());
          if (n) {
            var c,
              f = "string" === typeof n ? Fs(n) : n;
            "/" === l ||
              (null == (c = f.pathname) ? void 0 : c.startsWith(l)) ||
              Ks(!1),
              (r = f);
          } else r = u;
          var h = r.pathname || "/",
            d = Vs(t, { pathname: "/" === l ? h : h.slice(l.length) || "/" }),
            p = Sl(
              d &&
                d.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, s, e.params),
                    pathname: Gs([l, e.pathname]),
                    pathnameBase:
                      "/" === e.pathnameBase ? l : Gs([l, e.pathnameBase]),
                  });
                }),
              a,
              i || void 0
            );
          return n
            ? e.createElement(
                pl.Provider,
                {
                  value: {
                    location: nl(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      r
                    ),
                    navigationType: Os.Pop,
                  },
                },
                p
              )
            : p;
        })(i && !n ? i.router.routes : Ll(n), r);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(El || (El = {}));
      var Tl = new Promise(function () {});
      e.Component;
      function Ll(t, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          e.Children.forEach(t, function (t, i) {
            if (e.isValidElement(t))
              if (t.type !== e.Fragment) {
                t.type !== Pl && Ks(!1),
                  t.props.index && t.props.children && Ks(!1);
                var a = [].concat(x(n), [i]),
                  o = {
                    id: t.props.id || a.join("-"),
                    caseSensitive: t.props.caseSensitive,
                    element: t.props.element,
                    index: t.props.index,
                    path: t.props.path,
                    loader: t.props.loader,
                    action: t.props.action,
                    errorElement: t.props.errorElement,
                    hasErrorBoundary: null != t.props.errorElement,
                    shouldRevalidate: t.props.shouldRevalidate,
                    handle: t.props.handle,
                  };
                t.props.children && (o.children = Ll(t.props.children, a)),
                  r.push(o);
              } else r.push.apply(r, Ll(t.props.children, n));
          }),
          r
        );
      }
      function Il(t) {
        var n,
          r = t.basename,
          i = t.children,
          a = t.window,
          s = e.useRef();
        null == s.current &&
          (s.current =
            (void 0 === (n = { window: a, v5Compat: !0 }) && (n = {}),
            Bs(
              function (e, t) {
                var n = e.location;
                return Rs(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : As(t);
              },
              null,
              n
            )));
        var l = s.current,
          u = o(e.useState({ action: l.action, location: l.location }), 2),
          c = u[0],
          f = u[1];
        return (
          e.useLayoutEffect(
            function () {
              return l.listen(f);
            },
            [l]
          ),
          e.createElement(Cl, {
            basename: r,
            children: i,
            location: c.location,
            navigationType: c.action,
            navigator: l,
          })
        );
      }
      var Dl, Nl;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(Dl || (Dl = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Nl || (Nl = {}));
      r.createRoot(document.getElementById("root")).render(
        (0, is.jsx)(Il, {
          children: (0, is.jsx)(e.StrictMode, {
            children: (0, is.jsx)(Ol, {
              children: (0, is.jsx)(Pl, {
                path: "/",
                element: (0, is.jsx)(Ts, {}),
              }),
            }),
          }),
        })
      );
    })();
})();
//# sourceMappingURL=main.5661283a.js.map
