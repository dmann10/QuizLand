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


        // XML Request //
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "assets/users.xml", false);
        xmlhttp.send();
        var xmlDoc = xmlhttp.responseXML;

        $scope.getUsers = function() {
            var table = "";
            table += "<TABLE BORDER=2>";
            table += "<TR><TH>User ID</TH><TH>Username</TH><TH>Gender</TH>" +
                "<TH>Team</TH><TH>Expertise</TH>";

            var users = xmlDoc.getElementsByTagName("User");

            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                var userId = user.getElementsByTagName("UserID")[0].childNodes[0].nodeValue;
                var username = user.getElementsByTagName("Username")[0].childNodes[0].nodeValue;
                var gender = user.getElementsByTagName("Gender")[0].childNodes[0].nodeValue;
                var team = user.getElementsByTagName("Team")[0].childNodes[0].nodeValue;
                var expertise = user.getElementsByTagName("Expertise")[0].childNodes[0].nodeValue;
               
                table += "<TR>";
                table += "<TD>" + userId + "</TD>";
                table += "<TD>" + username + "</TD>";
                table += "<TD>" + gender + "</TD>";
                table += "<TD>" + team + "</TD>";
                table += "<TD>" + expertise + "</TD>";
                table += "</TR>";
            }
            table += "</TABLE>";
            document.getElementById("display").innerHTML = table;
        };


        $scope.searchUsers = function() {
            var match = linearSearch();

            if (match == -1) {
                alert("Sorry, no match");
                $scope.getUsers();
                return;
            }
            document.getElementById('display').innerHTML = "";
            makeData(match);
        }

        function linearSearch() {
            var searchUser = document.getElementById('userSearchBar').value;
            var users = xmlDoc.getElementsByTagName("User");
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                var thisUser = user.getElementsByTagName("Username")[0].childNodes[0].nodeValue;
                if (searchUser === thisUser)
                    return i;
            }
            return -1;
        }

        function makeData(match) {
            var myUser = xmlDoc.getElementsByTagName("User")[match];
            var table = "";
            table += "<TABLE BORDER=2>";
            table += "<TR>";

            for (var j = 0; j < myUser.childNodes.length; j++) {
                if (myUser.childNodes[j].nodeType == 1) // if node is an element
                {
                    // display the name of the node in a heading
                    table += "<TH>" + myUser.childNodes[j].nodeName + "</TH>";
                }
            }
            table += "</TR>";

            // add the data
            table += "<TR>";
            // for each child of that customer
            for (j = 0; j < myUser.childNodes.length; j++) {
                // get a child of that node
                var thatProperty = myUser.childNodes[j];
                if (thatProperty.nodeType == 1) {
                    // get the value of the first child of that node (the text)
                    table += "<TD>" + thatProperty.childNodes[0].nodeValue + "</TD>";
                }
            }
            table += "</TR>";
            table += "</TABLE>";
            document.getElementById("display").innerHTML = table;
        }
    }]);
