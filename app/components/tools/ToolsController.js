angular.module('myApp')
    .controller('ToolsController', ['$scope', '$location', function($scope, $location) {
        $scope.numOne;
        $scope.numTwo;
        $scope.numThree;
        $scope.numFour;

        $scope.validateForm = function () {
            var bool = false;
            var n = [$scope.numOne, $scope.numTwo, $scope.numThree, $scope.numFour];

            for (var i = 0; i < n.length; i++) {
                if (n[i] === undefined) {
                    bool = true;
                    $('#n' + (i + 1)).css({ "color": "red", "border-color": "red" });
                    continue; 
                }
                for (var j = 0; j < n[i].length; j++)
                    if (isNaN(n[i].charAt(j))) {
                        bool = true;
                        $('#n' + (i + 1)).css({ "color": "red", "border-color": "red" });
                        break;
                    }
                    else {
                        $('#n' + (i + 1)).css({ "color": "initial", "border-color": "initial" });
                    }
            }

            if (bool)
                alert("Input must be a number and cannot be left blank");
            else
                reorganizeNumbers();
        }

        function reorganizeNumbers() {
            var numOrder = [$scope.numOne, $scope.numTwo, $scope.numThree, $scope.numFour];
            numOrder.sort(function (a, b) { return a - b });

            $scope.numOne = numOrder[0];
            $scope.numTwo = numOrder[1];
            $scope.numThree = numOrder[2];
            $scope.numFour = numOrder[3];

            $('label').css({ "display": "block" });
        };


        $scope.calcInput = "";

        $scope.calculate = function () {
            var inputArray = $scope.calcInput.split(' ');
            var num1 = parseFloat(inputArray[0]);
            var num2 = parseFloat(inputArray[2]);

            if (inputArray[1] === '/')
                $scope.calcInput = num1 / num2;
            else if (inputArray[1] === 'x')
                $scope.calcInput = num1 * num2;
            else if (inputArray[1] === '+')
                $scope.calcInput = num1 + num2;
            else if (inputArray[1] === '-')
                $scope.calcInput = num1 - num2;
            else
                $scope.calcInput = "ERR";
        }

        $scope.goToLink = function () {
            var url = $('select').val();
            if (url !== "")
                window.open(url, "_self");
        }

        $scope.animal = "";

        $scope.off = false;

        $scope.makeNewPosition = function() {

            var h = $('.main').height() - 50;
            var w = $('.main').width() - 50;

            var newH = Math.floor(Math.random() * h);
            var newW = Math.floor(Math.random() * w);

            return [newH, newW];

        }

        $scope.animateSnitch = function() {
            if($scope.off != true) {
                var newPosition = $scope.makeNewPosition();
                $('.snitch').animate({ top: newPosition[0], left: newPosition[1] }, function () {
                    $scope.animateSnitch();
                });
            }
        };

        $scope.stopAnimation = function() {
            $scope.off = true;
            $('.snitch').css("display","none");
            $('#challengeHeader').css("display","none")
            console.log("You're a wizard Harry");
        };
    }]);