"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[466],{2466:(n,e,t)=>{t.r(e),t.d(e,{Network:()=>a,NetworkWeb:()=>s});var o=t(9895);function i(){const n=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection;let e="unknown";const t=n?n.type||n.effectiveType:null;if(t&&"string"==typeof t)switch(t){case"bluetooth":case"cellular":case"slow-2g":case"2g":case"3g":e="cellular";break;case"none":e="none";break;case"ethernet":case"wifi":case"wimax":case"4g":e="wifi";break;case"other":case"unknown":e="unknown"}return e}class s extends o.Uw{constructor(){super(),this.handleOnline=()=>{const n={connected:!0,connectionType:i()};this.notifyListeners("networkStatusChange",n)},this.handleOffline=()=>{this.notifyListeners("networkStatusChange",{connected:!1,connectionType:"none"})},"undefined"!=typeof window&&(window.addEventListener("online",this.handleOnline),window.addEventListener("offline",this.handleOffline))}async getStatus(){if(!window.navigator)throw this.unavailable("Browser does not support the Network Information API");const n=window.navigator.onLine,e=i();return{connected:n,connectionType:n?e:"none"}}}const a=new s}}]);
//# sourceMappingURL=466.js.map