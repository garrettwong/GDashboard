import angular from 'angular';

// service imports
import jsonFileDatabase from './jsonFileDatabase';
import sweetAlert from './sweetAlertService';
import cryptoService from './cryptoService';
import cryptoParser from './cryptoParser';

export default angular.module('app.services', [])
    // available services
    .service(jsonFileDatabase.getClassName(), ['$http', jsonFileDatabase])
    .service(sweetAlert.getClassName(), sweetAlert)
    .service(cryptoService.getClassName(), ['$http', cryptoService])
    .service(cryptoParser.getClassName(), cryptoParser)

    .name;