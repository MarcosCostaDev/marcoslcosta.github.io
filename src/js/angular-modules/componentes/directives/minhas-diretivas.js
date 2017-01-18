angular
    .module('componentes')
    .directive('itemPortifolio', function () {

        var ddo = {
            scope: {
                portifolio: "="
            },
            restrict: 'E',
            templateUrl: 'js/angular-modules/componentes/directives/template/item-portifolio.html'
        };

        return ddo;
    })
    .directive("itemPortifolioModal", function () {

        var ddo = {
            scope: {
                portifolio: "="
            },
            restrict: 'E',
            templateUrl: 'js/angular-modules/componentes/directives/template/item-portifolio-modal.html'
        };

        return ddo;
    });
