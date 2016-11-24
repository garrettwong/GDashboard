import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import JsonFileDatabase from '../services/JsonFileDatabase';

let commonModule = angular.module('app.common', [
  Navbar,
  User,
  JsonFileDatabase
])
  
.name;

export default commonModule;
