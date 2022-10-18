function getAcceleration(obj) {
    if (obj.hasOwnProperty("f") && obj.hasOwnProperty("m")) {
        return obj.f / obj.m;
    } else if (obj.hasOwnProperty("Δv") && obj.hasOwnProperty("Δt")) {
        return obj.Δv / obj.Δt;
    } else if (obj.hasOwnProperty("d") && obj.hasOwnProperty("t")) {
        return (obj.d * 2) / (obj.t * obj.t);
    } else {
        return "impossible";
    }
}
