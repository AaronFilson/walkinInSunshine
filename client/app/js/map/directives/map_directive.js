module.exports = function(app) {
  app.directive('googlemapsdirective', function() {
    return {
      restrict: 'ACE',
      replace: true,
      require: '^ngController',
      transclude: true,
      templateUrl: '/templates/maps/views/map_view.html'
    };
  });
};
