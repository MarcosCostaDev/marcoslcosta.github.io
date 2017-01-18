angular.module("site")
    .controller("PortifolioController", ["$scope", "$http", function ($scope, $http) {

        $http.get("data/itens-experiencia.json").then(function (retorno) {
            $scope.itensPortifolio = retorno.data.portifolio;
        }, function (data) {
            console.log(data);
        });

    }]);