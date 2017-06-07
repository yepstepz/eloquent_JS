function every(array, f){
    for (let i=0; i<array.length; i++){
        console.log();
        if( !f(array[i]) ){
            return false;
        }
    }
    return true;
}
function some(array, f){
    for (let i=0; i<array.length; i++){
        if( f(array[i]) ){
            return true;
        }
    }
    return false;
}