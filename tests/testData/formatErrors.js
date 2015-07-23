module.exports = {
    data: {
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "e": "¯\\_(ツ)_/¯"
    },
    schema: {
        "type": "object",
        "properties": {
            "a": {
                "type": "string",
                "format": "email"
            },
            "b": {
                "type": "string",
                "format": "ipv4"
            },
            "c": {
                "type": "string",
                "format": "date-time"
            },
            "d": {
                "type": "string",
                "format": "ipv6"
            },
            "e": {
                "type": "string",
                "format": "uri"
            }
        }
    }
};