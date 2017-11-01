angular.module('myApp')
    .controller('UserProfileController', ['$scope', function($scope) {
        
        $scope.userProfile = {
            username : "",
            gender : "",
            team : "",
            expertise : "",
            interests : []
        };

        $scope.submitProfile = function() {
            $scope.userProfile.gender = $("input[name='gender']:checked").val();
            var interest = $("input[type='checkbox']:checked");
            $scope.userProfile.interests = [];

            for(var i = 0; i < interest.length; i++) {
                $scope.userProfile.interests.push(interest[i].value);
            }
            
            $('.profilePreview').css("display", "block");
        };

        $scope.clearPreview = function () {
            $('.profilePreview').css('display', 'none');
        };

    }]);
