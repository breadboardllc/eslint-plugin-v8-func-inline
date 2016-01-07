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

    // any helper functions should go here or else delete this section

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

      "FunctionDeclaration": function(node) {
        var length = context.getSourceCode().getText().length;
        var msg = 'Function length between 600 and 615 characters';

        if (length > 600 && length < 615){
          context.report({
              node: node,
              message: msg
          });
        }
      }

    };

};

module.exports.schema = [
    // fill in your schema
];
