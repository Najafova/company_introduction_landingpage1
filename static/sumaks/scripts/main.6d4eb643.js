(window.webpackJsonp = window.webpackJsonp || []).push([
  [2], {
    /***/
    IhKj:
      /***/
      function (e, t, o) {
        "use strict";
        o.r(t);
        /* harmony import */
        o("WMMs");
        /* harmony import */
        var a = o("+Gof"),
          c = o("nMSW"),
          n = /* */ o.n(c); // currrent language setting to localStorage
        var r = window.location.pathname;
        "/aze/" === r ? (localStorage.setItem("lang", "aze"), document.querySelector("#aze").setAttribute("checked", !0)) : "/en/" !== r && "/en" !== r || (localStorage.setItem("lang", "en"), document.querySelector("#en").setAttribute("checked", !0)), document.querySelectorAll(".main-carousel").forEach(function (e) {
          new n.a(e, {
            // options
            cellAlign: "left",
            contain: !0,
            pageDots: !1,
            autoPlay: !0
          })
        }); // flickity carousel
        //team carousel
        var i = document.querySelector(".team-carousel"),
          s = (new n.a(i, {
            // options
            autoPlay: !0,
            pageDots: !1,
            groupCells: !0,
            contain: !0
          }), {
            wrapper: document.querySelector(".wrapper"),
            header: document.querySelector(".header"),
            headerHeight: document.querySelector(".header").clientHeight,
            links: document.querySelectorAll(".item"),
            hamburgerBtn: document.querySelector(".hamburger-btn"),
            headerNav: document.querySelector(".header nav")
          }),
          l = {
            main: document.querySelector('[data-id="home"]'),
            about: document.querySelector('[data-id="about"]'),
            services: document.querySelector('[data-id="services"]'),
            projects: document.querySelector('[data-id="projects"]'),
            team: document.querySelector('[data-id="team"]'),
            contact: document.querySelector('[data-id="contact"]')
          },
          d = document.querySelector("#about").offsetTop - s.headerHeight,
          u = document.querySelector("#services").offsetTop - s.headerHeight,
          m = document.querySelector("#projects").offsetTop - s.headerHeight - 5,
          v = document.querySelector("#team").offsetTop - s.headerHeight,
          h = document.querySelector("#contact").offsetTop - s.headerHeight,
          f = document.querySelector("#footer").offsetTop - s.headerHeight
         
        // Reveal animations
        if (document.body.classList.contains("has-animations")) {
          var p = window.sr = Object(a.a)();
          p.reveal(".about--right-block", {
            duration: 1300,
            distance: "100px",
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            origin: "right"
          }), p.reveal(".about--left-block", {
            duration: 1300,
            distance: "100px",
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            origin: "left"
          }), p.reveal(".services-animation", {
            duration: 1e3,
            distance: "80px",
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            interval: 200,
            origin: "bottom",
            viewFactor: .2
          })
        }
        var b = document.querySelectorAll(".nav-menu--item > a");

        function y(e, t) {
          e.preventDefault();
          var o = this.firstChild.getAttribute("data-id");
          t = document.getElementById(o).offsetTop - s.header.clientHeight, window.scroll({
            top: t,
            left: 0,
            behavior: "smooth"
          }), s.headerNav.classList.contains("menu-visible") && (s.headerNav.classList.remove("menu-visible"), s.hamburgerBtn.classList.remove("active"))
        }
        L();
        for (var S = 0; S < s.links.length; S++) s.links[S].addEventListener("click", y);

        function L() {
          window.scrollY < d && window.scrollY > 0 ? (b.forEach(function (e) {
            e.classList.remove("active-nav")
          }), l.main.classList.add("active-nav")) : window.scrollY < u && d < window.scrollY ? (b.forEach(function (e) {
            e.classList.remove("active-nav")
          }), l.about.classList.add("active-nav")) : window.scrollY < m && window.scrollY > d ? (b.forEach(function (e) {
            e.classList.remove("active-nav")
          }), l.services.classList.add("active-nav")) : window.scrollY < v && window.scrollY > u ? (b.forEach(function (e) {
            e.classList.remove("active-nav")
          }), l.projects.classList.add("active-nav")) : window.scrollY < h && window.scrollY > m ? (b.forEach(function (e) {
            e.classList.remove("active-nav")
          }), l.team.classList.add("active-nav")) : window.scrollY > h && window.scrollY < f && (b.forEach(function (e) {
            e.classList.remove("active-nav")
          }), l.contact.classList.add("active-nav"))
        }
         window.addEventListener("scroll", function () {
          L(), window.scrollY > 40 ? s.header.classList.add("fixed-nav") : s.header.classList.remove("fixed-nav")
        }), s.hamburgerBtn.addEventListener("click", function () {
          s.headerNav.classList.toggle("menu-visible"), this.classList.toggle("active"), s.links.forEach(function (e) {
            e.classList.toggle("make-me-animate")
          })
        }), document.querySelector(".dropdown-el").addEventListener("click", function (e) {
            e.preventDefault(), e.stopPropagation(), this.classList.toggle("expanded");
            var t = document.querySelector("#".concat(e.target.getAttribute("for"))),
              o = e.target.getAttribute("for");
            document.querySelectorAll("input[type='radio']").forEach(function (e) {
              e.removeAttribute("checked")
            }), t.setAttribute("checked", !0), localStorage.setItem("lang", o), this.classList.contains("expanded") || ("aze" === o ? window.location.href = "/" : "en" === o && (window.location.href = "/en/"))
          }
          /***/
        )
      },
    /***/
    WMMs:
      /***/
      function (e, t, o) {
        // extracted by mini-css-extract-plugin
        /***/
      }
  },
  [
    ["IhKj", 0, 1]
  ]
]);

var map, popup, Popup;
/** Initializes the map and the custom popup. */
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40.406053,
      lng: 49.848459
    },
    zoom: 15,
  });

  Popup = createPopupClass();
  popup = new Popup(
    new google.maps.LatLng(40.406053, 49.848459),
    document.getElementById('content'));
  popup.setMap(map);
/**
 * Returns the Popup class.
 *
 * Unfortunately, the Popup class can only be defined after
 * google.maps.OverlayView is defined, when the Maps API is loaded.
 * This function should be called by initMap.
 */
function createPopupClass() {
  /**
   * A customized popup on the map.
   * @param {!google.maps.LatLng} position
   * @param {!Element} content The bubble div.
   * @constructor
   * @extends {google.maps.OverlayView}
   */
  function Popup(position, content) {
    this.position = position;

    content.classList.add('popup-bubble');

    // This zero-height div is positioned at the bottom of the bubble.
    var bubbleAnchor = document.createElement('div');
    bubbleAnchor.classList.add('popup-bubble-anchor');
    bubbleAnchor.appendChild(content);

    // This zero-height div is positioned at the bottom of the tip.
    this.containerDiv = document.createElement('div');
    this.containerDiv.classList.add('popup-container');
    this.containerDiv.appendChild(bubbleAnchor);

    // Optionally stop clicks, etc., from bubbling up to the map.
    google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
  }
  // ES5 magic to extend google.maps.OverlayView.
  Popup.prototype = Object.create(google.maps.OverlayView.prototype);

  /** Called when the popup is added to the map. */
  Popup.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.containerDiv);
  };

  /** Called when the popup is removed from the map. */
  Popup.prototype.onRemove = function() {
    if (this.containerDiv.parentElement) {
      this.containerDiv.parentElement.removeChild(this.containerDiv);
    }
  };

  /** Called each frame when the popup needs to draw itself. */
  Popup.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);

    // Hide the popup when it is far out of view.
    var display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
        'block' :
        'none';

    if (display === 'block') {
      this.containerDiv.style.left = divPosition.x + 'px';
      this.containerDiv.style.top = divPosition.y + 'px';
    }
    if (this.containerDiv.style.display !== display) {
      this.containerDiv.style.display = display;
    }
  };

  return Popup;
  
}