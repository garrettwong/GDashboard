import angular from 'angular';
import jsonFileDatabase from './jsonFileDatabase';
import sweetAlert from './sweetAlertService';

export default angular.module('app.services', [])
    .service(jsonFileDatabase.getClassName(), ['$http', jsonFileDatabase])
    .service(sweetAlert.getClassName(), sweetAlert)
    .name;