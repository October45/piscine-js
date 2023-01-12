function sums(n) {
    if (n < 2) return [];
    var partitions = [],
        current = [];

    function addPartition() {
        partitions.push(current.slice());
    }

    function findPartitions(start, remaining) {
        if (remaining === 0) {
            addPartition();
        } else {
            for (var i = start; i <= remaining; i++) {
                current.push(i);
                findPartitions(i, remaining - i);
                current.pop();
            }
        }
    }

    findPartitions(1, n);

    return partitions.slice(0, -1);
}
