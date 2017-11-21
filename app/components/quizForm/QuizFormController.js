angular.module('myApp')
    .controller('QuizFormController', ['$scope', '$location', function($scope, $location) {
    
        $scope.quiz = {
            quizName: '',
            tagName: '',
            difficulty: '',
            type: '',
            questions: [
                $scope.question = {
                    questionText: '',
                    answer: '',
                },
            ],
        };
    }]);
