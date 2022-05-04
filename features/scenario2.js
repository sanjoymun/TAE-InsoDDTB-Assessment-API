const {Given,When,Then, DataTable, Before} = require('@cucumber/cucumber');
const config = require('../config/config');
const { expect } = require('chai');


Then('I should see the HTTP response code as {int}', function (respStatusCode) {
	expect(config.actualRespObj.statusCode).to.equal(respStatusCode);
} );