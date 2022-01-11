module.exports = function reverse(n) {
    let strReverse = String(Math.abs(n));
    let result = "";
    for (i = 0; i < strReverse.length; i++) {
        result = `${strReverse[i]}${result}`;
    }
    return Number(result);
};
