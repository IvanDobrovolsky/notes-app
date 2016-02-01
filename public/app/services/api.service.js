(function () {
    "use strict";

    angular
        .module('app')
        .factory('apiService', ['$http', apiServiceFactory]);

    /**
     * @function apiServiceFactory that implements RESTful requests to the backend
     * @return Object with functionality methods
     */

    function apiServiceFactory($http){

        var notesEndpoint = '/notes';

        function getAll(){
            return $http({
                method: 'GET',
                url: notesEndpoint
            });
        }

        function deleteExisting(id){
            return $http({
                method: 'DELETE',
                url: notesEndpoint + "/" + id
            });
        }

        function addNew(note){
            return $http({
                method: "POST",
                url: notesEndpoint,
                data: note
            })
        }

        return {
            get: getAll,
            delete: deleteExisting,
            post: addNew
        }
    }
}());


