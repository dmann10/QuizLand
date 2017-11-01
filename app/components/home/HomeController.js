angular.module('myApp')
    .controller('HomeController', ['$scope', function($scope) {
        
		$scope.username = prompt("Please enter your name");
		
		// Carousel
        var slideIndex = 0;
		showSlides();

		function showSlides() {
		    var slides = $(".slide");
		    var dots = $(".dot");
		    for (var i = 0; i < slides.length; i++) {
       			slides[i].style.display = "none";  
   			}
		    slideIndex++;
		    if (slideIndex > slides.length)
		    	slideIndex = 1;    
		    for (i = 0; i < dots.length; i++) {
		        dots[i].className = dots[i].className.replace(" active", "");
		    }
		    slides[slideIndex-1].style.display = "block";  
		    dots[slideIndex-1].className += " active";
		    setTimeout(showSlides, 5000);
		}

		$scope.takeQuiz = function() {
			window.location.href = '#!/quiz';
		};

}]);