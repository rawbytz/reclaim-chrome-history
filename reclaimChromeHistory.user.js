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
  // Fix for WorkFlowy lazy load bug on scroll out
  function scrollToItem(item) {
    const itemInDom = item.getElement();
    if (itemInDom) { 
      itemInDom.scrollIntoView({block: "center"});
      WF.editItemName(item);
      return
    } else { // NOT in DOM, scroll DOM projects until your get there.
      const domProjects = document.getElementsByClassName("project");
      domProjects[domProjects.length - 1].scrollIntoView(false);
      setTimeout(() => scrollToItem(item), 50);
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.altKey && !event.ctrlKey && !event.shiftKey && !event.metaKey) {
      switch (event.key) {
        case "ArrowDown": // Alt+Down = zoom in
          WF.zoomIn(WF.focusedItem());
          break;
        case "ArrowUp": // Alt+Up = zoom out
          const current = WF.currentItem();
          WF.zoomOut();
          setTimeout(() => {
            scrollToItem(current);
          }, 200);
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