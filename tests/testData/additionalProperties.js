module.exports = {
    data: {
        "a": 1,
        "b": 2,
        "things": 3
    },
    schema: {
        "type": "object",
        "required": ["things", "stuff"],
        "additionalProperties": false,
        "isEntity": true,
        "properties": {
            "things": {
                "type": "string"
            },
            "stuff": {
                "type": "number"
            }
        },
        "minItems": 1,
        "maxItems": 1
    }
};