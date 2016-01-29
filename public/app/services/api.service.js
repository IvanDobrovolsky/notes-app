(function () {
    "use strict";

    angular
        .module('app')
        .factory('apiService', ['$http', apiServiceFactory]);


    function apiServiceFactory($http){

        var NotesEndpoint = '/notes';

        function getAll(){
            return $http({
                method: 'GET',
                url: NotesEndpoint
            });
        }

        function deleteExisting(id){
            return $http({
                method: 'DELETE',
                url: '/notes/' + id
            });
        }
        function addNew(note){
            return $http({
                method: "POST",
                url: '/notes',
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


