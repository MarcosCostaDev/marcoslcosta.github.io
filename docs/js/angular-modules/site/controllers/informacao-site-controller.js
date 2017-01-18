angular.module("site")
    .controller("InformacaoSiteController", ["$scope", "$http", function ($scope, $http) {

        $http.get("data/informacoes-site.json").then(function (retorno) {
            $scope.informacao = retorno.data;
        }, function (data) {
            console.log(data);
        });

    }]);