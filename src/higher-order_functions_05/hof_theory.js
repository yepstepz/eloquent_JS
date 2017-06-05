let af = require('./hof_data.js');
function logEach(array){
    for (let i = 0; i<array.length; i++){
        console.log(array[i]);
    }
}
function forEach(array, action){
    for (let i = 0; i<array.length; i++){
        action(array[i]);
    }
}
let sum = 0;
forEach([1,2,3,4,5],function(item){
    sum += item;
});
function greaterThan(n){
    return function(m){
        return m>n;
    }
}
let greater10 = greaterThan(10);
greater10(15);
function noisy(f){
    return function(arg){
        console.log('calling with arguments', arg);
        let val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    }
}
function repeat(times, body){
    for (let i = 0; i< times; i++) body(i);
}
function unless(test, then){
    if (!test) then();
}
repeat(10, function(n){
    unless(n%2, function(){
        //console.log(n + ' is even!');
    })
})
function transparentWrapping(f) {
    return function() {
        return f.apply(null, arguments);
    };
}
let afj = JSON.parse(af);
function filter(array, test){
    let passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}
let affilter = filter(afj, function(item){
        if (item.born > 1900 && item.born < 1925) return item;
});
let afdied = filter(afj, function(item){
    if (item.died - item.born > 90) return item;
});
function map(array, transform){
    let mapped = [];
    for (let i = 0; i < array.length; i++){
        mapped.push(transform(array[i]));
    }
    return mapped;
}
map(affilter, function(item){
    return item.name;
});
map(afdied, function(item){
    return item.name;
});
function reduce(array, combine, start){
    let current = start;
    for (let i = 0; i < array.length; i++){
       current = combine(current, array[i]);
    }
    return current;
}
reduce([1,2,3], function(a, b){
    return a + b;
}, 0);
afj.reduce(function(min, cur){
    return min.born < cur.born ? min : cur;
});
function average(array){
    function plus(a, b){ return a + b };
    return array.reduce(plus) / array.length;
}
function age(p){
    return p.died - p.born;
}
function male(p){
    return p.sex == 'm';
}
function female(p){
    return p.sex == 'f';
}
average(afj.filter(male).map(age));
average(afj.filter(female).map(age));
let byName = {};
afj.forEach(function(person){
    byName[person.name] = person;
})
function reduceFamilyTree(person, f, defaultValue){
    function valueFor(person){
        if (person == null){
            return defaultValue;
        } else {
            return f(person, valueFor(byName[person.mother]),
                             valueFor(byName[person.father]))
        }
    }
    return valueFor(person);
}
let ph = byName["Philibert Haverbeke"];
function sharedDNA(person, mother, father){
    if (person.name == "Pauwels van Haverbeke")
        return 1
    else
        return (mother + father) / 2;
}
reduceFamilyTree(ph, sharedDNA, 0)/4;
function countAncestors(person, test) {
    function combine(person, fromMother, fromFather) {
        var thisOneCounts = test(person);
        return fromMother + fromFather + (thisOneCounts ? 1 : 0);
    }
    return reduceFamilyTree(person, combine, 0);
}
function longLivingPercentage(person){
    var all = countAncestors(person, function(person) {
        return true;
    });
    var longLiving = countAncestors(person, function(person) {
        return (person.died - person.born) >= 70;
    });
    return longLiving / all;
}
longLivingPercentage(byName["Emile Haverbeke"]);
let old = map(afdied, function(item){
    return item.name;
});
byName['Emile Haverbeke'];
function isInSet(set, person){
    return set.indexOf(person.name) > -1;
}
//console.log(afj.filter( (person) => isInSet(old, person) ));
afj.filter( isInSet.bind(null, old) ) ;