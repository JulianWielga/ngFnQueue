(function() {
  'use strict';
  angular.module('touk.jwl.ngFnQueue', []).factory('fnQueue', [
    '$q', function($q) {
      return function(promise) {
        promise = $q.when(promise);
        return function(_function) {
          var argumentsQueue, implementation;
          argumentsQueue = [];
          implementation = function() {
            return argumentsQueue.push(Array.prototype.slice.call(arguments));
          };
          promise.then(function() {
            var args, i, len;
            for (i = 0, len = argumentsQueue.length; i < len; i++) {
              args = argumentsQueue[i];
              _function.apply(this, args);
            }
            return implementation = _function;
          });
          return function() {
            return implementation.apply(this, arguments);
          };
        };
      };
    }
  ]);

}).call(this);
