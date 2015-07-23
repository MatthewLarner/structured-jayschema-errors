var structureErrors = require('../'),
    Jayschema = require('jayschema'),
    test = require('tape'),
    testData = require('./testData'),
    transformError = require('./transformError'),
    compareStructure = require('compare-structure');

function getErrors(data, schema){
    var jayschema = new Jayschema();

    return jayschema.validate(data, schema);
}

function createTest(name, data, schema) {
    test(name, function(t) {
        t.plan(1);

        var errors = getErrors(data, schema),
            structuredErrors = structureErrors(errors);

        t.ok(compareStructure(structuredErrors, data), 'Errors set correctly');
    });
}

test('structureErrors Exists', function(t) {
    t.plan(2);
    t.ok(structureErrors, 'structureErrors Exists');
    t.equal(typeof structureErrors, 'function',  'structureErrors is a function');
});

for (var key in testData) {
    var testData = require('./testData/' + key);

    var data = testData.data,
        schema = testData.schema;

    createTest(key, data, schema);
}

test('transformError', function(t) {
    t.plan(1);

    var jayschema = new Jayschema(),
        testData = require('./testData/' + t.name),
        data = testData.data,
        schema = testData.schema,
        expectedErrorObject = {
            a: 'Should be a string',
            b: {
                c: 'Should be a valid email address',
                d: 'Property not allowed'
            },
            stuff: 'Required field',
            things: 'Required field'
        };

    var errors = structureErrors(jayschema.validate(data, schema), transformError);

    t.deepEqual(errors, expectedErrorObject);
});

test('baseTypeError', function(t) {
    t.plan(1);

    var jayschema = new Jayschema(),
        testData = require('./testData/' + t.name),
        data = testData.data,
        schema = testData.schema,
        expectedErrorObject = {
            a: 'Should be a string',
            b: {
                c: 'Should be a valid email address',
                d: 'Property not allowed'
            },
            stuff: 'Required field',
            things: 'Required field'
        };

    var structuredErrors = structureErrors(jayschema.validate(data, schema));

    t.equal(structuredErrors.constraintName, 'type', 'Base level error set');
});

require('../setError/tests')
