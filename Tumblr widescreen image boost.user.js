// ==UserScript==
// @name         Tumblr Widescreen image booster
// @namespace    
// @version      0.3
// @description  Improves widescreen image support a bit.
// @author       Tsunder
// @match        *://*.tumblr.com/*
// @grant        none
// ==/UserScript==

//missing: some videos on blog pages.

function LiftPostHeights() {
    var _npfPosts = document.querySelectorAll("div.npf_row")
    _npfPosts.forEach( function (element) {
        element.removeAttribute("style");
    });
}

LiftPostHeights();
