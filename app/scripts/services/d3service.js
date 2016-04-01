'use strict';

/**
 * @ngdoc service
 * @name careerPipeApp.d3Service
 * @description
 * # d3Service
 * Factory in the careerPipeApp.
 */
angular.module('careerPipeApp')
  .factory('d3Service', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
