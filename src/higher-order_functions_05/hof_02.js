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
        if (person == undefined){
            return 0;
        }
        return person.died - person.born;
    }
    afj.forEach( (item) => {
       let averageAge = lifeYear( byName[item.mother] ) - lifeYear(item);
       averageAge = (averageAge > 0) ? averageAge : averageAge * -1;
       ages.push( averageAge );
    })
    return average(ages);
}
console.log(motherAge(afj));