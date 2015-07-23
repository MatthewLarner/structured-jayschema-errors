var pathSeparator = '/';

function pathToParts(path) {
    var pathType = typeof path;

    if (pathType !== 'string' && pathType !== 'number') {
        if (Array.isArray(path)) {
            return path;
        }
        return;
    }

    if (path === '') {
        return [];
    }

    var lastPartIndex = 0,
        parts,
        nextChar,
        currentChar;

    parts = [];

    for (var i = 0; i < path.length; i++) {
        currentChar = path.charAt(i);
        if (currentChar === pathSeparator) {
            parts.push(path.slice(lastPartIndex, i));
            lastPartIndex = i + 1;
        } else if (currentChar === '\\') {
            nextChar = path.charAt(i + 1);
            if (nextChar === '\\') {
                path = path.slice(0, i) + path.slice(i + 1);
            } else if (nextChar === pathSeparator) {
                parts.push(path.slice(lastPartIndex), i);
            }
        }
    }
    parts.push(path.slice(lastPartIndex));

    return parts;
}

function set(path, value, reference) {
    var pathParts = pathToParts(path),
        index = 0,
        pathLength = pathParts.length;

    var result = reference,
        previousresult,
        previousKey;

    for(; index < pathLength; index++){
        var key = pathParts[index];

        if ((typeof result !== 'object' || result === null) && index < pathLength) {
            if (!isNaN(key)) {
                result = previousresult[previousKey] = [];
            }
            else {
                result = previousresult[previousKey] = {};
            }
        }
        if (index === pathLength - 1) {
            result[key] = value;
        }
        else {
            previousresult = result;
            previousKey = key;
            result = result[key];
        }
    }
}

module.exports = set;