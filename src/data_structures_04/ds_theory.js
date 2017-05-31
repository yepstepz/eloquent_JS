let fulljournal = require('./ds_data.js');
let journal = [];
function addEntry(events, didITurnIntoASquirrel){
    journal.push({
        day: events,
        didITurnIntoASquirrel: didITurnIntoASquirrel
    })
}
addEntry(["работа", "тронул дерево", "пицца", "пробежка", "телевизор"], false);
addEntry(["работа", "мороженое", "цветная капуста", "лазанья", "тронул дерево", "почистил зубы"], false);
addEntry(["выходной", "велик", "перерыв", "арахис", "пивасик"], true);
console.log(journal);
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}
console.log(fulljournal);