function blockChain(data, prev) {
    if (prev == null) {
        prev = { index: 0, hash: "0" };
    }
    return {
        index: prev.index + 1,
        hash: hashCode(
            (prev.index + 1).toString() + prev.hash + JSON.stringify(data)
        ),
        data: data,
        prev: prev,
        chain: function (data) {
            return blockChain(data, this);
        },
    };
}
