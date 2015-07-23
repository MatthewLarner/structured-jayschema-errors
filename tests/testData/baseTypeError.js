module.exports = {
    data: [
        {
            "things": "notOkay",
            "stuff": 2
        }
    ],
    schema: {
        "type": "object",
        "required": ["things", "stuff"],
        "additionalProperties": true,
        "isEntity": true,
        "properties": {
            "things": {
                "type": "string",
                "enum": ["okay", "acceptable"]
            },
            "stuff": {
                "type": "number"
            }
        }
    }
};