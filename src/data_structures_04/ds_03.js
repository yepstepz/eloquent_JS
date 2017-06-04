function prepend(value, object){
    return {
        value: value,
        rest: object
    };
}
function nth(list, number){
    if (!list){
        return undefined;
    }
    if (number == 0){
        return list.value;
    }
    return nth(list.rest, number - 1);
}
function arrayToList(array){
    let list = prepend( array[array.length - 1], null );
    for ( let i = array.length - 2; i>=0; i--) {
        let oldList = list;
        list = prepend(array[i], oldList);
    }
    return list;
}
function listToArray( obj ){
    let arr = [];
    let object = obj;
    while (object != null){
        arr.push(object.value);
        object = object.rest;
    }
    return arr;
}