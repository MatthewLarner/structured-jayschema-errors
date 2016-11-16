var compile = require('string-template/compile');

var grammaticSingularMessages = {
    'string': 'a string',
    'number': 'a number',
    'object': 'an object',
    'array': 'an array',
    'boolean': 'a boolean',
    'null': 'null'
};

var formatMessages = {
    'date-time': 'Should be a date',
    'email': 'Should be a valid email address',
    'ipv4': 'Should be a dotted-quad IPv4 address',
    'ipv6': 'Should be a valid IPv6 address',
    'uri': 'Should be a valid uri'
};

module.exports = function transformError(error){
    var messages = {
        required: function() {
            return 'Required field';
        },
        minimum: compile('Must be greater than {constraintValue}'),
        maximum: compile('Must be less than {constraintValue}'),
        type: function() {
            return 'Should be ' + (grammaticSingularMessages[error.constraintValue] || error.constraintValue);
        },
        minLength: compile('Must be longer than {constraintValue} characters'),
        maxLength: compile('Must be shorter than {constraintValue} characters'),
        maxItems: compile('Must have no more than {constraintValue} items'),
        minItems: compile('Must have at least {constraintValue} items'),
        format: function() {
            return (formatMessages[error.constraintValue] || JSON.stringify(error));
        },
        pattern: function() {
            return 'Invalid format';
        },
        additionalProperties: function() {
            return 'Property not allowed';
        },
        enum: compile('Value must one of the following enum values: {constraintValue}'),
        anyOf: function(x){

            var message = 'One of the following fields must be set: ',
                requiredKeys = [];

            error.constraintValue.forEach(function(constraint){
                if(constraint.required){
                    requiredKeys = requiredKeys.concat(constraint.required);
                }
            });

            message += requiredKeys.join(', ');

            return message;
        }
    };

    var errorTemplate = messages[error.constraintName];

    if (!errorTemplate) {
        return JSON.stringify(error);
    }

    return errorTemplate(error);
};