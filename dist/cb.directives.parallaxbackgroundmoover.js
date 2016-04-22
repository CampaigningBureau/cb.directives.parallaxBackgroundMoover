(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g._cbDirectivesParallaxbackgroundmooverModuleName = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null),
    ngModuleName = 'cb.directives.parallaxBackgroundMoover',
    ngModule = angular.module(ngModuleName, []);

ngModule.directive('parallaxBackgroundMoover', ["$window", function ($window) {
    var _directive = {};

    /** @property {string} limit directive to attribute or class definition */
    _directive.restrict = 'AC';

    _directive.compile = function ($element, $attrs) {};

    return _directive;
}]);

module.exports = ngModule;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2IuZGlyZWN0aXZlcy5wYXJhbGxheGJhY2tncm91bmRtb292ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxJQUFNLFVBQVUsUUFBUSxTQUFSLENBQWhCO0lBQ00sZUFBZSx3Q0FEckI7SUFFTSxXQUFlLFFBQVEsTUFBUixDQUFlLFlBQWYsRUFBNkIsRUFBN0IsQ0FGckI7O0FBSUEsU0FBUyxTQUFULENBQW1CLDBCQUFuQixFQUErQyxDQUFDLFNBQUQsRUFBWSxVQUFTLE9BQVQsRUFBa0I7QUFDekUsUUFBSSxhQUFhLEVBQWpCOzs7QUFHQSxlQUFXLFFBQVgsR0FBc0IsSUFBdEI7O0FBRUEsZUFBVyxPQUFYLEdBQXFCLFVBQVMsUUFBVCxFQUFtQixNQUFuQixFQUEyQixDQUUvQyxDQUZEOztBQUlBLFdBQU8sVUFBUDtBQUNILENBWDhDLENBQS9DOztBQWFBLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpLFxuICAgICAgbmdNb2R1bGVOYW1lID0gJ2NiLmRpcmVjdGl2ZXMucGFyYWxsYXhCYWNrZ3JvdW5kTW9vdmVyJyxcbiAgICAgIG5nTW9kdWxlICAgICA9IGFuZ3VsYXIubW9kdWxlKG5nTW9kdWxlTmFtZSwgW10pO1xuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ3BhcmFsbGF4QmFja2dyb3VuZE1vb3ZlcicsIFtcIiR3aW5kb3dcIiwgZnVuY3Rpb24oJHdpbmRvdykge1xuICAgIHZhciBfZGlyZWN0aXZlID0ge307XG5cbiAgICAvKiogQHByb3BlcnR5IHtzdHJpbmd9IGxpbWl0IGRpcmVjdGl2ZSB0byBhdHRyaWJ1dGUgb3IgY2xhc3MgZGVmaW5pdGlvbiAqL1xuICAgIF9kaXJlY3RpdmUucmVzdHJpY3QgPSAnQUMnO1xuXG4gICAgX2RpcmVjdGl2ZS5jb21waWxlID0gZnVuY3Rpb24oJGVsZW1lbnQsICRhdHRycykge1xuXG4gICAgfTtcblxuICAgIHJldHVybiBfZGlyZWN0aXZlO1xufV0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5nTW9kdWxlO1xuIl19
