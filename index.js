var reporter = require('cucumber-html-reporter');  
   
var options = {  
        theme: 'bootstrap',  
        jsonFile: './reporter/cucumber-report.json',  
        output: './reporter/cucumber-report.html',  
        reportSuiteAsScenarios: true,  
        scenarioTimestamp: true,  
        launchReport: true,  
        metadata: {  
            "App Version":"0.0.1",  
            "Test Environment": "STAGING",  
            "Browser": "Chrome  11",  
            "Platform": "Windows 11",  
            "Parallel": "Scenarios",  
            "Executed": "Remote"  
        }  
    };  
   
    reporter.generate(options);