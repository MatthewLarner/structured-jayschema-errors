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
    }
};