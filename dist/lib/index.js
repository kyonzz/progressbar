!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["progressbar-ui"]=t(require("react")):e["progressbar-ui"]=t(e.React)}(window,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t);var r=n(0),o=function(){var e=Object(r.useState)(0),t=(e[0],e[1]);Object(r.useEffect)((function(){var e;n();var t=function(){e=requestAnimationFrame((function(){n()}))};return document.addEventListener("scroll",t),function(){cancelAnimationFrame(e),document.removeEventListener("scroll",t)}}),[]);var n=function(){var e=window.pageYOffset,n=window.innerHeight,r=o();t(e/(r-n)*100)},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)};return null};n.d(t,"ScrollTrackingProgressBar",(function(){return o}))}])}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9ncmVzc2Jhci11aS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3NiYXItdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3NiYXItdWkvZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly9wcm9ncmVzc2Jhci11aS8uL3NyYy9saWIvU2Nyb2xsVHJhY2tpbmdQcm9ncmVzc0Jhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3NiYXItdWkvLi9zcmMvbGliL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMF9fIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIlNjcm9sbFRyYWNraW5nUHJvZ3Jlc3NCYXIiLCJzZXRTY3JvbGwiLCJyZXF1ZXN0SWQiLCJjYWxjdWxhdGVTY3JvbGxEaXN0YW5jZSIsImhhbmRsZVNjcm9sbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0Iiwid2luSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkb2NIZWlnaHQiLCJnZXREb2NIZWlnaHQiLCJNYXRoIiwibWF4IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBMkNBLEVBQU1DLEdBQzFCLGlCQUFaQyxTQUEwQyxpQkFBWEMsT0FDeENBLE9BQU9ELFFBQVVELEVBQVFHLFFBQVEsVUFDUixtQkFBWEMsUUFBeUJBLE9BQU9DLElBQzlDRCxPQUFPLENBQUMsU0FBVUosR0FDUSxpQkFBWkMsUUFDZEEsUUFBUSxrQkFBb0JELEVBQVFHLFFBQVEsVUFFNUNKLEVBQUssa0JBQW9CQyxFQUFRRCxFQUFZLE9BUi9DLENBU0dPLFFBQVEsU0FBU0MsR0FDcEIsTyxZQ1RFLElBQUlDLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVULFFBR25DLElBQUlDLEVBQVNNLEVBQWlCRSxHQUFZLENBQ3pDQyxFQUFHRCxFQUNIRSxHQUFHLEVBQ0hYLFFBQVMsSUFVVixPQU5BWSxFQUFRSCxHQUFVSSxLQUFLWixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTUSxHQUcvRFAsRUFBT1UsR0FBSSxFQUdKVixFQUFPRCxRQTBEZixPQXJEQVEsRUFBb0JNLEVBQUlGLEVBR3hCSixFQUFvQk8sRUFBSVIsRUFHeEJDLEVBQW9CUSxFQUFJLFNBQVNoQixFQUFTaUIsRUFBTUMsR0FDM0NWLEVBQW9CVyxFQUFFbkIsRUFBU2lCLElBQ2xDRyxPQUFPQyxlQUFlckIsRUFBU2lCLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVYsRUFBb0JnQixFQUFJLFNBQVN4QixHQUNYLG9CQUFYeUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlckIsRUFBU3lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZXJCLEVBQVMsYUFBYyxDQUFFMkIsT0FBTyxLQVF2RG5CLEVBQW9Cb0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFuQixFQUFvQm1CLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBeEIsRUFBb0JnQixFQUFFTyxHQUN0QlgsT0FBT0MsZUFBZVUsRUFBSSxVQUFXLENBQUVULFlBQVksRUFBTUssTUFBT0EsSUFDdEQsRUFBUEUsR0FBNEIsaUJBQVRGLEVBQW1CLElBQUksSUFBSU0sS0FBT04sRUFBT25CLEVBQW9CUSxFQUFFZSxFQUFJRSxFQUFLLFNBQVNBLEdBQU8sT0FBT04sRUFBTU0sSUFBUUMsS0FBSyxLQUFNRCxJQUM5SSxPQUFPRixHQUlSdkIsRUFBb0IyQixFQUFJLFNBQVNsQyxHQUNoQyxJQUFJaUIsRUFBU2pCLEdBQVVBLEVBQU82QixXQUM3QixXQUF3QixPQUFPN0IsRUFBZ0IsU0FDL0MsV0FBOEIsT0FBT0EsR0FFdEMsT0FEQU8sRUFBb0JRLEVBQUVFLEVBQVEsSUFBS0EsR0FDNUJBLEdBSVJWLEVBQW9CVyxFQUFJLFNBQVNpQixFQUFRQyxHQUFZLE9BQU9qQixPQUFPa0IsVUFBVUMsZUFBZTFCLEtBQUt1QixFQUFRQyxJQUd6RzdCLEVBQW9CZ0MsRUFBSSxHQUlqQmhDLEVBQW9CQSxFQUFvQmlDLEVBQUksRyxnQkNsRnJEeEMsRUFBT0QsUUFBVU0sRywrQ0NlSm9DLEVBQXNDLFdBQzNDLDRCQUFTQyxHQUFSLEtBQVEsTUFFZixxQkFBVSxXQUNSLElBQUlDLEVBRUpDLElBRUEsSUFBTUMsRUFBZSxXQUVuQkYsRUFBWUcsdUJBQXNCLFdBRWhDRixRQU1KLE9BRkFHLFNBQVNDLGlCQUFpQixTQUFVSCxHQUU3QixXQUNMSSxxQkFBcUJOLEdBQ3JCSSxTQUFTRyxvQkFBb0IsU0FBVUwsTUFFeEMsSUFFSCxJQUFNRCxFQUEwQixXQUM5QixJQUFNTyxFQUFZL0MsT0FBT2dELFlBQ25CQyxFQUFZakQsT0FBT2tELFlBQ25CQyxFQUFZQyxJQUtsQmQsRUFGdUJTLEdBRE1JLEVBQVlGLEdBQ2tCLE1BS3ZERyxFQUFlLFdBQ25CLE9BQU9DLEtBQUtDLElBQ1ZYLFNBQVNZLEtBQUtDLGFBQ2RiLFNBQVNjLGdCQUFnQkQsYUFDekJiLFNBQVNZLEtBQUtHLGFBQ2RmLFNBQVNjLGdCQUFnQkMsYUFDekJmLFNBQVNZLEtBQUtJLGFBQ2RoQixTQUFTYyxnQkFBZ0JFLGVBTTdCLE9BQU8sTUMvRFQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwcm9ncmVzc2Jhci11aVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwcm9ncmVzc2Jhci11aVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18wX187IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIGNvbnN0IFByb2dyZXNzID0gc3R5bGVkLmRpdjx7IGNvbG9yPzogc3RyaW5nOyBzY3JvbGw/OiBzdHJpbmcgfT5gXG4vLyAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuLy8gICAgIHRvIHJpZ2h0LFxuLy8gICAgIHJnYmEoMjUwLCAyMjQsIDY2LCAwLjgpICR7KHByb3BzOiBhbnkpID0+IHByb3BzLnNjcm9sbH0sXG4vLyAgICAgdHJhbnNwYXJlbnQgMFxuLy8gICApO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiA0cHg7XG4vLyAgIHotaW5kZXg6IDM7XG4vLyBgO1xuXG5leHBvcnQgY29uc3QgU2Nyb2xsVHJhY2tpbmdQcm9ncmVzc0JhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHJlcXVlc3RJZDogbnVtYmVyO1xuXG4gICAgY2FsY3VsYXRlU2Nyb2xsRGlzdGFuY2UoKTtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd4dSBseSB2YWkgbG9uJylcbiAgICAgIHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIC8vIENhbGN1bGF0ZXMgdGhlIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICBjYWxjdWxhdGVTY3JvbGxEaXN0YW5jZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBjYWxjdWxhdGVTY3JvbGxEaXN0YW5jZSA9ICgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7IC8vIGhvdyBtdWNoIHRoZSB1c2VyIGhhcyBzY3JvbGxlZCBieVxuICAgIGNvbnN0IHdpbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBkb2NIZWlnaHQgPSBnZXREb2NIZWlnaHQoKTtcblxuICAgIGNvbnN0IHRvdGFsRG9jU2Nyb2xsTGVuZ3RoID0gZG9jSGVpZ2h0IC0gd2luSGVpZ2h0O1xuICAgIGNvbnN0IHNjcm9sbFBvc3Rpb24gPSAoc2Nyb2xsVG9wIC8gdG90YWxEb2NTY3JvbGxMZW5ndGgpICogMTAwO1xuXG4gICAgc2V0U2Nyb2xsKHNjcm9sbFBvc3Rpb24pO1xuICB9O1xuXG4gIGNvbnN0IGdldERvY0hlaWdodCA9ICgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICApO1xuICB9O1xuXG4gIC8vIGNvbnN0IHNjcm9sbCA9IDEwO1xuXG4gIHJldHVybiBudWxsO1xuXG4gIC8vIHJldHVybiA8UHJvZ3Jlc3Mgc2Nyb2xsPXtgJHtzY3JvbGx9JWB9IC8+O1xufTtcbiIsImV4cG9ydCB7IFNjcm9sbFRyYWNraW5nUHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9TY3JvbGxUcmFja2luZ1Byb2dyZXNzQmFyL2luZGV4XCI7XG4iXSwic291cmNlUm9vdCI6IiJ9