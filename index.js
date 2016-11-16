var setError = require('./setError');

function structureErrors(errors, transformError){
    transformError = transformError || function(error) {
        return error;
    };

    var result = {};

    errors.forEach(function(error) {
        if(error.constraintName === 'required') {
            var message = transformError(error);

            error.constraintValue.forEach(function(key) {
                setError(error.instanceContext + '/' + key, message, result);
            });

            return;
        }

        if(error.constraintName === 'additionalProperties') {
            setError(error.instanceContext + '/' + error.testedValue, transformError(error), result);

            return;
        }

        if(error.constraintName === 'anyOf'){
            var message = transformError(error);

            setError(error.instanceContext + '/anyOf', message, result);

            return;
        }

        setError(error.instanceContext, transformError(error), result);
    });

    return result['#'];
}

module.exports = structureErrors;
