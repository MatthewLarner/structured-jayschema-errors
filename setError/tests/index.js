var inflatePath = require('../'),
    test = require('tape');

test('inflatePath Exists', function (t) {
    t.plan(2);
    t.ok(inflatePath, 'inflatePath Exists');
    t.equal(typeof inflatePath, 'function',  'inflatePath is a function');
});

test('#/0/thingy', function (t) {
    t.plan(1);

    var value = 'totes value',
        expectedResult = {
            '#': [
                    {
                        thingy: value
                    }
                ]
        },
        result = {};

    inflatePath(t.name, value, result);

    t.deepEqual(result, expectedResult, 'Got correct result')
});
