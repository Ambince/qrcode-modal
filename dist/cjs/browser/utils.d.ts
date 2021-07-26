import * as detectBrowser from 'detect-browser';
export declare function detectEnv(userAgent?: any): detectBrowser.BrowserInfo | detectBrowser.SearchBotDeviceInfo | detectBrowser.BotInfo | detectBrowser.NodeInfo | detectBrowser.ReactNativeInfo | null;
export declare function detectOS(): "iOS" | "Android OS" | "BlackBerry OS" | "Windows Mobile" | "Amazon OS" | "Windows 3.11" | "Windows 95" | "Windows 98" | "Windows 2000" | "Windows XP" | "Windows Server 2003" | "Windows Vista" | "Windows 7" | "Windows 8" | "Windows 8.1" | "Windows 10" | "Windows ME" | "Open BSD" | "Sun OS" | "Linux" | "Mac OS" | "QNX" | "BeOS" | "OS/2" | "Chrome OS" | "aix" | "android" | "darwin" | "freebsd" | "linux" | "openbsd" | "sunos" | "win32" | "cygwin" | "netbsd" | undefined;
export declare function isMobile(): boolean;
export declare function isIOS(): boolean;
export declare function setLocal(key: any, data: any): void;
export declare const MOBILE_LINK_LOCALSTORAGE_KEY = "WALLETCONNECT_PERSISTED_MOBILE_LINK_CHOICE";
//# sourceMappingURL=utils.d.ts.map