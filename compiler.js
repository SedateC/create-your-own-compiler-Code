const tokenizer = require('./tokenizer')
const parser = require('./parser')
const transformer = require('./transformer')
const generateCode = require('./generateCode')
module.exports = function compiler(input) {
    const tokens = tokenizer(input);
  //  console.log(JSON.stringify(tokens, null, 2));
    const lispAST = parser(tokens)
 //   console.log(JSON.stringify(lispAST, null, 2));
    const jsAST = transformer(lispAST)
 //   console.log(JSON.stringify(jsAST, null, 2));
    const jsCode = generateCode(jsAST)
    return jsCode
}
