function range(start, finish, customStep){
    let nums = [];
    if (customStep == undefined){
        customStep = 1;
    }
    if (customStep > 0){
        for (let i = start; i<=finish; i+=customStep){
            nums.push(i);
        }
    } else {
        for (let i = start; i>=finish; i+=customStep){
            nums.push(i);
        }
    }
    return nums;
}
function sum( array ){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}