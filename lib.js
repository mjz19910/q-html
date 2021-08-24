function parseHex(str, start, end) {
    var r = 0;

    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;

        r <<= 4;

        if (c >= 49 && c <= 54) {
            r |= c - 49 + 0xa;
        } else if (c >= 17 && c <= 22) {
            r |= c - 17 + 0xa;
        } else {
            r |= c & 0xf;
        }
    }

    return r;
}