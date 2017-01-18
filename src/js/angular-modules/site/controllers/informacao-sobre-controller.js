angular.module("site")
    .controller("InformacaoSobreController", ["$scope", "$http", function ($scope, $http) {

        $http.get("data/informacoes-sobre.json").then(function (retorno) {
            $scope.sobre = retorno.data;
        }, function (data) {
            console.log(data);
        });

    }]);