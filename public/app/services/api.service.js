(function () {
    "use strict";

    angular
        .module('app')
        .factory('apiService', ['$resource', apiServiceFactory]);


    function apiServiceFactory($resource){
        return $resource('/notes/:id', {id: '@_id'}, {});
    }
}());
