// ==UserScript==
// @name         BitBucketPRNoLineWrap
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  codespace no line wrap in pullrequest diff
// @author       RadLabSD
// @updateSite   https://github.com/radlab24/Scripts/raw/main/BitBucketPRNoLineWrap.user.js
// @downloadURL  https://github.com/radlab24/Scripts/raw/main/BitBucketPRNoLineWrap.user.js
// @match        https://codespace.lhsystems.int/projects/LIDO_ERM/repos/erm-implementation/pull-requests/*/diff*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
    addGlobalStyle('td.diff-line { white-space: pre; }');
})();
