function reverseArray( array ){
    let newarr = [];
    for ( let i = array.length-1; i >=0; i--){
        newarr.push(array[i]);
    }
    return newarr;
}
function reverseArrayInPlace( array ){
    for (let i = 0; i < array.length / 2; i++){
        let old = array[i];
        array[i] = array[ array.length - 1 - i];
        array[ array.length - 1 - i] = old;

    }
}