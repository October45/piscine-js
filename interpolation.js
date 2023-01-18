// Create a function named interpolation that takes an object with 5 properties: step, start, end, callback and duration.

// This function must interpolate points from the start position to the end position (not including the end position). The number of points depends on the number of steps.

// For each interpolation point, you must call the callback function with an array of the two points [x, y]:

// x: distance
// y: point
// There should be a delay between each callback invocation of duration / step, so that the final call happens after duration.

function interpolation({
    step = 0,
    start = 0,
    end = 0,
    callback = () => {},
    duration = 0,
} = {}) {
    const delta = (end - start) / step;
    let current = start;
    let i = 0;
    const timer = setInterval(() => {
        if (i < step) {
            callback([current, (duration / step) * (i + 1)]);
            current += delta;
            i++;
        } else {
            clearInterval(timer);
        }
    }, duration / step);
}
