angular.module('myApp')
    .config(function($routeProvider) {
        $routeProvider 
            .when('/', { 
                controller: 'HomeController',
                templateUrl: 'app/components/home/homeView.html'
            })
            .when('/create', {
                controller: 'QuizFormController',
                templateUrl: 'app/components/quizForm/quizForm.html'
            })
            .when('/user', {
                controller: 'UserProfileController',
                templateUrl: 'app/components/userProfile/userProfile.html'
            })
            .when('/tools', {
                controller: 'ToolsController',
                templateUrl: 'app/components/tools/tools.html'
            })
            .when('/quiz', {
                controller: 'QuizRoomController',
                templateUrl: 'app/components/quizRoom/quizRoom.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });