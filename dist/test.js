!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("cityfun", [], t)
    : "object" == typeof exports
    ? (exports.cityfun = t())
    : (e.cityfun = t());
})(window, function() {
  return (function(e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            n.d(
              o,
              r,
              function(t) {
                return e[t];
              }.bind(null, r)
            );
        return o;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 109))
    );
  })({
    109: function(e, t) {
      var n = { password: "admin", userName: "admin" },
        o = "ddbc794c-b452-4364-91e9-c8c8bde87cff",
        r = "a8077a635d290aed9d544a883f28fe9f";
      fetch("http://192.168.2.64/geocms/api/geoengine/appinfo/sso", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(n),
      })
        .then(function(e) {
          return e.json();
        })
        .then(function(e) {
          var t = e.data.accessToken;
          fetch(
            "http://192.168.2.64/geocms/api/geoengine/appinfo/gettoken" +
              "?app_id=".concat(o, "&app_secret=").concat(r),
            {
              method: "get",
              headers: {
                Authorization: "Bearer ".concat(t),
                "Content-Type": "application/json",
              },
            }
          )
            .then(function(e) {
              return e.json();
            })
            .then(function(e) {
              var t = e.data.token;
              console.log(t);
            });
        }),
        cityfun.setConfig({
          userName: n.userName,
          password: n.password,
          app_id: o,
          app_secret: r,
        });
      var a = new cityfun.Map({
        container: "map",
        center: [120.70044254024515, 31.301339366724918],
        zoom: 12,
        pitch: 60,
        style:
          "http://webres.cityfun.com.cn/szmap/szmap_dark/3857/map_dark.json",
      });
      a.on("load", function() {}), a.on("load", function() {});
    },
  }).default;
});
