// ==UserScript==
// @name        html5 video speed controller (vlc like)
// @namespace   github.com/sky-bro
// @version     1.0.0
// @description Simple html5 video speed control with '{', '}', and '=' (vlc like). '{': decrease by 0.1, '}': increase by 0.1, '=': back to 1.0x
// @author      https://sky-bro.github.io
// @match       https://www.youtube.com/*
// @match       *://*.zhihuishu.com/*
// @grant       none
// @updateURL   https://github.com/sky-bro/tampermonkey-scripts/blob/main/html5/speed-control.js
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('keypress', function(event) {
        var player = document.querySelector("video");
        console.log(event);
        var curRate = Number(player.playbackRate);
        // vlc actually uses '[' and ']', but they are used by vimium
        if (event.key == "{") {
            console.log("{ pressed");
            curRate -= 0.1;
            player.playbackRate = (curRate < 0.1) ? 0.1 : curRate;
        } else if (event.key == "}") {
            console.log("} pressed");
            curRate += 0.1;
            player.playbackRate = (curRate > 10) ? 10 : curRate;
        } else if (event.key == "=") {
            console.log("= pressed");
            player.playbackRate = 1;
        }
        console.log("playing in %sx", (player.playbackRate).toFixed(1));
    });
})();
