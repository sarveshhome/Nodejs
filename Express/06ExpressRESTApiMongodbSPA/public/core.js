var scotchBook = angular.module('scotchBook', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all books and show them
	$http.get('/api/book')
		.success(function(data) {
			$scope.books = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createBook = function() {
		$http.post('/api/book', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.books = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a Book after checking it
	$scope.deleteBook = function(id) {
		$http.delete('/api/book/' + id)
			.success(function(data) {
				$scope.books = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}