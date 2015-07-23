module.exports = {
    data: {
        "a": 1,
        "b": {
            "c": "3",
            "d": 4
        }
    },
    schema: {
        "type": "object",
        "required": ["things", "stuff"],
        "additionalProperties": false,
        "isEntity": true,
        "properties": {
            "a": {
                "type": "string"
            },
            "b": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "c": {
                        "type": "string",
                        "format": "email"
                    }
                }
            }
        },
        "minItems": 1,
        "maxItems": 1
    }
};