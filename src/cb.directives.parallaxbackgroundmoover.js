const angular = require('angular'),
      ngModuleName = 'cb.directives.parallaxBackgroundMoover',
      ngModule     = angular.module(ngModuleName, []);

ngModule.directive('parallaxBackgroundMoover', ["$window", function($window) {
    var _directive = {};

    /** @property {string} limit directive to attribute or class definition */
    _directive.restrict = 'AC';

    _directive.link = function($scope, $element, $attrs) {
        function windowDidScroll() {
            console.log('window');
        }


        $window.on('scroll', windowDidScroll);
        $scope.$on('$destroy', function() {
            $window.off('scroll', windowDidScroll);
        });
    };

    return _directive;
}]);

module.exports = ngModuleName;
