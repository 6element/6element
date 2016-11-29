#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');

var generateSqlDefinition = require('sql-generate');

var conString = process.env.DATABASE_URL;


module.exports = function(){
	console.log('== Generating definitions ==');

	return new Promise(function(resolve, reject){
		generateSqlDefinition({ dsn: conString, omitComments: true }, function(err, definitions) {
			if (err)
				reject('Coudn\'t generate definitions: ' + err);

			fs.writeFileSync(path.join(__dirname, './declarations.js'), definitions.buffer);
			console.log('Definitions generated');
			resolve();
		});

		process.on('uncaughtException', function(err) {
			reject('Coudn\'t generate definitions, caught exception: ', err);
		});
	});
};
