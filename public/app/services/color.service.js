(function () {
    "use strict";

    angular
        .module('app')
        .factory('colorService', [colorServiceFactory]);



    function colorServiceFactory(){

        return {
            message: "Color service works..."
        }
    }
}());
