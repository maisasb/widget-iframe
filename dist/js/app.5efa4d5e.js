(function (e) {
  function t(t) {
    for (var r, o, i = t[0], u = t[1], c = t[2], l = 0, m = []; l < i.length; l++)
      (o = i[l]), Object.prototype.hasOwnProperty.call(s, o) && s[o] && m.push(s[o][0]), (s[o] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    d && d(t);
    while (m.length) m.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
        var u = n[o];
        0 !== s[u] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var r = {},
    s = { app: 0 },
    a = [];
  function o(e) {
    return i.p + "js/" + ({}[e] || e) + "." + { "chunk-2d0c5aea": "1a234840", "chunk-2d224c78": "a64b02e8" }[e] + ".js";
  }
  function i(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.e = function (e) {
    var t = [],
      n = s[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = s[e] = [t, r];
        });
        t.push((n[2] = r));
        var a,
          u = document.createElement("script");
        (u.charset = "utf-8"), (u.timeout = 120), i.nc && u.setAttribute("nonce", i.nc), (u.src = o(e));
        var c = new Error();
        a = function (t) {
          (u.onerror = u.onload = null), clearTimeout(l);
          var n = s[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (c.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                (c.name = "ChunkLoadError"),
                (c.type = r),
                (c.request = a),
                n[1](c);
            }
            s[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          a({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = a), document.head.appendChild(u);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = r),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var r in e)
          i.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/"),
    (i.oe = function (e) {
      throw (console.error(e), e);
    });
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var l = 0; l < u.length; l++) t(u[l]);
  var d = c;
  a.push(["6c30", "chunk-vendors"]), n();
})({
  "0cb7": function (e, t, n) {
    var r = n("7e9e");
    r.__esModule && (r = r.default), "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var s = n("499e").default;
    s("f0beea8e", r, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "1dc1": function (e, t, n) {
    var r = n("565b");
    r.__esModule && (r = r.default), "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var s = n("499e").default;
    s("3749df7a", r, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "565b": function (e, t, n) {
    var r = n("24fb");
    (t = r(!1)),
      t.push([
        e.i,
        ".q-gutter-x-sm[data-v-155beb7c]>:first-child{margin-left:0}.button_design[data-v-155beb7c]{color:#21345f;font-weight:700;font-size:16px;cursor:pointer;height:40px;width:40px;border:1px solid;align-items:center;position:relative;margin-bottom:10px;margin-right:5px}.button-row[data-v-155beb7c],.button_design[data-v-155beb7c]{display:flex;justify-content:center}.button-row[data-v-155beb7c]{text-align:center;width:100%;flex-wrap:wrap}.likert[data-v-155beb7c]{font-weight:700;font-size:10px;line-height:13px;text-align:center;color:#fff;border-radius:2px;margin-right:5px;cursor:pointer;height:60px;margin-bottom:10px;border:1px solid;max-width:75px;width:75px}.likert[data-v-155beb7c]:hover{color:#21345f}.selected[data-v-155beb7c]{box-shadow:0 4px 3px #ccc}.question .number-label[data-v-155beb7c]{text-align:center;font-weight:400;color:#979797;font-size:12px;min-width:50px;line-height:1.2;position:absolute;bottom:-40px}.button_design.big[data-v-155beb7c]{height:50px;width:50px}.legend-mobile[data-v-155beb7c]{display:flex;margin-top:10px}.legend-mobile .number[data-v-155beb7c]{background:silver;border-radius:100%;color:#fff;width:16px;height:16px;text-align:center;padding-top:3px;margin-right:6px;font-size:10px}.legend-mobile .label[data-v-155beb7c]{color:silver;font-size:10px;line-height:1.5}@media(max-width:601px){.button_design[data-v-155beb7c],.button_design.big[data-v-155beb7c]{height:40px;width:40px}.likert[data-v-155beb7c]{max-width:70px;width:70px}}@media(max-width:385px){.likert[data-v-155beb7c]{max-width:60px;width:60px}}@media(max-width:320px){.button_design[data-v-155beb7c],.button_design.big[data-v-155beb7c]{height:30px;width:30px}.likert[data-v-155beb7c]{max-width:80px;width:80px}.likert.scale7[data-v-155beb7c]{max-width:60px;width:60px}}@media(max-width:280px){.likert.scale7[data-v-155beb7c]{max-width:60px;width:60px}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.question .number-label[data-v-155beb7c]{left:0}}",
        ""
      ]),
      (e.exports = t);
  },
  "5f2e": function (e, t, n) {
    var r = n("653b");
    r.__esModule && (r = r.default), "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var s = n("499e").default;
    s("738e5824", r, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "5fff": function (e, t, n) {
    "use strict";
    n("f301");
  },
  "653b": function (e, t, n) {
    var r = n("24fb");
    (t = r(!1)),
      t.push([
        e.i,
        ".survey-input .q-placeholder::-moz-placeholder{color:rgba(127,143,164,.6)}.survey-input .q-placeholder:-ms-input-placeholder{color:rgba(127,143,164,.6)}.survey-input .q-placeholder::placeholder{color:rgba(127,143,164,.6)}.survey-input .q-field__control:before{border-bottom:1px solid #7f8fa4!important}.survey-input .q-field__native{color:#4f4f4f}",
        ""
      ]),
      (e.exports = t);
  },
  "6c30": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = {};
    n.r(r),
      n.d(r, "QUESTION_TYPE", function () {
        return v;
      }),
      n.d(r, "CES_LIKERT_5", function () {
        return b;
      }),
      n.d(r, "CES_LIKERT_7", function () {
        return y;
      }),
      n.d(r, "CSAT_LIKERT", function () {
        return w;
      }),
      n.d(r, "CES_TEXTUAL_5", function () {
        return E;
      }),
      n.d(r, "CES_TEXTUAL_7", function () {
        return x;
      }),
      n.d(r, "INTERACTION_STATUS", function () {
        return S;
      }),
      n.d(r, "SHOW_WIDGET", function () {
        return A;
      }),
      n.d(r, "JUMP_ACTIONS", function () {
        return T;
      }),
      n.d(r, "JUMP_LOGIC_PATHS", function () {
        return O;
      }),
      n.d(r, "WIDGET_MODE", function () {
        return I;
      });
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var s = n("2b0e"),
      a = n("2f62"),
      o = {
        namespaced: !0,
        state: { show: !1, token: null, customer: null, interaction: null, editMode: !1 },
        mutations: {
          showWidget: function (e, t) {
            e.show = t;
          },
          setCustomer: function (e, t) {
            e.customer = t;
          },
          setInteraction: function (e, t) {
            e.interaction = t;
          },
          setToken: function (e, t) {
            e.token = t;
          },
          setEditMode: function (e, t) {
            e.editMode = t;
          }
        }
      };
    s["a"].use(a["a"]);
    var i = new a["a"].Store({ modules: { survey: o } }),
      u = i,
      c = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.config.show ? n("div", [n("Widget", e._b({}, "Widget", e.$props, !1))], 1) : e._e();
      },
      l = [],
      d = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.widget && e.show ? n("Box", { attrs: { widget: e.widget } }) : e._e();
      },
      m = [],
      p = n("1da1"),
      f = n("5530");
    n("96cf"), n("d3b7"), n("3ca3"), n("ddb0"), n("2b3d"), n("ac1f"), n("841c");
    function g() {
      function e() {
        var e,
          t,
          n = new URLSearchParams(window.location.search),
          r = null !== (e = n.get("key")) && void 0 !== e ? e : "",
          s = null !== (t = n.get("edit")) && void 0 !== t ? t : "";
        u.commit("survey/setToken", r), u.commit("survey/setEditMode", s);
      }
      function t() {
        window.addEventListener("message", function (e) {
          e.data.isWidget &&
            (e.data.customer && (console.log(e.data.customer), u.commit("survey/setCustomer", e.data.customer)),
            e.data.interaction && u.commit("survey/setInteraction", e.data.interaction));
        });
      }
      return { updateDataListener: t, getTokenKey: e };
    }
    var _ = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.minimized
          ? n(
              "div",
              { staticClass: "widget-minimized" },
              [
                n("Icon", {
                  staticClass: "cursor-pointer",
                  attrs: {
                    name: "Open",
                    color: e.colors.primaryColor,
                    handleClick: function () {
                      return e.minimizeWidget(!1);
                    }
                  }
                })
              ],
              1
            )
          : n(
              "div",
              {
                staticClass: "box",
                class: e.widget.mode === e.consts.WIDGET_MODE.EMBEBED ? "widget-embebed" : "widget-fixed",
                style: { background: e.colors.secondaryColor }
              },
              [
                n(
                  "div",
                  { staticClass: "icon-close", attrs: { id: "track__widget-close" } },
                  [
                    n("Icon", {
                      staticClass: "cursor-pointer",
                      attrs: {
                        name: "Close",
                        color: e.colors.primaryColor,
                        handleClick: function () {
                          return e.minimizeWidget(!0);
                        }
                      }
                    })
                  ],
                  1
                ),
                n("Survey", { attrs: { widget: e.widget } })
              ],
              1
            );
      },
      h = [],
      v = {
        CES: 1,
        CSAT: 2,
        EMOJI: 3,
        MULTIPLE_CHOICE: 4,
        NPS_RELATIONAL: 5,
        NPS_TRANSACTIONAL: 6,
        OPEN: 7,
        RATINGS: 8,
        THUMBS: 9,
        LABEL: 10,
        IMAGE: 11,
        CES2: 12
      },
      b = { STRONGLY_DISAGREE: 1, DISAGREE: 2, NEUTRAL: 3, AGREE: 4, STRONGLY_AGREE: 5 },
      y = {
        STRONGLY_DISAGREE: 1,
        DISAGREE: 2,
        SOMEWHAT_DISAGREE: 3,
        NEUTRAL: 4,
        SOMEWHAT_AGREE: 5,
        AGREE: 6,
        STRONGLY_AGREE: 7
      },
      w = { EXTREMELY_UNSATISFIED: 1, UNSATISFIED: 2, NEUTRAL: 3, SATISFIED: 4, EXTREMELY_SATISFIED: 5 },
      E = { VERY_HARD: 1, HARD: 2, NEUTRAL: 3, EASY: 4, VERY_EASY: 5 },
      x = { EXTREMELY_HARD: 1, VERY_HARD: 2, HARD: 3, NEUTRAL: 4, EASY: 5, VERY_EASY: 6, EXTREMELY_EASY: 7 },
      S = { DONE: 3, PARTIAL: 5 },
      A = { ALWAYS: 1, ONCE: 2, RECURRENTLY: 3 },
      T = { NEXT_QUESTION: 1, SPECIFIC_QUESTION: 2, FINISH_SURVEY: 3 },
      O = { DETRACTOR: "detractor", PASSIVE: "passive", PROMOTER: "promoter" },
      I = { BOX: 1, EMBEBED: 2 },
      C = Object(f["a"])({}, r),
      R = C,
      k = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          e.name,
          e._b(
            {
              tag: "component",
              nativeOn: {
                click: function (t) {
                  return e.handleClick(t);
                }
              }
            },
            "component",
            e.$props,
            !1
          )
        );
      },
      N = [],
      P = {
        components: {
          Close: function () {
            return n.e("chunk-2d224c78").then(n.bind(null, "e21f"));
          },
          Open: function () {
            return n.e("chunk-2d0c5aea").then(n.bind(null, "3fab"));
          }
        },
        props: {
          name: { type: String, required: !0 },
          color: String,
          size: String,
          handleClick: { type: Function, default: function () {} }
        }
      },
      U = P,
      L = n("2877"),
      M = Object(L["a"])(U, k, N, !1, null, null, null),
      D = M.exports,
      Q = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.showThanksMessage
          ? n("div", { staticClass: "track-message", style: { color: e.colors.primaryColor } }, [
              e._v(" " + e._s(e.widget.thanks_message[e.language] || e.defaultMessage[e.language]) + " ")
            ])
          : n("div", [
              n(
                "div",
                { staticClass: "track-question" },
                [
                  e.showErrorMessage
                    ? n("div", { staticClass: "error" }, [
                        e._v(" " + e._s(e.userLanguage.survey.messages.obligatory) + " ")
                      ])
                    : e._e(),
                  n("DisplayWeb", {
                    attrs: {
                      selectedQuestion: e.currentItem,
                      color: e.widget.survey.primary_color,
                      lang: e.language,
                      onSelectAnswer: function (t) {
                        return e.selectValue(t);
                      },
                      status: e.widget.survey.status,
                      currentAnswer: e.currentAnswer
                    }
                  })
                ],
                1
              ),
              n("div", { staticClass: "track-footer" }, [
                n("a", { attrs: { href: "https://track.co", target: "_blank" } }, [
                  n("img", { attrs: { src: e.logo, width: "30" } })
                ]),
                n(
                  "div",
                  { staticClass: "track-buttons" },
                  [
                    e.showPrevious
                      ? n("Button", {
                          attrs: { label: e.userLanguage.survey.buttons.previous, handleClick: e.handlePreviousItem }
                        })
                      : e._e(),
                    e.showNext
                      ? n("Button", {
                          attrs: {
                            label: e.userLanguage.survey.buttons.next,
                            height: "30px",
                            handleClick: e.handleNextItem
                          }
                        })
                      : e._e(),
                    e.showSubmit
                      ? n("Button", {
                          attrs: { label: e.userLanguage.survey.buttons.send, handleClick: e.submitCompleteAnswer }
                        })
                      : e._e()
                  ],
                  1
                )
              ])
            ]);
      },
      j = [],
      Y = (n("c740"), n("498a"), n("99af"), n("4de4"), n("7db0"), n("0061")),
      B =
        (n("caad"),
        n("2532"),
        {
          survey: {
            likert: {
              strongly_disagree: "Strongly Disagree",
              disagree: "Disagree",
              somewhat_disagree: "Somewhat Disagree",
              neutral: "Neutral",
              somewhat_agree: "Somewhat Agree",
              agree: "Agree",
              strongly_agree: "Strongly Agree",
              extremely_unsatistied: "Extremely Unsatisfied",
              unsatisfied: "Unsatisfied",
              satisfied: "Satisfied",
              extremely_satistied: "Extremely Satisfied"
            },
            textual: {
              extremely_hard: "Extremely hard",
              very_hard: "Very hard",
              hard: "Hard",
              neutral: "Neutral",
              easy: "Easy",
              very_easy: "Very easy",
              extremely_easy: "Extremely easy"
            },
            new: { placeholder_comment: "Leave your opinion here. ", other: "Other" },
            buttons: { next: "Next", previous: "Previous", send: "Send" },
            messages: {
              obligatory: "For the survey to be considered valid, you must answer the mandatory questions",
              answer_one_question: "You need to answer at least one question"
            }
          }
        }),
      G = {
        survey: {
          likert: {
            strongly_disagree: "Discordo Totalmente",
            disagree: "Discordo",
            somewhat_disagree: "Discordo Parcialmente",
            neutral: "Neutro",
            somewhat_agree: "Concordo Parcialmente",
            agree: "Concordo",
            strongly_agree: "Concordo Totalmente",
            extremely_unsatistied: "Extremamente Insatisfeito",
            unsatisfied: "Insatisfeito",
            satisfied: "Satisfeito",
            extremely_satistied: "Extremamente Satisfeito"
          },
          textual: {
            extremely_hard: "Extremamente difícil",
            very_hard: "Muito difícil",
            hard: "Difícil",
            neutral: "Neutro",
            easy: "Fácil",
            very_easy: "Muito fácil",
            extremely_easy: "Extremamente fácil"
          },
          new: { placeholder_comment: "Deixe seu comentário aqui ", other: "Outro" },
          buttons: { next: "Próximo", previous: "Anterior", send: "Enviar" },
          messages: {
            obligatory: "Para que a pesquisa seja considerada válida, você precisa responder as questões obrigatórias",
            answer_one_question: "Você precisa responder pelo menos uma pergunta"
          }
        }
      },
      q = {
        survey: {
          likert: {
            strongly_disagree: "Totalmente en Desacuerdo",
            disagree: "En Desacuerdo",
            somewhat_disagree: "Algo en Desacuerdo",
            neutral: "Neutral",
            somewhat_agree: "Algo de Acuerdo",
            agree: "De Acuerdo",
            strongly_agree: "Totalmente de Acuerdo",
            extremely_unsatistied: "Extremamente insatisfecho",
            unsatisfied: "Insatisfecho",
            satisfied: "Satisfecho",
            extremely_satistied: "Extremamente satisfecho"
          },
          textual: {
            extremely_hard: "Extremamente difícil",
            very_hard: "Muy difícil",
            hard: "Difícil",
            neutral: "Neutral",
            easy: "Fácil",
            very_easy: "Muy Fácil",
            extremely_easy: "Extremamente Fácil"
          },
          new: { placeholder_comment: "Deje su opinión aquí. ", other: "Otro" },
          buttons: { next: "Siguiente", previous: "Anterior", send: "Enviar" },
          messages: {
            obligatory: "Para que la encuesta se considere válida, debe responder las preguntas obligatorias",
            answer_one_question: "Debes responder al menos una pregunta"
          }
        }
      },
      H = function () {
        var e = navigator.language || navigator.userLanguage,
          t = "";
        switch (e) {
          case "pt-BR":
            t = "pt_BR";
            break;
          case "en-US":
            t = "en_US";
            break;
          case "es":
            t = "es_ES";
            break;
          case "es-ES":
            t = "es_ES";
            break;
          default:
            t = "pt_BR";
        }
        return t;
      },
      J = function (e, t) {
        return t.survey.lang && t.survey.lang.length > 0 && t.survey.lang.includes(e) ? e : t.survey.default_lang;
      },
      F = function () {
        return "pt_BR" === u.state.survey.language ? G : "es_ES" === u.state.survey.language ? q : B;
      };
    function V(e) {
      return e > 8 ? R.JUMP_LOGIC_PATHS.PROMOTER : e > 6 ? R.JUMP_LOGIC_PATHS.PASSIVE : R.JUMP_LOGIC_PATHS.DETRACTOR;
    }
    function K(e) {
      return e > 8 ? R.JUMP_LOGIC_PATHS.PROMOTER : e > 6 ? R.JUMP_LOGIC_PATHS.PASSIVE : R.JUMP_LOGIC_PATHS.DETRACTOR;
    }
    function W(e) {
      return e > 6 ? R.JUMP_LOGIC_PATHS.PROMOTER : e > 4 ? R.JUMP_LOGIC_PATHS.PASSIVE : R.JUMP_LOGIC_PATHS.DETRACTOR;
    }
    function X(e) {
      return e > 4 ? R.JUMP_LOGIC_PATHS.PROMOTER : e > 3 ? R.JUMP_LOGIC_PATHS.PASSIVE : R.JUMP_LOGIC_PATHS.DETRACTOR;
    }
    function z(e) {
      return e > 3 ? R.JUMP_LOGIC_PATHS.PROMOTER : e > 1 ? R.JUMP_LOGIC_PATHS.PASSIVE : R.JUMP_LOGIC_PATHS.DETRACTOR;
    }
    function Z(e) {
      return e > 3 ? R.JUMP_LOGIC_PATHS.PROMOTER : e > 2 ? R.JUMP_LOGIC_PATHS.PASSIVE : R.JUMP_LOGIC_PATHS.DETRACTOR;
    }
    function $(e, t, n, r) {
      switch (e) {
        case R.QUESTION_TYPE.CES:
        case R.QUESTION_TYPE.CES2:
        case R.QUESTION_TYPE.CSAT:
        case R.QUESTION_TYPE.EMOJI:
        case R.QUESTION_TYPE.RATINGS:
          return 0 === n && 10 === r
            ? K(t)
            : 1 === n && 10 === r
            ? W(t)
            : 1 === n && 7 === r
            ? X(t)
            : 0 === n && 5 === r
            ? z(t)
            : Z(t);
        case R.QUESTION_TYPE.NPS_RELATIONAL:
        case R.QUESTION_TYPE.NPS_TRANSACTIONAL:
          return V(t);
        case R.QUESTION_TYPE.THUMBS:
          return t > 0 ? R.JUMP_LOGIC_PATHS.PROMOTER : R.JUMP_LOGIC_PATHS.DETRACTOR;
        default:
          return R.JUMP_LOGIC_PATHS.PASSIVE;
      }
    }
    var ee = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n(e.components[e.selectedQuestion.type], {
              key: e.selectedQuestion.item_uuid,
              tag: "component",
              attrs: {
                selectedQuestion: e.selectedQuestion,
                color: e.color,
                lang: e.lang,
                onSelectAnswer: e.onSelectAnswer,
                status: e.status,
                currentAnswer: e.currentAnswer
              }
            })
          ],
          1
        );
      },
      te = [],
      ne = n("ade3"),
      re =
        (n("a9e3"),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("QuestionContainer", {
            attrs: {
              status: e.status,
              questionText: e.selectedQuestion.question[e.lang],
              isObligatory: e.selectedQuestion.is_obligatory,
              color: e.color
            },
            scopedSlots: e._u([
              {
                key: "buttons",
                fn: function () {
                  return [
                    n(
                      "div",
                      [
                        n("button-question", {
                          attrs: {
                            questionType: e.selectedQuestion.type,
                            scale_type: 0,
                            min_scale: 0,
                            max_scale: 10,
                            button_design: e.selectedQuestion.button_design,
                            color_pattern: e.selectedQuestion.color_pattern,
                            reverse: e.selectedQuestion.inverted_scale,
                            custom_color: e.selectedQuestion.custom_color,
                            onClick: function (t) {
                              return e.selectAnswer(t);
                            },
                            current_response: e.currentAnswer ? e.currentAnswer.answer.response : null,
                            language: e.lang
                          }
                        })
                      ],
                      1
                    )
                  ];
                },
                proxy: !0
              },
              {
                key: "comment",
                fn: function () {
                  return [
                    e.selectedQuestion.comments_enabled
                      ? n("div", [
                          n(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "detractor" === e.checkDetractorAnswer(),
                                  expression: "checkDetractorAnswer() === 'detractor'"
                                }
                              ],
                              staticClass: "subtitle"
                            },
                            [
                              void 0 !== e.selectedQuestion.detractor_comment_question &&
                              "" !== e.selectedQuestion.detractor_comment_question[e.lang]
                                ? n("div", [
                                    e._v(" " + e._s(e.selectedQuestion.detractor_comment_question[e.lang]) + " ")
                                  ])
                                : e._e(),
                              n("input", {
                                directives: [
                                  { name: "model", rawName: "v-model", value: e.comment, expression: "comment" }
                                ],
                                staticClass: "survey-input",
                                attrs: { autogrow: "", placeholder: e.placeholder, rules: [e.rules.max] },
                                domProps: { value: e.comment },
                                on: {
                                  blur: function (t) {
                                    return e.selectItem(e.answer);
                                  },
                                  input: function (t) {
                                    t.target.composing || (e.comment = t.target.value);
                                  }
                                }
                              })
                            ]
                          ),
                          n(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "neutral" === e.checkDetractorAnswer(),
                                  expression: "checkDetractorAnswer() === 'neutral'"
                                }
                              ],
                              staticClass: "subtitle"
                            },
                            [
                              void 0 !== e.selectedQuestion.neutral_comment_question &&
                              "" !== e.selectedQuestion.neutral_comment_question[e.lang]
                                ? n("div", [
                                    e._v(" " + e._s(e.selectedQuestion.neutral_comment_question[e.lang]) + " ")
                                  ])
                                : e._e(),
                              n("input", {
                                directives: [
                                  { name: "model", rawName: "v-model", value: e.comment, expression: "comment" }
                                ],
                                staticClass: "survey-input",
                                attrs: { autogrow: "", placeholder: e.placeholder, rules: [e.rules.max] },
                                domProps: { value: e.comment },
                                on: {
                                  blur: function (t) {
                                    return e.selectItem(e.answer);
                                  },
                                  input: function (t) {
                                    t.target.composing || (e.comment = t.target.value);
                                  }
                                }
                              })
                            ]
                          ),
                          n(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "promoter" === e.checkDetractorAnswer(),
                                  expression: "checkDetractorAnswer() === 'promoter'"
                                }
                              ],
                              staticClass: "subtitle"
                            },
                            [
                              void 0 !== e.selectedQuestion.promoter_comment_question &&
                              "" !== e.selectedQuestion.promoter_comment_question[e.lang]
                                ? n("div", [
                                    e._v(" " + e._s(e.selectedQuestion.promoter_comment_question[e.lang]) + " ")
                                  ])
                                : e._e(),
                              n("input", {
                                directives: [
                                  { name: "model", rawName: "v-model", value: e.comment, expression: "comment" }
                                ],
                                staticClass: "survey-input",
                                attrs: { autogrow: "", placeholder: e.placeholder, rules: [e.rules.max] },
                                domProps: { value: e.comment },
                                on: {
                                  blur: function (t) {
                                    return e.selectItem(this.answer);
                                  },
                                  input: function (t) {
                                    t.target.composing || (e.comment = t.target.value);
                                  }
                                }
                              })
                            ]
                          )
                        ])
                      : e._e()
                  ];
                },
                proxy: !0
              }
            ])
          });
        }),
      se = [],
      ae = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "do-drag" },
          [
            n("div", { staticClass: "title", style: { color: e.color } }, [e._v(" " + e._s(e.questionText) + " ")]),
            e._t("buttons"),
            e._t("comment")
          ],
          2
        );
      },
      oe = [],
      ie = { props: { badgeText: String, status: Number, color: String, questionText: String, isObligatory: Boolean } },
      ue = ie,
      ce = (n("5fff"), n("7737"), Object(L["a"])(ue, ae, oe, !1, null, "cb2bf3ce", null)),
      le = ce.exports,
      de = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          0 === e.scale_type
            ? n("div", [
                n(
                  "div",
                  { ref: "buttons", staticClass: "button-row", style: { "margin-bottom": e.labeled ? "40px" : "0" } },
                  e._l(e.scales, function (t, r) {
                    return n("div", { key: r }, [
                      n(
                        "div",
                        {
                          ref: "ref_" + r,
                          refInFor: !0,
                          class: ["button_design", e.big ? "big" : "", e.selected === t ? "selected" : ""],
                          style: e.getButtonStyle(r),
                          on: {
                            click: function (n) {
                              return e.selectItem(t, r);
                            },
                            mouseover: function (n) {
                              return n.stopPropagation(), e.onHover(!0, r, t, n);
                            },
                            mouseout: function (n) {
                              return n.stopPropagation(), e.onHover(!1, r, t, n);
                            }
                          }
                        },
                        [
                          e._v(" " + e._s(t) + " "),
                          e.labeled && 0 === r
                            ? n(
                                "div",
                                { staticClass: "number-label desktop-only" },
                                e._l(e.labelMinArray, function (t, r) {
                                  return n("div", { key: r }, [e._v(" " + e._s(t) + " ")]);
                                }),
                                0
                              )
                            : e.labeled && r === e.scales.length - 1
                            ? n(
                                "div",
                                { staticClass: "number-label desktop-only" },
                                e._l(e.labelMaxArray, function (t, r) {
                                  return n("div", { key: r }, [e._v(" " + e._s(t) + " ")]);
                                }),
                                0
                              )
                            : e._e()
                        ]
                      )
                    ]);
                  }),
                  0
                ),
                e.labeled
                  ? n("div", { staticClass: "flex justify-center", staticStyle: { "margin-top": "-30px" } }, [
                      n("div", { staticClass: "legend-mobile mobile-only q-mr-md" }, [
                        n("div", { staticClass: "number", style: { backgroundColor: e.getColor(0) } }, [
                          e._v(e._s(e.min_scale) + " ")
                        ]),
                        n("div", { staticClass: "label", style: { color: e.getColor(0) } }, [
                          e._v(" " + e._s(e.label_min) + " ")
                        ])
                      ]),
                      n("div", { staticClass: "legend-mobile mobile-only" }, [
                        n(
                          "div",
                          { staticClass: "number", style: { backgroundColor: e.getColor(e.scales.length - 1) } },
                          [e._v(" " + e._s(e.max_scale))]
                        ),
                        n("div", { staticClass: "label", style: { color: e.getColor(e.scales.length - 1) } }, [
                          e._v(" " + e._s(e.label_max) + " ")
                        ])
                      ])
                    ])
                  : e._e()
              ])
            : n("div", [
                n(
                  "div",
                  { staticClass: "button-row" },
                  e._l(e.scales, function (t, r) {
                    return n(
                      "div",
                      {
                        key: r,
                        ref: "ref_" + r,
                        refInFor: !0,
                        staticClass: "likert",
                        class: { selected: e.selected === t.value, scale7: 7 === e.max_scale },
                        style: e.getButtonStyle(r),
                        on: {
                          click: function (n) {
                            return e.selectItem(t.value, r);
                          },
                          mouseover: function (n) {
                            return e.onHover(!0, r, t.value, n);
                          },
                          mouseout: function (n) {
                            return e.onHover(!1, r, t.value, n);
                          }
                        }
                      },
                      [e._v(" " + e._s(t.label[e.language]) + " ")]
                    );
                  }),
                  0
                )
              ])
        ]);
      },
      me = [],
      pe = (n("1276"), n("d4ec")),
      fe = n("bee2"),
      ge = n("2909"),
      _e =
        (n("d81d"),
        n("fb6a"),
        {
          colors010: [
            "#b72124",
            "#d62027",
            "#ef5222",
            "#f46f21",
            "#faa822",
            "#ffca26",
            "#ecdb11",
            "#dedd37",
            "#c5d92d",
            "#afd136",
            "#65b54d"
          ],
          colors110: [
            "#d62027",
            "#ef5222",
            "#f46f21",
            "#faa822",
            "#ffca26",
            "#ecdb11",
            "#dedd37",
            "#c5d92d",
            "#afd136",
            "#65b54d"
          ],
          colors17: ["#a80b1e", "#f2243d", "#f5a623", "#fdc33e", "#c7d153", "#2acf65", "#15aa4a"],
          colors05: ["#a80b1e", "#f2243d", "#f46f21", "#f5a623", "#2acf65", "#15aa4a"],
          colors15: ["#a80b1e", "#f2243d", "#f5a623", "#2acf65", "#15aa4a"]
        }),
      he = {
        likert_csat: [
          { value: R.CSAT_LIKERT.EXTREMELY_UNSATISFIED, label: "extremely_unsatistied" },
          { value: R.CSAT_LIKERT.UNSATISFIED, label: "unsatisfied" },
          { value: R.CSAT_LIKERT.NEUTRAL, label: "neutral" },
          { value: R.CSAT_LIKERT.SATISFIED, label: "satisfied" },
          { value: R.CSAT_LIKERT.EXTREMELY_SATISFIED, label: "extremely_satistied" }
        ],
        likert_5: [
          { value: R.CES_LIKERT_5.STRONGLY_DISAGREE, label: "strongly_disagree" },
          { value: R.CES_LIKERT_5.DISAGREE, label: "disagree" },
          { value: R.CES_LIKERT_5.NEUTRAL, label: "neutral" },
          { value: R.CES_LIKERT_5.AGREE, label: "agree" },
          { value: R.CES_LIKERT_5.STRONGLY_AGREE, label: "strongly_agree" }
        ],
        likert_7: [
          { value: R.CES_LIKERT_7.STRONGLY_DISAGREE, label: "strongly_disagree" },
          { value: R.CES_LIKERT_7.DISAGREE, label: "disagree" },
          { value: R.CES_LIKERT_7.SOMEWHAT_DISAGREE, label: "somewhat_disagree" },
          { value: R.CES_LIKERT_7.NEUTRAL, label: "neutral" },
          { value: R.CES_LIKERT_7.SOMEWHAT_AGREE, label: "somewhat_agree" },
          { value: R.CES_LIKERT_7.AGREE, label: "agree" },
          { value: R.CES_LIKERT_7.STRONGLY_AGREE, label: "strongly_agree" }
        ]
      },
      ve = {
        5: [
          { value: R.CES_TEXTUAL_5.VERY_HARD, label: "very_hard" },
          { value: R.CES_TEXTUAL_5.HARD, label: "hard" },
          { value: R.CES_TEXTUAL_5.NEUTRAL, label: "neutral" },
          { value: R.CES_TEXTUAL_5.EASY, label: "easy" },
          { value: R.CES_TEXTUAL_5.VERY_EASY, label: "very_easy" }
        ],
        7: [
          { value: R.CES_TEXTUAL_7.EXTREMELY_HARD, label: "extremely_hard" },
          { value: R.CES_TEXTUAL_7.VERY_HARD, label: "very_hard" },
          { value: R.CES_TEXTUAL_7.HARD, label: "hard" },
          { value: R.CES_TEXTUAL_7.NEUTRAL, label: "neutral" },
          { value: R.CES_TEXTUAL_7.EASY, label: "easy" },
          { value: R.CES_TEXTUAL_7.VERY_EASY, label: "very_easy" },
          { value: R.CES_TEXTUAL_7.EXTREMELY_EASY, label: "extremely_easy" }
        ]
      },
      be = { en_US: B.survey.new.other, pt_BR: G.survey.new.other, es_ES: q.survey.new.other },
      ye = {
        en_US: B.survey.new.placeholder_comment,
        pt_BR: G.survey.new.placeholder_comment,
        es_ES: q.survey.new.placeholder_comment
      };
    function we(e) {
      var t = JSON.parse(JSON.stringify(e));
      return (
        t.map(function (e) {
          e.label = {
            en_US: B.survey.likert[e.label],
            pt_BR: G.survey.likert[e.label],
            es_ES: q.survey.likert[e.label]
          };
        }),
        t
      );
    }
    function Ee(e) {
      var t = JSON.parse(JSON.stringify(e));
      return (
        t.map(function (e) {
          e.label = {
            en_US: B.survey.textual[e.label],
            pt_BR: G.survey.textual[e.label],
            es_ES: q.survey.textual[e.label]
          };
        }),
        t
      );
    }
    var xe = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
      10: "K",
      11: "L",
      12: "M",
      13: "N",
      14: "O",
      15: "P",
      16: "Q",
      17: "R",
      18: "S",
      19: "T",
      20: "U",
      21: "V",
      22: "X",
      23: "Z"
    };
    function Se(e, t, n, r, s) {
      var a = [];
      if (0 === r) {
        for (var o = e; o <= t; o++) a.push(o);
        n && (a = ke(a));
      } else a = 2 === r ? Te(t) : Ae(s, t);
      return a;
    }
    function Ae(e, t) {
      var n = [];
      return (
        (n =
          e === R.QUESTION_TYPE.CES || e === R.QUESTION_TYPE.CES2
            ? 7 === t
              ? Object(ge["a"])(he.likert_7)
              : Object(ge["a"])(he.likert_5)
            : Object(ge["a"])(he.likert_csat)),
        we(n)
      );
    }
    function Te(e) {
      var t = Object(ge["a"])(ve[e]);
      return Ee(t);
    }
    function Oe(e) {
      return !(1 !== e && 3 !== e);
    }
    function Ie(e, t) {
      return 1 === e || 2 === e || 1 === t ? "1.5px" : "100%";
    }
    function Ce(e, t, n, r) {
      return 1 === t ? n[e] : 2 === t ? "#aaabb3" : r;
    }
    function Re(e, t, n) {
      var r = e,
        s = t,
        a = [];
      return (
        (a =
          0 === r && 10 === s
            ? _e.colors010
            : 1 === r && 10 === s
            ? _e.colors110
            : 1 === r && 7 === s
            ? _e.colors17
            : 0 === r && 5 === s
            ? _e.colors05
            : _e.colors15),
        n && (a = ke(a)),
        a
      );
    }
    function ke(e) {
      return e.slice().reverse();
    }
    function Ne(e) {
      return 1 === e
        ? {
            en_US: B.survey.new.ces2_question_likert,
            pt_BR: G.survey.new.ces2_question_likert,
            es_ES: q.survey.new.ces2_question_likert
          }
        : { en_US: B.survey.new.ces2_question, pt_BR: G.survey.new.ces2_question, es_ES: q.survey.new.ces2_question };
    }
    function Pe(e) {
      return 5 === e
        ? { en_US: B.survey.textual.very_hard, pt_BR: G.survey.textual.very_hard, es_ES: q.survey.textual.very_hard }
        : {
            en_US: B.survey.textual.extremely_hard,
            pt_BR: G.survey.textual.extremely_hard,
            es_ES: q.survey.textual.extremely_hard
          };
    }
    function Ue(e) {
      return 5 === e
        ? { en_US: B.survey.textual.very_easy, pt_BR: G.survey.textual.very_easy, es_ES: q.survey.textual.very_easy }
        : {
            en_US: B.survey.textual.extremely_easy,
            pt_BR: G.survey.textual.extremely_easy,
            es_ES: q.survey.textual.extremely_easy
          };
    }
    var Le = (function () {
        function e() {
          Object(pe["a"])(this, e);
        }
        return (
          Object(fe["a"])(e, [
            {
              key: "getQuestionColors",
              value: function (e, t, n) {
                return Re(e, t, n);
              }
            },
            {
              key: "getQuestionScale",
              value: function (e, t, n, r, s) {
                return Se(e, t, n, r, s);
              }
            },
            {
              key: "getButtonColor",
              value: function (e, t, n, r) {
                return Ce(e, t, n, r);
              }
            },
            {
              key: "getButtonRoundedValue",
              value: function (e, t) {
                return Ie(e, t);
              }
            },
            {
              key: "isButtonFilled",
              value: function (e) {
                return Oe(e);
              }
            },
            {
              key: "getMultipleChoiceLetters",
              value: function () {
                return xe;
              }
            },
            {
              key: "getOptionOtherLabel",
              value: function (e) {
                return be[e];
              }
            },
            {
              key: "getCommentPlaceholder",
              value: function (e) {
                return ye[e];
              }
            },
            {
              key: "getCes2Question",
              value: function (e) {
                return Ne(e);
              }
            },
            {
              key: "getCes2MinButtonScale",
              value: function (e) {
                return Pe(e);
              }
            },
            {
              key: "getCes2MaxButtonScale",
              value: function (e) {
                return Ue(e);
              }
            }
          ]),
          e
        );
      })(),
      Me = new Le(),
      De = {
        name: "ButtonQuestion",
        props: {
          questionType: Number,
          scale_type: Number,
          min_scale: Number,
          max_scale: Number,
          button_design: Number,
          color_pattern: Number,
          big: Boolean,
          labeled: Boolean,
          reverse: Boolean,
          label_min: String,
          label_max: String,
          custom_color: String,
          current_response: [String, Number],
          onClick: { type: Function, default: function () {} },
          language: { type: String, default: "pt_BR" }
        },
        data: function () {
          return { selected: null, filled: !1, rounded: "1.5px" };
        },
        computed: {
          scales: function () {
            return Me.getQuestionScale(
              this.min_scale,
              this.max_scale,
              this.reverse,
              this.scale_type,
              this.questionType
            );
          },
          labelMinArray: function () {
            return this.label_min.split(" ");
          },
          labelMaxArray: function () {
            return this.label_max.split(" ");
          },
          colorsArray: function () {
            return Me.getQuestionColors(this.min_scale, this.max_scale, this.reverse);
          }
        },
        watch: {
          button_design: function () {
            this.getDesignProperties();
          },
          scale_type: function () {
            this.getDesignProperties();
          },
          min_scale: function () {
            this.getDesignProperties();
          },
          max_scale: function () {
            this.getDesignProperties();
          }
        },
        methods: {
          selectItem: function (e, t, n) {
            try {
              e = Number(e);
            } catch (s) {}
            this.selected = e;
            var r = "ref_" + t;
            this.clearSelectedItems(), n || this.onClick(e), this.changeStyleOnSelect(this.$refs[r][0], t);
          },
          clearSelectedItems: function () {
            for (var e = 0; e < this.scales.length; e++) {
              if (void 0 === this.$refs["ref_" + e]) return;
              void 0 !== this.$refs["ref_" + e][0] &&
                this.$refs["ref_" + e][0].setAttribute("style", this.getButtonStyle(e));
            }
          },
          getButtonStyle: function (e) {
            var t = this.getColor(e),
              n = "";
            return (
              this.filled
                ? ((n += "background: ".concat(t, ";")), (n += "color: #FFFFFF;"))
                : (n += "color: ".concat(t, ";")),
              (n += "border-color: ".concat(t, ";")),
              (n += "border-radius: ".concat(this.rounded, ";")),
              (n += "display: flex; justify-content: center; align-items: center;"),
              n
            );
          },
          getDesignProperties: function () {
            (this.filled = Me.isButtonFilled(this.button_design)),
              (this.rounded = Me.getButtonRoundedValue(this.button_design, this.scale_type)),
              this.clearSelectedItems();
          },
          onHover: function (e, t, n, r) {
            if (!r.target.parentNode.className.includes("number-label")) {
              var s = r.target;
              this.selected !== n && this.changeDesignOnHover(s, e, t);
            }
          },
          changeDesignOnHover: function (e, t, n) {
            (2 !== this.button_design && 4 !== this.button_design) || (t = !t);
            var r = this.getColor(n);
            t
              ? e.setAttribute("style", this.getButtonStyle(n) + ";background: transparent;color: ".concat(r))
              : e.setAttribute("style", this.getButtonStyle(n) + ";background: ".concat(r, ";color: #FFFFFF"));
          },
          changeStyleOnSelect: function (e, t) {
            this.changeDesignOnHover(e, !0, t);
          },
          getColor: function (e) {
            return Me.getButtonColor(e, this.color_pattern, this.colorsArray, this.custom_color);
          },
          selectPartialValue: function () {
            var e = this;
            if (null != this.current_response) {
              var t = -1;
              (t =
                0 === this.scale_type
                  ? this.scales.findIndex(function (t) {
                      return t === Number(e.current_response);
                    })
                  : this.scales.findIndex(function (t) {
                      return t.value === Number(e.current_response);
                    })),
                void 0 !== t && -1 !== t && this.selectItem(Number(this.current_response), t, !0);
            }
          }
        },
        created: function () {
          this.getDesignProperties();
        },
        mounted: function () {
          this.selectPartialValue();
        }
      },
      Qe = De,
      je = (n("774e"), Object(L["a"])(Qe, de, me, !1, null, "155beb7c", null)),
      Ye = je.exports,
      Be = new Le(),
      Ge = {
        components: { ButtonQuestion: Ye, QuestionContainer: le },
        props: {
          selectedQuestion: { type: Object },
          lang: { type: String, default: "pt_BR" },
          nps_type: { type: String },
          onSelectAnswer: { type: Function, default: function () {} },
          color: { type: String },
          status: { type: Number, default: 1 },
          currentAnswer: { type: Object }
        },
        data: function () {
          var e = this;
          return {
            comment: "",
            answer: "",
            rules: {
              max: function (t) {
                return t.length <= 5e3 || e.$t("general.rules.max_length") + " 5000";
              }
            }
          };
        },
        computed: {
          placeholder: function () {
            return Be.getCommentPlaceholder(this.lang);
          }
        },
        methods: {
          selectItem: function () {
            var e = {
              uuid: this.selectedQuestion.item_uuid,
              type: this.selectedQuestion.type,
              answer: { response: this.answer, comment: this.comment }
            };
            this.onSelectAnswer(e);
          },
          checkDetractorAnswer: function () {
            if ("" !== this.answer) {
              var e = Number(this.answer);
              return 10 === e || 9 === e ? "promoter" : 7 === e || 8 === e ? "neutral" : "detractor";
            }
          },
          selectAnswer: function (e) {
            (this.answer = e), this.selectItem(e);
          }
        },
        mounted: function () {
          var e, t, n, r;
          null !== (e = this.currentAnswer) &&
            void 0 !== e &&
            null !== (t = e.answer) &&
            void 0 !== t &&
            t.comment &&
            (this.comment = this.currentAnswer.answer.comment),
            null !=
              (null === (n = this.currentAnswer) || void 0 === n || null === (r = n.answer) || void 0 === r
                ? void 0
                : r.response) && (this.answer = Number(this.currentAnswer.answer.response));
        }
      },
      qe = Ge,
      He = Object(L["a"])(qe, re, se, !1, null, null, null),
      Je = He.exports,
      Fe = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("QuestionContainer", {
          attrs: {
            status: e.status,
            questionText: e.selectedQuestion.question[e.lang],
            isObligatory: e.selectedQuestion.is_obligatory,
            color: e.color
          },
          scopedSlots: e._u([
            {
              key: "buttons",
              fn: function () {
                return [
                  n("button-question", {
                    attrs: {
                      questionType: e.selectedQuestion.type,
                      scale_type: e.selectedQuestion.scale_type,
                      min_scale: e.selectedQuestion.min_scale,
                      max_scale: e.selectedQuestion.max_scale,
                      button_design: e.selectedQuestion.button_design,
                      color_pattern: e.selectedQuestion.color_pattern,
                      custom_color: e.selectedQuestion.custom_color,
                      big: "",
                      labeled: "",
                      label_min: e.selectedQuestion.button_subtitle_min
                        ? e.selectedQuestion.button_subtitle_min[e.lang]
                        : "",
                      label_max: e.selectedQuestion.button_subtitle_max
                        ? e.selectedQuestion.button_subtitle_max[e.lang]
                        : "",
                      onClick: function (t) {
                        return e.selectItem(t);
                      },
                      current_response: e.currentAnswer ? e.currentAnswer.answer.response : null,
                      language: e.lang
                    }
                  })
                ];
              },
              proxy: !0
            },
            {
              key: "comment",
              fn: function () {
                return [
                  n(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "" !== e.answer && e.selectedQuestion.comments_enabled,
                          expression: "answer !== '' && selectedQuestion.comments_enabled"
                        }
                      ],
                      staticClass: "subtitle"
                    },
                    [
                      "" !== e.selectedQuestion.comment_question[e.lang]
                        ? n("div", [e._v(e._s(e.selectedQuestion.comment_question[e.lang]))])
                        : e._e(),
                      n("input", {
                        directives: [{ name: "model", rawName: "v-model", value: e.comment, expression: "comment" }],
                        staticClass: "survey-input",
                        attrs: { autogrow: "", placeholder: e.placeholder, rules: [e.rules.max] },
                        domProps: { value: e.comment },
                        on: {
                          blur: function (t) {
                            return e.selectItem(this.answer);
                          },
                          input: function (t) {
                            t.target.composing || (e.comment = t.target.value);
                          }
                        }
                      })
                    ]
                  )
                ];
              },
              proxy: !0
            }
          ])
        });
      },
      Ve = [],
      Ke = new Le(),
      We = {
        components: { ButtonQuestion: Ye, QuestionContainer: le },
        props: {
          selectedQuestion: { type: Object },
          lang: { type: String, default: "pt_BR" },
          onSelectAnswer: { type: Function, default: function () {} },
          color: { type: String },
          status: { type: Number, default: 1 },
          currentAnswer: { type: Object }
        },
        data: function () {
          var e = this;
          return {
            comment: "",
            answer: "",
            rules: {
              max: function (t) {
                return t.length <= 5e3 || e.$t("general.rules.max_length") + " 5000";
              }
            }
          };
        },
        computed: {
          placeholder: function () {
            return Ke.getCommentPlaceholder(this.lang);
          }
        },
        methods: {
          selectItem: function (e) {
            this.answer = e;
            var t = {
              uuid: this.selectedQuestion.item_uuid,
              type: this.selectedQuestion.type,
              answer: { response: e, comment: this.comment }
            };
            this.onSelectAnswer(t);
          }
        },
        mounted: function () {
          var e, t, n, r;
          null !== (e = this.currentAnswer) &&
            void 0 !== e &&
            null !== (t = e.answer) &&
            void 0 !== t &&
            t.comment &&
            (this.comment = this.currentAnswer.answer.comment),
            null !=
              (null === (n = this.currentAnswer) || void 0 === n || null === (r = n.answer) || void 0 === r
                ? void 0
                : r.response) && (this.answer = Number(this.currentAnswer.answer.response));
        }
      },
      Xe = We,
      ze = Object(L["a"])(Xe, Fe, Ve, !1, null, null, null),
      Ze = ze.exports,
      $e = {
        props: {
          selectedQuestion: Object,
          color: String,
          lang: { type: String, default: "pt_BR" },
          onSelectAnswer: { type: Function, default: function () {} },
          status: { type: Number, default: 1 },
          currentAnswer: { type: Object }
        },
        components: { Nps: Je, Ces: Ze },
        data: function () {
          var e;
          return {
            components:
              ((e = {}),
              Object(ne["a"])(e, R.QUESTION_TYPE.LABEL, "Title"),
              Object(ne["a"])(e, R.QUESTION_TYPE.IMAGE, "Picture"),
              Object(ne["a"])(e, R.QUESTION_TYPE.RATINGS, "rating"),
              Object(ne["a"])(e, R.QUESTION_TYPE.NPS_RELATIONAL, "nps"),
              Object(ne["a"])(e, R.QUESTION_TYPE.NPS_TRANSACTIONAL, "nps"),
              Object(ne["a"])(e, R.QUESTION_TYPE.CSAT, "csat"),
              Object(ne["a"])(e, R.QUESTION_TYPE.CES, "ces"),
              Object(ne["a"])(e, R.QUESTION_TYPE.CES2, "ces"),
              Object(ne["a"])(e, R.QUESTION_TYPE.EMOJI, "emoji"),
              Object(ne["a"])(e, R.QUESTION_TYPE.MULTIPLE_CHOICE, "multiple-choice"),
              Object(ne["a"])(e, R.QUESTION_TYPE.OPEN, "open"),
              Object(ne["a"])(e, R.QUESTION_TYPE.THUMBS, "thumbs"),
              e)
          };
        }
      },
      et = $e,
      tt = Object(L["a"])(et, ee, te, !1, null, null, null),
      nt = tt.exports,
      rt = {
        "http://localhost:8080": "http://localhost:4000",
        "https://dev.track.co": "https://dev-api.track.co",
        "https://hmg.track.co": "https://hmg-api.track.co",
        "https://app.track.co": "https://api.track.co"
      },
      st = "trackwidget-js",
      at = function () {
        var e = document.getElementById(st);
        if (e) {
          var t = new URL(e.src);
          return rt[t.origin];
        }
        return "http://localhost:4000";
      },
      ot = at(),
      it = {
        get: (function () {
          var e = Object(p["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var r, s;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), fetch(ot + t, n);
                    case 2:
                      return (r = e.sent), (e.next = 5), r.json();
                    case 5:
                      return (s = e.sent), (e.next = 8), s.data;
                    case 8:
                      return e.abrupt("return", e.sent);
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        post: (function () {
          var e = Object(p["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var r, s, a;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = {
                          method: "POST",
                          headers: { Accept: "application/json", "Content-Type": "application/json" },
                          body: JSON.stringify(n)
                        }),
                        (e.next = 3),
                        fetch(ot + t, r)
                      );
                    case 3:
                      return (s = e.sent), (e.next = 6), s.json();
                    case 6:
                      return (a = e.sent), (e.next = 9), a.data;
                    case 9:
                      return e.abrupt("return", e.sent);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()
      },
      ut = it,
      ct = (function () {
        function e() {
          Object(pe["a"])(this, e);
        }
        return (
          Object(fe["a"])(e, [
            {
              key: "getOne",
              value: function (e) {
                var t = { headers: { pathname: window.location.pathname } };
                return ut.get("/widget/" + e, t);
              }
            },
            {
              key: "postOpenCounter",
              value: function (e) {
                return ut.post("/widget/show/" + e);
              }
            },
            {
              key: "postPartialAnswer",
              value: function (e, t) {
                return ut.post("/survey/partial/" + e, t);
              }
            },
            {
              key: "postCompleteAnswer",
              value: function (e, t) {
                return ut.post("/survey/" + e, t);
              }
            },
            {
              key: "checkCustomerRecurrence",
              value: function (e, t) {
                return ut.post("/widget/" + e + "/check", t);
              }
            }
          ]),
          e
        );
      })(),
      lt = function (e) {
        localStorage.setItem(u.state.survey.token, JSON.stringify(e));
      },
      dt = function () {
        var e = JSON.parse(localStorage.getItem(u.state.survey.token));
        return e;
      },
      mt = (function () {
        function e() {
          Object(pe["a"])(this, e);
        }
        return (
          Object(fe["a"])(e, [
            {
              key: "getOne",
              value: function (e) {
                var t = new ct();
                return t.getOne(e);
              }
            },
            {
              key: "canShow",
              value: function (e) {
                var t = dt();
                if (!t) return !0;
                if (e.show_widget === R.SHOW_WIDGET.ONCE && t) return !1;
                if (e.show_widget === R.SHOW_WIDGET.RECURRENTLY) {
                  var n = !1;
                  if (t.answered_at) {
                    var r = new Date(t.answered_at);
                    r.setDate(r.getDate() + e.days_after_response), new Date().getTime() >= r.getTime() && (n = !0);
                  }
                  if (t.show_at && !t.answered_at) {
                    var s = new Date(t.show_at);
                    s.setDate(s.getDate() + e.days_after_decline), new Date().getTime() >= s.getTime() && (n = !0);
                  }
                  return n;
                }
                return !0;
              }
            },
            {
              key: "setShowAt",
              value: function () {
                var e = dt();
                e || lt({ show_at: new Date().getTime() });
              }
            },
            {
              key: "setAnsweredAt",
              value: function () {
                var e = dt();
                e && ((e.answered_at = new Date().getTime()), lt(e));
              }
            },
            {
              key: "postOpenCounter",
              value: function () {
                var e = new ct();
                e.postOpenCounter(u.state.survey.token);
              }
            },
            {
              key: "removeNonQuestionItems",
              value: function (e) {
                if (!e.survey.jump_rules_enabled)
                  return (
                    (e.survey.items = e.survey.items.filter(function (e) {
                      return e.type !== R.QUESTION_TYPE.LABEL && e.type !== R.QUESTION_TYPE.IMAGE;
                    })),
                    e
                  );
              }
            },
            {
              key: "setLanguage",
              value: function (e) {
                var t = H(),
                  n = J(t, e);
                return n;
              }
            },
            {
              key: "postPartialAnswer",
              value: (function () {
                var e = Object(p["a"])(
                  regeneratorRuntime.mark(function e(t, n) {
                    var r, s;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (r = new ct()), (e.next = 3), r.postPartialAnswer(t, n);
                            case 3:
                              return (s = e.sent), this.setAnsweredAt(), e.abrupt("return", s);
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t, n) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "postCompleteAnswer",
              value: (function () {
                var e = Object(p["a"])(
                  regeneratorRuntime.mark(function e(t, n) {
                    var r, s;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (r = new ct()), (e.next = 3), r.postCompleteAnswer(t, n);
                            case 3:
                              return (s = e.sent), this.setAnsweredAt(), e.abrupt("return", s);
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t, n) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "checkCustomerRecurrence",
              value: function (e, t) {
                var n = new ct(),
                  r = { customer: t };
                return n.checkCustomerRecurrence(e, r);
              }
            }
          ]),
          e
        );
      })(),
      pt = new mt(),
      ft = {
        components: { DisplayWeb: nt, Button: Y["a"] },
        props: { widget: Object },
        data: function () {
          return {
            answers: [],
            startTime: 0,
            currentIndex: 0,
            interactionUUID: null,
            showThanksMessage: !1,
            showErrorMessage: !1,
            language: "pt_BR",
            defaultMessage: {
              en_US: "Thank you for your feedback!",
              pt_BR: "Agradecemos por seu feedback!",
              es_ES: "¡Gracias por tus comentarios!"
            },
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXgSURBVHgBrVdfaFtlFD/n++5NXVWWoswhqNlAZmVrkw5nEaTpnnwYLAqC+LCmg8GYo0kHAxUxzYNjUEaz+eBwYlMEEQZbCnsY7KF3b/NhvSkT66zQFH03wnTrcr/veM7N0n9b0sx52pDkfn9+5+/vnCC0I3426kLnEFlKosI4BXY4eOO0J0vO7CcDiFhASxUCnNbKevcSpyubXelsBhiBzowlyPK3KAMAsazbYwhBYxwQ4wpsCsHSs/7JKQ21fDVRqDS7WjVbcP1PMy48vWiJcgC0tfEcGWHtPiRVZXX4IgtsLTlAyJ+HFKD/gp/NNrsf4RFWauicUATpBzuI/5D/PTAm/4xzr8yWVNceifKZ+xBJarIpjXZIiyJYV8JBKvze++Voa2CJJXXO8Kd445EABsBK9H2xBG0IKxGLAIxpZQ5p8QJZ1BrKNrg7WEkUVxReF2N2bY7A9mJDH6LRYO+pAjyGPIhr+mX/WEUp+txh92tr447WE/x8GDZa7PqfZYDsKgjBcG3vqSI8gbzqH0krTd+K5Q5YdMiMzvZ+V1gF9j+OaVKznGldISZBni0dg/9Bds+lMxqh4Ijb0VQ7g793eIlSNcxqF1ROIUShrkqxHdDn/RMT28qZyc32/dRbPOug8TQGnGw2GjiRbB2GrXVJLXLqkpQKZ+WOzQjgOf9Emi+bdMFwQS4n/+i5cL3V/v5bHyQ1wAzfDez2KtWCHUqDHpCSCeuTrW2HddhlOXGdiwFsAUxttv/Gnh88BcZzwlib6FOuSUm5paRmZIM1NL3ZJdv8kZwLNiagnCzFhZ6vR6ENcbE2xV4iR6xW0KuYBmONRaPveq0Ob+caZXJgNwcUQQML8Qsr5ZH0U9FWZyMaPM2hYYs5p0ySlTaj4DiANVuFfesZaaMocTGaVyJg0IWAVgBdd4ItEeB3m5292l2qHLh1YL8OrYcqQpuy3T8ai6BejGANxNoIW/1UsLwz4trLbEE8AgGzlBm8sueK1859CtqUDtSTLoZugkj4CtB1aYbd18vWiyLsThNv9z5H+qnwpsOH7/SNP7IsXvKPpRUESU4oYmCUvW49XrGOUJmA0JjDl3quFluBHfpl8KAi6uKSIodjU9REMSYQIfiujZ1HxFWUq1tqMRJaV7e8rkhQ1RbfK/Vc9VqBpv1klKunFDYOtGXFrausuelJmjtrulJDds4dZdAgtgK0+hIFKpyXg6U1cf3odv/QyPy+sY336A7OZFEYQ08tKSlsSXN+Z1YxubWbY5xQ/CwrmztUaCXKZ47xX3y44GBt/+VdV+Ya+4/dfivnEBUj2may8/HYOmBFQw5xiMRANJcdBpxii5mJoIvJPClglcT5imxmsIPMsVtdKXwKlvjANMeodG3PJW+jRUfn+3kQMGlmNekyUUepIX6cf7AWk7EopEyyFbh7f9qRmL7oHz/HMc7JAs8tQvyDcmCLrU1ZJRRp537s+d6DFnK++4as7zi5kBgg0qnAmKkVaxEnlSgfepa8M4lyvY5jPHkQ3l9kbaMccyHy0fnebx5rAGgmx2/355jtxgSYvbVkrBksdJcrYR1X2GqXKO9C6H95TcTnDg3BE8oIJxobwcCGuHKQh5G8gMraCoH8lviKk8UUG+CussX+Wx/m4D/KyK9vZhTZokwe7F7kwjk73j1bbKyvo8y4n45qxzIbWZ6R652ED05BrZbnqaECbchxTjJGkXwZEFCZxTnZiuO7bg6v3fcQVwv4Fr3MzcBm68VuJLk4q2lKKTPtLN/xSglvHclI1rLzkuFoizTA51DOynChCM+Nv3bzofm6aZNI/vx+xiWTY3d16dByqXMJA/+usLbv4u5rZdl3ZOHtAWXsTNhnQxoNB3peoT+5zR8+s+tm6VH3N20S3usXz/Ivgz4eyIt11rL14mcS6aDaSu/VQY1bpMU6h7NrwVT5LR/8Y3c2AxVp+dtJeii/Dafm38krw5Tn0EFpDExiq5obVdVurawJrnMClYJ7tlxIzLbs6yL/Alfcup5OwVnVAAAAAElFTkSuQmCC"
          };
        },
        computed: Object(f["a"])(
          Object(f["a"])(
            {},
            Object(a["c"])({
              customer: function (e) {
                return e.survey.customer;
              },
              interaction: function (e) {
                return e.survey.interaction;
              },
              editMode: function (e) {
                return e.survey.editMode;
              }
            })
          ),
          {},
          {
            currentItem: function () {
              return this.widget.survey.items[this.currentIndex];
            },
            currentAnswer: function () {
              return this.getCurrentAnswer(this.currentIndex);
            },
            userLanguage: function () {
              return F();
            },
            showNext: function () {
              return this.currentIndex !== this.widget.survey.items.length - 1;
            },
            showPrevious: function () {
              return !(!this.currentIndex || this.widget.survey.jump_rules_enabled);
            },
            showSubmit: function () {
              return this.currentIndex === this.widget.survey.items.length - 1;
            },
            colors: function () {
              var e = this.widget.survey.primary_color || "#354052",
                t = "#fff";
              return (
                this.widget.survey_colors || ((t = this.widget.secondary_color), (e = this.widget.primary_color)),
                { primaryColor: e, secondaryColor: t }
              );
            }
          }
        ),
        methods: Object(f["a"])(
          Object(f["a"])({}, Object(a["b"])({ showWidget: "survey/showWidget" })),
          {},
          {
            selectValue: function (e) {
              var t = this.answers.findIndex(function (t) {
                return t.uuid === e.uuid;
              });
              if ((e.answer.comment && (e.answer.comment = e.answer.comment.trim()), -1 === t))
                this.answers = this.answers.concat(e);
              else {
                var n = this.answers.filter(function (e, n) {
                  return n !== t;
                });
                this.answers = n.concat(e);
              }
            },
            handlePreviousItem: function () {
              this.currentIndex--;
            },
            handleNextItem: function () {
              if (this.validateQuestion()) {
                var e = this.widget.survey.items[this.currentIndex],
                  t = this.answers[this.currentIndex];
                if ((this.currentIndex++, e.jump_rules_enabled)) {
                  if (!t || 0 === t.answer.response.length) return void this.currentIndex--;
                  var n = $(t.type, t.answer.response, e.min_scale, e.max_scale),
                    r = e.jump_rules[n].action;
                  if (r === R.JUMP_ACTIONS.SPECIFIC_QUESTION) this.currentIndex = e.jump_rules[n].value;
                  else if (r === R.JUMP_ACTIONS.FINISH_SURVEY)
                    return void this.submitCompleteAnswer(R.INTERACTION_STATUS.DONE);
                }
                this.answers.length && this.submitPartialAnswer(R.INTERACTION_STATUS.PARTIAL);
              }
            },
            submitPartialAnswer: function () {
              var e = this;
              return Object(p["a"])(
                regeneratorRuntime.mark(function t() {
                  var n, r;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e.editMode) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          return (
                            (n = new Date().getTime() - e.startTime),
                            (r = {
                              questions: e.answers,
                              response_time: n > 0 ? n : 0,
                              status: R.INTERACTION_STATUS.PARTIAL,
                              interaction_uuid: e.interactionUUID,
                              language: e.language,
                              customer: e.customer,
                              interaction: e.interaction
                            }),
                            (t.next = 6),
                            pt.postPartialAnswer(e.widget.survey_public_hash, r)
                          );
                        case 6:
                          e.interactionUUID = t.sent;
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            submitCompleteAnswer: function () {
              var e = this;
              return Object(p["a"])(
                regeneratorRuntime.mark(function t() {
                  var n, r, s, a;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (e.validateQuestion()) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          if (!e.editMode) {
                            t.next = 7;
                            break;
                          }
                          return (
                            (e.showThanksMessage = !0),
                            (n = e),
                            setTimeout(function () {
                              n.clearWidget();
                            }, 2e3),
                            t.abrupt("return")
                          );
                        case 7:
                          return (
                            (r = new Date().getTime() - e.startTime),
                            (s = {
                              questions: e.answers,
                              response_time: r > 0 ? r : 0,
                              status: R.INTERACTION_STATUS.DONE,
                              interaction_uuid: e.interactionUUID,
                              language: e.language,
                              customer: e.customer,
                              interaction: e.interaction
                            }),
                            (t.next = 11),
                            pt.postCompleteAnswer(e.widget.survey_public_hash, s)
                          );
                        case 11:
                          (e.showThanksMessage = !0),
                            (a = e),
                            setTimeout(function () {
                              a.showWidget(!1);
                            }, 2e3);
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            getCurrentAnswer: function (e) {
              var t = this.widget.survey.items[e].item_uuid;
              return (
                this.answers.find(function (e) {
                  return e.uuid === t;
                }) || null
              );
            },
            validateQuestion: function () {
              var e = !0,
                t = this.widget.survey.items[this.currentIndex];
              if (
                (((null === this.currentAnswer && (t.is_obligatory || t.jump_rules_enabled)) ||
                  (null !== this.currentAnswer &&
                    (t.is_obligatory || t.jump_rules_enabled) &&
                    ((t.type !== R.QUESTION_TYPE.OPEN && 0 === this.currentAnswer.answer.response.length) ||
                      (t.type === R.QUESTION_TYPE.OPEN && "" === this.currentAnswer.answer.comment)))) &&
                  (e = !1),
                !e)
              ) {
                this.showErrorMessage = !0;
                var n = this;
                setTimeout(function () {
                  n.showErrorMessage = !1;
                }, 3e3);
              }
              return e;
            },
            clearWidget: function () {
              (this.currentIndex = 0),
                (this.answers = []),
                (this.startTime = 0),
                (this.interactionUUID = null),
                (this.showThanksMessage = !1);
            }
          }
        ),
        created: function () {
          (this.startTime = new Date().getTime()), (this.language = pt.setLanguage(this.widget));
        }
      },
      gt = ft,
      _t = (n("ca14"), Object(L["a"])(gt, Q, j, !1, null, "5b680233", null)),
      ht = _t.exports,
      vt = {
        components: { Icon: D, Survey: ht },
        props: { widget: Object },
        data: function () {
          return { consts: R, minimized: !1 };
        },
        computed: {
          colors: function () {
            var e = this.widget.survey.primary_color || "#354052",
              t = "#fff";
            return (
              this.widget.survey_colors || ((t = this.widget.secondary_color), (e = this.widget.primary_color)),
              { primaryColor: e, secondaryColor: t }
            );
          }
        },
        methods: {
          minimizeWidget: function (e) {
            console.log(e), (this.minimized = e);
          }
        },
        created: function () {
          this.minimized = this.widget.minimized;
        }
      },
      bt = vt,
      yt = (n("e337"), Object(L["a"])(bt, _, h, !1, null, "212fe0da", null)),
      wt = yt.exports,
      Et = new mt(),
      xt = {
        components: { Box: wt },
        props: { config: Object },
        data: function () {
          return { widget: null, recurrence: !1 };
        },
        computed: Object(f["a"])(
          {},
          Object(a["c"])({
            customer: function (e) {
              return e.survey.customer;
            },
            token: function (e) {
              return e.survey.token;
            },
            show: function (e) {
              return e.survey.show;
            }
          })
        ),
        methods: Object(f["a"])(
          Object(f["a"])(
            {},
            Object(a["b"])({
              setToken: "survey/setToken",
              setCustomer: "survey/setCustomer",
              showWidget: "survey/showWidget",
              setEditMode: "survey/setEditMode"
            })
          ),
          {},
          {
            getCustomerRecurrence: function () {
              var e = this;
              return Object(p["a"])(
                regeneratorRuntime.mark(function t() {
                  var n;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), Et.checkCustomerRecurrence(e.token, e.customer);
                        case 2:
                          (n = t.sent), (e.recurrence = n.quarantine);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            getWidget: function () {
              var e = this;
              return Object(p["a"])(
                regeneratorRuntime.mark(function t() {
                  var n;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e.recurrence) {
                            t.next = 3;
                            break;
                          }
                          return console.log("[Widget] customer in recurrence rule"), t.abrupt("return");
                        case 3:
                          return (t.next = 5), Et.getOne(e.token);
                        case 5:
                          if (((n = t.sent), (e.widget = n), e.widget)) {
                            t.next = 9;
                            break;
                          }
                          return t.abrupt("return");
                        case 9:
                          e.widget = Et.removeNonQuestionItems(e.widget);
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            getIframeData: function () {
              var e = g();
              e.updateDataListener(), e.getTokenKey();
            },
            getConfigData: function () {
              this.config &&
                (this.setToken(this.config.key),
                this.setCustomer(this.config.customer),
                this.setEditMode(this.config.edit));
            },
            showWidgetByUser: function () {
              return Et.canShow(this.widget);
            },
            setup: function () {
              var e = this;
              return Object(p["a"])(
                regeneratorRuntime.mark(function t() {
                  var n, r, s;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((e.getIframeData(), e.getConfigData(), !e.customer)) {
                            t.next = 5;
                            break;
                          }
                          return (t.next = 5), e.getCustomerRecurrence();
                        case 5:
                          return (t.next = 7), e.getWidget();
                        case 7:
                          if (e.widget) {
                            t.next = 9;
                            break;
                          }
                          return t.abrupt("return");
                        case 9:
                          if (((n = e.showWidgetByUser(e.widget)), n)) {
                            t.next = 12;
                            break;
                          }
                          return t.abrupt("return");
                        case 12:
                          (r = e.widget.delay || 0),
                            (s = e),
                            setTimeout(function () {
                              s.showWidget(n);
                            }, 1e3 * r),
                            Et.setShowAt(),
                            Et.postOpenCounter();
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            }
          }
        ),
        created: function () {
          this.setup();
        }
      },
      St = xt,
      At = Object(L["a"])(St, d, m, !1, null, null, null),
      Tt = At.exports,
      Ot = { name: "App", components: { Widget: Tt }, props: { config: Object } },
      It = Ot,
      Ct = Object(L["a"])(It, c, l, !1, null, null, null),
      Rt = Ct.exports;
    (s["a"].config.productionTip = !1),
      new s["a"]({
        render: function (e) {
          return e(Rt);
        },
        store: u
      }).$mount("#devhook");
  },
  7737: function (e, t, n) {
    "use strict";
    n("5f2e");
  },
  "774e": function (e, t, n) {
    "use strict";
    n("1dc1");
  },
  "7e9e": function (e, t, n) {
    var r = n("24fb");
    (t = r(!1)),
      t.push([
        e.i,
        ".track-footer[data-v-5b680233]{margin-bottom:20px;padding-left:20px;padding-right:20px;display:flex;align-items:center;justify-content:space-between}.track-question[data-v-5b680233]{max-height:500px;overflow:auto;padding:20px}.track-buttons[data-v-5b680233]{display:flex}.track-buttons>button[data-v-5b680233]{margin-right:10px}.track-message[data-v-5b680233]{padding:20px}.error[data-v-5b680233]{color:#ea575f;margin-bottom:10px}",
        ""
      ]),
      (e.exports = t);
  },
  8011: function (e, t, n) {
    var r = n("24fb");
    (t = r(!1)),
      t.push([
        e.i,
        ".question .type[data-v-cb2bf3ce]{background:#f1f1f1;border-radius:20px;color:#878787;text-transform:uppercase;font-weight:600;display:inline-block;padding:3px 10px;margin-bottom:10px;font-size:9px}.obligatory[data-v-cb2bf3ce]{font-size:30px;margin-left:3px;position:absolute}.survey .space[data-v-cb2bf3ce]{height:100px}.question .title[data-v-cb2bf3ce]{font-size:18px;margin-bottom:50px;color:#4f4f4f;line-height:23px}.question .subtitle[data-v-cb2bf3ce]{font-size:14px;color:#9d9d9d;margin-top:50px;line-height:18px}",
        ""
      ]),
      (e.exports = t);
  },
  c84d: function (e, t, n) {
    var r = n("24fb");
    (t = r(!1)),
      t.push([
        e.i,
        ".box[data-v-212fe0da]{background-color:#fff;border-top-left-radius:12px;border-top-right-radius:12px;border:1px solid transparent;box-shadow:0 4px 8px rgba(0,0,0,.25)}.widget-fixed[data-v-212fe0da]{position:fixed;bottom:0;right:35px;max-height:600px;max-width:450px;width:360px;z-index:99999}.widget-embebed[data-v-212fe0da]{position:relative;width:100%;max-height:600px}.icon-close[data-v-212fe0da]{padding:10px;text-align:right}.cursor-pointer[data-v-212fe0da]{cursor:pointer}.widget-minimized[data-v-212fe0da]{all:unset;position:fixed;right:35px;bottom:0;width:56px;height:40px;font-family:sans-serif;z-index:2000;border-top-left-radius:12px;border-top-right-radius:12px;border:1px solid transparent;box-shadow:0 4px 8px rgba(0,0,0,.25);text-align:center;display:flex;align-items:center;justify-content:center}",
        ""
      ]),
      (e.exports = t);
  },
  ca14: function (e, t, n) {
    "use strict";
    n("0cb7");
  },
  e337: function (e, t, n) {
    "use strict";
    n("e53a");
  },
  e53a: function (e, t, n) {
    var r = n("c84d");
    r.__esModule && (r = r.default), "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var s = n("499e").default;
    s("7333abc7", r, !0, { sourceMap: !1, shadowMode: !1 });
  },
  f301: function (e, t, n) {
    var r = n("8011");
    r.__esModule && (r = r.default), "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var s = n("499e").default;
    s("62f6ecc8", r, !0, { sourceMap: !1, shadowMode: !1 });
  }
});
//# sourceMappingURL=app.5efa4d5e.js.map
