const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'https://sonarcloud.io',
       options : {
       'sonar.sources': 'app.js',
	   'sonar.tests':'test/app.js',
	   'sonar.organization': 'devopsgroup8',
       'sonar.inclusions' : '**' // Entry point of your code
       }
     }, () => {});