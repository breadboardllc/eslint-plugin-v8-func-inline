module.exports = function(context) {
    return {
      "FunctionDeclaration": function(node) {
        var length = context.getSourceCode().getText().length;
        var msg = 'This function is between 600 and 615 characters.' +
          'Functions 600 characters or less will be inlined by V8 and run faster';

        if (length > 600 && length < 615){
          context.report({
              node: node,
              message: msg
          });
        }
      }
    };
};
