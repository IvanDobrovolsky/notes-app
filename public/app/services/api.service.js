(function () {
    "use strict";

    angular
        .module('app')
        .factory('apiService', [apiServiceFactory]);



    function apiServiceFactory(){

        return {
            message: "Api service works..."
        }
    }
}());
