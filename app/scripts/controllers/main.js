'use strict';

angular.module('chuteAngularApp').
    controller('MainCtrl', ['$scope', 'Chute.API.Asset',
        function($scope, Asset) {


            //https://api.getchute.com/v2/albums/ayg4tmuc/assets

            // Chicago Life       = ayg4tmuc/2514972
            // Chicago Landmarks  = ayg5ofmi/2514973
            // Chicago Food       = ayg6yqbu/2514974
            // Other Chicago      = ayg7ydjb/2514975

            $scope.assets = Asset.query({
                album: 'ayg5ofmi',
                perPage: 3
            });


        }
    ]);
