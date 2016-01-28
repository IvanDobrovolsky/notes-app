(function () {
    "use strict";

    angular
        .module('app')
        .factory('masonryService', [masonryServiceFactory]);



    function masonryServiceFactory(){

        var elem = document.querySelector('.notes');

        var msnry = new Masonry( elem, {
            // options
            itemSelector: '.note',
            columnWidth: 5,
            gutter: 10,
            isFitWidth: true
        });

        function update(){
            msnry.reloadItems();
            msnry.layout();
            console.log("Updating layout...");
        }

        angular.element(document).ready(update);

        return {
            update: update
        }
    }
}());
