let fulljournal = require('./ds_data.js');
let journal = [];
function addEntry(events, didITurnIntoASquirrel) {
    journal.push({
        day: events,
        didITurnIntoASquirrel: didITurnIntoASquirrel
    })
}
addEntry(["работа", "тронул дерево", "пицца", "пробежка", "телевизор"], false);
addEntry(["работа", "мороженое", "цветная капуста", "лазанья", "тронул дерево", "почистил зубы"], false);
addEntry(["выходной", "велик", "перерыв", "арахис", "пивасик"], true);
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}
function existIn(array, item) {
    return array.indexOf(item) == -1 ? false : true;
}
function countEntries(fullJournal, entry) {
    let table = [0, 0, 0, 0]; // ff, tf, ft, tt
    for (let post in fullJournal) {
        let index = 0;
        if (existIn(fullJournal[post].events, entry)) index += 2;
        if (fullJournal[post].squirrel) index += 1;
        table[index] += 1;
    }
    return table;
}
function allDeals(fulljournal) {
    let list = new Set([]);
    for (let post in fulljournal) {
        for (let i = 0; i < fulljournal[post].events.length; i++) {
            list.add(fulljournal[post].events[i]);
        }
    }
    return list;
}
function allPhi(fulljournal, list) {
    list = [...list];
    let phies = {};
    for (let i = 0; i < list.length; i++) {
        phies[list[i]] = phi(countEntries(fulljournal, list[i]));
    }
    return phies;
}
for (let post in fulljournal) {
    if (existIn(fulljournal[post].events, 'peanuts') &&
        !existIn(fulljournal[post].events, 'brushed teeth')) {
        fulljournal[post].events.push('peanuts but not brushed teeth');
    }
}
let phies = allPhi(fulljournal, allDeals(fulljournal));
for (let phi in phies) {
    if (phies[phi] > 0.1 || phies[phi] < -0.1) {
        //console.log(phi + ':' + phies[phi]);
    }
}