let desk = 8; //+prompt('Введите размер доски, например, для 8x8:', 8);
let n = '';
for (let i = 1; i < desk; i++) {
    for (let j = 1; j < desk; j++) {
        if ( (i + j) % 2 == 0){
            n += '#';
        } else {
            n += ' ';
        }
    }
    n += '\n';
}
//console.log(n);