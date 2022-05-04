const {Given,When,Then, DataTable, Before, BeforeAll} = require('@cucumber/cucumber');
const supertest = require('supertest');
const config = require('../config/config');
const { expect } = require('chai');


Given('My API Key is {string}', function(apikey){
        config.api_Key = apikey;
});

Given('I delete the weather station having external_id as', function( DataTable ) {

    if( config.beforeFeatureExecFlag == false){

        config.beforeFeatureExecFlag = true; //to make sure background feature execute only once for the feature file...
        
        let rows = DataTable.rows();

        rows.forEach(element => {
            url = `${config.baseUrl}?&appid=${config.api_Key}`;           
            request = supertest(url);	
            return request.get("")
                    .then((res) => {
                    config.actualRespObj = res;

                    //deleting stations matching with external_ids supplied from feature file....
                    res.body.forEach(data => {
                        if(data.external_id == element){
                            deleteUrl = `${config.baseUrl}/${data.id}`;
                            //console.log("deleteURL:",deleteUrl);
                            requestDel = supertest(deleteUrl);
                            return requestDel.delete("")
                                    .then(resp => {                                      
                                    //console.log("delete response status code:",resp.code);
                                    //expect(resp.code).to.be.equal('000000');
                                    return resp;
                                });
                        }
                    });
                    return res; 
                });        
        });
    }
});
