for (let i = 0; i <=100; i++){
    let n = i;
    if ( (i % 3 == 0) && (i % 5 == 0) ) {
        n = 'FuzzBuzz';
    } else if ( i % 3 == 0 ){
        n = 'Fuzz';
    } else if ( i % 5 == 0 ){
        n = 'Buzz';
    }
    //console.log(n);
}