## Reclaim Browser History Shortcuts in WorkFlowy
* WorkFlowy's zoom keyboard shortcuts hijack the standard back/forward browser history shortcuts in Windows.
* This script reclaims them, mapping the following shortcuts:
  * _Alt+Down_  = **Zoom In** 
  * _Alt+Up_    = **Zoom Out** 
  * _Alt+Left_  = **Back in History** (this is broken due to internal WorkFlowy changes)
  * _Alt+Right_ = **Forward in History** 
  * _Alt+\[_  = **Back in History** (temporary workaround)
  * _Alt+\]_ = **Forward in History** (temporary workaround)
* [Click here to install](https://github.com/rawbytz/reclaim-chrome-history/raw/master/reclaimChromeHistory.user.js) into your script manager.
### Version Notes
- v2.7 (2023-04-21): Add Alt+\[ and Alt+\] for history as workaround until WorkFlowy fixes issue.
- v2.6 (2020-10-25): Add scroll to support when zooming out of long lists
- v2.5 (2019-12-16): Tweak domains supported
- v2.4 (2019-12-16): Moved from Gist to repo
- v2.3 (2019-02-27): Converted back to WorkFlowy's animated zoom/unzoom, because they fixed some focus issues.
- v2.2 (2018-11-26): Added support for beta.workflowy.com
- v2.1 (2018-11-12): Fix WorkFlowy's "sticky search" bug, and remove zoom animation.
- v1.9 (2018-10-31): Removed focus fix code (WorkFlowy fixed the bug)
- v1.8 (2018-10-24): Tweaked focus fix code.
- v1.7 (2018-10-24): Fixed duplicate history when zooming out to home.