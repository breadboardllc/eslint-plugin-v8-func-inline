/**
 * @fileoverview ESLint rule to warn if a function is near 600 characters
 * @author
 * @copyright 2016 . All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

	// variables should be defined here

	//--------------------------------------------------------------------------
	// Helpers
	//--------------------------------------------------------------------------

	function tooLong(node){
		var sourceCode = context.getSourceCode();
		var text = sourceCode.getText(node);
		var length = text.length;
		if (length > 600 && length < context.options[0]){
			context.report({
				node,
				"message": "Function length is {{length}} characters",
				"data": {
					length
				}
			});
		}
	}

	//--------------------------------------------------------------------------
	// Public
	//--------------------------------------------------------------------------

	return {
		"ArrowFunctionExpression": tooLong,
		"FunctionDeclaration": tooLong,
		"FunctionExpression": tooLong
	}
};

module.exports.schema = [
	{
		"type": "integer",
		"minimum": 600
	}
];