// ==UserScript==
// @name         WorkFlowy Reclaim Chrome Back/Forward
// @namespace    https://rawbytz.wordpress.com
// @version      2.3
// @description  Reclaim Chrome's history shortcuts (Alt+Left/Right), move WorkFlowy's zoom shortcuts to Alt+Up/Down.
// @author       rawbytz
// @match        https://workflowy.com/*
// @match        https://beta.workflowy.com/*
// @updateUrl    https://gist.github.com/rawbytz/67df2d838316d331ff1b25fb24e4cc25/raw/WorkFlowyReclaimChromeHistory.user.js
// @downloadUrl  https://gist.github.com/rawbytz/67df2d838316d331ff1b25fb24e4cc25/raw/WorkFlowyReclaimChromeHistory.user.js
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