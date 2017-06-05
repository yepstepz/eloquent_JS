let arrays = [[1, 2, 3], [4, 5], [6]];
function combine(arrays) {
    let sum = [];
    return arrays.reduce(function (a, cur) {
        sum = a.concat(cur);
        return sum;
    })
}
combine(arrays);