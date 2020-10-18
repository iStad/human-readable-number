module.exports = function toReadable (number) {
    const HUMAN_READABLE_NUMBER = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    };
    if ((number.toString().length === 1) ||
    (number.toString().length === 2 && number.toString()[0] == 1)) {
        return HUMAN_READABLE_NUMBER[number.toString()];
    } else if (number.toString().length === 2 && number.toString()[0] !== 1 && number.toString()[1] == 0) {
        return `${HUMAN_READABLE_NUMBER[number.toString()[0] * 10]}`;
    } else if (number.toString().length === 2 && number.toString()[0] !== 1) {
        return `${HUMAN_READABLE_NUMBER[number.toString()[0] * 10]} ${HUMAN_READABLE_NUMBER[number.toString()[1]]}`;
    } else if (number.toString().length === 3 && number.toString()[1] == 0 && number.toString()[2] == 0) {
        return `${HUMAN_READABLE_NUMBER[number.toString()[0]]} hundred`;
    } else if (number.toString().length === 3 && number.toString()[1] == 0) {
        return `${HUMAN_READABLE_NUMBER[number.toString()[0]]} hundred ${HUMAN_READABLE_NUMBER[number.toString()[2]]}`;
    } else if (number.toString().length === 3 && number.toString()[1] == 1) {
        return `${HUMAN_READABLE_NUMBER[number.toString()[0]]} hundred ${HUMAN_READABLE_NUMBER[number.toString()[1] + number.toString()[2]]}`;
    } else if (number.toString().length === 3 && number.toString()[1] > 1 && number.toString()[2] == 0) {
        return `${HUMAN_READABLE_NUMBER[number.toString()[0]]} hundred ${HUMAN_READABLE_NUMBER[number.toString()[1] * 10]}`;
    } else {
        return `${HUMAN_READABLE_NUMBER[number.toString()[0]]} hundred ${HUMAN_READABLE_NUMBER[number.toString()[1] * 10]} ${HUMAN_READABLE_NUMBER[number.toString()[2]]}`;
    };
};