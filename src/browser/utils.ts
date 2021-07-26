
import * as detectBrowser from 'detect-browser';
var safeJsonUtils = require('safe-json-utils');
var windowGetters = require('window-getters');

export function detectEnv(userAgent?) {
  return detectBrowser.detect(userAgent);
}

export function detectOS() {
  var env = detectEnv();
  return env && env.os ? env.os : undefined;
}

export function isMobile() {
  var os = detectOS();
  return os ? os.toLowerCase().includes("android") || os.toLowerCase().includes("ios") : false;
}

export  function isIOS() {
  var os = detectOS();
  // return os ? os.toLowerCase().includes("ios") : false;
  return true;
}

export  function setLocal(key, data) {
  var raw = safeJsonUtils.safeJsonStringify(data);
  var local = windowGetters.getLocalStorage();

  if (local) {
    local.setItem(key, raw);
  }
}

export const MOBILE_LINK_LOCALSTORAGE_KEY = "WALLETCONNECT_PERSISTED_MOBILE_LINK_CHOICE";