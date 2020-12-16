let isRevealed = false;
const cssOverride = `.sr-only {
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
    chrome.browserAction.setIcon({path: 'icons/eye-on.svg'});
    chrome.browserAction.setTitle({title: 'Hide sr-only'});
    chrome.tabs.insertCSS({code: cssOverride});
  } else {
    chrome.browserAction.setIcon({path: 'icons/eye-off.svg'});
    chrome.browserAction.setTitle({title: 'Show sr-only'});
    chrome.tabs.removeCSS({code: cssOverride});
  }
}

chrome.browserAction.onClicked.addListener(toggleRevealed);