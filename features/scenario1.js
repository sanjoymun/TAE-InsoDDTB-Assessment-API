const {Given,When,Then, DataTable, Before} = require('@cucumber/cucumber');
const supertest = require('supertest');
const config = require('../config/config');
const { expect } = require('chai');

let url;
let request;

When('I send a POST request with the body as', async (docString)=> {
	
	url = `${config.baseUrl}?&appid=${config.api_Key}`;
	request = supertest(url);	
	config.actualRespObj =  await request.post("")
				.set("Content-Type","application/json")
				.send(JSON.parse(docString))
				.then((res) => {
					return res
				});

	if(typeof(config.actualRespObj.body.ID) != "undefined"){
		config.stationIdList.push(config.actualRespObj.body.ID); //storing the internal station ids for future verification....
	}
});

Then('I should see the error reponse as', function (docString) {
	expectedRespObj = JSON.parse(docString);
	expect(config.actualRespObj.body.cod).to.equal(expectedRespObj.cod);
});

