import angular from 'angular';
import Services from '../services/services';

describe('JsonFileDatabase', () => {

	var JsonFileDatabase;
	var $httpBackend;

	beforeEach(window.module(Services));

	beforeEach(inject(function(_JsonFileDatabase_, _$httpBackend_) {
		JsonFileDatabase = _JsonFileDatabase_;
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});


	it('should create new object', function() {
		var expectedData = {
			'id': '1',
			'title': 'Awesome Object'
		};
		let testApiName = '__test';
		let baseUrl = `http://localhost:3001/api/${testApiName}`;
		
		$httpBackend.expectPOST(baseUrl, expectedData)
			.respond(201);

		var newObject = JsonFileDatabase.post(testApiName, expectedData);

		expect($httpBackend.flush).to.not.throw();
	});

	it('should get object by id', function() {
		let testApiName = '__test';
		let id = '1';
		let baseUrl = `http://localhost:3001/api/${testApiName}/${id}`;
		
		$httpBackend.expectGET(baseUrl)
			.respond(200, {id: id});
		
		let result;
		let newObject = JsonFileDatabase.get(testApiName, id);
		newObject.then((response) => { 
			console.log(response);
			result = response;
		});

		expect($httpBackend.flush).to.not.throw();
		expect(result.data).to.not.be.null;
	});
	
	it('should authenticate requests', function() {
		// var headerData = {authToken: 'teddybear', Accept: 'application/json, text/plain, */*'};
    	// var headerData = function(headers) {
    	// 	return headers.authToken === 'teddybear';
    	// };
		var headerData = {Accept: 'application/json, text/plain, */*'};

		let testApiName = '__test';
		let id = '1';
		let baseUrl = `http://localhost:3001/api/${testApiName}/${id}`;

    	var matchAny = /.*/;

		$httpBackend.expectGET(baseUrl)
			.respond(200, {id: id});

		// $httpBackend.expectPOST(matchAny, matchAny, headerData)
		//  	.respond(200);

		// $httpBackend.expectPUT(matchAny, matchAny, headerData)
		// 	.respond(200);

		// $httpBackend.expectDELETE(matchAny, headerData)
		// 	.respond(200);
		
		JsonFileDatabase.get(testApiName, id);
		// JsonFileDatabase.post(testApiName, {id: id});
		// JsonFileDatabase.put(testApiName, id, {id: id});
		// JsonFileDatabase.remove(testApiName, id);

		expect($httpBackend.flush).to.not.throw();
	});


});
