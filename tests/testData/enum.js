module.exports = {
    data: {
        "things": "notOkay"
    },
    schema: {
        "type": "object",
        "required": ["things"],
        "additionalProperties": true,
        "isEntity": true,
        "properties": {
            "things": {
                "type": "string",
                "enum": ["okay", "acceptable"]
            }
        },
        "minItems": 1,
        "maxItems": 1
    }
};