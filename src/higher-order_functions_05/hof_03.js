let af = require('./hof_data.js');
let afj = JSON.parse(af);
function average(array){
    function plus(a,b){
        return a+b;
    }
    return array.reduce(plus)/array.length;
}
function ageAverage(array){
    function midLength(person){
        return person.died - person.born;
    }
    function ifCentury(person, century){
        return Math.ceil(person.died / 100) == century;
    }
    let persons = {};
    array.forEach( (item) => {
        let century = Math.ceil(item.died / 100);
        persons[century] = average(afj.filter( (person) => ifCentury(person, century) ).map(midLength));
    });
    return persons;
}
function midLength(person){
    return person.died - person.born;
}
function groupBy(array, f){
    let groupped = {};
    array.forEach( (item) => {
        let by = f(item);
        groupped[by] = array.filter( (item) => {return f(item) == by} );
    });
    return groupped;
}
ageAverage(afj);
let byCentury = groupBy(afj, function(person){
    return Math.ceil(person.died / 100);
});
for (let century in byCentury){
    byCentury[century] = average(byCentury[century].map(midLength));
}