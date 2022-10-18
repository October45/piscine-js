function first(input) {
    return input[0];
}

function last(input) {
    return input[input.length - 1];
}

function kiss(input) {
    return [last(input), first(input)];
}
