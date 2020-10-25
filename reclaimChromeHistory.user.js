// ==UserScript==
// @name         WorkFlowy Reclaim Chrome Back/Forward
// @namespace    https://rawbytz.wordpress.com
// @version      2.6
// @description  Reclaim Browser history shortcuts (Alt+Left/Right), move WorkFlowy's zoom shortcuts to Alt+Up/Down.
// @author       rawbytz
// @match        https://workflowy.com/*
// @match        https://*.workflowy.com/*
// @updateUrl    https://github.com/rawbytz/reclaim-chrome-history/raw/master/reclaimChromeHistory.user.js
// @downloadUrl  https://github.com/rawbytz/reclaim-chrome-history/raw/master/reclaimChromeHistory.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  document.addEventListener("keydown", function (event) {
    if (event.altKey && !event.ctrlKey && !event.shiftKey && !event.metaKey) {
      switch (event.key) {
        case "ArrowDown": // Alt+Down = zoom in
          WF.zoomIn(WF.focusedItem());
          break;
        case "ArrowUp": // Alt+Up = zoom out
          WF.zoomOut();
          break;
        case "ArrowLeft": // Alt+Left = Go Back in History
          window.history.back();
          event.stopImmediatePropagation();
          event.preventDefault();
          break;
        case "ArrowRight": // Alt+Right = Go Forward in History
          window.history.forward();
          event.stopImmediatePropagation();
          event.preventDefault();
          break;
        default:
          break;
      }
    }
  });
})();