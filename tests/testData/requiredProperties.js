module.exports = {
    data: {
        "a": 1,
        "b": 2
    },
    schema: {
        "type": "object",
        "required": ["things", "stuff"],
        "additionalProperties": true,
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