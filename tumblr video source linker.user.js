// ==UserScript==
// @name         Tumblr video source linker
// @version      0.3
// @description  adds links to video source files near videos on tumblr. works on dashboard and on sometimes blog pages
// @author       Tsunder
// @match        *://*.tumblr.com/*
// @grant        none
// ==/UserScript==

//missing: some videos on blog pages, and of course customized blog urls

(function() {
    'use strict';
    function checkPostVideos() {
        var _posts = document.getElementsByClassName("post_media"); // searching for media posts and not reblogs
        for (var _i = 0; _i < _posts.length; _i++) {
            var _videosrcs = _posts[_i].querySelectorAll("[src*='tumblr.com/video_file']");
            if (_videosrcs.length > 0) {
                for (var _j = 0; _j < _videosrcs.length; _j ++) {
                    var _videoURL =_videosrcs[_j].getAttribute("src")
                    //_posts[_i].innerHTML += "<a href='" + _videoURL + "'>" + _videoURL + "</a>";
                    var _downloadElement = document.createElement("a");
                    _downloadElement.setAttribute("href", _videoURL);
                    _downloadElement.innerText = _videoURL;
                    _posts[_i].after(_downloadElement);
                }
            }
        }
    }

    function checkEmbeddedVideos() {
        var _embeddedVideos = document.querySelectorAll("[type='video/mp4']") // gets inline videos/in post videos/reblogs
        for (var _eVI = 0; _eVI < _embeddedVideos.length; _eVI ++) {
            var _downloadElement = document.createElement("a");
            var _videoURL = _embeddedVideos[_eVI].getAttribute("src")
            if (_videoURL.indexOf(".mp4") > 0) { //ignore if the file url isn't an actual mp4, case is covered by above.
                _downloadElement.setAttribute("href",_videoURL);
                _downloadElement.innerText = _videoURL;
                _embeddedVideos[_eVI].parentElement.after(_downloadElement)
                //_embeddedVideos[_eVI].parentElement.parentElement.parentElement.insertBefore(_downloadElement, _embeddedVideos[_eVI].parentElement.parentElement.parentElement.childNodes[0])
            }
        }
    }

    checkEmbeddedVideos();
    checkPostVideos();
})();
