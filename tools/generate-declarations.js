'use strict';

var generateDeclarations = require('../server/database/management/generateDecl.js');

generateDeclarations()
.then(function(){
    console.log('Success!');
    process.exit();
})
.catch(function(err){
    console.error('Couldn\'t generate declarations', err);
    process.exit();
});
