function deepEqual(ent1, ent2){
    if (ent1 === ent2) return true;
    if ( ent1 == null || typeof(ent1) != 'object' ||
         ent2 == null || typeof(ent2) != 'object'){
        return false;
    }
    let prop1 = 0;
    let prop2 = 0;
    for (let prop in ent1){
        prop1++;
    }
    for (let prop in ent2){
        prop2++;
        if ( !(prop in ent1) ||
             !deepEqual(ent1[prop], ent2[prop])){
            return false;
        }
    }
    return prop1 == prop2;
}
var obj = {here: {is: "an"}, object: 2};