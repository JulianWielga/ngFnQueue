'use strict'

angular.module 'jwl.fnQueue', []

.factory 'fnQueue', ['$q', ($q) ->
	(promise) ->
		promise = $q.when(promise)

		return (_function) ->
			argumentsQueue = []

			implementation = ->
				argumentsQueue.push Array::slice.call arguments

			promise.then ->
				_function.apply this, args for args in argumentsQueue
				implementation = _function

			return ->
				implementation.apply this, arguments
]
