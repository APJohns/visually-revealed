let isRevealed = false;
const cssOverride = `.sr-only, .visually-hidden {
  display: block !important;
  position: relative !important;
  opacity: 1 !important;
  visibility: visible !important;
  width: auto !important;
  height: auto !important;
  overflow: visible !important;
  clip: auto !important;
}`;

function toggleRevealed() {
  isRevealed = !isRevealed;
  if (isRevealed) {
    browser.browserAction.setIcon({path: 'icons/eye-on.svg'});
    browser.browserAction.setTitle({title: 'Hide sr-only'});
    browser.tabs.insertCSS({code: cssOverride});
  } else {
    browser.browserAction.setIcon({path: 'icons/eye-off.svg'});
    browser.browserAction.setTitle({title: 'Show sr-only'});
    browser.tabs.removeCSS({code: cssOverride});
  }
}

browser.browserAction.onClicked.addListener(toggleRevealed);