"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [9468],
  {
    "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _arrayLikeToArray });
    },
    "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _arrayWithHoles });
    },
    "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function _nonIterableRest() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      __webpack_require__.d(__webpack_exports__, { A: () => _nonIterableRest });
    },
    "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _slicedToArray });
      var arrayWithHoles = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
      var unsupportedIterableToArray = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
        ),
        nonIterableRest = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");
      function _slicedToArray(r, e) {
        return (
          (0, arrayWithHoles.A)(r) ||
          (function _iterableToArrayLimit(r, l) {
            var t = null == r ? null : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
            if (null != t) {
              var e,
                n,
                i,
                u,
                a = [],
                f = !0,
                o = !1;
              try {
                if (((i = (t = t.call(r)).next), 0 === l)) {
                  if (Object(t) !== t) return;
                  f = !1;
                } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
              } catch (r) {
                (o = !0), (n = r);
              } finally {
                try {
                  if (!f && null != t.return && ((u = t.return()), Object(u) !== u)) return;
                } finally {
                  if (o) throw n;
                }
              }
              return a;
            }
          })(r, e) ||
          (0, unsupportedIterableToArray.A)(r, e) ||
          (0, nonIterableRest.A)()
        );
      }
    },
    "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _unsupportedIterableToArray });
      var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
      );
      function _unsupportedIterableToArray(r, a) {
        if (r) {
          if ("string" == typeof r) return (0, _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r, a);
          var t = {}.toString.call(r).slice(8, -1);
          return (
            "Object" === t && r.constructor && (t = r.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(r)
              : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? (0, _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r, a)
              : void 0
          );
        }
      }
    },
    "./src/stories/TxIconFilled.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Filled: () => Filled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => TxIconFilled_stories,
        });
      var slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
        react = __webpack_require__("./node_modules/react/index.js");
      const icon_add = __webpack_require__.p + "static/media/icon-add.e08acffdad5997aab558243c13ab7ed4.svg";
      const icon_address_book =
        __webpack_require__.p + "static/media/icon-address-book.edc21767a27ccfad98d98ef02dc3d562.svg";
      const icon_alarm_clock =
        __webpack_require__.p + "static/media/icon-alarm-clock.6eb9928610d31a398ecd89b0739684b1.svg";
      const icon_align_center =
        __webpack_require__.p + "static/media/icon-align-center.5e64f06b442cf0deeeb49f2d77b111f6.svg";
      const icon_align_justify =
        __webpack_require__.p + "static/media/icon-align-justify.6cb8fa748ac5c4b2ee2ae07ced5cf434.svg";
      const icon_align_left =
        __webpack_require__.p + "static/media/icon-align-left.640eff12b752297a6537d7d256407f54.svg";
      const icon_align_right =
        __webpack_require__.p + "static/media/icon-align-right.79736384835234ab912dda6cabba7c1d.svg";
      const icon_ambulance = __webpack_require__.p + "static/media/icon-ambulance.d0602f802242a55658e9766bc0ad07f1.svg";
      const icon_angle_double_left =
        __webpack_require__.p + "static/media/icon-angle-double-left.f658e507b7ef2e863265d9fcedc45c9e.svg";
      const icon_angle_double_right =
        __webpack_require__.p + "static/media/icon-angle-double-right.3f63ef92344194f07698c9791bb5da21.svg";
      const icon_angle_double_small_left =
        __webpack_require__.p + "static/media/icon-angle-double-small-left.f7999bd20e9d2121d4a20dc47f40a09f.svg";
      const icon_angle_double_small_right =
        __webpack_require__.p + "static/media/icon-angle-double-small-right.f45970f8ff195c84681606d37e027ab3.svg";
      const icon_angle_down =
        __webpack_require__.p + "static/media/icon-angle-down.5078853476a00e4315ee58808c960c6b.svg";
      const icon_angle_left =
        __webpack_require__.p + "static/media/icon-angle-left.ac4bc320fcb7d6144a9efac921183ff3.svg";
      const icon_angle_right =
        __webpack_require__.p + "static/media/icon-angle-right.71adc7dcbf1acac7539b4b3e922784e7.svg";
      const icon_angle_small_down =
        __webpack_require__.p + "static/media/icon-angle-small-down.44fba4306e78b74564d2feb35ecfcb47.svg";
      const icon_angle_small_left =
        __webpack_require__.p + "static/media/icon-angle-small-left.45d2dd1215ad838741145397ffe28900.svg";
      const icon_angle_small_right =
        __webpack_require__.p + "static/media/icon-angle-small-right.709ae9b401872de64519b685a68a6bc5.svg";
      const icon_angle_small_up =
        __webpack_require__.p + "static/media/icon-angle-small-up.a74e62369d9fb473c4da293b5c97b52a.svg";
      const icon_angle_up = __webpack_require__.p + "static/media/icon-angle-up.2d34194cf83c4fdb0a68d1ea7e028a27.svg";
      const icon_apple = __webpack_require__.p + "static/media/icon-apple.0af42327a186c126c239dad896d2bba0.svg";
      const icon_apps_add = __webpack_require__.p + "static/media/icon-apps-add.30511b239c363f3ad6e793f0ebc2fc9f.svg";
      const icon_apps_delete =
        __webpack_require__.p + "static/media/icon-apps-delete.7be6c78ba382910dbe456b33588dd422.svg";
      const icon_apps_sort = __webpack_require__.p + "static/media/icon-apps-sort.a37226a43bf256c2c294956678b1751e.svg";
      const icon_apps = __webpack_require__.p + "static/media/icon-apps.cf26d72f922abdc947e781afc254c22c.svg";
      const icon_archive = __webpack_require__.p + "static/media/icon-archive.6df5f1940b799496184eb16e14ed2448.svg";
      const icon_arrow_down =
        __webpack_require__.p + "static/media/icon-arrow-down.33b9e640de00274d10ab8a55abd8adfb.svg";
      const icon_arrow_from_bottom =
        __webpack_require__.p + "static/media/icon-arrow-from-bottom.dfa39fa1cf1f809fc351f65deae2247e.svg";
      const icon_arrow_left =
        __webpack_require__.p + "static/media/icon-arrow-left.2a257cf28036643d52b04c9950fdc04a.svg";
      const icon_arrow_right =
        __webpack_require__.p + "static/media/icon-arrow-right.5109047b329a9cabfcfcf0d65f05e08b.svg";
      const icon_arrow_small_down =
        __webpack_require__.p + "static/media/icon-arrow-small-down.e4404767d72fad686ac268f81e6120b1.svg";
      const icon_arrow_small_left =
        __webpack_require__.p + "static/media/icon-arrow-small-left.a83d919690e80d6f029ada87d0097e6e.svg";
      const icon_arrow_small_right =
        __webpack_require__.p + "static/media/icon-arrow-small-right.f394f1e66cb53f1e4731dc592b76e47b.svg";
      const icon_arrow_small_up =
        __webpack_require__.p + "static/media/icon-arrow-small-up.baf3e3db53917ce255d2b9b8fb716c3b.svg";
      const icon_arrow_up = __webpack_require__.p + "static/media/icon-arrow-up.f43bacdae264227425eb23033748741f.svg";
      const icon_asterik = __webpack_require__.p + "static/media/icon-asterik.f8526817d208f312765526f77076416d.svg";
      const icon_at = __webpack_require__.p + "static/media/icon-at.630dba37772b0915f69c0b4cd9e60b42.svg";
      const icon_backpack = __webpack_require__.p + "static/media/icon-backpack.bffcc7b35b748b4d35038fcad0550b95.svg";
      const icon_badge = __webpack_require__.p + "static/media/icon-badge.e5d4ee24442383a70c0c02b3037ecced.svg";
      const icon_balloons = __webpack_require__.p + "static/media/icon-balloons.b13a7740aca4547d83273c8a40723704.svg";
      const icon_ban = __webpack_require__.p + "static/media/icon-ban.64108b17c8d98249f75e105314b250df.svg";
      const icon_band_aid = __webpack_require__.p + "static/media/icon-band-aid.5d4b8ae4fa8fa07e55840c511eaba909.svg";
      const icon_bank = __webpack_require__.p + "static/media/icon-bank.bba323a36c7211e2e3d0f028ee294bbb.svg";
      const icon_barber_shop =
        __webpack_require__.p + "static/media/icon-barber-shop.1142809ff8c496dc481c33fd0fc54eb9.svg";
      const icon_baseball = __webpack_require__.p + "static/media/icon-baseball.e67f9156ce0b6af2cb08082eae6dc025.svg";
      const icon_basketball =
        __webpack_require__.p + "static/media/icon-basketball.2082fec8f40179a1de4722d7b5768b13.svg";
      const icon_bed = __webpack_require__.p + "static/media/icon-bed.b0f8642ebacca7faa145ebba519e6643.svg";
      const icon_beer = __webpack_require__.p + "static/media/icon-beer.1a7974c03defac6626dda116283cdb99.svg";
      const icon_bell_ring = __webpack_require__.p + "static/media/icon-bell-ring.85127c5f56fe95c40db67e755fe00880.svg";
      const icon_bell_school =
        __webpack_require__.p + "static/media/icon-bell-school.183c837dd7e577e3309e31d5bf97af64.svg";
      const icon_bell = __webpack_require__.p + "static/media/icon-bell.ddd0cf13535c04ce251d67ca82ad393b.svg";
      const icon_bike = __webpack_require__.p + "static/media/icon-bike.a8bad3b9569cfa783a6cab974c367651.svg";
      const icon_billiard = __webpack_require__.p + "static/media/icon-billiard.793ca623869d079761e520332a5f1aa3.svg";
      const icon_bold = __webpack_require__.p + "static/media/icon-bold.f922a69eabdb9106d3a832ee7459de6c.svg";
      const icon_book_alt = __webpack_require__.p + "static/media/icon-book-alt.dc388823e8b990d9f2439e74401f18d4.svg";
      const icon_book = __webpack_require__.p + "static/media/icon-book.d194c642562c39ca50516fcf5921b525.svg";
      const icon_bookmark = __webpack_require__.p + "static/media/icon-bookmark.593006cd355bff409ce6f95ce7d3f47b.svg";
      const icon_bowling = __webpack_require__.p + "static/media/icon-bowling.41ea55d38bcdc3e8328271a5d193fcec.svg";
      const icon_box_alt = __webpack_require__.p + "static/media/icon-box-alt.a812e47c3268218a43ca2d5d7ea15af8.svg";
      const icon_box = __webpack_require__.p + "static/media/icon-box.7a683884bd43d931008ffae0c912124d.svg";
      const icon_bread_slice =
        __webpack_require__.p + "static/media/icon-bread-slice.89c8daf4b3557ad7742ad0216b7eea64.svg";
      const icon_briefcase = __webpack_require__.p + "static/media/icon-briefcase.a55480632a8195798310c223d4183b7d.svg";
      const icon_broom = __webpack_require__.p + "static/media/icon-broom.8a4e28eab171b2bddb2987bcca8281ff.svg";
      const icon_browser = __webpack_require__.p + "static/media/icon-browser.849a056e59f9a9fcfd58e0bbc24cebc2.svg";
      const icon_brush = __webpack_require__.p + "static/media/icon-brush.6009838a9df92b97f228c4eccb7848c8.svg";
      const icon_bug = __webpack_require__.p + "static/media/icon-bug.0ecc94586e17cce8116c9a573e8b0e56.svg";
      const icon_building = __webpack_require__.p + "static/media/icon-building.49c0101ca96b9239cb8aea3d813b4b20.svg";
      const icon_bulb = __webpack_require__.p + "static/media/icon-bulb.95cfd174ffbacff7f07328e368458aef.svg";
      const icon_butterfly = __webpack_require__.p + "static/media/icon-butterfly.63863d6f55733b021b1c5e5e8e4653a9.svg";
      const icon_cake_birthday =
        __webpack_require__.p + "static/media/icon-cake-birthday.f1cfd2f1b1773a2423926b27a6a95376.svg";
      const icon_cake_wedding =
        __webpack_require__.p + "static/media/icon-cake-wedding.04a4b37dee85ba158e463dfb484c1cb0.svg";
      const icon_calculator =
        __webpack_require__.p + "static/media/icon-calculator.88349e09bfa462ab98a4f9f29f5b449e.svg";
      const icon_calendar = __webpack_require__.p + "static/media/icon-calendar.bf06241a4956b14c16599104d053d4e8.svg";
      const icon_call_history =
        __webpack_require__.p + "static/media/icon-call-history.ff2225905bc5af68fc2fe92f3ff91d41.svg";
      const icon_call_incoming =
        __webpack_require__.p + "static/media/icon-call-incoming.c60170a6426dee609077b27824f98e26.svg";
      const icon_call_missed =
        __webpack_require__.p + "static/media/icon-call-missed.94ea693530686ed1e1e5dfc4e3f046c7.svg";
      const icon_call_outgoing =
        __webpack_require__.p + "static/media/icon-call-outgoing.4fd634b616455260baf411340930ec4b.svg";
      const icon_camera = __webpack_require__.p + "static/media/icon-camera.5f4de98105ebbd46a17d653031b10348.svg";
      const icon_camping = __webpack_require__.p + "static/media/icon-camping.ab1f14afcdca2808c70d3989c9a904f5.svg";
      const icon_car = __webpack_require__.p + "static/media/icon-car.846f5f4398de8a85a8bd4c8628d8b94f.svg";
      const icon_caret_down =
        __webpack_require__.p + "static/media/icon-caret-down.399b7a52ac57872b91fe0733f8921624.svg";
      const icon_caret_left =
        __webpack_require__.p + "static/media/icon-caret-left.d97d4724db645836c565f3e37faa38ad.svg";
      const icon_caret_right =
        __webpack_require__.p + "static/media/icon-caret-right.50c8eb3035bd59141abd185d1173da19.svg";
      const icon_caret_up = __webpack_require__.p + "static/media/icon-caret-up.f767852ff04a8a0f5e6a8ec8fd3928b7.svg";
      const icon_carrot = __webpack_require__.p + "static/media/icon-carrot.def9b56051c0f34ed0f9b19956fca5b1.svg";
      const icon_chart_connected =
        __webpack_require__.p + "static/media/icon-chart-connected.2da0955e261bd6b257d04fe2ee97b0e2.svg";
      const icon_chart_histogram =
        __webpack_require__.p + "static/media/icon-chart-histogram.a96f6cbe024c5db4b7f4fccae0325928.svg";
      const icon_chart_network =
        __webpack_require__.p + "static/media/icon-chart-network.c063f77a420cfbd7146eae4248b94d59.svg";
      const icon_chart_pie_alt =
        __webpack_require__.p + "static/media/icon-chart-pie-alt.5d2b6b6d497e6e08da219f5e9b6fa151.svg";
      const icon_chart_pie = __webpack_require__.p + "static/media/icon-chart-pie.ce3856f71fed0053200956e155518179.svg";
      const icon_chart_pyramid =
        __webpack_require__.p + "static/media/icon-chart-pyramid.c69042214f4cb267b4f490e8a5baff40.svg";
      const icon_chart_set_theory =
        __webpack_require__.p + "static/media/icon-chart-set-theory.70f398fb16907e438b33d56af15aeddf.svg";
      const icon_chart_tree =
        __webpack_require__.p + "static/media/icon-chart-tree.0daa374cc7a736067cb65f4f56ba9c55.svg";
      const icon_chat_arrow_down =
        __webpack_require__.p + "static/media/icon-chat-arrow-down.9a9e79882f4c3243bf22fe24a47d6a70.svg";
      const icon_chat_arrow_grow =
        __webpack_require__.p + "static/media/icon-chat-arrow-grow.1f504802a0022232b8b02796860c23f3.svg";
      const icon_check = __webpack_require__.p + "static/media/icon-check.c801d3cc0eb5d7385d1a9f560fa1bc37.svg";
      const icon_checkbox = __webpack_require__.p + "static/media/icon-checkbox.801a042f1e049a975bcafd2797b94f82.svg";
      const icon_cheese = __webpack_require__.p + "static/media/icon-cheese.45815491645e4798bb3ea0e9442b88e2.svg";
      const icon_chess_piece =
        __webpack_require__.p + "static/media/icon-chess-piece.29c6a2095e37f4911483feed4d00dbfa.svg";
      const icon_child_head =
        __webpack_require__.p + "static/media/icon-child-head.61edc27b152edcca19fc0e9ec8bc5d62.svg";
      const icon_circle_small =
        __webpack_require__.p + "static/media/icon-circle-small.a932131fa3cfbadf23e2e55429f98bdd.svg";
      const icon_circle = __webpack_require__.p + "static/media/icon-circle.738719aa3893298b94aca7fec48d704d.svg";
      const icon_clip = __webpack_require__.p + "static/media/icon-clip.678004622be8363b0f366bd1b67b3ebb.svg";
      const icon_clock = __webpack_require__.p + "static/media/icon-clock.85fef692b44afdf129d20d8816280567.svg";
      const icon_cloud_check =
        __webpack_require__.p + "static/media/icon-cloud-check.9b46bb5a93ca98dacd89a7bde2f3cdd5.svg";
      const icon_cloud_disabled =
        __webpack_require__.p + "static/media/icon-cloud-disabled.edde67c1f8d11c8891b125474647b327.svg";
      const icon_cloud_download =
        __webpack_require__.p + "static/media/icon-cloud-download.af684b9912192f05a3b75d82e1b5d1b4.svg";
      const icon_cloud_share =
        __webpack_require__.p + "static/media/icon-cloud-share.0e51951e3fe64ecbe40757d23a347585.svg";
      const icon_cloud_upload =
        __webpack_require__.p + "static/media/icon-cloud-upload.a37dabc719727c8634dd6ea4cadf1216.svg";
      const icon_cloud = __webpack_require__.p + "static/media/icon-cloud.f473c236014bf66d9ccd16a76826dc91.svg";
      const icon_clouds = __webpack_require__.p + "static/media/icon-clouds.3b64ce985b34c83e8fd9bdae5021b1aa.svg";
      const icon_cocktail = __webpack_require__.p + "static/media/icon-cocktail.f48b3c4de5f738c2e307544934571bab.svg";
      const icon_coffee = __webpack_require__.p + "static/media/icon-coffee.9695562db1dd81f6cfe8f44cd7a7889f.svg";
      const icon_comment_alt =
        __webpack_require__.p + "static/media/icon-comment-alt.d722f55a7c3305f4a6340d443e9d7c40.svg";
      const icon_comment_check =
        __webpack_require__.p + "static/media/icon-comment-check.9bfa57d98edfff166bb85990c702eede.svg";
      const icon_comment_heart =
        __webpack_require__.p + "static/media/icon-comment-heart.01a41c520b13e21e5966553159b1bfae.svg";
      const icon_comment_info =
        __webpack_require__.p + "static/media/icon-comment-info.b2e179f437ceabcec92bb3c3efca770d.svg";
      const icon_comment_user =
        __webpack_require__.p + "static/media/icon-comment-user.a5983ccee25c10cd00af181e394a11d6.svg";
      const icon_comment = __webpack_require__.p + "static/media/icon-comment.08ee68045c1ef24180951653f13ef3c0.svg";
      const icon_comments = __webpack_require__.p + "static/media/icon-comments.99319de8180bb5cb2dc2b94f21667bd3.svg";
      const icon_compress_alt =
        __webpack_require__.p + "static/media/icon-compress-alt.8f3f16abec45c70ba08dfbf80f77d872.svg";
      const icon_compress = __webpack_require__.p + "static/media/icon-compress.0ef4adcf87f3ba4012a462976ace4fb8.svg";
      const icon_computer = __webpack_require__.p + "static/media/icon-computer.545a45f4731bdfb7c38efff114737122.svg";
      const icon_confetti = __webpack_require__.p + "static/media/icon-confetti.b2a7cc5fe42bba6821720e3b40fa7956.svg";
      const icon_cookie = __webpack_require__.p + "static/media/icon-cookie.58d42cdb2c033febbc048d7bec51967a.svg";
      const icon_copy_alt = __webpack_require__.p + "static/media/icon-copy-alt.6a977cd62838f82ded1d802435ba3154.svg";
      const icon_copy = __webpack_require__.p + "static/media/icon-copy.63e37c4c31bc70bb9da5e7354956ef2f.svg";
      const icon_copyright = __webpack_require__.p + "static/media/icon-copyright.cfb73c1b908625267e66a734f9c81827.svg";
      const icon_cow = __webpack_require__.p + "static/media/icon-cow.83cf179e7bf21f3b3ff9bd43f4f6b3c9.svg";
      const icon_cream = __webpack_require__.p + "static/media/icon-cream.1082c35cde00b85ec2ccd7b6d0b4b39c.svg";
      const icon_credit_card =
        __webpack_require__.p + "static/media/icon-credit-card.027bd9ba628851e1755a16dd9592ee29.svg";
      const icon_croissant = __webpack_require__.p + "static/media/icon-croissant.f14bf8ea3fded1c0615f303918d60ed6.svg";
      const icon_cross_circle =
        __webpack_require__.p + "static/media/icon-cross-circle.010cd60301386c1eab0c4845db2d3491.svg";
      const icon_cross_small =
        __webpack_require__.p + "static/media/icon-cross-small.ba7a650ce5f4d149d04712660af58512.svg";
      const icon_cross = __webpack_require__.p + "static/media/icon-cross.00425a5457ebb9b741af6ff3e4be44a7.svg";
      const icon_crown = __webpack_require__.p + "static/media/icon-crown.746bd372cdd750ead631f9029d020cb9.svg";
      const icon_cube = __webpack_require__.p + "static/media/icon-cube.eab7319908351ca8e4686d6efd1e06d5.svg";
      const icon_cupcake = __webpack_require__.p + "static/media/icon-cupcake.04e890e5c44a82330f947d476ba52241.svg";
      const icon_cursor_finger =
        __webpack_require__.p + "static/media/icon-cursor-finger.54bc7eaac95671b97d85444df23a1d2b.svg";
      const icon_cursor_plus =
        __webpack_require__.p + "static/media/icon-cursor-plus.5e6e881648e1323016e87e8c01d348dd.svg";
      const icon_cursor_text_alt =
        __webpack_require__.p + "static/media/icon-cursor-text-alt.ea169c6e6f409130644a22630cd08d16.svg";
      const icon_cursor_text =
        __webpack_require__.p + "static/media/icon-cursor-text.bcea24db52c03f6a33e684ba60ca1c8f.svg";
      const icon_cursor = __webpack_require__.p + "static/media/icon-cursor.b33a71b5c9e22bde9aa8e098568813a8.svg";
      const icon_dart = __webpack_require__.p + "static/media/icon-dart.3f04335898433b464f9a955af15944a9.svg";
      const icon_dashboard = __webpack_require__.p + "static/media/icon-dashboard.9dda2a0c486685ef5c40a9c64a36ddaa.svg";
      const icon_data_transfer =
        __webpack_require__.p + "static/media/icon-data-transfer.cc5115209aceb79a1ce275b83179ae51.svg";
      const icon_database = __webpack_require__.p + "static/media/icon-database.c95faf9d4bd99d3c0e1efde903bb832b.svg";
      const icon_delete = __webpack_require__.p + "static/media/icon-delete.a1fb7d4e0b78e00041e850a943ff8936.svg";
      const icon_diamond = __webpack_require__.p + "static/media/icon-diamond.39ba76c0bae06df4dd4cc7014e2b063e.svg";
      const icon_dice = __webpack_require__.p + "static/media/icon-dice.81b172ccb42a4e405d7504b03f1ddf8c.svg";
      const icon_diploma = __webpack_require__.p + "static/media/icon-diploma.2ad51a855e3ec59cce3e3c8cc1e9c27b.svg";
      const icon_disco_ball =
        __webpack_require__.p + "static/media/icon-disco-ball.d5e4e387304516fafe933367c8ee46e2.svg";
      const icon_disk = __webpack_require__.p + "static/media/icon-disk.3ce59392f507ffbd7da8b2beaad2386c.svg";
      const icon_doctor = __webpack_require__.p + "static/media/icon-doctor.44db2072decf6b3bd79fac2759ef9643.svg";
      const icon_document_signed =
        __webpack_require__.p + "static/media/icon-document-signed.9a98f08583330b05eebff65089da439e.svg";
      const icon_document = __webpack_require__.p + "static/media/icon-document.168d3c19d1ec2bf73e426f8218a4d2f7.svg";
      const icon_dollar = __webpack_require__.p + "static/media/icon-dollar.553098a80aa991b0ed810be2b6b56fe6.svg";
      const icon_download = __webpack_require__.p + "static/media/icon-download.58f8be9c3f3b3df8725037d50ba07175.svg";
      const icon_drink_alt = __webpack_require__.p + "static/media/icon-drink-alt.05d8b603ef796e170ae9ae72a3c52ff4.svg";
      const icon_drumstick = __webpack_require__.p + "static/media/icon-drumstick.bf796299fde36ea8a73096054a9c6994.svg";
      const icon_duplicate = __webpack_require__.p + "static/media/icon-duplicate.e29c0fb4873eef6f175f5a181846bba7.svg";
      const icon_e_learning =
        __webpack_require__.p + "static/media/icon-e-learning.3646c7fe35af1b4172fc4d3e5c1abbcf.svg";
      const icon_earnings = __webpack_require__.p + "static/media/icon-earnings.c831a349ea26b59f638e1b4cf6fd9fb9.svg";
      const icon_edit_alt = __webpack_require__.p + "static/media/icon-edit-alt.1d488ed7834c7730e30391a170ce50ef.svg";
      const icon_edit = __webpack_require__.p + "static/media/icon-edit.cc02b032f94fb41ee7bae98b3cb1a1be.svg";
      const icon_envelope_ban =
        __webpack_require__.p + "static/media/icon-envelope-ban.7ef491ba9a034b8537c7b8d80a8203ee.svg";
      const icon_envelope_download =
        __webpack_require__.p + "static/media/icon-envelope-download.5d69f24b61b959bd6ebe6ea2ac7caad7.svg";
      const icon_envelope_marker =
        __webpack_require__.p + "static/media/icon-envelope-marker.d672520af7227172cb53af9c8e01e34f.svg";
      const icon_envelope_open =
        __webpack_require__.p + "static/media/icon-envelope-open.339b65c97c2f94619b18b775d3272c3f.svg";
      const icon_envelope_plus =
        __webpack_require__.p + "static/media/icon-envelope-plus.99987a26f20707650d496eec56383ed4.svg";
      const icon_envelope = __webpack_require__.p + "static/media/icon-envelope.5728ffa4620bc32216aaec4c6a45c60c.svg";
      const icon_euro = __webpack_require__.p + "static/media/icon-euro.e947351f666c5c413e47deddb25cb73b.svg";
      const icon_exclamation =
        __webpack_require__.p + "static/media/icon-exclamation.ab67fe2adc59734202a92d7945910a51.svg";
      const icon_expand = __webpack_require__.p + "static/media/icon-expand.e0850038fae3079ee9041ec2718bf504.svg";
      const icon_eye_crossed =
        __webpack_require__.p + "static/media/icon-eye-crossed.397cf9674dcc4db0e137a2b457ac9d8d.svg";
      const icon_eye_dropper =
        __webpack_require__.p + "static/media/icon-eye-dropper.372842fbcefa5a446b1b549337635ffd.svg";
      const icon_eye = __webpack_require__.p + "static/media/icon-eye.89f421e827a09bfeeacb05f5fb443673.svg";
      const icon_feather = __webpack_require__.p + "static/media/icon-feather.692607f8016c2bae6f13c0f4ee8258aa.svg";
      const icon_ferris_wheel =
        __webpack_require__.p + "static/media/icon-ferris-wheel.9fe97030a85a828399b00a3e2cca19b5.svg";
      const icon_file_add = __webpack_require__.p + "static/media/icon-file-add.6b402018602495c2ef26d25d2d060bad.svg";
      const icon_file_ai = __webpack_require__.p + "static/media/icon-file-ai.a274f25dfbc67f75f84c21a7d5479bad.svg";
      const icon_file_check =
        __webpack_require__.p + "static/media/icon-file-check.a1939e41cd1f2078e0197237263234b3.svg";
      const icon_file_delete =
        __webpack_require__.p + "static/media/icon-file-delete.5d43b2363a735f42fe32e57885c92c84.svg";
      const icon_file_eps = __webpack_require__.p + "static/media/icon-file-eps.e187bb18927ae5a85e0bb35238058ce8.svg";
      const icon_file_gif = __webpack_require__.p + "static/media/icon-file-gif.f411da9e04c813f2744f78924777f1cb.svg";
      const icon_file_music =
        __webpack_require__.p + "static/media/icon-file-music.504463a32338cd2005da9f527f793c33.svg";
      const icon_file_psd = __webpack_require__.p + "static/media/icon-file-psd.7e71b3a7b169c4265251b7872b85c8d0.svg";
      const icon_file = __webpack_require__.p + "static/media/icon-file.08d9e39f35660a218f10f279205d4706.svg";
      const icon_fill = __webpack_require__.p + "static/media/icon-fill.fd8b081f727cd597d7c430e88e3a0adf.svg";
      const icon_film = __webpack_require__.p + "static/media/icon-film.64ba43547967500e46b410069fdcf948.svg";
      const icon_filter = __webpack_require__.p + "static/media/icon-filter.afef82de4f2923ccbba677201f181e97.svg";
      const icon_fingerprint =
        __webpack_require__.p + "static/media/icon-fingerprint.61fd3be3eec0c2118e4095cbea947840.svg";
      const icon_fish = __webpack_require__.p + "static/media/icon-fish.d75ea25bc0ae088fd15c0c7532c64d2d.svg";
      const icon_flag = __webpack_require__.p + "static/media/icon-flag.00c09409f611f5e9c02caf033cbcd395.svg";
      const icon_flame = __webpack_require__.p + "static/media/icon-flame.64f9ce6b32f6878572d3a4a3a14d2aa7.svg";
      const icon_flip_horizontal =
        __webpack_require__.p + "static/media/icon-flip-horizontal.095101b54d71ec23fcb0fc1426420dc8.svg";
      const icon_flower_bouquet =
        __webpack_require__.p + "static/media/icon-flower-bouquet.0f75e7f04aeffefb41c8052d781c36af.svg";
      const icon_flower_tulip =
        __webpack_require__.p + "static/media/icon-flower-tulip.8b2da731458a14d2021a5710eb5cfd94.svg";
      const icon_flower = __webpack_require__.p + "static/media/icon-flower.0d10c7fb9754ad996acd1a2e256c013f.svg";
      const icon_folder_add =
        __webpack_require__.p + "static/media/icon-folder-add.00e5f1b81c6072a102f701f16348f383.svg";
      const icon_folder = __webpack_require__.p + "static/media/icon-folder.d182110cc9ddf0acc339dd2c038fd4a3.svg";
      const icon_following = __webpack_require__.p + "static/media/icon-following.73e11dfa936b872a0d0f0dd41ae00fb3.svg";
      const icon_football = __webpack_require__.p + "static/media/icon-football.bb05fa2adba865c19304c5265f85dd2a.svg";
      const icon_form = __webpack_require__.p + "static/media/icon-form.a045caee948f0a527ae7d001b45ad64e.svg";
      const icon_forward = __webpack_require__.p + "static/media/icon-forward.41c76db0369e04c82239137cd5fd61cd.svg";
      const icon_fox = __webpack_require__.p + "static/media/icon-fox.f7e2c627dc571d538772f46be2fba64f.svg";
      const icon_frown = __webpack_require__.p + "static/media/icon-frown.0203c1be1a1a9da16ee373d18988c76a.svg";
      const icon_ftp = __webpack_require__.p + "static/media/icon-ftp.90cd32a464ffb6849f801b865bbdd169.svg";
      const icon_gallery = __webpack_require__.p + "static/media/icon-gallery.1c760944f947396b51597d944af7ad94.svg";
      const icon_gamepad = __webpack_require__.p + "static/media/icon-gamepad.fab31d76d5e16ed1f39b7adb41ac7a39.svg";
      const icon_gas_pump = __webpack_require__.p + "static/media/icon-gas-pump.ae3356f5dfb2433108db713cdd6ce4c7.svg";
      const icon_gem = __webpack_require__.p + "static/media/icon-gem.f17a2449fdb8c120665eefdcc6ae01ec.svg";
      const icon_gift = __webpack_require__.p + "static/media/icon-gift.63705f82653e831624e87538cd4876a4.svg";
      const icon_glass_cheers =
        __webpack_require__.p + "static/media/icon-glass-cheers.6b04185ceac2d7756ea0d603e51bf45d.svg";
      const icon_glasses = __webpack_require__.p + "static/media/icon-glasses.0eedd051a0b60b1300e4eb91614e950c.svg";
      const icon_globe_alt = __webpack_require__.p + "static/media/icon-globe-alt.dfb8558ab6c45bea3070d99a03a02a2f.svg";
      const icon_globe = __webpack_require__.p + "static/media/icon-globe.b68ab4378ede21b5bc997448df2f5c89.svg";
      const icon_golf = __webpack_require__.p + "static/media/icon-golf.64ca1b0ed0ae7f2681c23db686d5df96.svg";
      const icon_graduation_cap =
        __webpack_require__.p + "static/media/icon-graduation-cap.33aa80c62696bc6d01d8030b62af937c.svg";
      const icon_graphic_tablet =
        __webpack_require__.p + "static/media/icon-graphic-tablet.03acf1e9182c60e027d09ae046b363a9.svg";
      const icon_grid_alt = __webpack_require__.p + "static/media/icon-grid-alt.69c1fdca7004b24d928cab3c2b087e94.svg";
      const icon_grid = __webpack_require__.p + "static/media/icon-grid.0cc47422be0451c3aa4538de3f955cdd.svg";
      const icon_guitar = __webpack_require__.p + "static/media/icon-guitar.db79453612afc4e0a515f184292e0fbc.svg";
      const icon_gym = __webpack_require__.p + "static/media/icon-gym.0f5d6c3e14c86af72c2a4888a5b1891e.svg";
      const icon_hamburger = __webpack_require__.p + "static/media/icon-hamburger.638dc76aa42a4a41329c2b6ea75f73cb.svg";
      const icon_hand_holding_heart =
        __webpack_require__.p + "static/media/icon-hand-holding-heart.0fc64464ea7c345dad2edbda800d7094.svg";
      const icon_hastag = __webpack_require__.p + "static/media/icon-hastag.1e46bff6ac329ea0537539165ccc8abd.svg";
      const icon_hat_birthday =
        __webpack_require__.p + "static/media/icon-hat-birthday.6b1666dbe057982a76aded6a51c0a8cf.svg";
      const icon_head_side_thinking =
        __webpack_require__.p + "static/media/icon-head-side-thinking.beaa42e472675dd695bbab798e737ccf.svg";
      const icon_headphones =
        __webpack_require__.p + "static/media/icon-headphones.fb30ea1a8a5d38cdc4c979520682d74f.svg";
      const icon_headset = __webpack_require__.p + "static/media/icon-headset.0a65f673bad95a4a4a507a7c664279ea.svg";
      const icon_heart_arrow =
        __webpack_require__.p + "static/media/icon-heart-arrow.5169250439dd4d59723d6b506a02a21a.svg";
      const icon_heart = __webpack_require__.p + "static/media/icon-heart.dfe5efb93ef3b043e7f55af43ab77ea1.svg";
      const icon_home_location_alt =
        __webpack_require__.p + "static/media/icon-home-location-alt.3dbdacc2dea62d8f298363c017fbf4ac.svg";
      const icon_home_location =
        __webpack_require__.p + "static/media/icon-home-location.3f70270b09c0c32e47ab8573493e4e1c.svg";
      const icon_home = __webpack_require__.p + "static/media/icon-home.e600e61384c4124278337cadd6e78818.svg";
      const icon_hourglass_end =
        __webpack_require__.p + "static/media/icon-hourglass-end.16b55bdf0464b40e91f5f6cd167d7c17.svg";
      const icon_hourglass = __webpack_require__.p + "static/media/icon-hourglass.8b60dfdd276b54cad165cf44a87d1fd0.svg";
      const icon_ice_cream = __webpack_require__.p + "static/media/icon-ice-cream.126d95ca6b3fe40d26a21ef8673207c3.svg";
      const icon_ice_skate = __webpack_require__.p + "static/media/icon-ice-skate.382d05820d26d764afb1b1c2ffeb5422.svg";
      const icon_id_badge = __webpack_require__.p + "static/media/icon-id-badge.d2cfeb44dce4685a7588efa5351623a2.svg";
      const icon_inbox = __webpack_require__.p + "static/media/icon-inbox.6bacbdf97a2dea1220e6f5c6e0b6122c.svg";
      const icon_incognito = __webpack_require__.p + "static/media/icon-incognito.8613ca479ae66cabfd2c5e189f4b31de.svg";
      const icon_indent = __webpack_require__.p + "static/media/icon-indent.ddce1c1285a448a9e210a02b7480b343.svg";
      const icon_infinity = __webpack_require__.p + "static/media/icon-infinity.f3744a823694d05fe1fc9995b222b1c1.svg";
      const icon_info = __webpack_require__.p + "static/media/icon-info.97165744429ad185f24cc00bf5d64b0a.svg";
      const icon_interactive =
        __webpack_require__.p + "static/media/icon-interactive.978158e4d76c33baaf34237cbc57d5be.svg";
      const icon_interlining =
        __webpack_require__.p + "static/media/icon-interlining.900fc91a7a72d2d1502daa618fc7b48d.svg";
      const icon_interrogation =
        __webpack_require__.p + "static/media/icon-interrogation.0d0be838fd15f3953aeb1bd2a1a0015f.svg";
      const icon_italic = __webpack_require__.p + "static/media/icon-italic.082ef68c186f73fd5157e081a9ac7afa.svg";
      const icon_jpg = __webpack_require__.p + "static/media/icon-jpg.023a3e7ecc063438711766f20e405831.svg";
      const icon_key = __webpack_require__.p + "static/media/icon-key.6cc16d22410e4e46bd2ae7901baae0cf.svg";
      const icon_keyboard = __webpack_require__.p + "static/media/icon-keyboard.f0e944938d3d82492050450d5b78f622.svg";
      const icon_kite = __webpack_require__.p + "static/media/icon-kite.00d257db980f556d49a6e3dccee7effd.svg";
      const icon_label = __webpack_require__.p + "static/media/icon-label.83461dadb6df5fadcd7ff3c053dd3c50.svg";
      const icon_laptop = __webpack_require__.p + "static/media/icon-laptop.2c2e963afff1d0d619fcac4c39bb0f77.svg";
      const icon_lasso = __webpack_require__.p + "static/media/icon-lasso.78b4a6e3c848c81da45ee4b72650ab14.svg";
      const icon_laugh = __webpack_require__.p + "static/media/icon-laugh.63c57932e7b90f2db68af95678a9a60a.svg";
      const icon_layers = __webpack_require__.p + "static/media/icon-layers.f8c7bb97bbf96aecb510487facc0ca44.svg";
      const icon_layout_fluid =
        __webpack_require__.p + "static/media/icon-layout-fluid.65126156058b1e806fbb127889064a45.svg";
      const icon_leaf = __webpack_require__.p + "static/media/icon-leaf.53c60ab804109ca62902492dd0f89562.svg";
      const icon_letter_case =
        __webpack_require__.p + "static/media/icon-letter-case.1c463de537f7bccdbea107d79142794f.svg";
      const icon_life_ring = __webpack_require__.p + "static/media/icon-life-ring.8dddfbce8b05885998a551bebdd3c2af.svg";
      const icon_line_width =
        __webpack_require__.p + "static/media/icon-line-width.3efeec179fce54e1f28da3d34a2d7341.svg";
      const icon_link = __webpack_require__.p + "static/media/icon-link.3151d7d8939e9d8c7caea26b973b80d4.svg";
      const icon_lipstick = __webpack_require__.p + "static/media/icon-lipstick.76e13a8bfd4356fee84ddc8e6ede58c9.svg";
      const icon_list_check =
        __webpack_require__.p + "static/media/icon-list-check.d6ec7e4e6a47fc1382d9e5da22b573a2.svg";
      const icon_list = __webpack_require__.p + "static/media/icon-list.d6187894112d2d0a675375b89dcd26eb.svg";
      const icon_location_alt =
        __webpack_require__.p + "static/media/icon-location-alt.2425fcdc9df1298eb748d48859c427a9.svg";
      const icon_lock_alt = __webpack_require__.p + "static/media/icon-lock-alt.ced329fd12b06255603eb46555c20041.svg";
      const icon_lock = __webpack_require__.p + "static/media/icon-lock.0dd79b3bd39f06460317a1c0f693c20a.svg";
      const icon_luggage_rolling =
        __webpack_require__.p + "static/media/icon-luggage-rolling.578c723cf8d4a5434c14bea2fc1ff18d.svg";
      const icon_magic_wand =
        __webpack_require__.p + "static/media/icon-magic-wand.c0e82e2964ba6c8f863cf7f7fe40af3f.svg";
      const icon_makeup_brush =
        __webpack_require__.p + "static/media/icon-makeup-brush.043cc6b890c1eb39bfdb31bb6b86a09c.svg";
      const icon_man_head = __webpack_require__.p + "static/media/icon-man-head.f11a3afb6c5da67829adc6677993276f.svg";
      const icon_map_marker_cross =
        __webpack_require__.p + "static/media/icon-map-marker-cross.1630797a1b01e13dd1e2dec1db353b88.svg";
      const icon_map_marker_home =
        __webpack_require__.p + "static/media/icon-map-marker-home.2abeab8dae388a94d4e8a08b2838ea5d.svg";
      const icon_map_marker_minus =
        __webpack_require__.p + "static/media/icon-map-marker-minus.de8a3c156f3b323c9065a9645547c291.svg";
      const icon_map_marker_plus =
        __webpack_require__.p + "static/media/icon-map-marker-plus.310ddfabb476b67f491c70c3986ca1a6.svg";
      const icon_map_marker =
        __webpack_require__.p + "static/media/icon-map-marker.afb8023bc76b1e864ab54aeb1919170c.svg";
      const icon_map = __webpack_require__.p + "static/media/icon-map.20497a0e7837173108ea14bb880b0ef7.svg";
      const icon_marker_time =
        __webpack_require__.p + "static/media/icon-marker-time.9de3d831fc51daa85dbc79ebf3e8f54e.svg";
      const icon_marker = __webpack_require__.p + "static/media/icon-marker.905e58b231de3ac7378d91fe9383096a.svg";
      const icon_mars_double =
        __webpack_require__.p + "static/media/icon-mars-double.279433c0d59ef5c0ac6c8bf7f24056c2.svg";
      const icon_mars = __webpack_require__.p + "static/media/icon-mars.155bafe9dcff1ba99bf9b9a2d842338c.svg";
      const icon_mask_carnival =
        __webpack_require__.p + "static/media/icon-mask-carnival.2adc97f6ffcb6c37104bcb6a8822ad3a.svg";
      const icon_medicine = __webpack_require__.p + "static/media/icon-medicine.77d9e87df9daf54cdc332a735ab5e625.svg";
      const icon_megaphone = __webpack_require__.p + "static/media/icon-megaphone.79a0ea0710b05064885cb19ad9b6a756.svg";
      const icon_meh = __webpack_require__.p + "static/media/icon-meh.d0f9d5d8950624600482fc3e6d52a782.svg";
      const icon_menu_burger =
        __webpack_require__.p + "static/media/icon-menu-burger.3ff6015e9c0dfc748ea254821df93127.svg";
      const icon_menu_dots_vertical =
        __webpack_require__.p + "static/media/icon-menu-dots-vertical.5d53ab9936cd9d40b6090e24d2b35778.svg";
      const icon_menu_dots = __webpack_require__.p + "static/media/icon-menu-dots.1be7a0d79354b6c6568e174f1b1b0b72.svg";
      const icon_microphone_alt =
        __webpack_require__.p + "static/media/icon-microphone-alt.afbfc9a58e033cfb5a8af768ff62f687.svg";
      const icon_microphone =
        __webpack_require__.p + "static/media/icon-microphone.3ccec9f8406c490b519817a0c5a7a314.svg";
      const icon_minus_small =
        __webpack_require__.p + "static/media/icon-minus-small.09fbf98577520e62c740b044d4a339fd.svg";
      const icon_minus = __webpack_require__.p + "static/media/icon-minus.9783b83809f706cec21f98bb3a05bbcd.svg";
      const icon_mobile = __webpack_require__.p + "static/media/icon-mobile.bf4e7efeea082c997314c0c7d4ea5f4f.svg";
      const icon_mode_landscape =
        __webpack_require__.p + "static/media/icon-mode-landscape.a9d5e07a2692f7596bd261dba8cd5422.svg";
      const icon_mode_portrait =
        __webpack_require__.p + "static/media/icon-mode-portrait.4e3dfb76ce8456d5ea8c3d8704b30e04.svg";
      const icon_money = __webpack_require__.p + "static/media/icon-money.3f6295d3047e227acd261f5569459abf.svg";
      const icon_moon = __webpack_require__.p + "static/media/icon-moon.824a444b59137c42bea744e0c79a4491.svg";
      const icon_mountains = __webpack_require__.p + "static/media/icon-mountains.3d06e4a109e1e5e44ddb30ccac21a507.svg";
      const icon_mouse = __webpack_require__.p + "static/media/icon-mouse.8cf2198281f1935805ae27402778c383.svg";
      const icon_mug_alt = __webpack_require__.p + "static/media/icon-mug-alt.b8e6e48d3ac7accba3b82214f17c40cc.svg";
      const icon_music_alt = __webpack_require__.p + "static/media/icon-music-alt.868fc62f9bf431ceeba7abb504332bc7.svg";
      const icon_music = __webpack_require__.p + "static/media/icon-music.81e79a241b783362442e4ec97840489e.svg";
      const icon_navigation =
        __webpack_require__.p + "static/media/icon-navigation.9c6cadf74f46e3858643f57c9def2213.svg";
      const icon_network_cloud =
        __webpack_require__.p + "static/media/icon-network-cloud.057682c065e4160dc74536b3268283db.svg";
      const icon_network = __webpack_require__.p + "static/media/icon-network.b50b1b28eda7f7792ca62e1356ef4baa.svg";
      const icon_notebook = __webpack_require__.p + "static/media/icon-notebook.39fde802df6f295e030d400f8f0b73b7.svg";
      const icon_opacity = __webpack_require__.p + "static/media/icon-opacity.e24d348e99c206fba7fb2de337fcb9ba.svg";
      const icon_package = __webpack_require__.p + "static/media/icon-package.b9284dd37009a4f889ef40ea30158216.svg";
      const icon_paint_brush =
        __webpack_require__.p + "static/media/icon-paint-brush.37b27e05e2e0238be9f47d334dfdfd51.svg";
      const icon_palette = __webpack_require__.p + "static/media/icon-palette.3a39e4e6886e0fff848046990e7132c6.svg";
      const icon_paper_plane =
        __webpack_require__.p + "static/media/icon-paper-plane.c86f14447832e1bd535d26171e37338d.svg";
      const icon_password = __webpack_require__.p + "static/media/icon-password.80eea95d42a00af2a99445d42a13419f.svg";
      const icon_pause = __webpack_require__.p + "static/media/icon-pause.9be6695891b1ae3660b85f8a35777bd3.svg";
      const icon_paw = __webpack_require__.p + "static/media/icon-paw.3b9a15380216d16c4d41525ceb2a7746.svg";
      const icon_pencil = __webpack_require__.p + "static/media/icon-pencil.af3760ed9733cdaa9102da3a9710d9de.svg";
      const icon_pharmacy = __webpack_require__.p + "static/media/icon-pharmacy.5017e6abef420ec67fe2b537570ce82a.svg";
      const icon_phone_call =
        __webpack_require__.p + "static/media/icon-phone-call.195a0f58ec36694473855e6a5272b5ae.svg";
      const icon_phone_cross =
        __webpack_require__.p + "static/media/icon-phone-cross.a2a7df47cf90046037f603aad8c6c482.svg";
      const icon_phone_pause =
        __webpack_require__.p + "static/media/icon-phone-pause.a919761b9d70696da6b18c9bea69f3b1.svg";
      const icon_phone_slash =
        __webpack_require__.p + "static/media/icon-phone-slash.7bad5a43b6c8854c452f9617e5ac64d7.svg";
      const icon_physics = __webpack_require__.p + "static/media/icon-physics.6c914d490f0435a344f8f6c217e00c23.svg";
      const icon_picture = __webpack_require__.p + "static/media/icon-picture.d460e9a1a144474be3a29a22fd342573.svg";
      const icon_ping_pong = __webpack_require__.p + "static/media/icon-ping-pong.723c98a1aea9fa6a4de50fa217da808f.svg";
      const icon_pizza_slice =
        __webpack_require__.p + "static/media/icon-pizza-slice.e4c508567aad3c0c686ee8f96c36c286.svg";
      const icon_plane = __webpack_require__.p + "static/media/icon-plane.27e7f8c1d27b6236abd51afde488314c.svg";
      const icon_play_alt = __webpack_require__.p + "static/media/icon-play-alt.0aaa2f3cd98cfd5304fec0a399ea005d.svg";
      const icon_play = __webpack_require__.p + "static/media/icon-play.927c5508740eb8dc8b5ee80318281642.svg";
      const icon_playing_cards =
        __webpack_require__.p + "static/media/icon-playing-cards.eb138987e02e92393354bf43003624dc.svg";
      const icon_plus_small =
        __webpack_require__.p + "static/media/icon-plus-small.898d9771ef41525f6d8729449566b8dd.svg";
      const icon_plus = __webpack_require__.p + "static/media/icon-plus.716a9505152cbb4e5aae90ce102a1f19.svg";
      const icon_poker_chip =
        __webpack_require__.p + "static/media/icon-poker-chip.b4b134806fa40c9c0a808ece57781e6c.svg";
      const icon_portrait = __webpack_require__.p + "static/media/icon-portrait.83614a09134c2d7c16762ac158a69e04.svg";
      const icon_pound = __webpack_require__.p + "static/media/icon-pound.440b44b7040678214cf19b1cff2eebfd.svg";
      const icon_power = __webpack_require__.p + "static/media/icon-power.44978b938f67a53b3630e67f309811ad.svg";
      const icon_presentation =
        __webpack_require__.p + "static/media/icon-presentation.b030331a3eba667ed17e0e79f90aa479.svg";
      const icon_print = __webpack_require__.p + "static/media/icon-print.e07ac4aae83db50c40dda27d43a18ae0.svg";
      const icon_protractor =
        __webpack_require__.p + "static/media/icon-protractor.e9ee22de8479741543f6edc632f8600d.svg";
      const icon_pulse = __webpack_require__.p + "static/media/icon-pulse.359c345c4112392e3c41915deab1f668.svg";
      const icon_pyramid = __webpack_require__.p + "static/media/icon-pyramid.bc13fee72672232d794bbe14f44abce8.svg";
      const icon_quote_right =
        __webpack_require__.p + "static/media/icon-quote-right.63a4c7f82ebefbae820e889d8a024124.svg";
      const icon_rainbow = __webpack_require__.p + "static/media/icon-rainbow.26f03e14edabbcd05dfb6d742e6f76b1.svg";
      const icon_raindrops = __webpack_require__.p + "static/media/icon-raindrops.ba008a000819e87699632f85368ea312.svg";
      const icon_rec = __webpack_require__.p + "static/media/icon-rec.ddc985bec468bd406f465a3f0a9b9842.svg";
      const icon_receipt = __webpack_require__.p + "static/media/icon-receipt.2d17dc320176937b0c4ef86448957c94.svg";
      const icon_record_vinyl =
        __webpack_require__.p + "static/media/icon-record-vinyl.22b5a3c17b47399f149b894cde61ee63.svg";
      const icon_rectabgle_vertical =
        __webpack_require__.p + "static/media/icon-rectabgle-vertical.1fee9777a47b954590e62116f313ce69.svg";
      const icon_rectangle_horizontal =
        __webpack_require__.p + "static/media/icon-rectangle-horizontal.cf440ab988212d4250549444c23c6c74.svg";
      const icon_rectangle_panoramic =
        __webpack_require__.p + "static/media/icon-rectangle-panoramic.50f9ae23762610eae21390a3bb2ecbc8.svg";
      const icon_recycle = __webpack_require__.p + "static/media/icon-recycle.3726bb3ca1143256ee11bbce9d33a097.svg";
      const icon_redo_alt = __webpack_require__.p + "static/media/icon-redo-alt.2799bd2ceb573ed54c3620d491488c0f.svg";
      const icon_redo = __webpack_require__.p + "static/media/icon-redo.68e1a9d409d8bd269e8747ab6d936883.svg";
      const icon_reflect = __webpack_require__.p + "static/media/icon-reflect.7be86b560345576552af0ea76a8db549.svg";
      const icon_refresh = __webpack_require__.p + "static/media/icon-refresh.bb744b29029fa02bef2cc37a37f1628a.svg";
      const icon_resize = __webpack_require__.p + "static/media/icon-resize.dc4512f169ca182429df259b671b8aa7.svg";
      const icon_resources = __webpack_require__.p + "static/media/icon-resources.e70e8e1e0b8b2b900a86ac32ec22d318.svg";
      const icon_rewind = __webpack_require__.p + "static/media/icon-rewind.c2952c57e2e82e21f61becbed762bd38.svg";
      const icon_rhombus = __webpack_require__.p + "static/media/icon-rhombus.91f3e21d732733327139a33dca7d270f.svg";
      const icon_rings_wedding =
        __webpack_require__.p + "static/media/icon-rings-wedding.f7a47d80d31860c0419aa6097569e3d1.svg";
      const icon_road = __webpack_require__.p + "static/media/icon-road.4f5a72a290f0167e052cd92cf2f794e2.svg";
      const icon_rocket = __webpack_require__.p + "static/media/icon-rocket.c8d45d9c495d297a2512d664e96a941f.svg";
      const icon_room_service =
        __webpack_require__.p + "static/media/icon-room-service.da28697406e464f8fb612cb97c2a06de.svg";
      const icon_rotate_right =
        __webpack_require__.p + "static/media/icon-rotate-right.fa9ff90a06da9cd34a5eb6e9f65f18e9.svg";
      const icon_rugby = __webpack_require__.p + "static/media/icon-rugby.c6249b16b62a2792bcea4f894751c365.svg";
      const icon_sad = __webpack_require__.p + "static/media/icon-sad.92e5e42d6b88351175c9145ff17b3d17.svg";
      const icon_salad = __webpack_require__.p + "static/media/icon-salad.0a9561d791ed3ed93a3dc68c436d7990.svg";
      const icon_scale = __webpack_require__.p + "static/media/icon-scale.c195244e6f370214914ff1c65b32f4e1.svg";
      const icon_school_bus =
        __webpack_require__.p + "static/media/icon-school-bus.09604e33bb651eae1d541541f86f75f5.svg";
      const icon_school = __webpack_require__.p + "static/media/icon-school.3744540852de347e0a146a297c6e09de.svg";
      const icon_scissors = __webpack_require__.p + "static/media/icon-scissors.b3d7b4a271cea36db1c5a54d545ca7ee.svg";
      const icon_screen = __webpack_require__.p + "static/media/icon-screen.9afe54ef4818b39546620de2ff1cbbe9.svg";
      const icon_search_alt =
        __webpack_require__.p + "static/media/icon-search-alt.e766b599c4311984402d79a8378b2bcf.svg";
      const icon_search_heart =
        __webpack_require__.p + "static/media/icon-search-heart.90bd1d5a51522d521e1ea24a9b04f7a5.svg";
      const icon_search = __webpack_require__.p + "static/media/icon-search.46f4f90ebaf530ebfddbb9d8657f627f.svg";
      const icon_settings_sliders =
        __webpack_require__.p + "static/media/icon-settings-sliders.e331efba5b585dc2fda2cae1e8fba387.svg";
      const icon_settings = __webpack_require__.p + "static/media/icon-settings.f42782d75814e3fe45b54efa8b9aa523.svg";
      const icon_share = __webpack_require__.p + "static/media/icon-share.9f366fda26fa63d46cafacdc45b115fc.svg";
      const icon_shield_check =
        __webpack_require__.p + "static/media/icon-shield-check.bf87eb0b895bddf4eb285650e8f9ee66.svg";
      const icon_shield_exclamation =
        __webpack_require__.p + "static/media/icon-shield-exclamation.a9d62268940bab50c31c567020cd91d6.svg";
      const icon_shield_interrogation =
        __webpack_require__.p + "static/media/icon-shield-interrogation.cd8f0366531d7fed7acee4a44f14e38a.svg";
      const icon_shield_plus =
        __webpack_require__.p + "static/media/icon-shield-plus.eb299d026cb95679b81eb3a5f23de92d.svg";
      const icon_shield = __webpack_require__.p + "static/media/icon-shield.597e13c349a8e0f80fa1045574926664.svg";
      const icon_ship_side = __webpack_require__.p + "static/media/icon-ship-side.283a6a1b7544b1f3571eac0180b55b4f.svg";
      const icon_ship = __webpack_require__.p + "static/media/icon-ship.f2986d09a86171a12326a9281299c1ed.svg";
      const icon_shop = __webpack_require__.p + "static/media/icon-shop.28656b00b176b5bd2e199d65e7aa6d57.svg";
      const icon_shopping_bag_add =
        __webpack_require__.p + "static/media/icon-shopping-bag-add.d11c2d8bda43808965d20551000eb83d.svg";
      const icon_shopping_bag =
        __webpack_require__.p + "static/media/icon-shopping-bag.ca3088ba7c28a071ad6c3833c14b530a.svg";
      const icon_shopping_cart_add =
        __webpack_require__.p + "static/media/icon-shopping-cart-add.21f9833e4b3d85337036715b8f80a196.svg";
      const icon_shopping_cart_check =
        __webpack_require__.p + "static/media/icon-shopping-cart-check.6a13f70daec4ac0ebbcd5a6904f11cdb.svg";
      const icon_shopping_cart =
        __webpack_require__.p + "static/media/icon-shopping-cart.3b2642c4a134066acbd854a2539e6990.svg";
      const icon_shuffle = __webpack_require__.p + "static/media/icon-shuffle.9402f723385cd3eb4d76258d1fa5081d.svg";
      const icon_sign_in_alt =
        __webpack_require__.p + "static/media/icon-sign-in-alt.9983c27fcc08dc9bf10988e75ac0bca4.svg";
      const icon_sign_in = __webpack_require__.p + "static/media/icon-sign-in.f355c956303b9438bf28edf805f8e6e1.svg";
      const icon_sign_out_alt =
        __webpack_require__.p + "static/media/icon-sign-out-alt.e1e6e97ad23b36ec834808143f87f44c.svg";
      const icon_sign_out = __webpack_require__.p + "static/media/icon-sign-out.18a1d7b3f66d856b06fb66e04eb90947.svg";
      const icon_signal_alt_1 =
        __webpack_require__.p + "static/media/icon-signal-alt-1.ee02471711e5e1ceeecb72f70acc4018.svg";
      const icon_signal_alt_2 =
        __webpack_require__.p + "static/media/icon-signal-alt-2.3072730a1b33ff1b77a1fd24ee425a85.svg";
      const icon_signal_alt =
        __webpack_require__.p + "static/media/icon-signal-alt.9b7d2dcf47201a30a0d559c53fb3a175.svg";
      const icon_skateboard =
        __webpack_require__.p + "static/media/icon-skateboard.c7ba0a5f3fa521ddbe8acd61eac6ac76.svg";
      const icon_smartphone =
        __webpack_require__.p + "static/media/icon-smartphone.25036e5722493b7949241a5b203e4418.svg";
      const icon_smile_wink =
        __webpack_require__.p + "static/media/icon-smile-wink.c945ae371225c7c7e8789f1695cd4734.svg";
      const icon_smile = __webpack_require__.p + "static/media/icon-smile.d6f7d20d073cf7b4ee407cbac9e040f4.svg";
      const icon_snowflake = __webpack_require__.p + "static/media/icon-snowflake.4c5df233c79d5d2b876496c94bdbbe2b.svg";
      const icon_soap = __webpack_require__.p + "static/media/icon-soap.a6e8a1b0fd57c7dcef32139fa02b6898.svg";
      const icon_soup = __webpack_require__.p + "static/media/icon-soup.02d2ac85050f8d10e03ab67c9e853604.svg";
      const icon_spa = __webpack_require__.p + "static/media/icon-spa.39f8cea0c8f4f0f2e2b59f1a38494b2c.svg";
      const icon_speaker = __webpack_require__.p + "static/media/icon-speaker.394613e30abee91172eb9cf4eca9ab04.svg";
      const icon_sphere = __webpack_require__.p + "static/media/icon-sphere.1715e7c75af3ae11e920c432a37430bc.svg";
      const icon_spinner_alt =
        __webpack_require__.p + "static/media/icon-spinner-alt.87b406b6bfbb318de1665ceb81ea3a28.svg";
      const icon_spinner = __webpack_require__.p + "static/media/icon-spinner.58e024e8d0728ff0cce56537b6c3f38f.svg";
      const icon_square_root =
        __webpack_require__.p + "static/media/icon-square-root.75590d4add2ef68c34269c8071658f8a.svg";
      const icon_square = __webpack_require__.p + "static/media/icon-square.747e790f7f7dbdaf8fc38d5586b7e97c.svg";
      const icon_star_octogram =
        __webpack_require__.p + "static/media/icon-star-octogram.2d4f5ad96f78953c29ebb8afa50db0f4.svg";
      const icon_star = __webpack_require__.p + "static/media/icon-star.3701075609b46690a8186225ca68d263.svg";
      const icon_stats = __webpack_require__.p + "static/media/icon-stats.6874b5d409fd83e127f62bde787e451d.svg";
      const icon_stethoscope =
        __webpack_require__.p + "static/media/icon-stethoscope.87575d466c316eab6326e18bfbba794c.svg";
      const icon_sticker = __webpack_require__.p + "static/media/icon-sticker.772bcaf48389445dc666067ecbde045b.svg";
      const icon_stop = __webpack_require__.p + "static/media/icon-stop.7a222980b157164646f6ea3a14101058.svg";
      const icon_stopwatch = __webpack_require__.p + "static/media/icon-stopwatch.f8bceae74cdcc1999b68f8bef5d4b01b.svg";
      const icon_subtitles = __webpack_require__.p + "static/media/icon-subtitles.654a3d93c1dd04af0b8b9d0cedff64bd.svg";
      const icon_sun = __webpack_require__.p + "static/media/icon-sun.db613105b87a06b5888026e50cc5fdcb.svg";
      const icon_sunrise = __webpack_require__.p + "static/media/icon-sunrise.a8679579fdfe553d465835518b23d1f7.svg";
      const icon_surfing = __webpack_require__.p + "static/media/icon-surfing.5f7ab22978c3154d9743bfcb1e6b2c8c.svg";
      const icon_sword = __webpack_require__.p + "static/media/icon-sword.181c02a19ca30264f03e2490fa22d3ea.svg";
      const icon_syringe = __webpack_require__.p + "static/media/icon-syringe.a9c6b5092f3861ec7189c546f38c6ca0.svg";
      const icon_tablet = __webpack_require__.p + "static/media/icon-tablet.09b5aa9c45d286bf9c2eb968f9813b34.svg";
      const icon_target = __webpack_require__.p + "static/media/icon-target.d51dc13846488544e7ce6ca1006341f5.svg";
      const icon_taxi = __webpack_require__.p + "static/media/icon-taxi.97bcd10f8748b2a532d156dabcb7ee5d.svg";
      const icon_tennis = __webpack_require__.p + "static/media/icon-tennis.fd1c49adc74886b40e5bb5a8c318d17e.svg";
      const icon_terrace = __webpack_require__.p + "static/media/icon-terrace.12cb0668ea0268faae9999cb58ad5559.svg";
      const icon_test_tube = __webpack_require__.p + "static/media/icon-test-tube.b8af1245a4800d4f8aafd28e3701fcb7.svg";
      const icon_test = __webpack_require__.p + "static/media/icon-test.93c4566cb65be6afd5fb4f80fdfa96e4.svg";
      const icon_text_check =
        __webpack_require__.p + "static/media/icon-text-check.e7b7ea53cb31b38b0fae04ee355f8dfb.svg";
      const icon_text = __webpack_require__.p + "static/media/icon-text.ee0a864b96ce539e2c5ecf9ec32ab299.svg";
      const icon_thermometer_half =
        __webpack_require__.p + "static/media/icon-thermometer-half.49de25fb8ba9f14cf070cdc131cce26e.svg";
      const icon_thumbs_down =
        __webpack_require__.p + "static/media/icon-thumbs-down.3166068aac7d5d120bab22076f510ce0.svg";
      const icon_thumbs_up = __webpack_require__.p + "static/media/icon-thumbs-up.edfdbb52464c67d5130a051d804e826a.svg";
      const icon_thumbtack = __webpack_require__.p + "static/media/icon-thumbtack.98989b038bb4275eb7763264d04daa04.svg";
      const icon_ticket = __webpack_require__.p + "static/media/icon-ticket.9a9817a2ab725fb7723e3c3f3ee197a5.svg";
      const icon_time_add = __webpack_require__.p + "static/media/icon-time-add.6a6070a7d1ae0762443ae4d1ef54a7db.svg";
      const icon_time_check =
        __webpack_require__.p + "static/media/icon-time-check.ff85f395c9d380d8f58ef925226b7a72.svg";
      const icon_time_delete =
        __webpack_require__.p + "static/media/icon-time-delete.c9f55ff5da9ba409afd48b9043afe344.svg";
      const icon_time_fast = __webpack_require__.p + "static/media/icon-time-fast.64652502527aa0d24871cbaaa384c3bb.svg";
      const icon_time_forward_sixty =
        __webpack_require__.p + "static/media/icon-time-forward-sixty.6362821388e16ee0cc28745cba6648b6.svg";
      const icon_time_forward_ten =
        __webpack_require__.p + "static/media/icon-time-forward-ten.af5d163a2848d6083f8be0c42667a348.svg";
      const icon_time_forward =
        __webpack_require__.p + "static/media/icon-time-forward.34ef75cf5c1fad190fc43ae7fde241bd.svg";
      const icon_time_half_past =
        __webpack_require__.p + "static/media/icon-time-half-past.e817cccde65f5b15054582b0309dbbf7.svg";
      const icon_time_oclock =
        __webpack_require__.p + "static/media/icon-time-oclock.6b70ac69a67e72507d2e6a4c5ff4e8fc.svg";
      const icon_time_past = __webpack_require__.p + "static/media/icon-time-past.c4067f77f42ca519b0d17270adbc01a2.svg";
      const icon_time_quarter_past =
        __webpack_require__.p + "static/media/icon-time-quarter-past.146386bdfadcb30ede51e23cb8c3f73b.svg";
      const icon_time_quarter_to =
        __webpack_require__.p + "static/media/icon-time-quarter-to.2a3c02227dda36506b3602571a46d7e1.svg";
      const icon_time_twenty_four =
        __webpack_require__.p + "static/media/icon-time-twenty-four.f45d7c8d194ac9c255d352fe21fd735b.svg";
      const icon_tool_crop = __webpack_require__.p + "static/media/icon-tool-crop.b82225ad6a3ef471d7dd9c16b85427a9.svg";
      const icon_tool_marquee =
        __webpack_require__.p + "static/media/icon-tool-marquee.8dedcd6cc8c0979a687f397a437b08a8.svg";
      const icon_tooth = __webpack_require__.p + "static/media/icon-tooth.db6ccb6fd85cde8e7bae352dd827b99d.svg";
      const icon_tornado = __webpack_require__.p + "static/media/icon-tornado.aec719c41f33ddddb8493285fc8b0cb9.svg";
      const icon_train_side =
        __webpack_require__.p + "static/media/icon-train-side.a9ea1be46c7b499d151631331d286f4b.svg";
      const icon_train = __webpack_require__.p + "static/media/icon-train.321456d8c74f8dd852983b1a5630583a.svg";
      const icon_transform = __webpack_require__.p + "static/media/icon-transform.85ce1824f3debbe6d1c32b59855249f7.svg";
      const icon_trash = __webpack_require__.p + "static/media/icon-trash.d9524bf02f6eeeff2536b7fa8166686b.svg";
      const icon_treatment = __webpack_require__.p + "static/media/icon-treatment.6ea90248b95b1a4201edd2860c4dc07f.svg";
      const icon_tree_christmas =
        __webpack_require__.p + "static/media/icon-tree-christmas.a24b3a1bd11b2238f75bb88703533dc5.svg";
      const icon_tree = __webpack_require__.p + "static/media/icon-tree.702a1f478c2841c0dbd52c33611f6fdb.svg";
      const icon_triangle = __webpack_require__.p + "static/media/icon-triangle.12a343a63eeb51162f588ad3902b415c.svg";
      const icon_trophy = __webpack_require__.p + "static/media/icon-trophy.3cb95829178b1cd89cfefc10d077a88a.svg";
      const icon_truck_side =
        __webpack_require__.p + "static/media/icon-truck-side.cbb12d8165682a31152990b24a44b04c.svg";
      const icon_umbrella = __webpack_require__.p + "static/media/icon-umbrella.e7d3a9330d1e0d0a6b7c21ad86f7127b.svg";
      const icon_underline = __webpack_require__.p + "static/media/icon-underline.2fb78a965b8343615089923a0be31de4.svg";
      const icon_undo_alt = __webpack_require__.p + "static/media/icon-undo-alt.f2cfbd9e30b803fb555a8031cc97f12d.svg";
      const icon_undo = __webpack_require__.p + "static/media/icon-undo.43ebc340579e1136d6a916ebe89d7132.svg";
      const icon_unlock = __webpack_require__.p + "static/media/icon-unlock.73406c6d012b7d1450fd0ecabe17440f.svg";
      const icon_upload = __webpack_require__.p + "static/media/icon-upload.c4957aae921c8921e37076e66cc3f386.svg";
      const icon_usb_pendrive =
        __webpack_require__.p + "static/media/icon-usb-pendrive.b5296d268935d97c6d6f01fe7f9ce4a9.svg";
      const icon_user_add = __webpack_require__.p + "static/media/icon-user-add.ce8eef543d1b156e5049671c4396a4ca.svg";
      const icon_user_delete =
        __webpack_require__.p + "static/media/icon-user-delete.9104c840f4dc4b539cb22f13a24f1e04.svg";
      const icon_user_remove =
        __webpack_require__.p + "static/media/icon-user-remove.e4b6a4ea3a3fe41691c9c35464d84e21.svg";
      const icon_user_time = __webpack_require__.p + "static/media/icon-user-time.bba2a66a2fd1290ce29275555cfceff9.svg";
      const icon_user = __webpack_require__.p + "static/media/icon-user.7e6754abd982ff03d488671891e4cec0.svg";
      const icon_utensils = __webpack_require__.p + "static/media/icon-utensils.b6358827193d7e62beb46c842d1c37d9.svg";
      const icon_vector_alt =
        __webpack_require__.p + "static/media/icon-vector-alt.ec74f54bb4bf23ac044010c373c5ec9a.svg";
      const icon_vector = __webpack_require__.p + "static/media/icon-vector.d324e900028b0ad217134a006a66f829.svg";
      const icon_venus_double =
        __webpack_require__.p + "static/media/icon-venus-double.d2af6593eac2bf9a6c235590f95bdae1.svg";
      const icon_venus_mars =
        __webpack_require__.p + "static/media/icon-venus-mars.c3349d58fe4b6dfcf042c9c971cbd752.svg";
      const icon_venus = __webpack_require__.p + "static/media/icon-venus.a6fed73af31b3e4da7883364f37af4a7.svg";
      const icon_video_camera =
        __webpack_require__.p + "static/media/icon-video-camera.abe7cf83aff7e44688b9c5b2aa405327.svg";
      const icon_volleyball =
        __webpack_require__.p + "static/media/icon-volleyball.b3fcba621fd3435b1314e0654c1ab1ad.svg";
      const icon_volume = __webpack_require__.p + "static/media/icon-volume.6d95de08ca748c5f2fba6ec86a9adcd9.svg";
      const icon_wheelchair =
        __webpack_require__.p + "static/media/icon-wheelchair.715d9aeda9f73e962687724142994d82.svg";
      const icon_wifi_alt = __webpack_require__.p + "static/media/icon-wifi-alt.486e46905d0efbe8ba7696f2107f09e0.svg";
      const icon_wind = __webpack_require__.p + "static/media/icon-wind.9f1dd48f31442b48bc2581977af298ae.svg";
      const icon_woman_head =
        __webpack_require__.p + "static/media/icon-woman-head.64002b2f6abe9702a2737bc0a7b983ea.svg";
      const icon_world = __webpack_require__.p + "static/media/icon-world.daf37d2a1710553b060d2e06305d77d5.svg";
      const icon_yen = __webpack_require__.p + "static/media/icon-yen.d09b940c017eedf01ec5c44a9c5fb9cb.svg";
      const icon_zoom_in = __webpack_require__.p + "static/media/icon-zoom-in.0f4572a340fafb628503e961b21684bf.svg";
      var TxIconFilled = {
          IconAdd: icon_add,
          IconAddressBook: icon_address_book,
          IconAlarmClock: icon_alarm_clock,
          IconAlignCenter: icon_align_center,
          IconAlignJustify: icon_align_justify,
          IconAlignLeft: icon_align_left,
          IconAlignRight: icon_align_right,
          IconAmbulance: icon_ambulance,
          IconAngleDoubleLeft: icon_angle_double_left,
          IconAngleDoubleRight: icon_angle_double_right,
          IconAngleDoubleSmallLeft: icon_angle_double_small_left,
          IconAngleDoubleSmallRight: icon_angle_double_small_right,
          IconAngleDown: icon_angle_down,
          IconAngleLeft: icon_angle_left,
          IconAngleRight: icon_angle_right,
          IconAngleSmallDown: icon_angle_small_down,
          IconAngleSmallLeft: icon_angle_small_left,
          IconAngleSmallRight: icon_angle_small_right,
          IconAngleSmallUp: icon_angle_small_up,
          IconAngleUp: icon_angle_up,
          IconApple: icon_apple,
          IconAppsAdd: icon_apps_add,
          IconAppsDelete: icon_apps_delete,
          IconAppsSort: icon_apps_sort,
          IconApps: icon_apps,
          IconArchive: icon_archive,
          IconArrowDown: icon_arrow_down,
          IconArrowFromBottom: icon_arrow_from_bottom,
          IconArrowLeft: icon_arrow_left,
          IconArrowRight: icon_arrow_right,
          IconArrowSmallDown: icon_arrow_small_down,
          IconArrowSmallLeft: icon_arrow_small_left,
          IconArrowSmallRight: icon_arrow_small_right,
          IconArrowSmallUp: icon_arrow_small_up,
          IconArrowUp: icon_arrow_up,
          IconAsterik: icon_asterik,
          IconAt: icon_at,
          IconBackpack: icon_backpack,
          IconBadge: icon_badge,
          IconBalloons: icon_balloons,
          IconBan: icon_ban,
          IconBandAid: icon_band_aid,
          IconBank: icon_bank,
          IconBarberShop: icon_barber_shop,
          IconBaseball: icon_baseball,
          IconBasketball: icon_basketball,
          IconBed: icon_bed,
          IconBeer: icon_beer,
          IconBellRing: icon_bell_ring,
          IconBellSchool: icon_bell_school,
          IconBell: icon_bell,
          IconBike: icon_bike,
          IconBilliard: icon_billiard,
          IconBold: icon_bold,
          IconBookAlt: icon_book_alt,
          IconBook: icon_book,
          IconBookmark: icon_bookmark,
          IconBowling: icon_bowling,
          IconBoxAlt: icon_box_alt,
          IconBox: icon_box,
          IconBreadSlice: icon_bread_slice,
          IconBriefcase: icon_briefcase,
          IconBroom: icon_broom,
          IconBrowser: icon_browser,
          IconBrush: icon_brush,
          IconBug: icon_bug,
          IconBuilding: icon_building,
          IconBulb: icon_bulb,
          IconButterfly: icon_butterfly,
          IconCakeBirthday: icon_cake_birthday,
          IconCakeWedding: icon_cake_wedding,
          IconCalculator: icon_calculator,
          IconCalendar: icon_calendar,
          IconCallHistory: icon_call_history,
          IconCallIncoming: icon_call_incoming,
          IconCallMissed: icon_call_missed,
          IconCallOutgoing: icon_call_outgoing,
          IconCamera: icon_camera,
          IconCamping: icon_camping,
          IconCar: icon_car,
          IconCaretDown: icon_caret_down,
          IconCaretLeft: icon_caret_left,
          IconCaretRight: icon_caret_right,
          IconCaretUp: icon_caret_up,
          IconCarrot: icon_carrot,
          IconChartConnected: icon_chart_connected,
          IconChartHistogram: icon_chart_histogram,
          IconChartNetwork: icon_chart_network,
          IconChartPieAlt: icon_chart_pie_alt,
          IconChartPie: icon_chart_pie,
          IconChartPyramid: icon_chart_pyramid,
          IconChartSetTheory: icon_chart_set_theory,
          IconChartTree: icon_chart_tree,
          IconChatArrowDown: icon_chat_arrow_down,
          IconChatArrowGrow: icon_chat_arrow_grow,
          IconCheck: icon_check,
          IconCheckbox: icon_checkbox,
          IconCheese: icon_cheese,
          IconChessPiece: icon_chess_piece,
          IconChildHead: icon_child_head,
          IconCircleSmall: icon_circle_small,
          IconCircle: icon_circle,
          IconClip: icon_clip,
          IconClock: icon_clock,
          IconCloudCheck: icon_cloud_check,
          IconCloudDisabled: icon_cloud_disabled,
          IconCloudDownload: icon_cloud_download,
          IconCloudShare: icon_cloud_share,
          IconCloudUpload: icon_cloud_upload,
          IconCloud: icon_cloud,
          IconClouds: icon_clouds,
          IconCocktail: icon_cocktail,
          IconCoffee: icon_coffee,
          IconCommentAlt: icon_comment_alt,
          IconCommentCheck: icon_comment_check,
          IconCommentHeart: icon_comment_heart,
          IconCommentInfo: icon_comment_info,
          IconCommentUser: icon_comment_user,
          IconComment: icon_comment,
          IconComments: icon_comments,
          IconCompressAlt: icon_compress_alt,
          IconCompress: icon_compress,
          IconComputer: icon_computer,
          IconConfetti: icon_confetti,
          IconCookie: icon_cookie,
          IconCopyAlt: icon_copy_alt,
          IconCopy: icon_copy,
          IconCopyright: icon_copyright,
          IconCow: icon_cow,
          IconCream: icon_cream,
          IconCreditCard: icon_credit_card,
          IconCroissant: icon_croissant,
          IconCrossCircle: icon_cross_circle,
          IconCrossSmall: icon_cross_small,
          IconCross: icon_cross,
          IconCrown: icon_crown,
          IconCube: icon_cube,
          IconCupcake: icon_cupcake,
          IconCursorFinger: icon_cursor_finger,
          IconCursorPlus: icon_cursor_plus,
          IconCursorTextAlt: icon_cursor_text_alt,
          IconCursorText: icon_cursor_text,
          IconCursor: icon_cursor,
          IconDart: icon_dart,
          IconDashboard: icon_dashboard,
          IconDataTransfer: icon_data_transfer,
          IconDatabase: icon_database,
          IconDelete: icon_delete,
          IconDiamond: icon_diamond,
          IconDice: icon_dice,
          IconDiploma: icon_diploma,
          IconDiscoBall: icon_disco_ball,
          IconDisk: icon_disk,
          IconDoctor: icon_doctor,
          IconDocumentSigned: icon_document_signed,
          IconDocument: icon_document,
          IconDollar: icon_dollar,
          IconDownload: icon_download,
          IconDrinkAlt: icon_drink_alt,
          IconDrumstick: icon_drumstick,
          IconDuplicate: icon_duplicate,
          IconELearning: icon_e_learning,
          IconEarnings: icon_earnings,
          IconEditAlt: icon_edit_alt,
          IconEdit: icon_edit,
          IconEnvelopeBan: icon_envelope_ban,
          IconEnvelopeDownload: icon_envelope_download,
          IconEnvelopeMarker: icon_envelope_marker,
          IconEnvelopeOpen: icon_envelope_open,
          IconEnvelopePlus: icon_envelope_plus,
          IconEnvelope: icon_envelope,
          IconEuro: icon_euro,
          IconExclamation: icon_exclamation,
          IconExpand: icon_expand,
          IconEyeCrossed: icon_eye_crossed,
          IconEyeDropper: icon_eye_dropper,
          IconEye: icon_eye,
          IconFeather: icon_feather,
          IconFerrisWheel: icon_ferris_wheel,
          IconFileAdd: icon_file_add,
          IconFileAi: icon_file_ai,
          IconFileCheck: icon_file_check,
          IconFileDelete: icon_file_delete,
          IconFileEps: icon_file_eps,
          IconFileGif: icon_file_gif,
          IconFileMusic: icon_file_music,
          IconFilePsd: icon_file_psd,
          IconFile: icon_file,
          IconFill: icon_fill,
          IconFilm: icon_film,
          IconFilter: icon_filter,
          IconFingerprint: icon_fingerprint,
          IconFish: icon_fish,
          IconFlag: icon_flag,
          IconFlame: icon_flame,
          IconFlipHorizontal: icon_flip_horizontal,
          IconFlowerBouquet: icon_flower_bouquet,
          IconFlowerTulip: icon_flower_tulip,
          IconFlower: icon_flower,
          IconFolderAdd: icon_folder_add,
          IconFolder: icon_folder,
          IconFollowing: icon_following,
          IconFootball: icon_football,
          IconForm: icon_form,
          IconForward: icon_forward,
          IconFox: icon_fox,
          IconFrown: icon_frown,
          IconFtp: icon_ftp,
          IconGallery: icon_gallery,
          IconGamepad: icon_gamepad,
          IconGasPump: icon_gas_pump,
          IconGem: icon_gem,
          IconGift: icon_gift,
          IconGlassCheers: icon_glass_cheers,
          IconGlasses: icon_glasses,
          IconGlobeAlt: icon_globe_alt,
          IconGlobe: icon_globe,
          IconGolf: icon_golf,
          IconGraduationCap: icon_graduation_cap,
          IconGraphicTablet: icon_graphic_tablet,
          IconGridAlt: icon_grid_alt,
          IconGrid: icon_grid,
          IconGuitar: icon_guitar,
          IconGym: icon_gym,
          IconHamburger: icon_hamburger,
          IconHandHoldingHeart: icon_hand_holding_heart,
          IconHastag: icon_hastag,
          IconHatBirthday: icon_hat_birthday,
          IconHeadSideThinking: icon_head_side_thinking,
          IconHeadphones: icon_headphones,
          IconHeadset: icon_headset,
          IconHeartArrow: icon_heart_arrow,
          IconHeart: icon_heart,
          IconHomeLocationAlt: icon_home_location_alt,
          IconHomeLocation: icon_home_location,
          IconHome: icon_home,
          IconHourglassEnd: icon_hourglass_end,
          IconHourglass: icon_hourglass,
          IconIceCream: icon_ice_cream,
          IconIceSkate: icon_ice_skate,
          IconIdBadge: icon_id_badge,
          IconInbox: icon_inbox,
          IconIncognito: icon_incognito,
          IconIndent: icon_indent,
          IconInfinity: icon_infinity,
          IconInfo: icon_info,
          IconInteractive: icon_interactive,
          IconInterlining: icon_interlining,
          IconInterrogation: icon_interrogation,
          IconItalic: icon_italic,
          IconJpg: icon_jpg,
          IconKey: icon_key,
          IconKeyboard: icon_keyboard,
          IconKite: icon_kite,
          IconLabel: icon_label,
          IconLaptop: icon_laptop,
          IconLasso: icon_lasso,
          IconLaugh: icon_laugh,
          IconLayers: icon_layers,
          IconLayoutFluid: icon_layout_fluid,
          IconLeaf: icon_leaf,
          IconLetterCase: icon_letter_case,
          IconLifeRing: icon_life_ring,
          IconLineWidth: icon_line_width,
          IconLink: icon_link,
          IconLipstick: icon_lipstick,
          IconListCheck: icon_list_check,
          IconList: icon_list,
          IconLocationAlt: icon_location_alt,
          IconLockAlt: icon_lock_alt,
          IconLock: icon_lock,
          IconLuggageRolling: icon_luggage_rolling,
          IconMagicWand: icon_magic_wand,
          IconMakeupBrush: icon_makeup_brush,
          IconManHead: icon_man_head,
          IconMapMarkerCross: icon_map_marker_cross,
          IconMapMarkerHome: icon_map_marker_home,
          IconMapMarkerMinus: icon_map_marker_minus,
          IconMapMarkerPlus: icon_map_marker_plus,
          IconMapMarker: icon_map_marker,
          IconMap: icon_map,
          IconMarkerTime: icon_marker_time,
          IconMarker: icon_marker,
          IconMarsDouble: icon_mars_double,
          IconMars: icon_mars,
          IconMaskCarnival: icon_mask_carnival,
          IconMedicine: icon_medicine,
          IconMegaphone: icon_megaphone,
          IconMeh: icon_meh,
          IconMenuBurger: icon_menu_burger,
          IconMenuDotsVertical: icon_menu_dots_vertical,
          IconMenuDots: icon_menu_dots,
          IconMicrophoneAlt: icon_microphone_alt,
          IconMicrophone: icon_microphone,
          IconMinusSmall: icon_minus_small,
          IconMinus: icon_minus,
          IconMobile: icon_mobile,
          IconModeLandscape: icon_mode_landscape,
          IconModePortrait: icon_mode_portrait,
          IconMoney: icon_money,
          IconMoon: icon_moon,
          IconMountains: icon_mountains,
          IconMouse: icon_mouse,
          IconMugAlt: icon_mug_alt,
          IconMusicAlt: icon_music_alt,
          IconMusic: icon_music,
          IconNavigation: icon_navigation,
          IconNetworkCloud: icon_network_cloud,
          IconNetwork: icon_network,
          IconNotebook: icon_notebook,
          IconOpacity: icon_opacity,
          IconPackage: icon_package,
          IconPaintBrush: icon_paint_brush,
          IconPalette: icon_palette,
          IconPaperPlane: icon_paper_plane,
          IconPassword: icon_password,
          IconPause: icon_pause,
          IconPaw: icon_paw,
          IconPencil: icon_pencil,
          IconPharmacy: icon_pharmacy,
          IconPhoneCall: icon_phone_call,
          IconPhoneCross: icon_phone_cross,
          IconPhonePause: icon_phone_pause,
          IconPhoneSlash: icon_phone_slash,
          IconPhysics: icon_physics,
          IconPicture: icon_picture,
          IconPingPong: icon_ping_pong,
          IconPizzaSlice: icon_pizza_slice,
          IconPlane: icon_plane,
          IconPlayAlt: icon_play_alt,
          IconPlay: icon_play,
          IconPlayingCards: icon_playing_cards,
          IconPlusSmall: icon_plus_small,
          IconPlus: icon_plus,
          IconPokerChip: icon_poker_chip,
          IconPortrait: icon_portrait,
          IconPound: icon_pound,
          IconPower: icon_power,
          IconPresentation: icon_presentation,
          IconPrint: icon_print,
          IconProtractor: icon_protractor,
          IconPulse: icon_pulse,
          IconPyramid: icon_pyramid,
          IconQuoteRight: icon_quote_right,
          IconRainbow: icon_rainbow,
          IconRaindrops: icon_raindrops,
          IconRec: icon_rec,
          IconReceipt: icon_receipt,
          IconRecordVinyl: icon_record_vinyl,
          IconRectabgleVertical: icon_rectabgle_vertical,
          IconRectangleHorizontal: icon_rectangle_horizontal,
          IconRectanglePanoramic: icon_rectangle_panoramic,
          IconRecycle: icon_recycle,
          IconRedoAlt: icon_redo_alt,
          IconRedo: icon_redo,
          IconReflect: icon_reflect,
          IconRefresh: icon_refresh,
          IconResize: icon_resize,
          IconResources: icon_resources,
          IconRewind: icon_rewind,
          IconRhombus: icon_rhombus,
          IconRingsWedding: icon_rings_wedding,
          IconRoad: icon_road,
          IconRocket: icon_rocket,
          IconRoomService: icon_room_service,
          IconRotateRight: icon_rotate_right,
          IconRugby: icon_rugby,
          IconSad: icon_sad,
          IconSalad: icon_salad,
          IconScale: icon_scale,
          IconSchoolBus: icon_school_bus,
          IconSchool: icon_school,
          IconScissors: icon_scissors,
          IconScreen: icon_screen,
          IconSearchAlt: icon_search_alt,
          IconSearchHeart: icon_search_heart,
          IconSearch: icon_search,
          IconSettingsSliders: icon_settings_sliders,
          IconSettings: icon_settings,
          IconShare: icon_share,
          IconShieldCheck: icon_shield_check,
          IconShieldExclamation: icon_shield_exclamation,
          IconShieldInterrogation: icon_shield_interrogation,
          IconShieldPlus: icon_shield_plus,
          IconShield: icon_shield,
          IconShipSide: icon_ship_side,
          IconShip: icon_ship,
          IconShop: icon_shop,
          IconShoppingBagAdd: icon_shopping_bag_add,
          IconShoppingBag: icon_shopping_bag,
          IconShoppingCartAdd: icon_shopping_cart_add,
          IconShoppingCartCheck: icon_shopping_cart_check,
          IconShoppingCart: icon_shopping_cart,
          IconShuffle: icon_shuffle,
          IconSignInAlt: icon_sign_in_alt,
          IconSignIn: icon_sign_in,
          IconSignOutAlt: icon_sign_out_alt,
          IconSignOut: icon_sign_out,
          IconSignalAlt1: icon_signal_alt_1,
          IconSignalAlt2: icon_signal_alt_2,
          IconSignalAlt: icon_signal_alt,
          IconSkateboard: icon_skateboard,
          IconSmartphone: icon_smartphone,
          IconSmileWink: icon_smile_wink,
          IconSmile: icon_smile,
          IconSnowflake: icon_snowflake,
          IconSoap: icon_soap,
          IconSoup: icon_soup,
          IconSpa: icon_spa,
          IconSpeaker: icon_speaker,
          IconSphere: icon_sphere,
          IconSpinnerAlt: icon_spinner_alt,
          IconSpinner: icon_spinner,
          IconSquareRoot: icon_square_root,
          IconSquare: icon_square,
          IconStarOctogram: icon_star_octogram,
          IconStar: icon_star,
          IconStats: icon_stats,
          IconStethoscope: icon_stethoscope,
          IconSticker: icon_sticker,
          IconStop: icon_stop,
          IconStopwatch: icon_stopwatch,
          IconSubtitles: icon_subtitles,
          IconSun: icon_sun,
          IconSunrise: icon_sunrise,
          IconSurfing: icon_surfing,
          IconSword: icon_sword,
          IconSyringe: icon_syringe,
          IconTablet: icon_tablet,
          IconTarget: icon_target,
          IconTaxi: icon_taxi,
          IconTennis: icon_tennis,
          IconTerrace: icon_terrace,
          IconTestTube: icon_test_tube,
          IconTest: icon_test,
          IconTextCheck: icon_text_check,
          IconText: icon_text,
          IconThermometerHalf: icon_thermometer_half,
          IconThumbsDown: icon_thumbs_down,
          IconThumbsUp: icon_thumbs_up,
          IconThumbtack: icon_thumbtack,
          IconTicket: icon_ticket,
          IconTimeAdd: icon_time_add,
          IconTimeCheck: icon_time_check,
          IconTimeDelete: icon_time_delete,
          IconTimeFast: icon_time_fast,
          IconTimeForwardSixty: icon_time_forward_sixty,
          IconTimeForwardTen: icon_time_forward_ten,
          IconTimeForward: icon_time_forward,
          IconTimeHalfPast: icon_time_half_past,
          IconTimeOclock: icon_time_oclock,
          IconTimePast: icon_time_past,
          IconTimeQuarterPast: icon_time_quarter_past,
          IconTimeQuarterTo: icon_time_quarter_to,
          IconTimeTwentyFour: icon_time_twenty_four,
          IconToolCrop: icon_tool_crop,
          IconToolMarquee: icon_tool_marquee,
          IconTooth: icon_tooth,
          IconTornado: icon_tornado,
          IconTrainSide: icon_train_side,
          IconTrain: icon_train,
          IconTransform: icon_transform,
          IconTrash: icon_trash,
          IconTreatment: icon_treatment,
          IconTreeChristmas: icon_tree_christmas,
          IconTree: icon_tree,
          IconTriangle: icon_triangle,
          IconTrophy: icon_trophy,
          IconTruckSide: icon_truck_side,
          IconUmbrella: icon_umbrella,
          IconUnderline: icon_underline,
          IconUndoAlt: icon_undo_alt,
          IconUndo: icon_undo,
          IconUnlock: icon_unlock,
          IconUpload: icon_upload,
          IconUsbPendrive: icon_usb_pendrive,
          IconUserAdd: icon_user_add,
          IconUserDelete: icon_user_delete,
          IconUserRemove: icon_user_remove,
          IconUserTime: icon_user_time,
          IconUser: icon_user,
          IconUtensils: icon_utensils,
          IconVectorAlt: icon_vector_alt,
          IconVector: icon_vector,
          IconVenusDouble: icon_venus_double,
          IconVenusMars: icon_venus_mars,
          IconVenus: icon_venus,
          IconVideoCamera: icon_video_camera,
          IconVolleyball: icon_volleyball,
          IconVolume: icon_volume,
          IconWheelchair: icon_wheelchair,
          IconWifiAlt: icon_wifi_alt,
          IconWind: icon_wind,
          IconWomanHead: icon_woman_head,
          IconWorld: icon_world,
          IconYen: icon_yen,
          IconZoomIn: icon_zoom_in,
          IconZoomOut: __webpack_require__.p + "static/media/icon-zoom-out.b5e86d558c1c1f93bbd786ebd9f49e78.svg",
        },
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const TxIconFilled_stories = {
        title: "tx-design-ui/Foundation/TxIcon/TxIconFilled",
        component: "TxIcon",
        parameters: { layout: "fullscreen" },
      };
      var iconData = [
        { name: "Add", file: TxIconFilled.IconAdd, description: "Add", category: "Filled" },
        { name: "AddressBook", file: TxIconFilled.IconAddressBook, description: "AddressBook", category: "Filled" },
        { name: "AlarmClock", file: TxIconFilled.IconAlarmClock, description: "AlarmClock", category: "Filled" },
        { name: "AlignCenter", file: TxIconFilled.IconAlignCenter, description: "AlignCenter", category: "Filled" },
        { name: "AlignJustify", file: TxIconFilled.IconAlignJustify, description: "AlignJustify", category: "Filled" },
        { name: "AlignLeft", file: TxIconFilled.IconAlignLeft, description: "AlignLeft", category: "Filled" },
        { name: "AlignRight", file: TxIconFilled.IconAlignRight, description: "AlignRight", category: "Filled" },
        { name: "Ambulance", file: TxIconFilled.IconAmbulance, description: "Ambulance", category: "Filled" },
        {
          name: "AngleDoubleLeft",
          file: TxIconFilled.IconAngleDoubleLeft,
          description: "AngleDoubleLeft",
          category: "Filled",
        },
        {
          name: "AngleDoubleRight",
          file: TxIconFilled.IconAngleDoubleRight,
          description: "AngleDoubleRight",
          category: "Filled",
        },
        {
          name: "AngleDoubleSmallLeft",
          file: TxIconFilled.IconAngleDoubleSmallLeft,
          description: "AngleDoubleSmallLeft",
          category: "Filled",
        },
        {
          name: "AngleDoubleSmallRight",
          file: TxIconFilled.IconAngleDoubleSmallRight,
          description: "AngleDoubleSmallRight",
          category: "Filled",
        },
        { name: "AngleDown", file: TxIconFilled.IconAngleDown, description: "AngleDown", category: "Filled" },
        { name: "AngleLeft", file: TxIconFilled.IconAngleLeft, description: "AngleLeft", category: "Filled" },
        { name: "AngleRight", file: TxIconFilled.IconAngleRight, description: "AngleRight", category: "Filled" },
        {
          name: "AngleSmallDown",
          file: TxIconFilled.IconAngleSmallDown,
          description: "AngleSmallDown",
          category: "Filled",
        },
        {
          name: "AngleSmallLeft",
          file: TxIconFilled.IconAngleSmallLeft,
          description: "AngleSmallLeft",
          category: "Filled",
        },
        {
          name: "AngleSmallRight",
          file: TxIconFilled.IconAngleSmallRight,
          description: "AngleSmallRight",
          category: "Filled",
        },
        { name: "AngleSmallUp", file: TxIconFilled.IconAngleSmallUp, description: "AngleSmallUp", category: "Filled" },
        { name: "AngleUp", file: TxIconFilled.IconAngleUp, description: "AngleUp", category: "Filled" },
        { name: "Apple", file: TxIconFilled.IconApple, description: "Apple", category: "Filled" },
        { name: "AppsAdd", file: TxIconFilled.IconAppsAdd, description: "AppsAdd", category: "Filled" },
        { name: "AppsDelete", file: TxIconFilled.IconAppsDelete, description: "AppsDelete", category: "Filled" },
        { name: "AppsSort", file: TxIconFilled.IconAppsSort, description: "AppsSort", category: "Filled" },
        { name: "Apps", file: TxIconFilled.IconApps, description: "Apps", category: "Filled" },
        { name: "Archive", file: TxIconFilled.IconArchive, description: "Archive", category: "Filled" },
        { name: "ArrowDown", file: TxIconFilled.IconArrowDown, description: "ArrowDown", category: "Filled" },
        {
          name: "ArrowFromBottom",
          file: TxIconFilled.IconArrowFromBottom,
          description: "ArrowFromBottom",
          category: "Filled",
        },
        { name: "ArrowLeft", file: TxIconFilled.IconArrowLeft, description: "ArrowLeft", category: "Filled" },
        { name: "ArrowRight", file: TxIconFilled.IconArrowRight, description: "ArrowRight", category: "Filled" },
        {
          name: "ArrowSmallDown",
          file: TxIconFilled.IconArrowSmallDown,
          description: "ArrowSmallDown",
          category: "Filled",
        },
        {
          name: "ArrowSmallLeft",
          file: TxIconFilled.IconArrowSmallLeft,
          description: "ArrowSmallLeft",
          category: "Filled",
        },
        {
          name: "ArrowSmallRight",
          file: TxIconFilled.IconArrowSmallRight,
          description: "ArrowSmallRight",
          category: "Filled",
        },
        { name: "ArrowSmallUp", file: TxIconFilled.IconArrowSmallUp, description: "ArrowSmallUp", category: "Filled" },
        { name: "ArrowUp", file: TxIconFilled.IconArrowUp, description: "ArrowUp", category: "Filled" },
        { name: "Asterik", file: TxIconFilled.IconAsterik, description: "Asterik", category: "Filled" },
        { name: "At", file: TxIconFilled.IconAt, description: "At", category: "Filled" },
        { name: "Backpack", file: TxIconFilled.IconBackpack, description: "Backpack", category: "Filled" },
        { name: "Badge", file: TxIconFilled.IconBadge, description: "Badge", category: "Filled" },
        { name: "Balloons", file: TxIconFilled.IconBalloons, description: "Balloons", category: "Filled" },
        { name: "Ban", file: TxIconFilled.IconBan, description: "Ban", category: "Filled" },
        { name: "BandAid", file: TxIconFilled.IconBandAid, description: "BandAid", category: "Filled" },
        { name: "Bank", file: TxIconFilled.IconBank, description: "Bank", category: "Filled" },
        { name: "BarberShop", file: TxIconFilled.IconBarberShop, description: "BarberShop", category: "Filled" },
        { name: "Baseball", file: TxIconFilled.IconBaseball, description: "Baseball", category: "Filled" },
        { name: "Basketball", file: TxIconFilled.IconBasketball, description: "Basketball", category: "Filled" },
        { name: "Bed", file: TxIconFilled.IconBed, description: "Bed", category: "Filled" },
        { name: "Beer", file: TxIconFilled.IconBeer, description: "Beer", category: "Filled" },
        { name: "BellRing", file: TxIconFilled.IconBellRing, description: "BellRing", category: "Filled" },
        { name: "BellSchool", file: TxIconFilled.IconBellSchool, description: "BellSchool", category: "Filled" },
        { name: "Bell", file: TxIconFilled.IconBell, description: "Bell", category: "Filled" },
        { name: "Bike", file: TxIconFilled.IconBike, description: "Bike", category: "Filled" },
        { name: "Billiard", file: TxIconFilled.IconBilliard, description: "Billiard", category: "Filled" },
        { name: "Bold", file: TxIconFilled.IconBold, description: "Bold", category: "Filled" },
        { name: "BookAlt", file: TxIconFilled.IconBookAlt, description: "BookAlt", category: "Filled" },
        { name: "Book", file: TxIconFilled.IconBook, description: "Book", category: "Filled" },
        { name: "Bookmark", file: TxIconFilled.IconBookmark, description: "Bookmark", category: "Filled" },
        { name: "Bowling", file: TxIconFilled.IconBowling, description: "Bowling", category: "Filled" },
        { name: "BoxAlt", file: TxIconFilled.IconBoxAlt, description: "BoxAlt", category: "Filled" },
        { name: "Box", file: TxIconFilled.IconBox, description: "Box", category: "Filled" },
        { name: "BreadSlice", file: TxIconFilled.IconBreadSlice, description: "BreadSlice", category: "Filled" },
        { name: "Briefcase", file: TxIconFilled.IconBriefcase, description: "Briefcase", category: "Filled" },
        { name: "Broom", file: TxIconFilled.IconBroom, description: "Broom", category: "Filled" },
        { name: "Browser", file: TxIconFilled.IconBrowser, description: "Browser", category: "Filled" },
        { name: "Brush", file: TxIconFilled.IconBrush, description: "Brush", category: "Filled" },
        { name: "Bug", file: TxIconFilled.IconBug, description: "Bug", category: "Filled" },
        { name: "Building", file: TxIconFilled.IconBuilding, description: "Building", category: "Filled" },
        { name: "Bulb", file: TxIconFilled.IconBulb, description: "Bulb", category: "Filled" },
        { name: "Butterfly", file: TxIconFilled.IconButterfly, description: "Butterfly", category: "Filled" },
        { name: "CakeBirthday", file: TxIconFilled.IconCakeBirthday, description: "CakeBirthday", category: "Filled" },
        { name: "CakeWedding", file: TxIconFilled.IconCakeWedding, description: "CakeWedding", category: "Filled" },
        { name: "Calculator", file: TxIconFilled.IconCalculator, description: "Calculator", category: "Filled" },
        { name: "Calendar", file: TxIconFilled.IconCalendar, description: "Calendar", category: "Filled" },
        { name: "CallHistory", file: TxIconFilled.IconCallHistory, description: "CallHistory", category: "Filled" },
        { name: "CallIncoming", file: TxIconFilled.IconCallIncoming, description: "CallIncoming", category: "Filled" },
        { name: "CallMissed", file: TxIconFilled.IconCallMissed, description: "CallMissed", category: "Filled" },
        { name: "CallOutgoing", file: TxIconFilled.IconCallOutgoing, description: "CallOutgoing", category: "Filled" },
        { name: "Camera", file: TxIconFilled.IconCamera, description: "Camera", category: "Filled" },
        { name: "Camping", file: TxIconFilled.IconCamping, description: "Camping", category: "Filled" },
        { name: "Car", file: TxIconFilled.IconCar, description: "Car", category: "Filled" },
        { name: "CaretDown", file: TxIconFilled.IconCaretDown, description: "CaretDown", category: "Filled" },
        { name: "CaretLeft", file: TxIconFilled.IconCaretLeft, description: "CaretLeft", category: "Filled" },
        { name: "CaretRight", file: TxIconFilled.IconCaretRight, description: "CaretRight", category: "Filled" },
        { name: "CaretUp", file: TxIconFilled.IconCaretUp, description: "CaretUp", category: "Filled" },
        { name: "Carrot", file: TxIconFilled.IconCarrot, description: "Carrot", category: "Filled" },
        {
          name: "ChartConnected",
          file: TxIconFilled.IconChartConnected,
          description: "ChartConnected",
          category: "Filled",
        },
        {
          name: "ChartHistogram",
          file: TxIconFilled.IconChartHistogram,
          description: "ChartHistogram",
          category: "Filled",
        },
        { name: "ChartNetwork", file: TxIconFilled.IconChartNetwork, description: "ChartNetwork", category: "Filled" },
        { name: "ChartPieAlt", file: TxIconFilled.IconChartPieAlt, description: "ChartPieAlt", category: "Filled" },
        { name: "ChartPie", file: TxIconFilled.IconChartPie, description: "ChartPie", category: "Filled" },
        { name: "ChartPyramid", file: TxIconFilled.IconChartPyramid, description: "ChartPyramid", category: "Filled" },
        {
          name: "ChartSetTheory",
          file: TxIconFilled.IconChartSetTheory,
          description: "ChartSetTheory",
          category: "Filled",
        },
        { name: "ChartTree", file: TxIconFilled.IconChartTree, description: "ChartTree", category: "Filled" },
        {
          name: "ChatArrowDown",
          file: TxIconFilled.IconChatArrowDown,
          description: "ChatArrowDown",
          category: "Filled",
        },
        {
          name: "ChatArrowGrow",
          file: TxIconFilled.IconChatArrowGrow,
          description: "ChatArrowGrow",
          category: "Filled",
        },
        { name: "Check", file: TxIconFilled.IconCheck, description: "Check", category: "Filled" },
        { name: "Checkbox", file: TxIconFilled.IconCheckbox, description: "Checkbox", category: "Filled" },
        { name: "Cheese", file: TxIconFilled.IconCheese, description: "Cheese", category: "Filled" },
        { name: "ChessPiece", file: TxIconFilled.IconChessPiece, description: "ChessPiece", category: "Filled" },
        { name: "ChildHead", file: TxIconFilled.IconChildHead, description: "ChildHead", category: "Filled" },
        { name: "CircleSmall", file: TxIconFilled.IconCircleSmall, description: "CircleSmall", category: "Filled" },
        { name: "Circle", file: TxIconFilled.IconCircle, description: "Circle", category: "Filled" },
        { name: "Clip", file: TxIconFilled.IconClip, description: "Clip", category: "Filled" },
        { name: "Clock", file: TxIconFilled.IconClock, description: "Clock", category: "Filled" },
        { name: "CloudCheck", file: TxIconFilled.IconCloudCheck, description: "CloudCheck", category: "Filled" },
        {
          name: "CloudDisabled",
          file: TxIconFilled.IconCloudDisabled,
          description: "CloudDisabled",
          category: "Filled",
        },
        {
          name: "CloudDownload",
          file: TxIconFilled.IconCloudDownload,
          description: "CloudDownload",
          category: "Filled",
        },
        { name: "CloudShare", file: TxIconFilled.IconCloudShare, description: "CloudShare", category: "Filled" },
        { name: "CloudUpload", file: TxIconFilled.IconCloudUpload, description: "CloudUpload", category: "Filled" },
        { name: "Cloud", file: TxIconFilled.IconCloud, description: "Cloud", category: "Filled" },
        { name: "Clouds", file: TxIconFilled.IconClouds, description: "Clouds", category: "Filled" },
        { name: "Cocktail", file: TxIconFilled.IconCocktail, description: "Cocktail", category: "Filled" },
        { name: "Coffee", file: TxIconFilled.IconCoffee, description: "Coffee", category: "Filled" },
        { name: "CommentAlt", file: TxIconFilled.IconCommentAlt, description: "CommentAlt", category: "Filled" },
        { name: "CommentCheck", file: TxIconFilled.IconCommentCheck, description: "CommentCheck", category: "Filled" },
        { name: "CommentHeart", file: TxIconFilled.IconCommentHeart, description: "CommentHeart", category: "Filled" },
        { name: "CommentInfo", file: TxIconFilled.IconCommentInfo, description: "CommentInfo", category: "Filled" },
        { name: "CommentUser", file: TxIconFilled.IconCommentUser, description: "CommentUser", category: "Filled" },
        { name: "Comment", file: TxIconFilled.IconComment, description: "Comment", category: "Filled" },
        { name: "Comments", file: TxIconFilled.IconComments, description: "Comments", category: "Filled" },
        { name: "CompressAlt", file: TxIconFilled.IconCompressAlt, description: "CompressAlt", category: "Filled" },
        { name: "Compress", file: TxIconFilled.IconCompress, description: "Compress", category: "Filled" },
        { name: "Computer", file: TxIconFilled.IconComputer, description: "Computer", category: "Filled" },
        { name: "Confetti", file: TxIconFilled.IconConfetti, description: "Confetti", category: "Filled" },
        { name: "Cookie", file: TxIconFilled.IconCookie, description: "Cookie", category: "Filled" },
        { name: "CopyAlt", file: TxIconFilled.IconCopyAlt, description: "CopyAlt", category: "Filled" },
        { name: "Copy", file: TxIconFilled.IconCopy, description: "Copy", category: "Filled" },
        { name: "Copyright", file: TxIconFilled.IconCopyright, description: "Copyright", category: "Filled" },
        { name: "Cow", file: TxIconFilled.IconCow, description: "Cow", category: "Filled" },
        { name: "Cream", file: TxIconFilled.IconCream, description: "Cream", category: "Filled" },
        { name: "CreditCard", file: TxIconFilled.IconCreditCard, description: "CreditCard", category: "Filled" },
        { name: "Croissant", file: TxIconFilled.IconCroissant, description: "Croissant", category: "Filled" },
        { name: "CrossCircle", file: TxIconFilled.IconCrossCircle, description: "CrossCircle", category: "Filled" },
        { name: "CrossSmall", file: TxIconFilled.IconCrossSmall, description: "CrossSmall", category: "Filled" },
        { name: "Cross", file: TxIconFilled.IconCross, description: "Cross", category: "Filled" },
        { name: "Crown", file: TxIconFilled.IconCrown, description: "Crown", category: "Filled" },
        { name: "Cube", file: TxIconFilled.IconCube, description: "Cube", category: "Filled" },
        { name: "Cupcake", file: TxIconFilled.IconCupcake, description: "Cupcake", category: "Filled" },
        { name: "CursorFinger", file: TxIconFilled.IconCursorFinger, description: "CursorFinger", category: "Filled" },
        { name: "CursorPlus", file: TxIconFilled.IconCursorPlus, description: "CursorPlus", category: "Filled" },
        {
          name: "CursorTextAlt",
          file: TxIconFilled.IconCursorTextAlt,
          description: "CursorTextAlt",
          category: "Filled",
        },
        { name: "CursorText", file: TxIconFilled.IconCursorText, description: "CursorText", category: "Filled" },
        { name: "Cursor", file: TxIconFilled.IconCursor, description: "Cursor", category: "Filled" },
        { name: "Dart", file: TxIconFilled.IconDart, description: "Dart", category: "Filled" },
        { name: "Dashboard", file: TxIconFilled.IconDashboard, description: "Dashboard", category: "Filled" },
        { name: "DataTransfer", file: TxIconFilled.IconDataTransfer, description: "DataTransfer", category: "Filled" },
        { name: "Database", file: TxIconFilled.IconDatabase, description: "Database", category: "Filled" },
        { name: "Delete", file: TxIconFilled.IconDelete, description: "Delete", category: "Filled" },
        { name: "Diamond", file: TxIconFilled.IconDiamond, description: "Diamond", category: "Filled" },
        { name: "Dice", file: TxIconFilled.IconDice, description: "Dice", category: "Filled" },
        { name: "Diploma", file: TxIconFilled.IconDiploma, description: "Diploma", category: "Filled" },
        { name: "DiscoBall", file: TxIconFilled.IconDiscoBall, description: "DiscoBall", category: "Filled" },
        { name: "Disk", file: TxIconFilled.IconDisk, description: "Disk", category: "Filled" },
        { name: "Doctor", file: TxIconFilled.IconDoctor, description: "Doctor", category: "Filled" },
        {
          name: "DocumentSigned",
          file: TxIconFilled.IconDocumentSigned,
          description: "DocumentSigned",
          category: "Filled",
        },
        { name: "Document", file: TxIconFilled.IconDocument, description: "Document", category: "Filled" },
        { name: "Dollar", file: TxIconFilled.IconDollar, description: "Dollar", category: "Filled" },
        { name: "Download", file: TxIconFilled.IconDownload, description: "Download", category: "Filled" },
        { name: "DrinkAlt", file: TxIconFilled.IconDrinkAlt, description: "DrinkAlt", category: "Filled" },
        { name: "Drumstick", file: TxIconFilled.IconDrumstick, description: "Drumstick", category: "Filled" },
        { name: "Duplicate", file: TxIconFilled.IconDuplicate, description: "Duplicate", category: "Filled" },
        { name: "ELearning", file: TxIconFilled.IconELearning, description: "ELearning", category: "Filled" },
        { name: "Earnings", file: TxIconFilled.IconEarnings, description: "Earnings", category: "Filled" },
        { name: "EditAlt", file: TxIconFilled.IconEditAlt, description: "EditAlt", category: "Filled" },
        { name: "Edit", file: TxIconFilled.IconEdit, description: "Edit", category: "Filled" },
        { name: "EnvelopeBan", file: TxIconFilled.IconEnvelopeBan, description: "EnvelopeBan", category: "Filled" },
        {
          name: "EnvelopeDownload",
          file: TxIconFilled.IconEnvelopeDownload,
          description: "EnvelopeDownload",
          category: "Filled",
        },
        {
          name: "EnvelopeMarker",
          file: TxIconFilled.IconEnvelopeMarker,
          description: "EnvelopeMarker",
          category: "Filled",
        },
        { name: "EnvelopeOpen", file: TxIconFilled.IconEnvelopeOpen, description: "EnvelopeOpen", category: "Filled" },
        { name: "EnvelopePlus", file: TxIconFilled.IconEnvelopePlus, description: "EnvelopePlus", category: "Filled" },
        { name: "Envelope", file: TxIconFilled.IconEnvelope, description: "Envelope", category: "Filled" },
        { name: "Euro", file: TxIconFilled.IconEuro, description: "Euro", category: "Filled" },
        { name: "Exclamation", file: TxIconFilled.IconExclamation, description: "Exclamation", category: "Filled" },
        { name: "Expand", file: TxIconFilled.IconExpand, description: "Expand", category: "Filled" },
        { name: "EyeCrossed", file: TxIconFilled.IconEyeCrossed, description: "EyeCrossed", category: "Filled" },
        { name: "EyeDropper", file: TxIconFilled.IconEyeDropper, description: "EyeDropper", category: "Filled" },
        { name: "Eye", file: TxIconFilled.IconEye, description: "Eye", category: "Filled" },
        { name: "Feather", file: TxIconFilled.IconFeather, description: "Feather", category: "Filled" },
        { name: "FerrisWheel", file: TxIconFilled.IconFerrisWheel, description: "FerrisWheel", category: "Filled" },
        { name: "FileAdd", file: TxIconFilled.IconFileAdd, description: "FileAdd", category: "Filled" },
        { name: "FileAi", file: TxIconFilled.IconFileAi, description: "FileAi", category: "Filled" },
        { name: "FileCheck", file: TxIconFilled.IconFileCheck, description: "FileCheck", category: "Filled" },
        { name: "FileDelete", file: TxIconFilled.IconFileDelete, description: "FileDelete", category: "Filled" },
        { name: "FileEps", file: TxIconFilled.IconFileEps, description: "FileEps", category: "Filled" },
        { name: "FileGif", file: TxIconFilled.IconFileGif, description: "FileGif", category: "Filled" },
        { name: "FileMusic", file: TxIconFilled.IconFileMusic, description: "FileMusic", category: "Filled" },
        { name: "FilePsd", file: TxIconFilled.IconFilePsd, description: "FilePsd", category: "Filled" },
        { name: "File", file: TxIconFilled.IconFile, description: "File", category: "Filled" },
        { name: "Fill", file: TxIconFilled.IconFill, description: "Fill", category: "Filled" },
        { name: "Film", file: TxIconFilled.IconFilm, description: "Film", category: "Filled" },
        { name: "Filter", file: TxIconFilled.IconFilter, description: "Filter", category: "Filled" },
        { name: "Fingerprint", file: TxIconFilled.IconFingerprint, description: "Fingerprint", category: "Filled" },
        { name: "Fish", file: TxIconFilled.IconFish, description: "Fish", category: "Filled" },
        { name: "Flag", file: TxIconFilled.IconFlag, description: "Flag", category: "Filled" },
        { name: "Flame", file: TxIconFilled.IconFlame, description: "Flame", category: "Filled" },
        {
          name: "FlipHorizontal",
          file: TxIconFilled.IconFlipHorizontal,
          description: "FlipHorizontal",
          category: "Filled",
        },
        {
          name: "FlowerBouquet",
          file: TxIconFilled.IconFlowerBouquet,
          description: "FlowerBouquet",
          category: "Filled",
        },
        { name: "FlowerTulip", file: TxIconFilled.IconFlowerTulip, description: "FlowerTulip", category: "Filled" },
        { name: "Flower", file: TxIconFilled.IconFlower, description: "Flower", category: "Filled" },
        { name: "FolderAdd", file: TxIconFilled.IconFolderAdd, description: "FolderAdd", category: "Filled" },
        { name: "Folder", file: TxIconFilled.IconFolder, description: "Folder", category: "Filled" },
        { name: "Following", file: TxIconFilled.IconFollowing, description: "Following", category: "Filled" },
        { name: "Football", file: TxIconFilled.IconFootball, description: "Football", category: "Filled" },
        { name: "Form", file: TxIconFilled.IconForm, description: "Form", category: "Filled" },
        { name: "Forward", file: TxIconFilled.IconForward, description: "Forward", category: "Filled" },
        { name: "Fox", file: TxIconFilled.IconFox, description: "Fox", category: "Filled" },
        { name: "Frown", file: TxIconFilled.IconFrown, description: "Frown", category: "Filled" },
        { name: "Ftp", file: TxIconFilled.IconFtp, description: "Ftp", category: "Filled" },
        { name: "Gallery", file: TxIconFilled.IconGallery, description: "Gallery", category: "Filled" },
        { name: "Gamepad", file: TxIconFilled.IconGamepad, description: "Gamepad", category: "Filled" },
        { name: "GasPump", file: TxIconFilled.IconGasPump, description: "GasPump", category: "Filled" },
        { name: "Gem", file: TxIconFilled.IconGem, description: "Gem", category: "Filled" },
        { name: "Gift", file: TxIconFilled.IconGift, description: "Gift", category: "Filled" },
        { name: "GlassCheers", file: TxIconFilled.IconGlassCheers, description: "GlassCheers", category: "Filled" },
        { name: "Glasses", file: TxIconFilled.IconGlasses, description: "Glasses", category: "Filled" },
        { name: "GlobeAlt", file: TxIconFilled.IconGlobeAlt, description: "GlobeAlt", category: "Filled" },
        { name: "Globe", file: TxIconFilled.IconGlobe, description: "Globe", category: "Filled" },
        { name: "Golf", file: TxIconFilled.IconGolf, description: "Golf", category: "Filled" },
        {
          name: "GraduationCap",
          file: TxIconFilled.IconGraduationCap,
          description: "GraduationCap",
          category: "Filled",
        },
        {
          name: "GraphicTablet",
          file: TxIconFilled.IconGraphicTablet,
          description: "GraphicTablet",
          category: "Filled",
        },
        { name: "GridAlt", file: TxIconFilled.IconGridAlt, description: "GridAlt", category: "Filled" },
        { name: "Grid", file: TxIconFilled.IconGrid, description: "Grid", category: "Filled" },
        { name: "Guitar", file: TxIconFilled.IconGuitar, description: "Guitar", category: "Filled" },
        { name: "Gym", file: TxIconFilled.IconGym, description: "Gym", category: "Filled" },
        { name: "Hamburger", file: TxIconFilled.IconHamburger, description: "Hamburger", category: "Filled" },
        {
          name: "HandHoldingHeart",
          file: TxIconFilled.IconHandHoldingHeart,
          description: "HandHoldingHeart",
          category: "Filled",
        },
        { name: "Hastag", file: TxIconFilled.IconHastag, description: "Hastag", category: "Filled" },
        { name: "HatBirthday", file: TxIconFilled.IconHatBirthday, description: "HatBirthday", category: "Filled" },
        {
          name: "HeadSideThinking",
          file: TxIconFilled.IconHeadSideThinking,
          description: "HeadSideThinking",
          category: "Filled",
        },
        { name: "Headphones", file: TxIconFilled.IconHeadphones, description: "Headphones", category: "Filled" },
        { name: "Headset", file: TxIconFilled.IconHeadset, description: "Headset", category: "Filled" },
        { name: "HeartArrow", file: TxIconFilled.IconHeartArrow, description: "HeartArrow", category: "Filled" },
        { name: "Heart", file: TxIconFilled.IconHeart, description: "Heart", category: "Filled" },
        {
          name: "HomeLocationAlt",
          file: TxIconFilled.IconHomeLocationAlt,
          description: "HomeLocationAlt",
          category: "Filled",
        },
        { name: "HomeLocation", file: TxIconFilled.IconHomeLocation, description: "HomeLocation", category: "Filled" },
        { name: "Home", file: TxIconFilled.IconHome, description: "Home", category: "Filled" },
        { name: "HourglassEnd", file: TxIconFilled.IconHourglassEnd, description: "HourglassEnd", category: "Filled" },
        { name: "Hourglass", file: TxIconFilled.IconHourglass, description: "Hourglass", category: "Filled" },
        { name: "IceCream", file: TxIconFilled.IconIceCream, description: "IceCream", category: "Filled" },
        { name: "IceSkate", file: TxIconFilled.IconIceSkate, description: "IceSkate", category: "Filled" },
        { name: "IdBadge", file: TxIconFilled.IconIdBadge, description: "IdBadge", category: "Filled" },
        { name: "Inbox", file: TxIconFilled.IconInbox, description: "Inbox", category: "Filled" },
        { name: "Incognito", file: TxIconFilled.IconIncognito, description: "Incognito", category: "Filled" },
        { name: "Indent", file: TxIconFilled.IconIndent, description: "Indent", category: "Filled" },
        { name: "Infinity", file: TxIconFilled.IconInfinity, description: "Infinity", category: "Filled" },
        { name: "Info", file: TxIconFilled.IconInfo, description: "Info", category: "Filled" },
        { name: "Interactive", file: TxIconFilled.IconInteractive, description: "Interactive", category: "Filled" },
        { name: "Interlining", file: TxIconFilled.IconInterlining, description: "Interlining", category: "Filled" },
        {
          name: "Interrogation",
          file: TxIconFilled.IconInterrogation,
          description: "Interrogation",
          category: "Filled",
        },
        { name: "Italic", file: TxIconFilled.IconItalic, description: "Italic", category: "Filled" },
        { name: "Jpg", file: TxIconFilled.IconJpg, description: "Jpg", category: "Filled" },
        { name: "Key", file: TxIconFilled.IconKey, description: "Key", category: "Filled" },
        { name: "Keyboard", file: TxIconFilled.IconKeyboard, description: "Keyboard", category: "Filled" },
        { name: "Kite", file: TxIconFilled.IconKite, description: "Kite", category: "Filled" },
        { name: "Label", file: TxIconFilled.IconLabel, description: "Label", category: "Filled" },
        { name: "Laptop", file: TxIconFilled.IconLaptop, description: "Laptop", category: "Filled" },
        { name: "Lasso", file: TxIconFilled.IconLasso, description: "Lasso", category: "Filled" },
        { name: "Laugh", file: TxIconFilled.IconLaugh, description: "Laugh", category: "Filled" },
        { name: "Layers", file: TxIconFilled.IconLayers, description: "Layers", category: "Filled" },
        { name: "LayoutFluid", file: TxIconFilled.IconLayoutFluid, description: "LayoutFluid", category: "Filled" },
        { name: "Leaf", file: TxIconFilled.IconLeaf, description: "Leaf", category: "Filled" },
        { name: "LetterCase", file: TxIconFilled.IconLetterCase, description: "LetterCase", category: "Filled" },
        { name: "LifeRing", file: TxIconFilled.IconLifeRing, description: "LifeRing", category: "Filled" },
        { name: "LineWidth", file: TxIconFilled.IconLineWidth, description: "LineWidth", category: "Filled" },
        { name: "Link", file: TxIconFilled.IconLink, description: "Link", category: "Filled" },
        { name: "Lipstick", file: TxIconFilled.IconLipstick, description: "Lipstick", category: "Filled" },
        { name: "ListCheck", file: TxIconFilled.IconListCheck, description: "ListCheck", category: "Filled" },
        { name: "List", file: TxIconFilled.IconList, description: "List", category: "Filled" },
        { name: "LocationAlt", file: TxIconFilled.IconLocationAlt, description: "LocationAlt", category: "Filled" },
        { name: "LockAlt", file: TxIconFilled.IconLockAlt, description: "LockAlt", category: "Filled" },
        { name: "Lock", file: TxIconFilled.IconLock, description: "Lock", category: "Filled" },
        {
          name: "LuggageRolling",
          file: TxIconFilled.IconLuggageRolling,
          description: "LuggageRolling",
          category: "Filled",
        },
        { name: "MagicWand", file: TxIconFilled.IconMagicWand, description: "MagicWand", category: "Filled" },
        { name: "MakeupBrush", file: TxIconFilled.IconMakeupBrush, description: "MakeupBrush", category: "Filled" },
        { name: "ManHead", file: TxIconFilled.IconManHead, description: "ManHead", category: "Filled" },
        {
          name: "MapMarkerCross",
          file: TxIconFilled.IconMapMarkerCross,
          description: "MapMarkerCross",
          category: "Filled",
        },
        {
          name: "MapMarkerHome",
          file: TxIconFilled.IconMapMarkerHome,
          description: "MapMarkerHome",
          category: "Filled",
        },
        {
          name: "MapMarkerMinus",
          file: TxIconFilled.IconMapMarkerMinus,
          description: "MapMarkerMinus",
          category: "Filled",
        },
        {
          name: "MapMarkerPlus",
          file: TxIconFilled.IconMapMarkerPlus,
          description: "MapMarkerPlus",
          category: "Filled",
        },
        { name: "MapMarker", file: TxIconFilled.IconMapMarker, description: "MapMarker", category: "Filled" },
        { name: "Map", file: TxIconFilled.IconMap, description: "Map", category: "Filled" },
        { name: "MarkerTime", file: TxIconFilled.IconMarkerTime, description: "MarkerTime", category: "Filled" },
        { name: "Marker", file: TxIconFilled.IconMarker, description: "Marker", category: "Filled" },
        { name: "MarsDouble", file: TxIconFilled.IconMarsDouble, description: "MarsDouble", category: "Filled" },
        { name: "Mars", file: TxIconFilled.IconMars, description: "Mars", category: "Filled" },
        { name: "MaskCarnival", file: TxIconFilled.IconMaskCarnival, description: "MaskCarnival", category: "Filled" },
        { name: "Medicine", file: TxIconFilled.IconMedicine, description: "Medicine", category: "Filled" },
        { name: "Megaphone", file: TxIconFilled.IconMegaphone, description: "Megaphone", category: "Filled" },
        { name: "Meh", file: TxIconFilled.IconMeh, description: "Meh", category: "Filled" },
        { name: "MenuBurger", file: TxIconFilled.IconMenuBurger, description: "MenuBurger", category: "Filled" },
        {
          name: "MenuDotsVertical",
          file: TxIconFilled.IconMenuDotsVertical,
          description: "MenuDotsVertical",
          category: "Filled",
        },
        { name: "MenuDots", file: TxIconFilled.IconMenuDots, description: "MenuDots", category: "Filled" },
        {
          name: "MicrophoneAlt",
          file: TxIconFilled.IconMicrophoneAlt,
          description: "MicrophoneAlt",
          category: "Filled",
        },
        { name: "Microphone", file: TxIconFilled.IconMicrophone, description: "Microphone", category: "Filled" },
        { name: "MinusSmall", file: TxIconFilled.IconMinusSmall, description: "MinusSmall", category: "Filled" },
        { name: "Minus", file: TxIconFilled.IconMinus, description: "Minus", category: "Filled" },
        { name: "Mobile", file: TxIconFilled.IconMobile, description: "Mobile", category: "Filled" },
        {
          name: "ModeLandscape",
          file: TxIconFilled.IconModeLandscape,
          description: "ModeLandscape",
          category: "Filled",
        },
        { name: "ModePortrait", file: TxIconFilled.IconModePortrait, description: "ModePortrait", category: "Filled" },
        { name: "Money", file: TxIconFilled.IconMoney, description: "Money", category: "Filled" },
        { name: "Moon", file: TxIconFilled.IconMoon, description: "Moon", category: "Filled" },
        { name: "Mountains", file: TxIconFilled.IconMountains, description: "Mountains", category: "Filled" },
        { name: "Mouse", file: TxIconFilled.IconMouse, description: "Mouse", category: "Filled" },
        { name: "MugAlt", file: TxIconFilled.IconMugAlt, description: "MugAlt", category: "Filled" },
        { name: "MusicAlt", file: TxIconFilled.IconMusicAlt, description: "MusicAlt", category: "Filled" },
        { name: "Music", file: TxIconFilled.IconMusic, description: "Music", category: "Filled" },
        { name: "Navigation", file: TxIconFilled.IconNavigation, description: "Navigation", category: "Filled" },
        { name: "NetworkCloud", file: TxIconFilled.IconNetworkCloud, description: "NetworkCloud", category: "Filled" },
        { name: "Network", file: TxIconFilled.IconNetwork, description: "Network", category: "Filled" },
        { name: "Notebook", file: TxIconFilled.IconNotebook, description: "Notebook", category: "Filled" },
        { name: "Opacity", file: TxIconFilled.IconOpacity, description: "Opacity", category: "Filled" },
        { name: "Package", file: TxIconFilled.IconPackage, description: "Package", category: "Filled" },
        { name: "PaintBrush", file: TxIconFilled.IconPaintBrush, description: "PaintBrush", category: "Filled" },
        { name: "Palette", file: TxIconFilled.IconPalette, description: "Palette", category: "Filled" },
        { name: "PaperPlane", file: TxIconFilled.IconPaperPlane, description: "PaperPlane", category: "Filled" },
        { name: "Password", file: TxIconFilled.IconPassword, description: "Password", category: "Filled" },
        { name: "Pause", file: TxIconFilled.IconPause, description: "Pause", category: "Filled" },
        { name: "Paw", file: TxIconFilled.IconPaw, description: "Paw", category: "Filled" },
        { name: "Pencil", file: TxIconFilled.IconPencil, description: "Pencil", category: "Filled" },
        { name: "Pharmacy", file: TxIconFilled.IconPharmacy, description: "Pharmacy", category: "Filled" },
        { name: "PhoneCall", file: TxIconFilled.IconPhoneCall, description: "PhoneCall", category: "Filled" },
        { name: "PhoneCross", file: TxIconFilled.IconPhoneCross, description: "PhoneCross", category: "Filled" },
        { name: "PhonePause", file: TxIconFilled.IconPhonePause, description: "PhonePause", category: "Filled" },
        { name: "PhoneSlash", file: TxIconFilled.IconPhoneSlash, description: "PhoneSlash", category: "Filled" },
        { name: "Physics", file: TxIconFilled.IconPhysics, description: "Physics", category: "Filled" },
        { name: "Picture", file: TxIconFilled.IconPicture, description: "Picture", category: "Filled" },
        { name: "PingPong", file: TxIconFilled.IconPingPong, description: "PingPong", category: "Filled" },
        { name: "PizzaSlice", file: TxIconFilled.IconPizzaSlice, description: "PizzaSlice", category: "Filled" },
        { name: "Plane", file: TxIconFilled.IconPlane, description: "Plane", category: "Filled" },
        { name: "PlayAlt", file: TxIconFilled.IconPlayAlt, description: "PlayAlt", category: "Filled" },
        { name: "Play", file: TxIconFilled.IconPlay, description: "Play", category: "Filled" },
        { name: "PlayingCards", file: TxIconFilled.IconPlayingCards, description: "PlayingCards", category: "Filled" },
        { name: "PlusSmall", file: TxIconFilled.IconPlusSmall, description: "PlusSmall", category: "Filled" },
        { name: "Plus", file: TxIconFilled.IconPlus, description: "Plus", category: "Filled" },
        { name: "PokerChip", file: TxIconFilled.IconPokerChip, description: "PokerChip", category: "Filled" },
        { name: "Portrait", file: TxIconFilled.IconPortrait, description: "Portrait", category: "Filled" },
        { name: "Pound", file: TxIconFilled.IconPound, description: "Pound", category: "Filled" },
        { name: "Power", file: TxIconFilled.IconPower, description: "Power", category: "Filled" },
        { name: "Presentation", file: TxIconFilled.IconPresentation, description: "Presentation", category: "Filled" },
        { name: "Print", file: TxIconFilled.IconPrint, description: "Print", category: "Filled" },
        { name: "Protractor", file: TxIconFilled.IconProtractor, description: "Protractor", category: "Filled" },
        { name: "Pulse", file: TxIconFilled.IconPulse, description: "Pulse", category: "Filled" },
        { name: "Pyramid", file: TxIconFilled.IconPyramid, description: "Pyramid", category: "Filled" },
        { name: "QuoteRight", file: TxIconFilled.IconQuoteRight, description: "QuoteRight", category: "Filled" },
        { name: "Rainbow", file: TxIconFilled.IconRainbow, description: "Rainbow", category: "Filled" },
        { name: "Raindrops", file: TxIconFilled.IconRaindrops, description: "Raindrops", category: "Filled" },
        { name: "Rec", file: TxIconFilled.IconRec, description: "Rec", category: "Filled" },
        { name: "Receipt", file: TxIconFilled.IconReceipt, description: "Receipt", category: "Filled" },
        { name: "RecordVinyl", file: TxIconFilled.IconRecordVinyl, description: "RecordVinyl", category: "Filled" },
        {
          name: "RectabgleVertical",
          file: TxIconFilled.IconRectabgleVertical,
          description: "RectabgleVertical",
          category: "Filled",
        },
        {
          name: "RectangleHorizontal",
          file: TxIconFilled.IconRectangleHorizontal,
          description: "RectangleHorizontal",
          category: "Filled",
        },
        {
          name: "RectanglePanoramic",
          file: TxIconFilled.IconRectanglePanoramic,
          description: "RectanglePanoramic",
          category: "Filled",
        },
        { name: "Recycle", file: TxIconFilled.IconRecycle, description: "Recycle", category: "Filled" },
        { name: "RedoAlt", file: TxIconFilled.IconRedoAlt, description: "RedoAlt", category: "Filled" },
        { name: "Redo", file: TxIconFilled.IconRedo, description: "Redo", category: "Filled" },
        { name: "Reflect", file: TxIconFilled.IconReflect, description: "Reflect", category: "Filled" },
        { name: "Refresh", file: TxIconFilled.IconRefresh, description: "Refresh", category: "Filled" },
        { name: "Resize", file: TxIconFilled.IconResize, description: "Resize", category: "Filled" },
        { name: "Resources", file: TxIconFilled.IconResources, description: "Resources", category: "Filled" },
        { name: "Rewind", file: TxIconFilled.IconRewind, description: "Rewind", category: "Filled" },
        { name: "Rhombus", file: TxIconFilled.IconRhombus, description: "Rhombus", category: "Filled" },
        { name: "RingsWedding", file: TxIconFilled.IconRingsWedding, description: "RingsWedding", category: "Filled" },
        { name: "Road", file: TxIconFilled.IconRoad, description: "Road", category: "Filled" },
        { name: "Rocket", file: TxIconFilled.IconRocket, description: "Rocket", category: "Filled" },
        { name: "RoomService", file: TxIconFilled.IconRoomService, description: "RoomService", category: "Filled" },
        { name: "RotateRight", file: TxIconFilled.IconRotateRight, description: "RotateRight", category: "Filled" },
        { name: "Rugby", file: TxIconFilled.IconRugby, description: "Rugby", category: "Filled" },
        { name: "Sad", file: TxIconFilled.IconSad, description: "Sad", category: "Filled" },
        { name: "Salad", file: TxIconFilled.IconSalad, description: "Salad", category: "Filled" },
        { name: "Scale", file: TxIconFilled.IconScale, description: "Scale", category: "Filled" },
        { name: "SchoolBus", file: TxIconFilled.IconSchoolBus, description: "SchoolBus", category: "Filled" },
        { name: "School", file: TxIconFilled.IconSchool, description: "School", category: "Filled" },
        { name: "Scissors", file: TxIconFilled.IconScissors, description: "Scissors", category: "Filled" },
        { name: "Screen", file: TxIconFilled.IconScreen, description: "Screen", category: "Filled" },
        { name: "SearchAlt", file: TxIconFilled.IconSearchAlt, description: "SearchAlt", category: "Filled" },
        { name: "SearchHeart", file: TxIconFilled.IconSearchHeart, description: "SearchHeart", category: "Filled" },
        { name: "Search", file: TxIconFilled.IconSearch, description: "Search", category: "Filled" },
        {
          name: "SettingsSliders",
          file: TxIconFilled.IconSettingsSliders,
          description: "SettingsSliders",
          category: "Filled",
        },
        { name: "Settings", file: TxIconFilled.IconSettings, description: "Settings", category: "Filled" },
        { name: "Share", file: TxIconFilled.IconShare, description: "Share", category: "Filled" },
        { name: "ShieldCheck", file: TxIconFilled.IconShieldCheck, description: "ShieldCheck", category: "Filled" },
        {
          name: "ShieldExclamation",
          file: TxIconFilled.IconShieldExclamation,
          description: "ShieldExclamation",
          category: "Filled",
        },
        {
          name: "ShieldInterrogation",
          file: TxIconFilled.IconShieldInterrogation,
          description: "ShieldInterrogation",
          category: "Filled",
        },
        { name: "ShieldPlus", file: TxIconFilled.IconShieldPlus, description: "ShieldPlus", category: "Filled" },
        { name: "Shield", file: TxIconFilled.IconShield, description: "Shield", category: "Filled" },
        { name: "ShipSide", file: TxIconFilled.IconShipSide, description: "ShipSide", category: "Filled" },
        { name: "Ship", file: TxIconFilled.IconShip, description: "Ship", category: "Filled" },
        { name: "Shop", file: TxIconFilled.IconShop, description: "Shop", category: "Filled" },
        {
          name: "ShoppingBagAdd",
          file: TxIconFilled.IconShoppingBagAdd,
          description: "ShoppingBagAdd",
          category: "Filled",
        },
        { name: "ShoppingBag", file: TxIconFilled.IconShoppingBag, description: "ShoppingBag", category: "Filled" },
        {
          name: "ShoppingCartAdd",
          file: TxIconFilled.IconShoppingCartAdd,
          description: "ShoppingCartAdd",
          category: "Filled",
        },
        {
          name: "ShoppingCartCheck",
          file: TxIconFilled.IconShoppingCartCheck,
          description: "ShoppingCartCheck",
          category: "Filled",
        },
        { name: "ShoppingCart", file: TxIconFilled.IconShoppingCart, description: "ShoppingCart", category: "Filled" },
        { name: "Shuffle", file: TxIconFilled.IconShuffle, description: "Shuffle", category: "Filled" },
        { name: "SignInAlt", file: TxIconFilled.IconSignInAlt, description: "SignInAlt", category: "Filled" },
        { name: "SignIn", file: TxIconFilled.IconSignIn, description: "SignIn", category: "Filled" },
        { name: "SignOutAlt", file: TxIconFilled.IconSignOutAlt, description: "SignOutAlt", category: "Filled" },
        { name: "SignOut", file: TxIconFilled.IconSignOut, description: "SignOut", category: "Filled" },
        { name: "SignalAlt1", file: TxIconFilled.IconSignalAlt1, description: "SignalAlt1", category: "Filled" },
        { name: "SignalAlt2", file: TxIconFilled.IconSignalAlt2, description: "SignalAlt2", category: "Filled" },
        { name: "SignalAlt", file: TxIconFilled.IconSignalAlt, description: "SignalAlt", category: "Filled" },
        { name: "Skateboard", file: TxIconFilled.IconSkateboard, description: "Skateboard", category: "Filled" },
        { name: "Smartphone", file: TxIconFilled.IconSmartphone, description: "Smartphone", category: "Filled" },
        { name: "SmileWink", file: TxIconFilled.IconSmileWink, description: "SmileWink", category: "Filled" },
        { name: "Smile", file: TxIconFilled.IconSmile, description: "Smile", category: "Filled" },
        { name: "Snowflake", file: TxIconFilled.IconSnowflake, description: "Snowflake", category: "Filled" },
        { name: "Soap", file: TxIconFilled.IconSoap, description: "Soap", category: "Filled" },
        { name: "Soup", file: TxIconFilled.IconSoup, description: "Soup", category: "Filled" },
        { name: "Spa", file: TxIconFilled.IconSpa, description: "Spa", category: "Filled" },
        { name: "Speaker", file: TxIconFilled.IconSpeaker, description: "Speaker", category: "Filled" },
        { name: "Sphere", file: TxIconFilled.IconSphere, description: "Sphere", category: "Filled" },
        { name: "SpinnerAlt", file: TxIconFilled.IconSpinnerAlt, description: "SpinnerAlt", category: "Filled" },
        { name: "Spinner", file: TxIconFilled.IconSpinner, description: "Spinner", category: "Filled" },
        { name: "SquareRoot", file: TxIconFilled.IconSquareRoot, description: "SquareRoot", category: "Filled" },
        { name: "Square", file: TxIconFilled.IconSquare, description: "Square", category: "Filled" },
        { name: "StarOctogram", file: TxIconFilled.IconStarOctogram, description: "StarOctogram", category: "Filled" },
        { name: "Star", file: TxIconFilled.IconStar, description: "Star", category: "Filled" },
        { name: "Stats", file: TxIconFilled.IconStats, description: "Stats", category: "Filled" },
        { name: "Stethoscope", file: TxIconFilled.IconStethoscope, description: "Stethoscope", category: "Filled" },
        { name: "Sticker", file: TxIconFilled.IconSticker, description: "Sticker", category: "Filled" },
        { name: "Stop", file: TxIconFilled.IconStop, description: "Stop", category: "Filled" },
        { name: "Stopwatch", file: TxIconFilled.IconStopwatch, description: "Stopwatch", category: "Filled" },
        { name: "Subtitles", file: TxIconFilled.IconSubtitles, description: "Subtitles", category: "Filled" },
        { name: "Sun", file: TxIconFilled.IconSun, description: "Sun", category: "Filled" },
        { name: "Sunrise", file: TxIconFilled.IconSunrise, description: "Sunrise", category: "Filled" },
        { name: "Surfing", file: TxIconFilled.IconSurfing, description: "Surfing", category: "Filled" },
        { name: "Sword", file: TxIconFilled.IconSword, description: "Sword", category: "Filled" },
        { name: "Syringe", file: TxIconFilled.IconSyringe, description: "Syringe", category: "Filled" },
        { name: "Tablet", file: TxIconFilled.IconTablet, description: "Tablet", category: "Filled" },
        { name: "Target", file: TxIconFilled.IconTarget, description: "Target", category: "Filled" },
        { name: "Taxi", file: TxIconFilled.IconTaxi, description: "Taxi", category: "Filled" },
        { name: "Tennis", file: TxIconFilled.IconTennis, description: "Tennis", category: "Filled" },
        { name: "Terrace", file: TxIconFilled.IconTerrace, description: "Terrace", category: "Filled" },
        { name: "TestTube", file: TxIconFilled.IconTestTube, description: "TestTube", category: "Filled" },
        { name: "Test", file: TxIconFilled.IconTest, description: "Test", category: "Filled" },
        { name: "TextCheck", file: TxIconFilled.IconTextCheck, description: "TextCheck", category: "Filled" },
        { name: "Text", file: TxIconFilled.IconText, description: "Text", category: "Filled" },
        {
          name: "ThermometerHalf",
          file: TxIconFilled.IconThermometerHalf,
          description: "ThermometerHalf",
          category: "Filled",
        },
        { name: "ThumbsDown", file: TxIconFilled.IconThumbsDown, description: "ThumbsDown", category: "Filled" },
        { name: "ThumbsUp", file: TxIconFilled.IconThumbsUp, description: "ThumbsUp", category: "Filled" },
        { name: "Thumbtack", file: TxIconFilled.IconThumbtack, description: "Thumbtack", category: "Filled" },
        { name: "Ticket", file: TxIconFilled.IconTicket, description: "Ticket", category: "Filled" },
        { name: "TimeAdd", file: TxIconFilled.IconTimeAdd, description: "TimeAdd", category: "Filled" },
        { name: "TimeCheck", file: TxIconFilled.IconTimeCheck, description: "TimeCheck", category: "Filled" },
        { name: "TimeDelete", file: TxIconFilled.IconTimeDelete, description: "TimeDelete", category: "Filled" },
        { name: "TimeFast", file: TxIconFilled.IconTimeFast, description: "TimeFast", category: "Filled" },
        {
          name: "TimeForwardSixty",
          file: TxIconFilled.IconTimeForwardSixty,
          description: "TimeForwardSixty",
          category: "Filled",
        },
        {
          name: "TimeForwardTen",
          file: TxIconFilled.IconTimeForwardTen,
          description: "TimeForwardTen",
          category: "Filled",
        },
        { name: "TimeForward", file: TxIconFilled.IconTimeForward, description: "TimeForward", category: "Filled" },
        { name: "TimeHalfPast", file: TxIconFilled.IconTimeHalfPast, description: "TimeHalfPast", category: "Filled" },
        { name: "TimeOclock", file: TxIconFilled.IconTimeOclock, description: "TimeOclock", category: "Filled" },
        { name: "TimePast", file: TxIconFilled.IconTimePast, description: "TimePast", category: "Filled" },
        {
          name: "TimeQuarterPast",
          file: TxIconFilled.IconTimeQuarterPast,
          description: "TimeQuarterPast",
          category: "Filled",
        },
        {
          name: "TimeQuarterTo",
          file: TxIconFilled.IconTimeQuarterTo,
          description: "TimeQuarterTo",
          category: "Filled",
        },
        {
          name: "TimeTwentyFour",
          file: TxIconFilled.IconTimeTwentyFour,
          description: "TimeTwentyFour",
          category: "Filled",
        },
        { name: "ToolCrop", file: TxIconFilled.IconToolCrop, description: "ToolCrop", category: "Filled" },
        { name: "ToolMarquee", file: TxIconFilled.IconToolMarquee, description: "ToolMarquee", category: "Filled" },
        { name: "Tooth", file: TxIconFilled.IconTooth, description: "Tooth", category: "Filled" },
        { name: "Tornado", file: TxIconFilled.IconTornado, description: "Tornado", category: "Filled" },
        { name: "TrainSide", file: TxIconFilled.IconTrainSide, description: "TrainSide", category: "Filled" },
        { name: "Train", file: TxIconFilled.IconTrain, description: "Train", category: "Filled" },
        { name: "Transform", file: TxIconFilled.IconTransform, description: "Transform", category: "Filled" },
        { name: "Trash", file: TxIconFilled.IconTrash, description: "Trash", category: "Filled" },
        { name: "Treatment", file: TxIconFilled.IconTreatment, description: "Treatment", category: "Filled" },
        {
          name: "TreeChristmas",
          file: TxIconFilled.IconTreeChristmas,
          description: "TreeChristmas",
          category: "Filled",
        },
        { name: "Tree", file: TxIconFilled.IconTree, description: "Tree", category: "Filled" },
        { name: "Triangle", file: TxIconFilled.IconTriangle, description: "Triangle", category: "Filled" },
        { name: "Trophy", file: TxIconFilled.IconTrophy, description: "Trophy", category: "Filled" },
        { name: "TruckSide", file: TxIconFilled.IconTruckSide, description: "TruckSide", category: "Filled" },
        { name: "Umbrella", file: TxIconFilled.IconUmbrella, description: "Umbrella", category: "Filled" },
        { name: "Underline", file: TxIconFilled.IconUnderline, description: "Underline", category: "Filled" },
        { name: "UndoAlt", file: TxIconFilled.IconUndoAlt, description: "UndoAlt", category: "Filled" },
        { name: "Undo", file: TxIconFilled.IconUndo, description: "Undo", category: "Filled" },
        { name: "Unlock", file: TxIconFilled.IconUnlock, description: "Unlock", category: "Filled" },
        { name: "Upload", file: TxIconFilled.IconUpload, description: "Upload", category: "Filled" },
        { name: "UsbPendrive", file: TxIconFilled.IconUsbPendrive, description: "UsbPendrive", category: "Filled" },
        { name: "UserAdd", file: TxIconFilled.IconUserAdd, description: "UserAdd", category: "Filled" },
        { name: "UserDelete", file: TxIconFilled.IconUserDelete, description: "UserDelete", category: "Filled" },
        { name: "UserRemove", file: TxIconFilled.IconUserRemove, description: "UserRemove", category: "Filled" },
        { name: "UserTime", file: TxIconFilled.IconUserTime, description: "UserTime", category: "Filled" },
        { name: "User", file: TxIconFilled.IconUser, description: "User", category: "Filled" },
        { name: "Utensils", file: TxIconFilled.IconUtensils, description: "Utensils", category: "Filled" },
        { name: "VectorAlt", file: TxIconFilled.IconVectorAlt, description: "VectorAlt", category: "Filled" },
        { name: "Vector", file: TxIconFilled.IconVector, description: "Vector", category: "Filled" },
        { name: "VenusDouble", file: TxIconFilled.IconVenusDouble, description: "VenusDouble", category: "Filled" },
        { name: "VenusMars", file: TxIconFilled.IconVenusMars, description: "VenusMars", category: "Filled" },
        { name: "Venus", file: TxIconFilled.IconVenus, description: "Venus", category: "Filled" },
        { name: "VideoCamera", file: TxIconFilled.IconVideoCamera, description: "VideoCamera", category: "Filled" },
        { name: "Volleyball", file: TxIconFilled.IconVolleyball, description: "Volleyball", category: "Filled" },
        { name: "Volume", file: TxIconFilled.IconVolume, description: "Volume", category: "Filled" },
        { name: "Wheelchair", file: TxIconFilled.IconWheelchair, description: "Wheelchair", category: "Filled" },
        { name: "WifiAlt", file: TxIconFilled.IconWifiAlt, description: "WifiAlt", category: "Filled" },
        { name: "Wind", file: TxIconFilled.IconWind, description: "Wind", category: "Filled" },
        { name: "WomanHead", file: TxIconFilled.IconWomanHead, description: "WomanHead", category: "Filled" },
        { name: "World", file: TxIconFilled.IconWorld, description: "World", category: "Filled" },
        { name: "Yen", file: TxIconFilled.IconYen, description: "Yen", category: "Filled" },
        { name: "ZoomIn", file: TxIconFilled.IconZoomIn, description: "ZoomIn", category: "Filled" },
        { name: "ZoomOut", file: TxIconFilled.IconZoomOut, description: "ZoomOut", category: "Filled" },
      ];
      function IconListTemplate(_ref) {
        _ref.variant;
        var _useState = (0, react.useState)(""),
          _useState2 = (0, slicedToArray.A)(_useState, 2),
          searchQuery = _useState2[0],
          setSearchQuery = _useState2[1],
          filteredIcons = iconData.filter(function (icon) {
            return (
              icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              icon.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
          });
        return (0, jsx_runtime.jsxs)("div", {
          style: { margin: "0 auto" },
          children: [
            (0, jsx_runtime.jsx)("div", {
              style: { marginBottom: "24px" },
              children: (0, jsx_runtime.jsx)("input", {
                type: "text",
                placeholder: "Search ".concat(iconData.length, " icons by name..."),
                value: searchQuery,
                onChange: function onChange(e) {
                  return setSearchQuery(e.target.value);
                },
                style: {
                  width: "100%",
                  padding: "14px 18px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  fontSize: "15px",
                  Filled: "none",
                  transition: "border-color 0.2s",
                },
                onFocus: function onFocus(e) {
                  e.target.style.borderColor = "#00bcff";
                },
                onBlur: function onBlur(e) {
                  e.target.style.borderColor = "#e0e0e0";
                },
              }),
            }),
            (0, jsx_runtime.jsxs)("div", {
              style: { marginBottom: "16px", fontSize: "14px", color: "#666" },
              children: ["Showing ", filteredIcons.length, " of ", iconData.length, " icons"],
            }),
            filteredIcons.length > 0
              ? (0, jsx_runtime.jsx)("div", {
                  style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: "8px" },
                  children: filteredIcons.map(function (icon) {
                    return (0, jsx_runtime.jsxs)(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "8px",
                          padding: "12px",
                          background: "#ffffff",
                          border: "1px solid #e0e0e0",
                          borderRadius: "12px",
                          transition: "all 0.2s",
                          cursor: "pointer",
                        },
                        onMouseEnter: function onMouseEnter(e) {
                          (e.currentTarget.style.transform = "translateY(-4px)"),
                            (e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)"),
                            (e.currentTarget.style.borderColor = "#00bcff");
                        },
                        onMouseLeave: function onMouseLeave(e) {
                          (e.currentTarget.style.transform = "translateY(0)"),
                            (e.currentTarget.style.boxShadow = "none"),
                            (e.currentTarget.style.borderColor = "#e0e0e0");
                        },
                        children: [
                          (0, jsx_runtime.jsx)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "40px",
                              height: "40px",
                              background: "#f5f5f5",
                              borderRadius: "12px",
                              marginBottom: "4px",
                            },
                            children: (0, jsx_runtime.jsx)("img", {
                              src: icon.file,
                              alt: icon.name,
                              style: { width: "16px", height: "16px", objectFit: "contain" },
                            }),
                          }),
                          (0, jsx_runtime.jsx)("div", {
                            style: { textAlign: "center", width: "100%" },
                            children: (0, jsx_runtime.jsx)("span", {
                              style: {
                                display: "block",
                                marginBottom: "4px",
                                fontSize: "11px",
                                color: "#1a1a1a",
                                lineHeight: "1.2",
                                fontWeight: "500",
                              },
                              children: icon.name,
                            }),
                          }),
                        ],
                      },
                      icon.name
                    );
                  }),
                })
              : (0, jsx_runtime.jsxs)("div", {
                  style: { textAlign: "center", padding: "60px", color: "#888" },
                  children: [
                    (0, jsx_runtime.jsxs)("p", {
                      style: { fontSize: "16px" },
                      children: ['No icons found matching "', searchQuery, '"'],
                    }),
                    (0, jsx_runtime.jsx)("p", {
                      style: { fontSize: "14px", marginTop: "8px" },
                      children: "Try a different search term",
                    }),
                  ],
                }),
          ],
        });
      }
      var Filled = {
        render: function render() {
          return (0, jsx_runtime.jsx)(IconListTemplate, { variant: "filled" });
        },
      };
      const __namedExportsOrder = ["Filled"];
      Filled.parameters = {
        ...Filled.parameters,
        docs: {
          ...Filled.parameters?.docs,
          source: {
            originalSource: '{\n  render: () => <IconListTemplate variant="filled" />\n}',
            ...Filled.parameters?.docs?.source,
          },
        },
      };
    },
  },
]);
