const angular = require('angular'),
      ngModuleName = 'cb.directives.parallaxBackgroundMoover',
      ngModule     = angular.module(ngModuleName, []);

ngModule.directive('parallaxBackgroundMoover', ["$window", function($window) {
    var _directive = {};

    /** @property {string} limit directive to attribute or class definition */
    _directive.restrict = 'AC';

    _directive.compile = function($element, $attrs) {

    };

    return _directive;
}]);

module.exports = ngModule;
