import angular from 'angular';
import sweetAlert from './sweetAlertService';

export default angular.module('app.services', [])
    .service(sweetAlert.getClassName(), sweetAlert)
    .name;