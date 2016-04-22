const angular = require('angular'),
      ngModuleName = 'cb.directives.parallaxBackgroundMoover',
      ngModule     = angular.module(ngModuleName, []);

ngModule.directive('parallaxBackgroundMoover', ["$window", function($window) {
    var _directive = {};

    /** @property {string} limit directive to attribute or class definition */
    _directive.restrict = 'AC';

    _directive.link = function($scope, $element, $attrs) {
        let elementTop = $element.offset().top,
            windowScrollTop,
            waitingForTick = false;

        function windowDidScroll() {
            windowScrollTop = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);

            if(!waitingForTick) {
                waitingForTick = true;
                window.requestAnimationFrame(nextTick);
            }
        }

        function nextTick() {
            let scroll = Math.max(0, windowScrollTop - elementTop) * parseFloat($attrs.parallaxBackgroundMoover || 1);
            $element[0].style.transform = 'translateY('+Math.floor(scroll)+'px)';
            waitingForTick = false;
        }

        window.addEventListener('scroll', windowDidScroll);
        $scope.$on('$destroy', function() {
            window.removeEventListener('scroll', windowDidScroll);
        });
    };

    return _directive;
}]);

module.exports = ngModuleName;
