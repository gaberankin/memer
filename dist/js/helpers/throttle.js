"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = throttle;
/**
 * https://remysharp.com/2010/07/21/throttling-function-calls
 **/
function throttle(fn) {
	var threshhold = arguments.length <= 1 || arguments[1] === undefined ? 250 : arguments[1];
	var scope = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	var last = void 0,
	    deferTimer = void 0;
	return function () {
		var context = scope ? scope : this;

		var now = +new Date(),
		    args = arguments;
		if (last && now < last + threshhold) {
			// hold on to it
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(context, args);
			}, threshhold);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
}