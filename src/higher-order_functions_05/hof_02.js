let af = require('./hof_data.js');
let afj = JSON.parse(af);
function average(array){
    function plus(a,b){
        return a+b;
    }
    return array.reduce(plus) / array.length;
}
let byName = {};
afj.forEach( (item) => byName[item.name] = item );
function motherAge(afj){
    let ages = [];
    function lifeYear( person ){
        return person.born;
    }
    afj.forEach( (item) => {
        if (byName[item.mother] == undefined){
            return;
        }
       let averageAge = lifeYear( byName[item.mother] ) - lifeYear(item);
       averageAge = (averageAge > 0) ? averageAge : averageAge * -1;
       ages.push( averageAge );
    })
    return average(ages);
}
motherAge(afj);