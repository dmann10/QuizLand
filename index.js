angular.module('myApp')
    .controller('MainController', ['$scope', function($scope) {

        // Pop Up
        $scope.load = function() {
            setTimeout(function () {
                $('.pop-up').css('display', 'block');
            }, 3000);
        }   

        $scope.clearPopUp = function () {
            $('.pop-up').css('display', 'none');
        };

    }]);