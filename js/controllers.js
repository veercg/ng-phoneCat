'use strict';

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, Phone) {
        $scope.name = "world";
        $scope.orderProp = "age";
        $scope.phones = Phone.query();

        /*
        $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
        });
        */
    }
]);

    phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function ($scope, $routeParams, Phone) {

        $scope.phone = Phone.get({ phoneId: $routeParams.phoneId },
            function (phone) {
                $scope.mainImageUrl = phone.images[0];
            }
        )


        /*
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
        });
        */
        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };

        $scope.buy = function (name) {
            alert('You are going to buy ' + (name || 'world') + '!');
        }
    }
]);











/* Controllers */
/*
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
function($scope, Phone) {
$scope.phones = Phone.query();
$scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
function($scope, $routeParams, Phone) {
$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
$scope.mainImageUrl = phone.images[0];
});

$scope.setImage = function(imageUrl) {
$scope.mainImageUrl = imageUrl;
};
}]);

*/