angular.module('myApp')
    .controller('MainController', ['$scope', function($scope) {

        // Dropdown
        $scope.toggleDropdown = function() {
            if($('.dropdown').is(':hidden')) {
                $('.dropdown').slideDown('slow');
            } else {
                $('.dropdown').slideUp('slow');
            }
        }

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