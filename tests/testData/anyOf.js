module.exports = {
    data: {
        c: 'foo'
    },
    schema: {
        "type": "object",
        "anyOf": [
            {"required": ["a"]},
            {"required": ["b"]}
        ],
        "properties": {
            "a": {
                "type": "string"
            },
            "b": {
                "type": "string"
            },
            "c": {
                "type": "string"
            }
        }
    }
};