/// <reference path="../../../app/bower_components/DefinitelyTyped/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/bower_components/DefinitelyTyped/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../app/scripts/app.ts" />

describe('test', () => {
	it('Does something', function () {
		var $injector = angular.injector([ 'profile' ]);
		var DataService = $injector.get('DataService ');
		expect(DataService.Method()).toBe(1);
	})
});

