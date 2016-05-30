'use strict';

angular.module('Home',[])

    .config(function($httpProvider, $locationProvider) {
  // Every POST data becoms jQuery style
  $httpProvider.defaults.transformRequest.push(
      function(data) {
    var requestStr;
    if (data) {
      data = JSON.parse(data);
      for (var key in data) {
        if(data[key] instanceof Object){
          data[key] = JSON.stringify(data[key]);
        }
        if (requestStr) {
          requestStr += '&' + key + '=' + data[key];
        } else {
          requestStr = key + '=' + data[key];
        }
      }
    }

    return requestStr;
  });

  // Set the content type to be FORM type for all post requests
  // This does not add it for GET requests.
  $httpProvider.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded; charset=UTF-8';
})

//Controller que irá realizar a printar o retorno do banco ()

        .controller('HomeController', function($scope, $http, $location){

        $http.get("buscarFiltrados.php",{ headers: { 'Cache-Control' : 'no-cache' }}).success(function (data) {
        //console.log(data);
        $scope.filtrados = data;    
          
        }).error(function (data, status) {
          $scope.message = "Aconteceu um problema: " + data;
        });

      })

      .controller('dashController', function($scope, $http, $location){

        $http.get("buscarFiltrados.php",{ headers: { 'Cache-Control' : 'no-cache' }}).success(function (data) {
        //console.log(data);
        $scope.filtrados = data;    
          
        }).error(function (data, status) {
          $scope.message = "Aconteceu um problema: " + data;
        });

      })  

      .controller('addFiltrados', function($scope, $http, $location, $window) {
    
        $scope.addFiltrado = function (filtrado) {

        $http.post("addFiltrado.php", filtrado).success(function (data) {

        $window.location.reload(); 
       
        //$location.path("index.html"); //redirect ok

        });
      	};
	  })

      .controller('editFiltrados', function($scope, $http, , $stateParams, $location, $window) {
                                                        //limpezaId
        $http.get("buscarFiltrados.php?id="+$stateParams.id).success(function (data) {

        $scope.filtrado = data;  

        $scope.filtrado.idLimpeza = $stateParams.limpezaId;   
          
        }).error(function (data, status) {
          $scope.message = "Aconteceu um problema: " + data;
        });


        $scope.editFiltrado = function (filtrado) {

        $http.post("editFiltrado.php", filtrado).success(function (data) {

          //$window.location.reload(); 
       
        //$location.path("index.html"); //redirect ok

        });
        };
    });