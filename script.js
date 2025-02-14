var isDate = function(input) {
    if (Object.prototype.toString.call(input) === '[object Date]') {
        return true;
    }

    if (typeof input !== 'string') {
        return false;
    }

    var timestamp = Date.parse(input);

    return isNaN(timestamp) === false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
