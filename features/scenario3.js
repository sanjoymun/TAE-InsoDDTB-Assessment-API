const {Given,When,Then, DataTable, Before} = require('@cucumber/cucumber');
const supertest = require('supertest');
const config = require('../config/config');
const { expect } = require('chai');

let url;
let request;

When('I send a GET request for the newly regsitered station no.{int} using internal ID captured during POST request',  async(serialNo) => {

	url = `${config.baseUrl}/${config.stationIdList[serialNo-1]}?&appid=${config.api_Key}`;

	request = supertest(url);

	config.actualRespObj = await request.get("")
				.then((res) => {
                    return res;
                });
});
Then('I should see that the station was successfully stored in the DB and values are the same as specified', function (docString) {
	
    expectedRespObj = JSON.parse(docString);
    /*
    expect(config.actualRespObj.body.external_id).to.equal(expectedRespObj.external_id);   
    expect(config.actualRespObj.body.name).to.equal(expectedRespObj.name);
    expect(config.actualRespObj.body.latitude).to.equal(expectedRespObj.latitude);
    expect(config.actualRespObj.body.longitude).to.equal(expectedRespObj.longitude);
    expect(config.actualRespObj.body.altitude).to.equal(expectedRespObj.altitude);
    */
	expect(config.actualRespObj.body).to.deep.includes(expectedRespObj);
});