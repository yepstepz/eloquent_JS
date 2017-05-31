function power(number, expo) {
    if (expo == 0) {
        return 1;
    }
    return number * power(number, expo - 1);
}
function find_solution(number) {
    function find(target, history) {
        if (number == target) {
            return history;
        }
        if (number < target) {
            return null;
        }
        return find(target * 3, history + ' * 3') ||
            find(target + 5, history + ' + 5');
    }

    return 'Для числа ' + number + ': ' + find(1, '1');
}
function zeroPad(number, width){
    number = String(number);
    if( number.length < width ){
        while( number.length < width ){
            number = '0' + number;
        }
    }
    return number;

}

function printFarm(cows, chickens, pigs) {
    console.log(zeroPad(cows, 3) + " Коров");
    console.log(zeroPad(chickens, 3) + " Куриц");
    console.log(zeroPad(pigs, 3) + " Свиней");
}
