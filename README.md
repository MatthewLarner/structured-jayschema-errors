##structured-jayschema-errors

Return jayschema error messages with the same structure as the validated data

##Usage

```javascript
var JaySchema = require('jayschema');
var jaySchema = new JaySchema();

var structureErrors = require('structured-jayschema-errors');

var data = {
    a: 1,
    e: {
        c: 3,
        d: 4
    }
};

schema = {
    "type": "object",
    "properties": {
        "a": {
            "type": "string"
        },
        "b": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "c": {
                    "type": "number"
                }
            }
        }
    }
};

var errors = jaySchema(data, schema);

var structuredErrors = structureErrors(myJaySchemaErrorsOutput);

<!-- {
    a: {
        [Error]
        instanceContext: '#/a',
        resolutionScope: 'anon...',
        constraintName: 'type',
        constraintValue: 'string',
        testedValue: 'integer'
    },
    b: {
        c: {
            [Error]
            instanceContext: '#/b/c',
            resolutionScope: 'anon-...',
            constraintName: 'type',
            constraintValue: 'number',
            testedValue: 'string'
        },
        d: {
            [Error]
            instanceContext: '#/b',
            resolutionScope: 'anon-...',
            constraintName: 'additionalProperties',
            testedValue: 'd',
            desc: 'property "d" not allowed by...',
            kind: 'ObjectValidationError'
        }
    }
} -->
```

##Error Transformations

Additionally you can pass a function to transform the errors.

For example, you may want to transform the errors into a human readable form.

```javascript

schema = {
    "type": "object",
    "properties": {
        "a": {
            "type": "string"
        },
        "b": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "c": {
                    "type": "number"
                }
            }
        }
    }
};

var errors = jaySchema(data, schema),
    transformErrors = require('./my-error-transform-function');

var structuredErrors = structureErrors(myJaySchemaErrorsOutput, transformErrors);

<!-- {
    a: 'Should be a string',
    b: {
        c: 'Should be a number',
        d: 'Property not allowed'
    }
} -->

```
